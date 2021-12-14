import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface Ec2ManagedPrefixListEntryAConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry.html#cidr Ec2ManagedPrefixListEntryA#cidr}
    */
    readonly cidr: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry.html#description Ec2ManagedPrefixListEntryA#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry.html#prefix_list_id Ec2ManagedPrefixListEntryA#prefix_list_id}
    */
    readonly prefixListId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry.html aws_ec2_managed_prefix_list_entry}
*/
export declare class Ec2ManagedPrefixListEntryA extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry.html aws_ec2_managed_prefix_list_entry} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2ManagedPrefixListEntryAConfig
    */
    constructor(scope: Construct, id: string, config: Ec2ManagedPrefixListEntryAConfig);
    private _cidr?;
    get cidr(): string;
    set cidr(value: string);
    get cidrInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _prefixListId?;
    get prefixListId(): string;
    set prefixListId(value: string);
    get prefixListIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ec2-managed-prefix-list-entry.d.ts.map