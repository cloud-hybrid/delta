import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* App Mesh
*/
export interface DataAwsAppmeshVirtualServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service.html#mesh_name DataAwsAppmeshVirtualService#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service.html#mesh_owner DataAwsAppmeshVirtualService#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service.html#name DataAwsAppmeshVirtualService#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service.html#tags DataAwsAppmeshVirtualService#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare class DataAwsAppmeshVirtualServiceSpecProviderVirtualNode extends cdktf.ComplexComputedList {
    get virtualNodeName(): string;
}
export declare class DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter extends cdktf.ComplexComputedList {
    get virtualRouterName(): string;
}
export declare class DataAwsAppmeshVirtualServiceSpecProvider extends cdktf.ComplexComputedList {
    get virtualNode(): any;
    get virtualRouter(): any;
}
export declare class DataAwsAppmeshVirtualServiceSpec extends cdktf.ComplexComputedList {
    get provider(): any;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service.html aws_appmesh_virtual_service}
*/
export declare class DataAwsAppmeshVirtualService extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service.html aws_appmesh_virtual_service} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAppmeshVirtualServiceConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsAppmeshVirtualServiceConfig);
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
    spec(index: string): DataAwsAppmeshVirtualServiceSpec;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-appmesh-virtual-service.d.ts.map