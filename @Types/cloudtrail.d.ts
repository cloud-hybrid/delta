import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudTrail
*/
export interface CloudtrailConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#cloud_watch_logs_group_arn Cloudtrail#cloud_watch_logs_group_arn}
    */
    readonly cloudWatchLogsGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#cloud_watch_logs_role_arn Cloudtrail#cloud_watch_logs_role_arn}
    */
    readonly cloudWatchLogsRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#enable_log_file_validation Cloudtrail#enable_log_file_validation}
    */
    readonly enableLogFileValidation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#enable_logging Cloudtrail#enable_logging}
    */
    readonly enableLogging?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#include_global_service_events Cloudtrail#include_global_service_events}
    */
    readonly includeGlobalServiceEvents?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#is_multi_region_trail Cloudtrail#is_multi_region_trail}
    */
    readonly isMultiRegionTrail?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#is_organization_trail Cloudtrail#is_organization_trail}
    */
    readonly isOrganizationTrail?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#kms_key_id Cloudtrail#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#name Cloudtrail#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#s3_bucket_name Cloudtrail#s3_bucket_name}
    */
    readonly s3BucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#s3_key_prefix Cloudtrail#s3_key_prefix}
    */
    readonly s3KeyPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#sns_topic_name Cloudtrail#sns_topic_name}
    */
    readonly snsTopicName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#tags Cloudtrail#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#tags_all Cloudtrail#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * advanced_event_selector block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#advanced_event_selector Cloudtrail#advanced_event_selector}
    */
    readonly advancedEventSelector?: CloudtrailAdvancedEventSelector[];
    /**
    * event_selector block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#event_selector Cloudtrail#event_selector}
    */
    readonly eventSelector?: CloudtrailEventSelector[];
    /**
    * insight_selector block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#insight_selector Cloudtrail#insight_selector}
    */
    readonly insightSelector?: CloudtrailInsightSelector[];
}
export interface CloudtrailAdvancedEventSelectorFieldSelector {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#ends_with Cloudtrail#ends_with}
    */
    readonly endsWith?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#equals Cloudtrail#equals}
    */
    readonly equalTo?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#field Cloudtrail#field}
    */
    readonly field: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#not_ends_with Cloudtrail#not_ends_with}
    */
    readonly notEndsWith?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#not_equals Cloudtrail#not_equals}
    */
    readonly notEquals?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#not_starts_with Cloudtrail#not_starts_with}
    */
    readonly notStartsWith?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#starts_with Cloudtrail#starts_with}
    */
    readonly startsWith?: string[];
}
export declare function cloudtrailAdvancedEventSelectorFieldSelectorToTerraform(struct?: CloudtrailAdvancedEventSelectorFieldSelector): any;
export interface CloudtrailAdvancedEventSelector {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#name Cloudtrail#name}
    */
    readonly name?: string;
    /**
    * field_selector block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#field_selector Cloudtrail#field_selector}
    */
    readonly fieldSelector: CloudtrailAdvancedEventSelectorFieldSelector[];
}
export declare function cloudtrailAdvancedEventSelectorToTerraform(struct?: CloudtrailAdvancedEventSelector): any;
export interface CloudtrailEventSelectorDataResource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#type Cloudtrail#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#values Cloudtrail#values}
    */
    readonly values: string[];
}
export declare function cloudtrailEventSelectorDataResourceToTerraform(struct?: CloudtrailEventSelectorDataResource): any;
export interface CloudtrailEventSelector {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#exclude_management_event_sources Cloudtrail#exclude_management_event_sources}
    */
    readonly excludeManagementEventSources?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#include_management_events Cloudtrail#include_management_events}
    */
    readonly includeManagementEvents?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#read_write_type Cloudtrail#read_write_type}
    */
    readonly readWriteType?: string;
    /**
    * data_resource block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#data_resource Cloudtrail#data_resource}
    */
    readonly dataResource?: CloudtrailEventSelectorDataResource[];
}
export declare function cloudtrailEventSelectorToTerraform(struct?: CloudtrailEventSelector): any;
export interface CloudtrailInsightSelector {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#insight_type Cloudtrail#insight_type}
    */
    readonly insightType: string;
}
export declare function cloudtrailInsightSelectorToTerraform(struct?: CloudtrailInsightSelector): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html aws_cloudtrail}
*/
export declare class Cloudtrail extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html aws_cloudtrail} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudtrailConfig
    */
    constructor(scope: Construct, id: string, config: CloudtrailConfig);
    get arn(): string;
    private _cloudWatchLogsGroupArn?;
    get cloudWatchLogsGroupArn(): string;
    set cloudWatchLogsGroupArn(value: string);
    resetCloudWatchLogsGroupArn(): void;
    get cloudWatchLogsGroupArnInput(): string;
    private _cloudWatchLogsRoleArn?;
    get cloudWatchLogsRoleArn(): string;
    set cloudWatchLogsRoleArn(value: string);
    resetCloudWatchLogsRoleArn(): void;
    get cloudWatchLogsRoleArnInput(): string;
    private _enableLogFileValidation?;
    get enableLogFileValidation(): boolean | cdktf.IResolvable;
    set enableLogFileValidation(value: boolean | cdktf.IResolvable);
    resetEnableLogFileValidation(): void;
    get enableLogFileValidationInput(): boolean | cdktf.IResolvable;
    private _enableLogging?;
    get enableLogging(): boolean | cdktf.IResolvable;
    set enableLogging(value: boolean | cdktf.IResolvable);
    resetEnableLogging(): void;
    get enableLoggingInput(): boolean | cdktf.IResolvable;
    get homeRegion(): string;
    get id(): string;
    private _includeGlobalServiceEvents?;
    get includeGlobalServiceEvents(): boolean | cdktf.IResolvable;
    set includeGlobalServiceEvents(value: boolean | cdktf.IResolvable);
    resetIncludeGlobalServiceEvents(): void;
    get includeGlobalServiceEventsInput(): boolean | cdktf.IResolvable;
    private _isMultiRegionTrail?;
    get isMultiRegionTrail(): boolean | cdktf.IResolvable;
    set isMultiRegionTrail(value: boolean | cdktf.IResolvable);
    resetIsMultiRegionTrail(): void;
    get isMultiRegionTrailInput(): boolean | cdktf.IResolvable;
    private _isOrganizationTrail?;
    get isOrganizationTrail(): boolean | cdktf.IResolvable;
    set isOrganizationTrail(value: boolean | cdktf.IResolvable);
    resetIsOrganizationTrail(): void;
    get isOrganizationTrailInput(): boolean | cdktf.IResolvable;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _s3BucketName?;
    get s3BucketName(): string;
    set s3BucketName(value: string);
    get s3BucketNameInput(): string;
    private _s3KeyPrefix?;
    get s3KeyPrefix(): string;
    set s3KeyPrefix(value: string);
    resetS3KeyPrefix(): void;
    get s3KeyPrefixInput(): string;
    private _snsTopicName?;
    get snsTopicName(): string;
    set snsTopicName(value: string);
    resetSnsTopicName(): void;
    get snsTopicNameInput(): string;
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
    private _advancedEventSelector?;
    get advancedEventSelector(): CloudtrailAdvancedEventSelector[];
    set advancedEventSelector(value: CloudtrailAdvancedEventSelector[]);
    resetAdvancedEventSelector(): void;
    get advancedEventSelectorInput(): CloudtrailAdvancedEventSelector[];
    private _eventSelector?;
    get eventSelector(): CloudtrailEventSelector[];
    set eventSelector(value: CloudtrailEventSelector[]);
    resetEventSelector(): void;
    get eventSelectorInput(): CloudtrailEventSelector[];
    private _insightSelector?;
    get insightSelector(): CloudtrailInsightSelector[];
    set insightSelector(value: CloudtrailInsightSelector[]);
    resetInsightSelector(): void;
    get insightSelectorInput(): CloudtrailInsightSelector[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cloudtrail.d.ts.map