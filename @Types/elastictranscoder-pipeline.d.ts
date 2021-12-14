import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic Transcoder
*/
export interface ElastictranscoderPipelineConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#aws_kms_key_arn ElastictranscoderPipeline#aws_kms_key_arn}
    */
    readonly awsKmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#input_bucket ElastictranscoderPipeline#input_bucket}
    */
    readonly inputBucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#name ElastictranscoderPipeline#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#output_bucket ElastictranscoderPipeline#output_bucket}
    */
    readonly outputBucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#role ElastictranscoderPipeline#role}
    */
    readonly role: string;
    /**
    * content_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#content_config ElastictranscoderPipeline#content_config}
    */
    readonly contentConfig?: ElastictranscoderPipelineContentConfig;
    /**
    * content_config_permissions block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#content_config_permissions ElastictranscoderPipeline#content_config_permissions}
    */
    readonly contentConfigPermissions?: ElastictranscoderPipelineContentConfigPermissions[];
    /**
    * notifications block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#notifications ElastictranscoderPipeline#notifications}
    */
    readonly notifications?: ElastictranscoderPipelineNotifications;
    /**
    * thumbnail_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#thumbnail_config ElastictranscoderPipeline#thumbnail_config}
    */
    readonly thumbnailConfig?: ElastictranscoderPipelineThumbnailConfig;
    /**
    * thumbnail_config_permissions block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#thumbnail_config_permissions ElastictranscoderPipeline#thumbnail_config_permissions}
    */
    readonly thumbnailConfigPermissions?: ElastictranscoderPipelineThumbnailConfigPermissions[];
}
export interface ElastictranscoderPipelineContentConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#bucket ElastictranscoderPipeline#bucket}
    */
    readonly bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#storage_class ElastictranscoderPipeline#storage_class}
    */
    readonly storageClass?: string;
}
export declare function elastictranscoderPipelineContentConfigToTerraform(struct?: ElastictranscoderPipelineContentConfigOutputReference | ElastictranscoderPipelineContentConfig): any;
export declare class ElastictranscoderPipelineContentConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ElastictranscoderPipelineContentConfig | undefined;
    set internalValue(value: ElastictranscoderPipelineContentConfig | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    resetBucket(): void;
    get bucketInput(): string;
    private _storageClass?;
    get storageClass(): string;
    set storageClass(value: string);
    resetStorageClass(): void;
    get storageClassInput(): string;
}
export interface ElastictranscoderPipelineContentConfigPermissions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#access ElastictranscoderPipeline#access}
    */
    readonly access?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#grantee ElastictranscoderPipeline#grantee}
    */
    readonly grantee?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#grantee_type ElastictranscoderPipeline#grantee_type}
    */
    readonly granteeType?: string;
}
export declare function elastictranscoderPipelineContentConfigPermissionsToTerraform(struct?: ElastictranscoderPipelineContentConfigPermissions): any;
export interface ElastictranscoderPipelineNotifications {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#completed ElastictranscoderPipeline#completed}
    */
    readonly completed?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#error ElastictranscoderPipeline#error}
    */
    readonly error?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#progressing ElastictranscoderPipeline#progressing}
    */
    readonly progressing?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#warning ElastictranscoderPipeline#warning}
    */
    readonly warning?: string;
}
export declare function elastictranscoderPipelineNotificationsToTerraform(struct?: ElastictranscoderPipelineNotificationsOutputReference | ElastictranscoderPipelineNotifications): any;
export declare class ElastictranscoderPipelineNotificationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ElastictranscoderPipelineNotifications | undefined;
    set internalValue(value: ElastictranscoderPipelineNotifications | undefined);
    private _completed?;
    get completed(): string;
    set completed(value: string);
    resetCompleted(): void;
    get completedInput(): string;
    private _error?;
    get error(): string;
    set error(value: string);
    resetError(): void;
    get errorInput(): string;
    private _progressing?;
    get progressing(): string;
    set progressing(value: string);
    resetProgressing(): void;
    get progressingInput(): string;
    private _warning?;
    get warning(): string;
    set warning(value: string);
    resetWarning(): void;
    get warningInput(): string;
}
export interface ElastictranscoderPipelineThumbnailConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#bucket ElastictranscoderPipeline#bucket}
    */
    readonly bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#storage_class ElastictranscoderPipeline#storage_class}
    */
    readonly storageClass?: string;
}
export declare function elastictranscoderPipelineThumbnailConfigToTerraform(struct?: ElastictranscoderPipelineThumbnailConfigOutputReference | ElastictranscoderPipelineThumbnailConfig): any;
export declare class ElastictranscoderPipelineThumbnailConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ElastictranscoderPipelineThumbnailConfig | undefined;
    set internalValue(value: ElastictranscoderPipelineThumbnailConfig | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    resetBucket(): void;
    get bucketInput(): string;
    private _storageClass?;
    get storageClass(): string;
    set storageClass(value: string);
    resetStorageClass(): void;
    get storageClassInput(): string;
}
export interface ElastictranscoderPipelineThumbnailConfigPermissions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#access ElastictranscoderPipeline#access}
    */
    readonly access?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#grantee ElastictranscoderPipeline#grantee}
    */
    readonly grantee?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#grantee_type ElastictranscoderPipeline#grantee_type}
    */
    readonly granteeType?: string;
}
export declare function elastictranscoderPipelineThumbnailConfigPermissionsToTerraform(struct?: ElastictranscoderPipelineThumbnailConfigPermissions): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html aws_elastictranscoder_pipeline}
*/
export declare class ElastictranscoderPipeline extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html aws_elastictranscoder_pipeline} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElastictranscoderPipelineConfig
    */
    constructor(scope: Construct, id: string, config: ElastictranscoderPipelineConfig);
    get arn(): string;
    private _awsKmsKeyArn?;
    get awsKmsKeyArn(): string;
    set awsKmsKeyArn(value: string);
    resetAwsKmsKeyArn(): void;
    get awsKmsKeyArnInput(): string;
    get id(): string;
    private _inputBucket?;
    get inputBucket(): string;
    set inputBucket(value: string);
    get inputBucketInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _outputBucket?;
    get outputBucket(): string;
    set outputBucket(value: string);
    resetOutputBucket(): void;
    get outputBucketInput(): string;
    private _role?;
    get role(): string;
    set role(value: string);
    get roleInput(): string;
    private _contentConfig;
    get contentConfig(): ElastictranscoderPipelineContentConfigOutputReference;
    putContentConfig(value: ElastictranscoderPipelineContentConfig): void;
    resetContentConfig(): void;
    get contentConfigInput(): ElastictranscoderPipelineContentConfig;
    private _contentConfigPermissions?;
    get contentConfigPermissions(): ElastictranscoderPipelineContentConfigPermissions[];
    set contentConfigPermissions(value: ElastictranscoderPipelineContentConfigPermissions[]);
    resetContentConfigPermissions(): void;
    get contentConfigPermissionsInput(): ElastictranscoderPipelineContentConfigPermissions[];
    private _notifications;
    get notifications(): ElastictranscoderPipelineNotificationsOutputReference;
    putNotifications(value: ElastictranscoderPipelineNotifications): void;
    resetNotifications(): void;
    get notificationsInput(): ElastictranscoderPipelineNotifications;
    private _thumbnailConfig;
    get thumbnailConfig(): ElastictranscoderPipelineThumbnailConfigOutputReference;
    putThumbnailConfig(value: ElastictranscoderPipelineThumbnailConfig): void;
    resetThumbnailConfig(): void;
    get thumbnailConfigInput(): ElastictranscoderPipelineThumbnailConfig;
    private _thumbnailConfigPermissions?;
    get thumbnailConfigPermissions(): ElastictranscoderPipelineThumbnailConfigPermissions[];
    set thumbnailConfigPermissions(value: ElastictranscoderPipelineThumbnailConfigPermissions[]);
    resetThumbnailConfigPermissions(): void;
    get thumbnailConfigPermissionsInput(): ElastictranscoderPipelineThumbnailConfigPermissions[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=elastictranscoder-pipeline.d.ts.map