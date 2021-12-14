import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface DataAwsRouteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route.html#carrier_gateway_id DataAwsRoute#carrier_gateway_id}
    */
    readonly carrierGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route.html#destination_cidr_block DataAwsRoute#destination_cidr_block}
    */
    readonly destinationCidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route.html#destination_ipv6_cidr_block DataAwsRoute#destination_ipv6_cidr_block}
    */
    readonly destinationIpv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route.html#destination_prefix_list_id DataAwsRoute#destination_prefix_list_id}
    */
    readonly destinationPrefixListId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route.html#egress_only_gateway_id DataAwsRoute#egress_only_gateway_id}
    */
    readonly egressOnlyGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route.html#gateway_id DataAwsRoute#gateway_id}
    */
    readonly gatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route.html#instance_id DataAwsRoute#instance_id}
    */
    readonly instanceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route.html#local_gateway_id DataAwsRoute#local_gateway_id}
    */
    readonly localGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route.html#nat_gateway_id DataAwsRoute#nat_gateway_id}
    */
    readonly natGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route.html#network_interface_id DataAwsRoute#network_interface_id}
    */
    readonly networkInterfaceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route.html#route_table_id DataAwsRoute#route_table_id}
    */
    readonly routeTableId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route.html#transit_gateway_id DataAwsRoute#transit_gateway_id}
    */
    readonly transitGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route.html#vpc_peering_connection_id DataAwsRoute#vpc_peering_connection_id}
    */
    readonly vpcPeeringConnectionId?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/route.html aws_route}
*/
export declare class DataAwsRoute extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route.html aws_route} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRouteConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsRouteConfig);
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
    private _routeTableId?;
    get routeTableId(): string;
    set routeTableId(value: string);
    get routeTableIdInput(): string;
    private _transitGatewayId?;
    get transitGatewayId(): string;
    set transitGatewayId(value: string);
    resetTransitGatewayId(): void;
    get transitGatewayIdInput(): string;
    private _vpcPeeringConnectionId?;
    get vpcPeeringConnectionId(): string;
    set vpcPeeringConnectionId(value: string);
    resetVpcPeeringConnectionId(): void;
    get vpcPeeringConnectionIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-route.d.ts.map