import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic Load Balancer
*/
export interface AlbTargetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#connection_termination AlbTargetGroup#connection_termination}
    */
    readonly connectionTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#deregistration_delay AlbTargetGroup#deregistration_delay}
    */
    readonly deregistrationDelay?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#lambda_multi_value_headers_enabled AlbTargetGroup#lambda_multi_value_headers_enabled}
    */
    readonly lambdaMultiValueHeadersEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#load_balancing_algorithm_type AlbTargetGroup#load_balancing_algorithm_type}
    */
    readonly loadBalancingAlgorithmType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#name AlbTargetGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#name_prefix AlbTargetGroup#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#port AlbTargetGroup#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#preserve_client_ip AlbTargetGroup#preserve_client_ip}
    */
    readonly preserveClientIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#protocol AlbTargetGroup#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#protocol_version AlbTargetGroup#protocol_version}
    */
    readonly protocolVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#proxy_protocol_v2 AlbTargetGroup#proxy_protocol_v2}
    */
    readonly proxyProtocolV2?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#slow_start AlbTargetGroup#slow_start}
    */
    readonly slowStart?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#tags AlbTargetGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#tags_all AlbTargetGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#target_type AlbTargetGroup#target_type}
    */
    readonly targetType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#vpc_id AlbTargetGroup#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * health_check block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#health_check AlbTargetGroup#health_check}
    */
    readonly healthCheck?: AlbTargetGroupHealthCheck;
    /**
    * stickiness block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#stickiness AlbTargetGroup#stickiness}
    */
    readonly stickiness?: AlbTargetGroupStickiness;
}
export interface AlbTargetGroupHealthCheck {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#enabled AlbTargetGroup#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#healthy_threshold AlbTargetGroup#healthy_threshold}
    */
    readonly healthyThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#interval AlbTargetGroup#interval}
    */
    readonly interval?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#matcher AlbTargetGroup#matcher}
    */
    readonly matcher?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#path AlbTargetGroup#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#port AlbTargetGroup#port}
    */
    readonly port?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#protocol AlbTargetGroup#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#timeout AlbTargetGroup#timeout}
    */
    readonly timeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#unhealthy_threshold AlbTargetGroup#unhealthy_threshold}
    */
    readonly unhealthyThreshold?: number;
}
export declare function albTargetGroupHealthCheckToTerraform(struct?: AlbTargetGroupHealthCheckOutputReference | AlbTargetGroupHealthCheck): any;
export declare class AlbTargetGroupHealthCheckOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AlbTargetGroupHealthCheck | undefined;
    set internalValue(value: AlbTargetGroupHealthCheck | undefined);
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
export interface AlbTargetGroupStickiness {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#cookie_duration AlbTargetGroup#cookie_duration}
    */
    readonly cookieDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#cookie_name AlbTargetGroup#cookie_name}
    */
    readonly cookieName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#enabled AlbTargetGroup#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#type AlbTargetGroup#type}
    */
    readonly type: string;
}
export declare function albTargetGroupStickinessToTerraform(struct?: AlbTargetGroupStickinessOutputReference | AlbTargetGroupStickiness): any;
export declare class AlbTargetGroupStickinessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AlbTargetGroupStickiness | undefined;
    set internalValue(value: AlbTargetGroupStickiness | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html aws_alb_target_group}
*/
export declare class AlbTargetGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html aws_alb_target_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AlbTargetGroupConfig = {}
    */
    constructor(scope: Construct, id: string, config?: AlbTargetGroupConfig);
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
    get healthCheck(): AlbTargetGroupHealthCheckOutputReference;
    putHealthCheck(value: AlbTargetGroupHealthCheck): void;
    resetHealthCheck(): void;
    get healthCheckInput(): AlbTargetGroupHealthCheck;
    private _stickiness;
    get stickiness(): AlbTargetGroupStickinessOutputReference;
    putStickiness(value: AlbTargetGroupStickiness): void;
    resetStickiness(): void;
    get stickinessInput(): AlbTargetGroupStickiness;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=alb-target-group.d.ts.map