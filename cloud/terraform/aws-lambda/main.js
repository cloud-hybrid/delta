import Path from "path";
import AWS from "@cdktf/provider-aws";
import Random from "@cdktf/provider-random";
import { App, TerraformStack, TerraformAsset, AssetType, TerraformOutput } from "cdktf";
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
    constructor(scope, name, config) {
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
            bucketPrefix: `learn-cdktf-${name}`
        });
        // Upload Lambda zip file to newly created S3 bucket
        const lambdaArchive = new AWS.s3.S3BucketObject(this, "AWS-Lambda-Function-Archive-File", {
            bucket: bucket.bucket,
            key: `${config.version}/${asset.fileName}`,
            source: asset.path // returns a posix path
        });
        // Create Lambda role
        const role = new AWS.iam.IamRole(this, "AWS-Lambda-IAM-Execution-Role-Permissions", {
            name: `learn-cdktf-${name}-${pet.id}`,
            assumeRolePolicy: JSON.stringify(lambdaRolePolicy)
        });
        // Add execution role for lambda to write to CloudWatch logs
        new AWS.iam.IamRolePolicyAttachment(this, "AWS-Lambda-IAM-Managed-Policy-Service-Role", {
            policyArn: "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole",
            role: role.name
        });
        // Create Lambda function
        const lambda = new AWS.lambdafunction.LambdaFunction(this, "AWS-Lambda-Function", {
            functionName: `learn-cdktf-${name}-${pet.id}`,
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
            sourceArn: `${api.executionArn}/*/*`
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBRXhCLE9BQU8sR0FBRyxNQUFNLHFCQUFxQixDQUFDO0FBQ3RDLE9BQU8sTUFBTSxNQUFNLHdCQUF3QixDQUFDO0FBSTVDLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBVXhGLE1BQU0sZ0JBQWdCLEdBQUc7SUFDckIsU0FBUyxFQUFFLFlBQVk7SUFDdkIsV0FBVyxFQUFFO1FBQ1Q7WUFDSSxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRTtnQkFDVCxTQUFTLEVBQUUsdUJBQXVCO2FBQ3JDO1lBQ0QsUUFBUSxFQUFFLE9BQU87WUFDakIsS0FBSyxFQUFFLEVBQUU7U0FDWjtLQUNKO0NBQ0osQ0FBQztBQUVGLE1BQU0sV0FBWSxTQUFRLGNBQWM7SUFDcEMsWUFBWSxLQUFnQixFQUFFLElBQVksRUFBRSxNQUE0QjtRQUNwRSxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRW5CLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7WUFDekMsTUFBTSxFQUFFLFdBQVc7U0FDdEIsQ0FBQyxDQUFDO1FBRUgsc0JBQXNCO1FBQ3RCLE1BQU0sR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7WUFDaEQsTUFBTSxFQUFFLENBQUM7U0FDWixDQUFDLENBQUM7UUFFSCwyQkFBMkI7UUFDM0IsTUFBTSxLQUFLLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxFQUFFLDJCQUEyQixFQUFFO1lBQ2hFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsSUFB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