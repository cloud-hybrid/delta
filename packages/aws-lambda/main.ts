/***
 * @author      Jacob B. Sanders
 * @package     @cloud-technology
 * @summary     Module Exportable
 *
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
 */

import { ApiGatewayV2 } from "aws-sdk";
import { IamRole } from "aws-sdk/clients/ssm.js";
import FS from "fs";
import Path from "path";
import Module from "module";
import Process from "process";

import { default as Gateway } from "./packages/API-Gateway.js";

import AWS from "@cdktf/provider-aws";

import { Construct } from "constructs";

import * as Globals from "./Settings.json";

import {
    App,
    TerraformStack,
    TerraformAsset,
    AssetType,
    TerraformOutput, ITerraformDependable, TerraformResourceLifecycle, TerraformProvider, IResolvable,
} from "cdktf";

import { LambdaFunction } from "@cdktf/provider-aws/lib/lambdafunction";
import { LambdaPermission } from "@cdktf/provider-aws/lib/lambdafunction";
import { Apigatewayv2Api } from "@cdktf/provider-aws/lib/apigatewayv2/apigatewayv2-api.js";
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
    version: string
}

const lambdaRolePolicy = {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": "sts:AssumeRole",
            "Principal": {
                "Service": "lambda.amazonaws.com",
            },
            "Effect": "Allow",
            "Sid": "",
        },
    ],
};
//
//const Endpoint = (integration: string = "lambda") => {
//    /// https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html
//    /// https://github.com/awsdocs/amazon-api-gateway-developer-guide/tree/main/cloudformation-templates
//
//    class Configuration implements Apigatewayv2IntegrationConfig {
//        public readonly apiId: string;
//        public readonly connectionId: string;
//        public readonly connectionType: string;
//        public readonly contentHandlingStrategy: string;
//        public readonly count: number | IResolvable;
//        public readonly credentialsArn: string;
//        public readonly dependsOn: ITerraformDependable[];
//        public readonly description: string;
//        public readonly integrationMethod: string;
//        public readonly integrationSubtype: string;
//        public readonly integrationType: string;
//        public readonly integrationUri: string;
//        public readonly lifecycle: TerraformResourceLifecycle;
//        public readonly passthroughBehavior: string;
//        public readonly payloadFormatVersion: string;
//        public readonly provider: TerraformProvider;
//        public readonly requestParameters: { [p: string]: string } | IResolvable;
//        public readonly requestTemplates: { [p: string]: string } | IResolvable;
//        public readonly responseParameters: Apigatewayv2IntegrationResponseParameters[];
//        public readonly templateSelectionExpression: string;
//        public readonly timeoutMilliseconds: number;
//        public readonly tlsConfig: Apigatewayv2IntegrationTlsConfig;
//
//        constructor(api: Gateway, lambda: LambdaFunction, description: string, dependencies: ITerraformDependable[]) {
//            this.dependsOn = dependencies;
//            this.apiId = api.gateway.id;
//            this.description = description;
//            this.integrationUri = lambda.this.integrationType = "HTTP_PROXY";
//            this.integrationMethod = "ANY";
//            this.payloadFormatVersion = "2.0";
//            this.requestParameters = {
//                "append:header.X-CDK-Test-Request-Header": "TRUE",
//            };
//            this.requestParameters = JSON.parse(JSON.stringify({
//                "200": {
//                    "ResponseParameters": [
//                        {
//                            "Destination": "append:header.X-CDK-Test-Response-Header",
//                            "Source": "TRUE",
//                        },
//                    ],
//                },
//            }));
//        }
//    }
//
//    configuration.integrationType = "AWS_PROXY";
//
//    const $ = {
//        filename: configuration.,
//        function: null,
//        role: null,
//        handler: "index.handler",
//        runtime: Globals.Runtime,
//    };
//
//
//};

//class Endpoint extends Apigatewayv2Integration {
//    constructor(scope: Construct, name: string, configuration: Apigatewayv2IntegrationConfig) {
//        super(scope, name, configuration);
//    }
//}

