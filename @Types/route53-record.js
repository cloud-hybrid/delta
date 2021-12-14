// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function route53RecordAliasToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        evaluate_target_health: cdktf.booleanToTerraform(struct.evaluateTargetHealth),
        name: cdktf.stringToTerraform(struct.name),
        zone_id: cdktf.stringToTerraform(struct.zoneId),
    };
}
export function route53RecordFailoverRoutingPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function route53RecordGeolocationRoutingPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        continent: cdktf.stringToTerraform(struct.continent),
        country: cdktf.stringToTerraform(struct.country),
        subdivision: cdktf.stringToTerraform(struct.subdivision),
    };
}
export function route53RecordLatencyRoutingPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        region: cdktf.stringToTerraform(struct.region),
    };
}
export function route53RecordWeightedRoutingPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        weight: cdktf.numberToTerraform(struct.weight),
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html aws_route53_record}
*/
export class Route53Record extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_route53_record";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html aws_route53_record} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecordConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_route53_record',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._allowOverwrite = config.allowOverwrite;
        this._healthCheckId = config.healthCheckId;
        this._multivalueAnswerRoutingPolicy = config.multivalueAnswerRoutingPolicy;
        this._name = config.name;
        this._records = config.records;
        this._setIdentifier = config.setIdentifier;
        this._ttl = config.ttl;
        this._type = config.type;
        this._zoneId = config.zoneId;
        this._alias = config.alias;
        this._failoverRoutingPolicy = config.failoverRoutingPolicy;
        this._geolocationRoutingPolicy = config.geolocationRoutingPolicy;
        this._latencyRoutingPolicy = config.latencyRoutingPolicy;
        this._weightedRoutingPolicy = config.weightedRoutingPolicy;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // allow_overwrite - computed: true, optional: true, required: false
    _allowOverwrite;
    get allowOverwrite() {
        return this.getBooleanAttribute('allow_overwrite');
    }
    set allowOverwrite(value) {
        this._allowOverwrite = value;
    }
    resetAllowOverwrite() {
        this._allowOverwrite = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowOverwriteInput() {
        return this._allowOverwrite;
    }
    // fqdn - computed: true, optional: false, required: false
    get fqdn() {
        return this.getStringAttribute('fqdn');
    }
    // health_check_id - computed: false, optional: true, required: false
    _healthCheckId;
    get healthCheckId() {
        return this.getStringAttribute('health_check_id');
    }
    set healthCheckId(value) {
        this._healthCheckId = value;
    }
    resetHealthCheckId() {
        this._healthCheckId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get healthCheckIdInput() {
        return this._healthCheckId;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // multivalue_answer_routing_policy - computed: false, optional: true, required: false
    _multivalueAnswerRoutingPolicy;
    get multivalueAnswerRoutingPolicy() {
        return this.getBooleanAttribute('multivalue_answer_routing_policy');
    }
    set multivalueAnswerRoutingPolicy(value) {
        this._multivalueAnswerRoutingPolicy = value;
    }
    resetMultivalueAnswerRoutingPolicy() {
        this._multivalueAnswerRoutingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get multivalueAnswerRoutingPolicyInput() {
        return this._multivalueAnswerRoutingPolicy;
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // records - computed: false, optional: true, required: false
    _records;
    get records() {
        return this.getListAttribute('records');
    }
    set records(value) {
        this._records = value;
    }
    resetRecords() {
        this._records = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get recordsInput() {
        return this._records;
    }
    // set_identifier - computed: false, optional: true, required: false
    _setIdentifier;
    get setIdentifier() {
        return this.getStringAttribute('set_identifier');
    }
    set setIdentifier(value) {
        this._setIdentifier = value;
    }
    resetSetIdentifier() {
        this._setIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get setIdentifierInput() {
        return this._setIdentifier;
    }
    // ttl - computed: false, optional: true, required: false
    _ttl;
    get ttl() {
        return this.getNumberAttribute('ttl');
    }
    set ttl(value) {
        this._ttl = value;
    }
    resetTtl() {
        this._ttl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ttlInput() {
        return this._ttl;
    }
    // type - computed: false, optional: false, required: true
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // zone_id - computed: false, optional: false, required: true
    _zoneId;
    get zoneId() {
        return this.getStringAttribute('zone_id');
    }
    set zoneId(value) {
        this._zoneId = value;
    }
    // Temporarily expose input value. Use with caution.
    get zoneIdInput() {
        return this._zoneId;
    }
    // alias - computed: false, optional: true, required: false
    _alias;
    get alias() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('alias');
    }
    set alias(value) {
        this._alias = value;
    }
    resetAlias() {
        this._alias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aliasInput() {
        return this._alias;
    }
    // failover_routing_policy - computed: false, optional: true, required: false
    _failoverRoutingPolicy;
    get failoverRoutingPolicy() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('failover_routing_policy');
    }
    set failoverRoutingPolicy(value) {
        this._failoverRoutingPolicy = value;
    }
    resetFailoverRoutingPolicy() {
        this._failoverRoutingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get failoverRoutingPolicyInput() {
        return this._failoverRoutingPolicy;
    }
    // geolocation_routing_policy - computed: false, optional: true, required: false
    _geolocationRoutingPolicy;
    get geolocationRoutingPolicy() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('geolocation_routing_policy');
    }
    set geolocationRoutingPolicy(value) {
        this._geolocationRoutingPolicy = value;
    }
    resetGeolocationRoutingPolicy() {
        this._geolocationRoutingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get geolocationRoutingPolicyInput() {
        return this._geolocationRoutingPolicy;
    }
    // latency_routing_policy - computed: false, optional: true, required: false
    _latencyRoutingPolicy;
    get latencyRoutingPolicy() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('latency_routing_policy');
    }
    set latencyRoutingPolicy(value) {
        this._latencyRoutingPolicy = value;
    }
    resetLatencyRoutingPolicy() {
        this._latencyRoutingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get latencyRoutingPolicyInput() {
        return this._latencyRoutingPolicy;
    }
    // weighted_routing_policy - computed: false, optional: true, required: false
    _weightedRoutingPolicy;
    get weightedRoutingPolicy() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('weighted_routing_policy');
    }
    set weightedRoutingPolicy(value) {
        this._weightedRoutingPolicy = value;
    }
    resetWeightedRoutingPolicy() {
        this._weightedRoutingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get weightedRoutingPolicyInput() {
        return this._weightedRoutingPolicy;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            allow_overwrite: cdktf.booleanToTerraform(this._allowOverwrite),
            health_check_id: cdktf.stringToTerraform(this._healthCheckId),
            multivalue_answer_routing_policy: cdktf.booleanToTerraform(this._multivalueAnswerRoutingPolicy),
            name: cdktf.stringToTerraform(this._name),
            records: cdktf.listMapper(cdktf.stringToTerraform)(this._records),
            set_identifier: cdktf.stringToTerraform(this._setIdentifier),
            ttl: cdktf.numberToTerraform(this._ttl),
            type: cdktf.stringToTerraform(this._type),
            zone_id: cdktf.stringToTerraform(this._zoneId),
            alias: cdktf.listMapper(route53RecordAliasToTerraform)(this._alias),
            failover_routing_policy: cdktf.listMapper(route53RecordFailoverRoutingPolicyToTerraform)(this._failoverRoutingPolicy),
            geolocation_routing_policy: cdktf.listMapper(route53RecordGeolocationRoutingPolicyToTerraform)(this._geolocationRoutingPolicy),
            latency_routing_policy: cdktf.listMapper(route53RecordLatencyRoutingPolicyToTerraform)(this._latencyRoutingPolicy),
            weighted_routing_policy: cdktf.listMapper(route53RecordWeightedRoutingPolicyToTerraform)(this._weightedRoutingPolicy),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGU1My1yZWNvcmQuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInJvdXRlNTMtcmVjb3JkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQXdGL0IsTUFBTSxVQUFVLDZCQUE2QixDQUFDLE1BQTJCO0lBQ3ZFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxvQkFBb0IsQ0FBQztRQUM5RSxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsT0FBTyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO0tBQ2pELENBQUE7QUFDSCxDQUFDO0FBU0QsTUFBTSxVQUFVLDZDQUE2QyxDQUFDLE1BQTJDO0lBQ3ZHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO0tBQzVDLENBQUE7QUFDSCxDQUFDO0FBaUJELE1BQU0sVUFBVSxnREFBZ0QsQ0FBQyxN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