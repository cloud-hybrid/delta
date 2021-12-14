import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface VpnGatewayRoutePropagationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation.html#route_table_id VpnGatewayRoutePropagation#route_table_id}
    */
    readonly routeTableId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation.html#vpn_gateway_id VpnGatewayRoutePropagation#vpn_gateway_id}
    */
    readonly vpnGatewayId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation.html#timeouts VpnGatewayRoutePropagation#timeouts}
    */
    readonly timeouts?: VpnGatewayRoutePropagationTimeouts;
}
export interface VpnGatewayRoutePropagationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation.html#create VpnGatewayRoutePropagation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation.html#delete VpnGatewayRoutePropagation#delete}
    */
    readonly delete?: string;
}
export declare function vpnGatewayRoutePropagationTimeoutsToTerraform(struct?: VpnGatewayRoutePropagationTimeoutsOutputReference | VpnGatewayRoutePropagationTimeouts): any;
export declare class VpnGatewayRoutePropagationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): VpnGatewayRoutePropagationTimeouts | undefined;
    set internalValue(value: VpnGatewayRoutePropagationTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation.html aws_vpn_gateway_route_propagation}
*/
export declare class VpnGatewayRoutePropagation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation.html aws_vpn_gateway_route_propagation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpnGatewayRoutePropagationConfig
    */
    constructor(scope: Construct, id: string, config: VpnGatewayRoutePropagationConfig);
    get id(): string;
    private _routeTableId?;
    get routeTableId(): string;
    set routeTableId(value: string);
    get routeTableIdInput(): string;
    private _vpnGatewayId?;
    get vpnGatewayId(): string;
    set vpnGatewayId(value: string);
    get vpnGatewayIdInput(): string;
    private _timeouts;
    get timeouts(): VpnGatewayRoutePropagationTimeoutsOutputReference;
    putTimeouts(value: VpnGatewayRoutePropagationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): VpnGatewayRoutePropagationTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=vpn-gateway-route-propagation.d.ts.map