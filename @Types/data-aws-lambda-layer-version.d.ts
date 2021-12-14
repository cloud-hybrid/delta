import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Lambda
*/
export interface DataAwsLambdaLayerVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version.html#compatible_architecture DataAwsLambdaLayerVersion#compatible_architecture}
    */
    readonly compatibleArchitecture?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version.html#compatible_runtime DataAwsLambdaLayerVersion#compatible_runtime}
    */
    readonly compatibleRuntime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version.html#layer_name DataAwsLambdaLayerVersion#layer_name}
    */
    readonly layerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version.html#version DataAwsLambdaLayerVersion#version}
    */
    readonly version?: number;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version.html aws_lambda_layer_version}
*/
export declare class DataAwsLambdaLayerVersion extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version.html aws_lambda_layer_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLambdaLayerVersionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsLambdaLayerVersionConfig);
    get arn(): string;
    private _compatibleArchitecture?;
    get compatibleArchitecture(): string;
    set compatibleArchitecture(value: string);
    resetCompatibleArchitecture(): void;
    get compatibleArchitectureInput(): string;
    get compatibleArchitectures(): string[];
    private _compatibleRuntime?;
    get compatibleRuntime(): string;
    set compatibleRuntime(value: string);
    resetCompatibleRuntime(): void;
    get compatibleRuntimeInput(): string;
    get compatibleRuntimes(): string[];
    get createdDate(): string;
    get description(): string;
    get id(): string;
    get layerArn(): string;
    private _layerName?;
    get layerName(): string;
    set layerName(value: string);
    get layerNameInput(): string;
    get licenseInfo(): string;
    get signingJobArn(): string;
    get signingProfileVersionArn(): string;
    get sourceCodeHash(): string;
    get sourceCodeSize(): number;
    private _version?;
    get version(): number;
    set version(value: number);
    resetVersion(): void;
    get versionInput(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-lambda-layer-version.d.ts.map