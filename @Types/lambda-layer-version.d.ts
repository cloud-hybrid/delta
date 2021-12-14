import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Lambda
*/
export interface LambdaLayerVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html#compatible_architectures LambdaLayerVersion#compatible_architectures}
    */
    readonly compatibleArchitectures?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html#compatible_runtimes LambdaLayerVersion#compatible_runtimes}
    */
    readonly compatibleRuntimes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html#description LambdaLayerVersion#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html#filename LambdaLayerVersion#filename}
    */
    readonly filename?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html#layer_name LambdaLayerVersion#layer_name}
    */
    readonly layerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html#license_info LambdaLayerVersion#license_info}
    */
    readonly licenseInfo?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html#s3_bucket LambdaLayerVersion#s3_bucket}
    */
    readonly s3Bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html#s3_key LambdaLayerVersion#s3_key}
    */
    readonly s3Key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html#s3_object_version LambdaLayerVersion#s3_object_version}
    */
    readonly s3ObjectVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html#skip_destroy LambdaLayerVersion#skip_destroy}
    */
    readonly skipDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html#source_code_hash LambdaLayerVersion#source_code_hash}
    */
    readonly sourceCodeHash?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html aws_lambda_layer_version}
*/
export declare class LambdaLayerVersion extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html aws_lambda_layer_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaLayerVersionConfig
    */
    constructor(scope: Construct, id: string, config: LambdaLayerVersionConfig);
    get arn(): string;
    private _compatibleArchitectures?;
    get compatibleArchitectures(): string[];
    set compatibleArchitectures(value: string[]);
    resetCompatibleArchitectures(): void;
    get compatibleArchitecturesInput(): string[];
    private _compatibleRuntimes?;
    get compatibleRuntimes(): string[];
    set compatibleRuntimes(value: string[]);
    resetCompatibleRuntimes(): void;
    get compatibleRuntimesInput(): string[];
    get createdDate(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _filename?;
    get filename(): string;
    set filename(value: string);
    resetFilename(): void;
    get filenameInput(): string;
    get id(): string;
    get layerArn(): string;
    private _layerName?;
    get layerName(): string;
    set layerName(value: string);
    get layerNameInput(): string;
    private _licenseInfo?;
    get licenseInfo(): string;
    set licenseInfo(value: string);
    resetLicenseInfo(): void;
    get licenseInfoInput(): string;
    private _s3Bucket?;
    get s3Bucket(): string;
    set s3Bucket(value: string);
    resetS3Bucket(): void;
    get s3BucketInput(): string;
    private _s3Key?;
    get s3Key(): string;
    set s3Key(value: string);
    resetS3Key(): void;
    get s3KeyInput(): string;
    private _s3ObjectVersion?;
    get s3ObjectVersion(): string;
    set s3ObjectVersion(value: string);
    resetS3ObjectVersion(): void;
    get s3ObjectVersionInput(): string;
    get signingJobArn(): string;
    get signingProfileVersionArn(): string;
    private _skipDestroy?;
    get skipDestroy(): boolean | cdktf.IResolvable;
    set skipDestroy(value: boolean | cdktf.IResolvable);
    resetSkipDestroy(): void;
    get skipDestroyInput(): boolean | cdktf.IResolvable;
    private _sourceCodeHash?;
    get sourceCodeHash(): string;
    set sourceCodeHash(value: string);
    resetSourceCodeHash(): void;
    get sourceCodeHashInput(): string;
    get sourceCodeSize(): number;
    get version(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=lambda-layer-version.d.ts.map