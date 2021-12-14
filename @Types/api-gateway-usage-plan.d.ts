import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* API Gateway
*/
export interface ApiGatewayUsagePlanConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#description ApiGatewayUsagePlan#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#name ApiGatewayUsagePlan#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#product_code ApiGatewayUsagePlan#product_code}
    */
    readonly productCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#tags ApiGatewayUsagePlan#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#tags_all ApiGatewayUsagePlan#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * api_stages block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#api_stages ApiGatewayUsagePlan#api_stages}
    */
    readonly apiStages?: ApiGatewayUsagePlanApiStages[];
    /**
    * quota_settings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#quota_settings ApiGatewayUsagePlan#quota_settings}
    */
    readonly quotaSettings?: ApiGatewayUsagePlanQuotaSettings;
    /**
    * throttle_settings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#throttle_settings ApiGatewayUsagePlan#throttle_settings}
    */
    readonly throttleSettings?: ApiGatewayUsagePlanThrottleSettings;
}
export interface ApiGatewayUsagePlanApiStagesThrottle {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#burst_limit ApiGatewayUsagePlan#burst_limit}
    */
    readonly burstLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#path ApiGatewayUsagePlan#path}
    */
    readonly path: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#rate_limit ApiGatewayUsagePlan#rate_limit}
    */
    readonly rateLimit?: number;
}
export declare function apiGatewayUsagePlanApiStagesThrottleToTerraform(struct?: ApiGatewayUsagePlanApiStagesThrottle): any;
export interface ApiGatewayUsagePlanApiStages {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#api_id ApiGatewayUsagePlan#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#stage ApiGatewayUsagePlan#stage}
    */
    readonly stage: string;
    /**
    * throttle block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#throttle ApiGatewayUsagePlan#throttle}
    */
    readonly throttle?: ApiGatewayUsagePlanApiStagesThrottle[];
}
export declare function apiGatewayUsagePlanApiStagesToTerraform(struct?: ApiGatewayUsagePlanApiStages): any;
export interface ApiGatewayUsagePlanQuotaSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#limit ApiGatewayUsagePlan#limit}
    */
    readonly limit: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#offset ApiGatewayUsagePlan#offset}
    */
    readonly offset?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#period ApiGatewayUsagePlan#period}
    */
    readonly period: string;
}
export declare function apiGatewayUsagePlanQuotaSettingsToTerraform(struct?: ApiGatewayUsagePlanQuotaSettingsOutputReference | ApiGatewayUsagePlanQuotaSettings): any;
export declare class ApiGatewayUsagePlanQuotaSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ApiGatewayUsagePlanQuotaSettings | undefined;
    set internalValue(value: ApiGatewayUsagePlanQuotaSettings | undefined);
    private _limit?;
    get limit(): number;
    set limit(value: number);
    get limitInput(): number;
    private _offset?;
    get offset(): number;
    set offset(value: number);
    resetOffset(): void;
    get offsetInput(): number;
    private _period?;
    get period(): string;
    set period(value: string);
    get periodInput(): string;
}
export interface ApiGatewayUsagePlanThrottleSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#burst_limit ApiGatewayUsagePlan#burst_limit}
    */
    readonly burstLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#rate_limit ApiGatewayUsagePlan#rate_limit}
    */
    readonly rateLimit?: number;
}
export declare function apiGatewayUsagePlanThrottleSettingsToTerraform(struct?: ApiGatewayUsagePlanThrottleSettingsOutputReference | ApiGatewayUsagePlanThrottleSettings): any;
export declare class ApiGatewayUsagePlanThrottleSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ApiGatewayUsagePlanThrottleSettings | undefined;
    set internalValue(value: ApiGatewayUsagePlanThrottleSettings | undefined);
    private _burstLimit?;
    get burstLimit(): number;
    set burstLimit(value: number);
    resetBurstLimit(): void;
    get burstLimitInput(): number;
    private _rateLimit?;
    get rateLimit(): number;
    set rateLimit(value: number);
    resetRateLimit(): void;
    get rateLimitInput(): number;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html aws_api_gateway_usage_plan}
*/
export declare class ApiGatewayUsagePlan extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html aws_api_gateway_usage_plan} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayUsagePlanConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayUsagePlanConfig);
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
    private _productCode?;
    get productCode(): string;
    set productCode(value: string);
    resetProductCode(): void;
    get productCodeInput(): string;
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
    private _apiStages?;
    get apiStages(): ApiGatewayUsagePlanApiStages[];
    set apiStages(value: ApiGatewayUsagePlanApiStages[]);
    resetApiStages(): void;
    get apiStagesInput(): ApiGatewayUsagePlanApiStages[];
    private _quotaSettings;
    get quotaSettings(): ApiGatewayUsagePlanQuotaSettingsOutputReference;
    putQuotaSettings(value: ApiGatewayUsagePlanQuotaSettings): void;
    resetQuotaSettings(): void;
    get quotaSettingsInput(): ApiGatewayUsagePlanQuotaSettings;
    private _throttleSettings;
    get throttleSettings(): ApiGatewayUsagePlanThrottleSettingsOutputReference;
    putThrottleSettings(value: ApiGatewayUsagePlanThrottleSettings): void;
    resetThrottleSettings(): void;
    get throttleSettingsInput(): ApiGatewayUsagePlanThrottleSettings;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=api-gateway-usage-plan.d.ts.map