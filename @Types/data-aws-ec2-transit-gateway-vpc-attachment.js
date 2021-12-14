// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataAwsEc2TransitGatewayVpcAttachmentFilterToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachment.html aws_ec2_transit_gateway_vpc_attachment}
*/
export class DataAwsEc2TransitGatewayVpcAttachment extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_ec2_transit_gateway_vpc_attachment";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachment.html aws_ec2_transit_gateway_vpc_attachment} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2TransitGatewayVpcAttachmentConfig = {}
    */
    constructor(scope, id, config = {}) {
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
        this._tags = config.tags;
        this._filter = config.filter;
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
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            filter: cdktf.listMapper(dataAwsEc2TransitGatewayVpcAttachmentFilterToTerraform)(this._filter),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtZWMyLXRyYW5zaXQtZ2F0ZXdheS12cGMtYXR0YWNobWVudC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsiZGF0YS1hd3MtZWMyLXRyYW5zaXQtZ2F0ZXdheS12cGMtYXR0YWNobWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUE0Qi9CLE1BQU0sVUFBVSxzREFBc0QsQ0FBQyxNQUFvRDtJQUN6SCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztRQUMzQyxNQUFNLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO0tBQ2xFLENBQUE7QUFDSCxDQUFDO0FBR0Q7O0VBRUU7QUFDRixNQUFNLE9BQU8scUNBQXNDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVsRixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNiLE1BQU0sQ0FBVSxjQUFjLEdBQVcsd0NBQXdDLENBQUM7SUFFekYsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsU0FBc0QsRUFBRTtRQUN2RyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLHdDQUF3QztZQUMvRCwwQkFBMEIsRUFBRTtnQkFD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