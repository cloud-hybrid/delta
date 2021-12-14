import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Kinesis
*/
export interface KinesisFirehoseDeliveryStreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#destination KinesisFirehoseDeliveryStream#destination}
    */
    readonly destination: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#destination_id KinesisFirehoseDeliveryStream#destination_id}
    */
    readonly destinationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#name KinesisFirehoseDeliveryStream#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#tags KinesisFirehoseDeliveryStream#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#tags_all KinesisFirehoseDeliveryStream#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#version_id KinesisFirehoseDeliveryStream#version_id}
    */
    readonly versionId?: string;
    /**
    * elasticsearch_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#elasticsearch_configuration KinesisFirehoseDeliveryStream#elasticsearch_configuration}
    */
    readonly elasticsearchConfiguration?: KinesisFirehoseDeliveryStreamElasticsearchConfiguration;
    /**
    * extended_s3_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#extended_s3_configuration KinesisFirehoseDeliveryStream#extended_s3_configuration}
    */
    readonly extendedS3Configuration?: KinesisFirehoseDeliveryStreamExtendedS3Configuration;
    /**
    * http_endpoint_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#http_endpoint_configuration KinesisFirehoseDeliveryStream#http_endpoint_configuration}
    */
    readonly httpEndpointConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfiguration;
    /**
    * kinesis_source_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#kinesis_source_configuration KinesisFirehoseDeliveryStream#kinesis_source_configuration}
    */
    readonly kinesisSourceConfiguration?: KinesisFirehoseDeliveryStreamKinesisSourceConfiguration;
    /**
    * redshift_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#redshift_configuration KinesisFirehoseDeliveryStream#redshift_configuration}
    */
    readonly redshiftConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfiguration;
    /**
    * s3_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_configuration KinesisFirehoseDeliveryStream#s3_configuration}
    */
    readonly s3Configuration?: KinesisFirehoseDeliveryStreamS3Configuration;
    /**
    * server_side_encryption block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#server_side_encryption KinesisFirehoseDeliveryStream#server_side_encryption}
    */
    readonly serverSideEncryption?: KinesisFirehoseDeliveryStreamServerSideEncryption;
    /**
    * splunk_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#splunk_configuration KinesisFirehoseDeliveryStream#splunk_configuration}
    */
    readonly splunkConfiguration?: KinesisFirehoseDeliveryStreamSplunkConfiguration;
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
    */
    readonly logStreamName?: string;
}
export declare function kinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions): any;
export declare class KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string;
    private _logStreamName?;
    get logStreamName(): string;
    set logStreamName(value: string);
    resetLogStreamName(): void;
    get logStreamNameInput(): string;
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
    */
    readonly parameterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
    */
    readonly parameterValue: string;
}
export declare function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters): any;
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#type KinesisFirehoseDeliveryStream#type}
    */
    readonly type: string;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameters KinesisFirehoseDeliveryStream#parameters}
    */
    readonly parameters?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters[];
}
export declare function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors): any;
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * processors block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processors KinesisFirehoseDeliveryStream#processors}
    */
    readonly processors?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors[];
}
export declare function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _processors?;
    get processors(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors[];
    set processors(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors[]);
    resetProcessors(): void;
    get processorsInput(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors[];
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#security_group_ids KinesisFirehoseDeliveryStream#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#subnet_ids KinesisFirehoseDeliveryStream#subnet_ids}
    */
    readonly subnetIds: string[];
}
export declare function kinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig): any;
export declare class KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig | undefined);
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    get securityGroupIdsInput(): string[];
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[];
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
    */
    readonly bufferingInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
    */
    readonly bufferingSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cluster_endpoint KinesisFirehoseDeliveryStream#cluster_endpoint}
    */
    readonly clusterEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#domain_arn KinesisFirehoseDeliveryStream#domain_arn}
    */
    readonly domainArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#index_name KinesisFirehoseDeliveryStream#index_name}
    */
    readonly indexName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#index_rotation_period KinesisFirehoseDeliveryStream#index_rotation_period}
    */
    readonly indexRotationPeriod?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#retry_duration KinesisFirehoseDeliveryStream#retry_duration}
    */
    readonly retryDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
    */
    readonly s3BackupMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#type_name KinesisFirehoseDeliveryStream#type_name}
    */
    readonly typeName?: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions;
    /**
    * processing_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
    */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration;
    /**
    * vpc_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#vpc_config KinesisFirehoseDeliveryStream#vpc_config}
    */
    readonly vpcConfig?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig;
}
export declare function kinesisFirehoseDeliveryStreamElasticsearchConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamElasticsearchConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamElasticsearchConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamElasticsearchConfiguration | undefined);
    private _bufferingInterval?;
    get bufferingInterval(): number;
    set bufferingInterval(value: number);
    resetBufferingInterval(): void;
    get bufferingIntervalInput(): number;
    private _bufferingSize?;
    get bufferingSize(): number;
    set bufferingSize(value: number);
    resetBufferingSize(): void;
    get bufferingSizeInput(): number;
    private _clusterEndpoint?;
    get clusterEndpoint(): string;
    set clusterEndpoint(value: string);
    resetClusterEndpoint(): void;
    get clusterEndpointInput(): string;
    private _domainArn?;
    get domainArn(): string;
    set domainArn(value: string);
    resetDomainArn(): void;
    get domainArnInput(): string;
    private _indexName?;
    get indexName(): string;
    set indexName(value: string);
    get indexNameInput(): string;
    private _indexRotationPeriod?;
    get indexRotationPeriod(): string;
    set indexRotationPeriod(value: string);
    resetIndexRotationPeriod(): void;
    get indexRotationPeriodInput(): string;
    private _retryDuration?;
    get retryDuration(): number;
    set retryDuration(value: number);
    resetRetryDuration(): void;
    get retryDurationInput(): number;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _s3BackupMode?;
    get s3BackupMode(): string;
    set s3BackupMode(value: string);
    resetS3BackupMode(): void;
    get s3BackupModeInput(): string;
    private _typeName?;
    get typeName(): string;
    set typeName(value: string);
    resetTypeName(): void;
    get typeNameInput(): string;
    private _cloudwatchLoggingOptions;
    get cloudwatchLoggingOptions(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsOutputReference;
    putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions): void;
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions;
    private _processingConfiguration;
    get processingConfiguration(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationOutputReference;
    putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration): void;
    resetProcessingConfiguration(): void;
    get processingConfigurationInput(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration;
    private _vpcConfig;
    get vpcConfig(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigOutputReference;
    putVpcConfig(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig): void;
    resetVpcConfig(): void;
    get vpcConfigInput(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
    */
    readonly logStreamName?: string;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string;
    private _logStreamName?;
    get logStreamName(): string;
    set logStreamName(value: string);
    resetLogStreamName(): void;
    get logStreamNameInput(): string;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#timestamp_formats KinesisFirehoseDeliveryStream#timestamp_formats}
    */
    readonly timestampFormats?: string[];
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe | undefined);
    private _timestampFormats?;
    get timestampFormats(): string[];
    set timestampFormats(value: string[]);
    resetTimestampFormats(): void;
    get timestampFormatsInput(): string[];
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#case_insensitive KinesisFirehoseDeliveryStream#case_insensitive}
    */
    readonly caseInsensitive?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#column_to_json_key_mappings KinesisFirehoseDeliveryStream#column_to_json_key_mappings}
    */
    readonly columnToJsonKeyMappings?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#convert_dots_in_json_keys_to_underscores KinesisFirehoseDeliveryStream#convert_dots_in_json_keys_to_underscores}
    */
    readonly convertDotsInJsonKeysToUnderscores?: boolean | cdktf.IResolvable;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe | undefined);
    private _caseInsensitive?;
    get caseInsensitive(): boolean | cdktf.IResolvable;
    set caseInsensitive(value: boolean | cdktf.IResolvable);
    resetCaseInsensitive(): void;
    get caseInsensitiveInput(): boolean | cdktf.IResolvable;
    private _columnToJsonKeyMappings?;
    get columnToJsonKeyMappings(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set columnToJsonKeyMappings(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetColumnToJsonKeyMappings(): void;
    get columnToJsonKeyMappingsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _convertDotsInJsonKeysToUnderscores?;
    get convertDotsInJsonKeysToUnderscores(): boolean | cdktf.IResolvable;
    set convertDotsInJsonKeysToUnderscores(value: boolean | cdktf.IResolvable);
    resetConvertDotsInJsonKeysToUnderscores(): void;
    get convertDotsInJsonKeysToUnderscoresInput(): boolean | cdktf.IResolvable;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer {
    /**
    * hive_json_ser_de block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#hive_json_ser_de KinesisFirehoseDeliveryStream#hive_json_ser_de}
    */
    readonly hiveJsonSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe;
    /**
    * open_x_json_ser_de block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#open_x_json_ser_de KinesisFirehoseDeliveryStream#open_x_json_ser_de}
    */
    readonly openXJsonSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer | undefined);
    private _hiveJsonSerDe;
    get hiveJsonSerDe(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeOutputReference;
    putHiveJsonSerDe(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe): void;
    resetHiveJsonSerDe(): void;
    get hiveJsonSerDeInput(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe;
    private _openXJsonSerDe;
    get openXJsonSerDe(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeOutputReference;
    putOpenXJsonSerDe(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe): void;
    resetOpenXJsonSerDe(): void;
    get openXJsonSerDeInput(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration {
    /**
    * deserializer block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#deserializer KinesisFirehoseDeliveryStream#deserializer}
    */
    readonly deserializer: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration | undefined);
    private _deserializer;
    get deserializer(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOutputReference;
    putDeserializer(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer): void;
    get deserializerInput(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#block_size_bytes KinesisFirehoseDeliveryStream#block_size_bytes}
    */
    readonly blockSizeBytes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#bloom_filter_columns KinesisFirehoseDeliveryStream#bloom_filter_columns}
    */
    readonly bloomFilterColumns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#bloom_filter_false_positive_probability KinesisFirehoseDeliveryStream#bloom_filter_false_positive_probability}
    */
    readonly bloomFilterFalsePositiveProbability?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#compression KinesisFirehoseDeliveryStream#compression}
    */
    readonly compression?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#dictionary_key_threshold KinesisFirehoseDeliveryStream#dictionary_key_threshold}
    */
    readonly dictionaryKeyThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enable_padding KinesisFirehoseDeliveryStream#enable_padding}
    */
    readonly enablePadding?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#format_version KinesisFirehoseDeliveryStream#format_version}
    */
    readonly formatVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#padding_tolerance KinesisFirehoseDeliveryStream#padding_tolerance}
    */
    readonly paddingTolerance?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#row_index_stride KinesisFirehoseDeliveryStream#row_index_stride}
    */
    readonly rowIndexStride?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#stripe_size_bytes KinesisFirehoseDeliveryStream#stripe_size_bytes}
    */
    readonly stripeSizeBytes?: number;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe | undefined);
    private _blockSizeBytes?;
    get blockSizeBytes(): number;
    set blockSizeBytes(value: number);
    resetBlockSizeBytes(): void;
    get blockSizeBytesInput(): number;
    private _bloomFilterColumns?;
    get bloomFilterColumns(): string[];
    set bloomFilterColumns(value: string[]);
    resetBloomFilterColumns(): void;
    get bloomFilterColumnsInput(): string[];
    private _bloomFilterFalsePositiveProbability?;
    get bloomFilterFalsePositiveProbability(): number;
    set bloomFilterFalsePositiveProbability(value: number);
    resetBloomFilterFalsePositiveProbability(): void;
    get bloomFilterFalsePositiveProbabilityInput(): number;
    private _compression?;
    get compression(): string;
    set compression(value: string);
    resetCompression(): void;
    get compressionInput(): string;
    private _dictionaryKeyThreshold?;
    get dictionaryKeyThreshold(): number;
    set dictionaryKeyThreshold(value: number);
    resetDictionaryKeyThreshold(): void;
    get dictionaryKeyThresholdInput(): number;
    private _enablePadding?;
    get enablePadding(): boolean | cdktf.IResolvable;
    set enablePadding(value: boolean | cdktf.IResolvable);
    resetEnablePadding(): void;
    get enablePaddingInput(): boolean | cdktf.IResolvable;
    private _formatVersion?;
    get formatVersion(): string;
    set formatVersion(value: string);
    resetFormatVersion(): void;
    get formatVersionInput(): string;
    private _paddingTolerance?;
    get paddingTolerance(): number;
    set paddingTolerance(value: number);
    resetPaddingTolerance(): void;
    get paddingToleranceInput(): number;
    private _rowIndexStride?;
    get rowIndexStride(): number;
    set rowIndexStride(value: number);
    resetRowIndexStride(): void;
    get rowIndexStrideInput(): number;
    private _stripeSizeBytes?;
    get stripeSizeBytes(): number;
    set stripeSizeBytes(value: number);
    resetStripeSizeBytes(): void;
    get stripeSizeBytesInput(): number;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#block_size_bytes KinesisFirehoseDeliveryStream#block_size_bytes}
    */
    readonly blockSizeBytes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#compression KinesisFirehoseDeliveryStream#compression}
    */
    readonly compression?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enable_dictionary_compression KinesisFirehoseDeliveryStream#enable_dictionary_compression}
    */
    readonly enableDictionaryCompression?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#max_padding_bytes KinesisFirehoseDeliveryStream#max_padding_bytes}
    */
    readonly maxPaddingBytes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#page_size_bytes KinesisFirehoseDeliveryStream#page_size_bytes}
    */
    readonly pageSizeBytes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#writer_version KinesisFirehoseDeliveryStream#writer_version}
    */
    readonly writerVersion?: string;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe | undefined);
    private _blockSizeBytes?;
    get blockSizeBytes(): number;
    set blockSizeBytes(value: number);
    resetBlockSizeBytes(): void;
    get blockSizeBytesInput(): number;
    private _compression?;
    get compression(): string;
    set compression(value: string);
    resetCompression(): void;
    get compressionInput(): string;
    private _enableDictionaryCompression?;
    get enableDictionaryCompression(): boolean | cdktf.IResolvable;
    set enableDictionaryCompression(value: boolean | cdktf.IResolvable);
    resetEnableDictionaryCompression(): void;
    get enableDictionaryCompressionInput(): boolean | cdktf.IResolvable;
    private _maxPaddingBytes?;
    get maxPaddingBytes(): number;
    set maxPaddingBytes(value: number);
    resetMaxPaddingBytes(): void;
    get maxPaddingBytesInput(): number;
    private _pageSizeBytes?;
    get pageSizeBytes(): number;
    set pageSizeBytes(value: number);
    resetPageSizeBytes(): void;
    get pageSizeBytesInput(): number;
    private _writerVersion?;
    get writerVersion(): string;
    set writerVersion(value: string);
    resetWriterVersion(): void;
    get writerVersionInput(): string;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer {
    /**
    * orc_ser_de block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#orc_ser_de KinesisFirehoseDeliveryStream#orc_ser_de}
    */
    readonly orcSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe;
    /**
    * parquet_ser_de block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parquet_ser_de KinesisFirehoseDeliveryStream#parquet_ser_de}
    */
    readonly parquetSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer | undefined);
    private _orcSerDe;
    get orcSerDe(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeOutputReference;
    putOrcSerDe(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe): void;
    resetOrcSerDe(): void;
    get orcSerDeInput(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe;
    private _parquetSerDe;
    get parquetSerDe(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeOutputReference;
    putParquetSerDe(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe): void;
    resetParquetSerDe(): void;
    get parquetSerDeInput(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration {
    /**
    * serializer block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#serializer KinesisFirehoseDeliveryStream#serializer}
    */
    readonly serializer: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration | undefined);
    private _serializer;
    get serializer(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOutputReference;
    putSerializer(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer): void;
    get serializerInput(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#catalog_id KinesisFirehoseDeliveryStream#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#database_name KinesisFirehoseDeliveryStream#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#region KinesisFirehoseDeliveryStream#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#table_name KinesisFirehoseDeliveryStream#table_name}
    */
    readonly tableName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#version_id KinesisFirehoseDeliveryStream#version_id}
    */
    readonly versionId?: string;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration | undefined);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string;
    private _versionId?;
    get versionId(): string;
    set versionId(value: string);
    resetVersionId(): void;
    get versionIdInput(): string;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * input_format_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#input_format_configuration KinesisFirehoseDeliveryStream#input_format_configuration}
    */
    readonly inputFormatConfiguration: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration;
    /**
    * output_format_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#output_format_configuration KinesisFirehoseDeliveryStream#output_format_configuration}
    */
    readonly outputFormatConfiguration: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration;
    /**
    * schema_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#schema_configuration KinesisFirehoseDeliveryStream#schema_configuration}
    */
    readonly schemaConfiguration: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _inputFormatConfiguration;
    get inputFormatConfiguration(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationOutputReference;
    putInputFormatConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration): void;
    get inputFormatConfigurationInput(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration;
    private _outputFormatConfiguration;
    get outputFormatConfiguration(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationOutputReference;
    putOutputFormatConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration): void;
    get outputFormatConfigurationInput(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration;
    private _schemaConfiguration;
    get schemaConfiguration(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationOutputReference;
    putSchemaConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration): void;
    get schemaConfigurationInput(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#retry_duration KinesisFirehoseDeliveryStream#retry_duration}
    */
    readonly retryDuration?: number;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _retryDuration?;
    get retryDuration(): number;
    set retryDuration(value: number);
    resetRetryDuration(): void;
    get retryDurationInput(): number;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
    */
    readonly parameterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
    */
    readonly parameterValue: string;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters): any;
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#type KinesisFirehoseDeliveryStream#type}
    */
    readonly type: string;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameters KinesisFirehoseDeliveryStream#parameters}
    */
    readonly parameters?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters[];
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors): any;
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * processors block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processors KinesisFirehoseDeliveryStream#processors}
    */
    readonly processors?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors[];
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _processors?;
    get processors(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors[];
    set processors(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors[]);
    resetProcessors(): void;
    get processorsInput(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors[];
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
    */
    readonly logStreamName?: string;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string;
    private _logStreamName?;
    get logStreamName(): string;
    set logStreamName(value: string);
    resetLogStreamName(): void;
    get logStreamNameInput(): string;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_interval KinesisFirehoseDeliveryStream#buffer_interval}
    */
    readonly bufferInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_size KinesisFirehoseDeliveryStream#buffer_size}
    */
    readonly bufferSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#compression_format KinesisFirehoseDeliveryStream#compression_format}
    */
    readonly compressionFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#prefix KinesisFirehoseDeliveryStream#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration | undefined);
    private _bucketArn?;
    get bucketArn(): string;
    set bucketArn(value: string);
    get bucketArnInput(): string;
    private _bufferInterval?;
    get bufferInterval(): number;
    set bufferInterval(value: number);
    resetBufferInterval(): void;
    get bufferIntervalInput(): number;
    private _bufferSize?;
    get bufferSize(): number;
    set bufferSize(value: number);
    resetBufferSize(): void;
    get bufferSizeInput(): number;
    private _compressionFormat?;
    get compressionFormat(): string;
    set compressionFormat(value: string);
    resetCompressionFormat(): void;
    get compressionFormatInput(): string;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _cloudwatchLoggingOptions;
    get cloudwatchLoggingOptions(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference;
    putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions): void;
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3Configuration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_interval KinesisFirehoseDeliveryStream#buffer_interval}
    */
    readonly bufferInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_size KinesisFirehoseDeliveryStream#buffer_size}
    */
    readonly bufferSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#compression_format KinesisFirehoseDeliveryStream#compression_format}
    */
    readonly compressionFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
    */
    readonly errorOutputPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#prefix KinesisFirehoseDeliveryStream#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
    */
    readonly s3BackupMode?: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions;
    /**
    * data_format_conversion_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#data_format_conversion_configuration KinesisFirehoseDeliveryStream#data_format_conversion_configuration}
    */
    readonly dataFormatConversionConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration;
    /**
    * dynamic_partitioning_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#dynamic_partitioning_configuration KinesisFirehoseDeliveryStream#dynamic_partitioning_configuration}
    */
    readonly dynamicPartitioningConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration;
    /**
    * processing_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
    */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration;
    /**
    * s3_backup_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_configuration KinesisFirehoseDeliveryStream#s3_backup_configuration}
    */
    readonly s3BackupConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3Configuration): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3Configuration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3Configuration | undefined);
    private _bucketArn?;
    get bucketArn(): string;
    set bucketArn(value: string);
    get bucketArnInput(): string;
    private _bufferInterval?;
    get bufferInterval(): number;
    set bufferInterval(value: number);
    resetBufferInterval(): void;
    get bufferIntervalInput(): number;
    private _bufferSize?;
    get bufferSize(): number;
    set bufferSize(value: number);
    resetBufferSize(): void;
    get bufferSizeInput(): number;
    private _compressionFormat?;
    get compressionFormat(): string;
    set compressionFormat(value: string);
    resetCompressionFormat(): void;
    get compressionFormatInput(): string;
    private _errorOutputPrefix?;
    get errorOutputPrefix(): string;
    set errorOutputPrefix(value: string);
    resetErrorOutputPrefix(): void;
    get errorOutputPrefixInput(): string;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _s3BackupMode?;
    get s3BackupMode(): string;
    set s3BackupMode(value: string);
    resetS3BackupMode(): void;
    get s3BackupModeInput(): string;
    private _cloudwatchLoggingOptions;
    get cloudwatchLoggingOptions(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsOutputReference;
    putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions): void;
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions;
    private _dataFormatConversionConfiguration;
    get dataFormatConversionConfiguration(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputReference;
    putDataFormatConversionConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration): void;
    resetDataFormatConversionConfiguration(): void;
    get dataFormatConversionConfigurationInput(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration;
    private _dynamicPartitioningConfiguration;
    get dynamicPartitioningConfiguration(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationOutputReference;
    putDynamicPartitioningConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration): void;
    resetDynamicPartitioningConfiguration(): void;
    get dynamicPartitioningConfigurationInput(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration;
    private _processingConfiguration;
    get processingConfiguration(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationOutputReference;
    putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration): void;
    resetProcessingConfiguration(): void;
    get processingConfigurationInput(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration;
    private _s3BackupConfiguration;
    get s3BackupConfiguration(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationOutputReference;
    putS3BackupConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration): void;
    resetS3BackupConfiguration(): void;
    get s3BackupConfigurationInput(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration;
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
    */
    readonly logStreamName?: string;
}
export declare function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions): any;
export declare class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string;
    private _logStreamName?;
    get logStreamName(): string;
    set logStreamName(value: string);
    resetLogStreamName(): void;
    get logStreamNameInput(): string;
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
    */
    readonly parameterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
    */
    readonly parameterValue: string;
}
export declare function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParameters): any;
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#type KinesisFirehoseDeliveryStream#type}
    */
    readonly type: string;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameters KinesisFirehoseDeliveryStream#parameters}
    */
    readonly parameters?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParameters[];
}
export declare function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors): any;
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * processors block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processors KinesisFirehoseDeliveryStream#processors}
    */
    readonly processors?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors[];
}
export declare function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _processors?;
    get processors(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors[];
    set processors(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors[]);
    resetProcessors(): void;
    get processorsInput(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors[];
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#name KinesisFirehoseDeliveryStream#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#value KinesisFirehoseDeliveryStream#value}
    */
    readonly value: string;
}
export declare function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes): any;
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#content_encoding KinesisFirehoseDeliveryStream#content_encoding}
    */
    readonly contentEncoding?: string;
    /**
    * common_attributes block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#common_attributes KinesisFirehoseDeliveryStream#common_attributes}
    */
    readonly commonAttributes?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes[];
}
export declare function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration | undefined);
    private _contentEncoding?;
    get contentEncoding(): string;
    set contentEncoding(value: string);
    resetContentEncoding(): void;
    get contentEncodingInput(): string;
    private _commonAttributes?;
    get commonAttributes(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes[];
    set commonAttributes(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes[]);
    resetCommonAttributes(): void;
    get commonAttributesInput(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes[];
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#access_key KinesisFirehoseDeliveryStream#access_key}
    */
    readonly accessKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
    */
    readonly bufferingInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
    */
    readonly bufferingSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#name KinesisFirehoseDeliveryStream#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#retry_duration KinesisFirehoseDeliveryStream#retry_duration}
    */
    readonly retryDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
    */
    readonly s3BackupMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#url KinesisFirehoseDeliveryStream#url}
    */
    readonly url: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions;
    /**
    * processing_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
    */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration;
    /**
    * request_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#request_configuration KinesisFirehoseDeliveryStream#request_configuration}
    */
    readonly requestConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration;
}
export declare function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamHttpEndpointConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamHttpEndpointConfiguration | undefined);
    private _accessKey?;
    get accessKey(): string;
    set accessKey(value: string);
    resetAccessKey(): void;
    get accessKeyInput(): string;
    private _bufferingInterval?;
    get bufferingInterval(): number;
    set bufferingInterval(value: number);
    resetBufferingInterval(): void;
    get bufferingIntervalInput(): number;
    private _bufferingSize?;
    get bufferingSize(): number;
    set bufferingSize(value: number);
    resetBufferingSize(): void;
    get bufferingSizeInput(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _retryDuration?;
    get retryDuration(): number;
    set retryDuration(value: number);
    resetRetryDuration(): void;
    get retryDurationInput(): number;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string;
    private _s3BackupMode?;
    get s3BackupMode(): string;
    set s3BackupMode(value: string);
    resetS3BackupMode(): void;
    get s3BackupModeInput(): string;
    private _url?;
    get url(): string;
    set url(value: string);
    get urlInput(): string;
    private _cloudwatchLoggingOptions;
    get cloudwatchLoggingOptions(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsOutputReference;
    putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions): void;
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions;
    private _processingConfiguration;
    get processingConfiguration(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationOutputReference;
    putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration): void;
    resetProcessingConfiguration(): void;
    get processingConfigurationInput(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration;
    private _requestConfiguration;
    get requestConfiguration(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationOutputReference;
    putRequestConfiguration(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration): void;
    resetRequestConfiguration(): void;
    get requestConfigurationInput(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration;
}
export interface KinesisFirehoseDeliveryStreamKinesisSourceConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#kinesis_stream_arn KinesisFirehoseDeliveryStream#kinesis_stream_arn}
    */
    readonly kinesisStreamArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
}
export declare function kinesisFirehoseDeliveryStreamKinesisSourceConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamKinesisSourceConfigurationOutputReference | KinesisFirehoseDeliveryStreamKinesisSourceConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamKinesisSourceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamKinesisSourceConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamKinesisSourceConfiguration | undefined);
    private _kinesisStreamArn?;
    get kinesisStreamArn(): string;
    set kinesisStreamArn(value: string);
    get kinesisStreamArnInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
    */
    readonly logStreamName?: string;
}
export declare function kinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions): any;
export declare class KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string;
    private _logStreamName?;
    get logStreamName(): string;
    set logStreamName(value: string);
    resetLogStreamName(): void;
    get logStreamNameInput(): string;
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
    */
    readonly parameterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
    */
    readonly parameterValue: string;
}
export declare function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters): any;
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#type KinesisFirehoseDeliveryStream#type}
    */
    readonly type: string;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameters KinesisFirehoseDeliveryStream#parameters}
    */
    readonly parameters?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters[];
}
export declare function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors): any;
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * processors block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processors KinesisFirehoseDeliveryStream#processors}
    */
    readonly processors?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors[];
}
export declare function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _processors?;
    get processors(): KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors[];
    set processors(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors[]);
    resetProcessors(): void;
    get processorsInput(): KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors[];
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
    */
    readonly logStreamName?: string;
}
export declare function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions): any;
export declare class KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string;
    private _logStreamName?;
    get logStreamName(): string;
    set logStreamName(value: string);
    resetLogStreamName(): void;
    get logStreamNameInput(): string;
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_interval KinesisFirehoseDeliveryStream#buffer_interval}
    */
    readonly bufferInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_size KinesisFirehoseDeliveryStream#buffer_size}
    */
    readonly bufferSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#compression_format KinesisFirehoseDeliveryStream#compression_format}
    */
    readonly compressionFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#prefix KinesisFirehoseDeliveryStream#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions;
}
export declare function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration | undefined);
    private _bucketArn?;
    get bucketArn(): string;
    set bucketArn(value: string);
    get bucketArnInput(): string;
    private _bufferInterval?;
    get bufferInterval(): number;
    set bufferInterval(value: number);
    resetBufferInterval(): void;
    get bufferIntervalInput(): number;
    private _bufferSize?;
    get bufferSize(): number;
    set bufferSize(value: number);
    resetBufferSize(): void;
    get bufferSizeInput(): number;
    private _compressionFormat?;
    get compressionFormat(): string;
    set compressionFormat(value: string);
    resetCompressionFormat(): void;
    get compressionFormatInput(): string;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _cloudwatchLoggingOptions;
    get cloudwatchLoggingOptions(): KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference;
    putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions): void;
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions;
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cluster_jdbcurl KinesisFirehoseDeliveryStream#cluster_jdbcurl}
    */
    readonly clusterJdbcurl: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#copy_options KinesisFirehoseDeliveryStream#copy_options}
    */
    readonly copyOptions?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#data_table_columns KinesisFirehoseDeliveryStream#data_table_columns}
    */
    readonly dataTableColumns?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#data_table_name KinesisFirehoseDeliveryStream#data_table_name}
    */
    readonly dataTableName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#password KinesisFirehoseDeliveryStream#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#retry_duration KinesisFirehoseDeliveryStream#retry_duration}
    */
    readonly retryDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
    */
    readonly s3BackupMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#username KinesisFirehoseDeliveryStream#username}
    */
    readonly username: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions;
    /**
    * processing_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
    */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration;
    /**
    * s3_backup_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_configuration KinesisFirehoseDeliveryStream#s3_backup_configuration}
    */
    readonly s3BackupConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration;
}
export declare function kinesisFirehoseDeliveryStreamRedshiftConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamRedshiftConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamRedshiftConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamRedshiftConfiguration | undefined);
    private _clusterJdbcurl?;
    get clusterJdbcurl(): string;
    set clusterJdbcurl(value: string);
    get clusterJdbcurlInput(): string;
    private _copyOptions?;
    get copyOptions(): string;
    set copyOptions(value: string);
    resetCopyOptions(): void;
    get copyOptionsInput(): string;
    private _dataTableColumns?;
    get dataTableColumns(): string;
    set dataTableColumns(value: string);
    resetDataTableColumns(): void;
    get dataTableColumnsInput(): string;
    private _dataTableName?;
    get dataTableName(): string;
    set dataTableName(value: string);
    get dataTableNameInput(): string;
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string;
    private _retryDuration?;
    get retryDuration(): number;
    set retryDuration(value: number);
    resetRetryDuration(): void;
    get retryDurationInput(): number;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _s3BackupMode?;
    get s3BackupMode(): string;
    set s3BackupMode(value: string);
    resetS3BackupMode(): void;
    get s3BackupModeInput(): string;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string;
    private _cloudwatchLoggingOptions;
    get cloudwatchLoggingOptions(): KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsOutputReference;
    putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions): void;
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions;
    private _processingConfiguration;
    get processingConfiguration(): KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationOutputReference;
    putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration): void;
    resetProcessingConfiguration(): void;
    get processingConfigurationInput(): KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration;
    private _s3BackupConfiguration;
    get s3BackupConfiguration(): KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationOutputReference;
    putS3BackupConfiguration(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration): void;
    resetS3BackupConfiguration(): void;
    get s3BackupConfigurationInput(): KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration;
}
export interface KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
    */
    readonly logStreamName?: string;
}
export declare function kinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptions): any;
export declare class KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptions | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string;
    private _logStreamName?;
    get logStreamName(): string;
    set logStreamName(value: string);
    resetLogStreamName(): void;
    get logStreamNameInput(): string;
}
export interface KinesisFirehoseDeliveryStreamS3Configuration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_interval KinesisFirehoseDeliveryStream#buffer_interval}
    */
    readonly bufferInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_size KinesisFirehoseDeliveryStream#buffer_size}
    */
    readonly bufferSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#compression_format KinesisFirehoseDeliveryStream#compression_format}
    */
    readonly compressionFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#prefix KinesisFirehoseDeliveryStream#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptions;
}
export declare function kinesisFirehoseDeliveryStreamS3ConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamS3Configuration): any;
export declare class KinesisFirehoseDeliveryStreamS3ConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamS3Configuration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamS3Configuration | undefined);
    private _bucketArn?;
    get bucketArn(): string;
    set bucketArn(value: string);
    get bucketArnInput(): string;
    private _bufferInterval?;
    get bufferInterval(): number;
    set bufferInterval(value: number);
    resetBufferInterval(): void;
    get bufferIntervalInput(): number;
    private _bufferSize?;
    get bufferSize(): number;
    set bufferSize(value: number);
    resetBufferSize(): void;
    get bufferSizeInput(): number;
    private _compressionFormat?;
    get compressionFormat(): string;
    set compressionFormat(value: string);
    resetCompressionFormat(): void;
    get compressionFormatInput(): string;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _cloudwatchLoggingOptions;
    get cloudwatchLoggingOptions(): KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsOutputReference;
    putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptions): void;
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptions;
}
export interface KinesisFirehoseDeliveryStreamServerSideEncryption {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#key_arn KinesisFirehoseDeliveryStream#key_arn}
    */
    readonly keyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#key_type KinesisFirehoseDeliveryStream#key_type}
    */
    readonly keyType?: string;
}
export declare function kinesisFirehoseDeliveryStreamServerSideEncryptionToTerraform(struct?: KinesisFirehoseDeliveryStreamServerSideEncryptionOutputReference | KinesisFirehoseDeliveryStreamServerSideEncryption): any;
export declare class KinesisFirehoseDeliveryStreamServerSideEncryptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamServerSideEncryption | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamServerSideEncryption | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _keyArn?;
    get keyArn(): string;
    set keyArn(value: string);
    resetKeyArn(): void;
    get keyArnInput(): string;
    private _keyType?;
    get keyType(): string;
    set keyType(value: string);
    resetKeyType(): void;
    get keyTypeInput(): string;
}
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
    */
    readonly logStreamName?: string;
}
export declare function kinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions): any;
export declare class KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string;
    private _logStreamName?;
    get logStreamName(): string;
    set logStreamName(value: string);
    resetLogStreamName(): void;
    get logStreamNameInput(): string;
}
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
    */
    readonly parameterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
    */
    readonly parameterValue: string;
}
export declare function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters): any;
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#type KinesisFirehoseDeliveryStream#type}
    */
    readonly type: string;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameters KinesisFirehoseDeliveryStream#parameters}
    */
    readonly parameters?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters[];
}
export declare function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors): any;
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * processors block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processors KinesisFirehoseDeliveryStream#processors}
    */
    readonly processors?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors[];
}
export declare function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _processors?;
    get processors(): KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors[];
    set processors(value: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors[]);
    resetProcessors(): void;
    get processorsInput(): KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors[];
}
export interface KinesisFirehoseDeliveryStreamSplunkConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#hec_acknowledgment_timeout KinesisFirehoseDeliveryStream#hec_acknowledgment_timeout}
    */
    readonly hecAcknowledgmentTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#hec_endpoint KinesisFirehoseDeliveryStream#hec_endpoint}
    */
    readonly hecEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#hec_endpoint_type KinesisFirehoseDeliveryStream#hec_endpoint_type}
    */
    readonly hecEndpointType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#hec_token KinesisFirehoseDeliveryStream#hec_token}
    */
    readonly hecToken: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#retry_duration KinesisFirehoseDeliveryStream#retry_duration}
    */
    readonly retryDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
    */
    readonly s3BackupMode?: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions;
    /**
    * processing_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
    */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration;
}
export declare function kinesisFirehoseDeliveryStreamSplunkConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationOutputReference | KinesisFirehoseDeliveryStreamSplunkConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamSplunkConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamSplunkConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamSplunkConfiguration | undefined);
    private _hecAcknowledgmentTimeout?;
    get hecAcknowledgmentTimeout(): number;
    set hecAcknowledgmentTimeout(value: number);
    resetHecAcknowledgmentTimeout(): void;
    get hecAcknowledgmentTimeoutInput(): number;
    private _hecEndpoint?;
    get hecEndpoint(): string;
    set hecEndpoint(value: string);
    get hecEndpointInput(): string;
    private _hecEndpointType?;
    get hecEndpointType(): string;
    set hecEndpointType(value: string);
    resetHecEndpointType(): void;
    get hecEndpointTypeInput(): string;
    private _hecToken?;
    get hecToken(): string;
    set hecToken(value: string);
    get hecTokenInput(): string;
    private _retryDuration?;
    get retryDuration(): number;
    set retryDuration(value: number);
    resetRetryDuration(): void;
    get retryDurationInput(): number;
    private _s3BackupMode?;
    get s3BackupMode(): string;
    set s3BackupMode(value: string);
    resetS3BackupMode(): void;
    get s3BackupModeInput(): string;
    private _cloudwatchLoggingOptions;
    get cloudwatchLoggingOptions(): KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsOutputReference;
    putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions): void;
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions;
    private _processingConfiguration;
    get processingConfiguration(): KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationOutputReference;
    putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration): void;
    resetProcessingConfiguration(): void;
    get processingConfigurationInput(): KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html aws_kinesis_firehose_delivery_stream}
