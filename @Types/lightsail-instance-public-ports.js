// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function lightsailInstancePublicPortsPortInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cidrs: cdktf.listMapper(cdktf.stringToTerraform)(struct.cidrs),
        from_port: cdktf.numberToTerraform(struct.fromPort),
        protocol: cdktf.stringToTerraform(struct.protocol),
        to_port: cdktf.numberToTerraform(struct.toPort),
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports.html aws_lightsail_instance_public_ports}
*/
export class LightsailInstancePublicPorts extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_lightsail_instance_public_ports";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports.html aws_lightsail_instance_public_ports} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LightsailInstancePublicPortsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_lightsail_instance_public_ports',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._instanceName = config.instanceName;
        this._portInfo = config.portInfo;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // instance_name - computed: false, optional: false, required: true
    _instanceName;
    get instanceName() {
        return this.getStringAttribute('instance_name');
    }
    set instanceName(value) {
        this._instanceName = value;
    }
    // Temporarily expose input value. Use with caution.
    get instanceNameInput() {
        return this._instanceName;
    }
    // port_info - computed: false, optional: false, required: true
    _portInfo;
    get portInfo() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('port_info');
    }
    set portInfo(value) {
        this._portInfo = value;
    }
    // Temporarily expose input value. Use with caution.
    get portInfoInput() {
        return this._portInfo;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            instance_name: cdktf.stringToTerraform(this._instanceName),
            port_info: cdktf.listMapper(lightsailInstancePublicPortsPortInfoToTerraform)(this._portInfo),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRzYWlsLWluc3RhbmNlLXB1YmxpYy1wb3J0cy5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGlnaHRzYWlsLWluc3RhbmNlLXB1YmxpYy1wb3J0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFvQy9CLE1BQU0sVUFBVSwrQ0FBK0MsQ0FBQyxNQUE2QztJQUMzRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLEtBQUssRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7UUFDL0QsU0FBUyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsUUFBUSxDQUFDO1FBQ3BELFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztRQUNuRCxPQUFPLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7S0FDakQsQ0FBQTtBQUNILENBQUM7QUFHRDs7RUFFRTtBQUNGLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBRXZFLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ2IsTUFBTSxDQUFVLGNBQWMsR0FBVyxxQ0FBcUMsQ0FBQztJQUV0RixjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUEwQztRQUN6RixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLHFDQUFxQztZQUM1RCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNuQyxDQUFDO0lBRUQsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBRWIsdURBQXVEO0lBQ3ZELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxtRUFBbUU7SUFDM0QsYUFBYSxDQUFVO0lBQy9CLElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0QsSUFBVyxZQUFZLENBQUMsS0FBYTtRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBRUQsK0RBQStEO0lBQ3ZELFNBQVMsQ0FBMEM7SUFDM0QsSUFBVyxRQUFRO1FBQ2pCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLENBQVEsQ0FBQztJQUM1RCxDQUFDO0lBQ0QsSUFBVyxRQUFRLENBQUMsS0FBNkM7UUFDL0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLGFBQWEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUMxRCxTQUFTLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDN0YsQ0FBQztJQUNKLENBQUMifQ==