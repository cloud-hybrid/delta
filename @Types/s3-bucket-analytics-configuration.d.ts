import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Simple Storage Service
*/
export interface S3BucketAnalyticsConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#bucket S3BucketAnalyticsConfiguration#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#name S3BucketAnalyticsConfiguration#name}
    */
    readonly name: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#filter S3BucketAnalyticsConfiguration#filter}
    */
    readonly filter?: S3BucketAnalyticsConfigurationFilter;
    /**
    * storage_class_analysis block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#storage_class_analysis S3BucketAnalyticsConfiguration#storage_class_analysis}
    */
    readonly storageClassAnalysis?: S3BucketAnalyticsConfigurationStorageClassAnalysis;
}
export interface S3BucketAnalyticsConfigurationFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#prefix S3BucketAnalyticsConfiguration#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#tags S3BucketAnalyticsConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare function s3BucketAnalyticsConfigurationFilterToTerraform(struct?: S3BucketAnalyticsConfigurationFilterOutputReference | S3BucketAnalyticsConfigurationFilter): any;
export declare class S3BucketAnalyticsConfigurationFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketAnalyticsConfigurationFilter | undefined;
    set internalValue(value: S3BucketAnalyticsConfigurationFilter | undefined);
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
export interface S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#bucket_account_id S3BucketAnalyticsConfiguration#bucket_account_id}
    */
    readonly bucketAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#bucket_arn S3BucketAnalyticsConfiguration#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#format S3BucketAnalyticsConfiguration#format}
    */
    readonly format?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#prefix S3BucketAnalyticsConfiguration#prefix}
    */
    readonly prefix?: string;
}
export declare function s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationToTerraform(struct?: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationOutputReference | S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination): any;
export declare class S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination | undefined;
    set internalValue(value: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination | undefined);
    private _bucketAccountId?;
    get bucketAccountId(): string;
    set bucketAccountId(value: string);
    resetBucketAccountId(): void;
    get bucketAccountIdInput(): string;
    private _bucketArn?;
    get bucketArn(): string;
    set bucketArn(value: string);
    get bucketArnInput(): string;
    private _format?;
    get format(): string;
    set format(value: string);
    resetFormat(): void;
    get formatInput(): string;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string;
}
export interface S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestination {
    /**
    * s3_bucket_destination block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#s3_bucket_destination S3BucketAnalyticsConfiguration#s3_bucket_destination}
    */
    readonly s3BucketDestination: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination;
}
export declare function s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationToTerraform(struct?: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationOutputReference | S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestination): any;
export declare class S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestination | undefined;
    set internalValue(value: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestination | undefined);
    private _s3BucketDestination;
    get s3BucketDestination(): S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationOutputReference;
    putS3BucketDestination(value: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination): void;
    get s3BucketDestinationInput(): S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination;
}
export interface S3BucketAnalyticsConfigurationStorageClassAnalysisDataExport {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#output_schema_version S3BucketAnalyticsConfiguration#output_schema_version}
    */
    readonly outputSchemaVersion?: string;
    /**
    * destination block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#destination S3BucketAnalyticsConfiguration#destination}
    */
    readonly destination: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestination;
}
export declare function s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportToTerraform(struct?: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportOutputReference | S3BucketAnalyticsConfigurationStorageClassAnalysisDataExport): any;
export declare class S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketAnalyticsConfigurationStorageClassAnalysisDataExport | undefined;
    set internalValue(value: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExport | undefined);
    private _outputSchemaVersion?;
    get outputSchemaVersion(): string;
    set outputSchemaVersion(value: string);
    resetOutputSchemaVersion(): void;
    get outputSchemaVersionInput(): string;
    private _destination;
    get destination(): S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationOutputReference;
    putDestination(value: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestination): void;
    get destinationInput(): S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestination;
}
export interface S3BucketAnalyticsConfigurationStorageClassAnalysis {
    /**
    * data_export block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#data_export S3BucketAnalyticsConfiguration#data_export}
    */
    readonly dataExport: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExport;
}
export declare function s3BucketAnalyticsConfigurationStorageClassAnalysisToTerraform(struct?: S3BucketAnalyticsConfigurationStorageClassAnalysisOutputReference | S3BucketAnalyticsConfigurationStorageClassAnalysis): any;
export declare class S3BucketAnalyticsConfigurationStorageClassAnalysisOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketAnalyticsConfigurationStorageClassAnalysis | undefined;
    set internalValue(value: S3BucketAnalyticsConfigurationStorageClassAnalysis | undefined);
    private _dataExport;
    get dataExport(): S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportOutputReference;
    putDataExport(value: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExport): void;
    get dataExportInput(): S3BucketAnalyticsConfigurationStorageClassAnalysisDataExport;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html aws_s3_bucket_analytics_configuration}
*/
export declare class S3BucketAnalyticsConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html aws_s3_bucket_analytics_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketAnalyticsConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: S3BucketAnalyticsConfigurationConfig);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _filter;
    get filter(): S3BucketAnalyticsConfigurationFilterOutputReference;
    putFilter(value: S3BucketAnalyticsConfigurationFilter): void;
    resetFilter(): void;
    get filterInput(): S3BucketAnalyticsConfigurationFilter;
    private _storageClassAnalysis;
    get storageClassAnalysis(): S3BucketAnalyticsConfigurationStorageClassAnalysisOutputReference;
    putStorageClassAnalysis(value: S3BucketAnalyticsConfigurationStorageClassAnalysis): void;
    resetStorageClassAnalysis(): void;
    get storageClassAnalysisInput(): S3BucketAnalyticsConfigurationStorageClassAnalysis;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=s3-bucket-analytics-configuration.d.ts.map