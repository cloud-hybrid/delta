// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class DataAwsAlbAccessLogs extends cdktf.ComplexComputedList {
    // bucket - computed: true, optional: false, required: false
    get bucket() {
        return this.getStringAttribute('bucket');
    }
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // prefix - computed: true, optional: false, required: false
    get prefix() {
        return this.getStringAttribute('prefix');
    }
}
export class DataAwsAlbSubnetMapping extends cdktf.ComplexComputedList {
    // allocation_id - computed: true, optional: false, required: false
    get allocationId() {
        return this.getStringAttribute('allocation_id');
    }
    // ipv6_address - computed: true, optional: false, required: false
    get ipv6Address() {
        return this.getStringAttribute('ipv6_address');
    }
    // outpost_id - computed: true, optional: false, required: false
    get outpostId() {
        return this.getStringAttribute('outpost_id');
    }
    // private_ipv4_address - computed: true, optional: false, required: false
    get privateIpv4Address() {
        return this.getStringAttribute('private_ipv4_address');
    }
    // subnet_id - computed: true, optional: false, required: false
    get subnetId() {
        return this.getStringAttribute('subnet_id');
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/alb.html aws_alb}
*/
export class DataAwsAlb extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_alb";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/alb.html aws_alb} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAlbConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_alb',
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
        return new DataAwsAlbAccessLogs(this, 'access_logs', index);
    }
    // arn - computed: true, optional: true, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // arn_suffix - computed: true, optional: false, required: false
    get arnSuffix() {
        return this.getStringAttribute('arn_suffix');
    }
    // customer_owned_ipv4_pool - computed: true, optional: false, required: false
    get customerOwnedIpv4Pool() {
        return this.getStringAttribute('customer_owned_ipv4_pool');
    }
    // desync_mitigation_mode - computed: true, optional: false, required: false
    get desyncMitigationMode() {
        return this.getStringAttribute('desync_mitigation_mode');
    }
    // dns_name - computed: true, optional: false, required: false
    get dnsName() {
        return this.getStringAttribute('dns_name');
    }
    // drop_invalid_header_fields - computed: true, optional: false, required: false
    get dropInvalidHeaderFields() {
        return this.getBooleanAttribute('drop_invalid_header_fields');
    }
    // enable_deletion_protection - computed: true, optional: false, required: false
    get enableDeletionProtection() {
        return this.getBooleanAttribute('enable_deletion_protection');
    }
    // enable_http2 - computed: true, optional: false, required: false
    get enableHttp2() {
        return this.getBooleanAttribute('enable_http2');
    }
    // enable_waf_fail_open - computed: true, optional: false, required: false
    get enableWafFailOpen() {
        return this.getBooleanAttribute('enable_waf_fail_open');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // idle_timeout - computed: true, optional: false, required: false
    get idleTimeout() {
        return this.getNumberAttribute('idle_timeout');
    }
    // internal - computed: true, optional: false, required: false
    get internal() {
        return this.getBooleanAttribute('internal');
    }
    // ip_address_type - computed: true, optional: false, required: false
    get ipAddressType() {
        return this.getStringAttribute('ip_address_type');
    }
    // load_balancer_type - computed: true, optional: false, required: false
    get loadBalancerType() {
        return this.getStringAttribute('load_balancer_type');
    }
    // name - computed: true, optional: true, required: false
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
    // security_groups - computed: true, optional: false, required: false
    get securityGroups() {
        return this.getListAttribute('security_groups');
    }
    // subnet_mapping - computed: true, optional: false, required: false
    subnetMapping(index) {
        return new DataAwsAlbSubnetMapping(this, 'subnet_mapping', index);
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
    // vpc_id - computed: true, optional: false, required: false
    get vpcId() {
        return this.getStringAttribute('vpc_id');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtYWxiLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJkYXRhLWF3cy1hbGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBZS9CLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRWpFLDREQUE0RDtJQUM1RCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsNkRBQTZEO0lBQzdELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQVEsQ0FBQztJQUNwRCxDQUFDO0lBRUQsNERBQTREO0lBQzVELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FDRjtBQUNELE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXBFLG1FQUFtRTtJQUNuRSxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELGtFQUFrRTtJQUNsRSxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELGdFQUFnRTtJQUNoRSxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELDBFQUEwRTtJQUMxRSxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCwrREFBK0Q7SUFDL0QsSUFBVyxRQUFRO1FBQ2pCLE9B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