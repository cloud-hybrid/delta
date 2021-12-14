import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* App Mesh
*/
export interface AppmeshGatewayRouteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#mesh_name AppmeshGatewayRoute#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#mesh_owner AppmeshGatewayRoute#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#name AppmeshGatewayRoute#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#tags AppmeshGatewayRoute#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#tags_all AppmeshGatewayRoute#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_gateway_name AppmeshGatewayRoute#virtual_gateway_name}
    */
    readonly virtualGatewayName: string;
    /**
    * spec block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#spec AppmeshGatewayRoute#spec}
    */
    readonly spec: AppmeshGatewayRouteSpec;
}
export interface AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service_name AppmeshGatewayRoute#virtual_service_name}
    */
    readonly virtualServiceName: string;
}
export declare function appmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference | AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService): any;
export declare class AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService | undefined);
    private _virtualServiceName?;
    get virtualServiceName(): string;
    set virtualServiceName(value: string);
    get virtualServiceNameInput(): string;
}
export interface AppmeshGatewayRouteSpecGrpcRouteActionTarget {
    /**
    * virtual_service block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service AppmeshGatewayRoute#virtual_service}
    */
    readonly virtualService: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService;
}
export declare function appmeshGatewayRouteSpecGrpcRouteActionTargetToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference | AppmeshGatewayRouteSpecGrpcRouteActionTarget): any;
export declare class AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshGatewayRouteSpecGrpcRouteActionTarget | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecGrpcRouteActionTarget | undefined);
    private _virtualService;
    get virtualService(): AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference;
    putVirtualService(value: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService): void;
    get virtualServiceInput(): AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService;
}
export interface AppmeshGatewayRouteSpecGrpcRouteAction {
    /**
    * target block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#target AppmeshGatewayRoute#target}
    */
    readonly target: AppmeshGatewayRouteSpecGrpcRouteActionTarget;
}
export declare function appmeshGatewayRouteSpecGrpcRouteActionToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteActionOutputReference | AppmeshGatewayRouteSpecGrpcRouteAction): any;
export declare class AppmeshGatewayRouteSpecGrpcRouteActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshGatewayRouteSpecGrpcRouteAction | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecGrpcRouteAction | undefined);
    private _target;
    get target(): AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference;
    putTarget(value: AppmeshGatewayRouteSpecGrpcRouteActionTarget): void;
    get targetInput(): AppmeshGatewayRouteSpecGrpcRouteActionTarget;
}
export interface AppmeshGatewayRouteSpecGrpcRouteMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#service_name AppmeshGatewayRoute#service_name}
    */
    readonly serviceName: string;
}
export declare function appmeshGatewayRouteSpecGrpcRouteMatchToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference | AppmeshGatewayRouteSpecGrpcRouteMatch): any;
export declare class AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshGatewayRouteSpecGrpcRouteMatch | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecGrpcRouteMatch | undefined);
    private _serviceName?;
    get serviceName(): string;
    set serviceName(value: string);
    get serviceNameInput(): string;
}
export interface AppmeshGatewayRouteSpecGrpcRoute {
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#action AppmeshGatewayRoute#action}
    */
    readonly action: AppmeshGatewayRouteSpecGrpcRouteAction;
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#match AppmeshGatewayRoute#match}
    */
    readonly match: AppmeshGatewayRouteSpecGrpcRouteMatch;
}
export declare function appmeshGatewayRouteSpecGrpcRouteToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteOutputReference | AppmeshGatewayRouteSpecGrpcRoute): any;
export declare class AppmeshGatewayRouteSpecGrpcRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshGatewayRouteSpecGrpcRoute | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecGrpcRoute | undefined);
    private _action;
    get action(): AppmeshGatewayRouteSpecGrpcRouteActionOutputReference;
    putAction(value: AppmeshGatewayRouteSpecGrpcRouteAction): void;
    get actionInput(): AppmeshGatewayRouteSpecGrpcRouteAction;
    private _match;
    get match(): AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference;
    putMatch(value: AppmeshGatewayRouteSpecGrpcRouteMatch): void;
    get matchInput(): AppmeshGatewayRouteSpecGrpcRouteMatch;
}
export interface AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service_name AppmeshGatewayRoute#virtual_service_name}
    */
    readonly virtualServiceName: string;
}
export declare function appmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference | AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService): any;
export declare class AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService | undefined);
    private _virtualServiceName?;
    get virtualServiceName(): string;
    set virtualServiceName(value: string);
    get virtualServiceNameInput(): string;
}
export interface AppmeshGatewayRouteSpecHttp2RouteActionTarget {
    /**
    * virtual_service block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service AppmeshGatewayRoute#virtual_service}
    */
    readonly virtualService: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService;
}
export declare function appmeshGatewayRouteSpecHttp2RouteActionTargetToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference | AppmeshGatewayRouteSpecHttp2RouteActionTarget): any;
export declare class AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshGatewayRouteSpecHttp2RouteActionTarget | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttp2RouteActionTarget | undefined);
    private _virtualService;
    get virtualService(): AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference;
    putVirtualService(value: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService): void;
    get virtualServiceInput(): AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService;
}
export interface AppmeshGatewayRouteSpecHttp2RouteAction {
    /**
    * target block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#target AppmeshGatewayRoute#target}
    */
    readonly target: AppmeshGatewayRouteSpecHttp2RouteActionTarget;
}
export declare function appmeshGatewayRouteSpecHttp2RouteActionToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionOutputReference | AppmeshGatewayRouteSpecHttp2RouteAction): any;
export declare class AppmeshGatewayRouteSpecHttp2RouteActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshGatewayRouteSpecHttp2RouteAction | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttp2RouteAction | undefined);
    private _target;
    get target(): AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference;
    putTarget(value: AppmeshGatewayRouteSpecHttp2RouteActionTarget): void;
    get targetInput(): AppmeshGatewayRouteSpecHttp2RouteActionTarget;
}
export interface AppmeshGatewayRouteSpecHttp2RouteMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#prefix AppmeshGatewayRoute#prefix}
    */
    readonly prefix: string;
}
export declare function appmeshGatewayRouteSpecHttp2RouteMatchToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference | AppmeshGatewayRouteSpecHttp2RouteMatch): any;
export declare class AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshGatewayRouteSpecHttp2RouteMatch | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttp2RouteMatch | undefined);
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    get prefixInput(): string;
}
export interface AppmeshGatewayRouteSpecHttp2Route {
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#action AppmeshGatewayRoute#action}
    */
    readonly action: AppmeshGatewayRouteSpecHttp2RouteAction;
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#match AppmeshGatewayRoute#match}
    */
    readonly match: AppmeshGatewayRouteSpecHttp2RouteMatch;
}
export declare function appmeshGatewayRouteSpecHttp2RouteToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteOutputReference | AppmeshGatewayRouteSpecHttp2Route): any;
export declare class AppmeshGatewayRouteSpecHttp2RouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshGatewayRouteSpecHttp2Route | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttp2Route | undefined);
    private _action;
    get action(): AppmeshGatewayRouteSpecHttp2RouteActionOutputReference;
    putAction(value: AppmeshGatewayRouteSpecHttp2RouteAction): void;
    get actionInput(): AppmeshGatewayRouteSpecHttp2RouteAction;
    private _match;
    get match(): AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference;
    putMatch(value: AppmeshGatewayRouteSpecHttp2RouteMatch): void;
    get matchInput(): AppmeshGatewayRouteSpecHttp2RouteMatch;
}
export interface AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service_name AppmeshGatewayRoute#virtual_service_name}
    */
    readonly virtualServiceName: string;
}
export declare function appmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference | AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService): any;
export declare class AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService | undefined);
    private _virtualServiceName?;
    get virtualServiceName(): string;
    set virtualServiceName(value: string);
    get virtualServiceNameInput(): string;
}
export interface AppmeshGatewayRouteSpecHttpRouteActionTarget {
    /**
    * virtual_service block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service AppmeshGatewayRoute#virtual_service}
    */
    readonly virtualService: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService;
}
export declare function appmeshGatewayRouteSpecHttpRouteActionTargetToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference | AppmeshGatewayRouteSpecHttpRouteActionTarget): any;
export declare class AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshGatewayRouteSpecHttpRouteActionTarget | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttpRouteActionTarget | undefined);
    private _virtualService;
    get virtualService(): AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference;
    putVirtualService(value: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService): void;
    get virtualServiceInput(): AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService;
}
export interface AppmeshGatewayRouteSpecHttpRouteAction {
    /**
    * target block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#target AppmeshGatewayRoute#target}
    */
    readonly target: AppmeshGatewayRouteSpecHttpRouteActionTarget;
}
export declare function appmeshGatewayRouteSpecHttpRouteActionToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionOutputReference | AppmeshGatewayRouteSpecHttpRouteAction): any;
export declare class AppmeshGatewayRouteSpecHttpRouteActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshGatewayRouteSpecHttpRouteAction | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttpRouteAction | undefined);
    private _target;
    get target(): AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference;
    putTarget(value: AppmeshGatewayRouteSpecHttpRouteActionTarget): void;
    get targetInput(): AppmeshGatewayRouteSpecHttpRouteActionTarget;
}
export interface AppmeshGatewayRouteSpecHttpRouteMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#prefix AppmeshGatewayRoute#prefix}
    */
    readonly prefix: string;
}
export declare function appmeshGatewayRouteSpecHttpRouteMatchToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteMatchOutputReference | AppmeshGatewayRouteSpecHttpRouteMatch): any;
export declare class AppmeshGatewayRouteSpecHttpRouteMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshGatewayRouteSpecHttpRouteMatch | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttpRouteMatch | undefined);
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    get prefixInput(): string;
}
export interface AppmeshGatewayRouteSpecHttpRoute {
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#action AppmeshGatewayRoute#action}
    */
    readonly action: AppmeshGatewayRouteSpecHttpRouteAction;
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#match AppmeshGatewayRoute#match}
    */
    readonly match: AppmeshGatewayRouteSpecHttpRouteMatch;
}
export declare function appmeshGatewayRouteSpecHttpRouteToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteOutputReference | AppmeshGatewayRouteSpecHttpRoute): any;
export declare class AppmeshGatewayRouteSpecHttpRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshGatewayRouteSpecHttpRoute | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttpRoute | undefined);
    private _action;
    get action(): AppmeshGatewayRouteSpecHttpRouteActionOutputReference;
    putAction(value: AppmeshGatewayRouteSpecHttpRouteAction): void;
    get actionInput(): AppmeshGatewayRouteSpecHttpRouteAction;
    private _match;
    get match(): AppmeshGatewayRouteSpecHttpRouteMatchOutputReference;
    putMatch(value: AppmeshGatewayRouteSpecHttpRouteMatch): void;
    get matchInput(): AppmeshGatewayRouteSpecHttpRouteMatch;
}
export interface AppmeshGatewayRouteSpec {
    /**
    * grpc_route block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#grpc_route AppmeshGatewayRoute#grpc_route}
    */
    readonly grpcRoute?: AppmeshGatewayRouteSpecGrpcRoute;
    /**
    * http2_route block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#http2_route AppmeshGatewayRoute#http2_route}
    */
    readonly http2Route?: AppmeshGatewayRouteSpecHttp2Route;
    /**
    * http_route block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#http_route AppmeshGatewayRoute#http_route}
    */
    readonly httpRoute?: AppmeshGatewayRouteSpecHttpRoute;
}
export declare function appmeshGatewayRouteSpecToTerraform(struct?: AppmeshGatewayRouteSpecOutputReference | AppmeshGatewayRouteSpec): any;
export declare class AppmeshGatewayRouteSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshGatewayRouteSpec | undefined;
    set internalValue(value: AppmeshGatewayRouteSpec | undefined);
    private _grpcRoute;
    get grpcRoute(): AppmeshGatewayRouteSpecGrpcRouteOutputReference;
    putGrpcRoute(value: AppmeshGatewayRouteSpecGrpcRoute): void;
    resetGrpcRoute(): void;
    get grpcRouteInput(): AppmeshGatewayRouteSpecGrpcRoute;
    private _http2Route;
    get http2Route(): AppmeshGatewayRouteSpecHttp2RouteOutputReference;
    putHttp2Route(value: AppmeshGatewayRouteSpecHttp2Route): void;
    resetHttp2Route(): void;
    get http2RouteInput(): AppmeshGatewayRouteSpecHttp2Route;
    private _httpRoute;
    get httpRoute(): AppmeshGatewayRouteSpecHttpRouteOutputReference;
    putHttpRoute(value: AppmeshGatewayRouteSpecHttpRoute): void;
    resetHttpRoute(): void;
    get httpRouteInput(): AppmeshGatewayRouteSpecHttpRoute;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html aws_appmesh_gateway_route}
*/
export declare class AppmeshGatewayRoute extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html aws_appmesh_gateway_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshGatewayRouteConfig
    */
    constructor(scope: Construct, id: string, config: AppmeshGatewayRouteConfig);
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
    private _virtualGatewayName?;
    get virtualGatewayName(): string;
    set virtualGatewayName(value: string);
    get virtualGatewayNameInput(): string;
    private _spec;
    get spec(): AppmeshGatewayRouteSpecOutputReference;
    putSpec(value: AppmeshGatewayRouteSpec): void;
    get specInput(): AppmeshGatewayRouteSpec;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=appmesh-gateway-route.d.ts.map