import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Direct Connect
*/
export interface DxHostedPrivateVirtualInterfaceAccepterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter.html#dx_gateway_id DxHostedPrivateVirtualInterfaceAccepter#dx_gateway_id}
    */
    readonly dxGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter.html#tags DxHostedPrivateVirtualInterfaceAccepter#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter.html#tags_all DxHostedPrivateVirtualInterfaceAccepter#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter.html#virtual_interface_id DxHostedPrivateVirtualInterfaceAccepter#virtual_interface_id}
    */
    readonly virtualInterfaceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter.html#vpn_gateway_id DxHostedPrivateVirtualInterfaceAccepter#vpn_gateway_id}
    */
    readonly vpnGatewayId?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter.html#timeouts DxHostedPrivateVirtualInterfaceAccepter#timeouts}
    */
    readonly timeouts?: DxHostedPrivateVirtualInterfaceAccepterTimeouts;
}
export interface DxHostedPrivateVirtualInterfaceAccepterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter.html#create DxHostedPrivateVirtualInterfaceAccepter#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter.html#delete DxHostedPrivateVirtualInterfaceAccepter#delete}
    */
    readonly delete?: string;
}
export declare function dxHostedPrivateVirtualInterfaceAccepterTimeoutsToTerraform(struct?: DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference | DxHostedPrivateVirtualInterfaceAccepterTimeouts): any;
export declare class DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DxHostedPrivateVirtualInterfaceAccepterTimeouts | undefined;
    set internalValue(value: DxHostedPrivateVirtualInterfaceAccepterTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter.html aws_dx_hosted_private_virtual_interface_accepter}
*/
export declare class DxHostedPrivateVirtualInterfaceAccepter extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter.html aws_dx_hosted_private_virtual_interface_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxHostedPrivateVirtualInterfaceAccepterConfig
    */
    constructor(scope: Construct, id: string, config: DxHostedPrivateVirtualInterfaceAccepterConfig);
    get arn(): string;
    private _dxGatewayId?;
    get dxGatewayId(): string;
    set dxGatewayId(value: string);
    resetDxGatewayId(): void;
    get dxGatewayIdInput(): string;
    get id(): string;
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
    private _virtualInterfaceId?;
    get virtualInterfaceId(): string;
    set virtualInterfaceId(value: string);
    get virtualInterfaceIdInput(): string;
    private _vpnGatewayId?;
    get vpnGatewayId(): string;
    set vpnGatewayId(value: string);
    resetVpnGatewayId(): void;
    get vpnGatewayIdInput(): string;
    private _timeouts;
    get timeouts(): DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference;
    putTimeouts(value: DxHostedPrivateVirtualInterfaceAccepterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): DxHostedPrivateVirtualInterfaceAccepterTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=dx-hosted-private-virtual-interface-accepter.d.ts.map