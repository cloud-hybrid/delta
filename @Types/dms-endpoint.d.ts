import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Database Migration Service
*/
export interface DmsEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#certificate_arn DmsEndpoint#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#database_name DmsEndpoint#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#endpoint_id DmsEndpoint#endpoint_id}
    */
    readonly endpointId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#endpoint_type DmsEndpoint#endpoint_type}
    */
    readonly endpointType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#engine_name DmsEndpoint#engine_name}
    */
    readonly engineName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#extra_connection_attributes DmsEndpoint#extra_connection_attributes}
    */
    readonly extraConnectionAttributes?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#kms_key_arn DmsEndpoint#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#password DmsEndpoint#password}
    */
    readonly password?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#port DmsEndpoint#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#server_name DmsEndpoint#server_name}
    */
    readonly serverName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#service_access_role DmsEndpoint#service_access_role}
    */
    readonly serviceAccessRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#ssl_mode DmsEndpoint#ssl_mode}
    */
    readonly sslMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#tags DmsEndpoint#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#tags_all DmsEndpoint#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#username DmsEndpoint#username}
    */
    readonly username?: string;
    /**
    * elasticsearch_settings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#elasticsearch_settings DmsEndpoint#elasticsearch_settings}
    */
    readonly elasticsearchSettings?: DmsEndpointElasticsearchSettings;
    /**
    * kafka_settings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#kafka_settings DmsEndpoint#kafka_settings}
    */
    readonly kafkaSettings?: DmsEndpointKafkaSettings;
    /**
    * kinesis_settings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#kinesis_settings DmsEndpoint#kinesis_settings}
    */
    readonly kinesisSettings?: DmsEndpointKinesisSettings;
    /**
    * mongodb_settings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#mongodb_settings DmsEndpoint#mongodb_settings}
    */
    readonly mongodbSettings?: DmsEndpointMongodbSettings;
    /**
    * s3_settings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#s3_settings DmsEndpoint#s3_settings}
    */
    readonly s3Settings?: DmsEndpointS3Settings;
}
export interface DmsEndpointElasticsearchSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#endpoint_uri DmsEndpoint#endpoint_uri}
    */
    readonly endpointUri: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#error_retry_duration DmsEndpoint#error_retry_duration}
    */
    readonly errorRetryDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#full_load_error_percentage DmsEndpoint#full_load_error_percentage}
    */
    readonly fullLoadErrorPercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#service_access_role_arn DmsEndpoint#service_access_role_arn}
    */
    readonly serviceAccessRoleArn: string;
}
export declare function dmsEndpointElasticsearchSettingsToTerraform(struct?: DmsEndpointElasticsearchSettingsOutputReference | DmsEndpointElasticsearchSettings): any;
export declare class DmsEndpointElasticsearchSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DmsEndpointElasticsearchSettings | undefined;
    set internalValue(value: DmsEndpointElasticsearchSettings | undefined);
    private _endpointUri?;
    get endpointUri(): string;
    set endpointUri(value: string);
    get endpointUriInput(): string;
    private _errorRetryDuration?;
    get errorRetryDuration(): number;
    set errorRetryDuration(value: number);
    resetErrorRetryDuration(): void;
    get errorRetryDurationInput(): number;
    private _fullLoadErrorPercentage?;
    get fullLoadErrorPercentage(): number;
    set fullLoadErrorPercentage(value: number);
    resetFullLoadErrorPercentage(): void;
    get fullLoadErrorPercentageInput(): number;
    private _serviceAccessRoleArn?;
    get serviceAccessRoleArn(): string;
    set serviceAccessRoleArn(value: string);
    get serviceAccessRoleArnInput(): string;
}
export interface DmsEndpointKafkaSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#broker DmsEndpoint#broker}
    */
    readonly broker: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#include_control_details DmsEndpoint#include_control_details}
    */
    readonly includeControlDetails?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#include_null_and_empty DmsEndpoint#include_null_and_empty}
    */
    readonly includeNullAndEmpty?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#include_partition_value DmsEndpoint#include_partition_value}
    */
    readonly includePartitionValue?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#include_table_alter_operations DmsEndpoint#include_table_alter_operations}
    */
    readonly includeTableAlterOperations?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#include_transaction_details DmsEndpoint#include_transaction_details}
    */
    readonly includeTransactionDetails?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#message_format DmsEndpoint#message_format}
    */
    readonly messageFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#message_max_bytes DmsEndpoint#message_max_bytes}
    */
    readonly messageMaxBytes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#no_hex_prefix DmsEndpoint#no_hex_prefix}
    */
    readonly noHexPrefix?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#partition_include_schema_table DmsEndpoint#partition_include_schema_table}
    */
    readonly partitionIncludeSchemaTable?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#sasl_password DmsEndpoint#sasl_password}
    */
    readonly saslPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#sasl_username DmsEndpoint#sasl_username}
    */
    readonly saslUsername?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#security_protocol DmsEndpoint#security_protocol}
    */
    readonly securityProtocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}
    */
    readonly sslCaCertificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#ssl_client_certificate_arn DmsEndpoint#ssl_client_certificate_arn}
    */
    readonly sslClientCertificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#ssl_client_key_arn DmsEndpoint#ssl_client_key_arn}
    */
    readonly sslClientKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#ssl_client_key_password DmsEndpoint#ssl_client_key_password}
    */
    readonly sslClientKeyPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#topic DmsEndpoint#topic}
    */
    readonly topic?: string;
}
export declare function dmsEndpointKafkaSettingsToTerraform(struct?: DmsEndpointKafkaSettingsOutputReference | DmsEndpointKafkaSettings): any;
export declare class DmsEndpointKafkaSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DmsEndpointKafkaSettings | undefined;
    set internalValue(value: DmsEndpointKafkaSettings | undefined);
    private _broker?;
    get broker(): string;
    set broker(value: string);
    get brokerInput(): string;
    private _includeControlDetails?;
    get includeControlDetails(): boolean | cdktf.IResolvable;
    set includeControlDetails(value: boolean | cdktf.IResolvable);
    resetIncludeControlDetails(): void;
    get includeControlDetailsInput(): boolean | cdktf.IResolvable;
    private _includeNullAndEmpty?;
    get includeNullAndEmpty(): boolean | cdktf.IResolvable;
    set includeNullAndEmpty(value: boolean | cdktf.IResolvable);
    resetIncludeNullAndEmpty(): void;
    get includeNullAndEmptyInput(): boolean | cdktf.IResolvable;
    private _includePartitionValue?;
    get includePartitionValue(): boolean | cdktf.IResolvable;
    set includePartitionValue(value: boolean | cdktf.IResolvable);
    resetIncludePartitionValue(): void;
    get includePartitionValueInput(): boolean | cdktf.IResolvable;
    private _includeTableAlterOperations?;
    get includeTableAlterOperations(): boolean | cdktf.IResolvable;
    set includeTableAlterOperations(value: boolean | cdktf.IResolvable);
    resetIncludeTableAlterOperations(): void;
    get includeTableAlterOperationsInput(): boolean | cdktf.IResolvable;
    private _includeTransactionDetails?;
    get includeTransactionDetails(): boolean | cdktf.IResolvable;
    set includeTransactionDetails(value: boolean | cdktf.IResolvable);
    resetIncludeTransactionDetails(): void;
    get includeTransactionDetailsInput(): boolean | cdktf.IResolvable;
    private _messageFormat?;
    get messageFormat(): string;
    set messageFormat(value: string);
    resetMessageFormat(): void;
    get messageFormatInput(): string;
    private _messageMaxBytes?;
    get messageMaxBytes(): number;
    set messageMaxBytes(value: number);
    resetMessageMaxBytes(): void;
    get messageMaxBytesInput(): number;
    private _noHexPrefix?;
    get noHexPrefix(): boolean | cdktf.IResolvable;
    set noHexPrefix(value: boolean | cdktf.IResolvable);
    resetNoHexPrefix(): void;
    get noHexPrefixInput(): boolean | cdktf.IResolvable;
    private _partitionIncludeSchemaTable?;
    get partitionIncludeSchemaTable(): boolean | cdktf.IResolvable;
    set partitionIncludeSchemaTable(value: boolean | cdktf.IResolvable);
    resetPartitionIncludeSchemaTable(): void;
    get partitionIncludeSchemaTableInput(): boolean | cdktf.IResolvable;
    private _saslPassword?;
    get saslPassword(): string;
    set saslPassword(value: string);
    resetSaslPassword(): void;
    get saslPasswordInput(): string;
    private _saslUsername?;
    get saslUsername(): string;
    set saslUsername(value: string);
    resetSaslUsername(): void;
    get saslUsernameInput(): string;
    private _securityProtocol?;
    get securityProtocol(): string;
    set securityProtocol(value: string);
    resetSecurityProtocol(): void;
    get securityProtocolInput(): string;
    private _sslCaCertificateArn?;
    get sslCaCertificateArn(): string;
    set sslCaCertificateArn(value: string);
    resetSslCaCertificateArn(): void;
    get sslCaCertificateArnInput(): string;
    private _sslClientCertificateArn?;
    get sslClientCertificateArn(): string;
    set sslClientCertificateArn(value: string);
    resetSslClientCertificateArn(): void;
    get sslClientCertificateArnInput(): string;
    private _sslClientKeyArn?;
    get sslClientKeyArn(): string;
    set sslClientKeyArn(value: string);
    resetSslClientKeyArn(): void;
    get sslClientKeyArnInput(): string;
    private _sslClientKeyPassword?;
    get sslClientKeyPassword(): string;
    set sslClientKeyPassword(value: string);
    resetSslClientKeyPassword(): void;
    get sslClientKeyPasswordInput(): string;
    private _topic?;
    get topic(): string;
    set topic(value: string);
    resetTopic(): void;
    get topicInput(): string;
}
export interface DmsEndpointKinesisSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#include_control_details DmsEndpoint#include_control_details}
    */
    readonly includeControlDetails?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#include_null_and_empty DmsEndpoint#include_null_and_empty}
    */
    readonly includeNullAndEmpty?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#include_partition_value DmsEndpoint#include_partition_value}
    */
    readonly includePartitionValue?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#include_table_alter_operations DmsEndpoint#include_table_alter_operations}
    */
    readonly includeTableAlterOperations?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#include_transaction_details DmsEndpoint#include_transaction_details}
    */
    readonly includeTransactionDetails?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#message_format DmsEndpoint#message_format}
    */
    readonly messageFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#partition_include_schema_table DmsEndpoint#partition_include_schema_table}
    */
    readonly partitionIncludeSchemaTable?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#service_access_role_arn DmsEndpoint#service_access_role_arn}
    */
    readonly serviceAccessRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#stream_arn DmsEndpoint#stream_arn}
    */
    readonly streamArn?: string;
}
export declare function dmsEndpointKinesisSettingsToTerraform(struct?: DmsEndpointKinesisSettingsOutputReference | DmsEndpointKinesisSettings): any;
export declare class DmsEndpointKinesisSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DmsEndpointKinesisSettings | undefined;
    set internalValue(value: DmsEndpointKinesisSettings | undefined);
    private _includeControlDetails?;
    get includeControlDetails(): boolean | cdktf.IResolvable;
    set includeControlDetails(value: boolean | cdktf.IResolvable);
    resetIncludeControlDetails(): void;
    get includeControlDetailsInput(): boolean | cdktf.IResolvable;
    private _includeNullAndEmpty?;
    get includeNullAndEmpty(): boolean | cdktf.IResolvable;
    set includeNullAndEmpty(value: boolean | cdktf.IResolvable);
    resetIncludeNullAndEmpty(): void;
    get includeNullAndEmptyInput(): boolean | cdktf.IResolvable;
    private _includePartitionValue?;
    get includePartitionValue(): boolean | cdktf.IResolvable;
    set includePartitionValue(value: boolean | cdktf.IResolvable);
    resetIncludePartitionValue(): void;
    get includePartitionValueInput(): boolean | cdktf.IResolvable;
    private _includeTableAlterOperations?;
    get includeTableAlterOperations(): boolean | cdktf.IResolvable;
    set includeTableAlterOperations(value: boolean | cdktf.IResolvable);
    resetIncludeTableAlterOperations(): void;
    get includeTableAlterOperationsInput(): boolean | cdktf.IResolvable;
    private _includeTransactionDetails?;
    get includeTransactionDetails(): boolean | cdktf.IResolvable;
    set includeTransactionDetails(value: boolean | cdktf.IResolvable);
    resetIncludeTransactionDetails(): void;
    get includeTransactionDetailsInput(): boolean | cdktf.IResolvable;
    private _messageFormat?;
    get messageFormat(): string;
    set messageFormat(value: string);
    resetMessageFormat(): void;
    get messageFormatInput(): string;
    private _partitionIncludeSchemaTable?;
    get partitionIncludeSchemaTable(): boolean | cdktf.IResolvable;
    set partitionIncludeSchemaTable(value: boolean | cdktf.IResolvable);
    resetPartitionIncludeSchemaTable(): void;
    get partitionIncludeSchemaTableInput(): boolean | cdktf.IResolvable;
    private _serviceAccessRoleArn?;
    get serviceAccessRoleArn(): string;
    set serviceAccessRoleArn(value: string);
    resetServiceAccessRoleArn(): void;
    get serviceAccessRoleArnInput(): string;
    private _streamArn?;
    get streamArn(): string;
    set streamArn(value: string);
    resetStreamArn(): void;
    get streamArnInput(): string;
}
export interface DmsEndpointMongodbSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#auth_mechanism DmsEndpoint#auth_mechanism}
    */
    readonly authMechanism?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#auth_source DmsEndpoint#auth_source}
    */
    readonly authSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#auth_type DmsEndpoint#auth_type}
    */
    readonly authType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#docs_to_investigate DmsEndpoint#docs_to_investigate}
    */
    readonly docsToInvestigate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#extract_doc_id DmsEndpoint#extract_doc_id}
    */
    readonly extractDocId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#nesting_level DmsEndpoint#nesting_level}
    */
    readonly nestingLevel?: string;
}
export declare function dmsEndpointMongodbSettingsToTerraform(struct?: DmsEndpointMongodbSettingsOutputReference | DmsEndpointMongodbSettings): any;
export declare class DmsEndpointMongodbSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DmsEndpointMongodbSettings | undefined;
    set internalValue(value: DmsEndpointMongodbSettings | undefined);
    private _authMechanism?;
    get authMechanism(): string;
    set authMechanism(value: string);
    resetAuthMechanism(): void;
    get authMechanismInput(): string;
    private _authSource?;
    get authSource(): string;
    set authSource(value: string);
    resetAuthSource(): void;
    get authSourceInput(): string;
    private _authType?;
    get authType(): string;
    set authType(value: string);
    resetAuthType(): void;
    get authTypeInput(): string;
    private _docsToInvestigate?;
    get docsToInvestigate(): string;
    set docsToInvestigate(value: string);
    resetDocsToInvestigate(): void;
    get docsToInvestigateInput(): string;
    private _extractDocId?;
    get extractDocId(): string;
    set extractDocId(value: string);
    resetExtractDocId(): void;
    get extractDocIdInput(): string;
    private _nestingLevel?;
    get nestingLevel(): string;
    set nestingLevel(value: string);
    resetNestingLevel(): void;
    get nestingLevelInput(): string;
}
export interface DmsEndpointS3Settings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#bucket_folder DmsEndpoint#bucket_folder}
    */
    readonly bucketFolder?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#bucket_name DmsEndpoint#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#compression_type DmsEndpoint#compression_type}
    */
    readonly compressionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#csv_delimiter DmsEndpoint#csv_delimiter}
    */
    readonly csvDelimiter?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#csv_row_delimiter DmsEndpoint#csv_row_delimiter}
    */
    readonly csvRowDelimiter?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#data_format DmsEndpoint#data_format}
    */
    readonly dataFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#date_partition_enabled DmsEndpoint#date_partition_enabled}
    */
    readonly datePartitionEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#encryption_mode DmsEndpoint#encryption_mode}
    */
    readonly encryptionMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#external_table_definition DmsEndpoint#external_table_definition}
    */
    readonly externalTableDefinition?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#parquet_timestamp_in_millisecond DmsEndpoint#parquet_timestamp_in_millisecond}
    */
    readonly parquetTimestampInMillisecond?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#parquet_version DmsEndpoint#parquet_version}
    */
    readonly parquetVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}
    */
    readonly serverSideEncryptionKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#service_access_role_arn DmsEndpoint#service_access_role_arn}
    */
    readonly serviceAccessRoleArn?: string;
}
export declare function dmsEndpointS3SettingsToTerraform(struct?: DmsEndpointS3SettingsOutputReference | DmsEndpointS3Settings): any;
export declare class DmsEndpointS3SettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DmsEndpointS3Settings | undefined;
    set internalValue(value: DmsEndpointS3Settings | undefined);
    private _bucketFolder?;
    get bucketFolder(): string;
    set bucketFolder(value: string);
    resetBucketFolder(): void;
    get bucketFolderInput(): string;
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    resetBucketName(): void;
    get bucketNameInput(): string;
    private _compressionType?;
    get compressionType(): string;
    set compressionType(value: string);
    resetCompressionType(): void;
    get compressionTypeInput(): string;
    private _csvDelimiter?;
    get csvDelimiter(): string;
    set csvDelimiter(value: string);
    resetCsvDelimiter(): void;
    get csvDelimiterInput(): string;
    private _csvRowDelimiter?;
    get csvRowDelimiter(): string;
    set csvRowDelimiter(value: string);
    resetCsvRowDelimiter(): void;
    get csvRowDelimiterInput(): string;
    private _dataFormat?;
    get dataFormat(): string;
    set dataFormat(value: string);
    resetDataFormat(): void;
    get dataFormatInput(): string;
    private _datePartitionEnabled?;
    get datePartitionEnabled(): boolean | cdktf.IResolvable;
    set datePartitionEnabled(value: boolean | cdktf.IResolvable);
    resetDatePartitionEnabled(): void;
    get datePartitionEnabledInput(): boolean | cdktf.IResolvable;
    private _encryptionMode?;
    get encryptionMode(): string;
    set encryptionMode(value: string);
    resetEncryptionMode(): void;
    get encryptionModeInput(): string;
    private _externalTableDefinition?;
    get externalTableDefinition(): string;
    set externalTableDefinition(value: string);
    resetExternalTableDefinition(): void;
    get externalTableDefinitionInput(): string;
    private _parquetTimestampInMillisecond?;
    get parquetTimestampInMillisecond(): boolean | cdktf.IResolvable;
    set parquetTimestampInMillisecond(value: boolean | cdktf.IResolvable);
    resetParquetTimestampInMillisecond(): void;
    get parquetTimestampInMillisecondInput(): boolean | cdktf.IResolvable;
    private _parquetVersion?;
    get parquetVersion(): string;
    set parquetVersion(value: string);
    resetParquetVersion(): void;
    get parquetVersionInput(): string;
    private _serverSideEncryptionKmsKeyId?;
    get serverSideEncryptionKmsKeyId(): string;
    set serverSideEncryptionKmsKeyId(value: string);
    resetServerSideEncryptionKmsKeyId(): void;
    get serverSideEncryptionKmsKeyIdInput(): string;
    private _serviceAccessRoleArn?;
    get serviceAccessRoleArn(): string;
    set serviceAccessRoleArn(value: string);
    resetServiceAccessRoleArn(): void;
    get serviceAccessRoleArnInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html aws_dms_endpoint}
