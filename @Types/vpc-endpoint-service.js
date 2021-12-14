// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class VpcEndpointServicePrivateDnsNameConfiguration extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // state - computed: true, optional: false, required: false
    get state() {
        return this.getStringAttribute('state');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html aws_vpc_endpoint_service}
*/
export class VpcEndpointService extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_vpc_endpoint_service";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html aws_vpc_endpoint_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcEndpointServiceConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_vpc_endpoint_service',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._acceptanceRequired = config.acceptanceRequired;
        this._allowedPrincipals = config.allowedPrincipals;
        this._gatewayLoadBalancerArns = config.gatewayLoadBalancerArns;
        this._networkLoadBalancerArns = config.networkLoadBalancerArns;
        this._privateDnsName = config.privateDnsName;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // acceptance_required - computed: false, optional: false, required: true
    _acceptanceRequired;
    get acceptanceRequired() {
        return this.getBooleanAttribute('acceptance_required');
    }
    set acceptanceRequired(value) {
        this._acceptanceRequired = value;
    }
    // Temporarily expose input value. Use with caution.
    get acceptanceRequiredInput() {
        return this._acceptanceRequired;
    }
    // allowed_principals - computed: true, optional: true, required: false
    _allowedPrincipals;
    get allowedPrincipals() {
        return this.getListAttribute('allowed_principals');
    }
    set allowedPrincipals(value) {
        this._allowedPrincipals = value;
    }
    resetAllowedPrincipals() {
        this._allowedPrincipals = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedPrincipalsInput() {
        return this._allowedPrincipals;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // availability_zones - computed: true, optional: false, required: false
    get availabilityZones() {
        return this.getListAttribute('availability_zones');
    }
    // base_endpoint_dns_names - computed: true, optional: false, required: false
    get baseEndpointDnsNames() {
        return this.getListAttribute('base_endpoint_dns_names');
    }
    // gateway_load_balancer_arns - computed: false, optional: true, required: false
    _gatewayLoadBalancerArns;
    get gatewayLoadBalancerArns() {
        return this.getListAttribute('gateway_load_balancer_arns');
    }
    set gatewayLoadBalancerArns(value) {
        this._gatewayLoadBalancerArns = value;
    }
    resetGatewayLoadBalancerArns() {
        this._gatewayLoadBalancerArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get gatewayLoadBalancerArnsInput() {
        return this._gatewayLoadBalancerArns;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // manages_vpc_endpoints - computed: true, optional: false, required: false
    get managesVpcEndpoints() {
        return this.getBooleanAttribute('manages_vpc_endpoints');
    }
    // network_load_balancer_arns - computed: false, optional: true, required: false
    _networkLoadBalancerArns;
    get networkLoadBalancerArns() {
        return this.getListAttribute('network_load_balancer_arns');
    }
    set networkLoadBalancerArns(value) {
        this._networkLoadBalancerArns = value;
    }
    resetNetworkLoadBalancerArns() {
        this._networkLoadBalancerArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkLoadBalancerArnsInput() {
        return this._networkLoadBalancerArns;
    }
    // private_dns_name - computed: true, optional: true, required: false
    _privateDnsName;
    get privateDnsName() {
        return this.getStringAttribute('private_dns_name');
    }
    set privateDnsName(value) {
        this._privateDnsName = value;
    }
    resetPrivateDnsName() {
        this._privateDnsName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get privateDnsNameInput() {
        return this._privateDnsName;
    }
    // private_dns_name_configuration - computed: true, optional: false, required: false
    privateDnsNameConfiguration(index) {
        return new VpcEndpointServicePrivateDnsNameConfiguration(this, 'private_dns_name_configuration', index);
    }
    // service_name - computed: true, optional: false, required: false
    get serviceName() {
        return this.getStringAttribute('service_name');
    }
    // service_type - computed: true, optional: false, required: false
    get serviceType() {
        return this.getStringAttribute('service_type');
    }
    // state - computed: true, optional: false, required: false
    get state() {
        return this.getStringAttribute('state');
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            acceptance_required: cdktf.booleanToTerraform(this._acceptanceRequired),
            allowed_principals: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedPrincipals),
            gateway_load_balancer_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._gatewayLoadBalancerArns),
            network_load_balancer_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._networkLoadBalancerArns),
            private_dns_name: cdktf.stringToTerraform(this._privateDnsName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnBjLWVuZHBvaW50LXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInZwYy1lbmRwb2ludC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQW1DL0IsTUFBTSxPQUFPLDZDQUE4QyxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFMUYsMERBQTBEO0lBQzFELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCwyREFBMkQ7SUFDM0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELDBEQUEwRDtJQUMxRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsMkRBQTJEO0lBQzNELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7Q0FDRjtBQUVEOztFQUVFO0FBQ0YsTUFBTSxPQUFPLGtCQUFtQixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFFN0Qsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDYixNQUFNLENBQVUsY0FBYyxHQUFXLDBCQUEwQixDQUFDO0lBRTNFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQWdDO1FBQy9FLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsMEJBQTBCO1lBQ2pELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEs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