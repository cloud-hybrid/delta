import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Kinesis
*/
export interface KinesisAnalyticsApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#code KinesisAnalyticsApplication#code}
    */
    readonly code?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#description KinesisAnalyticsApplication#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#name KinesisAnalyticsApplication#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#start_application KinesisAnalyticsApplication#start_application}
    */
    readonly startApplication?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#tags KinesisAnalyticsApplication#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#tags_all KinesisAnalyticsApplication#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#cloudwatch_logging_options KinesisAnalyticsApplication#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: KinesisAnalyticsApplicationCloudwatchLoggingOptions;
    /**
    * inputs block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#inputs KinesisAnalyticsApplication#inputs}
    */
    readonly inputs?: KinesisAnalyticsApplicationInputs;
    /**
    * outputs block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#outputs KinesisAnalyticsApplication#outputs}
    */
    readonly outputs?: KinesisAnalyticsApplicationOutputs[];
    /**
    * reference_data_sources block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#reference_data_sources KinesisAnalyticsApplication#reference_data_sources}
    */
    readonly referenceDataSources?: KinesisAnalyticsApplicationReferenceDataSources;
}
export interface KinesisAnalyticsApplicationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#log_stream_arn KinesisAnalyticsApplication#log_stream_arn}
    */
    readonly logStreamArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}
    */
    readonly roleArn: string;
}
export declare function kinesisAnalyticsApplicationCloudwatchLoggingOptionsToTerraform(struct?: KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference | KinesisAnalyticsApplicationCloudwatchLoggingOptions): any;
export declare class KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisAnalyticsApplicationCloudwatchLoggingOptions | undefined;
    set internalValue(value: KinesisAnalyticsApplicationCloudwatchLoggingOptions | undefined);
    private _logStreamArn?;
    get logStreamArn(): string;
    set logStreamArn(value: string);
    get logStreamArnInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
}
export interface KinesisAnalyticsApplicationInputsKinesisFirehose {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#resource_arn KinesisAnalyticsApplication#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}
    */
    readonly roleArn: string;
}
export declare function kinesisAnalyticsApplicationInputsKinesisFirehoseToTerraform(struct?: KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference | KinesisAnalyticsApplicationInputsKinesisFirehose): any;
export declare class KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisAnalyticsApplicationInputsKinesisFirehose | undefined;
    set internalValue(value: KinesisAnalyticsApplicationInputsKinesisFirehose | undefined);
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
}
export interface KinesisAnalyticsApplicationInputsKinesisStream {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#resource_arn KinesisAnalyticsApplication#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}
    */
    readonly roleArn: string;
}
export declare function kinesisAnalyticsApplicationInputsKinesisStreamToTerraform(struct?: KinesisAnalyticsApplicationInputsKinesisStreamOutputReference | KinesisAnalyticsApplicationInputsKinesisStream): any;
export declare class KinesisAnalyticsApplicationInputsKinesisStreamOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisAnalyticsApplicationInputsKinesisStream | undefined;
    set internalValue(value: KinesisAnalyticsApplicationInputsKinesisStream | undefined);
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
}
export interface KinesisAnalyticsApplicationInputsParallelism {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#count KinesisAnalyticsApplication#count}
    */
    readonly count?: number;
}
export declare function kinesisAnalyticsApplicationInputsParallelismToTerraform(struct?: KinesisAnalyticsApplicationInputsParallelismOutputReference | KinesisAnalyticsApplicationInputsParallelism): any;
export declare class KinesisAnalyticsApplicationInputsParallelismOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisAnalyticsApplicationInputsParallelism | undefined;
    set internalValue(value: KinesisAnalyticsApplicationInputsParallelism | undefined);
    private _count?;
    get count(): number;
    set count(value: number);
    resetCount(): void;
    get countInput(): number;
}
export interface KinesisAnalyticsApplicationInputsProcessingConfigurationLambda {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#resource_arn KinesisAnalyticsApplication#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}
    */
    readonly roleArn: string;
}
export declare function kinesisAnalyticsApplicationInputsProcessingConfigurationLambdaToTerraform(struct?: KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference | KinesisAnalyticsApplicationInputsProcessingConfigurationLambda): any;
export declare class KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisAnalyticsApplicationInputsProcessingConfigurationLambda | undefined;
    set internalValue(value: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda | undefined);
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
}
export interface KinesisAnalyticsApplicationInputsProcessingConfiguration {
    /**
    * lambda block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#lambda KinesisAnalyticsApplication#lambda}
    */
    readonly lambda: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda;
}
export declare function kinesisAnalyticsApplicationInputsProcessingConfigurationToTerraform(struct?: KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference | KinesisAnalyticsApplicationInputsProcessingConfiguration): any;
export declare class KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisAnalyticsApplicationInputsProcessingConfiguration | undefined;
    set internalValue(value: KinesisAnalyticsApplicationInputsProcessingConfiguration | undefined);
    private _lambda;
    get lambda(): KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference;
    putLambda(value: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda): void;
    get lambdaInput(): KinesisAnalyticsApplicationInputsProcessingConfigurationLambda;
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordColumns {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#mapping KinesisAnalyticsApplication#mapping}
    */
    readonly mapping?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#name KinesisAnalyticsApplication#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#sql_type KinesisAnalyticsApplication#sql_type}
    */
    readonly sqlType: string;
}
export declare function kinesisAnalyticsApplicationInputsSchemaRecordColumnsToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordColumns): any;
export interface KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_column_delimiter KinesisAnalyticsApplication#record_column_delimiter}
    */
    readonly recordColumnDelimiter: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_row_delimiter KinesisAnalyticsApplication#record_row_delimiter}
    */
    readonly recordRowDelimiter: string;
}
export declare function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference | KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv): any;
export declare class KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv | undefined;
    set internalValue(value: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv | undefined);
    private _recordColumnDelimiter?;
    get recordColumnDelimiter(): string;
    set recordColumnDelimiter(value: string);
    get recordColumnDelimiterInput(): string;
    private _recordRowDelimiter?;
    get recordRowDelimiter(): string;
    set recordRowDelimiter(value: string);
    get recordRowDelimiterInput(): string;
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_row_path KinesisAnalyticsApplication#record_row_path}
    */
    readonly recordRowPath: string;
}
export declare function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference | KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson): any;
export declare class KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson | undefined;
    set internalValue(value: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson | undefined);
    private _recordRowPath?;
    get recordRowPath(): string;
    set recordRowPath(value: string);
    get recordRowPathInput(): string;
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters {
    /**
    * csv block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#csv KinesisAnalyticsApplication#csv}
    */
    readonly csv?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv;
    /**
    * json block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#json KinesisAnalyticsApplication#json}
    */
    readonly json?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson;
}
export declare function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference | KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters): any;
export declare class KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters | undefined;
    set internalValue(value: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters | undefined);
    private _csv;
    get csv(): KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference;
    putCsv(value: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv): void;
    resetCsv(): void;
    get csvInput(): KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv;
    private _json;
    get json(): KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference;
    putJson(value: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson): void;
    resetJson(): void;
    get jsonInput(): KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson;
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordFormat {
    /**
    * mapping_parameters block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#mapping_parameters KinesisAnalyticsApplication#mapping_parameters}
    */
    readonly mappingParameters?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters;
}
export declare function kinesisAnalyticsApplicationInputsSchemaRecordFormatToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference | KinesisAnalyticsApplicationInputsSchemaRecordFormat): any;
export declare class KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisAnalyticsApplicationInputsSchemaRecordFormat | undefined;
    set internalValue(value: KinesisAnalyticsApplicationInputsSchemaRecordFormat | undefined);
    private _mappingParameters;
    get mappingParameters(): KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference;
    putMappingParameters(value: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters): void;
    resetMappingParameters(): void;
    get mappingParametersInput(): KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters;
}
export interface KinesisAnalyticsApplicationInputsSchema {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_encoding KinesisAnalyticsApplication#record_encoding}
    */
    readonly recordEncoding?: string;
    /**
    * record_columns block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_columns KinesisAnalyticsApplication#record_columns}
    */
    readonly recordColumns: KinesisAnalyticsApplicationInputsSchemaRecordColumns[];
    /**
    * record_format block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_format KinesisAnalyticsApplication#record_format}
    */
    readonly recordFormat: KinesisAnalyticsApplicationInputsSchemaRecordFormat;
}
export declare function kinesisAnalyticsApplicationInputsSchemaToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaOutputReference | KinesisAnalyticsApplicationInputsSchema): any;
export declare class KinesisAnalyticsApplicationInputsSchemaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisAnalyticsApplicationInputsSchema | undefined;
    set internalValue(value: KinesisAnalyticsApplicationInputsSchema | undefined);
    private _recordEncoding?;
    get recordEncoding(): string;
    set recordEncoding(value: string);
    resetRecordEncoding(): void;
    get recordEncodingInput(): string;
    private _recordColumns?;
    get recordColumns(): KinesisAnalyticsApplicationInputsSchemaRecordColumns[];
    set recordColumns(value: KinesisAnalyticsApplicationInputsSchemaRecordColumns[]);
    get recordColumnsInput(): KinesisAnalyticsApplicationInputsSchemaRecordColumns[];
    private _recordFormat;
    get recordFormat(): KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference;
    putRecordFormat(value: KinesisAnalyticsApplicationInputsSchemaRecordFormat): void;
    get recordFormatInput(): KinesisAnalyticsApplicationInputsSchemaRecordFormat;
}
export interface KinesisAnalyticsApplicationInputsStartingPositionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#starting_position KinesisAnalyticsApplication#starting_position}
    */
    readonly startingPosition?: string;
}
export declare function kinesisAnalyticsApplicationInputsStartingPositionConfigurationToTerraform(struct?: KinesisAnalyticsApplicationInputsStartingPositionConfiguration): any;
export interface KinesisAnalyticsApplicationInputs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#name_prefix KinesisAnalyticsApplication#name_prefix}
    */
    readonly namePrefix: string;
    /**
    * kinesis_firehose block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#kinesis_firehose KinesisAnalyticsApplication#kinesis_firehose}
    */
    readonly kinesisFirehose?: KinesisAnalyticsApplicationInputsKinesisFirehose;
    /**
    * kinesis_stream block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#kinesis_stream KinesisAnalyticsApplication#kinesis_stream}
    */
    readonly kinesisStream?: KinesisAnalyticsApplicationInputsKinesisStream;
    /**
    * parallelism block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#parallelism KinesisAnalyticsApplication#parallelism}
    */
    readonly parallelism?: KinesisAnalyticsApplicationInputsParallelism;
    /**
    * processing_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#processing_configuration KinesisAnalyticsApplication#processing_configuration}
    */
    readonly processingConfiguration?: KinesisAnalyticsApplicationInputsProcessingConfiguration;
    /**
    * schema block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#schema KinesisAnalyticsApplication#schema}
    */
    readonly schema: KinesisAnalyticsApplicationInputsSchema;
    /**
    * starting_position_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#starting_position_configuration KinesisAnalyticsApplication#starting_position_configuration}
    */
    readonly startingPositionConfiguration?: KinesisAnalyticsApplicationInputsStartingPositionConfiguration[];
}
export declare function kinesisAnalyticsApplicationInputsToTerraform(struct?: KinesisAnalyticsApplicationInputsOutputReference | KinesisAnalyticsApplicationInputs): any;
export declare class KinesisAnalyticsApplicationInputsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisAnalyticsApplicationInputs | undefined;
    set internalValue(value: KinesisAnalyticsApplicationInputs | undefined);
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    get namePrefixInput(): string;
    private _kinesisFirehose;
    get kinesisFirehose(): KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference;
    putKinesisFirehose(value: KinesisAnalyticsApplicationInputsKinesisFirehose): void;
    resetKinesisFirehose(): void;
    get kinesisFirehoseInput(): KinesisAnalyticsApplicationInputsKinesisFirehose;
    private _kinesisStream;
    get kinesisStream(): KinesisAnalyticsApplicationInputsKinesisStreamOutputReference;
    putKinesisStream(value: KinesisAnalyticsApplicationInputsKinesisStream): void;
    resetKinesisStream(): void;
    get kinesisStreamInput(): KinesisAnalyticsApplicationInputsKinesisStream;
    private _parallelism;
    get parallelism(): KinesisAnalyticsApplicationInputsParallelismOutputReference;
    putParallelism(value: KinesisAnalyticsApplicationInputsParallelism): void;
    resetParallelism(): void;
    get parallelismInput(): KinesisAnalyticsApplicationInputsParallelism;
    private _processingConfiguration;
    get processingConfiguration(): KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference;
    putProcessingConfiguration(value: KinesisAnalyticsApplicationInputsProcessingConfiguration): void;
    resetProcessingConfiguration(): void;
    get processingConfigurationInput(): KinesisAnalyticsApplicationInputsProcessingConfiguration;
    private _schema;
    get schema(): KinesisAnalyticsApplicationInputsSchemaOutputReference;
    putSchema(value: KinesisAnalyticsApplicationInputsSchema): void;
    get schemaInput(): KinesisAnalyticsApplicationInputsSchema;
    private _startingPositionConfiguration?;
    get startingPositionConfiguration(): KinesisAnalyticsApplicationInputsStartingPositionConfiguration[];
    set startingPositionConfiguration(value: KinesisAnalyticsApplicationInputsStartingPositionConfiguration[]);
    resetStartingPositionConfiguration(): void;
    get startingPositionConfigurationInput(): KinesisAnalyticsApplicationInputsStartingPositionConfiguration[];
}
export interface KinesisAnalyticsApplicationOutputsKinesisFirehose {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#resource_arn KinesisAnalyticsApplication#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}
    */
    readonly roleArn: string;
}
export declare function kinesisAnalyticsApplicationOutputsKinesisFirehoseToTerraform(struct?: KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference | KinesisAnalyticsApplicationOutputsKinesisFirehose): any;
export declare class KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisAnalyticsApplicationOutputsKinesisFirehose | undefined;
    set internalValue(value: KinesisAnalyticsApplicationOutputsKinesisFirehose | undefined);
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
}
export interface KinesisAnalyticsApplicationOutputsKinesisStream {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#resource_arn KinesisAnalyticsApplication#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}
    */
    readonly roleArn: string;
}
export declare function kinesisAnalyticsApplicationOutputsKinesisStreamToTerraform(struct?: KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference | KinesisAnalyticsApplicationOutputsKinesisStream): any;
export declare class KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisAnalyticsApplicationOutputsKinesisStream | undefined;
    set internalValue(value: KinesisAnalyticsApplicationOutputsKinesisStream | undefined);
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
}
export interface KinesisAnalyticsApplicationOutputsLambda {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#resource_arn KinesisAnalyticsApplication#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}
    */
    readonly roleArn: string;
}
export declare function kinesisAnalyticsApplicationOutputsLambdaToTerraform(struct?: KinesisAnalyticsApplicationOutputsLambdaOutputReference | KinesisAnalyticsApplicationOutputsLambda): any;
export declare class KinesisAnalyticsApplicationOutputsLambdaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisAnalyticsApplicationOutputsLambda | undefined;
    set internalValue(value: KinesisAnalyticsApplicationOutputsLambda | undefined);
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
}
export interface KinesisAnalyticsApplicationOutputsSchema {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_format_type KinesisAnalyticsApplication#record_format_type}
    */
    readonly recordFormatType: string;
}
export declare function kinesisAnalyticsApplicationOutputsSchemaToTerraform(struct?: KinesisAnalyticsApplicationOutputsSchemaOutputReference | KinesisAnalyticsApplicationOutputsSchema): any;
export declare class KinesisAnalyticsApplicationOutputsSchemaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisAnalyticsApplicationOutputsSchema | undefined;
    set internalValue(value: KinesisAnalyticsApplicationOutputsSchema | undefined);
    private _recordFormatType?;
    get recordFormatType(): string;
    set recordFormatType(value: string);
    get recordFormatTypeInput(): string;
}
export interface KinesisAnalyticsApplicationOutputs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#name KinesisAnalyticsApplication#name}
    */
    readonly name: string;
    /**
    * kinesis_firehose block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#kinesis_firehose KinesisAnalyticsApplication#kinesis_firehose}
    */
    readonly kinesisFirehose?: KinesisAnalyticsApplicationOutputsKinesisFirehose;
    /**
    * kinesis_stream block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#kinesis_stream KinesisAnalyticsApplication#kinesis_stream}
    */
    readonly kinesisStream?: KinesisAnalyticsApplicationOutputsKinesisStream;
    /**
    * lambda block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#lambda KinesisAnalyticsApplication#lambda}
    */
    readonly lambda?: KinesisAnalyticsApplicationOutputsLambda;
    /**
    * schema block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#schema KinesisAnalyticsApplication#schema}
    */
    readonly schema: KinesisAnalyticsApplicationOutputsSchema;
}
export declare function kinesisAnalyticsApplicationOutputsToTerraform(struct?: KinesisAnalyticsApplicationOutputs): any;
export interface KinesisAnalyticsApplicationReferenceDataSourcesS3 {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#bucket_arn KinesisAnalyticsApplication#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#file_key KinesisAnalyticsApplication#file_key}
    */
    readonly fileKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}
    */
    readonly roleArn: string;
}
export declare function kinesisAnalyticsApplicationReferenceDataSourcesS3ToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference | KinesisAnalyticsApplicationReferenceDataSourcesS3): any;
export declare class KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisAnalyticsApplicationReferenceDataSourcesS3 | undefined;
    set internalValue(value: KinesisAnalyticsApplicationReferenceDataSourcesS3 | undefined);
    private _bucketArn?;
    get bucketArn(): string;
    set bucketArn(value: string);
    get bucketArnInput(): string;
    private _fileKey?;
    get fileKey(): string;
    set fileKey(value: string);
    get fileKeyInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#mapping KinesisAnalyticsApplication#mapping}
    */
    readonly mapping?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#name KinesisAnalyticsApplication#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#sql_type KinesisAnalyticsApplication#sql_type}
    */
    readonly sqlType: string;
}
export declare function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns): any;
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_column_delimiter KinesisAnalyticsApplication#record_column_delimiter}
    */
    readonly recordColumnDelimiter: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_row_delimiter KinesisAnalyticsApplication#record_row_delimiter}
    */
    readonly recordRowDelimiter: string;
}
export declare function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference | KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv): any;
export declare class KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv | undefined;
    set internalValue(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv | undefined);
    private _recordColumnDelimiter?;
    get recordColumnDelimiter(): string;
    set recordColumnDelimiter(value: string);
    get recordColumnDelimiterInput(): string;
    private _recordRowDelimiter?;
    get recordRowDelimiter(): string;
    set recordRowDelimiter(value: string);
    get recordRowDelimiterInput(): string;
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_row_path KinesisAnalyticsApplication#record_row_path}
    */
    readonly recordRowPath: string;
}
export declare function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference | KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson): any;
export declare class KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson | undefined;
    set internalValue(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson | undefined);
    private _recordRowPath?;
    get recordRowPath(): string;
    set recordRowPath(value: string);
    get recordRowPathInput(): string;
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters {
    /**
    * csv block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#csv KinesisAnalyticsApplication#csv}
    */
    readonly csv?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv;
    /**
    * json block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#json KinesisAnalyticsApplication#json}
    */
    readonly json?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson;
}
export declare function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference | KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters): any;
export declare class KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters | undefined;
    set internalValue(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters | undefined);
    private _csv;
    get csv(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference;
    putCsv(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv): void;
    resetCsv(): void;
    get csvInput(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv;
    private _json;
    get json(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference;
    putJson(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson): void;
    resetJson(): void;
    get jsonInput(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson;
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat {
    /**
    * mapping_parameters block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#mapping_parameters KinesisAnalyticsApplication#mapping_parameters}
    */
    readonly mappingParameters?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters;
}
export declare function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference | KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat): any;
export declare class KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat | undefined;
    set internalValue(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat | undefined);
    private _mappingParameters;
    get mappingParameters(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference;
    putMappingParameters(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters): void;
    resetMappingParameters(): void;
    get mappingParametersInput(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters;
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchema {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_encoding KinesisAnalyticsApplication#record_encoding}
    */
    readonly recordEncoding?: string;
    /**
    * record_columns block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_columns KinesisAnalyticsApplication#record_columns}
    */
    readonly recordColumns: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns[];
    /**
    * record_format block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_format KinesisAnalyticsApplication#record_format}
    */
    readonly recordFormat: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat;
}
export declare function kinesisAnalyticsApplicationReferenceDataSourcesSchemaToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference | KinesisAnalyticsApplicationReferenceDataSourcesSchema): any;
export declare class KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisAnalyticsApplicationReferenceDataSourcesSchema | undefined;
    set internalValue(value: KinesisAnalyticsApplicationReferenceDataSourcesSchema | undefined);
    private _recordEncoding?;
    get recordEncoding(): string;
    set recordEncoding(value: string);
    resetRecordEncoding(): void;
    get recordEncodingInput(): string;
    private _recordColumns?;
    get recordColumns(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns[];
    set recordColumns(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns[]);
    get recordColumnsInput(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns[];
    private _recordFormat;
    get recordFormat(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference;
    putRecordFormat(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat): void;
    get recordFormatInput(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat;
}
export interface KinesisAnalyticsApplicationReferenceDataSources {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#table_name KinesisAnalyticsApplication#table_name}
    */
    readonly tableName: string;
    /**
    * s3 block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#s3 KinesisAnalyticsApplication#s3}
    */
    readonly s3: KinesisAnalyticsApplicationReferenceDataSourcesS3;
    /**
    * schema block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#schema KinesisAnalyticsApplication#schema}
    */
    readonly schema: KinesisAnalyticsApplicationReferenceDataSourcesSchema;
}
export declare function kinesisAnalyticsApplicationReferenceDataSourcesToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesOutputReference | KinesisAnalyticsApplicationReferenceDataSources): any;
export declare class KinesisAnalyticsApplicationReferenceDataSourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisAnalyticsApplicationReferenceDataSources | undefined;
    set internalValue(value: KinesisAnalyticsApplicationReferenceDataSources | undefined);
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string;
    private _s3;
    get s3(): KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference;
    putS3(value: KinesisAnalyticsApplicationReferenceDataSourcesS3): void;
    get s3Input(): KinesisAnalyticsApplicationReferenceDataSourcesS3;
    private _schema;
    get schema(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference;
    putSchema(value: KinesisAnalyticsApplicationReferenceDataSourcesSchema): void;
    get schemaInput(): KinesisAnalyticsApplicationReferenceDataSourcesSchema;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html aws_kinesis_analytics_application}
*/
export declare class KinesisAnalyticsApplication extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html aws_kinesis_analytics_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KinesisAnalyticsApplicationConfig
    */
    constructor(scope: Construct, id: string, config: KinesisAnalyticsApplicationConfig);
    get arn(): string;
    private _code?;
    get code(): string;
    set code(value: string);
    resetCode(): void;
    get codeInput(): string;
    get createTimestamp(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    get lastUpdateTimestamp(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _startApplication?;
    get startApplication(): boolean | cdktf.IResolvable;
    set startApplication(value: boolean | cdktf.IResolvable);
    resetStartApplication(): void;
    get startApplicationInput(): boolean | cdktf.IResolvable;
    get status(): string;
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
    get version(): number;
    private _cloudwatchLoggingOptions;
    get cloudwatchLoggingOptions(): KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference;
    putCloudwatchLoggingOptions(value: KinesisAnalyticsApplicationCloudwatchLoggingOptions): void;
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): KinesisAnalyticsApplicationCloudwatchLoggingOptions;
    private _inputs;
    get inputs(): KinesisAnalyticsApplicationInputsOutputReference;
    putInputs(value: KinesisAnalyticsApplicationInputs): void;
    resetInputs(): void;
    get inputsInput(): KinesisAnalyticsApplicationInputs;
    private _outputs?;
    get outputs(): KinesisAnalyticsApplicationOutputs[];
    set outputs(value: KinesisAnalyticsApplicationOutputs[]);
    resetOutputs(): void;
    get outputsInput(): KinesisAnalyticsApplicationOutputs[];
    private _referenceDataSources;
    get referenceDataSources(): KinesisAnalyticsApplicationReferenceDataSourcesOutputReference;
    putReferenceDataSources(value: KinesisAnalyticsApplicationReferenceDataSources): void;
    resetReferenceDataSources(): void;
    get referenceDataSourcesInput(): KinesisAnalyticsApplicationReferenceDataSources;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=kinesis-analytics-application.d.ts.map