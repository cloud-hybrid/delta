import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic Load Balancer
*/
export interface LbTargetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#connection_termination LbTargetGroup#connection_termination}
    */
    readonly connectionTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#deregistration_delay LbTargetGroup#deregistration_delay}
    */
    readonly deregistrationDelay?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#lambda_multi_value_headers_enabled LbTargetGroup#lambda_multi_value_headers_enabled}
    */
    readonly lambdaMultiValueHeadersEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#load_balancing_algorithm_type LbTargetGroup#load_balancing_algorithm_type}
    */
    readonly loadBalancingAlgorithmType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#name LbTargetGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#name_prefix LbTargetGroup#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#port LbTargetGroup#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#preserve_client_ip LbTargetGroup#preserve_client_ip}
    */
    readonly preserveClientIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#protocol LbTargetGroup#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#protocol_version LbTargetGroup#protocol_version}
    */
    readonly protocolVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#proxy_protocol_v2 LbTargetGroup#proxy_protocol_v2}
    */
    readonly proxyProtocolV2?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#slow_start LbTargetGroup#slow_start}
    */
    readonly slowStart?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#tags LbTargetGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#tags_all LbTargetGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#target_type LbTargetGroup#target_type}
    */
    readonly targetType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#vpc_id LbTargetGroup#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * health_check block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#health_check LbTargetGroup#health_check}
    */
    readonly healthCheck?: LbTargetGroupHealthCheck;
    /**
    * stickiness block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#stickiness LbTargetGroup#stickiness}
    */
    readonly stickiness?: LbTargetGroupStickiness;
}
export interface LbTargetGroupHealthCheck {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#enabled LbTargetGroup#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#healthy_threshold LbTargetGroup#healthy_threshold}
    */
    readonly healthyThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#interval LbTargetGroup#interval}
    */
    readonly interval?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#matcher LbTargetGroup#matcher}
    */
    readonly matcher?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#path LbTargetGroup#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#port LbTargetGroup#port}
    */
    readonly port?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#protocol LbTargetGroup#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#timeout LbTargetGroup#timeout}
    */
    readonly timeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#unhealthy_threshold LbTargetGroup#unhealthy_threshold}
    */
    readonly unhealthyThreshold?: number;
}
export declare function lbTargetGroupHealthCheckToTerraform(struct?: LbTargetGroupHealthCheckOutputReference | LbTargetGroupHealthCheck): any;
export declare class LbTargetGroupHealthCheckOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LbTargetGroupHealthCheck | undefined;
    set internalValue(value: LbTargetGroupHealthCheck | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _healthyThreshold?;
    get healthyThreshold(): number;
    set healthyThreshold(value: number);
    resetHealthyThreshold(): void;
    get healthyThresholdInput(): number;
    private _interval?;
    get interval(): number;
    set interval(value: number);
    resetInterval(): void;
    get intervalInput(): number;
    private _matcher?;
    get matcher(): string;
    set matcher(value: string);
    resetMatcher(): void;
    get matcherInput(): string;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string;
    private _port?;
    get port(): string;
    set port(value: string);
    resetPort(): void;
    get portInput(): string;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    resetProtocol(): void;
    get protocolInput(): string;
    private _timeout?;
    get timeout(): number;
    set timeout(value: number);
    resetTimeout(): void;
    get timeoutInput(): number;
    private _unhealthyThreshold?;
    get unhealthyThreshold(): number;
    set unhealthyThreshold(value: number);
    resetUnhealthyThreshold(): void;
    get unhealthyThresholdInput(): number;
}
export interface LbTargetGroupStickiness {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#cookie_duration LbTargetGroup#cookie_duration}
    */
    readonly cookieDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#cookie_name LbTargetGroup#cookie_name}
    */
    readonly cookieName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#enabled LbTargetGroup#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#type LbTargetGroup#type}
    */
    readonly type: string;
}
export declare function lbTargetGroupStickinessToTerraform(struct?: LbTargetGroupStickinessOutputReference | LbTargetGroupStickiness): any;
export declare class LbTargetGroupStickinessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LbTargetGroupStickiness | undefined;
    set internalValue(value: LbTargetGroupStickiness | undefined);
    private _cookieDuration?;
    get cookieDuration(): number;
    set cookieDuration(value: number);
    resetCookieDuration(): void;
    get cookieDurationInput(): number;
    private _cookieName?;
    get cookieName(): string;
    set cookieName(value: string);
    resetCookieName(): void;
    get cookieNameInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html aws_lb_target_group}
*/
export declare class LbTargetGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html aws_lb_target_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LbTargetGroupConfig = {}
    */
    constructor(scope: Construct, id: string, config?: LbTargetGroupConfig);
    get arn(): string;
    get arnSuffix(): string;
    private _connectionTermination?;
    get connectionTermination(): boolean | cdktf.IResolvable;
    set connectionTermination(value: boolean | cdktf.IResolvable);
    resetConnectionTermination(): void;
    get connectionTerminationInput(): boolean | cdktf.IResolvable;
    private _deregistrationDelay?;
    get deregistrationDelay(): string;
    set deregistrationDelay(value: string);
    resetDeregistrationDelay(): void;
    get deregistrationDelayInput(): string;
    get id(): string;
    private _lambdaMultiValueHeadersEnabled?;
    get lambdaMultiValueHeadersEnabled(): boolean | cdktf.IResolvable;
    set lambdaMultiValueHeadersEnabled(value: boolean | cdktf.IResolvable);
    resetLambdaMultiValueHeadersEnabled(): void;
    get lambdaMultiValueHeadersEnabledInput(): boolean | cdktf.IResolvable;
    private _loadBalancingAlgorithmType?;
    get loadBalancingAlgorithmType(): string;
    set loadBalancingAlgorithmType(value: string);
    resetLoadBalancingAlgorithmType(): void;
    get loadBalancingAlgorithmTypeInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number;
    private _preserveClientIp?;
    get preserveClientIp(): string;
    set preserveClientIp(value: string);
    resetPreserveClientIp(): void;
    get preserveClientIpInput(): string;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    resetProtocol(): void;
    get protocolInput(): string;
    private _protocolVersion?;
    get protocolVersion(): string;
    set protocolVersion(value: string);
    resetProtocolVersion(): void;
    get protocolVersionInput(): string;
    private _proxyProtocolV2?;
    get proxyProtocolV2(): boolean | cdktf.IResolvable;
    set proxyProtocolV2(value: boolean | cdktf.IResolvable);
    resetProxyProtocolV2(): void;
    get proxyProtocolV2Input(): boolean | cdktf.IResolvable;
    private _slowStart?;
    get slowStart(): number;
    set slowStart(value: number);
    resetSlowStart(): void;
    get slowStartInput(): number;
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
    private _targetType?;
    get targetType(): string;
    set targetType(value: string);
    resetTargetType(): void;
    get targetTypeInput(): string;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string;
    private _healthCheck;
    get healthCheck(): LbTargetGroupHealthCheckOutputReference;
    putHealthCheck(value: LbTargetGroupHealthCheck): void;
    resetHealthCheck(): void;
    get healthCheckInput(): LbTargetGroupHealthCheck;
    private _stickiness;
    get stickiness(): LbTargetGroupStickinessOutputReference;
    putStickiness(value: LbTargetGroupStickiness): void;
    resetStickiness(): void;
    get stickinessInput(): LbTargetGroupStickiness;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=lb-target-group.d.ts.map