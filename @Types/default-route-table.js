// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function defaultRouteTableRouteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cidr_block: struct.cidrBlock === undefined ? null : cdktf.stringToTerraform(struct.cidrBlock),
        destination_prefix_list_id: struct.destinationPrefixListId === undefined ? null : cdktf.stringToTerraform(struct.destinationPrefixListId),
        egress_only_gateway_id: struct.egressOnlyGatewayId === undefined ? null : cdktf.stringToTerraform(struct.egressOnlyGatewayId),
        gateway_id: struct.gatewayId === undefined ? null : cdktf.stringToTerraform(struct.gatewayId),
        instance_id: struct.instanceId === undefined ? null : cdktf.stringToTerraform(struct.instanceId),
        ipv6_cidr_block: struct.ipv6CidrBlock === undefined ? null : cdktf.stringToTerraform(struct.ipv6CidrBlock),
        nat_gateway_id: struct.natGatewayId === undefined ? null : cdktf.stringToTerraform(struct.natGatewayId),
        network_interface_id: struct.networkInterfaceId === undefined ? null : cdktf.stringToTerraform(struct.networkInterfaceId),
        transit_gateway_id: struct.transitGatewayId === undefined ? null : cdktf.stringToTerraform(struct.transitGatewayId),
        vpc_endpoint_id: struct.vpcEndpointId === undefined ? null : cdktf.stringToTerraform(struct.vpcEndpointId),
        vpc_peering_connection_id: struct.vpcPeeringConnectionId === undefined ? null : cdktf.stringToTerraform(struct.vpcPeeringConnectionId),
    };
}
export function defaultRouteTableTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        update: cdktf.stringToTerraform(struct.update),
    };
}
export class DefaultRouteTableTimeoutsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._create) {
            hasAnyValues = true;
            internalValueResult.create = this._create;
        }
        if (this._update) {
            hasAnyValues = true;
            internalValueResult.update = this._update;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._create = undefined;
            this._update = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._create = value.create;
            this._update = value.update;
        }
    }
    // create - computed: false, optional: true, required: false
    _create;
    get create() {
        return this.getStringAttribute('create');
    }
    set create(value) {
        this._create = value;
    }
    resetCreate() {
        this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get createInput() {
        return this._create;
    }
    // update - computed: false, optional: true, required: false
    _update;
    get update() {
        return this.getStringAttribute('update');
    }
    set update(value) {
        this._update = value;
    }
    resetUpdate() {
        this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get updateInput() {
        return this._update;
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html aws_default_route_table}
*/
export class DefaultRouteTable extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_default_route_table";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html aws_default_route_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DefaultRouteTableConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_default_route_table',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._defaultRouteTableId = config.defaultRouteTableId;
        this._propagatingVgws = config.propagatingVgws;
        this._route = config.route;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._timeouts.internalValue = config.timeouts;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // default_route_table_id - computed: false, optional: false, required: true
    _defaultRouteTableId;
    get defaultRouteTableId() {
        return this.getStringAttribute('default_route_table_id');
    }
    set defaultRouteTableId(value) {
        this._defaultRouteTableId = value;
    }
    // Temporarily expose input value. Use with caution.
    get defaultRouteTableIdInput() {
        return this._defaultRouteTableId;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // owner_id - computed: true, optional: false, required: false
    get ownerId() {
        return this.getStringAttribute('owner_id');
    }
    // propagating_vgws - computed: false, optional: true, required: false
    _propagatingVgws;
    get propagatingVgws() {
        return this.getListAttribute('propagating_vgws');
    }
    set propagatingVgws(value) {
        this._propagatingVgws = value;
    }
    resetPropagatingVgws() {
        this._propagatingVgws = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get propagatingVgwsInput() {
        return this._propagatingVgws;
    }
    // route - computed: true, optional: true, required: false
    _route;
    get route() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('route');
    }
    set route(value) {
        this._route = value;
    }
    resetRoute() {
        this._route = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get routeInput() {
        return this._route;
    }
    // tags - computed: false, optional: true, required: false
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
    // tags_all - computed: true, optional: true, required: false
    _tagsAll;
    get tagsAll() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags_all');
    }
    set tagsAll(value) {
        this._tagsAll = value;
    }
    resetTagsAll() {
        this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsAllInput() {
        return this._tagsAll;
    }
    // vpc_id - computed: true, optional: false, required: false
    get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    // timeouts - computed: false, optional: true, required: false
    _timeouts = new DefaultRouteTableTimeoutsOutputReference(this, "timeouts", true);
    get timeouts() {
        return this._timeouts;
    }
    putTimeouts(value) {
        this._timeouts.internalValue = value;
    }
    resetTimeouts() {
        this._timeouts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutsInput() {
        return this._timeouts.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            default_route_table_id: cdktf.stringToTerraform(this._defaultRouteTableId),
            propagating_vgws: cdktf.listMapper(cdktf.stringToTerraform)(this._propagatingVgws),
            route: cdktf.listMapper(defaultRouteTableRouteToTerraform)(this._route),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            timeouts: defaultRouteTableTimeoutsToTerraform(this._timeouts.internalValue),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1yb3V0ZS10YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsiZGVmYXVsdC1yb3V0ZS10YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFnRi9CLE1BQU0sVUFBVSxpQ0FBaUMsQ0FBQyxNQUErQjtJQUMvRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxNQUFPLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztRQUMvRiwwQkFBMEIsRUFBRSxNQUFPLENBQUMsdUJBQXVCLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsdUJBQXVCLENBQUM7UUFDM0ksc0JBQXNCLEVBQUUsTUFBTyxDQUFDLG1CQUFtQixLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLG1CQUFtQixDQUFDO1FBQy9ILFVBQVUsRUFBRSxNQUFPLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztRQUMvRixXQUFXLEVBQUUsTUFBTyxDQUFDLFVB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