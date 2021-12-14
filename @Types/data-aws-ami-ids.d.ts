import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface DataAwsAmiIdsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ami_ids.html#executable_users DataAwsAmiIds#executable_users}
    */
    readonly executableUsers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ami_ids.html#name_regex DataAwsAmiIds#name_regex}
    */
    readonly nameRegex?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ami_ids.html#owners DataAwsAmiIds#owners}
    */
    readonly owners: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ami_ids.html#sort_ascending DataAwsAmiIds#sort_ascending}
    */
    readonly sortAscending?: boolean | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ami_ids.html#filter DataAwsAmiIds#filter}
    */
    readonly filter?: DataAwsAmiIdsFilter[];
}
export interface DataAwsAmiIdsFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ami_ids.html#name DataAwsAmiIds#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ami_ids.html#values DataAwsAmiIds#values}
    */
    readonly values: string[];
}
export declare function dataAwsAmiIdsFilterToTerraform(struct?: DataAwsAmiIdsFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ami_ids.html aws_ami_ids}
*/
export declare class DataAwsAmiIds extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ami_ids.html aws_ami_ids} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAmiIdsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsAmiIdsConfig);
    private _executableUsers?;
    get executableUsers(): string[];
    set executableUsers(value: string[]);
    resetExecutableUsers(): void;
    get executableUsersInput(): string[];
    get id(): string;
    get ids(): string[];
    private _nameRegex?;
    get nameRegex(): string;
    set nameRegex(value: string);
    resetNameRegex(): void;
    get nameRegexInput(): string;
    private _owners?;
    get owners(): string[];
    set owners(value: string[]);
    get ownersInput(): string[];
    private _sortAscending?;
    get sortAscending(): boolean | cdktf.IResolvable;
    set sortAscending(value: boolean | cdktf.IResolvable);
    resetSortAscending(): void;
    get sortAscendingInput(): boolean | cdktf.IResolvable;
    private _filter?;
    get filter(): DataAwsAmiIdsFilter[];
    set filter(value: DataAwsAmiIdsFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsAmiIdsFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-ami-ids.d.ts.map