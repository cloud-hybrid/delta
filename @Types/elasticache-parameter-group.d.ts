import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS ElastiCache
*/
export interface ElasticacheParameterGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group.html#description ElasticacheParameterGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group.html#family ElasticacheParameterGroup#family}
    */
    readonly family: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group.html#name ElasticacheParameterGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group.html#tags ElasticacheParameterGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group.html#tags_all ElasticacheParameterGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * parameter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group.html#parameter ElasticacheParameterGroup#parameter}
    */
    readonly parameter?: ElasticacheParameterGroupParameter[];
}
export interface ElasticacheParameterGroupParameter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group.html#name ElasticacheParameterGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group.html#value ElasticacheParameterGroup#value}
    */
    readonly value: string;
}
export declare function elasticacheParameterGroupParameterToTerraform(struct?: ElasticacheParameterGroupParameter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group.html aws_elasticache_parameter_group}
*/
export declare class ElasticacheParameterGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group.html aws_elasticache_parameter_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticacheParameterGroupConfig
    */
    constructor(scope: Construct, id: string, config: ElasticacheParameterGroupConfig);
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
    get nameInput(): string;
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
    get parameter(): ElasticacheParameterGroupParameter[];
    set parameter(value: ElasticacheParameterGroupParameter[]);
    resetParameter(): void;
    get parameterInput(): ElasticacheParameterGroupParameter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=elasticache-parameter-group.d.ts.map