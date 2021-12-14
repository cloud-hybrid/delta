import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Direct Connect
*/
export interface DxHostedPrivateVirtualInterfaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html#address_family DxHostedPrivateVirtualInterface#address_family}
    */
    readonly addressFamily: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html#amazon_address DxHostedPrivateVirtualInterface#amazon_address}
    */
    readonly amazonAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html#bgp_asn DxHostedPrivateVirtualInterface#bgp_asn}
    */
    readonly bgpAsn: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html#bgp_auth_key DxHostedPrivateVirtualInterface#bgp_auth_key}
    */
    readonly bgpAuthKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html#connection_id DxHostedPrivateVirtualInterface#connection_id}
    */
    readonly connectionId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html#customer_address DxHostedPrivateVirtualInterface#customer_address}
    */
    readonly customerAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html#mtu DxHostedPrivateVirtualInterface#mtu}
    */
    readonly mtu?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html#name DxHostedPrivateVirtualInterface#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html#owner_account_id DxHostedPrivateVirtualInterface#owner_account_id}
    */
    readonly ownerAccountId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html#vlan DxHostedPrivateVirtualInterface#vlan}
    */
    readonly vlan: number;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html#timeouts DxHostedPrivateVirtualInterface#timeouts}
    */
    readonly timeouts?: DxHostedPrivateVirtualInterfaceTimeouts;
}
export interface DxHostedPrivateVirtualInterfaceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html#create DxHostedPrivateVirtualInterface#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html#delete DxHostedPrivateVirtualInterface#delete}
    */
    readonly delete?: string;
}
export declare function dxHostedPrivateVirtualInterfaceTimeoutsToTerraform(struct?: DxHostedPrivateVirtualInterfaceTimeoutsOutputReference | DxHostedPrivateVirtualInterfaceTimeouts): any;
export declare class DxHostedPrivateVirtualInterfaceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DxHostedPrivateVirtualInterfaceTimeouts | undefined;
    set internalValue(value: DxHostedPrivateVirtualInterfaceTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html aws_dx_hosted_private_virtual_interface}
*/
export declare class DxHostedPrivateVirtualInterface extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html aws_dx_hosted_private_virtual_interface} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxHostedPrivateVirtualInterfaceConfig
    */
    constructor(scope: Construct, id: string, config: DxHostedPrivateVirtualInterfaceConfig);
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
    private _ownerAccountId?;
    get ownerAccountId(): string;
    set ownerAccountId(value: string);
    get ownerAccountIdInput(): string;
    private _vlan?;
    get vlan(): number;
    set vlan(value: number);
    get vlanInput(): number;
    private _timeouts;
    get timeouts(): DxHostedPrivateVirtualInterfaceTimeoutsOutputReference;
    putTimeouts(value: DxHostedPrivateVirtualInterfaceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): DxHostedPrivateVirtualInterfaceTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=dx-hosted-private-virtual-interface.d.ts.map