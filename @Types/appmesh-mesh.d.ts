import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* App Mesh
*/
export interface AppmeshMeshConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html#name AppmeshMesh#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html#tags AppmeshMesh#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html#tags_all AppmeshMesh#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * spec block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html#spec AppmeshMesh#spec}
    */
    readonly spec?: AppmeshMeshSpec;
}
export interface AppmeshMeshSpecEgressFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html#type AppmeshMesh#type}
    */
    readonly type?: string;
}
export declare function appmeshMeshSpecEgressFilterToTerraform(struct?: AppmeshMeshSpecEgressFilterOutputReference | AppmeshMeshSpecEgressFilter): any;
export declare class AppmeshMeshSpecEgressFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshMeshSpecEgressFilter | undefined;
    set internalValue(value: AppmeshMeshSpecEgressFilter | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
}
export interface AppmeshMeshSpec {
    /**
    * egress_filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html#egress_filter AppmeshMesh#egress_filter}
    */
    readonly egressFilter?: AppmeshMeshSpecEgressFilter;
}
export declare function appmeshMeshSpecToTerraform(struct?: AppmeshMeshSpecOutputReference | AppmeshMeshSpec): any;
export declare class AppmeshMeshSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshMeshSpec | undefined;
    set internalValue(value: AppmeshMeshSpec | undefined);
    private _egressFilter;
    get egressFilter(): AppmeshMeshSpecEgressFilterOutputReference;
    putEgressFilter(value: AppmeshMeshSpecEgressFilter): void;
    resetEgressFilter(): void;
    get egressFilterInput(): AppmeshMeshSpecEgressFilter;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html aws_appmesh_mesh}
*/
export declare class AppmeshMesh extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html aws_appmesh_mesh} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshMeshConfig
    */
    constructor(scope: Construct, id: string, config: AppmeshMeshConfig);
    get arn(): string;
    get createdDate(): string;
    get id(): string;
    get lastUpdatedDate(): string;
    get meshOwner(): string;
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
    get spec(): AppmeshMeshSpecOutputReference;
    putSpec(value: AppmeshMeshSpec): void;
    resetSpec(): void;
    get specInput(): AppmeshMeshSpec;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=appmesh-mesh.d.ts.map