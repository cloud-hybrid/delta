import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Lambda
*/
export interface LambdaFunctionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#architectures LambdaFunction#architectures}
    */
    readonly architectures?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#code_signing_config_arn LambdaFunction#code_signing_config_arn}
    */
    readonly codeSigningConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#description LambdaFunction#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#filename LambdaFunction#filename}
    */
    readonly filename?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#function_name LambdaFunction#function_name}
    */
    readonly functionName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#handler LambdaFunction#handler}
    */
    readonly handler?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#image_uri LambdaFunction#image_uri}
    */
    readonly imageUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#kms_key_arn LambdaFunction#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#layers LambdaFunction#layers}
    */
    readonly layers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#memory_size LambdaFunction#memory_size}
    */
    readonly memorySize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#package_type LambdaFunction#package_type}
    */
    readonly packageType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#publish LambdaFunction#publish}
    */
    readonly publish?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#reserved_concurrent_executions LambdaFunction#reserved_concurrent_executions}
    */
    readonly reservedConcurrentExecutions?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#role LambdaFunction#role}
    */
    readonly role: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#runtime LambdaFunction#runtime}
    */
    readonly runtime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#s3_bucket LambdaFunction#s3_bucket}
    */
    readonly s3Bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#s3_key LambdaFunction#s3_key}
    */
    readonly s3Key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#s3_object_version LambdaFunction#s3_object_version}
    */
    readonly s3ObjectVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#source_code_hash LambdaFunction#source_code_hash}
    */
    readonly sourceCodeHash?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#tags LambdaFunction#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#tags_all LambdaFunction#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#timeout LambdaFunction#timeout}
    */
    readonly timeout?: number;
    /**
    * dead_letter_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#dead_letter_config LambdaFunction#dead_letter_config}
    */
    readonly deadLetterConfig?: LambdaFunctionDeadLetterConfig;
    /**
    * environment block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#environment LambdaFunction#environment}
    */
    readonly environment?: LambdaFunctionEnvironment;
    /**
    * file_system_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#file_system_config LambdaFunction#file_system_config}
    */
    readonly fileSystemConfig?: LambdaFunctionFileSystemConfig;
    /**
    * image_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#image_config LambdaFunction#image_config}
    */
    readonly imageConfig?: LambdaFunctionImageConfig;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#timeouts LambdaFunction#timeouts}
    */
    readonly timeouts?: LambdaFunctionTimeouts;
    /**
    * tracing_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#tracing_config LambdaFunction#tracing_config}
    */
    readonly tracingConfig?: LambdaFunctionTracingConfig;
    /**
    * vpc_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#vpc_config LambdaFunction#vpc_config}
    */
    readonly vpcConfig?: LambdaFunctionVpcConfig;
}
export interface LambdaFunctionDeadLetterConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#target_arn LambdaFunction#target_arn}
    */
    readonly targetArn: string;
}
export declare function lambdaFunctionDeadLetterConfigToTerraform(struct?: LambdaFunctionDeadLetterConfigOutputReference | LambdaFunctionDeadLetterConfig): any;
export declare class LambdaFunctionDeadLetterConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LambdaFunctionDeadLetterConfig | undefined;
    set internalValue(value: LambdaFunctionDeadLetterConfig | undefined);
    private _targetArn?;
    get targetArn(): string;
    set targetArn(value: string);
    get targetArnInput(): string;
}
export interface LambdaFunctionEnvironment {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#variables LambdaFunction#variables}
    */
    readonly variables?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare function lambdaFunctionEnvironmentToTerraform(struct?: LambdaFunctionEnvironmentOutputReference | LambdaFunctionEnvironment): any;
export declare class LambdaFunctionEnvironmentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LambdaFunctionEnvironment | undefined;
    set internalValue(value: LambdaFunctionEnvironment | undefined);
    private _variables?;
    get variables(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set variables(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetVariables(): void;
    get variablesInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
}
export interface LambdaFunctionFileSystemConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#arn LambdaFunction#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#local_mount_path LambdaFunction#local_mount_path}
    */
    readonly localMountPath: string;
}
export declare function lambdaFunctionFileSystemConfigToTerraform(struct?: LambdaFunctionFileSystemConfigOutputReference | LambdaFunctionFileSystemConfig): any;
export declare class LambdaFunctionFileSystemConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LambdaFunctionFileSystemConfig | undefined;
    set internalValue(value: LambdaFunctionFileSystemConfig | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _localMountPath?;
    get localMountPath(): string;
    set localMountPath(value: string);
    get localMountPathInput(): string;
}
export interface LambdaFunctionImageConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#command LambdaFunction#command}
    */
    readonly command?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#entry_point LambdaFunction#entry_point}
    */
    readonly entryPoint?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#working_directory LambdaFunction#working_directory}
    */
    readonly workingDirectory?: string;
}
export declare function lambdaFunctionImageConfigToTerraform(struct?: LambdaFunctionImageConfigOutputReference | LambdaFunctionImageConfig): any;
export declare class LambdaFunctionImageConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LambdaFunctionImageConfig | undefined;
    set internalValue(value: LambdaFunctionImageConfig | undefined);
    private _command?;
    get command(): string[];
    set command(value: string[]);
    resetCommand(): void;
    get commandInput(): string[];
    private _entryPoint?;
    get entryPoint(): string[];
    set entryPoint(value: string[]);
    resetEntryPoint(): void;
    get entryPointInput(): string[];
    private _workingDirectory?;
    get workingDirectory(): string;
    set workingDirectory(value: string);
    resetWorkingDirectory(): void;
    get workingDirectoryInput(): string;
}
export interface LambdaFunctionTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#create LambdaFunction#create}
    */
    readonly create?: string;
}
export declare function lambdaFunctionTimeoutsToTerraform(struct?: LambdaFunctionTimeoutsOutputReference | LambdaFunctionTimeouts): any;
export declare class LambdaFunctionTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LambdaFunctionTimeouts | undefined;
    set internalValue(value: LambdaFunctionTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
}
export interface LambdaFunctionTracingConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#mode LambdaFunction#mode}
    */
    readonly mode: string;
}
export declare function lambdaFunctionTracingConfigToTerraform(struct?: LambdaFunctionTracingConfigOutputReference | LambdaFunctionTracingConfig): any;
export declare class LambdaFunctionTracingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LambdaFunctionTracingConfig | undefined;
    set internalValue(value: LambdaFunctionTracingConfig | undefined);
    private _mode?;
    get mode(): string;
    set mode(value: string);
    get modeInput(): string;
}
export interface LambdaFunctionVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#security_group_ids LambdaFunction#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#subnet_ids LambdaFunction#subnet_ids}
    */
    readonly subnetIds: string[];
}
export declare function lambdaFunctionVpcConfigToTerraform(struct?: LambdaFunctionVpcConfigOutputReference | LambdaFunctionVpcConfig): any;
export declare class LambdaFunctionVpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LambdaFunctionVpcConfig | undefined;
    set internalValue(value: LambdaFunctionVpcConfig | undefined);
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    get securityGroupIdsInput(): string[];
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html aws_lambda_function}
*/
export declare class LambdaFunction extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html aws_lambda_function} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaFunctionConfig
    */
    constructor(scope: Construct, id: string, config: LambdaFunctionConfig);
    private _architectures?;
    get architectures(): string[];
    set architectures(value: string[]);
    resetArchitectures(): void;
    get architecturesInput(): string[];
    get arn(): string;
    private _codeSigningConfigArn?;
    get codeSigningConfigArn(): string;
    set codeSigningConfigArn(value: string);
    resetCodeSigningConfigArn(): void;
    get codeSigningConfigArnInput(): string;
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
    private _functionName?;
    get functionName(): string;
    set functionName(value: string);
    get functionNameInput(): string;
    private _handler?;
    get handler(): string;
    set handler(value: string);
    resetHandler(): void;
    get handlerInput(): string;
    get id(): string;
    private _imageUri?;
    get imageUri(): string;
    set imageUri(value: string);
    resetImageUri(): void;
    get imageUriInput(): string;
    get invokeArn(): string;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string;
    get lastModified(): string;
    private _layers?;
    get layers(): string[];
    set layers(value: string[]);
    resetLayers(): void;
    get layersInput(): string[];
    private _memorySize?;
    get memorySize(): number;
    set memorySize(value: number);
    resetMemorySize(): void;
    get memorySizeInput(): number;
    private _packageType?;
    get packageType(): string;
    set packageType(value: string);
    resetPackageType(): void;
    get packageTypeInput(): string;
    private _publish?;
    get publish(): boolean | cdktf.IResolvable;
    set publish(value: boolean | cdktf.IResolvable);
    resetPublish(): void;
    get publishInput(): boolean | cdktf.IResolvable;
    get qualifiedArn(): string;
    private _reservedConcurrentExecutions?;
    get reservedConcurrentExecutions(): number;
    set reservedConcurrentExecutions(value: number);
    resetReservedConcurrentExecutions(): void;
    get reservedConcurrentExecutionsInput(): number;
    private _role?;
    get role(): string;
    set role(value: string);
    get roleInput(): string;
    private _runtime?;
    get runtime(): string;
    set runtime(value: string);
    resetRuntime(): void;
    get runtimeInput(): string;
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
    private _sourceCodeHash?;
    get sourceCodeHash(): string;
    set sourceCodeHash(value: string);
    resetSourceCodeHash(): void;
    get sourceCodeHashInput(): string;
    get sourceCodeSize(): number;
    private _tags?;
    get tags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tagsAll(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTagsAll(): void;
    get tagsAllInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _timeout?;
    get timeout(): number;
    set timeout(value: number);
    resetTimeout(): void;
    get timeoutInput(): number;
    get version(): string;
    private _deadLetterConfig;
    get deadLetterConfig(): LambdaFunctionDeadLetterConfigOutputReference;
    putDeadLetterConfig(value: LambdaFunctionDeadLetterConfig): void;
    resetDeadLetterConfig(): void;
    get deadLetterConfigInput(): LambdaFunctionDeadLetterConfig;
    private _environment;
    get environment(): LambdaFunctionEnvironmentOutputReference;
    putEnvironment(value: LambdaFunctionEnvironment): void;
    resetEnvironment(): void;
    get environmentInput(): LambdaFunctionEnvironment;
    private _fileSystemConfig;
    get fileSystemConfig(): LambdaFunctionFileSystemConfigOutputReference;
    putFileSystemConfig(value: LambdaFunctionFileSystemConfig): void;
    resetFileSystemConfig(): void;
    get fileSystemConfigInput(): LambdaFunctionFileSystemConfig;
    private _imageConfig;
    get imageConfig(): LambdaFunctionImageConfigOutputReference;
    putImageConfig(value: LambdaFunctionImageConfig): void;
    resetImageConfig(): void;
    get imageConfigInput(): LambdaFunctionImageConfig;
    private _timeouts;
    get timeouts(): LambdaFunctionTimeoutsOutputReference;
    putTimeouts(value: LambdaFunctionTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): LambdaFunctionTimeouts;
    private _tracingConfig;
    get tracingConfig(): LambdaFunctionTracingConfigOutputReference;
    putTracingConfig(value: LambdaFunctionTracingConfig): void;
    resetTracingConfig(): void;
    get tracingConfigInput(): LambdaFunctionTracingConfig;
    private _vpcConfig;
    get vpcConfig(): LambdaFunctionVpcConfigOutputReference;
    putVpcConfig(value: LambdaFunctionVpcConfig): void;
    resetVpcConfig(): void;
    get vpcConfigInput(): LambdaFunctionVpcConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=lambda-function.d.ts.map