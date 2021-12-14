import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* App Mesh
*/
export interface DataAwsAppmeshMeshConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_mesh.html#mesh_owner DataAwsAppmeshMesh#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_mesh.html#name DataAwsAppmeshMesh#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_mesh.html#tags DataAwsAppmeshMesh#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare class DataAwsAppmeshMeshSpecEgressFilter extends cdktf.ComplexComputedList {
    get type(): string;
}
export declare class DataAwsAppmeshMeshSpec extends cdktf.ComplexComputedList {
    get egressFilter(): any;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/appmesh_mesh.html aws_appmesh_mesh}
*/
export declare class DataAwsAppmeshMesh extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/appmesh_mesh.html aws_appmesh_mesh} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAppmeshMeshConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsAppmeshMeshConfig);
    get arn(): string;
    get createdDate(): string;
    get id(): string;
    get lastUpdatedDate(): string;
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
    spec(index: string): DataAwsAppmeshMeshSpec;
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
//# sourceMappingURL=data-aws-appmesh-mesh.d.ts.map