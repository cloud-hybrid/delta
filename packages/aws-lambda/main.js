/***
 * @author      Jacob B. Sanders
 * @package     @cloud-technology
 * @summary     Module Exportable
 *
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
 */
import FS from "fs";
import Path from "path";
import Module from "module";
import AWS from "@cdktf/provider-aws";
import { App, TerraformStack, TerraformAsset, AssetType, TerraformOutput, } from "cdktf";
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
const URI = () => Path.normalize(import.meta.url).replace("file" + ":", "");
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
const Provider = (instance) => {
    new AWS.AwsProvider(instance, "AWS-Provider-ID", {
        region: "us-east-2",
    });
};
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
    constructor(scope, name, config) {
        super(scope, name);
        this.attributes = () => {
            return this.Attributes;
        };
        Provider(this);
        // Create Lambda executable
        const asset = new TerraformAsset(this, "AWS-Lambda-Function-Asset", {
            path: Path.resolve(CWD, config.path),
            type: AssetType.ARCHIVE, // if left empty it infers directory and file
        });
        // Create unique S3 bucket that hosts Lambda executable
        const bucket = new AWS.s3.S3Bucket(this, "AWS-S3-Resource", {
            bucketPrefix: `learn-cdktf-${name}`,
        });
        // Upload Lambda zip file to newly created S3 bucket
        const lambdaArchive = new AWS.s3.S3BucketObject(this, "AWS-Lambda-Function-Archive-File", {
            bucket: bucket.bucket,
            key: `${config.version}/${asset.fileName}`,
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
            functionName: "AWS-CDK-Lambda-Function" + name,
            s3Bucket: bucket.bucket,
            s3Key: lambdaArchive.key,
            handler: config.handler,
            runtime: config.runtime,
            role: role.arn,
        });
        // Create and configure API gateway
        const API = new AWS.apigatewayv2.Apigatewayv2Api(this, "AWS-API-Gateway-Version-2", {
            name: "test-gateway",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7R0FPRztBQUdILE9BQU8sRUFBRSxNQUFNLElBQUksQ0FBQztBQUNwQixPQUFPLElBQUksTUFBTSxNQUFNLENBQUM7QUFDeEIsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBRzVCLE9BQU8sR0FBRyxNQUFNLHFCQUFxQixDQUFDO0FBSXRDLE9BQU8sRUFDSCxHQUFHLEVBQ0gsY0FBYyxFQUNkLGNBQWMsRUFDZCxTQUFTLEVBQ1QsZUFBZSxHQUNsQixNQUFNLE9BQU8sQ0FBQztBQVFmOzs7Ozs7Ozs7Ozs7R0FZRztBQUVILE1BQU0sR0FBRyxHQUFHLEdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNwRixNQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDNUMsTUFBTSxHQUFHLEdBQUcsU0FBUyxFQUFFLENBQUM7QUFFeEI7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUVILE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUUzQyxNQUFNLFFBQVEsR0FBRyxDQUFDLFFBQXdCLEVBQUUsRUFBRTtJQUMxQyxJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLGlCQUFpQixFQUFFO1FBQzdDLE1BQU0sRUFBRSxXQUFXO0tBQ3RCLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQztBQVVGLE1BQU0sZ0JBQWdCLEdBQUc7SUFDckIsU0FBUyxFQUFFLFlBQVk7SUFDdkIsV0FBVyxFQUFFO1FBQ1Q7WUFDSSxRQUFRLEVBQUUsZ0JBQWdCO1lB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