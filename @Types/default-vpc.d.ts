import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface DefaultVpcConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html#enable_classiclink DefaultVpc#enable_classiclink}
    */
    readonly enableClassiclink?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html#enable_classiclink_dns_support DefaultVpc#enable_classiclink_dns_support}
    */
    readonly enableClassiclinkDnsSupport?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html#enable_dns_hostnames DefaultVpc#enable_dns_hostnames}
    */
    readonly enableDnsHostnames?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html#enable_dns_support DefaultVpc#enable_dns_support}
    */
    readonly enableDnsSupport?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html#ipv4_ipam_pool_id DefaultVpc#ipv4_ipam_pool_id}
    */
    readonly ipv4IpamPoolId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html#ipv4_netmask_length DefaultVpc#ipv4_netmask_length}
    */
    readonly ipv4NetmaskLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html#ipv6_cidr_block DefaultVpc#ipv6_cidr_block}
    */
    readonly ipv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html#ipv6_ipam_pool_id DefaultVpc#ipv6_ipam_pool_id}
    */
    readonly ipv6IpamPoolId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html#ipv6_netmask_length DefaultVpc#ipv6_netmask_length}
    */
    readonly ipv6NetmaskLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html#tags DefaultVpc#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html#tags_all DefaultVpc#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html aws_default_vpc}
*/
export declare class DefaultVpc extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html aws_default_vpc} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DefaultVpcConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DefaultVpcConfig);
    get arn(): string;
    get assignGeneratedIpv6CidrBlock(): any;
    get cidrBlock(): string;
    get defaultNetworkAclId(): string;
    get defaultRouteTableId(): string;
    get defaultSecurityGroupId(): string;
    get dhcpOptionsId(): string;
    private _enableClassiclink?;
    get enableClassiclink(): boolean | cdktf.IResolvable;
    set enableClassiclink(value: boolean | cdktf.IResolvable);
    resetEnableClassiclink(): void;
    get enableClassiclinkInput(): boolean | cdktf.IResolvable;
    private _enableClassiclinkDnsSupport?;
    get enableClassiclinkDnsSupport(): boolean | cdktf.IResolvable;
    set enableClassiclinkDnsSupport(value: boolean | cdktf.IResolvable);
    resetEnableClassiclinkDnsSupport(): void;
    get enableClassiclinkDnsSupportInput(): boolean | cdktf.IResolvable;
    private _enableDnsHostnames?;
    get enableDnsHostnames(): boolean | cdktf.IResolvable;
    set enableDnsHostnames(value: boolean | cdktf.IResolvable);
    resetEnableDnsHostnames(): void;
    get enableDnsHostnamesInput(): boolean | cdktf.IResolvable;
    private _enableDnsSupport?;
    get enableDnsSupport(): boolean | cdktf.IResolvable;
    set enableDnsSupport(value: boolean | cdktf.IResolvable);
    resetEnableDnsSupport(): void;
    get enableDnsSupportInput(): boolean | cdktf.IResolvable;
    get id(): string;
    get instanceTenancy(): string;
    private _ipv4IpamPoolId?;
    get ipv4IpamPoolId(): string;
    set ipv4IpamPoolId(value: string);
    resetIpv4IpamPoolId(): void;
    get ipv4IpamPoolIdInput(): string;
    private _ipv4NetmaskLength?;
    get ipv4NetmaskLength(): number;
    set ipv4NetmaskLength(value: number);
    resetIpv4NetmaskLength(): void;
    get ipv4NetmaskLengthInput(): number;
    get ipv6AssociationId(): string;
    private _ipv6CidrBlock?;
    get ipv6CidrBlock(): string;
    set ipv6CidrBlock(value: string);
    resetIpv6CidrBlock(): void;
    get ipv6CidrBlockInput(): string;
    private _ipv6IpamPoolId?;
    get ipv6IpamPoolId(): string;
    set ipv6IpamPoolId(value: string);
    resetIpv6IpamPoolId(): void;
    get ipv6IpamPoolIdInput(): string;
    private _ipv6NetmaskLength?;
    get ipv6NetmaskLength(): number;
    set ipv6NetmaskLength(value: number);
    resetIpv6NetmaskLength(): void;
    get ipv6NetmaskLengthInput(): number;
    get mainRouteTableId(): string;
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
//# sourceMappingURL=default-vpc.d.ts.map