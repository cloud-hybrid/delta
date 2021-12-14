import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Synthetics
*/
export interface SyntheticsCanaryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#artifact_s3_location SyntheticsCanary#artifact_s3_location}
    */
    readonly artifactS3Location: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#execution_role_arn SyntheticsCanary#execution_role_arn}
    */
    readonly executionRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#failure_retention_period SyntheticsCanary#failure_retention_period}
    */
    readonly failureRetentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#handler SyntheticsCanary#handler}
    */
    readonly handler: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#name SyntheticsCanary#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#runtime_version SyntheticsCanary#runtime_version}
    */
    readonly runtimeVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#s3_bucket SyntheticsCanary#s3_bucket}
    */
    readonly s3Bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#s3_key SyntheticsCanary#s3_key}
    */
    readonly s3Key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#s3_version SyntheticsCanary#s3_version}
    */
    readonly s3Version?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#start_canary SyntheticsCanary#start_canary}
    */
    readonly startCanary?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#success_retention_period SyntheticsCanary#success_retention_period}
    */
    readonly successRetentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#tags SyntheticsCanary#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#tags_all SyntheticsCanary#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#zip_file SyntheticsCanary#zip_file}
    */
    readonly zipFile?: string;
    /**
    * artifact_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#artifact_config SyntheticsCanary#artifact_config}
    */
    readonly artifactConfig?: SyntheticsCanaryArtifactConfig;
    /**
    * run_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#run_config SyntheticsCanary#run_config}
    */
    readonly runConfig?: SyntheticsCanaryRunConfig;
    /**
    * schedule block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#schedule SyntheticsCanary#schedule}
    */
    readonly schedule: SyntheticsCanarySchedule;
    /**
    * vpc_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#vpc_config SyntheticsCanary#vpc_config}
    */
    readonly vpcConfig?: SyntheticsCanaryVpcConfig;
}
export declare class SyntheticsCanaryTimeline extends cdktf.ComplexComputedList {
    get created(): string;
    get lastModified(): string;
    get lastStarted(): string;
    get lastStopped(): string;
}
export interface SyntheticsCanaryArtifactConfigS3Encryption {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#encryption_mode SyntheticsCanary#encryption_mode}
    */
    readonly encryptionMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#kms_key_arn SyntheticsCanary#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
}
export declare function syntheticsCanaryArtifactConfigS3EncryptionToTerraform(struct?: SyntheticsCanaryArtifactConfigS3EncryptionOutputReference | SyntheticsCanaryArtifactConfigS3Encryption): any;
export declare class SyntheticsCanaryArtifactConfigS3EncryptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SyntheticsCanaryArtifactConfigS3Encryption | undefined;
    set internalValue(value: SyntheticsCanaryArtifactConfigS3Encryption | undefined);
    private _encryptionMode?;
    get encryptionMode(): string;
    set encryptionMode(value: string);
    resetEncryptionMode(): void;
    get encryptionModeInput(): string;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string;
}
export interface SyntheticsCanaryArtifactConfig {
    /**
    * s3_encryption block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#s3_encryption SyntheticsCanary#s3_encryption}
    */
    readonly s3Encryption?: SyntheticsCanaryArtifactConfigS3Encryption;
}
export declare function syntheticsCanaryArtifactConfigToTerraform(struct?: SyntheticsCanaryArtifactConfigOutputReference | SyntheticsCanaryArtifactConfig): any;
export declare class SyntheticsCanaryArtifactConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SyntheticsCanaryArtifactConfig | undefined;
    set internalValue(value: SyntheticsCanaryArtifactConfig | undefined);
    private _s3Encryption;
    get s3Encryption(): SyntheticsCanaryArtifactConfigS3EncryptionOutputReference;
    putS3Encryption(value: SyntheticsCanaryArtifactConfigS3Encryption): void;
    resetS3Encryption(): void;
    get s3EncryptionInput(): SyntheticsCanaryArtifactConfigS3Encryption;
}
export interface SyntheticsCanaryRunConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#active_tracing SyntheticsCanary#active_tracing}
    */
    readonly activeTracing?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#memory_in_mb SyntheticsCanary#memory_in_mb}
    */
    readonly memoryInMb?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#timeout_in_seconds SyntheticsCanary#timeout_in_seconds}
    */
    readonly timeoutInSeconds?: number;
}
export declare function syntheticsCanaryRunConfigToTerraform(struct?: SyntheticsCanaryRunConfigOutputReference | SyntheticsCanaryRunConfig): any;
export declare class SyntheticsCanaryRunConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SyntheticsCanaryRunConfig | undefined;
    set internalValue(value: SyntheticsCanaryRunConfig | undefined);
    private _activeTracing?;
    get activeTracing(): boolean | cdktf.IResolvable;
    set activeTracing(value: boolean | cdktf.IResolvable);
    resetActiveTracing(): void;
    get activeTracingInput(): boolean | cdktf.IResolvable;
    private _memoryInMb?;
    get memoryInMb(): number;
    set memoryInMb(value: number);
    resetMemoryInMb(): void;
    get memoryInMbInput(): number;
    private _timeoutInSeconds?;
    get timeoutInSeconds(): number;
    set timeoutInSeconds(value: number);
    resetTimeoutInSeconds(): void;
    get timeoutInSecondsInput(): number;
}
export interface SyntheticsCanarySchedule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#duration_in_seconds SyntheticsCanary#duration_in_seconds}
    */
    readonly durationInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#expression SyntheticsCanary#expression}
    */
    readonly expression: string;
}
export declare function syntheticsCanaryScheduleToTerraform(struct?: SyntheticsCanaryScheduleOutputReference | SyntheticsCanarySchedule): any;
export declare class SyntheticsCanaryScheduleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SyntheticsCanarySchedule | undefined;
    set internalValue(value: SyntheticsCanarySchedule | undefined);
    private _durationInSeconds?;
    get durationInSeconds(): number;
    set durationInSeconds(value: number);
    resetDurationInSeconds(): void;
    get durationInSecondsInput(): number;
    private _expression?;
    get expression(): string;
    set expression(value: string);
    get expressionInput(): string;
}
export interface SyntheticsCanaryVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#security_group_ids SyntheticsCanary#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#subnet_ids SyntheticsCanary#subnet_ids}
    */
    readonly subnetIds?: string[];
}
export declare function syntheticsCanaryVpcConfigToTerraform(struct?: SyntheticsCanaryVpcConfigOutputReference | SyntheticsCanaryVpcConfig): any;
export declare class SyntheticsCanaryVpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SyntheticsCanaryVpcConfig | undefined;
    set internalValue(value: SyntheticsCanaryVpcConfig | undefined);
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[];
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    resetSubnetIds(): void;
    get subnetIdsInput(): string[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html aws_synthetics_canary}
