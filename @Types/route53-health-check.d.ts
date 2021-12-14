import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Route 53
*/
export interface Route53HealthCheckConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#child_health_threshold Route53HealthCheck#child_health_threshold}
    */
    readonly childHealthThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#child_healthchecks Route53HealthCheck#child_healthchecks}
    */
    readonly childHealthchecks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#cloudwatch_alarm_name Route53HealthCheck#cloudwatch_alarm_name}
    */
    readonly cloudwatchAlarmName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#cloudwatch_alarm_region Route53HealthCheck#cloudwatch_alarm_region}
    */
    readonly cloudwatchAlarmRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#disabled Route53HealthCheck#disabled}
    */
    readonly disabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#enable_sni Route53HealthCheck#enable_sni}
    */
    readonly enableSni?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#failure_threshold Route53HealthCheck#failure_threshold}
    */
    readonly failureThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#fqdn Route53HealthCheck#fqdn}
    */
    readonly fqdn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}
    */
    readonly insufficientDataHealthStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#invert_healthcheck Route53HealthCheck#invert_healthcheck}
    */
    readonly invertHealthcheck?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#ip_address Route53HealthCheck#ip_address}
    */
    readonly ipAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#measure_latency Route53HealthCheck#measure_latency}
    */
    readonly measureLatency?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#port Route53HealthCheck#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#reference_name Route53HealthCheck#reference_name}
    */
    readonly referenceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#regions Route53HealthCheck#regions}
    */
    readonly regions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#request_interval Route53HealthCheck#request_interval}
    */
    readonly requestInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#resource_path Route53HealthCheck#resource_path}
    */
    readonly resourcePath?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#routing_control_arn Route53HealthCheck#routing_control_arn}
    */
    readonly routingControlArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#search_string Route53HealthCheck#search_string}
    */
    readonly searchString?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#tags Route53HealthCheck#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#tags_all Route53HealthCheck#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#type Route53HealthCheck#type}
    */
    readonly type: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html aws_route53_health_check}
*/
export declare class Route53HealthCheck extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html aws_route53_health_check} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53HealthCheckConfig
    */
    constructor(scope: Construct, id: string, config: Route53HealthCheckConfig);
    get arn(): string;
    private _childHealthThreshold?;
    get childHealthThreshold(): number;
    set childHealthThreshold(value: number);
    resetChildHealthThreshold(): void;
    get childHealthThresholdInput(): number;
    private _childHealthchecks?;
    get childHealthchecks(): string[];
    set childHealthchecks(value: string[]);
    resetChildHealthchecks(): void;
    get childHealthchecksInput(): string[];
    private _cloudwatchAlarmName?;
    get cloudwatchAlarmName(): string;
    set cloudwatchAlarmName(value: string);
    resetCloudwatchAlarmName(): void;
    get cloudwatchAlarmNameInput(): string;
    private _cloudwatchAlarmRegion?;
    get cloudwatchAlarmRegion(): string;
    set cloudwatchAlarmRegion(value: string);
    resetCloudwatchAlarmRegion(): void;
    get cloudwatchAlarmRegionInput(): string;
    private _disabled?;
    get disabled(): boolean | cdktf.IResolvable;
    set disabled(value: boolean | cdktf.IResolvable);
    resetDisabled(): void;
    get disabledInput(): boolean | cdktf.IResolvable;
    private _enableSni?;
    get enableSni(): boolean | cdktf.IResolvable;
    set enableSni(value: boolean | cdktf.IResolvable);
    resetEnableSni(): void;
    get enableSniInput(): boolean | cdktf.IResolvable;
    private _failureThreshold?;
    get failureThreshold(): number;
    set failureThreshold(value: number);
    resetFailureThreshold(): void;
    get failureThresholdInput(): number;
    private _fqdn?;
    get fqdn(): string;
    set fqdn(value: string);
    resetFqdn(): void;
    get fqdnInput(): string;
    get id(): string;
    private _insufficientDataHealthStatus?;
    get insufficientDataHealthStatus(): string;
    set insufficientDataHealthStatus(value: string);
    resetInsufficientDataHealthStatus(): void;
    get insufficientDataHealthStatusInput(): string;
    private _invertHealthcheck?;
    get invertHealthcheck(): boolean | cdktf.IResolvable;
    set invertHealthcheck(value: boolean | cdktf.IResolvable);
    resetInvertHealthcheck(): void;
    get invertHealthcheckInput(): boolean | cdktf.IResolvable;
    private _ipAddress?;
    get ipAddress(): string;
    set ipAddress(value: string);
    resetIpAddress(): void;
    get ipAddressInput(): string;
    private _measureLatency?;
    get measureLatency(): boolean | cdktf.IResolvable;
    set measureLatency(value: boolean | cdktf.IResolvable);
    resetMeasureLatency(): void;
    get measureLatencyInput(): boolean | cdktf.IResolvable;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number;
    private _referenceName?;
    get referenceName(): string;
    set referenceName(value: string);
    resetReferenceName(): void;
    get referenceNameInput(): string;
    private _regions?;
    get regions(): string[];
    set regions(value: string[]);
    resetRegions(): void;
    get regionsInput(): string[];
    private _requestInterval?;
    get requestInterval(): number;
    set requestInterval(value: number);
    resetRequestInterval(): void;
    get requestIntervalInput(): number;
    private _resourcePath?;
    get resourcePath(): string;
    set resourcePath(value: string);
    resetResourcePath(): void;
    get resourcePathInput(): string;
    private _routingControlArn?;
    get routingControlArn(): string;
    set routingControlArn(value: string);
    resetRoutingControlArn(): void;
    get routingControlArnInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    resetSearchString(): void;
    get searchStringInput(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=route53-health-check.d.ts.map