*/
export declare class DmsEndpoint extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html aws_dms_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DmsEndpointConfig
    */
    constructor(scope: Construct, id: string, config: DmsEndpointConfig);
    private _certificateArn?;
    get certificateArn(): string;
    set certificateArn(value: string);
    resetCertificateArn(): void;
    get certificateArnInput(): string;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    resetDatabaseName(): void;
    get databaseNameInput(): string;
    get endpointArn(): string;
    private _endpointId?;
    get endpointId(): string;
    set endpointId(value: string);
    get endpointIdInput(): string;
    private _endpointType?;
    get endpointType(): string;
    set endpointType(value: string);
    get endpointTypeInput(): string;
    private _engineName?;
    get engineName(): string;
    set engineName(value: string);
    get engineNameInput(): string;
    private _extraConnectionAttributes?;
    get extraConnectionAttributes(): string;
    set extraConnectionAttributes(value: string);
    resetExtraConnectionAttributes(): void;
    get extraConnectionAttributesInput(): string;
    get id(): string;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string;
    private _password?;
    get password(): string;
    set password(value: string);
    resetPassword(): void;
    get passwordInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number;
    private _serverName?;
    get serverName(): string;
    set serverName(value: string);
    resetServerName(): void;
    get serverNameInput(): string;
    private _serviceAccessRole?;
    get serviceAccessRole(): string;
    set serviceAccessRole(value: string);
    resetServiceAccessRole(): void;
    get serviceAccessRoleInput(): string;
    private _sslMode?;
    get sslMode(): string;
    set sslMode(value: string);
    resetSslMode(): void;
    get sslModeInput(): string;
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
    private _username?;
    get username(): string;
    set username(value: string);
    resetUsername(): void;
    get usernameInput(): string;
    private _elasticsearchSettings;
    get elasticsearchSettings(): DmsEndpointElasticsearchSettingsOutputReference;
    putElasticsearchSettings(value: DmsEndpointElasticsearchSettings): void;
    resetElasticsearchSettings(): void;
    get elasticsearchSettingsInput(): DmsEndpointElasticsearchSettings;
    private _kafkaSettings;
    get kafkaSettings(): DmsEndpointKafkaSettingsOutputReference;
    putKafkaSettings(value: DmsEndpointKafkaSettings): void;
    resetKafkaSettings(): void;
    get kafkaSettingsInput(): DmsEndpointKafkaSettings;
    private _kinesisSettings;
    get kinesisSettings(): DmsEndpointKinesisSettingsOutputReference;
    putKinesisSettings(value: DmsEndpointKinesisSettings): void;
    resetKinesisSettings(): void;
    get kinesisSettingsInput(): DmsEndpointKinesisSettings;
    private _mongodbSettings;
    get mongodbSettings(): DmsEndpointMongodbSettingsOutputReference;
    putMongodbSettings(value: DmsEndpointMongodbSettings): void;
    resetMongodbSettings(): void;
    get mongodbSettingsInput(): DmsEndpointMongodbSettings;
    private _s3Settings;
    get s3Settings(): DmsEndpointS3SettingsOutputReference;
    putS3Settings(value: DmsEndpointS3Settings): void;
    resetS3Settings(): void;
    get s3SettingsInput(): DmsEndpointS3Settings;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=dms-endpoint.d.ts.map