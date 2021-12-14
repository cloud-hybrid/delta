import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface NetworkInterfaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#description NetworkInterface#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#interface_type NetworkInterface#interface_type}
    */
    readonly interfaceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#ipv4_prefix_count NetworkInterface#ipv4_prefix_count}
    */
    readonly ipv4PrefixCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#ipv4_prefixes NetworkInterface#ipv4_prefixes}
    */
    readonly ipv4Prefixes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#ipv6_address_count NetworkInterface#ipv6_address_count}
    */
    readonly ipv6AddressCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#ipv6_addresses NetworkInterface#ipv6_addresses}
    */
    readonly ipv6Addresses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#ipv6_prefix_count NetworkInterface#ipv6_prefix_count}
    */
    readonly ipv6PrefixCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#ipv6_prefixes NetworkInterface#ipv6_prefixes}
    */
    readonly ipv6Prefixes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#private_ip NetworkInterface#private_ip}
    */
    readonly privateIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#private_ips NetworkInterface#private_ips}
    */
    readonly privateIps?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#private_ips_count NetworkInterface#private_ips_count}
    */
    readonly privateIpsCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#security_groups NetworkInterface#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#source_dest_check NetworkInterface#source_dest_check}
    */
    readonly sourceDestCheck?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#subnet_id NetworkInterface#subnet_id}
    */
    readonly subnetId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#tags NetworkInterface#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#tags_all NetworkInterface#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * attachment block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#attachment NetworkInterface#attachment}
    */
    readonly attachment?: NetworkInterfaceAttachment[];
}
export interface NetworkInterfaceAttachment {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#device_index NetworkInterface#device_index}
    */
    readonly deviceIndex: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#instance NetworkInterface#instance}
    */
    readonly instance: string;
}
export declare function networkInterfaceAttachmentToTerraform(struct?: NetworkInterfaceAttachment): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html aws_network_interface}
*/
export declare class NetworkInterface extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html aws_network_interface} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkInterfaceConfig
    */
    constructor(scope: Construct, id: string, config: NetworkInterfaceConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _interfaceType?;
    get interfaceType(): string;
    set interfaceType(value: string);
    resetInterfaceType(): void;
    get interfaceTypeInput(): string;
    private _ipv4PrefixCount?;
    get ipv4PrefixCount(): number;
    set ipv4PrefixCount(value: number);
    resetIpv4PrefixCount(): void;
    get ipv4PrefixCountInput(): number;
    private _ipv4Prefixes?;
    get ipv4Prefixes(): string[];
    set ipv4Prefixes(value: string[]);
    resetIpv4Prefixes(): void;
    get ipv4PrefixesInput(): string[];
    private _ipv6AddressCount?;
    get ipv6AddressCount(): number;
    set ipv6AddressCount(value: number);
    resetIpv6AddressCount(): void;
    get ipv6AddressCountInput(): number;
    private _ipv6Addresses?;
    get ipv6Addresses(): string[];
    set ipv6Addresses(value: string[]);
    resetIpv6Addresses(): void;
    get ipv6AddressesInput(): string[];
    private _ipv6PrefixCount?;
    get ipv6PrefixCount(): number;
    set ipv6PrefixCount(value: number);
    resetIpv6PrefixCount(): void;
    get ipv6PrefixCountInput(): number;
    private _ipv6Prefixes?;
    get ipv6Prefixes(): string[];
    set ipv6Prefixes(value: string[]);
    resetIpv6Prefixes(): void;
    get ipv6PrefixesInput(): string[];
    get macAddress(): string;
    get outpostArn(): string;
    get ownerId(): string;
    get privateDnsName(): string;
    private _privateIp?;
    get privateIp(): string;
    set privateIp(value: string);
    resetPrivateIp(): void;
    get privateIpInput(): string;
    private _privateIps?;
    get privateIps(): string[];
    set privateIps(value: string[]);
    resetPrivateIps(): void;
    get privateIpsInput(): string[];
    private _privateIpsCount?;
    get privateIpsCount(): number;
    set privateIpsCount(value: number);
    resetPrivateIpsCount(): void;
    get privateIpsCountInput(): number;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[];
    private _sourceDestCheck?;
    get sourceDestCheck(): boolean | cdktf.IResolvable;
    set sourceDestCheck(value: boolean | cdktf.IResolvable);
    resetSourceDestCheck(): void;
    get sourceDestCheckInput(): boolean | cdktf.IResolvable;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    get subnetIdInput(): string;
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
    private _attachment?;
    get attachment(): NetworkInterfaceAttachment[];
    set attachment(value: NetworkInterfaceAttachment[]);
    resetAttachment(): void;
    get attachmentInput(): NetworkInterfaceAttachment[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=network-interface.d.ts.map