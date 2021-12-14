import Path from "path";

import AWS from "@cdktf/provider-aws";
import Random from "@cdktf/provider-random";

import { Construct } from "constructs";

import { App, TerraformStack, TerraformAsset, AssetType, TerraformOutput } from "cdktf";

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
                "Service": "lambda.amazon.aws.com"
            },
            "Effect": "Allow",
            "Sid": ""
        }
    ]
};

class LambdaStack extends TerraformStack {
    constructor(scope: Construct, name: string, config: LambdaFunctionConfig) {
        super(scope, name);

        new AWS.AwsProvider(this, "AWS-Provider-ID", {
            region: "us-west-2"
        });

        // Create random value
        const pet = new Random.Pet(this, "Random-Pet-Name", {
            length: 2
        });

        // Create Lambda executable
        const asset = new TerraformAsset(this, "AWS-Lambda-Function-Asset", {
            path: Path.resolve(__dirname, config.path),
            type: AssetType.ARCHIVE // if left empty it infers directory and file
        });

        // Create unique S3 bucket that hosts Lambda executable
        const bucket = new AWS.s3.S3Bucket(this, "AWS-S3-Resource", {
            bucketPrefix: `learn-cdktf-${ name }`
        });

        // Upload Lambda zip file to newly created S3 bucket
        const lambdaArchive = new AWS.s3.S3BucketObject(this, "AWS-Lambda-Function-Archive-File", {
            bucket: bucket.bucket,
            key: `${ config.version }/${ asset.fileName }`,
            source: asset.path // returns a posix path
        });

        // Create Lambda role
        const role = new AWS.iam.IamRole(this, "AWS-Lambda-IAM-Execution-Role-Permissions", {
            name: `learn-cdktf-${ name }-${ pet.id }`,
            assumeRolePolicy: JSON.stringify(lambdaRolePolicy)
        });

        // Add execution role for lambda to write to CloudWatch logs
        new AWS.iam.IamRolePolicyAttachment(this, "AWS-Lambda-IAM-Managed-Policy-Service-Role", {
            policyArn: "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole",
            role: role.name
        });

        // Create Lambda function
        const lambda = new AWS.lambdafunction.LambdaFunction(this, "AWS-Lambda-Function", {
            functionName: `learn-cdktf-${ name }-${ pet.id }`,
            s3Bucket: bucket.bucket,
            s3Key: lambdaArchive.key,
            handler: config.handler,
            runtime: config.runtime,
            role: role.arn
        });

        // Create and configure API gateway
        const api = new AWS.apigatewayv2.Apigatewayv2Api(this, "AWS-API-Gateway-Version-2", {
            name: name,
            protocolType: "HTTP",
            target: lambda.arn
        });

        new AWS.lambdafunction.LambdaPermission(this, "AWS-API-Gateway-Lambda-Function-Invocation-Permission", {
            functionName: lambda.functionName,
            action: "lambda:InvokeFunction",
            principal: "apigateway.amazonAWS.com",
            sourceArn: `${ api.executionArn }/*/*`
        });

        new TerraformOutput(this, "TF-Output-API-Gateway-URL", {
            value: api.apiEndpoint
        });

    }
}

const app = new App({
    outdir: Path.relative(".", "distribution"),
    skipValidation: false,
    stackTraces: true
});

new LambdaStack(app, "lambda-hello-world", {
    path: "../lambda-hello-world/dist",
    handler: "index.handler",
    runtime: "nodejs14.x",
    stageName: "hello-world",
    version: "v0.0.2"
});

new LambdaStack(app, "lambda-hello-name", {
    path: "../lambda-hello-name/dist",
    handler: "index.handler",
    runtime: "nodejs10.x",
    stageName: "hello-name",
    version: "v0.0.1"
});

app.synth();