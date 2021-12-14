import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface SubnetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#assign_ipv6_address_on_creation Subnet#assign_ipv6_address_on_creation}
    */
    readonly assignIpv6AddressOnCreation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#availability_zone Subnet#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#availability_zone_id Subnet#availability_zone_id}
    */
    readonly availabilityZoneId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#cidr_block Subnet#cidr_block}
    */
    readonly cidrBlock: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#customer_owned_ipv4_pool Subnet#customer_owned_ipv4_pool}
    */
    readonly customerOwnedIpv4Pool?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#ipv6_cidr_block Subnet#ipv6_cidr_block}
    */
    readonly ipv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#map_customer_owned_ip_on_launch Subnet#map_customer_owned_ip_on_launch}
    */
    readonly mapCustomerOwnedIpOnLaunch?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#map_public_ip_on_launch Subnet#map_public_ip_on_launch}
    */
    readonly mapPublicIpOnLaunch?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#outpost_arn Subnet#outpost_arn}
    */
    readonly outpostArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#tags Subnet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#tags_all Subnet#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#vpc_id Subnet#vpc_id}
    */
    readonly vpcId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#timeouts Subnet#timeouts}
    */
    readonly timeouts?: SubnetTimeouts;
}
export interface SubnetTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#create Subnet#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#delete Subnet#delete}
    */
    readonly delete?: string;
}
export declare function subnetTimeoutsToTerraform(struct?: SubnetTimeoutsOutputReference | SubnetTimeouts): any;
export declare class SubnetTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SubnetTimeouts | undefined;
    set internalValue(value: SubnetTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/subnet.html aws_subnet}
*/
export declare class Subnet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/subnet.html aws_subnet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SubnetConfig
    */
    constructor(scope: Construct, id: string, config: SubnetConfig);
    get arn(): string;
    private _assignIpv6AddressOnCreation?;
    get assignIpv6AddressOnCreation(): boolean | cdktf.IResolvable;
    set assignIpv6AddressOnCreation(value: boolean | cdktf.IResolvable);
    resetAssignIpv6AddressOnCreation(): void;
    get assignIpv6AddressOnCreationInput(): boolean | cdktf.IResolvable;
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string;
    private _availabilityZoneId?;
    get availabilityZoneId(): string;
    set availabilityZoneId(value: string);
    resetAvailabilityZoneId(): void;
    get availabilityZoneIdInput(): string;
    private _cidrBlock?;
    get cidrBlock(): string;
    set cidrBlock(value: string);
    get cidrBlockInput(): string;
    private _customerOwnedIpv4Pool?;
    get customerOwnedIpv4Pool(): string;
    set customerOwnedIpv4Pool(value: string);
    resetCustomerOwnedIpv4Pool(): void;
    get customerOwnedIpv4PoolInput(): string;
    get id(): string;
    private _ipv6CidrBlock?;
    get ipv6CidrBlock(): string;
    set ipv6CidrBlock(value: string);
    resetIpv6CidrBlock(): void;
    get ipv6CidrBlockInput(): string;
    get ipv6CidrBlockAssociationId(): string;
    private _mapCustomerOwnedIpOnLaunch?;
    get mapCustomerOwnedIpOnLaunch(): boolean | cdktf.IResolvable;
    set mapCustomerOwnedIpOnLaunch(value: boolean | cdktf.IResolvable);
    resetMapCustomerOwnedIpOnLaunch(): void;
    get mapCustomerOwnedIpOnLaunchInput(): boolean | cdktf.IResolvable;
    private _mapPublicIpOnLaunch?;
    get mapPublicIpOnLaunch(): boolean | cdktf.IResolvable;
    set mapPublicIpOnLaunch(value: boolean | cdktf.IResolvable);
    resetMapPublicIpOnLaunch(): void;
    get mapPublicIpOnLaunchInput(): boolean | cdktf.IResolvable;
    private _outpostArn?;
    get outpostArn(): string;
    set outpostArn(value: string);
    resetOutpostArn(): void;
    get outpostArnInput(): string;
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
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    private _timeouts;
    get timeouts(): SubnetTimeoutsOutputReference;
    putTimeouts(value: SubnetTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): SubnetTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=subnet.d.ts.map