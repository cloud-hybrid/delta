// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html aws_default_vpc}
*/
export class DefaultVpc extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_default_vpc";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html aws_default_vpc} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DefaultVpcConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_default_vpc',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._enableClassiclink = config.enableClassiclink;
        this._enableClassiclinkDnsSupport = config.enableClassiclinkDnsSupport;
        this._enableDnsHostnames = config.enableDnsHostnames;
        this._enableDnsSupport = config.enableDnsSupport;
        this._ipv4IpamPoolId = config.ipv4IpamPoolId;
        this._ipv4NetmaskLength = config.ipv4NetmaskLength;
        this._ipv6CidrBlock = config.ipv6CidrBlock;
        this._ipv6IpamPoolId = config.ipv6IpamPoolId;
        this._ipv6NetmaskLength = config.ipv6NetmaskLength;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // assign_generated_ipv6_cidr_block - computed: true, optional: false, required: false
    get assignGeneratedIpv6CidrBlock() {
        return this.getBooleanAttribute('assign_generated_ipv6_cidr_block');
    }
    // cidr_block - computed: true, optional: false, required: false
    get cidrBlock() {
        return this.getStringAttribute('cidr_block');
    }
    // default_network_acl_id - computed: true, optional: false, required: false
    get defaultNetworkAclId() {
        return this.getStringAttribute('default_network_acl_id');
    }
    // default_route_table_id - computed: true, optional: false, required: false
    get defaultRouteTableId() {
        return this.getStringAttribute('default_route_table_id');
    }
    // default_security_group_id - computed: true, optional: false, required: false
    get defaultSecurityGroupId() {
        return this.getStringAttribute('default_security_group_id');
    }
    // dhcp_options_id - computed: true, optional: false, required: false
    get dhcpOptionsId() {
        return this.getStringAttribute('dhcp_options_id');
    }
    // enable_classiclink - computed: true, optional: true, required: false
    _enableClassiclink;
    get enableClassiclink() {
        return this.getBooleanAttribute('enable_classiclink');
    }
    set enableClassiclink(value) {
        this._enableClassiclink = value;
    }
    resetEnableClassiclink() {
        this._enableClassiclink = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableClassiclinkInput() {
        return this._enableClassiclink;
    }
    // enable_classiclink_dns_support - computed: true, optional: true, required: false
    _enableClassiclinkDnsSupport;
    get enableClassiclinkDnsSupport() {
        return this.getBooleanAttribute('enable_classiclink_dns_support');
    }
    set enableClassiclinkDnsSupport(value) {
        this._enableClassiclinkDnsSupport = value;
    }
    resetEnableClassiclinkDnsSupport() {
        this._enableClassiclinkDnsSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableClassiclinkDnsSupportInput() {
        return this._enableClassiclinkDnsSupport;
    }
    // enable_dns_hostnames - computed: true, optional: true, required: false
    _enableDnsHostnames;
    get enableDnsHostnames() {
        return this.getBooleanAttribute('enable_dns_hostnames');
    }
    set enableDnsHostnames(value) {
        this._enableDnsHostnames = value;
    }
    resetEnableDnsHostnames() {
        this._enableDnsHostnames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableDnsHostnamesInput() {
        return this._enableDnsHostnames;
    }
    // enable_dns_support - computed: false, optional: true, required: false
    _enableDnsSupport;
    get enableDnsSupport() {
        return this.getBooleanAttribute('enable_dns_support');
    }
    set enableDnsSupport(value) {
        this._enableDnsSupport = value;
    }
    resetEnableDnsSupport() {
        this._enableDnsSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableDnsSupportInput() {
        return this._enableDnsSupport;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // instance_tenancy - computed: true, optional: false, required: false
    get instanceTenancy() {
        return this.getStringAttribute('instance_tenancy');
    }
    // ipv4_ipam_pool_id - computed: false, optional: true, required: false
    _ipv4IpamPoolId;
    get ipv4IpamPoolId() {
        return this.getStringAttribute('ipv4_ipam_pool_id');
    }
    set ipv4IpamPoolId(value) {
        this._ipv4IpamPoolId = value;
    }
    resetIpv4IpamPoolId() {
        this._ipv4IpamPoolId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv4IpamPoolIdInput() {
        return this._ipv4IpamPoolId;
    }
    // ipv4_netmask_length - computed: false, optional: true, required: false
    _ipv4NetmaskLength;
    get ipv4NetmaskLength() {
        return this.getNumberAttribute('ipv4_netmask_length');
    }
    set ipv4NetmaskLength(value) {
        this._ipv4NetmaskLength = value;
    }
    resetIpv4NetmaskLength() {
        this._ipv4NetmaskLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv4NetmaskLengthInput() {
        return this._ipv4NetmaskLength;
    }
    // ipv6_association_id - computed: true, optional: false, required: false
    get ipv6AssociationId() {
        return this.getStringAttribute('ipv6_association_id');
    }
    // ipv6_cidr_block - computed: true, optional: true, required: false
    _ipv6CidrBlock;
    get ipv6CidrBlock() {
        return this.getStringAttribute('ipv6_cidr_block');
    }
    set ipv6CidrBlock(value) {
        this._ipv6CidrBlock = value;
    }
    resetIpv6CidrBlock() {
        this._ipv6CidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv6CidrBlockInput() {
        return this._ipv6CidrBlock;
    }
    // ipv6_ipam_pool_id - computed: false, optional: true, required: false
    _ipv6IpamPoolId;
    get ipv6IpamPoolId() {
        return this.getStringAttribute('ipv6_ipam_pool_id');
    }
    set ipv6IpamPoolId(value) {
        this._ipv6IpamPoolId = value;
    }
    resetIpv6IpamPoolId() {
        this._ipv6IpamPoolId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv6IpamPoolIdInput() {
        return this._ipv6IpamPoolId;
    }
    // ipv6_netmask_length - computed: false, optional: true, required: false
    _ipv6NetmaskLength;
    get ipv6NetmaskLength() {
        return this.getNumberAttribute('ipv6_netmask_length');
    }
    set ipv6NetmaskLength(value) {
        this._ipv6NetmaskLength = value;
    }
    resetIpv6NetmaskLength() {
        this._ipv6NetmaskLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv6NetmaskLengthInput() {
        return this._ipv6NetmaskLength;
    }
    // main_route_table_id - computed: true, optional: false, required: false
    get mainRouteTableId() {
        return this.getStringAttribute('main_route_table_id');
    }
    // owner_id - computed: true, optional: false, required: false
    get ownerId() {
        return this.getStringAttribute('owner_id');
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
            enable_classiclink: cdktf.booleanToTerraform(this._enableClassiclink),
            enable_classiclink_dns_support: cdktf.booleanToTerraform(this._enableClassiclinkDnsSupport),
            enable_dns_hostnames: cdktf.booleanToTerraform(this._enableDnsHostnames),
            enable_dns_support: cdktf.booleanToTerraform(this._enableDnsSupport),
            ipv4_ipam_pool_id: cdktf.stringToTerraform(this._ipv4IpamPoolId),
            ipv4_netmask_length: cdktf.numberToTerraform(this._ipv4NetmaskLength),
            ipv6_cidr_block: cdktf.stringToTerraform(this._ipv6CidrBlock),
            ipv6_ipam_pool_id: cdktf.stringToTerraform(this._ipv6IpamPoolId),
            ipv6_netmask_length: cdktf.numberToTerraform(this._ipv6NetmaskLength),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC12cGMuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImRlZmF1bHQtdnBjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQW9EL0I7O0VBRUU7QUFDRixNQUFNLE9BQU8sVUFBVyxTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFFckQsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDYixNQUFNLENBQVUsY0FBYyxHQUFXLGlCQUFpQixDQUFDO0lBRWxFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLFNBQTJCLEVBQUU7UUFDNUUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSxpQkFBaUI7WUFDeEMsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUM7UUFDbkQsSUFBSSxDQUFDLDRCQUE0QixHQUFHLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQztRQUN2RSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1FBQ3JELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDakQsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzdDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENB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