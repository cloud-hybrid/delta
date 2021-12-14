import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface DefaultVpcDhcpOptionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options.html#netbios_name_servers DefaultVpcDhcpOptions#netbios_name_servers}
    */
    readonly netbiosNameServers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options.html#netbios_node_type DefaultVpcDhcpOptions#netbios_node_type}
    */
    readonly netbiosNodeType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options.html#owner_id DefaultVpcDhcpOptions#owner_id}
    */
    readonly ownerId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options.html#tags DefaultVpcDhcpOptions#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options.html#tags_all DefaultVpcDhcpOptions#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options.html aws_default_vpc_dhcp_options}
*/
export declare class DefaultVpcDhcpOptions extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options.html aws_default_vpc_dhcp_options} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DefaultVpcDhcpOptionsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DefaultVpcDhcpOptionsConfig);
    get arn(): string;
    get domainName(): string;
    get domainNameServers(): string;
    get id(): string;
    private _netbiosNameServers?;
    get netbiosNameServers(): string[];
    set netbiosNameServers(value: string[]);
    resetNetbiosNameServers(): void;
    get netbiosNameServersInput(): string[];
    private _netbiosNodeType?;
    get netbiosNodeType(): string;
    set netbiosNodeType(value: string);
    resetNetbiosNodeType(): void;
    get netbiosNodeTypeInput(): string;
    get ntpServers(): string;
    private _ownerId?;
    get ownerId(): string;
    set ownerId(value: string);
    resetOwnerId(): void;
    get ownerIdInput(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=default-vpc-dhcp-options.d.ts.map