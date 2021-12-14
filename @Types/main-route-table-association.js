// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/main_route_table_association.html aws_main_route_table_association}
*/
export class MainRouteTableAssociation extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_main_route_table_association";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/main_route_table_association.html aws_main_route_table_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MainRouteTableAssociationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_main_route_table_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._routeTableId = config.routeTableId;
        this._vpcId = config.vpcId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // original_route_table_id - computed: true, optional: false, required: false
    get originalRouteTableId() {
        return this.getStringAttribute('original_route_table_id');
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
    // vpc_id - computed: false, optional: false, required: true
    _vpcId;
    get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    set vpcId(value) {
        this._vpcId = value;
    }
    // Temporarily expose input value. Use with caution.
    get vpcIdInput() {
        return this._vpcId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            route_table_id: cdktf.stringToTerraform(this._routeTableId),
            vpc_id: cdktf.stringToTerraform(this._vpcId),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1yb3V0ZS10YWJsZS1hc3NvY2lhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibWFpbi1yb3V0ZS10YWJsZS1hc3NvY2lhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFnQi9COztFQUVFO0FBQ0YsTUFBTSxPQUFPLHlCQUEwQixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFFcEUsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDYixNQUFNLENBQVUsY0FBYyxHQUFXLGtDQUFrQyxDQUFDO0lBRW5GLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQXVDO1FBQ3RGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsa0NBQWtDO1lBQ3pELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYix1REFBdUQ7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELDZFQUE2RTtJQUM3RSxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxvRUFBb0U7SUFDNUQsYUFBYSxDQUFVO0lBQy9CLElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDRCxJQUFXLFlBQVksQ0FBQyxLQUFhO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFFRCw0REFBNEQ7SUFDcEQsTUFBTSxDQUFVO0lBQ3hCLElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCxJQUFXLEtBQUssQ0FBQyxLQUFhO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDM0QsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQzdDLENBQUM7SUFDSixDQUFDIn0=