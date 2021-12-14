import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS AppSync
*/
export interface AppsyncGraphqlApiConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#authentication_type AppsyncGraphqlApi#authentication_type}
    */
    readonly authenticationType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#name AppsyncGraphqlApi#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#schema AppsyncGraphqlApi#schema}
    */
    readonly schema?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#tags AppsyncGraphqlApi#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#tags_all AppsyncGraphqlApi#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#xray_enabled AppsyncGraphqlApi#xray_enabled}
    */
    readonly xrayEnabled?: boolean | cdktf.IResolvable;
    /**
    * additional_authentication_provider block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#additional_authentication_provider AppsyncGraphqlApi#additional_authentication_provider}
    */
    readonly additionalAuthenticationProvider?: AppsyncGraphqlApiAdditionalAuthenticationProvider[];
    /**
    * log_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#log_config AppsyncGraphqlApi#log_config}
    */
    readonly logConfig?: AppsyncGraphqlApiLogConfig;
    /**
    * openid_connect_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#openid_connect_config AppsyncGraphqlApi#openid_connect_config}
    */
    readonly openidConnectConfig?: AppsyncGraphqlApiOpenidConnectConfig;
    /**
    * user_pool_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#user_pool_config AppsyncGraphqlApi#user_pool_config}
    */
    readonly userPoolConfig?: AppsyncGraphqlApiUserPoolConfig;
}
export interface AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#auth_ttl AppsyncGraphqlApi#auth_ttl}
    */
    readonly authTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#client_id AppsyncGraphqlApi#client_id}
    */
    readonly clientId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#iat_ttl AppsyncGraphqlApi#iat_ttl}
    */
    readonly iatTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#issuer AppsyncGraphqlApi#issuer}
    */
    readonly issuer: string;
}
export declare function appsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigToTerraform(struct?: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference | AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig): any;
export declare class AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig | undefined;
    set internalValue(value: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig | undefined);
    private _authTtl?;
    get authTtl(): number;
    set authTtl(value: number);
    resetAuthTtl(): void;
    get authTtlInput(): number;
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    resetClientId(): void;
    get clientIdInput(): string;
    private _iatTtl?;
    get iatTtl(): number;
    set iatTtl(value: number);
    resetIatTtl(): void;
    get iatTtlInput(): number;
    private _issuer?;
    get issuer(): string;
    set issuer(value: string);
    get issuerInput(): string;
}
export interface AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#app_id_client_regex AppsyncGraphqlApi#app_id_client_regex}
    */
    readonly appIdClientRegex?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#aws_region AppsyncGraphqlApi#aws_region}
    */
    readonly awsRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#user_pool_id AppsyncGraphqlApi#user_pool_id}
    */
    readonly userPoolId: string;
}
export declare function appsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigToTerraform(struct?: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference | AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig): any;
export declare class AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig | undefined;
    set internalValue(value: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig | undefined);
    private _appIdClientRegex?;
    get appIdClientRegex(): string;
    set appIdClientRegex(value: string);
    resetAppIdClientRegex(): void;
    get appIdClientRegexInput(): string;
    private _awsRegion?;
    get awsRegion(): string;
    set awsRegion(value: string);
    resetAwsRegion(): void;
    get awsRegionInput(): string;
    private _userPoolId?;
    get userPoolId(): string;
    set userPoolId(value: string);
    get userPoolIdInput(): string;
}
export interface AppsyncGraphqlApiAdditionalAuthenticationProvider {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#authentication_type AppsyncGraphqlApi#authentication_type}
    */
    readonly authenticationType: string;
    /**
    * openid_connect_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#openid_connect_config AppsyncGraphqlApi#openid_connect_config}
    */
    readonly openidConnectConfig?: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig;
    /**
    * user_pool_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#user_pool_config AppsyncGraphqlApi#user_pool_config}
    */
    readonly userPoolConfig?: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig;
}
export declare function appsyncGraphqlApiAdditionalAuthenticationProviderToTerraform(struct?: AppsyncGraphqlApiAdditionalAuthenticationProvider): any;
export interface AppsyncGraphqlApiLogConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#cloudwatch_logs_role_arn AppsyncGraphqlApi#cloudwatch_logs_role_arn}
    */
    readonly cloudwatchLogsRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#exclude_verbose_content AppsyncGraphqlApi#exclude_verbose_content}
    */
    readonly excludeVerboseContent?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#field_log_level AppsyncGraphqlApi#field_log_level}
    */
    readonly fieldLogLevel: string;
}
export declare function appsyncGraphqlApiLogConfigToTerraform(struct?: AppsyncGraphqlApiLogConfigOutputReference | AppsyncGraphqlApiLogConfig): any;
export declare class AppsyncGraphqlApiLogConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppsyncGraphqlApiLogConfig | undefined;
    set internalValue(value: AppsyncGraphqlApiLogConfig | undefined);
    private _cloudwatchLogsRoleArn?;
    get cloudwatchLogsRoleArn(): string;
    set cloudwatchLogsRoleArn(value: string);
    get cloudwatchLogsRoleArnInput(): string;
    private _excludeVerboseContent?;
    get excludeVerboseContent(): boolean | cdktf.IResolvable;
    set excludeVerboseContent(value: boolean | cdktf.IResolvable);
    resetExcludeVerboseContent(): void;
    get excludeVerboseContentInput(): boolean | cdktf.IResolvable;
    private _fieldLogLevel?;
    get fieldLogLevel(): string;
    set fieldLogLevel(value: string);
    get fieldLogLevelInput(): string;
}
export interface AppsyncGraphqlApiOpenidConnectConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#auth_ttl AppsyncGraphqlApi#auth_ttl}
    */
    readonly authTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#client_id AppsyncGraphqlApi#client_id}
    */
    readonly clientId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#iat_ttl AppsyncGraphqlApi#iat_ttl}
    */
    readonly iatTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#issuer AppsyncGraphqlApi#issuer}
    */
    readonly issuer: string;
}
export declare function appsyncGraphqlApiOpenidConnectConfigToTerraform(struct?: AppsyncGraphqlApiOpenidConnectConfigOutputReference | AppsyncGraphqlApiOpenidConnectConfig): any;
export declare class AppsyncGraphqlApiOpenidConnectConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppsyncGraphqlApiOpenidConnectConfig | undefined;
    set internalValue(value: AppsyncGraphqlApiOpenidConnectConfig | undefined);
    private _authTtl?;
    get authTtl(): number;
    set authTtl(value: number);
    resetAuthTtl(): void;
    get authTtlInput(): number;
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    resetClientId(): void;
    get clientIdInput(): string;
    private _iatTtl?;
    get iatTtl(): number;
    set iatTtl(value: number);
    resetIatTtl(): void;
    get iatTtlInput(): number;
    private _issuer?;
    get issuer(): string;
    set issuer(value: string);
    get issuerInput(): string;
}
export interface AppsyncGraphqlApiUserPoolConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#app_id_client_regex AppsyncGraphqlApi#app_id_client_regex}
    */
    readonly appIdClientRegex?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#aws_region AppsyncGraphqlApi#aws_region}
    */
    readonly awsRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#default_action AppsyncGraphqlApi#default_action}
    */
    readonly defaultAction: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#user_pool_id AppsyncGraphqlApi#user_pool_id}
    */
    readonly userPoolId: string;
}
export declare function appsyncGraphqlApiUserPoolConfigToTerraform(struct?: AppsyncGraphqlApiUserPoolConfigOutputReference | AppsyncGraphqlApiUserPoolConfig): any;
export declare class AppsyncGraphqlApiUserPoolConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppsyncGraphqlApiUserPoolConfig | undefined;
    set internalValue(value: AppsyncGraphqlApiUserPoolConfig | undefined);
    private _appIdClientRegex?;
    get appIdClientRegex(): string;
    set appIdClientRegex(value: string);
    resetAppIdClientRegex(): void;
    get appIdClientRegexInput(): string;
    private _awsRegion?;
    get awsRegion(): string;
    set awsRegion(value: string);
    resetAwsRegion(): void;
    get awsRegionInput(): string;
    private _defaultAction?;
    get defaultAction(): string;
    set defaultAction(value: string);
    get defaultActionInput(): string;
    private _userPoolId?;
    get userPoolId(): string;
    set userPoolId(value: string);
    get userPoolIdInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html aws_appsync_graphql_api}
