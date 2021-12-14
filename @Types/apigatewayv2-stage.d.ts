import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* Amazon API Gateway Websocket and HTTP APIs
*/
export interface Apigatewayv2StageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#api_id Apigatewayv2Stage#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#auto_deploy Apigatewayv2Stage#auto_deploy}
    */
    readonly autoDeploy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#client_certificate_id Apigatewayv2Stage#client_certificate_id}
    */
    readonly clientCertificateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#deployment_id Apigatewayv2Stage#deployment_id}
    */
    readonly deploymentId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#description Apigatewayv2Stage#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#name Apigatewayv2Stage#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#stage_variables Apigatewayv2Stage#stage_variables}
    */
    readonly stageVariables?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#tags Apigatewayv2Stage#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#tags_all Apigatewayv2Stage#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * access_log_settings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#access_log_settings Apigatewayv2Stage#access_log_settings}
    */
    readonly accessLogSettings?: Apigatewayv2StageAccessLogSettings;
    /**
    * default_route_settings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#default_route_settings Apigatewayv2Stage#default_route_settings}
    */
    readonly defaultRouteSettings?: Apigatewayv2StageDefaultRouteSettings;
    /**
    * route_settings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#route_settings Apigatewayv2Stage#route_settings}
    */
    readonly routeSettings?: Apigatewayv2StageRouteSettings[];
}
export interface Apigatewayv2StageAccessLogSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#destination_arn Apigatewayv2Stage#destination_arn}
    */
    readonly destinationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#format Apigatewayv2Stage#format}
    */
    readonly format: string;
}
export declare function apigatewayv2StageAccessLogSettingsToTerraform(struct?: Apigatewayv2StageAccessLogSettingsOutputReference | Apigatewayv2StageAccessLogSettings): any;
export declare class Apigatewayv2StageAccessLogSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Apigatewayv2StageAccessLogSettings | undefined;
    set internalValue(value: Apigatewayv2StageAccessLogSettings | undefined);
    private _destinationArn?;
    get destinationArn(): string;
    set destinationArn(value: string);
    get destinationArnInput(): string;
    private _format?;
    get format(): string;
    set format(value: string);
    get formatInput(): string;
}
export interface Apigatewayv2StageDefaultRouteSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}
    */
    readonly dataTraceEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}
    */
    readonly detailedMetricsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#logging_level Apigatewayv2Stage#logging_level}
    */
    readonly loggingLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}
    */
    readonly throttlingBurstLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}
    */
    readonly throttlingRateLimit?: number;
}
export declare function apigatewayv2StageDefaultRouteSettingsToTerraform(struct?: Apigatewayv2StageDefaultRouteSettingsOutputReference | Apigatewayv2StageDefaultRouteSettings): any;
export declare class Apigatewayv2StageDefaultRouteSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Apigatewayv2StageDefaultRouteSettings | undefined;
    set internalValue(value: Apigatewayv2StageDefaultRouteSettings | undefined);
    private _dataTraceEnabled?;
    get dataTraceEnabled(): boolean | cdktf.IResolvable;
    set dataTraceEnabled(value: boolean | cdktf.IResolvable);
    resetDataTraceEnabled(): void;
    get dataTraceEnabledInput(): boolean | cdktf.IResolvable;
    private _detailedMetricsEnabled?;
    get detailedMetricsEnabled(): boolean | cdktf.IResolvable;
    set detailedMetricsEnabled(value: boolean | cdktf.IResolvable);
    resetDetailedMetricsEnabled(): void;
    get detailedMetricsEnabledInput(): boolean | cdktf.IResolvable;
    private _loggingLevel?;
    get loggingLevel(): string;
    set loggingLevel(value: string);
    resetLoggingLevel(): void;
    get loggingLevelInput(): string;
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
}
export interface Apigatewayv2StageRouteSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}
    */
    readonly dataTraceEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}
    */
    readonly detailedMetricsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#logging_level Apigatewayv2Stage#logging_level}
    */
    readonly loggingLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#route_key Apigatewayv2Stage#route_key}
    */
    readonly routeKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}
    */
    readonly throttlingBurstLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}
    */
    readonly throttlingRateLimit?: number;
}
export declare function apigatewayv2StageRouteSettingsToTerraform(struct?: Apigatewayv2StageRouteSettings): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html aws_apigatewayv2_stage}
*/
export declare class Apigatewayv2Stage extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html aws_apigatewayv2_stage} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2StageConfig
    */
    constructor(scope: Construct, id: string, config: Apigatewayv2StageConfig);
    private _apiId?;
    get apiId(): string;
    set apiId(value: string);
    get apiIdInput(): string;
    get arn(): string;
    private _autoDeploy?;
    get autoDeploy(): boolean | cdktf.IResolvable;
    set autoDeploy(value: boolean | cdktf.IResolvable);
    resetAutoDeploy(): void;
    get autoDeployInput(): boolean | cdktf.IResolvable;
    private _clientCertificateId?;
    get clientCertificateId(): string;
    set clientCertificateId(value: string);
    resetClientCertificateId(): void;
    get clientCertificateIdInput(): string;
    private _deploymentId?;
    get deploymentId(): string;
    set deploymentId(value: string);
    resetDeploymentId(): void;
    get deploymentIdInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get executionArn(): string;
    get id(): string;
    get invokeUrl(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _stageVariables?;
    get stageVariables(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set stageVariables(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetStageVariables(): void;
    get stageVariablesInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
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
    private _accessLogSettings;
    get accessLogSettings(): Apigatewayv2StageAccessLogSettingsOutputReference;
    putAccessLogSettings(value: Apigatewayv2StageAccessLogSettings): void;
    resetAccessLogSettings(): void;
    get accessLogSettingsInput(): Apigatewayv2StageAccessLogSettings;
    private _defaultRouteSettings;
    get defaultRouteSettings(): Apigatewayv2StageDefaultRouteSettingsOutputReference;
    putDefaultRouteSettings(value: Apigatewayv2StageDefaultRouteSettings): void;
    resetDefaultRouteSettings(): void;
    get defaultRouteSettingsInput(): Apigatewayv2StageDefaultRouteSettings;
    private _routeSettings?;
    get routeSettings(): Apigatewayv2StageRouteSettings[];
    set routeSettings(value: Apigatewayv2StageRouteSettings[]);
    resetRouteSettings(): void;
    get routeSettingsInput(): Apigatewayv2StageRouteSettings[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=apigatewayv2-stage.d.ts.map