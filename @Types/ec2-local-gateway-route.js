// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route.html aws_ec2_local_gateway_route}
*/
export class Ec2LocalGatewayRoute extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_ec2_local_gateway_route";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route.html aws_ec2_local_gateway_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2LocalGatewayRouteConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_ec2_local_gateway_route',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._destinationCidrBlock = config.destinationCidrBlock;
        this._localGatewayRouteTableId = config.localGatewayRouteTableId;
        this._localGatewayVirtualInterfaceGroupId = config.localGatewayVirtualInterfaceGroupId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // destination_cidr_block - computed: false, optional: false, required: true
    _destinationCidrBlock;
    get destinationCidrBlock() {
        return this.getStringAttribute('destination_cidr_block');
    }
    set destinationCidrBlock(value) {
        this._destinationCidrBlock = value;
    }
    // Temporarily expose input value. Use with caution.
    get destinationCidrBlockInput() {
        return this._destinationCidrBlock;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // local_gateway_route_table_id - computed: false, optional: false, required: true
    _localGatewayRouteTableId;
    get localGatewayRouteTableId() {
        return this.getStringAttribute('local_gateway_route_table_id');
    }
    set localGatewayRouteTableId(value) {
        this._localGatewayRouteTableId = value;
    }
    // Temporarily expose input value. Use with caution.
    get localGatewayRouteTableIdInput() {
        return this._localGatewayRouteTableId;
    }
    // local_gateway_virtual_interface_group_id - computed: false, optional: false, required: true
    _localGatewayVirtualInterfaceGroupId;
    get localGatewayVirtualInterfaceGroupId() {
        return this.getStringAttribute('local_gateway_virtual_interface_group_id');
    }
    set localGatewayVirtualInterfaceGroupId(value) {
        this._localGatewayVirtualInterfaceGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    get localGatewayVirtualInterfaceGroupIdInput() {
        return this._localGatewayVirtualInterfaceGroupId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            destination_cidr_block: cdktf.stringToTerraform(this._destinationCidrBlock),
            local_gateway_route_table_id: cdktf.stringToTerraform(this._localGatewayRouteTableId),
            local_gateway_virtual_interface_group_id: cdktf.stringToTerraform(this._localGatewayVirtualInterfaceGroupId),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWMyLWxvY2FsLWdhdGV3YXktcm91dGUuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImVjMi1sb2NhbC1nYXRld2F5LXJvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQW9CL0I7O0VBRUU7QUFDRixNQUFNLE9BQU8sb0JBQXFCLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQUUvRCxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNiLE1BQU0sQ0FBVSxjQUFjLEdBQVcsNkJBQTZCLENBQUM7SUFFOUUsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBa0M7UUFDakYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSw2QkFBNkI7WUFDcEQsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxxQkFBcUIsR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUM7UUFDekQsSUFBSSxDQUFDLHlCQUF5QixHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQztRQUNqRSxJQUFJLENBQUMsb0NBQW9DLEdBQUcsTUFBTSxDQUFDLG1DQUFtQyxDQUFDO0lBQ3pGLENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYiw0RUFBNEU7SUFDcEUscUJBQXFCLENBQVU7SUFDdkMsSUFBVyxvQkFBb0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBQ0QsSUFBVyxvQkFBb0IsQ0FBQyxLQUFhO1FBQzNDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLHlCQUF5QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUNwQyxDQUFDO0lBRUQsdURBQXVEO0lBQ3ZELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxrRkFBa0Y7SUFDMUUseUJBQXlCLENBQVU7SUFDM0MsSUFBVyx3QkFBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ0QsSUFBVyx3QkFBd0IsQ0FBQyxLQUFhO1FBQy9DLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQUM7SUFDekMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLDZCQUE2QjtRQUN0QyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztJQUN4QyxDQUFDO0lBRUQsOEZBQThGO0lBQ3RGLG9DQUFvQyxDQUFVO0lBQ3RELElBQVcsbUNBQW1DO1FBQzVDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLDBDQUEwQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUNELElBQVcsbUNBQW1DLENBQUMsS0FBYTtRQUMxRCxJQUFJLENBQUMsb0NBQW9DLEdBQUcsS0FBSyxDQUFDO0lBQ3BELENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyx3Q0FBd0M7UUFDakQsT0FBTyxJQUFJLENBQUMsb0NBQW9DLENBQUM7SUFDbkQsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztZQUMzRSw0QkFBNEIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDO1lBQ3JGLHdDQUF3QyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsb0NBQW9DLENBQUM7U0FDN0csQ0FBQztJQUNKLENBQUMifQ==