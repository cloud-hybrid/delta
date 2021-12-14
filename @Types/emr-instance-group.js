// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function emrInstanceGroupEbsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        iops: cdktf.numberToTerraform(struct.iops),
        size: cdktf.numberToTerraform(struct.size),
        type: cdktf.stringToTerraform(struct.type),
        volumes_per_instance: cdktf.numberToTerraform(struct.volumesPerInstance),
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html aws_emr_instance_group}
*/
export class EmrInstanceGroup extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_emr_instance_group";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html aws_emr_instance_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmrInstanceGroupConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_emr_instance_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._autoscalingPolicy = config.autoscalingPolicy;
        this._bidPrice = config.bidPrice;
        this._clusterId = config.clusterId;
        this._configurationsJson = config.configurationsJson;
        this._ebsOptimized = config.ebsOptimized;
        this._instanceCount = config.instanceCount;
        this._instanceType = config.instanceType;
        this._name = config.name;
        this._ebsConfig = config.ebsConfig;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // autoscaling_policy - computed: false, optional: true, required: false
    _autoscalingPolicy;
    get autoscalingPolicy() {
        return this.getStringAttribute('autoscaling_policy');
    }
    set autoscalingPolicy(value) {
        this._autoscalingPolicy = value;
    }
    resetAutoscalingPolicy() {
        this._autoscalingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoscalingPolicyInput() {
        return this._autoscalingPolicy;
    }
    // bid_price - computed: false, optional: true, required: false
    _bidPrice;
    get bidPrice() {
        return this.getStringAttribute('bid_price');
    }
    set bidPrice(value) {
        this._bidPrice = value;
    }
    resetBidPrice() {
        this._bidPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bidPriceInput() {
        return this._bidPrice;
    }
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
    // configurations_json - computed: false, optional: true, required: false
    _configurationsJson;
    get configurationsJson() {
        return this.getStringAttribute('configurations_json');
    }
    set configurationsJson(value) {
        this._configurationsJson = value;
    }
    resetConfigurationsJson() {
        this._configurationsJson = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get configurationsJsonInput() {
        return this._configurationsJson;
    }
    // ebs_optimized - computed: false, optional: true, required: false
    _ebsOptimized;
    get ebsOptimized() {
        return this.getBooleanAttribute('ebs_optimized');
    }
    set ebsOptimized(value) {
        this._ebsOptimized = value;
    }
    resetEbsOptimized() {
        this._ebsOptimized = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ebsOptimizedInput() {
        return this._ebsOptimized;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // instance_count - computed: false, optional: true, required: false
    _instanceCount;
    get instanceCount() {
        return this.getNumberAttribute('instance_count');
    }
    set instanceCount(value) {
        this._instanceCount = value;
    }
    resetInstanceCount() {
        this._instanceCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceCountInput() {
        return this._instanceCount;
    }
    // instance_type - computed: false, optional: false, required: true
    _instanceType;
    get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    set instanceType(value) {
        this._instanceType = value;
    }
    // Temporarily expose input value. Use with caution.
    get instanceTypeInput() {
        return this._instanceType;
    }
    // name - computed: false, optional: true, required: false
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // running_instance_count - computed: true, optional: false, required: false
    get runningInstanceCount() {
        return this.getNumberAttribute('running_instance_count');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // ebs_config - computed: false, optional: true, required: false
    _ebsConfig;
    get ebsConfig() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('ebs_config');
    }
    set ebsConfig(value) {
        this._ebsConfig = value;
    }
    resetEbsConfig() {
        this._ebsConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ebsConfigInput() {
        return this._ebsConfig;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            autoscaling_policy: cdktf.stringToTerraform(this._autoscalingPolicy),
            bid_price: cdktf.stringToTerraform(this._bidPrice),
            cluster_id: cdktf.stringToTerraform(this._clusterId),
            configurations_json: cdktf.stringToTerraform(this._configurationsJson),
            ebs_optimized: cdktf.booleanToTerraform(this._ebsOptimized),
            instance_count: cdktf.numberToTerraform(this._instanceCount),
            instance_type: cdktf.stringToTerraform(this._instanceType),
            name: cdktf.stringToTerraform(this._name),
            ebs_config: cdktf.listMapper(emrInstanceGroupEbsConfigToTerraform)(this._ebsConfig),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1yLWluc3RhbmNlLWdyb3VwLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJlbXItaW5zdGFuY2UtZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBZ0UvQixNQUFNLFVBQVUsb0NBQW9DLENBQUMsTUFBa0M7SUFDckYsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztRQUMzQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGtCQUFrQixDQUFDO0tBQzFFLENBQUE7QUFDSCxDQUFDO0FBR0Q7O0VBRUU7QUFDRixNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQUUzRCxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNiLE1BQU0sQ0FBVSxjQUFjLEdBQVcsd0JBQXdCLENBQUM7SUFFekUsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBOEI7UUFDN0UsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixx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