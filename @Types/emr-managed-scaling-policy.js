// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function emrManagedScalingPolicyComputeLimitsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        maximum_capacity_units: cdktf.numberToTerraform(struct.maximumCapacityUnits),
        maximum_core_capacity_units: cdktf.numberToTerraform(struct.maximumCoreCapacityUnits),
        maximum_ondemand_capacity_units: cdktf.numberToTerraform(struct.maximumOndemandCapacityUnits),
        minimum_capacity_units: cdktf.numberToTerraform(struct.minimumCapacityUnits),
        unit_type: cdktf.stringToTerraform(struct.unitType),
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html aws_emr_managed_scaling_policy}
*/
export class EmrManagedScalingPolicy extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_emr_managed_scaling_policy";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html aws_emr_managed_scaling_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmrManagedScalingPolicyConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_emr_managed_scaling_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._clusterId = config.clusterId;
        this._computeLimits = config.computeLimits;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // cluster_id - computed: false, optional: false, required: true
    _clusterId;
    get clusterId() {
        return this.getStringAttribute('cluster_id');
    }
    set clusterId(value) {
        this._clusterId = value;
    }
    // Temporarily expose input value. Use with caution.
    get clusterIdInput() {
        return this._clusterId;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // compute_limits - computed: false, optional: false, required: true
    _computeLimits;
    get computeLimits() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('compute_limits');
    }
    set computeLimits(value) {
        this._computeLimits = value;
    }
    // Temporarily expose input value. Use with caution.
    get computeLimitsInput() {
        return this._computeLimits;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            cluster_id: cdktf.stringToTerraform(this._clusterId),
            compute_limits: cdktf.listMapper(emrManagedScalingPolicyComputeLimitsToTerraform)(this._computeLimits),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1yLW1hbmFnZWQtc2NhbGluZy1wb2xpY3kuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImVtci1tYW5hZ2VkLXNjYWxpbmctcG9saWN5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQXdDL0IsTUFBTSxVQUFVLCtDQUErQyxDQUFDLE1BQTZDO0lBQzNHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxvQkFBb0IsQ0FBQztRQUM3RSwyQkFBMkIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLHdCQUF3QixDQUFDO1FBQ3RGLCtCQUErQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsNEJBQTRCLENBQUM7UUFDOUYsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxvQkFBb0IsQ0FBQztRQUM3RSxTQUFTLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7S0FDckQsQ0FBQTtBQUNILENBQUM7QUFHRDs7RUFFRTtBQUNGLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBRWxFLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ2IsTUFBTSxDQUFVLGNBQWMsR0FBVyxnQ0FBZ0MsQ0FBQztJQUVqRixjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUFxQztRQUNwRixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLGdDQUFnQztZQUN2RCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUM3QyxDQUFDO0lBRUQsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBRWIsZ0VBQWdFO0lBQ3hELFVBQVUsQ0FBVTtJQUM1QixJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELElBQVcsU0FBUyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFFRCx1REFBdUQ7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELG9FQUFvRTtJQUM1RCxjQUFjLENBQTBDO0lBQ2hFLElBQVcsYUFBYTtRQUN0QixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsZ0JBQWdCLENBQVEsQ0FBQztJQUNqRSxDQUFDO0lBQ0QsSUFBVyxhQUFhLENBQUMsS0FBNkM7UUFDcEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3BELGNBQWMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLCtDQUErQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUN2RyxDQUFDO0lBQ0osQ0FBQyJ9