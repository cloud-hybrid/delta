import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS AppSync
*/
export interface AppsyncDatasourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#api_id AppsyncDatasource#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#description AppsyncDatasource#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#name AppsyncDatasource#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#service_role_arn AppsyncDatasource#service_role_arn}
    */
    readonly serviceRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#type AppsyncDatasource#type}
    */
    readonly type: string;
    /**
    * dynamodb_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#dynamodb_config AppsyncDatasource#dynamodb_config}
    */
    readonly dynamodbConfig?: AppsyncDatasourceDynamodbConfig;
    /**
    * elasticsearch_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#elasticsearch_config AppsyncDatasource#elasticsearch_config}
    */
    readonly elasticsearchConfig?: AppsyncDatasourceElasticsearchConfig;
    /**
    * http_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#http_config AppsyncDatasource#http_config}
    */
    readonly httpConfig?: AppsyncDatasourceHttpConfig;
    /**
    * lambda_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#lambda_config AppsyncDatasource#lambda_config}
    */
    readonly lambdaConfig?: AppsyncDatasourceLambdaConfig;
}
export interface AppsyncDatasourceDynamodbConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#region AppsyncDatasource#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#table_name AppsyncDatasource#table_name}
    */
    readonly tableName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#use_caller_credentials AppsyncDatasource#use_caller_credentials}
    */
    readonly useCallerCredentials?: boolean | cdktf.IResolvable;
}
export declare function appsyncDatasourceDynamodbConfigToTerraform(struct?: AppsyncDatasourceDynamodbConfigOutputReference | AppsyncDatasourceDynamodbConfig): any;
export declare class AppsyncDatasourceDynamodbConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppsyncDatasourceDynamodbConfig | undefined;
    set internalValue(value: AppsyncDatasourceDynamodbConfig | undefined);
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string;
    private _useCallerCredentials?;
    get useCallerCredentials(): boolean | cdktf.IResolvable;
    set useCallerCredentials(value: boolean | cdktf.IResolvable);
    resetUseCallerCredentials(): void;
    get useCallerCredentialsInput(): boolean | cdktf.IResolvable;
}
export interface AppsyncDatasourceElasticsearchConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#endpoint AppsyncDatasource#endpoint}
    */
    readonly endpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#region AppsyncDatasource#region}
    */
    readonly region?: string;
}
export declare function appsyncDatasourceElasticsearchConfigToTerraform(struct?: AppsyncDatasourceElasticsearchConfigOutputReference | AppsyncDatasourceElasticsearchConfig): any;
export declare class AppsyncDatasourceElasticsearchConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppsyncDatasourceElasticsearchConfig | undefined;
    set internalValue(value: AppsyncDatasourceElasticsearchConfig | undefined);
    private _endpoint?;
    get endpoint(): string;
    set endpoint(value: string);
    get endpointInput(): string;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string;
}
export interface AppsyncDatasourceHttpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#endpoint AppsyncDatasource#endpoint}
    */
    readonly endpoint: string;
}
export declare function appsyncDatasourceHttpConfigToTerraform(struct?: AppsyncDatasourceHttpConfigOutputReference | AppsyncDatasourceHttpConfig): any;
export declare class AppsyncDatasourceHttpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppsyncDatasourceHttpConfig | undefined;
    set internalValue(value: AppsyncDatasourceHttpConfig | undefined);
    private _endpoint?;
    get endpoint(): string;
    set endpoint(value: string);
    get endpointInput(): string;
}
export interface AppsyncDatasourceLambdaConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#function_arn AppsyncDatasource#function_arn}
    */
    readonly functionArn: string;
}
export declare function appsyncDatasourceLambdaConfigToTerraform(struct?: AppsyncDatasourceLambdaConfigOutputReference | AppsyncDatasourceLambdaConfig): any;
export declare class AppsyncDatasourceLambdaConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppsyncDatasourceLambdaConfig | undefined;
    set internalValue(value: AppsyncDatasourceLambdaConfig | undefined);
    private _functionArn?;
    get functionArn(): string;
    set functionArn(value: string);
    get functionArnInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html aws_appsync_datasource}
*/
export declare class AppsyncDatasource extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html aws_appsync_datasource} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppsyncDatasourceConfig
    */
    constructor(scope: Construct, id: string, config: AppsyncDatasourceConfig);
    private _apiId?;
    get apiId(): string;
    set apiId(value: string);
    get apiIdInput(): string;
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _serviceRoleArn?;
    get serviceRoleArn(): string;
    set serviceRoleArn(value: string);
    resetServiceRoleArn(): void;
    get serviceRoleArnInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _dynamodbConfig;
    get dynamodbConfig(): AppsyncDatasourceDynamodbConfigOutputReference;
    putDynamodbConfig(value: AppsyncDatasourceDynamodbConfig): void;
    resetDynamodbConfig(): void;
    get dynamodbConfigInput(): AppsyncDatasourceDynamodbConfig;
    private _elasticsearchConfig;
    get elasticsearchConfig(): AppsyncDatasourceElasticsearchConfigOutputReference;
    putElasticsearchConfig(value: AppsyncDatasourceElasticsearchConfig): void;
    resetElasticsearchConfig(): void;
    get elasticsearchConfigInput(): AppsyncDatasourceElasticsearchConfig;
    private _httpConfig;
    get httpConfig(): AppsyncDatasourceHttpConfigOutputReference;
    putHttpConfig(value: AppsyncDatasourceHttpConfig): void;
    resetHttpConfig(): void;
    get httpConfigInput(): AppsyncDatasourceHttpConfig;
    private _lambdaConfig;
    get lambdaConfig(): AppsyncDatasourceLambdaConfigOutputReference;
    putLambdaConfig(value: AppsyncDatasourceLambdaConfig): void;
    resetLambdaConfig(): void;
    get lambdaConfigInput(): AppsyncDatasourceLambdaConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=appsync-datasource.d.ts.map