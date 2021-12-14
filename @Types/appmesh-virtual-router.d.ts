import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* App Mesh
*/
export interface AppmeshVirtualRouterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#mesh_name AppmeshVirtualRouter#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#mesh_owner AppmeshVirtualRouter#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#name AppmeshVirtualRouter#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#tags AppmeshVirtualRouter#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#tags_all AppmeshVirtualRouter#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * spec block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#spec AppmeshVirtualRouter#spec}
    */
    readonly spec: AppmeshVirtualRouterSpec;
}
export interface AppmeshVirtualRouterSpecListenerPortMapping {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#port AppmeshVirtualRouter#port}
    */
    readonly port: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#protocol AppmeshVirtualRouter#protocol}
    */
    readonly protocol: string;
}
export declare function appmeshVirtualRouterSpecListenerPortMappingToTerraform(struct?: AppmeshVirtualRouterSpecListenerPortMappingOutputReference | AppmeshVirtualRouterSpecListenerPortMapping): any;
export declare class AppmeshVirtualRouterSpecListenerPortMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualRouterSpecListenerPortMapping | undefined;
    set internalValue(value: AppmeshVirtualRouterSpecListenerPortMapping | undefined);
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string;
}
export interface AppmeshVirtualRouterSpecListener {
    /**
    * port_mapping block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#port_mapping AppmeshVirtualRouter#port_mapping}
    */
    readonly portMapping: AppmeshVirtualRouterSpecListenerPortMapping;
}
export declare function appmeshVirtualRouterSpecListenerToTerraform(struct?: AppmeshVirtualRouterSpecListenerOutputReference | AppmeshVirtualRouterSpecListener): any;
export declare class AppmeshVirtualRouterSpecListenerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualRouterSpecListener | undefined;
    set internalValue(value: AppmeshVirtualRouterSpecListener | undefined);
    private _portMapping;
    get portMapping(): AppmeshVirtualRouterSpecListenerPortMappingOutputReference;
    putPortMapping(value: AppmeshVirtualRouterSpecListenerPortMapping): void;
    get portMappingInput(): AppmeshVirtualRouterSpecListenerPortMapping;
}
export interface AppmeshVirtualRouterSpec {
    /**
    * listener block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#listener AppmeshVirtualRouter#listener}
    */
    readonly listener: AppmeshVirtualRouterSpecListener;
}
export declare function appmeshVirtualRouterSpecToTerraform(struct?: AppmeshVirtualRouterSpecOutputReference | AppmeshVirtualRouterSpec): any;
export declare class AppmeshVirtualRouterSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualRouterSpec | undefined;
    set internalValue(value: AppmeshVirtualRouterSpec | undefined);
    private _listener;
    get listener(): AppmeshVirtualRouterSpecListenerOutputReference;
    putListener(value: AppmeshVirtualRouterSpecListener): void;
    get listenerInput(): AppmeshVirtualRouterSpecListener;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html aws_appmesh_virtual_router}
*/
export declare class AppmeshVirtualRouter extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html aws_appmesh_virtual_router} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshVirtualRouterConfig
    */
    constructor(scope: Construct, id: string, config: AppmeshVirtualRouterConfig);
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
    get spec(): AppmeshVirtualRouterSpecOutputReference;
    putSpec(value: AppmeshVirtualRouterSpec): void;
    get specInput(): AppmeshVirtualRouterSpec;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=appmesh-virtual-router.d.ts.map