// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class DataAwsVpcEndpointDnsEntry extends cdktf.ComplexComputedList {
    // dns_name - computed: true, optional: false, required: false
    get dnsName() {
        return this.getStringAttribute('dns_name');
    }
    // hosted_zone_id - computed: true, optional: false, required: false
    get hostedZoneId() {
        return this.getStringAttribute('hosted_zone_id');
    }
}
export function dataAwsVpcEndpointFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values),
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html aws_vpc_endpoint}
*/
export class DataAwsVpcEndpoint extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_vpc_endpoint";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html aws_vpc_endpoint} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcEndpointConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_vpc_endpoint',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._serviceName = config.serviceName;
        this._state = config.state;
        this._tags = config.tags;
        this._vpcId = config.vpcId;
        this._filter = config.filter;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // cidr_blocks - computed: true, optional: false, required: false
    get cidrBlocks() {
        return this.getListAttribute('cidr_blocks');
    }
    // dns_entry - computed: true, optional: false, required: false
    dnsEntry(index) {
        return new DataAwsVpcEndpointDnsEntry(this, 'dns_entry', index);
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // network_interface_ids - computed: true, optional: false, required: false
    get networkInterfaceIds() {
        return this.getListAttribute('network_interface_ids');
    }
    // owner_id - computed: true, optional: false, required: false
    get ownerId() {
        return this.getStringAttribute('owner_id');
    }
    // policy - computed: true, optional: false, required: false
    get policy() {
        return this.getStringAttribute('policy');
    }
    // prefix_list_id - computed: true, optional: false, required: false
    get prefixListId() {
        return this.getStringAttribute('prefix_list_id');
    }
    // private_dns_enabled - computed: true, optional: false, required: false
    get privateDnsEnabled() {
        return this.getBooleanAttribute('private_dns_enabled');
    }
    // requester_managed - computed: true, optional: false, required: false
    get requesterManaged() {
        return this.getBooleanAttribute('requester_managed');
    }
    // route_table_ids - computed: true, optional: false, required: false
    get routeTableIds() {
        return this.getListAttribute('route_table_ids');
    }
    // security_group_ids - computed: true, optional: false, required: false
    get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    // service_name - computed: true, optional: true, required: false
    _serviceName;
    get serviceName() {
        return this.getStringAttribute('service_name');
    }
    set serviceName(value) {
        this._serviceName = value;
    }
    resetServiceName() {
        this._serviceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serviceNameInput() {
        return this._serviceName;
    }
    // state - computed: true, optional: true, required: false
    _state;
    get state() {
        return this.getStringAttribute('state');
    }
    set state(value) {
        this._state = value;
    }
    resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stateInput() {
        return this._state;
    }
    // subnet_ids - computed: true, optional: false, required: false
    get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    // tags - computed: true, optional: true, required: false
    _tags;
    get tags() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags');
    }
    set tags(value) {
        this._tags = value;
    }
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsInput() {
        return this._tags;
    }
    // vpc_endpoint_type - computed: true, optional: false, required: false
    get vpcEndpointType() {
        return this.getStringAttribute('vpc_endpoint_type');
    }
    // vpc_id - computed: true, optional: true, required: false
    _vpcId;
    get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    set vpcId(value) {
        this._vpcId = value;
    }
    resetVpcId() {
        this._vpcId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vpcIdInput() {
        return this._vpcId;
    }
    // filter - computed: false, optional: true, required: false
    _filter;
    get filter() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('filter');
    }
    set filter(value) {
        this._filter = value;
    }
    resetFilter() {
        this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get filterInput() {
        return this._filter;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            service_name: cdktf.stringToTerraform(this._serviceName),
            state: cdktf.stringToTerraform(this._state),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            vpc_id: cdktf.stringToTerraform(this._vpcId),
            filter: cdktf.listMapper(dataAwsVpcEndpointFilterToTerraform)(this._filter),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtdnBjLWVuZHBvaW50LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJkYXRhLWF3cy12cGMtZW5kcG9pbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBNkIvQixNQUFNLE9BQU8sMEJBQTJCLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUV2RSw4REFBOEQ7SUFDOUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxvRUFBb0U7SUFDcEUsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUNGO0FBWUQsTUFBTSxVQUFVLG1DQUFtQyxDQUFDLE1BQWlDO0lBQ25GLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLE1BQU0sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7S0FDbEUsQ0FBQTtBQUNILENBQUM7QUFHRDs7RUFFRTtBQUNGLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRS9ELG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ2IsTUFBTSxDQUFVLGNBQWMsR0FBVyxr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