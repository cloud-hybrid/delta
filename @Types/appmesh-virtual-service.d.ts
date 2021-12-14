import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* App Mesh
*/
export interface AppmeshVirtualServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#mesh_name AppmeshVirtualService#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#mesh_owner AppmeshVirtualService#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#name AppmeshVirtualService#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#tags AppmeshVirtualService#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#tags_all AppmeshVirtualService#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * spec block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#spec AppmeshVirtualService#spec}
    */
    readonly spec: AppmeshVirtualServiceSpec;
}
export interface AppmeshVirtualServiceSpecProviderVirtualNode {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#virtual_node_name AppmeshVirtualService#virtual_node_name}
    */
    readonly virtualNodeName: string;
}
export declare function appmeshVirtualServiceSpecProviderVirtualNodeToTerraform(struct?: AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference | AppmeshVirtualServiceSpecProviderVirtualNode): any;
export declare class AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualServiceSpecProviderVirtualNode | undefined;
    set internalValue(value: AppmeshVirtualServiceSpecProviderVirtualNode | undefined);
    private _virtualNodeName?;
    get virtualNodeName(): string;
    set virtualNodeName(value: string);
    get virtualNodeNameInput(): string;
}
export interface AppmeshVirtualServiceSpecProviderVirtualRouter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#virtual_router_name AppmeshVirtualService#virtual_router_name}
    */
    readonly virtualRouterName: string;
}
export declare function appmeshVirtualServiceSpecProviderVirtualRouterToTerraform(struct?: AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference | AppmeshVirtualServiceSpecProviderVirtualRouter): any;
export declare class AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualServiceSpecProviderVirtualRouter | undefined;
    set internalValue(value: AppmeshVirtualServiceSpecProviderVirtualRouter | undefined);
    private _virtualRouterName?;
    get virtualRouterName(): string;
    set virtualRouterName(value: string);
    get virtualRouterNameInput(): string;
}
export interface AppmeshVirtualServiceSpecProvider {
    /**
    * virtual_node block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#virtual_node AppmeshVirtualService#virtual_node}
    */
    readonly virtualNode?: AppmeshVirtualServiceSpecProviderVirtualNode;
    /**
    * virtual_router block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#virtual_router AppmeshVirtualService#virtual_router}
    */
    readonly virtualRouter?: AppmeshVirtualServiceSpecProviderVirtualRouter;
}
export declare function appmeshVirtualServiceSpecProviderToTerraform(struct?: AppmeshVirtualServiceSpecProviderOutputReference | AppmeshVirtualServiceSpecProvider): any;
export declare class AppmeshVirtualServiceSpecProviderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualServiceSpecProvider | undefined;
    set internalValue(value: AppmeshVirtualServiceSpecProvider | undefined);
    private _virtualNode;
    get virtualNode(): AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference;
    putVirtualNode(value: AppmeshVirtualServiceSpecProviderVirtualNode): void;
    resetVirtualNode(): void;
    get virtualNodeInput(): AppmeshVirtualServiceSpecProviderVirtualNode;
    private _virtualRouter;
    get virtualRouter(): AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference;
    putVirtualRouter(value: AppmeshVirtualServiceSpecProviderVirtualRouter): void;
    resetVirtualRouter(): void;
    get virtualRouterInput(): AppmeshVirtualServiceSpecProviderVirtualRouter;
}
export interface AppmeshVirtualServiceSpec {
    /**
    * provider block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#provider AppmeshVirtualService#provider}
    */
    readonly provider?: AppmeshVirtualServiceSpecProvider;
}
export declare function appmeshVirtualServiceSpecToTerraform(struct?: AppmeshVirtualServiceSpecOutputReference | AppmeshVirtualServiceSpec): any;
export declare class AppmeshVirtualServiceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualServiceSpec | undefined;
    set internalValue(value: AppmeshVirtualServiceSpec | undefined);
    private _provider;
    get provider(): AppmeshVirtualServiceSpecProviderOutputReference;
    putProvider(value: AppmeshVirtualServiceSpecProvider): void;
    resetProvider(): void;
    get providerInput(): AppmeshVirtualServiceSpecProvider;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html aws_appmesh_virtual_service}
*/
export declare class AppmeshVirtualService extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html aws_appmesh_virtual_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshVirtualServiceConfig
    */
    constructor(scope: Construct, id: string, config: AppmeshVirtualServiceConfig);
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
    private _spec;
    get spec(): AppmeshVirtualServiceSpecOutputReference;
    putSpec(value: AppmeshVirtualServiceSpec): void;
    get specInput(): AppmeshVirtualServiceSpec;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=appmesh-virtual-service.d.ts.map