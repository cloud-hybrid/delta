import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface DataAwsEc2ManagedPrefixListConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list.html#name DataAwsEc2ManagedPrefixList#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list.html#tags DataAwsEc2ManagedPrefixList#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list.html#filter DataAwsEc2ManagedPrefixList#filter}
    */
    readonly filter?: DataAwsEc2ManagedPrefixListFilter[];
}
export declare class DataAwsEc2ManagedPrefixListEntries extends cdktf.ComplexComputedList {
    get cidr(): string;
    get description(): string;
}
export interface DataAwsEc2ManagedPrefixListFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list.html#name DataAwsEc2ManagedPrefixList#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list.html#values DataAwsEc2ManagedPrefixList#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2ManagedPrefixListFilterToTerraform(struct?: DataAwsEc2ManagedPrefixListFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list.html aws_ec2_managed_prefix_list}
*/
export declare class DataAwsEc2ManagedPrefixList extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list.html aws_ec2_managed_prefix_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2ManagedPrefixListConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2ManagedPrefixListConfig);
    get addressFamily(): string;
    get arn(): string;
    entries(index: string): DataAwsEc2ManagedPrefixListEntries;
    get id(): string;
    get maxEntries(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    get ownerId(): string;
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
    get version(): number;
    private _filter?;
    get filter(): DataAwsEc2ManagedPrefixListFilter[];
    set filter(value: DataAwsEc2ManagedPrefixListFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEc2ManagedPrefixListFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-ec2-managed-prefix-list.d.ts.map