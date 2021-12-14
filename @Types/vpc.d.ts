import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface VpcConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#assign_generated_ipv6_cidr_block Vpc#assign_generated_ipv6_cidr_block}
    */
    readonly assignGeneratedIpv6CidrBlock?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#cidr_block Vpc#cidr_block}
    */
    readonly cidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#enable_classiclink Vpc#enable_classiclink}
    */
    readonly enableClassiclink?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#enable_classiclink_dns_support Vpc#enable_classiclink_dns_support}
    */
    readonly enableClassiclinkDnsSupport?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#enable_dns_hostnames Vpc#enable_dns_hostnames}
    */
    readonly enableDnsHostnames?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#enable_dns_support Vpc#enable_dns_support}
    */
    readonly enableDnsSupport?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#instance_tenancy Vpc#instance_tenancy}
    */
    readonly instanceTenancy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#ipv4_ipam_pool_id Vpc#ipv4_ipam_pool_id}
    */
    readonly ipv4IpamPoolId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#ipv4_netmask_length Vpc#ipv4_netmask_length}
    */
    readonly ipv4NetmaskLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#ipv6_cidr_block Vpc#ipv6_cidr_block}
    */
    readonly ipv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#ipv6_ipam_pool_id Vpc#ipv6_ipam_pool_id}
    */
    readonly ipv6IpamPoolId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#ipv6_netmask_length Vpc#ipv6_netmask_length}
    */
    readonly ipv6NetmaskLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#tags Vpc#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#tags_all Vpc#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc.html aws_vpc}
*/
export declare class Vpc extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc.html aws_vpc} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcConfig = {}
    */
    constructor(scope: Construct, id: string, config?: VpcConfig);
    get arn(): string;
    private _assignGeneratedIpv6CidrBlock?;
    get assignGeneratedIpv6CidrBlock(): boolean | cdktf.IResolvable;
    set assignGeneratedIpv6CidrBlock(value: boolean | cdktf.IResolvable);
    resetAssignGeneratedIpv6CidrBlock(): void;
    get assignGeneratedIpv6CidrBlockInput(): boolean | cdktf.IResolvable;
    private _cidrBlock?;
    get cidrBlock(): string;
    set cidrBlock(value: string);
    resetCidrBlock(): void;
    get cidrBlockInput(): string;
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
    private _instanceTenancy?;
    get instanceTenancy(): string;
    set instanceTenancy(value: string);
    resetInstanceTenancy(): void;
    get instanceTenancyInput(): string;
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
//# sourceMappingURL=vpc.d.ts.map