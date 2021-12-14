import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* App Mesh
*/
export interface AppmeshRouteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#mesh_name AppmeshRoute#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#mesh_owner AppmeshRoute#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#name AppmeshRoute#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#tags AppmeshRoute#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#tags_all AppmeshRoute#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#virtual_router_name AppmeshRoute#virtual_router_name}
    */
    readonly virtualRouterName: string;
    /**
    * spec block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#spec AppmeshRoute#spec}
    */
    readonly spec: AppmeshRouteSpec;
}
export interface AppmeshRouteSpecGrpcRouteActionWeightedTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#virtual_node AppmeshRoute#virtual_node}
    */
    readonly virtualNode: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weight AppmeshRoute#weight}
    */
    readonly weight: number;
}
export declare function appmeshRouteSpecGrpcRouteActionWeightedTargetToTerraform(struct?: AppmeshRouteSpecGrpcRouteActionWeightedTarget): any;
export interface AppmeshRouteSpecGrpcRouteAction {
    /**
    * weighted_target block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weighted_target AppmeshRoute#weighted_target}
    */
    readonly weightedTarget: AppmeshRouteSpecGrpcRouteActionWeightedTarget[];
}
export declare function appmeshRouteSpecGrpcRouteActionToTerraform(struct?: AppmeshRouteSpecGrpcRouteActionOutputReference | AppmeshRouteSpecGrpcRouteAction): any;
export declare class AppmeshRouteSpecGrpcRouteActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecGrpcRouteAction | undefined;
    set internalValue(value: AppmeshRouteSpecGrpcRouteAction | undefined);
    private _weightedTarget?;
    get weightedTarget(): AppmeshRouteSpecGrpcRouteActionWeightedTarget[];
    set weightedTarget(value: AppmeshRouteSpecGrpcRouteActionWeightedTarget[]);
    get weightedTargetInput(): AppmeshRouteSpecGrpcRouteActionWeightedTarget[];
}
export interface AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#end AppmeshRoute#end}
    */
    readonly end: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#start AppmeshRoute#start}
    */
    readonly start: number;
}
export declare function appmeshRouteSpecGrpcRouteMatchMetadataMatchRangeToTerraform(struct?: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference | AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange): any;
export declare class AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange | undefined;
    set internalValue(value: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange | undefined);
    private _end?;
    get end(): number;
    set end(value: number);
    get endInput(): number;
    private _start?;
    get start(): number;
    set start(value: number);
    get startInput(): number;
}
export interface AppmeshRouteSpecGrpcRouteMatchMetadataMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#exact AppmeshRoute#exact}
    */
    readonly exact?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#prefix AppmeshRoute#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#regex AppmeshRoute#regex}
    */
    readonly regex?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#suffix AppmeshRoute#suffix}
    */
    readonly suffix?: string;
    /**
    * range block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#range AppmeshRoute#range}
    */
    readonly range?: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange;
}
export declare function appmeshRouteSpecGrpcRouteMatchMetadataMatchToTerraform(struct?: AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference | AppmeshRouteSpecGrpcRouteMatchMetadataMatch): any;
export declare class AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecGrpcRouteMatchMetadataMatch | undefined;
    set internalValue(value: AppmeshRouteSpecGrpcRouteMatchMetadataMatch | undefined);
    private _exact?;
    get exact(): string;
    set exact(value: string);
    resetExact(): void;
    get exactInput(): string;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string;
    private _regex?;
    get regex(): string;
    set regex(value: string);
    resetRegex(): void;
    get regexInput(): string;
    private _suffix?;
    get suffix(): string;
    set suffix(value: string);
    resetSuffix(): void;
    get suffixInput(): string;
    private _range;
    get range(): AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference;
    putRange(value: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange): void;
    resetRange(): void;
    get rangeInput(): AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange;
}
export interface AppmeshRouteSpecGrpcRouteMatchMetadata {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#invert AppmeshRoute#invert}
    */
    readonly invert?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#name AppmeshRoute#name}
    */
    readonly name: string;
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
    */
    readonly match?: AppmeshRouteSpecGrpcRouteMatchMetadataMatch;
}
export declare function appmeshRouteSpecGrpcRouteMatchMetadataToTerraform(struct?: AppmeshRouteSpecGrpcRouteMatchMetadata): any;
export interface AppmeshRouteSpecGrpcRouteMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#method_name AppmeshRoute#method_name}
    */
    readonly methodName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#prefix AppmeshRoute#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#service_name AppmeshRoute#service_name}
    */
    readonly serviceName?: string;
    /**
    * metadata block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#metadata AppmeshRoute#metadata}
    */
    readonly metadata?: AppmeshRouteSpecGrpcRouteMatchMetadata[];
}
export declare function appmeshRouteSpecGrpcRouteMatchToTerraform(struct?: AppmeshRouteSpecGrpcRouteMatchOutputReference | AppmeshRouteSpecGrpcRouteMatch): any;
export declare class AppmeshRouteSpecGrpcRouteMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecGrpcRouteMatch | undefined;
    set internalValue(value: AppmeshRouteSpecGrpcRouteMatch | undefined);
    private _methodName?;
    get methodName(): string;
    set methodName(value: string);
    resetMethodName(): void;
    get methodNameInput(): string;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string;
    private _serviceName?;
    get serviceName(): string;
    set serviceName(value: string);
    resetServiceName(): void;
    get serviceNameInput(): string;
    private _metadata?;
    get metadata(): AppmeshRouteSpecGrpcRouteMatchMetadata[];
    set metadata(value: AppmeshRouteSpecGrpcRouteMatchMetadata[]);
    resetMetadata(): void;
    get metadataInput(): AppmeshRouteSpecGrpcRouteMatchMetadata[];
}
export interface AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
    */
    readonly value: number;
}
export declare function appmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutToTerraform(struct?: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference | AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout): any;
export declare class AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout | undefined;
    set internalValue(value: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface AppmeshRouteSpecGrpcRouteRetryPolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#grpc_retry_events AppmeshRoute#grpc_retry_events}
    */
    readonly grpcRetryEvents?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#http_retry_events AppmeshRoute#http_retry_events}
    */
    readonly httpRetryEvents?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#max_retries AppmeshRoute#max_retries}
    */
    readonly maxRetries: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#tcp_retry_events AppmeshRoute#tcp_retry_events}
    */
    readonly tcpRetryEvents?: string[];
    /**
    * per_retry_timeout block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_retry_timeout AppmeshRoute#per_retry_timeout}
    */
    readonly perRetryTimeout: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout;
}
export declare function appmeshRouteSpecGrpcRouteRetryPolicyToTerraform(struct?: AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference | AppmeshRouteSpecGrpcRouteRetryPolicy): any;
export declare class AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecGrpcRouteRetryPolicy | undefined;
    set internalValue(value: AppmeshRouteSpecGrpcRouteRetryPolicy | undefined);
    private _grpcRetryEvents?;
    get grpcRetryEvents(): string[];
    set grpcRetryEvents(value: string[]);
    resetGrpcRetryEvents(): void;
    get grpcRetryEventsInput(): string[];
    private _httpRetryEvents?;
    get httpRetryEvents(): string[];
    set httpRetryEvents(value: string[]);
    resetHttpRetryEvents(): void;
    get httpRetryEventsInput(): string[];
    private _maxRetries?;
    get maxRetries(): number;
    set maxRetries(value: number);
    get maxRetriesInput(): number;
    private _tcpRetryEvents?;
    get tcpRetryEvents(): string[];
    set tcpRetryEvents(value: string[]);
    resetTcpRetryEvents(): void;
    get tcpRetryEventsInput(): string[];
    private _perRetryTimeout;
    get perRetryTimeout(): AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference;
    putPerRetryTimeout(value: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout): void;
    get perRetryTimeoutInput(): AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout;
}
export interface AppmeshRouteSpecGrpcRouteTimeoutIdle {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
    */
    readonly value: number;
}
export declare function appmeshRouteSpecGrpcRouteTimeoutIdleToTerraform(struct?: AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference | AppmeshRouteSpecGrpcRouteTimeoutIdle): any;
export declare class AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecGrpcRouteTimeoutIdle | undefined;
    set internalValue(value: AppmeshRouteSpecGrpcRouteTimeoutIdle | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface AppmeshRouteSpecGrpcRouteTimeoutPerRequest {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
    */
    readonly value: number;
}
export declare function appmeshRouteSpecGrpcRouteTimeoutPerRequestToTerraform(struct?: AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference | AppmeshRouteSpecGrpcRouteTimeoutPerRequest): any;
export declare class AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecGrpcRouteTimeoutPerRequest | undefined;
    set internalValue(value: AppmeshRouteSpecGrpcRouteTimeoutPerRequest | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface AppmeshRouteSpecGrpcRouteTimeout {
    /**
    * idle block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#idle AppmeshRoute#idle}
    */
    readonly idle?: AppmeshRouteSpecGrpcRouteTimeoutIdle;
    /**
    * per_request block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_request AppmeshRoute#per_request}
    */
    readonly perRequest?: AppmeshRouteSpecGrpcRouteTimeoutPerRequest;
}
export declare function appmeshRouteSpecGrpcRouteTimeoutToTerraform(struct?: AppmeshRouteSpecGrpcRouteTimeoutOutputReference | AppmeshRouteSpecGrpcRouteTimeout): any;
export declare class AppmeshRouteSpecGrpcRouteTimeoutOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecGrpcRouteTimeout | undefined;
    set internalValue(value: AppmeshRouteSpecGrpcRouteTimeout | undefined);
    private _idle;
    get idle(): AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference;
    putIdle(value: AppmeshRouteSpecGrpcRouteTimeoutIdle): void;
    resetIdle(): void;
    get idleInput(): AppmeshRouteSpecGrpcRouteTimeoutIdle;
    private _perRequest;
    get perRequest(): AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference;
    putPerRequest(value: AppmeshRouteSpecGrpcRouteTimeoutPerRequest): void;
    resetPerRequest(): void;
    get perRequestInput(): AppmeshRouteSpecGrpcRouteTimeoutPerRequest;
}
export interface AppmeshRouteSpecGrpcRoute {
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#action AppmeshRoute#action}
    */
    readonly action: AppmeshRouteSpecGrpcRouteAction;
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
    */
    readonly match?: AppmeshRouteSpecGrpcRouteMatch;
    /**
    * retry_policy block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#retry_policy AppmeshRoute#retry_policy}
    */
    readonly retryPolicy?: AppmeshRouteSpecGrpcRouteRetryPolicy;
    /**
    * timeout block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#timeout AppmeshRoute#timeout}
    */
    readonly timeout?: AppmeshRouteSpecGrpcRouteTimeout;
}
export declare function appmeshRouteSpecGrpcRouteToTerraform(struct?: AppmeshRouteSpecGrpcRouteOutputReference | AppmeshRouteSpecGrpcRoute): any;
export declare class AppmeshRouteSpecGrpcRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecGrpcRoute | undefined;
    set internalValue(value: AppmeshRouteSpecGrpcRoute | undefined);
    private _action;
    get action(): AppmeshRouteSpecGrpcRouteActionOutputReference;
    putAction(value: AppmeshRouteSpecGrpcRouteAction): void;
    get actionInput(): AppmeshRouteSpecGrpcRouteAction;
    private _match;
    get match(): AppmeshRouteSpecGrpcRouteMatchOutputReference;
    putMatch(value: AppmeshRouteSpecGrpcRouteMatch): void;
    resetMatch(): void;
    get matchInput(): AppmeshRouteSpecGrpcRouteMatch;
    private _retryPolicy;
    get retryPolicy(): AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference;
    putRetryPolicy(value: AppmeshRouteSpecGrpcRouteRetryPolicy): void;
    resetRetryPolicy(): void;
    get retryPolicyInput(): AppmeshRouteSpecGrpcRouteRetryPolicy;
    private _timeout;
    get timeout(): AppmeshRouteSpecGrpcRouteTimeoutOutputReference;
    putTimeout(value: AppmeshRouteSpecGrpcRouteTimeout): void;
    resetTimeout(): void;
    get timeoutInput(): AppmeshRouteSpecGrpcRouteTimeout;
}
export interface AppmeshRouteSpecHttp2RouteActionWeightedTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#virtual_node AppmeshRoute#virtual_node}
    */
    readonly virtualNode: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weight AppmeshRoute#weight}
    */
    readonly weight: number;
}
export declare function appmeshRouteSpecHttp2RouteActionWeightedTargetToTerraform(struct?: AppmeshRouteSpecHttp2RouteActionWeightedTarget): any;
export interface AppmeshRouteSpecHttp2RouteAction {
    /**
    * weighted_target block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weighted_target AppmeshRoute#weighted_target}
    */
    readonly weightedTarget: AppmeshRouteSpecHttp2RouteActionWeightedTarget[];
}
export declare function appmeshRouteSpecHttp2RouteActionToTerraform(struct?: AppmeshRouteSpecHttp2RouteActionOutputReference | AppmeshRouteSpecHttp2RouteAction): any;
export declare class AppmeshRouteSpecHttp2RouteActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecHttp2RouteAction | undefined;
    set internalValue(value: AppmeshRouteSpecHttp2RouteAction | undefined);
    private _weightedTarget?;
    get weightedTarget(): AppmeshRouteSpecHttp2RouteActionWeightedTarget[];
    set weightedTarget(value: AppmeshRouteSpecHttp2RouteActionWeightedTarget[]);
    get weightedTargetInput(): AppmeshRouteSpecHttp2RouteActionWeightedTarget[];
}
export interface AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#end AppmeshRoute#end}
    */
    readonly end: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#start AppmeshRoute#start}
    */
    readonly start: number;
}
export declare function appmeshRouteSpecHttp2RouteMatchHeaderMatchRangeToTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference | AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange): any;
export declare class AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange | undefined;
    set internalValue(value: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange | undefined);
    private _end?;
    get end(): number;
    set end(value: number);
    get endInput(): number;
    private _start?;
    get start(): number;
    set start(value: number);
    get startInput(): number;
}
export interface AppmeshRouteSpecHttp2RouteMatchHeaderMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#exact AppmeshRoute#exact}
    */
    readonly exact?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#prefix AppmeshRoute#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#regex AppmeshRoute#regex}
    */
    readonly regex?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#suffix AppmeshRoute#suffix}
    */
    readonly suffix?: string;
    /**
    * range block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#range AppmeshRoute#range}
    */
    readonly range?: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange;
}
export declare function appmeshRouteSpecHttp2RouteMatchHeaderMatchToTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference | AppmeshRouteSpecHttp2RouteMatchHeaderMatch): any;
export declare class AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecHttp2RouteMatchHeaderMatch | undefined;
    set internalValue(value: AppmeshRouteSpecHttp2RouteMatchHeaderMatch | undefined);
    private _exact?;
    get exact(): string;
    set exact(value: string);
    resetExact(): void;
    get exactInput(): string;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string;
    private _regex?;
    get regex(): string;
    set regex(value: string);
    resetRegex(): void;
    get regexInput(): string;
    private _suffix?;
    get suffix(): string;
    set suffix(value: string);
    resetSuffix(): void;
    get suffixInput(): string;
    private _range;
    get range(): AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference;
    putRange(value: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange): void;
    resetRange(): void;
    get rangeInput(): AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange;
}
export interface AppmeshRouteSpecHttp2RouteMatchHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#invert AppmeshRoute#invert}
    */
    readonly invert?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#name AppmeshRoute#name}
    */
    readonly name: string;
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
    */
    readonly match?: AppmeshRouteSpecHttp2RouteMatchHeaderMatch;
}
export declare function appmeshRouteSpecHttp2RouteMatchHeaderToTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchHeader): any;
export interface AppmeshRouteSpecHttp2RouteMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#method AppmeshRoute#method}
    */
    readonly method?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#prefix AppmeshRoute#prefix}
    */
    readonly prefix: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#scheme AppmeshRoute#scheme}
    */
    readonly scheme?: string;
    /**
    * header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#header AppmeshRoute#header}
    */
    readonly header?: AppmeshRouteSpecHttp2RouteMatchHeader[];
}
export declare function appmeshRouteSpecHttp2RouteMatchToTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchOutputReference | AppmeshRouteSpecHttp2RouteMatch): any;
export declare class AppmeshRouteSpecHttp2RouteMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecHttp2RouteMatch | undefined;
    set internalValue(value: AppmeshRouteSpecHttp2RouteMatch | undefined);
    private _method?;
    get method(): string;
    set method(value: string);
    resetMethod(): void;
    get methodInput(): string;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    get prefixInput(): string;
    private _scheme?;
    get scheme(): string;
    set scheme(value: string);
    resetScheme(): void;
    get schemeInput(): string;
    private _header?;
    get header(): AppmeshRouteSpecHttp2RouteMatchHeader[];
    set header(value: AppmeshRouteSpecHttp2RouteMatchHeader[]);
    resetHeader(): void;
    get headerInput(): AppmeshRouteSpecHttp2RouteMatchHeader[];
}
export interface AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
    */
    readonly value: number;
}
export declare function appmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutToTerraform(struct?: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference | AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout): any;
export declare class AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout | undefined;
    set internalValue(value: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface AppmeshRouteSpecHttp2RouteRetryPolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#http_retry_events AppmeshRoute#http_retry_events}
    */
    readonly httpRetryEvents?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#max_retries AppmeshRoute#max_retries}
    */
    readonly maxRetries: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#tcp_retry_events AppmeshRoute#tcp_retry_events}
    */
    readonly tcpRetryEvents?: string[];
    /**
    * per_retry_timeout block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_retry_timeout AppmeshRoute#per_retry_timeout}
    */
    readonly perRetryTimeout: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout;
}
export declare function appmeshRouteSpecHttp2RouteRetryPolicyToTerraform(struct?: AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference | AppmeshRouteSpecHttp2RouteRetryPolicy): any;
export declare class AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecHttp2RouteRetryPolicy | undefined;
    set internalValue(value: AppmeshRouteSpecHttp2RouteRetryPolicy | undefined);
    private _httpRetryEvents?;
    get httpRetryEvents(): string[];
    set httpRetryEvents(value: string[]);
    resetHttpRetryEvents(): void;
    get httpRetryEventsInput(): string[];
    private _maxRetries?;
    get maxRetries(): number;
    set maxRetries(value: number);
    get maxRetriesInput(): number;
    private _tcpRetryEvents?;
    get tcpRetryEvents(): string[];
    set tcpRetryEvents(value: string[]);
    resetTcpRetryEvents(): void;
    get tcpRetryEventsInput(): string[];
    private _perRetryTimeout;
    get perRetryTimeout(): AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference;
    putPerRetryTimeout(value: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout): void;
    get perRetryTimeoutInput(): AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout;
}
export interface AppmeshRouteSpecHttp2RouteTimeoutIdle {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
    */
    readonly value: number;
}
export declare function appmeshRouteSpecHttp2RouteTimeoutIdleToTerraform(struct?: AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference | AppmeshRouteSpecHttp2RouteTimeoutIdle): any;
export declare class AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecHttp2RouteTimeoutIdle | undefined;
    set internalValue(value: AppmeshRouteSpecHttp2RouteTimeoutIdle | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface AppmeshRouteSpecHttp2RouteTimeoutPerRequest {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
    */
    readonly value: number;
}
export declare function appmeshRouteSpecHttp2RouteTimeoutPerRequestToTerraform(struct?: AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference | AppmeshRouteSpecHttp2RouteTimeoutPerRequest): any;
export declare class AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecHttp2RouteTimeoutPerRequest | undefined;
    set internalValue(value: AppmeshRouteSpecHttp2RouteTimeoutPerRequest | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface AppmeshRouteSpecHttp2RouteTimeout {
    /**
    * idle block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#idle AppmeshRoute#idle}
    */
    readonly idle?: AppmeshRouteSpecHttp2RouteTimeoutIdle;
    /**
    * per_request block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_request AppmeshRoute#per_request}
    */
    readonly perRequest?: AppmeshRouteSpecHttp2RouteTimeoutPerRequest;
}
export declare function appmeshRouteSpecHttp2RouteTimeoutToTerraform(struct?: AppmeshRouteSpecHttp2RouteTimeoutOutputReference | AppmeshRouteSpecHttp2RouteTimeout): any;
export declare class AppmeshRouteSpecHttp2RouteTimeoutOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecHttp2RouteTimeout | undefined;
    set internalValue(value: AppmeshRouteSpecHttp2RouteTimeout | undefined);
    private _idle;
    get idle(): AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference;
    putIdle(value: AppmeshRouteSpecHttp2RouteTimeoutIdle): void;
    resetIdle(): void;
    get idleInput(): AppmeshRouteSpecHttp2RouteTimeoutIdle;
    private _perRequest;
    get perRequest(): AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference;
    putPerRequest(value: AppmeshRouteSpecHttp2RouteTimeoutPerRequest): void;
    resetPerRequest(): void;
    get perRequestInput(): AppmeshRouteSpecHttp2RouteTimeoutPerRequest;
}
export interface AppmeshRouteSpecHttp2Route {
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#action AppmeshRoute#action}
    */
    readonly action: AppmeshRouteSpecHttp2RouteAction;
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
    */
    readonly match: AppmeshRouteSpecHttp2RouteMatch;
    /**
    * retry_policy block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#retry_policy AppmeshRoute#retry_policy}
    */
    readonly retryPolicy?: AppmeshRouteSpecHttp2RouteRetryPolicy;
    /**
    * timeout block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#timeout AppmeshRoute#timeout}
    */
    readonly timeout?: AppmeshRouteSpecHttp2RouteTimeout;
}
export declare function appmeshRouteSpecHttp2RouteToTerraform(struct?: AppmeshRouteSpecHttp2RouteOutputReference | AppmeshRouteSpecHttp2Route): any;
export declare class AppmeshRouteSpecHttp2RouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecHttp2Route | undefined;
    set internalValue(value: AppmeshRouteSpecHttp2Route | undefined);
    private _action;
    get action(): AppmeshRouteSpecHttp2RouteActionOutputReference;
    putAction(value: AppmeshRouteSpecHttp2RouteAction): void;
    get actionInput(): AppmeshRouteSpecHttp2RouteAction;
    private _match;
    get match(): AppmeshRouteSpecHttp2RouteMatchOutputReference;
    putMatch(value: AppmeshRouteSpecHttp2RouteMatch): void;
    get matchInput(): AppmeshRouteSpecHttp2RouteMatch;
    private _retryPolicy;
    get retryPolicy(): AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference;
    putRetryPolicy(value: AppmeshRouteSpecHttp2RouteRetryPolicy): void;
    resetRetryPolicy(): void;
    get retryPolicyInput(): AppmeshRouteSpecHttp2RouteRetryPolicy;
    private _timeout;
    get timeout(): AppmeshRouteSpecHttp2RouteTimeoutOutputReference;
    putTimeout(value: AppmeshRouteSpecHttp2RouteTimeout): void;
    resetTimeout(): void;
    get timeoutInput(): AppmeshRouteSpecHttp2RouteTimeout;
}
export interface AppmeshRouteSpecHttpRouteActionWeightedTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#virtual_node AppmeshRoute#virtual_node}
    */
    readonly virtualNode: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weight AppmeshRoute#weight}
    */
    readonly weight: number;
}
export declare function appmeshRouteSpecHttpRouteActionWeightedTargetToTerraform(struct?: AppmeshRouteSpecHttpRouteActionWeightedTarget): any;
export interface AppmeshRouteSpecHttpRouteAction {
    /**
    * weighted_target block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weighted_target AppmeshRoute#weighted_target}
    */
    readonly weightedTarget: AppmeshRouteSpecHttpRouteActionWeightedTarget[];
}
export declare function appmeshRouteSpecHttpRouteActionToTerraform(struct?: AppmeshRouteSpecHttpRouteActionOutputReference | AppmeshRouteSpecHttpRouteAction): any;
export declare class AppmeshRouteSpecHttpRouteActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecHttpRouteAction | undefined;
    set internalValue(value: AppmeshRouteSpecHttpRouteAction | undefined);
    private _weightedTarget?;
    get weightedTarget(): AppmeshRouteSpecHttpRouteActionWeightedTarget[];
    set weightedTarget(value: AppmeshRouteSpecHttpRouteActionWeightedTarget[]);
    get weightedTargetInput(): AppmeshRouteSpecHttpRouteActionWeightedTarget[];
}
export interface AppmeshRouteSpecHttpRouteMatchHeaderMatchRange {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#end AppmeshRoute#end}
    */
    readonly end: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#start AppmeshRoute#start}
    */
    readonly start: number;
}
export declare function appmeshRouteSpecHttpRouteMatchHeaderMatchRangeToTerraform(struct?: AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference | AppmeshRouteSpecHttpRouteMatchHeaderMatchRange): any;
export declare class AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecHttpRouteMatchHeaderMatchRange | undefined;
    set internalValue(value: AppmeshRouteSpecHttpRouteMatchHeaderMatchRange | undefined);
    private _end?;
    get end(): number;
    set end(value: number);
    get endInput(): number;
    private _start?;
    get start(): number;
    set start(value: number);
    get startInput(): number;
}
export interface AppmeshRouteSpecHttpRouteMatchHeaderMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#exact AppmeshRoute#exact}
    */
    readonly exact?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#prefix AppmeshRoute#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#regex AppmeshRoute#regex}
    */
    readonly regex?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#suffix AppmeshRoute#suffix}
    */
    readonly suffix?: string;
    /**
    * range block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#range AppmeshRoute#range}
    */
    readonly range?: AppmeshRouteSpecHttpRouteMatchHeaderMatchRange;
}
export declare function appmeshRouteSpecHttpRouteMatchHeaderMatchToTerraform(struct?: AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference | AppmeshRouteSpecHttpRouteMatchHeaderMatch): any;
export declare class AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecHttpRouteMatchHeaderMatch | undefined;
    set internalValue(value: AppmeshRouteSpecHttpRouteMatchHeaderMatch | undefined);
    private _exact?;
    get exact(): string;
    set exact(value: string);
    resetExact(): void;
    get exactInput(): string;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string;
    private _regex?;
    get regex(): string;
    set regex(value: string);
    resetRegex(): void;
    get regexInput(): string;
    private _suffix?;
    get suffix(): string;
    set suffix(value: string);
    resetSuffix(): void;
    get suffixInput(): string;
    private _range;
    get range(): AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference;
    putRange(value: AppmeshRouteSpecHttpRouteMatchHeaderMatchRange): void;
    resetRange(): void;
    get rangeInput(): AppmeshRouteSpecHttpRouteMatchHeaderMatchRange;
}
export interface AppmeshRouteSpecHttpRouteMatchHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#invert AppmeshRoute#invert}
    */
    readonly invert?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#name AppmeshRoute#name}
    */
    readonly name: string;
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
    */
    readonly match?: AppmeshRouteSpecHttpRouteMatchHeaderMatch;
}
export declare function appmeshRouteSpecHttpRouteMatchHeaderToTerraform(struct?: AppmeshRouteSpecHttpRouteMatchHeader): any;
export interface AppmeshRouteSpecHttpRouteMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#method AppmeshRoute#method}
    */
    readonly method?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#prefix AppmeshRoute#prefix}
    */
    readonly prefix: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#scheme AppmeshRoute#scheme}
    */
    readonly scheme?: string;
    /**
    * header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#header AppmeshRoute#header}
    */
    readonly header?: AppmeshRouteSpecHttpRouteMatchHeader[];
}
export declare function appmeshRouteSpecHttpRouteMatchToTerraform(struct?: AppmeshRouteSpecHttpRouteMatchOutputReference | AppmeshRouteSpecHttpRouteMatch): any;
export declare class AppmeshRouteSpecHttpRouteMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecHttpRouteMatch | undefined;
    set internalValue(value: AppmeshRouteSpecHttpRouteMatch | undefined);
    private _method?;
    get method(): string;
    set method(value: string);
    resetMethod(): void;
    get methodInput(): string;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    get prefixInput(): string;
    private _scheme?;
    get scheme(): string;
    set scheme(value: string);
    resetScheme(): void;
    get schemeInput(): string;
    private _header?;
    get header(): AppmeshRouteSpecHttpRouteMatchHeader[];
    set header(value: AppmeshRouteSpecHttpRouteMatchHeader[]);
    resetHeader(): void;
    get headerInput(): AppmeshRouteSpecHttpRouteMatchHeader[];
}
export interface AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
    */
    readonly value: number;
}
export declare function appmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutToTerraform(struct?: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference | AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout): any;
export declare class AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout | undefined;
    set internalValue(value: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface AppmeshRouteSpecHttpRouteRetryPolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#http_retry_events AppmeshRoute#http_retry_events}
    */
    readonly httpRetryEvents?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#max_retries AppmeshRoute#max_retries}
    */
    readonly maxRetries: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#tcp_retry_events AppmeshRoute#tcp_retry_events}
    */
    readonly tcpRetryEvents?: string[];
    /**
    * per_retry_timeout block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_retry_timeout AppmeshRoute#per_retry_timeout}
    */
    readonly perRetryTimeout: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout;
}
export declare function appmeshRouteSpecHttpRouteRetryPolicyToTerraform(struct?: AppmeshRouteSpecHttpRouteRetryPolicyOutputReference | AppmeshRouteSpecHttpRouteRetryPolicy): any;
export declare class AppmeshRouteSpecHttpRouteRetryPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecHttpRouteRetryPolicy | undefined;
    set internalValue(value: AppmeshRouteSpecHttpRouteRetryPolicy | undefined);
    private _httpRetryEvents?;
    get httpRetryEvents(): string[];
    set httpRetryEvents(value: string[]);
    resetHttpRetryEvents(): void;
    get httpRetryEventsInput(): string[];
    private _maxRetries?;
    get maxRetries(): number;
    set maxRetries(value: number);
    get maxRetriesInput(): number;
    private _tcpRetryEvents?;
    get tcpRetryEvents(): string[];
    set tcpRetryEvents(value: string[]);
    resetTcpRetryEvents(): void;
    get tcpRetryEventsInput(): string[];
    private _perRetryTimeout;
    get perRetryTimeout(): AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference;
    putPerRetryTimeout(value: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout): void;
    get perRetryTimeoutInput(): AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout;
}
export interface AppmeshRouteSpecHttpRouteTimeoutIdle {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
    */
    readonly value: number;
}
export declare function appmeshRouteSpecHttpRouteTimeoutIdleToTerraform(struct?: AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference | AppmeshRouteSpecHttpRouteTimeoutIdle): any;
export declare class AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecHttpRouteTimeoutIdle | undefined;
    set internalValue(value: AppmeshRouteSpecHttpRouteTimeoutIdle | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface AppmeshRouteSpecHttpRouteTimeoutPerRequest {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
    */
    readonly value: number;
}
export declare function appmeshRouteSpecHttpRouteTimeoutPerRequestToTerraform(struct?: AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference | AppmeshRouteSpecHttpRouteTimeoutPerRequest): any;
export declare class AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecHttpRouteTimeoutPerRequest | undefined;
    set internalValue(value: AppmeshRouteSpecHttpRouteTimeoutPerRequest | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface AppmeshRouteSpecHttpRouteTimeout {
    /**
    * idle block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#idle AppmeshRoute#idle}
    */
    readonly idle?: AppmeshRouteSpecHttpRouteTimeoutIdle;
    /**
    * per_request block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_request AppmeshRoute#per_request}
    */
    readonly perRequest?: AppmeshRouteSpecHttpRouteTimeoutPerRequest;
}
export declare function appmeshRouteSpecHttpRouteTimeoutToTerraform(struct?: AppmeshRouteSpecHttpRouteTimeoutOutputReference | AppmeshRouteSpecHttpRouteTimeout): any;
export declare class AppmeshRouteSpecHttpRouteTimeoutOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecHttpRouteTimeout | undefined;
    set internalValue(value: AppmeshRouteSpecHttpRouteTimeout | undefined);
    private _idle;
    get idle(): AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference;
    putIdle(value: AppmeshRouteSpecHttpRouteTimeoutIdle): void;
    resetIdle(): void;
    get idleInput(): AppmeshRouteSpecHttpRouteTimeoutIdle;
    private _perRequest;
    get perRequest(): AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference;
    putPerRequest(value: AppmeshRouteSpecHttpRouteTimeoutPerRequest): void;
    resetPerRequest(): void;
    get perRequestInput(): AppmeshRouteSpecHttpRouteTimeoutPerRequest;
}
export interface AppmeshRouteSpecHttpRoute {
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#action AppmeshRoute#action}
    */
    readonly action: AppmeshRouteSpecHttpRouteAction;
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
    */
    readonly match: AppmeshRouteSpecHttpRouteMatch;
    /**
    * retry_policy block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#retry_policy AppmeshRoute#retry_policy}
    */
    readonly retryPolicy?: AppmeshRouteSpecHttpRouteRetryPolicy;
    /**
    * timeout block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#timeout AppmeshRoute#timeout}
    */
    readonly timeout?: AppmeshRouteSpecHttpRouteTimeout;
}
export declare function appmeshRouteSpecHttpRouteToTerraform(struct?: AppmeshRouteSpecHttpRouteOutputReference | AppmeshRouteSpecHttpRoute): any;
export declare class AppmeshRouteSpecHttpRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecHttpRoute | undefined;
    set internalValue(value: AppmeshRouteSpecHttpRoute | undefined);
    private _action;
    get action(): AppmeshRouteSpecHttpRouteActionOutputReference;
    putAction(value: AppmeshRouteSpecHttpRouteAction): void;
    get actionInput(): AppmeshRouteSpecHttpRouteAction;
    private _match;
    get match(): AppmeshRouteSpecHttpRouteMatchOutputReference;
    putMatch(value: AppmeshRouteSpecHttpRouteMatch): void;
    get matchInput(): AppmeshRouteSpecHttpRouteMatch;
    private _retryPolicy;
    get retryPolicy(): AppmeshRouteSpecHttpRouteRetryPolicyOutputReference;
    putRetryPolicy(value: AppmeshRouteSpecHttpRouteRetryPolicy): void;
    resetRetryPolicy(): void;
    get retryPolicyInput(): AppmeshRouteSpecHttpRouteRetryPolicy;
    private _timeout;
    get timeout(): AppmeshRouteSpecHttpRouteTimeoutOutputReference;
    putTimeout(value: AppmeshRouteSpecHttpRouteTimeout): void;
    resetTimeout(): void;
    get timeoutInput(): AppmeshRouteSpecHttpRouteTimeout;
}
export interface AppmeshRouteSpecTcpRouteActionWeightedTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#virtual_node AppmeshRoute#virtual_node}
    */
    readonly virtualNode: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weight AppmeshRoute#weight}
    */
    readonly weight: number;
}
export declare function appmeshRouteSpecTcpRouteActionWeightedTargetToTerraform(struct?: AppmeshRouteSpecTcpRouteActionWeightedTarget): any;
export interface AppmeshRouteSpecTcpRouteAction {
    /**
    * weighted_target block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weighted_target AppmeshRoute#weighted_target}
    */
    readonly weightedTarget: AppmeshRouteSpecTcpRouteActionWeightedTarget[];
}
export declare function appmeshRouteSpecTcpRouteActionToTerraform(struct?: AppmeshRouteSpecTcpRouteActionOutputReference | AppmeshRouteSpecTcpRouteAction): any;
export declare class AppmeshRouteSpecTcpRouteActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecTcpRouteAction | undefined;
    set internalValue(value: AppmeshRouteSpecTcpRouteAction | undefined);
    private _weightedTarget?;
    get weightedTarget(): AppmeshRouteSpecTcpRouteActionWeightedTarget[];
    set weightedTarget(value: AppmeshRouteSpecTcpRouteActionWeightedTarget[]);
    get weightedTargetInput(): AppmeshRouteSpecTcpRouteActionWeightedTarget[];
}
export interface AppmeshRouteSpecTcpRouteTimeoutIdle {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
    */
    readonly value: number;
}
export declare function appmeshRouteSpecTcpRouteTimeoutIdleToTerraform(struct?: AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference | AppmeshRouteSpecTcpRouteTimeoutIdle): any;
export declare class AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecTcpRouteTimeoutIdle | undefined;
    set internalValue(value: AppmeshRouteSpecTcpRouteTimeoutIdle | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface AppmeshRouteSpecTcpRouteTimeout {
    /**
    * idle block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#idle AppmeshRoute#idle}
    */
    readonly idle?: AppmeshRouteSpecTcpRouteTimeoutIdle;
}
export declare function appmeshRouteSpecTcpRouteTimeoutToTerraform(struct?: AppmeshRouteSpecTcpRouteTimeoutOutputReference | AppmeshRouteSpecTcpRouteTimeout): any;
export declare class AppmeshRouteSpecTcpRouteTimeoutOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecTcpRouteTimeout | undefined;
    set internalValue(value: AppmeshRouteSpecTcpRouteTimeout | undefined);
    private _idle;
    get idle(): AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference;
    putIdle(value: AppmeshRouteSpecTcpRouteTimeoutIdle): void;
    resetIdle(): void;
    get idleInput(): AppmeshRouteSpecTcpRouteTimeoutIdle;
}
export interface AppmeshRouteSpecTcpRoute {
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#action AppmeshRoute#action}
    */
    readonly action: AppmeshRouteSpecTcpRouteAction;
    /**
    * timeout block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#timeout AppmeshRoute#timeout}
    */
    readonly timeout?: AppmeshRouteSpecTcpRouteTimeout;
}
export declare function appmeshRouteSpecTcpRouteToTerraform(struct?: AppmeshRouteSpecTcpRouteOutputReference | AppmeshRouteSpecTcpRoute): any;
export declare class AppmeshRouteSpecTcpRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpecTcpRoute | undefined;
    set internalValue(value: AppmeshRouteSpecTcpRoute | undefined);
    private _action;
    get action(): AppmeshRouteSpecTcpRouteActionOutputReference;
    putAction(value: AppmeshRouteSpecTcpRouteAction): void;
    get actionInput(): AppmeshRouteSpecTcpRouteAction;
    private _timeout;
    get timeout(): AppmeshRouteSpecTcpRouteTimeoutOutputReference;
    putTimeout(value: AppmeshRouteSpecTcpRouteTimeout): void;
    resetTimeout(): void;
    get timeoutInput(): AppmeshRouteSpecTcpRouteTimeout;
}
export interface AppmeshRouteSpec {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#priority AppmeshRoute#priority}
    */
    readonly priority?: number;
    /**
    * grpc_route block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#grpc_route AppmeshRoute#grpc_route}
    */
    readonly grpcRoute?: AppmeshRouteSpecGrpcRoute;
    /**
    * http2_route block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#http2_route AppmeshRoute#http2_route}
    */
    readonly http2Route?: AppmeshRouteSpecHttp2Route;
    /**
    * http_route block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#http_route AppmeshRoute#http_route}
    */
    readonly httpRoute?: AppmeshRouteSpecHttpRoute;
    /**
    * tcp_route block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#tcp_route AppmeshRoute#tcp_route}
    */
    readonly tcpRoute?: AppmeshRouteSpecTcpRoute;
}
export declare function appmeshRouteSpecToTerraform(struct?: AppmeshRouteSpecOutputReference | AppmeshRouteSpec): any;
export declare class AppmeshRouteSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshRouteSpec | undefined;
    set internalValue(value: AppmeshRouteSpec | undefined);
    private _priority?;
    get priority(): number;
    set priority(value: number);
    resetPriority(): void;
    get priorityInput(): number;
    private _grpcRoute;
    get grpcRoute(): AppmeshRouteSpecGrpcRouteOutputReference;
    putGrpcRoute(value: AppmeshRouteSpecGrpcRoute): void;
    resetGrpcRoute(): void;
    get grpcRouteInput(): AppmeshRouteSpecGrpcRoute;
    private _http2Route;
    get http2Route(): AppmeshRouteSpecHttp2RouteOutputReference;
    putHttp2Route(value: AppmeshRouteSpecHttp2Route): void;
    resetHttp2Route(): void;
    get http2RouteInput(): AppmeshRouteSpecHttp2Route;
    private _httpRoute;
    get httpRoute(): AppmeshRouteSpecHttpRouteOutputReference;
    putHttpRoute(value: AppmeshRouteSpecHttpRoute): void;
    resetHttpRoute(): void;
    get httpRouteInput(): AppmeshRouteSpecHttpRoute;
    private _tcpRoute;
    get tcpRoute(): AppmeshRouteSpecTcpRouteOutputReference;
    putTcpRoute(value: AppmeshRouteSpecTcpRoute): void;
    resetTcpRoute(): void;
    get tcpRouteInput(): AppmeshRouteSpecTcpRoute;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html aws_appmesh_route}
*/
export declare class AppmeshRoute extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html aws_appmesh_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshRouteConfig
    */
    constructor(scope: Construct, id: string, config: AppmeshRouteConfig);
    get arn(): string;
    get createdDate(): string;
    get id(): string;
    get lastUpdatedDate(): string;
    private _meshName?;
    get meshName(): string;
    set meshName(value: string);
    get meshNameInput(): string;
    private _meshOwner?;
    get meshOwner(): string;
    set meshOwner(value: string);
    resetMeshOwner(): void;
    get meshOwnerInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get resourceOwner(): string;
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
    private _virtualRouterName?;
    get virtualRouterName(): string;
    set virtualRouterName(value: string);
    get virtualRouterNameInput(): string;
    private _spec;
    get spec(): AppmeshRouteSpecOutputReference;
    putSpec(value: AppmeshRouteSpec): void;
    get specInput(): AppmeshRouteSpec;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=appmesh-route.d.ts.map