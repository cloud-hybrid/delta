// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class DataAwsElbAccessLogs extends cdktf.ComplexComputedList {
    // bucket - computed: true, optional: false, required: false
    get bucket() {
        return this.getStringAttribute('bucket');
    }
    // bucket_prefix - computed: true, optional: false, required: false
    get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // interval - computed: true, optional: false, required: false
    get interval() {
        return this.getNumberAttribute('interval');
    }
}
export class DataAwsElbHealthCheck extends cdktf.ComplexComputedList {
    // healthy_threshold - computed: true, optional: false, required: false
    get healthyThreshold() {
        return this.getNumberAttribute('healthy_threshold');
    }
    // interval - computed: true, optional: false, required: false
    get interval() {
        return this.getNumberAttribute('interval');
    }
    // target - computed: true, optional: false, required: false
    get target() {
        return this.getStringAttribute('target');
    }
    // timeout - computed: true, optional: false, required: false
    get timeout() {
        return this.getNumberAttribute('timeout');
    }
    // unhealthy_threshold - computed: true, optional: false, required: false
    get unhealthyThreshold() {
        return this.getNumberAttribute('unhealthy_threshold');
    }
}
export class DataAwsElbListener extends cdktf.ComplexComputedList {
    // instance_port - computed: true, optional: false, required: false
    get instancePort() {
        return this.getNumberAttribute('instance_port');
    }
    // instance_protocol - computed: true, optional: false, required: false
    get instanceProtocol() {
        return this.getStringAttribute('instance_protocol');
    }
    // lb_port - computed: true, optional: false, required: false
    get lbPort() {
        return this.getNumberAttribute('lb_port');
    }
    // lb_protocol - computed: true, optional: false, required: false
    get lbProtocol() {
        return this.getStringAttribute('lb_protocol');
    }
    // ssl_certificate_id - computed: true, optional: false, required: false
    get sslCertificateId() {
        return this.getStringAttribute('ssl_certificate_id');
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/elb.html aws_elb}
*/
export class DataAwsElb extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_elb";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elb.html aws_elb} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElbConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_elb',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._name = config.name;
        this._tags = config.tags;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // access_logs - computed: true, optional: false, required: false
    accessLogs(index) {
        return new DataAwsElbAccessLogs(this, 'access_logs', index);
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // availability_zones - computed: true, optional: false, required: false
    get availabilityZones() {
        return this.getListAttribute('availability_zones');
    }
    // connection_draining - computed: true, optional: false, required: false
    get connectionDraining() {
        return this.getBooleanAttribute('connection_draining');
    }
    // connection_draining_timeout - computed: true, optional: false, required: false
    get connectionDrainingTimeout() {
        return this.getNumberAttribute('connection_draining_timeout');
    }
    // cross_zone_load_balancing - computed: true, optional: false, required: false
    get crossZoneLoadBalancing() {
        return this.getBooleanAttribute('cross_zone_load_balancing');
    }
    // desync_mitigation_mode - computed: true, optional: false, required: false
    get desyncMitigationMode() {
        return this.getStringAttribute('desync_mitigation_mode');
    }
    // dns_name - computed: true, optional: false, required: false
    get dnsName() {
        return this.getStringAttribute('dns_name');
    }
    // health_check - computed: true, optional: false, required: false
    healthCheck(index) {
        return new DataAwsElbHealthCheck(this, 'health_check', index);
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // idle_timeout - computed: true, optional: false, required: false
    get idleTimeout() {
        return this.getNumberAttribute('idle_timeout');
    }
    // instances - computed: true, optional: false, required: false
    get instances() {
        return this.getListAttribute('instances');
    }
    // internal - computed: true, optional: false, required: false
    get internal() {
        return this.getBooleanAttribute('internal');
    }
    // listener - computed: true, optional: false, required: false
    listener(index) {
        return new DataAwsElbListener(this, 'listener', index);
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
    // security_groups - computed: true, optional: false, required: false
    get securityGroups() {
        return this.getListAttribute('security_groups');
    }
    // source_security_group - computed: true, optional: false, required: false
    get sourceSecurityGroup() {
        return this.getStringAttribute('source_security_group');
    }
    // source_security_group_id - computed: true, optional: false, required: false
    get sourceSecurityGroupId() {
        return this.getStringAttribute('source_security_group_id');
    }
    // subnets - computed: true, optional: false, required: false
    get subnets() {
        return this.getListAttribute('subnets');
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
    // zone_id - computed: true, optional: false, required: false
    get zoneId() {
        return this.getStringAttribute('zone_id');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtZWxiLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJkYXRhLWF3cy1lbGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBZS9CLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRWpFLDREQUE0RDtJQUM1RCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsbUVBQW1FO0lBQ25FLElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsNkRBQTZEO0lBQzdELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQVEsQ0FBQztJQUNwRCxDQUFDO0lBRUQsOERBQThEO0lBQzlELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBQ0Y7QUFDRCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVsRSx1RUFBdUU7SUFDdkUsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsOERBQThEO0lBQzlELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsNERBQTREO0lBQzVELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCw2REFBNkQ7SUFDN0QsSUFBVyxPQUFPO1FBQ2hCLE9B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