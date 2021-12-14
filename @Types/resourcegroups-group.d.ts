import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Resource Groups
*/
export interface ResourcegroupsGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group.html#description ResourcegroupsGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group.html#name ResourcegroupsGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group.html#tags ResourcegroupsGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group.html#tags_all ResourcegroupsGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * resource_query block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group.html#resource_query ResourcegroupsGroup#resource_query}
    */
    readonly resourceQuery: ResourcegroupsGroupResourceQuery;
}
export interface ResourcegroupsGroupResourceQuery {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group.html#query ResourcegroupsGroup#query}
    */
    readonly query: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group.html#type ResourcegroupsGroup#type}
    */
    readonly type?: string;
}
export declare function resourcegroupsGroupResourceQueryToTerraform(struct?: ResourcegroupsGroupResourceQueryOutputReference | ResourcegroupsGroupResourceQuery): any;
export declare class ResourcegroupsGroupResourceQueryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ResourcegroupsGroupResourceQuery | undefined;
    set internalValue(value: ResourcegroupsGroupResourceQuery | undefined);
    private _query?;
    get query(): string;
    set query(value: string);
    get queryInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group.html aws_resourcegroups_group}
*/
export declare class ResourcegroupsGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group.html aws_resourcegroups_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ResourcegroupsGroupConfig
    */
    constructor(scope: Construct, id: string, config: ResourcegroupsGroupConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
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
    private _resourceQuery;
    get resourceQuery(): ResourcegroupsGroupResourceQueryOutputReference;
    putResourceQuery(value: ResourcegroupsGroupResourceQuery): void;
    get resourceQueryInput(): ResourcegroupsGroupResourceQuery;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=resourcegroups-group.d.ts.map