import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS QuickSight
*/
export interface QuicksightDataSourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#aws_account_id QuicksightDataSource#aws_account_id}
    */
    readonly awsAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#data_source_id QuicksightDataSource#data_source_id}
    */
    readonly dataSourceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#name QuicksightDataSource#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#tags QuicksightDataSource#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#tags_all QuicksightDataSource#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#type QuicksightDataSource#type}
    */
    readonly type: string;
    /**
    * credentials block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#credentials QuicksightDataSource#credentials}
    */
    readonly credentials?: QuicksightDataSourceCredentials;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#parameters QuicksightDataSource#parameters}
    */
    readonly parameters: QuicksightDataSourceParameters;
    /**
    * permission block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#permission QuicksightDataSource#permission}
    */
    readonly permission?: QuicksightDataSourcePermission[];
    /**
    * ssl_properties block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#ssl_properties QuicksightDataSource#ssl_properties}
    */
    readonly sslProperties?: QuicksightDataSourceSslProperties;
    /**
    * vpc_connection_properties block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#vpc_connection_properties QuicksightDataSource#vpc_connection_properties}
    */
    readonly vpcConnectionProperties?: QuicksightDataSourceVpcConnectionProperties;
}
export interface QuicksightDataSourceCredentialsCredentialPair {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#password QuicksightDataSource#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#username QuicksightDataSource#username}
    */
    readonly username: string;
}
export declare function quicksightDataSourceCredentialsCredentialPairToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairOutputReference | QuicksightDataSourceCredentialsCredentialPair): any;
export declare class QuicksightDataSourceCredentialsCredentialPairOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): QuicksightDataSourceCredentialsCredentialPair | undefined;
    set internalValue(value: QuicksightDataSourceCredentialsCredentialPair | undefined);
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string;
}
export interface QuicksightDataSourceCredentials {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#copy_source_arn QuicksightDataSource#copy_source_arn}
    */
    readonly copySourceArn?: string;
    /**
    * credential_pair block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#credential_pair QuicksightDataSource#credential_pair}
    */
    readonly credentialPair?: QuicksightDataSourceCredentialsCredentialPair;
}
export declare function quicksightDataSourceCredentialsToTerraform(struct?: QuicksightDataSourceCredentialsOutputReference | QuicksightDataSourceCredentials): any;
export declare class QuicksightDataSourceCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): QuicksightDataSourceCredentials | undefined;
    set internalValue(value: QuicksightDataSourceCredentials | undefined);
    private _copySourceArn?;
    get copySourceArn(): string;
    set copySourceArn(value: string);
    resetCopySourceArn(): void;
    get copySourceArnInput(): string;
    private _credentialPair;
    get credentialPair(): QuicksightDataSourceCredentialsCredentialPairOutputReference;
    putCredentialPair(value: QuicksightDataSourceCredentialsCredentialPair): void;
    resetCredentialPair(): void;
    get credentialPairInput(): QuicksightDataSourceCredentialsCredentialPair;
}
export interface QuicksightDataSourceParametersAmazonElasticsearch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#domain QuicksightDataSource#domain}
    */
    readonly domain: string;
}
export declare function quicksightDataSourceParametersAmazonElasticsearchToTerraform(struct?: QuicksightDataSourceParametersAmazonElasticsearchOutputReference | QuicksightDataSourceParametersAmazonElasticsearch): any;
export declare class QuicksightDataSourceParametersAmazonElasticsearchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): QuicksightDataSourceParametersAmazonElasticsearch | undefined;
    set internalValue(value: QuicksightDataSourceParametersAmazonElasticsearch | undefined);
    private _domain?;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string;
}
export interface QuicksightDataSourceParametersAthena {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#work_group QuicksightDataSource#work_group}
    */
    readonly workGroup?: string;
}
export declare function quicksightDataSourceParametersAthenaToTerraform(struct?: QuicksightDataSourceParametersAthenaOutputReference | QuicksightDataSourceParametersAthena): any;
export declare class QuicksightDataSourceParametersAthenaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): QuicksightDataSourceParametersAthena | undefined;
    set internalValue(value: QuicksightDataSourceParametersAthena | undefined);
    private _workGroup?;
    get workGroup(): string;
    set workGroup(value: string);
    resetWorkGroup(): void;
    get workGroupInput(): string;
}
export interface QuicksightDataSourceParametersAurora {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceParametersAuroraToTerraform(struct?: QuicksightDataSourceParametersAuroraOutputReference | QuicksightDataSourceParametersAurora): any;
export declare class QuicksightDataSourceParametersAuroraOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): QuicksightDataSourceParametersAurora | undefined;
    set internalValue(value: QuicksightDataSourceParametersAurora | undefined);
    private _database?;
    get database(): string;
    set database(value: string);
    get databaseInput(): string;
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number;
}
export interface QuicksightDataSourceParametersAuroraPostgresql {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceParametersAuroraPostgresqlToTerraform(struct?: QuicksightDataSourceParametersAuroraPostgresqlOutputReference | QuicksightDataSourceParametersAuroraPostgresql): any;
export declare class QuicksightDataSourceParametersAuroraPostgresqlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): QuicksightDataSourceParametersAuroraPostgresql | undefined;
    set internalValue(value: QuicksightDataSourceParametersAuroraPostgresql | undefined);
    private _database?;
    get database(): string;
    set database(value: string);
    get databaseInput(): string;
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number;
}
export interface QuicksightDataSourceParametersAwsIotAnalytics {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#data_set_name QuicksightDataSource#data_set_name}
    */
    readonly dataSetName: string;
}
export declare function quicksightDataSourceParametersAwsIotAnalyticsToTerraform(struct?: QuicksightDataSourceParametersAwsIotAnalyticsOutputReference | QuicksightDataSourceParametersAwsIotAnalytics): any;
export declare class QuicksightDataSourceParametersAwsIotAnalyticsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): QuicksightDataSourceParametersAwsIotAnalytics | undefined;
    set internalValue(value: QuicksightDataSourceParametersAwsIotAnalytics | undefined);
    private _dataSetName?;
    get dataSetName(): string;
    set dataSetName(value: string);
    get dataSetNameInput(): string;
}
export interface QuicksightDataSourceParametersJira {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#site_base_url QuicksightDataSource#site_base_url}
    */
    readonly siteBaseUrl: string;
}
export declare function quicksightDataSourceParametersJiraToTerraform(struct?: QuicksightDataSourceParametersJiraOutputReference | QuicksightDataSourceParametersJira): any;
export declare class QuicksightDataSourceParametersJiraOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): QuicksightDataSourceParametersJira | undefined;
    set internalValue(value: QuicksightDataSourceParametersJira | undefined);
    private _siteBaseUrl?;
    get siteBaseUrl(): string;
    set siteBaseUrl(value: string);
    get siteBaseUrlInput(): string;
}
export interface QuicksightDataSourceParametersMariaDb {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceParametersMariaDbToTerraform(struct?: QuicksightDataSourceParametersMariaDbOutputReference | QuicksightDataSourceParametersMariaDb): any;
export declare class QuicksightDataSourceParametersMariaDbOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): QuicksightDataSourceParametersMariaDb | undefined;
    set internalValue(value: QuicksightDataSourceParametersMariaDb | undefined);
    private _database?;
    get database(): string;
    set database(value: string);
    get databaseInput(): string;
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number;
}
export interface QuicksightDataSourceParametersMysql {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceParametersMysqlToTerraform(struct?: QuicksightDataSourceParametersMysqlOutputReference | QuicksightDataSourceParametersMysql): any;
export declare class QuicksightDataSourceParametersMysqlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): QuicksightDataSourceParametersMysql | undefined;
    set internalValue(value: QuicksightDataSourceParametersMysql | undefined);
    private _database?;
    get database(): string;
    set database(value: string);
    get databaseInput(): string;
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number;
}
export interface QuicksightDataSourceParametersOracle {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceParametersOracleToTerraform(struct?: QuicksightDataSourceParametersOracleOutputReference | QuicksightDataSourceParametersOracle): any;
export declare class QuicksightDataSourceParametersOracleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): QuicksightDataSourceParametersOracle | undefined;
    set internalValue(value: QuicksightDataSourceParametersOracle | undefined);
    private _database?;
    get database(): string;
    set database(value: string);
    get databaseInput(): string;
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number;
}
export interface QuicksightDataSourceParametersPostgresql {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceParametersPostgresqlToTerraform(struct?: QuicksightDataSourceParametersPostgresqlOutputReference | QuicksightDataSourceParametersPostgresql): any;
export declare class QuicksightDataSourceParametersPostgresqlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): QuicksightDataSourceParametersPostgresql | undefined;
    set internalValue(value: QuicksightDataSourceParametersPostgresql | undefined);
    private _database?;
    get database(): string;
    set database(value: string);
    get databaseInput(): string;
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number;
}
export interface QuicksightDataSourceParametersPresto {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#catalog QuicksightDataSource#catalog}
    */
    readonly catalog: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceParametersPrestoToTerraform(struct?: QuicksightDataSourceParametersPrestoOutputReference | QuicksightDataSourceParametersPresto): any;
export declare class QuicksightDataSourceParametersPrestoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): QuicksightDataSourceParametersPresto | undefined;
    set internalValue(value: QuicksightDataSourceParametersPresto | undefined);
    private _catalog?;
    get catalog(): string;
    set catalog(value: string);
    get catalogInput(): string;
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number;
}
export interface QuicksightDataSourceParametersRds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#instance_id QuicksightDataSource#instance_id}
    */
    readonly instanceId: string;
}
export declare function quicksightDataSourceParametersRdsToTerraform(struct?: QuicksightDataSourceParametersRdsOutputReference | QuicksightDataSourceParametersRds): any;
export declare class QuicksightDataSourceParametersRdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): QuicksightDataSourceParametersRds | undefined;
    set internalValue(value: QuicksightDataSourceParametersRds | undefined);
    private _database?;
    get database(): string;
    set database(value: string);
    get databaseInput(): string;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    get instanceIdInput(): string;
}
export interface QuicksightDataSourceParametersRedshift {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#cluster_id QuicksightDataSource#cluster_id}
    */
    readonly clusterId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port?: number;
}
export declare function quicksightDataSourceParametersRedshiftToTerraform(struct?: QuicksightDataSourceParametersRedshiftOutputReference | QuicksightDataSourceParametersRedshift): any;
export declare class QuicksightDataSourceParametersRedshiftOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): QuicksightDataSourceParametersRedshift | undefined;
    set internalValue(value: QuicksightDataSourceParametersRedshift | undefined);
    private _clusterId?;
    get clusterId(): string;
    set clusterId(value: string);
    resetClusterId(): void;
    get clusterIdInput(): string;
    private _database?;
    get database(): string;
    set database(value: string);
    get databaseInput(): string;
    private _host?;
    get host(): string;
    set host(value: string);
    resetHost(): void;
    get hostInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number;
}
export interface QuicksightDataSourceParametersS3ManifestFileLocation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#bucket QuicksightDataSource#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#key QuicksightDataSource#key}
    */
    readonly key: string;
}
export declare function quicksightDataSourceParametersS3ManifestFileLocationToTerraform(struct?: QuicksightDataSourceParametersS3ManifestFileLocationOutputReference | QuicksightDataSourceParametersS3ManifestFileLocation): any;
export declare class QuicksightDataSourceParametersS3ManifestFileLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): QuicksightDataSourceParametersS3ManifestFileLocation | undefined;
    set internalValue(value: QuicksightDataSourceParametersS3ManifestFileLocation | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
}
export interface QuicksightDataSourceParametersS3 {
    /**
    * manifest_file_location block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#manifest_file_location QuicksightDataSource#manifest_file_location}
    */
    readonly manifestFileLocation: QuicksightDataSourceParametersS3ManifestFileLocation;
}
export declare function quicksightDataSourceParametersS3ToTerraform(struct?: QuicksightDataSourceParametersS3OutputReference | QuicksightDataSourceParametersS3): any;
export declare class QuicksightDataSourceParametersS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): QuicksightDataSourceParametersS3 | undefined;
    set internalValue(value: QuicksightDataSourceParametersS3 | undefined);
    private _manifestFileLocation;
    get manifestFileLocation(): QuicksightDataSourceParametersS3ManifestFileLocationOutputReference;
    putManifestFileLocation(value: QuicksightDataSourceParametersS3ManifestFileLocation): void;
    get manifestFileLocationInput(): QuicksightDataSourceParametersS3ManifestFileLocation;
}
export interface QuicksightDataSourceParametersServiceNow {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#site_base_url QuicksightDataSource#site_base_url}
    */
    readonly siteBaseUrl: string;
}
export declare function quicksightDataSourceParametersServiceNowToTerraform(struct?: QuicksightDataSourceParametersServiceNowOutputReference | QuicksightDataSourceParametersServiceNow): any;
export declare class QuicksightDataSourceParametersServiceNowOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): QuicksightDataSourceParametersServiceNow | undefined;
    set internalValue(value: QuicksightDataSourceParametersServiceNow | undefined);
    private _siteBaseUrl?;
    get siteBaseUrl(): string;
    set siteBaseUrl(value: string);
    get siteBaseUrlInput(): string;
}
export interface QuicksightDataSourceParametersSnowflake {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#warehouse QuicksightDataSource#warehouse}
    */
    readonly warehouse: string;
}
export declare function quicksightDataSourceParametersSnowflakeToTerraform(struct?: QuicksightDataSourceParametersSnowflakeOutputReference | QuicksightDataSourceParametersSnowflake): any;
export declare class QuicksightDataSourceParametersSnowflakeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): QuicksightDataSourceParametersSnowflake | undefined;
    set internalValue(value: QuicksightDataSourceParametersSnowflake | undefined);
    private _database?;
    get database(): string;
    set database(value: string);
    get databaseInput(): string;
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string;
    private _warehouse?;
    get warehouse(): string;
    set warehouse(value: string);
    get warehouseInput(): string;
}
export interface QuicksightDataSourceParametersSpark {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceParametersSparkToTerraform(struct?: QuicksightDataSourceParametersSparkOutputReference | QuicksightDataSourceParametersSpark): any;
export declare class QuicksightDataSourceParametersSparkOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): QuicksightDataSourceParametersSpark | undefined;
    set internalValue(value: QuicksightDataSourceParametersSpark | undefined);
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number;
}
export interface QuicksightDataSourceParametersSqlServer {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceParametersSqlServerToTerraform(struct?: QuicksightDataSourceParametersSqlServerOutputReference | QuicksightDataSourceParametersSqlServer): any;
export declare class QuicksightDataSourceParametersSqlServerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): QuicksightDataSourceParametersSqlServer | undefined;
    set internalValue(value: QuicksightDataSourceParametersSqlServer | undefined);
    private _database?;
    get database(): string;
    set database(value: string);
    get databaseInput(): string;
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number;
}
export interface QuicksightDataSourceParametersTeradata {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceParametersTeradataToTerraform(struct?: QuicksightDataSourceParametersTeradataOutputReference | QuicksightDataSourceParametersTeradata): any;
export declare class QuicksightDataSourceParametersTeradataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): QuicksightDataSourceParametersTeradata | undefined;
    set internalValue(value: QuicksightDataSourceParametersTeradata | undefined);
    private _database?;
    get database(): string;
    set database(value: string);
    get databaseInput(): string;
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number;
}
export interface QuicksightDataSourceParametersTwitter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#max_rows QuicksightDataSource#max_rows}
    */
    readonly maxRows: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#query QuicksightDataSource#query}
    */
    readonly query: string;
}
export declare function quicksightDataSourceParametersTwitterToTerraform(struct?: QuicksightDataSourceParametersTwitterOutputReference | QuicksightDataSourceParametersTwitter): any;
export declare class QuicksightDataSourceParametersTwitterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): QuicksightDataSourceParametersTwitter | undefined;
    set internalValue(value: QuicksightDataSourceParametersTwitter | undefined);
    private _maxRows?;
    get maxRows(): number;
    set maxRows(value: number);
    get maxRowsInput(): number;
    private _query?;
    get query(): string;
    set query(value: string);
    get queryInput(): string;
}
export interface QuicksightDataSourceParameters {
    /**
    * amazon_elasticsearch block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#amazon_elasticsearch QuicksightDataSource#amazon_elasticsearch}
    */
    readonly amazonElasticsearch?: QuicksightDataSourceParametersAmazonElasticsearch;
    /**
    * athena block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#athena QuicksightDataSource#athena}
    */
    readonly athena?: QuicksightDataSourceParametersAthena;
    /**
    * aurora block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#aurora QuicksightDataSource#aurora}
    */
    readonly aurora?: QuicksightDataSourceParametersAurora;
    /**
    * aurora_postgresql block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#aurora_postgresql QuicksightDataSource#aurora_postgresql}
    */
    readonly auroraPostgresql?: QuicksightDataSourceParametersAuroraPostgresql;
    /**
    * aws_iot_analytics block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#aws_iot_analytics QuicksightDataSource#aws_iot_analytics}
    */
    readonly awsIotAnalytics?: QuicksightDataSourceParametersAwsIotAnalytics;
    /**
    * jira block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#jira QuicksightDataSource#jira}
    */
    readonly jira?: QuicksightDataSourceParametersJira;
    /**
    * maria_db block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#maria_db QuicksightDataSource#maria_db}
    */
    readonly mariaDb?: QuicksightDataSourceParametersMariaDb;
    /**
    * mysql block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#mysql QuicksightDataSource#mysql}
    */
    readonly mysql?: QuicksightDataSourceParametersMysql;
    /**
    * oracle block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#oracle QuicksightDataSource#oracle}
    */
    readonly oracle?: QuicksightDataSourceParametersOracle;
    /**
    * postgresql block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#postgresql QuicksightDataSource#postgresql}
    */
    readonly postgresql?: QuicksightDataSourceParametersPostgresql;
    /**
    * presto block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#presto QuicksightDataSource#presto}
    */
    readonly presto?: QuicksightDataSourceParametersPresto;
    /**
    * rds block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#rds QuicksightDataSource#rds}
    */
    readonly rds?: QuicksightDataSourceParametersRds;
    /**
    * redshift block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#redshift QuicksightDataSource#redshift}
    */
    readonly redshift?: QuicksightDataSourceParametersRedshift;
    /**
    * s3 block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#s3 QuicksightDataSource#s3}
    */
    readonly s3?: QuicksightDataSourceParametersS3;
    /**
    * service_now block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#service_now QuicksightDataSource#service_now}
    */
    readonly serviceNow?: QuicksightDataSourceParametersServiceNow;
    /**
    * snowflake block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#snowflake QuicksightDataSource#snowflake}
    */
    readonly snowflake?: QuicksightDataSourceParametersSnowflake;
    /**
    * spark block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#spark QuicksightDataSource#spark}
    */
    readonly spark?: QuicksightDataSourceParametersSpark;
    /**
    * sql_server block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#sql_server QuicksightDataSource#sql_server}
    */
    readonly sqlServer?: QuicksightDataSourceParametersSqlServer;
    /**
    * teradata block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#teradata QuicksightDataSource#teradata}
    */
    readonly teradata?: QuicksightDataSourceParametersTeradata;
    /**
    * twitter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#twitter QuicksightDataSource#twitter}
    */
    readonly twitter?: QuicksightDataSourceParametersTwitter;
}
export declare function quicksightDataSourceParametersToTerraform(struct?: QuicksightDataSourceParametersOutputReference | QuicksightDataSourceParameters): any;
export declare class QuicksightDataSourceParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): QuicksightDataSourceParameters | undefined;
    set internalValue(value: QuicksightDataSourceParameters | undefined);
    private _amazonElasticsearch;
    get amazonElasticsearch(): QuicksightDataSourceParametersAmazonElasticsearchOutputReference;
    putAmazonElasticsearch(value: QuicksightDataSourceParametersAmazonElasticsearch): void;
    resetAmazonElasticsearch(): void;
    get amazonElasticsearchInput(): QuicksightDataSourceParametersAmazonElasticsearch;
    private _athena;
    get athena(): QuicksightDataSourceParametersAthenaOutputReference;
    putAthena(value: QuicksightDataSourceParametersAthena): void;
    resetAthena(): void;
    get athenaInput(): QuicksightDataSourceParametersAthena;
    private _aurora;
    get aurora(): QuicksightDataSourceParametersAuroraOutputReference;
    putAurora(value: QuicksightDataSourceParametersAurora): void;
    resetAurora(): void;
    get auroraInput(): QuicksightDataSourceParametersAurora;
    private _auroraPostgresql;
    get auroraPostgresql(): QuicksightDataSourceParametersAuroraPostgresqlOutputReference;
    putAuroraPostgresql(value: QuicksightDataSourceParametersAuroraPostgresql): void;
    resetAuroraPostgresql(): void;
    get auroraPostgresqlInput(): QuicksightDataSourceParametersAuroraPostgresql;
    private _awsIotAnalytics;
    get awsIotAnalytics(): QuicksightDataSourceParametersAwsIotAnalyticsOutputReference;
    putAwsIotAnalytics(value: QuicksightDataSourceParametersAwsIotAnalytics): void;
    resetAwsIotAnalytics(): void;
    get awsIotAnalyticsInput(): QuicksightDataSourceParametersAwsIotAnalytics;
    private _jira;
    get jira(): QuicksightDataSourceParametersJiraOutputReference;
    putJira(value: QuicksightDataSourceParametersJira): void;
    resetJira(): void;
    get jiraInput(): QuicksightDataSourceParametersJira;
    private _mariaDb;
    get mariaDb(): QuicksightDataSourceParametersMariaDbOutputReference;
    putMariaDb(value: QuicksightDataSourceParametersMariaDb): void;
    resetMariaDb(): void;
    get mariaDbInput(): QuicksightDataSourceParametersMariaDb;
    private _mysql;
    get mysql(): QuicksightDataSourceParametersMysqlOutputReference;
    putMysql(value: QuicksightDataSourceParametersMysql): void;
    resetMysql(): void;
    get mysqlInput(): QuicksightDataSourceParametersMysql;
    private _oracle;
    get oracle(): QuicksightDataSourceParametersOracleOutputReference;
    putOracle(value: QuicksightDataSourceParametersOracle): void;
    resetOracle(): void;
    get oracleInput(): QuicksightDataSourceParametersOracle;
    private _postgresql;
    get postgresql(): QuicksightDataSourceParametersPostgresqlOutputReference;
    putPostgresql(value: QuicksightDataSourceParametersPostgresql): void;
    resetPostgresql(): void;
    get postgresqlInput(): QuicksightDataSourceParametersPostgresql;
    private _presto;
    get presto(): QuicksightDataSourceParametersPrestoOutputReference;
    putPresto(value: QuicksightDataSourceParametersPresto): void;
    resetPresto(): void;
    get prestoInput(): QuicksightDataSourceParametersPresto;
    private _rds;
    get rds(): QuicksightDataSourceParametersRdsOutputReference;
    putRds(value: QuicksightDataSourceParametersRds): void;
    resetRds(): void;
    get rdsInput(): QuicksightDataSourceParametersRds;
    private _redshift;
    get redshift(): QuicksightDataSourceParametersRedshiftOutputReference;
    putRedshift(value: QuicksightDataSourceParametersRedshift): void;
    resetRedshift(): void;
    get redshiftInput(): QuicksightDataSourceParametersRedshift;
    private _s3;
    get s3(): QuicksightDataSourceParametersS3OutputReference;
    putS3(value: QuicksightDataSourceParametersS3): void;
    resetS3(): void;
    get s3Input(): QuicksightDataSourceParametersS3;
    private _serviceNow;
    get serviceNow(): QuicksightDataSourceParametersServiceNowOutputReference;
    putServiceNow(value: QuicksightDataSourceParametersServiceNow): void;
    resetServiceNow(): void;
    get serviceNowInput(): QuicksightDataSourceParametersServiceNow;
    private _snowflake;
    get snowflake(): QuicksightDataSourceParametersSnowflakeOutputReference;
    putSnowflake(value: QuicksightDataSourceParametersSnowflake): void;
    resetSnowflake(): void;
    get snowflakeInput(): QuicksightDataSourceParametersSnowflake;
    private _spark;
    get spark(): QuicksightDataSourceParametersSparkOutputReference;
    putSpark(value: QuicksightDataSourceParametersSpark): void;
    resetSpark(): void;
    get sparkInput(): QuicksightDataSourceParametersSpark;
    private _sqlServer;
    get sqlServer(): QuicksightDataSourceParametersSqlServerOutputReference;
    putSqlServer(value: QuicksightDataSourceParametersSqlServer): void;
    resetSqlServer(): void;
    get sqlServerInput(): QuicksightDataSourceParametersSqlServer;
    private _teradata;
    get teradata(): QuicksightDataSourceParametersTeradataOutputReference;
    putTeradata(value: QuicksightDataSourceParametersTeradata): void;
    resetTeradata(): void;
    get teradataInput(): QuicksightDataSourceParametersTeradata;
    private _twitter;
    get twitter(): QuicksightDataSourceParametersTwitterOutputReference;
    putTwitter(value: QuicksightDataSourceParametersTwitter): void;
    resetTwitter(): void;
    get twitterInput(): QuicksightDataSourceParametersTwitter;
}
export interface QuicksightDataSourcePermission {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#actions QuicksightDataSource#actions}
    */
    readonly actions: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#principal QuicksightDataSource#principal}
    */
    readonly principal: string;
}
export declare function quicksightDataSourcePermissionToTerraform(struct?: QuicksightDataSourcePermission): any;
export interface QuicksightDataSourceSslProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#disable_ssl QuicksightDataSource#disable_ssl}
    */
    readonly disableSsl: boolean | cdktf.IResolvable;
}
export declare function quicksightDataSourceSslPropertiesToTerraform(struct?: QuicksightDataSourceSslPropertiesOutputReference | QuicksightDataSourceSslProperties): any;
export declare class QuicksightDataSourceSslPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): QuicksightDataSourceSslProperties | undefined;
    set internalValue(value: QuicksightDataSourceSslProperties | undefined);
    private _disableSsl?;
    get disableSsl(): boolean | cdktf.IResolvable;
    set disableSsl(value: boolean | cdktf.IResolvable);
    get disableSslInput(): boolean | cdktf.IResolvable;
}
export interface QuicksightDataSourceVpcConnectionProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#vpc_connection_arn QuicksightDataSource#vpc_connection_arn}
    */
    readonly vpcConnectionArn: string;
}
export declare function quicksightDataSourceVpcConnectionPropertiesToTerraform(struct?: QuicksightDataSourceVpcConnectionPropertiesOutputReference | QuicksightDataSourceVpcConnectionProperties): any;
export declare class QuicksightDataSourceVpcConnectionPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): QuicksightDataSourceVpcConnectionProperties | undefined;
    set internalValue(value: QuicksightDataSourceVpcConnectionProperties | undefined);
    private _vpcConnectionArn?;
    get vpcConnectionArn(): string;
    set vpcConnectionArn(value: string);
    get vpcConnectionArnInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html aws_quicksight_data_source}
