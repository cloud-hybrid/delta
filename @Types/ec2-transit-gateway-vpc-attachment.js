// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html aws_ec2_transit_gateway_vpc_attachment}
*/
export class Ec2TransitGatewayVpcAttachment extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_ec2_transit_gateway_vpc_attachment";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html aws_ec2_transit_gateway_vpc_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayVpcAttachmentConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_ec2_transit_gateway_vpc_attachment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._applianceModeSupport = config.applianceModeSupport;
        this._dnsSupport = config.dnsSupport;
        this._ipv6Support = config.ipv6Support;
        this._subnetIds = config.subnetIds;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._transitGatewayDefaultRouteTableAssociation = config.transitGatewayDefaultRouteTableAssociation;
        this._transitGatewayDefaultRouteTablePropagation = config.transitGatewayDefaultRouteTablePropagation;
        this._transitGatewayId = config.transitGatewayId;
        this._vpcId = config.vpcId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // appliance_mode_support - computed: false, optional: true, required: false
    _applianceModeSupport;
    get applianceModeSupport() {
        return this.getStringAttribute('appliance_mode_support');
    }
    set applianceModeSupport(value) {
        this._applianceModeSupport = value;
    }
    resetApplianceModeSupport() {
        this._applianceModeSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get applianceModeSupportInput() {
        return this._applianceModeSupport;
    }
    // dns_support - computed: false, optional: true, required: false
    _dnsSupport;
    get dnsSupport() {
        return this.getStringAttribute('dns_support');
    }
    set dnsSupport(value) {
        this._dnsSupport = value;
    }
    resetDnsSupport() {
        this._dnsSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dnsSupportInput() {
        return this._dnsSupport;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // ipv6_support - computed: false, optional: true, required: false
    _ipv6Support;
    get ipv6Support() {
        return this.getStringAttribute('ipv6_support');
    }
    set ipv6Support(value) {
        this._ipv6Support = value;
    }
    resetIpv6Support() {
        this._ipv6Support = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv6SupportInput() {
        return this._ipv6Support;
    }
    // subnet_ids - computed: false, optional: false, required: true
    _subnetIds;
    get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    set subnetIds(value) {
        this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    get subnetIdsInput() {
        return this._subnetIds;
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
    // transit_gateway_default_route_table_association - computed: false, optional: true, required: false
    _transitGatewayDefaultRouteTableAssociation;
    get transitGatewayDefaultRouteTableAssociation() {
        return this.getBooleanAttribute('transit_gateway_default_route_table_association');
    }
    set transitGatewayDefaultRouteTableAssociation(value) {
        this._transitGatewayDefaultRouteTableAssociation = value;
    }
    resetTransitGatewayDefaultRouteTableAssociation() {
        this._transitGatewayDefaultRouteTableAssociation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get transitGatewayDefaultRouteTableAssociationInput() {
        return this._transitGatewayDefaultRouteTableAssociation;
    }
    // transit_gateway_default_route_table_propagation - computed: false, optional: true, required: false
    _transitGatewayDefaultRouteTablePropagation;
    get transitGatewayDefaultRouteTablePropagation() {
        return this.getBooleanAttribute('transit_gateway_default_route_table_propagation');
    }
    set transitGatewayDefaultRouteTablePropagation(value) {
        this._transitGatewayDefaultRouteTablePropagation = value;
    }
    resetTransitGatewayDefaultRouteTablePropagation() {
        this._transitGatewayDefaultRouteTablePropagation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get transitGatewayDefaultRouteTablePropagationInput() {
        return this._transitGatewayDefaultRouteTablePropagation;
    }
    // transit_gateway_id - computed: false, optional: false, required: true
    _transitGatewayId;
    get transitGatewayId() {
        return this.getStringAttribute('transit_gateway_id');
    }
    set transitGatewayId(value) {
        this._transitGatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    get transitGatewayIdInput() {
        return this._transitGatewayId;
    }
    // vpc_id - computed: false, optional: false, required: true
    _vpcId;
    get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    set vpcId(value) {
        this._vpcId = value;
    }
    // Temporarily expose input value. Use with caution.
    get vpcIdInput() {
        return this._vpcId;
    }
    // vpc_owner_id - computed: true, optional: false, required: false
    get vpcOwnerId() {
        return this.getStringAttribute('vpc_owner_id');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            appliance_mode_support: cdktf.stringToTerraform(this._applianceModeSupport),
            dns_support: cdktf.stringToTerraform(this._dnsSupport),
            ipv6_support: cdktf.stringToTerraform(this._ipv6Support),
            subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            transit_gateway_default_route_table_association: cdktf.booleanToTerraform(this._transitGatewayDefaultRouteTableAssociation),
            transit_gateway_default_route_table_propagation: cdktf.booleanToTerraform(this._transitGatewayDefaultRouteTablePropagation),
            transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
            vpc_id: cdktf.stringToTerraform(this._vpcId),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWMyLXRyYW5zaXQtZ2F0ZXdheS12cGMtYXR0YWNobWVudC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsiZWMyLXRyYW5zaXQtZ2F0ZXdheS12cGMtYXR0YWNobWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFnRC9COztFQUVFO0FBQ0YsTUFBTSxPQUFPLDhCQUErQixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFFekUsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDYixNQUFNLENBQVUsY0FBYyxHQUFXLHdDQUF3QyxDQUFDO0lBRXpGLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQTRDO1FBQzNGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsd0NBQXdDO1lBQy9ELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDO1FBQ3pELElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN6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