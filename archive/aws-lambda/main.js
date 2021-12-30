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
import { Apigatewayv2Api } from "@cdktf/provider-aws/lib/apigatewayv2/apigatewayv2-api.js";
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
    constructor(scope, name, lambdas) {
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
const Lambdas = [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7R0FPRztBQUlILE9BQU8sRUFBRSxNQUFNLElBQUksQ0FBQztBQUNwQixPQUFPLElBQUksTUFBTSxNQUFNLENBQUM7QUFDeEIsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBSzVCLE9BQU8sR0FBRyxNQUFNLHFCQUFxQixDQUFDO0FBTXRDLE9BQU8sRUFDSCxHQUFHLEVBQ0gsY0FBYyxFQUNkLGNBQWMsRUFDZCxTQUFTLEVBQ1QsZUFBZSxHQUNsQixNQUFNLE9BQU8sQ0FBQztBQUlmLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUkzRjs7Ozs7Ozs7Ozs7O0dBWUc7QUFFSCxNQUFNLEdBQUcsR0FBRyxHQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDcEYsTUFBTSxTQUFTLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQzVDLE1BQU0sR0FBRyxHQUFHLFNBQVMsRUFBRSxDQUFDO0FBRXhCOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFFSCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFFM0MsTUFBTSxRQUFRLEdBQUcsQ0FBQyxRQUF3QixFQUFFLEVBQUU7SUFDMUMsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRTtRQUM3QyxNQUFNLEVBQUUsV0FBVztLQUN0QixDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFTRixNQUFNLGdCQUFnQixHQUFHO0lBQ3JCLFNBQVMsRUFBRSxZQUFZO0lB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