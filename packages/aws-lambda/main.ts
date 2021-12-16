/***
 * @author      Jacob B. Sanders
 * @package     @cloud-technology
 * @summary     Module Exportable
 *
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
 */

import { IamRole } from "aws-sdk/clients/ssm.js";
import FS from "fs";
import Path from "path";
import Module from "module";
import Process from "process";

import AWS from "@cdktf/provider-aws";

import { Construct } from "constructs";

import {
    App,
    TerraformStack,
    TerraformAsset,
    AssetType,
    TerraformOutput,
} from "cdktf";

import { LambdaFunction } from "@cdktf/provider-aws/lib/lambdafunction";
import { LambdaPermission } from "@cdktf/provider-aws/lib/lambdafunction";
import { Apigatewayv2Api } from "@cdktf/provider-aws/lib/apigatewayv2";
import { IamRolePolicyAttachment } from "@cdktf/provider-aws/lib/iam";
import { S3Bucket, S3BucketObject } from "@cdktf/provider-aws/lib/s3";

/***
 * Compatability (ESM) Replacement for `__dirname` (Common-JS)
 *
 * @type {function(): string}
 * @constructor
 *
 * @example
 *
 * const URI = () => Path.normalize(import.meta.url).replace("file" + ":", "");
 *
 * >>> "index.js"
 *
 */

const URI = (): string => Path.normalize(import.meta.url).replace("file" + ":", "");
const Directory = () => Path.dirname(URI());
const CWD = Directory();

/***
 * Compatability (ESM) Replacement for `require` (Common-JS)
 *
 * @type {NodeRequire}
 * @constructor
 *
 * @example
 *
 * const Import = Module.createImport(URI());
 * const Package = Import("package.json");
 *
 * >>> { "name": "@organization/example", "version": "0.0.1", "...": "..." }
 *
 */

const Import = Module.createRequire(URI());

const Provider = (instance: TerraformStack) => {
    new AWS.AwsProvider(instance, "AWS-Provider-ID", {
        region: "us-east-2",
    });
};

interface LambdaFunctionConfig {
    path: string,
    handler: string,
    runtime: string,
    stageName: string,
    version: string,
}

const lambdaRolePolicy = {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": "sts:AssumeRole",
            "Principal": {
                "Service": "lambda.amazon.aws.com",
            },
            "Effect": "Allow",
            "Sid": "",
        },
    ],
};

class Stack extends TerraformStack {
    private readonly Attributes: {
        bucket: S3Bucket;
        lambda: LambdaFunction;
        role: IamRole;
        Output: TerraformOutput;
        Permissions: {
            Policy: IamRolePolicyAttachment;
            Invocation: LambdaPermission
        };
        lambdaArchive: S3BucketObject;
        API: Apigatewayv2Api;
        asset: TerraformAsset
    };

    constructor(scope: Construct, name: string, config: LambdaFunctionConfig) {
        super(scope, name);

        Provider(this);

        // Create Lambda executable
        const asset = new TerraformAsset(this, "AWS-Lambda-Function-Asset", {
            path: Path.resolve(CWD, config.path),
            type: AssetType.ARCHIVE, // if left empty it infers directory and file
        });

        // Create unique S3 bucket that hosts Lambda executable
        const bucket = new AWS.s3.S3Bucket(this, "AWS-S3-Resource", {
            bucketPrefix: `learn-cdktf-${ name }`,
        });

        // Upload Lambda zip file to newly created S3 bucket
        const lambdaArchive = new AWS.s3.S3BucketObject(this, "AWS-Lambda-Function-Archive-File", {
            bucket: bucket.bucket,
            key: `${ config.version }/${ asset.fileName }`,
            source: asset.path, // returns a posix path
        });

        // Create Lambda role
        const role = new AWS.iam.IamRole(this, "AWS-Lambda-IAM-Execution-Role-Permissions", {
            name: "Test-CDK-Role",
            assumeRolePolicy: JSON.stringify(lambdaRolePolicy),
        });

        // Add execution role for lambda to write to CloudWatch logs
//        new AWS.iam.IamRolePolicyAttachment(this, "AWS-Lambda-IAM-Managed-Policy-Service-Role", {
//            policyArn: "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole",
//            role: role.name,
//        });

        // Create Lambda function
        const lambda = new AWS.lambdafunction.LambdaFunction(this, "AWS-Lambda-Function", {
            functionName: "AWS-CDK-Lambda-Function",
            s3Bucket: bucket.bucket,
            s3Key: lambdaArchive.key,
            handler: config.handler,
            runtime: config.runtime,
            role: role.arn,
        });

        // Create and configure API gateway
        const API = new AWS.apigatewayv2.Apigatewayv2Api(this, "AWS-API-Gateway-Version-2", {
            name: name,
            protocolType: "HTTP",
            target: lambda.arn,
        });

        const Permissions = {
            Invocation: new AWS.lambdafunction.LambdaPermission(this, "AWS-API-Gateway-Lambda-Function-Invocation-Permission", {
                functionName: lambda.functionName,
                action: "lambda:InvokeFunction",
                principal: "apigateway.amazonAWS.com",
                sourceArn: API.executionArn + "/*/*",
            }),

            Policy: new AWS.iam.IamRolePolicyAttachment(this, "AWS-Lambda-IAM-Managed-Policy-Service-Role", {
                policyArn: "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole",
                role: role.name,
            }),
        };

        const Output = new TerraformOutput(this, "TF-Output-API-Gateway-URL", {
            value: {
                API,
                Permissions,
            },
        });

        this.Attributes = {
            asset,
            bucket,
            lambdaArchive,
            role: role.name,
            lambda,
            API,
            Permissions,
            Output,
        };
    }

    attributes = () => {
        return this.Attributes;
    };
}

const Application = new App({
    outdir: Path.relative(".", "distribution"),
    skipValidation: false,
    stackTraces: true,
});

const Packages = FS.readdirSync(Path.join(CWD, "packages"), {
    withFileTypes: true,
    encoding: "utf-8",
});

Packages.forEach((Lambda) => {
    const Directory = Path.join(CWD, "packages", Lambda.name);
    const Version = Import(Path.join(Directory, "package.json")).version;

    console.log(Version);

    const $ = new Stack(Application, Lambda.name, {
        path: Directory,
        handler: "index.handler",
        runtime: "nodejs14.x",
        stageName: "hello-world",
        version: Version,
    });

    console.log($.attributes());
});

Application.synth();