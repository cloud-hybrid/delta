import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Direct Connect
*/
export interface DxPublicVirtualInterfaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#address_family DxPublicVirtualInterface#address_family}
    */
    readonly addressFamily: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#amazon_address DxPublicVirtualInterface#amazon_address}
    */
    readonly amazonAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#bgp_asn DxPublicVirtualInterface#bgp_asn}
    */
    readonly bgpAsn: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#bgp_auth_key DxPublicVirtualInterface#bgp_auth_key}
    */
    readonly bgpAuthKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#connection_id DxPublicVirtualInterface#connection_id}
    */
    readonly connectionId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#customer_address DxPublicVirtualInterface#customer_address}
    */
    readonly customerAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#name DxPublicVirtualInterface#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#route_filter_prefixes DxPublicVirtualInterface#route_filter_prefixes}
    */
    readonly routeFilterPrefixes: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#tags DxPublicVirtualInterface#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#tags_all DxPublicVirtualInterface#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#vlan DxPublicVirtualInterface#vlan}
    */
    readonly vlan: number;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#timeouts DxPublicVirtualInterface#timeouts}
    */
    readonly timeouts?: DxPublicVirtualInterfaceTimeouts;
}
export interface DxPublicVirtualInterfaceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#create DxPublicVirtualInterface#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#delete DxPublicVirtualInterface#delete}
    */
    readonly delete?: string;
}
export declare function dxPublicVirtualInterfaceTimeoutsToTerraform(struct?: DxPublicVirtualInterfaceTimeoutsOutputReference | DxPublicVirtualInterfaceTimeouts): any;
export declare class DxPublicVirtualInterfaceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DxPublicVirtualInterfaceTimeouts | undefined;
    set internalValue(value: DxPublicVirtualInterfaceTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html aws_dx_public_virtual_interface}
*/
export declare class DxPublicVirtualInterface extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html aws_dx_public_virtual_interface} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxPublicVirtualInterfaceConfig
    */
    constructor(scope: Construct, id: string, config: DxPublicVirtualInterfaceConfig);
    private _addressFamily?;
    get addressFamily(): string;
    set addressFamily(value: string);
    get addressFamilyInput(): string;
    private _amazonAddress?;
    get amazonAddress(): string;
    set amazonAddress(value: string);
    resetAmazonAddress(): void;
    get amazonAddressInput(): string;
    get amazonSideAsn(): string;
    get arn(): string;
    get awsDevice(): string;
    private _bgpAsn?;
    get bgpAsn(): number;
    set bgpAsn(value: number);
    get bgpAsnInput(): number;
    private _bgpAuthKey?;
    get bgpAuthKey(): string;
    set bgpAuthKey(value: string);
    resetBgpAuthKey(): void;
    get bgpAuthKeyInput(): string;
    private _connectionId?;
    get connectionId(): string;
    set connectionId(value: string);
    get connectionIdInput(): string;
    private _customerAddress?;
    get customerAddress(): string;
    set customerAddress(value: string);
    resetCustomerAddress(): void;
    get customerAddressInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _routeFilterPrefixes?;
    get routeFilterPrefixes(): string[];
    set routeFilterPrefixes(value: string[]);
    get routeFilterPrefixesInput(): string[];
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
    private _vlan?;
    get vlan(): number;
    set vlan(value: number);
    get vlanInput(): number;
    private _timeouts;
    get timeouts(): DxPublicVirtualInterfaceTimeoutsOutputReference;
    putTimeouts(value: DxPublicVirtualInterfaceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): DxPublicVirtualInterfaceTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=dx-public-virtual-interface.d.ts.map