*/
export declare class KinesisFirehoseDeliveryStream extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html aws_kinesis_firehose_delivery_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KinesisFirehoseDeliveryStreamConfig
    */
    constructor(scope: Construct, id: string, config: KinesisFirehoseDeliveryStreamConfig);
    get arn(): string;
    private _destination?;
    get destination(): string;
    set destination(value: string);
    get destinationInput(): string;
    private _destinationId?;
    get destinationId(): string;
    set destinationId(value: string);
    resetDestinationId(): void;
    get destinationIdInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
    private _versionId?;
    get versionId(): string;
    set versionId(value: string);
    resetVersionId(): void;
    get versionIdInput(): string;
    private _elasticsearchConfiguration;
    get elasticsearchConfiguration(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationOutputReference;
    putElasticsearchConfiguration(value: KinesisFirehoseDeliveryStreamElasticsearchConfiguration): void;
    resetElasticsearchConfiguration(): void;
    get elasticsearchConfigurationInput(): KinesisFirehoseDeliveryStreamElasticsearchConfiguration;
    private _extendedS3Configuration;
    get extendedS3Configuration(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationOutputReference;
    putExtendedS3Configuration(value: KinesisFirehoseDeliveryStreamExtendedS3Configuration): void;
    resetExtendedS3Configuration(): void;
    get extendedS3ConfigurationInput(): KinesisFirehoseDeliveryStreamExtendedS3Configuration;
    private _httpEndpointConfiguration;
    get httpEndpointConfiguration(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationOutputReference;
    putHttpEndpointConfiguration(value: KinesisFirehoseDeliveryStreamHttpEndpointConfiguration): void;
    resetHttpEndpointConfiguration(): void;
    get httpEndpointConfigurationInput(): KinesisFirehoseDeliveryStreamHttpEndpointConfiguration;
    private _kinesisSourceConfiguration;
    get kinesisSourceConfiguration(): KinesisFirehoseDeliveryStreamKinesisSourceConfigurationOutputReference;
    putKinesisSourceConfiguration(value: KinesisFirehoseDeliveryStreamKinesisSourceConfiguration): void;
    resetKinesisSourceConfiguration(): void;
    get kinesisSourceConfigurationInput(): KinesisFirehoseDeliveryStreamKinesisSourceConfiguration;
    private _redshiftConfiguration;
    get redshiftConfiguration(): KinesisFirehoseDeliveryStreamRedshiftConfigurationOutputReference;
    putRedshiftConfiguration(value: KinesisFirehoseDeliveryStreamRedshiftConfiguration): void;
    resetRedshiftConfiguration(): void;
    get redshiftConfigurationInput(): KinesisFirehoseDeliveryStreamRedshiftConfiguration;
    private _s3Configuration;
    get s3Configuration(): KinesisFirehoseDeliveryStreamS3ConfigurationOutputReference;
    putS3Configuration(value: KinesisFirehoseDeliveryStreamS3Configuration): void;
    resetS3Configuration(): void;
    get s3ConfigurationInput(): KinesisFirehoseDeliveryStreamS3Configuration;
    private _serverSideEncryption;
    get serverSideEncryption(): KinesisFirehoseDeliveryStreamServerSideEncryptionOutputReference;
    putServerSideEncryption(value: KinesisFirehoseDeliveryStreamServerSideEncryption): void;
    resetServerSideEncryption(): void;
    get serverSideEncryptionInput(): KinesisFirehoseDeliveryStreamServerSideEncryption;
    private _splunkConfiguration;
    get splunkConfiguration(): KinesisFirehoseDeliveryStreamSplunkConfigurationOutputReference;
    putSplunkConfiguration(value: KinesisFirehoseDeliveryStreamSplunkConfiguration): void;
    resetSplunkConfiguration(): void;
    get splunkConfigurationInput(): KinesisFirehoseDeliveryStreamSplunkConfiguration;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=kinesis-firehose-delivery-stream.d.ts.map