class Stack extends TerraformStack {
    constructor(scope: Construct, name: string, lambdas: { Name: string; Directory: string; Version: any; }[]) {
        super(scope, name);

        Provider(this);

        const Lambdas = lambdas.map((Lambda) => {
            const role = new AWS.iam.IamRole(this, ["API-Role", Lambda.Name].join("-"), {
                name: ["Test-CDK-Role", Lambda.Name].join("-"),
                assumeRolePolicy: JSON.stringify(lambdaRolePolicy),
            });

            // Create Lambda executable
            const asset = new TerraformAsset(this, ["AWS-Lambda-Function-Asset", Lambda.Name].join("-"), {
                path: Path.resolve(CWD, Lambda.Directory),
                type: AssetType.ARCHIVE, // if left empty it infers directory and file
            });

            // Create unique S3 bucket that hosts Lambda executable
            const bucket = new AWS.s3.S3Bucket(this, ["AWS-S3-Resource", Lambda.Name].join("-"), {
                bucketPrefix: ["Test-Prefix", Lambda.Name].join("-").toLowerCase(),
            });

            // Upload Lambda zip file to newly created S3 bucket
            const lambdaArchive = new AWS.s3.S3BucketObject(this, ["AWS-Lambda-Function-Archive-File", Lambda.Name].join("-"), {
                bucket: bucket.bucket,
                key: [Lambda.Version, asset.fileName].join("/"),
                source: asset.path, // returns a posix path
            });

            // Create Lambda function
            const lambda = new AWS.lambdafunction.LambdaFunction(this, ["AWS-Lambda-Function", Lambda.Name].join("-"), {
                functionName: ["AWS-CDK-Lambda-Function", Lambda.Name].join("-"),
                s3Bucket: bucket.bucket,
                s3Key: lambdaArchive.key,
                handler: "index.handler",
                runtime: "nodejs14.x",
                role: role.arn,
            });

            const gateway = new Apigatewayv2Api(this, ["API-Gateway", Lambda.Name].join("-"), {
                name: ["API-Gateway-CDK-Test", Lambda.Name].join("-"),
                description: "...",
                protocolType: "HTTP",
                target: lambda.arn,
                /// target: "http://test-td-cdk-api-gateway-target.execute-api.us-east-2.amazonaws.com/api",
                /// target: "http://test-td-cdk-api-gateway-target.execute-api.us-east-2.amazonaws.com/api",
            });

            new AWS.lambdafunction.LambdaPermission(this, ["AWS-API-Gateway-Lambda-Function-Invocation-Permission", Lambda.Name].join("-"), {
//                statementIdPrefix: ["Allow", lambda.functionName, "Invokation-ID"].join("-"),
                functionName: lambda.functionName,
                action: "lambda:InvokeFunction",
                principal: "apigateway.amazonaws.com",
                /// The /*/*/* part allows invocation from any stage, method and resource path
                /// arn:aws:execute-api:region:account-id:api-id/stage-name/HTTP-VERB/resource-path-specifier
                /// region is the AWS region (such as us-east-1 or * for all AWS regions) that corresponds to the deployed API for the method.
                //  account-id is the 12-digit AWS account Id of the REST API owner.
                //  api-id is the identifier API Gateway has assigned to the API for the method.
                //  stage-name is the name of the stage associated with the method.
                //  HTTP-VERB is the HTTP verb for the method. It can be one of the following: GET, POST, PUT, DELETE, PATCH.
                //  resource-path-specifier is the path to the desired method.
                //  Some example resource expressions include:
                //
                //  - arn:aws:execute-api:*:*:* for any resource path in any stage, for any API in any AWS region.
                //  - arn:aws:execute-api:us-east-1:*:* for any resource path in any stage, for any API in the AWS region of us-east-1.
                //  - arn:aws:execute-api:us-east-1:*:api-id/* for any resource path in any stage, for the API with the identifier of api-id in the AWS
                // region of us-east-1.
                //  - arn:aws:execute-api:us-east-1:*:api-id/test/* for resource path in the stage of test, for the API with the identifier of api-id in
                // the AWS region of us-east-1.
                /// https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-control-access-using-iam-policies-to-invoke-api.html
                sourceArn: [gateway.executionArn + "*", "*"].join("/"),
            });

            new AWS.iam.IamRolePolicyAttachment(this, ["AWS-Lambda-IAM-Managed-Policy-Service-Role", Lambda.Name].join("-"), {
                policyArn: "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole",
                role: role.name,
            });

            new TerraformOutput(this, ["AWS-API-Gateway-Invoke-Endpoint", Lambda.Name].join("-"), {
                value: gateway.apiEndpoint,
            });
        });
    }
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

const Lambdas: [any] | { Name: string; Directory: string; Version: any; }[] = [];
Packages.forEach((Lambda) => {
    if (Lambda.isDirectory()) {
        const Name = Lambda.name;

        const Directory = Path.join(CWD, "packages", Name);
        const Version = Import(Path.join(Directory, "package.json")).version;

        Lambdas.push({
            Name,
            Directory,
            Version,
        });
    }
});

const Instance = new Stack(Application, "Test-Stack-CDK", Lambdas);

Application.synth();