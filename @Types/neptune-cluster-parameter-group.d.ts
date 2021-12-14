import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Neptune
*/
export interface NeptuneClusterParameterGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group.html#description NeptuneClusterParameterGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group.html#family NeptuneClusterParameterGroup#family}
    */
    readonly family: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group.html#name NeptuneClusterParameterGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group.html#name_prefix NeptuneClusterParameterGroup#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group.html#tags NeptuneClusterParameterGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group.html#tags_all NeptuneClusterParameterGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * parameter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group.html#parameter NeptuneClusterParameterGroup#parameter}
    */
    readonly parameter?: NeptuneClusterParameterGroupParameter[];
}
export interface NeptuneClusterParameterGroupParameter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group.html#apply_method NeptuneClusterParameterGroup#apply_method}
    */
    readonly applyMethod?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group.html#name NeptuneClusterParameterGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group.html#value NeptuneClusterParameterGroup#value}
    */
    readonly value: string;
}
export declare function neptuneClusterParameterGroupParameterToTerraform(struct?: NeptuneClusterParameterGroupParameter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group.html aws_neptune_cluster_parameter_group}
*/
export declare class NeptuneClusterParameterGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group.html aws_neptune_cluster_parameter_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NeptuneClusterParameterGroupConfig
    */
    constructor(scope: Construct, id: string, config: NeptuneClusterParameterGroupConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _family?;
    get family(): string;
    set family(value: string);
    get familyInput(): string;
    get id(): string;
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
    private _parameter?;
    get parameter(): NeptuneClusterParameterGroupParameter[];
    set parameter(value: NeptuneClusterParameterGroupParameter[]);
    resetParameter(): void;
    get parameterInput(): NeptuneClusterParameterGroupParameter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=neptune-cluster-parameter-group.d.ts.map