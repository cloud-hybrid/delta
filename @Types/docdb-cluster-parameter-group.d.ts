import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS DocumentDB
*/
export interface DocdbClusterParameterGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group.html#description DocdbClusterParameterGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group.html#family DocdbClusterParameterGroup#family}
    */
    readonly family: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group.html#name DocdbClusterParameterGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group.html#name_prefix DocdbClusterParameterGroup#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group.html#tags DocdbClusterParameterGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group.html#tags_all DocdbClusterParameterGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * parameter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group.html#parameter DocdbClusterParameterGroup#parameter}
    */
    readonly parameter?: DocdbClusterParameterGroupParameter[];
}
export interface DocdbClusterParameterGroupParameter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group.html#apply_method DocdbClusterParameterGroup#apply_method}
    */
    readonly applyMethod?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group.html#name DocdbClusterParameterGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group.html#value DocdbClusterParameterGroup#value}
    */
    readonly value: string;
}
export declare function docdbClusterParameterGroupParameterToTerraform(struct?: DocdbClusterParameterGroupParameter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group.html aws_docdb_cluster_parameter_group}
*/
export declare class DocdbClusterParameterGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group.html aws_docdb_cluster_parameter_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DocdbClusterParameterGroupConfig
    */
    constructor(scope: Construct, id: string, config: DocdbClusterParameterGroupConfig);
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
    get parameter(): DocdbClusterParameterGroupParameter[];
    set parameter(value: DocdbClusterParameterGroupParameter[]);
    resetParameter(): void;
    get parameterInput(): DocdbClusterParameterGroupParameter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=docdb-cluster-parameter-group.d.ts.map