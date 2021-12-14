// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment_accepter.html aws_ec2_transit_gateway_peering_attachment_accepter}
*/
export class Ec2TransitGatewayPeeringAttachmentAccepter extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_ec2_transit_gateway_peering_attachment_accepter";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment_accepter.html aws_ec2_transit_gateway_peering_attachment_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayPeeringAttachmentAccepterConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_ec2_transit_gateway_peering_attachment_accepter',
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
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // peer_account_id - computed: true, optional: false, required: false
    get peerAccountId() {
        return this.getStringAttribute('peer_account_id');
    }
    // peer_region - computed: true, optional: false, required: false
    get peerRegion() {
        return this.getStringAttribute('peer_region');
    }
    // peer_transit_gateway_id - computed: true, optional: false, required: false
    get peerTransitGatewayId() {
        return this.getStringAttribute('peer_transit_gateway_id');
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
    // transit_gateway_id - computed: true, optional: false, required: false
    get transitGatewayId() {
        return this.getStringAttribute('transit_gateway_id');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            transit_gateway_attachment_id: cdktf.stringToTerraform(this._transitGatewayAttachmentId),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWMyLXRyYW5zaXQtZ2F0ZXdheS1wZWVyaW5nLWF0dGFjaG1lbnQtYWNjZXB0ZXIuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImVjMi10cmFuc2l0LWdhdGV3YXktcGVlcmluZy1hdHRhY2htZW50LWFjY2VwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQW9CL0I7O0VBRUU7QUFDRixNQUFNLE9BQU8sMENBQTJDLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQUVyRixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNiLE1BQU0sQ0FBVSxjQUFjLEdBQVcscURBQXFELENBQUM7SUFFdEcsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBd0Q7UUFDdkcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSxxREFBcUQ7WUFDNUUsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDL0IsSUFBSSxDQUFDLDJCQUEyQixHQUFHLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQztJQUN2RSxDQUFDO0lBRUQsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBRWIsdURBQXVEO0lBQ3ZELElBQVcsRUFBRTtR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