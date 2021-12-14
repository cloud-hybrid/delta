// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/route.html aws_route}
*/
export class DataAwsRoute extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_route";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route.html aws_route} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRouteConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_route',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._carrierGatewayId = config.carrierGatewayId;
        this._destinationCidrBlock = config.destinationCidrBlock;
        this._destinationIpv6CidrBlock = config.destinationIpv6CidrBlock;
        this._destinationPrefixListId = config.destinationPrefixListId;
        this._egressOnlyGatewayId = config.egressOnlyGatewayId;
        this._gatewayId = config.gatewayId;
        this._instanceId = config.instanceId;
        this._localGatewayId = config.localGatewayId;
        this._natGatewayId = config.natGatewayId;
        this._networkInterfaceId = config.networkInterfaceId;
        this._routeTableId = config.routeTableId;
        this._transitGatewayId = config.transitGatewayId;
        this._vpcPeeringConnectionId = config.vpcPeeringConnectionId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // carrier_gateway_id - computed: true, optional: true, required: false
    _carrierGatewayId;
    get carrierGatewayId() {
        return this.getStringAttribute('carrier_gateway_id');
    }
    set carrierGatewayId(value) {
        this._carrierGatewayId = value;
    }
    resetCarrierGatewayId() {
        this._carrierGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get carrierGatewayIdInput() {
        return this._carrierGatewayId;
    }
    // destination_cidr_block - computed: true, optional: true, required: false
    _destinationCidrBlock;
    get destinationCidrBlock() {
        return this.getStringAttribute('destination_cidr_block');
    }
    set destinationCidrBlock(value) {
        this._destinationCidrBlock = value;
    }
    resetDestinationCidrBlock() {
        this._destinationCidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get destinationCidrBlockInput() {
        return this._destinationCidrBlock;
    }
    // destination_ipv6_cidr_block - computed: true, optional: true, required: false
    _destinationIpv6CidrBlock;
    get destinationIpv6CidrBlock() {
        return this.getStringAttribute('destination_ipv6_cidr_block');
    }
    set destinationIpv6CidrBlock(value) {
        this._destinationIpv6CidrBlock = value;
    }
    resetDestinationIpv6CidrBlock() {
        this._destinationIpv6CidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get destinationIpv6CidrBlockInput() {
        return this._destinationIpv6CidrBlock;
    }
    // destination_prefix_list_id - computed: true, optional: true, required: false
    _destinationPrefixListId;
    get destinationPrefixListId() {
        return this.getStringAttribute('destination_prefix_list_id');
    }
    set destinationPrefixListId(value) {
        this._destinationPrefixListId = value;
    }
    resetDestinationPrefixListId() {
        this._destinationPrefixListId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get destinationPrefixListIdInput() {
        return this._destinationPrefixListId;
    }
    // egress_only_gateway_id - computed: true, optional: true, required: false
    _egressOnlyGatewayId;
    get egressOnlyGatewayId() {
        return this.getStringAttribute('egress_only_gateway_id');
    }
    set egressOnlyGatewayId(value) {
        this._egressOnlyGatewayId = value;
    }
    resetEgressOnlyGatewayId() {
        this._egressOnlyGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get egressOnlyGatewayIdInput() {
        return this._egressOnlyGatewayId;
    }
    // gateway_id - computed: true, optional: true, required: false
    _gatewayId;
    get gatewayId() {
        return this.getStringAttribute('gateway_id');
    }
    set gatewayId(value) {
        this._gatewayId = value;
    }
    resetGatewayId() {
        this._gatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get gatewayIdInput() {
        return this._gatewayId;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // instance_id - computed: true, optional: true, required: false
    _instanceId;
    get instanceId() {
        return this.getStringAttribute('instance_id');
    }
    set instanceId(value) {
        this._instanceId = value;
    }
    resetInstanceId() {
        this._instanceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceIdInput() {
        return this._instanceId;
    }
    // local_gateway_id - computed: true, optional: true, required: false
    _localGatewayId;
    get localGatewayId() {
        return this.getStringAttribute('local_gateway_id');
    }
    set localGatewayId(value) {
        this._localGatewayId = value;
    }
    resetLocalGatewayId() {
        this._localGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get localGatewayIdInput() {
        return this._localGatewayId;
    }
    // nat_gateway_id - computed: true, optional: true, required: false
    _natGatewayId;
    get natGatewayId() {
        return this.getStringAttribute('nat_gateway_id');
    }
    set natGatewayId(value) {
        this._natGatewayId = value;
    }
    resetNatGatewayId() {
        this._natGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get natGatewayIdInput() {
        return this._natGatewayId;
    }
    // network_interface_id - computed: true, optional: true, required: false
    _networkInterfaceId;
    get networkInterfaceId() {
        return this.getStringAttribute('network_interface_id');
    }
    set networkInterfaceId(value) {
        this._networkInterfaceId = value;
    }
    resetNetworkInterfaceId() {
        this._networkInterfaceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkInterfaceIdInput() {
        return this._networkInterfaceId;
    }
    // route_table_id - computed: false, optional: false, required: true
    _routeTableId;
    get routeTableId() {
        return this.getStringAttribute('route_table_id');
    }
    set routeTableId(value) {
        this._routeTableId = value;
    }
    // Temporarily expose input value. Use with caution.
    get routeTableIdInput() {
        return this._routeTableId;
    }
    // transit_gateway_id - computed: true, optional: true, required: false
    _transitGatewayId;
    get transitGatewayId() {
        return this.getStringAttribute('transit_gateway_id');
    }
    set transitGatewayId(value) {
        this._transitGatewayId = value;
    }
    resetTransitGatewayId() {
        this._transitGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get transitGatewayIdInput() {
        return this._transitGatewayId;
    }
    // vpc_peering_connection_id - computed: true, optional: true, required: false
    _vpcPeeringConnectionId;
    get vpcPeeringConnectionId() {
        return this.getStringAttribute('vpc_peering_connection_id');
    }
    set vpcPeeringConnectionId(value) {
        this._vpcPeeringConnectionId = value;
    }
    resetVpcPeeringConnectionId() {
        this._vpcPeeringConnectionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vpcPeeringConnectionIdInput() {
        return this._vpcPeeringConnectionId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            carrier_gateway_id: cdktf.stringToTerraform(this._carrierGatewayId),
            destination_cidr_block: cdktf.stringToTerraform(this._destinationCidrBlock),
            destination_ipv6_cidr_block: cdktf.stringToTerraform(this._destinationIpv6CidrBlock),
            destination_prefix_list_id: cdktf.stringToTerraform(this._destinationPrefixListId),
            egress_only_gateway_id: cdktf.stringToTerraform(this._egressOnlyGatewayId),
            gateway_id: cdktf.stringToTerraform(this._gatewayId),
            instance_id: cdktf.stringToTerraform(this._instanceId),
            local_gateway_id: cdktf.stringToTerraform(this._localGatewayId),
            nat_gateway_id: cdktf.stringToTerraform(this._natGatewayId),
            network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
            route_table_id: cdktf.stringToTerraform(this._routeTableId),
            transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
            vpc_peering_connection_id: cdktf.stringToTerraform(this._vpcPeeringConnectionId),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3Mtcm91dGUuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImRhdGEtYXdzLXJvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQTREL0I7O0VBRUU7QUFDRixNQUFNLE9BQU8sWUFBYSxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFekQsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDYixNQUFNLENBQVUsY0FBYyxHQUFXLFdBQVcsQ0FBQztJQUU1RCxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUEwQjtRQUN6RSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLFdBQVc7WUFDbEMsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDakQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RCxJQUFJLENBQUMseUJBQXlCLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDO1FBQ2pFLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxNQUFNLENBQUMsdUJBQXVCLENBQUM7UUFDL0QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztRQUN2RCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUM3QyxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDekMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDekMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsTUFBTSxDQUFDLHNCQUFzQixDQUFDO0lBQy9ELENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYix1RUFBdUU7SUFDL0QsaUJBQWlCLENBQVU7SUFDbkMsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsSUFBVyxnQkFBZ0IsQ0FBQyxLQUFhO1FBQ3ZDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUNNLHFCQUFxQjtRQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQztJQUVELDJFQUEyRTtJQUNuRSxxQkFBcUIsQ0FBVTtJQUN2QyxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFDRCxJQUFXLG9CQUFvQixDQUFDLEtBQWE7UUFDM0MsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztJQUNyQyxDQUFDO0lBQ00seUJBQXlCO1FBQzlCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxTQUFTLENBQUM7SUFDekMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLHlCQUF5QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUNwQyxDQUFDO0lBRUQsZ0ZBQWdGO0lBQ3hFLHlCQUF5QixDQUFVO0lBQzNDLElBQVcsd0JBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUNELElBQVcsd0JBQXdCLENBQUMsS0FBYTtRQUMvQyxJQUFJLENBQUMseUJBQXlCLEdBQUcsS0FBSyxDQUFDO0lBQ3pDLENBQUM7SUFDTSw2QkFBNkI7UUFDbEMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLFNBQVMsQ0FBQztJQUM3QyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsNkJBQTZCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDO0lBQ3hDLENBQUM7SUFFRCwrRUFBK0U7SUFDdkUsd0JBQXdCLENBQVU7SUFDMUMsSUFBVyx1QkFBdUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBQ0QsSUFBVyx1QkFBdUIsQ0FBQyxLQUFhO1FBQzlDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxLQUFLLENBQUM7SUFDeEMsQ0FBQztJQUNNLDRCQUE0QjtRQUNqQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsU0FBUyxDQUFDO0lBQzVDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyw0QkFBNEI7UUFDckMsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUM7SUFDdkMsQ0FBQztJQUVELDJFQUEyRTtJQUNuRSxvQkFBb0IsQ0FBVTtJQUN0QyxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFDRCxJQUFXLG1CQUFtQixDQUFDLEtBQWE7UUFDMUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztJQUNwQyxDQUFDO0lBQ00sd0JBQXdCO1FBQzdCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxTQUFTLENBQUM7SUFDeEMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLHdCQUF3QjtRQUNqQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNuQyxDQUFDO0lBRUQsK0RBQStEO0lBQ3ZELFVBQVUsQ0FBVTtJQUM1QixJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELElBQVcsU0FBUyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNNLGNBQWM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFFRCx1REFBdUQ7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELGdFQUFnRTtJQUN4RCxXQUFXLENBQVU7SUFDN0IsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCxJQUFXLFVBQVUsQ0FBQyxLQUFhO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFDTSxlQUFlO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQscUVBQXFFO0lBQzdELGVBQWUsQ0FBVTtJQUNqQyxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0QsSUFBVyxjQUFjLENBQUMsS0FBYTtRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBQ00sbUJBQW1CO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFFRCxtRUFBbUU7SUFDM0QsYUFBYSxDQUFVO0lBQy9CLElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDRCxJQUFXLFlBQVksQ0FBQyxLQUFhO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDTSxpQkFBaUI7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDakMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztJQUVELHlFQUF5RTtJQUNqRSxtQkFBbUIsQ0FBVTtJQUNyQyxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDRCxJQUFXLGtCQUFrQixDQUFDLEtBQWE7UUFDekMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBQ00sdUJBQXVCO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUM7SUFDdkMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLHVCQUF1QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUNsQyxDQUFDO0lBRUQsb0VBQW9FO0lBQzVELGFBQWEsQ0FBVTtJQUMvQixJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0QsSUFBVyxZQUFZLENBQUMsS0FBYTtRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBRUQsdUVBQXVFO0lBQy9ELGlCQUFpQixDQUFVO0lBQ25DLElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNELElBQVcsZ0JBQWdCLENBQUMsS0FBYTtRQUN2QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFDTSxxQkFBcUI7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztJQUNyQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFFRCw4RUFBOEU7SUFDdEUsdUJBQXVCLENBQVU7SUFDekMsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBQ0QsSUFBVyxzQkFBc0IsQ0FBQyxLQUFhO1FBQzdDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUM7SUFDdkMsQ0FBQztJQUNNLDJCQUEyQjtRQUNoQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsU0FBUyxDQUFDO0lBQzNDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVywyQkFBMkI7UUFDcEMsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUM7SUFDdEMsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUNuRSxzQkFBc0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1lBQzNFLDJCQUEyQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUM7WUFDcEYsMEJBQTBCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztZQUNsRixzQkFBc0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1lBQzFFLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNwRCxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDdEQsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDL0QsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQzNELG9CQUFvQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7WUFDdkUsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQzNELGtCQUFrQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDbkUseUJBQXlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztTQUNqRixDQUFDO0lBQ0osQ0FBQyJ9