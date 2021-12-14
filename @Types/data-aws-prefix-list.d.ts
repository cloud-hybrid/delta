import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Data Sources
*/
export interface DataAwsPrefixListConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/prefix_list.html#name DataAwsPrefixList#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/prefix_list.html#prefix_list_id DataAwsPrefixList#prefix_list_id}
    */
    readonly prefixListId?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/prefix_list.html#filter DataAwsPrefixList#filter}
    */
    readonly filter?: DataAwsPrefixListFilter[];
}
export interface DataAwsPrefixListFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/prefix_list.html#name DataAwsPrefixList#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/prefix_list.html#values DataAwsPrefixList#values}
    */
    readonly values: string[];
}
export declare function dataAwsPrefixListFilterToTerraform(struct?: DataAwsPrefixListFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/prefix_list.html aws_prefix_list}
*/
export declare class DataAwsPrefixList extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/prefix_list.html aws_prefix_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsPrefixListConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsPrefixListConfig);
    get cidrBlocks(): string[];
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _prefixListId?;
    get prefixListId(): string;
    set prefixListId(value: string);
    resetPrefixListId(): void;
    get prefixListIdInput(): string;
    private _filter?;
    get filter(): DataAwsPrefixListFilter[];
    set filter(value: DataAwsPrefixListFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsPrefixListFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-prefix-list.d.ts.map