*/
export declare class QuicksightDataSource extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html aws_quicksight_data_source} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightDataSourceConfig
    */
    constructor(scope: Construct, id: string, config: QuicksightDataSourceConfig);
    get arn(): string;
    private _awsAccountId?;
    get awsAccountId(): string;
    set awsAccountId(value: string);
    resetAwsAccountId(): void;
    get awsAccountIdInput(): string;
    private _dataSourceId?;
    get dataSourceId(): string;
    set dataSourceId(value: string);
    get dataSourceIdInput(): string;
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
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _credentials;
    get credentials(): QuicksightDataSourceCredentialsOutputReference;
    putCredentials(value: QuicksightDataSourceCredentials): void;
    resetCredentials(): void;
    get credentialsInput(): QuicksightDataSourceCredentials;
    private _parameters;
    get parameters(): QuicksightDataSourceParametersOutputReference;
    putParameters(value: QuicksightDataSourceParameters): void;
    get parametersInput(): QuicksightDataSourceParameters;
    private _permission?;
    get permission(): QuicksightDataSourcePermission[];
    set permission(value: QuicksightDataSourcePermission[]);
    resetPermission(): void;
    get permissionInput(): QuicksightDataSourcePermission[];
    private _sslProperties;
    get sslProperties(): QuicksightDataSourceSslPropertiesOutputReference;
    putSslProperties(value: QuicksightDataSourceSslProperties): void;
    resetSslProperties(): void;
    get sslPropertiesInput(): QuicksightDataSourceSslProperties;
    private _vpcConnectionProperties;
    get vpcConnectionProperties(): QuicksightDataSourceVpcConnectionPropertiesOutputReference;
    putVpcConnectionProperties(value: QuicksightDataSourceVpcConnectionProperties): void;
    resetVpcConnectionProperties(): void;
    get vpcConnectionPropertiesInput(): QuicksightDataSourceVpcConnectionProperties;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=quicksight-data-source.d.ts.map