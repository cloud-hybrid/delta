import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface DefaultSubnetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html#availability_zone DefaultSubnet#availability_zone}
    */
    readonly availabilityZone: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html#customer_owned_ipv4_pool DefaultSubnet#customer_owned_ipv4_pool}
    */
    readonly customerOwnedIpv4Pool?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html#map_customer_owned_ip_on_launch DefaultSubnet#map_customer_owned_ip_on_launch}
    */
    readonly mapCustomerOwnedIpOnLaunch?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html#map_public_ip_on_launch DefaultSubnet#map_public_ip_on_launch}
    */
    readonly mapPublicIpOnLaunch?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html#outpost_arn DefaultSubnet#outpost_arn}
    */
    readonly outpostArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html#tags DefaultSubnet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html#tags_all DefaultSubnet#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html#timeouts DefaultSubnet#timeouts}
    */
    readonly timeouts?: DefaultSubnetTimeouts;
}
export interface DefaultSubnetTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html#create DefaultSubnet#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html#delete DefaultSubnet#delete}
    */
    readonly delete?: string;
}
export declare function defaultSubnetTimeoutsToTerraform(struct?: DefaultSubnetTimeoutsOutputReference | DefaultSubnetTimeouts): any;
export declare class DefaultSubnetTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DefaultSubnetTimeouts | undefined;
    set internalValue(value: DefaultSubnetTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html aws_default_subnet}
*/
export declare class DefaultSubnet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html aws_default_subnet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DefaultSubnetConfig
    */
    constructor(scope: Construct, id: string, config: DefaultSubnetConfig);
    get arn(): string;
    get assignIpv6AddressOnCreation(): any;
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    get availabilityZoneInput(): string;
    get availabilityZoneId(): string;
    get cidrBlock(): string;
    private _customerOwnedIpv4Pool?;
    get customerOwnedIpv4Pool(): string;
    set customerOwnedIpv4Pool(value: string);
    resetCustomerOwnedIpv4Pool(): void;
    get customerOwnedIpv4PoolInput(): string;
    get id(): string;
    get ipv6CidrBlock(): string;
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
    get vpcId(): string;
    private _timeouts;
    get timeouts(): DefaultSubnetTimeoutsOutputReference;
    putTimeouts(value: DefaultSubnetTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): DefaultSubnetTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=default-subnet.d.ts.map