import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface RouteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#carrier_gateway_id Route#carrier_gateway_id}
    */
    readonly carrierGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#destination_cidr_block Route#destination_cidr_block}
    */
    readonly destinationCidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#destination_ipv6_cidr_block Route#destination_ipv6_cidr_block}
    */
    readonly destinationIpv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#destination_prefix_list_id Route#destination_prefix_list_id}
    */
    readonly destinationPrefixListId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#egress_only_gateway_id Route#egress_only_gateway_id}
    */
    readonly egressOnlyGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#gateway_id Route#gateway_id}
    */
    readonly gatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#instance_id Route#instance_id}
    */
    readonly instanceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#local_gateway_id Route#local_gateway_id}
    */
    readonly localGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#nat_gateway_id Route#nat_gateway_id}
    */
    readonly natGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#network_interface_id Route#network_interface_id}
    */
    readonly networkInterfaceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#route_table_id Route#route_table_id}
    */
    readonly routeTableId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#transit_gateway_id Route#transit_gateway_id}
    */
    readonly transitGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#vpc_endpoint_id Route#vpc_endpoint_id}
    */
    readonly vpcEndpointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#vpc_peering_connection_id Route#vpc_peering_connection_id}
    */
    readonly vpcPeeringConnectionId?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#timeouts Route#timeouts}
    */
    readonly timeouts?: RouteTimeouts;
}
export interface RouteTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#create Route#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#delete Route#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#update Route#update}
    */
    readonly update?: string;
}
export declare function routeTimeoutsToTerraform(struct?: RouteTimeoutsOutputReference | RouteTimeouts): any;
export declare class RouteTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): RouteTimeouts | undefined;
    set internalValue(value: RouteTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route.html aws_route}
*/
export declare class Route extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route.html aws_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RouteConfig
    */
    constructor(scope: Construct, id: string, config: RouteConfig);
    private _carrierGatewayId?;
    get carrierGatewayId(): string;
    set carrierGatewayId(value: string);
    resetCarrierGatewayId(): void;
    get carrierGatewayIdInput(): string;
    private _destinationCidrBlock?;
    get destinationCidrBlock(): string;
    set destinationCidrBlock(value: string);
    resetDestinationCidrBlock(): void;
    get destinationCidrBlockInput(): string;
    private _destinationIpv6CidrBlock?;
    get destinationIpv6CidrBlock(): string;
    set destinationIpv6CidrBlock(value: string);
    resetDestinationIpv6CidrBlock(): void;
    get destinationIpv6CidrBlockInput(): string;
    private _destinationPrefixListId?;
    get destinationPrefixListId(): string;
    set destinationPrefixListId(value: string);
    resetDestinationPrefixListId(): void;
    get destinationPrefixListIdInput(): string;
    private _egressOnlyGatewayId?;
    get egressOnlyGatewayId(): string;
    set egressOnlyGatewayId(value: string);
    resetEgressOnlyGatewayId(): void;
    get egressOnlyGatewayIdInput(): string;
    private _gatewayId?;
    get gatewayId(): string;
    set gatewayId(value: string);
    resetGatewayId(): void;
    get gatewayIdInput(): string;
    get id(): string;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    resetInstanceId(): void;
    get instanceIdInput(): string;
    get instanceOwnerId(): string;
    private _localGatewayId?;
    get localGatewayId(): string;
    set localGatewayId(value: string);
    resetLocalGatewayId(): void;
    get localGatewayIdInput(): string;
    private _natGatewayId?;
    get natGatewayId(): string;
    set natGatewayId(value: string);
    resetNatGatewayId(): void;
    get natGatewayIdInput(): string;
    private _networkInterfaceId?;
    get networkInterfaceId(): string;
    set networkInterfaceId(value: string);
    resetNetworkInterfaceId(): void;
    get networkInterfaceIdInput(): string;
    get origin(): string;
    private _routeTableId?;
    get routeTableId(): string;
    set routeTableId(value: string);
    get routeTableIdInput(): string;
    get state(): string;
    private _transitGatewayId?;
    get transitGatewayId(): string;
    set transitGatewayId(value: string);
    resetTransitGatewayId(): void;
    get transitGatewayIdInput(): string;
    private _vpcEndpointId?;
    get vpcEndpointId(): string;
    set vpcEndpointId(value: string);
    resetVpcEndpointId(): void;
    get vpcEndpointIdInput(): string;
    private _vpcPeeringConnectionId?;
    get vpcPeeringConnectionId(): string;
    set vpcPeeringConnectionId(value: string);
    resetVpcPeeringConnectionId(): void;
    get vpcPeeringConnectionIdInput(): string;
    private _timeouts;
    get timeouts(): RouteTimeoutsOutputReference;
    putTimeouts(value: RouteTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): RouteTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=route.d.ts.map