*/
export declare class SyntheticsCanary extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html aws_synthetics_canary} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SyntheticsCanaryConfig
    */
    constructor(scope: Construct, id: string, config: SyntheticsCanaryConfig);
    get arn(): string;
    private _artifactS3Location?;
    get artifactS3Location(): string;
    set artifactS3Location(value: string);
    get artifactS3LocationInput(): string;
    get engineArn(): string;
    private _executionRoleArn?;
    get executionRoleArn(): string;
    set executionRoleArn(value: string);
    get executionRoleArnInput(): string;
    private _failureRetentionPeriod?;
    get failureRetentionPeriod(): number;
    set failureRetentionPeriod(value: number);
    resetFailureRetentionPeriod(): void;
    get failureRetentionPeriodInput(): number;
    private _handler?;
    get handler(): string;
    set handler(value: string);
    get handlerInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _runtimeVersion?;
    get runtimeVersion(): string;
    set runtimeVersion(value: string);
    get runtimeVersionInput(): string;
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
    private _s3Version?;
    get s3Version(): string;
    set s3Version(value: string);
    resetS3Version(): void;
    get s3VersionInput(): string;
    get sourceLocationArn(): string;
    private _startCanary?;
    get startCanary(): boolean | cdktf.IResolvable;
    set startCanary(value: boolean | cdktf.IResolvable);
    resetStartCanary(): void;
    get startCanaryInput(): boolean | cdktf.IResolvable;
    get status(): string;
    private _successRetentionPeriod?;
    get successRetentionPeriod(): number;
    set successRetentionPeriod(value: number);
    resetSuccessRetentionPeriod(): void;
    get successRetentionPeriodInput(): number;
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
    timeline(index: string): SyntheticsCanaryTimeline;
    private _zipFile?;
    get zipFile(): string;
    set zipFile(value: string);
    resetZipFile(): void;
    get zipFileInput(): string;
    private _artifactConfig;
    get artifactConfig(): SyntheticsCanaryArtifactConfigOutputReference;
    putArtifactConfig(value: SyntheticsCanaryArtifactConfig): void;
    resetArtifactConfig(): void;
    get artifactConfigInput(): SyntheticsCanaryArtifactConfig;
    private _runConfig;
    get runConfig(): SyntheticsCanaryRunConfigOutputReference;
    putRunConfig(value: SyntheticsCanaryRunConfig): void;
    resetRunConfig(): void;
    get runConfigInput(): SyntheticsCanaryRunConfig;
    private _schedule;
    get schedule(): SyntheticsCanaryScheduleOutputReference;
    putSchedule(value: SyntheticsCanarySchedule): void;
    get scheduleInput(): SyntheticsCanarySchedule;
    private _vpcConfig;
    get vpcConfig(): SyntheticsCanaryVpcConfigOutputReference;
    putVpcConfig(value: SyntheticsCanaryVpcConfig): void;
    resetVpcConfig(): void;
    get vpcConfigInput(): SyntheticsCanaryVpcConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=synthetics-canary.d.ts.map