*/
export declare class AppsyncGraphqlApi extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html aws_appsync_graphql_api} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppsyncGraphqlApiConfig
    */
    constructor(scope: Construct, id: string, config: AppsyncGraphqlApiConfig);
    get arn(): string;
    private _authenticationType?;
    get authenticationType(): string;
    set authenticationType(value: string);
    get authenticationTypeInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _schema?;
    get schema(): string;
    set schema(value: string);
    resetSchema(): void;
    get schemaInput(): string;
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
    uris(key: string): string;
    private _xrayEnabled?;
    get xrayEnabled(): boolean | cdktf.IResolvable;
    set xrayEnabled(value: boolean | cdktf.IResolvable);
    resetXrayEnabled(): void;
    get xrayEnabledInput(): boolean | cdktf.IResolvable;
    private _additionalAuthenticationProvider?;
    get additionalAuthenticationProvider(): AppsyncGraphqlApiAdditionalAuthenticationProvider[];
    set additionalAuthenticationProvider(value: AppsyncGraphqlApiAdditionalAuthenticationProvider[]);
    resetAdditionalAuthenticationProvider(): void;
    get additionalAuthenticationProviderInput(): AppsyncGraphqlApiAdditionalAuthenticationProvider[];
    private _logConfig;
    get logConfig(): AppsyncGraphqlApiLogConfigOutputReference;
    putLogConfig(value: AppsyncGraphqlApiLogConfig): void;
    resetLogConfig(): void;
    get logConfigInput(): AppsyncGraphqlApiLogConfig;
    private _openidConnectConfig;
    get openidConnectConfig(): AppsyncGraphqlApiOpenidConnectConfigOutputReference;
    putOpenidConnectConfig(value: AppsyncGraphqlApiOpenidConnectConfig): void;
    resetOpenidConnectConfig(): void;
    get openidConnectConfigInput(): AppsyncGraphqlApiOpenidConnectConfig;
    private _userPoolConfig;
    get userPoolConfig(): AppsyncGraphqlApiUserPoolConfigOutputReference;
    putUserPoolConfig(value: AppsyncGraphqlApiUserPoolConfig): void;
    resetUserPoolConfig(): void;
    get userPoolConfigInput(): AppsyncGraphqlApiUserPoolConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=appsync-graphql-api.d.ts.map