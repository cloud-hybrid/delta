import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* API Gateway
*/
export interface ApiGatewayMethodSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#method_path ApiGatewayMethodSettings#method_path}
    */
    readonly methodPath: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#rest_api_id ApiGatewayMethodSettings#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#stage_name ApiGatewayMethodSettings#stage_name}
    */
    readonly stageName: string;
    /**
    * settings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#settings ApiGatewayMethodSettings#settings}
    */
    readonly settings: ApiGatewayMethodSettingsSettings;
}
export interface ApiGatewayMethodSettingsSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#cache_data_encrypted ApiGatewayMethodSettings#cache_data_encrypted}
    */
    readonly cacheDataEncrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#cache_ttl_in_seconds ApiGatewayMethodSettings#cache_ttl_in_seconds}
    */
    readonly cacheTtlInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#caching_enabled ApiGatewayMethodSettings#caching_enabled}
    */
    readonly cachingEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#data_trace_enabled ApiGatewayMethodSettings#data_trace_enabled}
    */
    readonly dataTraceEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#logging_level ApiGatewayMethodSettings#logging_level}
    */
    readonly loggingLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#metrics_enabled ApiGatewayMethodSettings#metrics_enabled}
    */
    readonly metricsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#require_authorization_for_cache_control ApiGatewayMethodSettings#require_authorization_for_cache_control}
    */
    readonly requireAuthorizationForCacheControl?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#throttling_burst_limit ApiGatewayMethodSettings#throttling_burst_limit}
    */
    readonly throttlingBurstLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#throttling_rate_limit ApiGatewayMethodSettings#throttling_rate_limit}
    */
    readonly throttlingRateLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#unauthorized_cache_control_header_strategy ApiGatewayMethodSettings#unauthorized_cache_control_header_strategy}
    */
    readonly unauthorizedCacheControlHeaderStrategy?: string;
}
export declare function apiGatewayMethodSettingsSettingsToTerraform(struct?: ApiGatewayMethodSettingsSettingsOutputReference | ApiGatewayMethodSettingsSettings): any;
export declare class ApiGatewayMethodSettingsSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ApiGatewayMethodSettingsSettings | undefined;
    set internalValue(value: ApiGatewayMethodSettingsSettings | undefined);
    private _cacheDataEncrypted?;
    get cacheDataEncrypted(): boolean | cdktf.IResolvable;
    set cacheDataEncrypted(value: boolean | cdktf.IResolvable);
    resetCacheDataEncrypted(): void;
    get cacheDataEncryptedInput(): boolean | cdktf.IResolvable;
    private _cacheTtlInSeconds?;
    get cacheTtlInSeconds(): number;
    set cacheTtlInSeconds(value: number);
    resetCacheTtlInSeconds(): void;
    get cacheTtlInSecondsInput(): number;
    private _cachingEnabled?;
    get cachingEnabled(): boolean | cdktf.IResolvable;
    set cachingEnabled(value: boolean | cdktf.IResolvable);
    resetCachingEnabled(): void;
    get cachingEnabledInput(): boolean | cdktf.IResolvable;
    private _dataTraceEnabled?;
    get dataTraceEnabled(): boolean | cdktf.IResolvable;
    set dataTraceEnabled(value: boolean | cdktf.IResolvable);
    resetDataTraceEnabled(): void;
    get dataTraceEnabledInput(): boolean | cdktf.IResolvable;
    private _loggingLevel?;
    get loggingLevel(): string;
    set loggingLevel(value: string);
    resetLoggingLevel(): void;
    get loggingLevelInput(): string;
    private _metricsEnabled?;
    get metricsEnabled(): boolean | cdktf.IResolvable;
    set metricsEnabled(value: boolean | cdktf.IResolvable);
    resetMetricsEnabled(): void;
    get metricsEnabledInput(): boolean | cdktf.IResolvable;
    private _requireAuthorizationForCacheControl?;
    get requireAuthorizationForCacheControl(): boolean | cdktf.IResolvable;
    set requireAuthorizationForCacheControl(value: boolean | cdktf.IResolvable);
    resetRequireAuthorizationForCacheControl(): void;
    get requireAuthorizationForCacheControlInput(): boolean | cdktf.IResolvable;
    private _throttlingBurstLimit?;
    get throttlingBurstLimit(): number;
    set throttlingBurstLimit(value: number);
    resetThrottlingBurstLimit(): void;
    get throttlingBurstLimitInput(): number;
    private _throttlingRateLimit?;
    get throttlingRateLimit(): number;
    set throttlingRateLimit(value: number);
    resetThrottlingRateLimit(): void;
    get throttlingRateLimitInput(): number;
    private _unauthorizedCacheControlHeaderStrategy?;
    get unauthorizedCacheControlHeaderStrategy(): string;
    set unauthorizedCacheControlHeaderStrategy(value: string);
    resetUnauthorizedCacheControlHeaderStrategy(): void;
    get unauthorizedCacheControlHeaderStrategyInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html aws_api_gateway_method_settings}
*/
export declare class ApiGatewayMethodSettings extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html aws_api_gateway_method_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayMethodSettingsConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayMethodSettingsConfig);
    get id(): string;
    private _methodPath?;
    get methodPath(): string;
    set methodPath(value: string);
    get methodPathInput(): string;
    private _restApiId?;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string;
    private _stageName?;
    get stageName(): string;
    set stageName(value: string);
    get stageNameInput(): string;
    private _settings;
    get settings(): ApiGatewayMethodSettingsSettingsOutputReference;
    putSettings(value: ApiGatewayMethodSettingsSettings): void;
    get settingsInput(): ApiGatewayMethodSettingsSettings;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=api-gateway-method-settings.d.ts.map