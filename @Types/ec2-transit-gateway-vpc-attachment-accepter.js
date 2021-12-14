// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter.html aws_ec2_transit_gateway_vpc_attachment_accepter}
*/
export class Ec2TransitGatewayVpcAttachmentAccepter extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_ec2_transit_gateway_vpc_attachment_accepter";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter.html aws_ec2_transit_gateway_vpc_attachment_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayVpcAttachmentAccepterConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_ec2_transit_gateway_vpc_attachment_accepter',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._transitGatewayAttachmentId = config.transitGatewayAttachmentId;
        this._transitGatewayDefaultRouteTableAssociation = config.transitGatewayDefaultRouteTableAssociation;
        this._transitGatewayDefaultRouteTablePropagation = config.transitGatewayDefaultRouteTablePropagation;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // appliance_mode_support - computed: true, optional: false, required: false
    get applianceModeSupport() {
        return this.getStringAttribute('appliance_mode_support');
    }
    // dns_support - computed: true, optional: false, required: false
    get dnsSupport() {
        return this.getStringAttribute('dns_support');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // ipv6_support - computed: true, optional: false, required: false
    get ipv6Support() {
        return this.getStringAttribute('ipv6_support');
    }
    // subnet_ids - computed: true, optional: false, required: false
    get subnetIds() {
        return this.getListAttribute('subnet_ids');
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
    // transit_gateway_attachment_id - computed: false, optional: false, required: true
    _transitGatewayAttachmentId;
    get transitGatewayAttachmentId() {
        return this.getStringAttribute('transit_gateway_attachment_id');
    }
    set transitGatewayAttachmentId(value) {
        this._transitGatewayAttachmentId = value;
    }
    // Temporarily expose input value. Use with caution.
    get transitGatewayAttachmentIdInput() {
        return this._transitGatewayAttachmentId;
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
    // transit_gateway_id - computed: true, optional: false, required: false
    get transitGatewayId() {
        return this.getStringAttribute('transit_gateway_id');
    }
    // vpc_id - computed: true, optional: false, required: false
    get vpcId() {
        return this.getStringAttribute('vpc_id');
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
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            transit_gateway_attachment_id: cdktf.stringToTerraform(this._transitGatewayAttachmentId),
            transit_gateway_default_route_table_association: cdktf.booleanToTerraform(this._transitGatewayDefaultRouteTableAssociation),
            transit_gateway_default_route_table_propagation: cdktf.booleanToTerraform(this._transitGatewayDefaultRouteTablePropagation),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWMyLXRyYW5zaXQtZ2F0ZXdheS12cGMtYXR0YWNobWVudC1hY2NlcHRlci5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsiZWMyLXRyYW5zaXQtZ2F0ZXdheS12cGMtYXR0YWNobWVudC1hY2NlcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUE0Qi9COztFQUVFO0FBQ0YsTUFBTSxPQUFPLHNDQUF1QyxTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFFakYsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDYixNQUFNLENBQVUsY0FBYyxHQUFXLGlEQUFpRCxDQUFDO0lBRWxHLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQW9EO1FBQ25HLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsaURBQWlEO1lBQ3hFLDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQy9CLElBQUksQ0FBQywyQkFBMkIsR0FBRyxNQUFNLENBQUMsMEJBQTBCLENBQUM7UUFDckUsSUFBSSxDQUFDLDJDQUEyQyxHQUFHLE1BQU0sQ0FBQywwQ0FBMEMsQ0FBQztRQUNyRyxJQUFJLENBQUMsMkNBQTJDLEdBQUcs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