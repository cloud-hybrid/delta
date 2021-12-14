import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Simple Storage Service
*/
export interface S3ControlBucketLifecycleConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#bucket S3ControlBucketLifecycleConfiguration#bucket}
    */
    readonly bucket: string;
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#rule S3ControlBucketLifecycleConfiguration#rule}
    */
    readonly rule: S3ControlBucketLifecycleConfigurationRule[];
}
export interface S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#days_after_initiation S3ControlBucketLifecycleConfiguration#days_after_initiation}
    */
    readonly daysAfterInitiation: number;
}
export declare function s3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadToTerraform(struct?: S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference | S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload): any;
export declare class S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload | undefined;
    set internalValue(value: S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload | undefined);
    private _daysAfterInitiation?;
    get daysAfterInitiation(): number;
    set daysAfterInitiation(value: number);
    get daysAfterInitiationInput(): number;
}
export interface S3ControlBucketLifecycleConfigurationRuleExpiration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#date S3ControlBucketLifecycleConfiguration#date}
    */
    readonly date?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#days S3ControlBucketLifecycleConfiguration#days}
    */
    readonly days?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#expired_object_delete_marker S3ControlBucketLifecycleConfiguration#expired_object_delete_marker}
    */
    readonly expiredObjectDeleteMarker?: boolean | cdktf.IResolvable;
}
export declare function s3ControlBucketLifecycleConfigurationRuleExpirationToTerraform(struct?: S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference | S3ControlBucketLifecycleConfigurationRuleExpiration): any;
export declare class S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3ControlBucketLifecycleConfigurationRuleExpiration | undefined;
    set internalValue(value: S3ControlBucketLifecycleConfigurationRuleExpiration | undefined);
    private _date?;
    get date(): string;
    set date(value: string);
    resetDate(): void;
    get dateInput(): string;
    private _days?;
    get days(): number;
    set days(value: number);
    resetDays(): void;
    get daysInput(): number;
    private _expiredObjectDeleteMarker?;
    get expiredObjectDeleteMarker(): boolean | cdktf.IResolvable;
    set expiredObjectDeleteMarker(value: boolean | cdktf.IResolvable);
    resetExpiredObjectDeleteMarker(): void;
    get expiredObjectDeleteMarkerInput(): boolean | cdktf.IResolvable;
}
export interface S3ControlBucketLifecycleConfigurationRuleFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#prefix S3ControlBucketLifecycleConfiguration#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#tags S3ControlBucketLifecycleConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare function s3ControlBucketLifecycleConfigurationRuleFilterToTerraform(struct?: S3ControlBucketLifecycleConfigurationRuleFilterOutputReference | S3ControlBucketLifecycleConfigurationRuleFilter): any;
export declare class S3ControlBucketLifecycleConfigurationRuleFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3ControlBucketLifecycleConfigurationRuleFilter | undefined;
    set internalValue(value: S3ControlBucketLifecycleConfigurationRuleFilter | undefined);
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string;
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
}
export interface S3ControlBucketLifecycleConfigurationRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#id S3ControlBucketLifecycleConfiguration#id}
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#status S3ControlBucketLifecycleConfiguration#status}
    */
    readonly status?: string;
    /**
    * abort_incomplete_multipart_upload block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#abort_incomplete_multipart_upload S3ControlBucketLifecycleConfiguration#abort_incomplete_multipart_upload}
    */
    readonly abortIncompleteMultipartUpload?: S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload;
    /**
    * expiration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#expiration S3ControlBucketLifecycleConfiguration#expiration}
    */
    readonly expiration?: S3ControlBucketLifecycleConfigurationRuleExpiration;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#filter S3ControlBucketLifecycleConfiguration#filter}
    */
    readonly filter?: S3ControlBucketLifecycleConfigurationRuleFilter;
}
export declare function s3ControlBucketLifecycleConfigurationRuleToTerraform(struct?: S3ControlBucketLifecycleConfigurationRule): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html aws_s3control_bucket_lifecycle_configuration}
*/
export declare class S3ControlBucketLifecycleConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html aws_s3control_bucket_lifecycle_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3ControlBucketLifecycleConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: S3ControlBucketLifecycleConfigurationConfig);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    get id(): string;
    private _rule?;
    get rule(): S3ControlBucketLifecycleConfigurationRule[];
    set rule(value: S3ControlBucketLifecycleConfigurationRule[]);
    get ruleInput(): S3ControlBucketLifecycleConfigurationRule[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=s3control-bucket-lifecycle-configuration.d.ts.map