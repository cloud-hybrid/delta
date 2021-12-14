import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Direct Connect
*/
export interface DxPrivateVirtualInterfaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#address_family DxPrivateVirtualInterface#address_family}
    */
    readonly addressFamily: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#amazon_address DxPrivateVirtualInterface#amazon_address}
    */
    readonly amazonAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#bgp_asn DxPrivateVirtualInterface#bgp_asn}
    */
    readonly bgpAsn: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#bgp_auth_key DxPrivateVirtualInterface#bgp_auth_key}
    */
    readonly bgpAuthKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#connection_id DxPrivateVirtualInterface#connection_id}
    */
    readonly connectionId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#customer_address DxPrivateVirtualInterface#customer_address}
    */
    readonly customerAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#dx_gateway_id DxPrivateVirtualInterface#dx_gateway_id}
    */
    readonly dxGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#mtu DxPrivateVirtualInterface#mtu}
    */
    readonly mtu?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#name DxPrivateVirtualInterface#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#tags DxPrivateVirtualInterface#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#tags_all DxPrivateVirtualInterface#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#vlan DxPrivateVirtualInterface#vlan}
    */
    readonly vlan: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#vpn_gateway_id DxPrivateVirtualInterface#vpn_gateway_id}
    */
    readonly vpnGatewayId?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#timeouts DxPrivateVirtualInterface#timeouts}
    */
    readonly timeouts?: DxPrivateVirtualInterfaceTimeouts;
}
export interface DxPrivateVirtualInterfaceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#create DxPrivateVirtualInterface#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#delete DxPrivateVirtualInterface#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#update DxPrivateVirtualInterface#update}
    */
    readonly update?: string;
}
export declare function dxPrivateVirtualInterfaceTimeoutsToTerraform(struct?: DxPrivateVirtualInterfaceTimeoutsOutputReference | DxPrivateVirtualInterfaceTimeouts): any;
export declare class DxPrivateVirtualInterfaceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DxPrivateVirtualInterfaceTimeouts | undefined;
    set internalValue(value: DxPrivateVirtualInterfaceTimeouts | undefined);
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
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html aws_dx_private_virtual_interface}
*/
export declare class DxPrivateVirtualInterface extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html aws_dx_private_virtual_interface} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxPrivateVirtualInterfaceConfig
    */
    constructor(scope: Construct, id: string, config: DxPrivateVirtualInterfaceConfig);
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
    private _dxGatewayId?;
    get dxGatewayId(): string;
    set dxGatewayId(value: string);
    resetDxGatewayId(): void;
    get dxGatewayIdInput(): string;
    get id(): string;
    get jumboFrameCapable(): any;
    private _mtu?;
    get mtu(): number;
    set mtu(value: number);
    resetMtu(): void;
    get mtuInput(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
    private _vpnGatewayId?;
    get vpnGatewayId(): string;
    set vpnGatewayId(value: string);
    resetVpnGatewayId(): void;
    get vpnGatewayIdInput(): string;
    private _timeouts;
    get timeouts(): DxPrivateVirtualInterfaceTimeoutsOutputReference;
    putTimeouts(value: DxPrivateVirtualInterfaceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): DxPrivateVirtualInterfaceTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=dx-private-virtual-interface.d.ts.map