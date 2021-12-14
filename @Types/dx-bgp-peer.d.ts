import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Direct Connect
*/
export interface DxBgpPeerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html#address_family DxBgpPeer#address_family}
    */
    readonly addressFamily: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html#amazon_address DxBgpPeer#amazon_address}
    */
    readonly amazonAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html#bgp_asn DxBgpPeer#bgp_asn}
    */
    readonly bgpAsn: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html#bgp_auth_key DxBgpPeer#bgp_auth_key}
    */
    readonly bgpAuthKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html#customer_address DxBgpPeer#customer_address}
    */
    readonly customerAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html#virtual_interface_id DxBgpPeer#virtual_interface_id}
    */
    readonly virtualInterfaceId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html#timeouts DxBgpPeer#timeouts}
    */
    readonly timeouts?: DxBgpPeerTimeouts;
}
export interface DxBgpPeerTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html#create DxBgpPeer#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html#delete DxBgpPeer#delete}
    */
    readonly delete?: string;
}
export declare function dxBgpPeerTimeoutsToTerraform(struct?: DxBgpPeerTimeoutsOutputReference | DxBgpPeerTimeouts): any;
export declare class DxBgpPeerTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DxBgpPeerTimeouts | undefined;
    set internalValue(value: DxBgpPeerTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html aws_dx_bgp_peer}
*/
export declare class DxBgpPeer extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html aws_dx_bgp_peer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxBgpPeerConfig
    */
    constructor(scope: Construct, id: string, config: DxBgpPeerConfig);
    private _addressFamily?;
    get addressFamily(): string;
    set addressFamily(value: string);
    get addressFamilyInput(): string;
    private _amazonAddress?;
    get amazonAddress(): string;
    set amazonAddress(value: string);
    resetAmazonAddress(): void;
    get amazonAddressInput(): string;
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
    get bgpPeerId(): string;
    get bgpStatus(): string;
    private _customerAddress?;
    get customerAddress(): string;
    set customerAddress(value: string);
    resetCustomerAddress(): void;
    get customerAddressInput(): string;
    get id(): string;
    private _virtualInterfaceId?;
    get virtualInterfaceId(): string;
    set virtualInterfaceId(value: string);
    get virtualInterfaceIdInput(): string;
    private _timeouts;
    get timeouts(): DxBgpPeerTimeoutsOutputReference;
    putTimeouts(value: DxBgpPeerTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): DxBgpPeerTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=dx-bgp-peer.d.ts.map