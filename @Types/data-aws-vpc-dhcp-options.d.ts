import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface DataAwsVpcDhcpOptionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options.html#dhcp_options_id DataAwsVpcDhcpOptions#dhcp_options_id}
    */
    readonly dhcpOptionsId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options.html#tags DataAwsVpcDhcpOptions#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options.html#filter DataAwsVpcDhcpOptions#filter}
    */
    readonly filter?: DataAwsVpcDhcpOptionsFilter[];
}
export interface DataAwsVpcDhcpOptionsFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options.html#name DataAwsVpcDhcpOptions#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options.html#values DataAwsVpcDhcpOptions#values}
    */
    readonly values: string[];
}
export declare function dataAwsVpcDhcpOptionsFilterToTerraform(struct?: DataAwsVpcDhcpOptionsFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options.html aws_vpc_dhcp_options}
*/
export declare class DataAwsVpcDhcpOptions extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options.html aws_vpc_dhcp_options} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcDhcpOptionsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsVpcDhcpOptionsConfig);
    get arn(): string;
    private _dhcpOptionsId?;
    get dhcpOptionsId(): string;
    set dhcpOptionsId(value: string);
    resetDhcpOptionsId(): void;
    get dhcpOptionsIdInput(): string;
    get domainName(): string;
    get domainNameServers(): string[];
    get id(): string;
    get netbiosNameServers(): string[];
    get netbiosNodeType(): string;
    get ntpServers(): string[];
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
    private _filter?;
    get filter(): DataAwsVpcDhcpOptionsFilter[];
    set filter(value: DataAwsVpcDhcpOptionsFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsVpcDhcpOptionsFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-vpc-dhcp-options.d.ts.map