import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* API Gateway
*/
export interface ApiGatewayStageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#cache_cluster_enabled ApiGatewayStage#cache_cluster_enabled}
    */
    readonly cacheClusterEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#cache_cluster_size ApiGatewayStage#cache_cluster_size}
    */
    readonly cacheClusterSize?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#client_certificate_id ApiGatewayStage#client_certificate_id}
    */
    readonly clientCertificateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#deployment_id ApiGatewayStage#deployment_id}
    */
    readonly deploymentId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#description ApiGatewayStage#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#documentation_version ApiGatewayStage#documentation_version}
    */
    readonly documentationVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#rest_api_id ApiGatewayStage#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#stage_name ApiGatewayStage#stage_name}
    */
    readonly stageName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#tags ApiGatewayStage#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#tags_all ApiGatewayStage#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#variables ApiGatewayStage#variables}
    */
    readonly variables?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#xray_tracing_enabled ApiGatewayStage#xray_tracing_enabled}
    */
    readonly xrayTracingEnabled?: boolean | cdktf.IResolvable;
    /**
    * access_log_settings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#access_log_settings ApiGatewayStage#access_log_settings}
    */
    readonly accessLogSettings?: ApiGatewayStageAccessLogSettings;
}
export interface ApiGatewayStageAccessLogSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#destination_arn ApiGatewayStage#destination_arn}
    */
    readonly destinationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#format ApiGatewayStage#format}
    */
    readonly format: string;
}
export declare function apiGatewayStageAccessLogSettingsToTerraform(struct?: ApiGatewayStageAccessLogSettingsOutputReference | ApiGatewayStageAccessLogSettings): any;
export declare class ApiGatewayStageAccessLogSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ApiGatewayStageAccessLogSettings | undefined;
    set internalValue(value: ApiGatewayStageAccessLogSettings | undefined);
    private _destinationArn?;
    get destinationArn(): string;
    set destinationArn(value: string);
    get destinationArnInput(): string;
    private _format?;
    get format(): string;
    set format(value: string);
    get formatInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html aws_api_gateway_stage}
*/
export declare class ApiGatewayStage extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html aws_api_gateway_stage} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayStageConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayStageConfig);
    get arn(): string;
    private _cacheClusterEnabled?;
    get cacheClusterEnabled(): boolean | cdktf.IResolvable;
    set cacheClusterEnabled(value: boolean | cdktf.IResolvable);
    resetCacheClusterEnabled(): void;
    get cacheClusterEnabledInput(): boolean | cdktf.IResolvable;
    private _cacheClusterSize?;
    get cacheClusterSize(): string;
    set cacheClusterSize(value: string);
    resetCacheClusterSize(): void;
    get cacheClusterSizeInput(): string;
    private _clientCertificateId?;
    get clientCertificateId(): string;
    set clientCertificateId(value: string);
    resetClientCertificateId(): void;
    get clientCertificateIdInput(): string;
    private _deploymentId?;
    get deploymentId(): string;
    set deploymentId(value: string);
    get deploymentIdInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _documentationVersion?;
    get documentationVersion(): string;
    set documentationVersion(value: string);
    resetDocumentationVersion(): void;
    get documentationVersionInput(): string;
    get executionArn(): string;
    get id(): string;
    get invokeUrl(): string;
    private _restApiId?;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string;
    private _stageName?;
    get stageName(): string;
    set stageName(value: string);
    get stageNameInput(): string;
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
    private _variables?;
    get variables(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set variables(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetVariables(): void;
    get variablesInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _xrayTracingEnabled?;
    get xrayTracingEnabled(): boolean | cdktf.IResolvable;
    set xrayTracingEnabled(value: boolean | cdktf.IResolvable);
    resetXrayTracingEnabled(): void;
    get xrayTracingEnabledInput(): boolean | cdktf.IResolvable;
    private _accessLogSettings;
    get accessLogSettings(): ApiGatewayStageAccessLogSettingsOutputReference;
    putAccessLogSettings(value: ApiGatewayStageAccessLogSettings): void;
    resetAccessLogSettings(): void;
    get accessLogSettingsInput(): ApiGatewayStageAccessLogSettings;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=api-gateway-stage.d.ts.map