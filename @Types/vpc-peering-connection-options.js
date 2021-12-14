// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function vpcPeeringConnectionOptionsAccepterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct.allowClassicLinkToRemoteVpc),
        allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct.allowRemoteVpcDnsResolution),
        allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct.allowVpcToRemoteClassicLink),
    };
}
export class VpcPeeringConnectionOptionsAccepterOutputReference extends cdktf.ComplexObject {
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
        if (this._allowClassicLinkToRemoteVpc) {
            hasAnyValues = true;
            internalValueResult.allowClassicLinkToRemoteVpc = this._allowClassicLinkToRemoteVpc;
        }
        if (this._allowRemoteVpcDnsResolution) {
            hasAnyValues = true;
            internalValueResult.allowRemoteVpcDnsResolution = this._allowRemoteVpcDnsResolution;
        }
        if (this._allowVpcToRemoteClassicLink) {
            hasAnyValues = true;
            internalValueResult.allowVpcToRemoteClassicLink = this._allowVpcToRemoteClassicLink;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allowClassicLinkToRemoteVpc = undefined;
            this._allowRemoteVpcDnsResolution = undefined;
            this._allowVpcToRemoteClassicLink = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allowClassicLinkToRemoteVpc = value.allowClassicLinkToRemoteVpc;
            this._allowRemoteVpcDnsResolution = value.allowRemoteVpcDnsResolution;
            this._allowVpcToRemoteClassicLink = value.allowVpcToRemoteClassicLink;
        }
    }
    // allow_classic_link_to_remote_vpc - computed: false, optional: true, required: false
    _allowClassicLinkToRemoteVpc;
    get allowClassicLinkToRemoteVpc() {
        return this.getBooleanAttribute('allow_classic_link_to_remote_vpc');
    }
    set allowClassicLinkToRemoteVpc(value) {
        this._allowClassicLinkToRemoteVpc = value;
    }
    resetAllowClassicLinkToRemoteVpc() {
        this._allowClassicLinkToRemoteVpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowClassicLinkToRemoteVpcInput() {
        return this._allowClassicLinkToRemoteVpc;
    }
    // allow_remote_vpc_dns_resolution - computed: false, optional: true, required: false
    _allowRemoteVpcDnsResolution;
    get allowRemoteVpcDnsResolution() {
        return this.getBooleanAttribute('allow_remote_vpc_dns_resolution');
    }
    set allowRemoteVpcDnsResolution(value) {
        this._allowRemoteVpcDnsResolution = value;
    }
    resetAllowRemoteVpcDnsResolution() {
        this._allowRemoteVpcDnsResolution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowRemoteVpcDnsResolutionInput() {
        return this._allowRemoteVpcDnsResolution;
    }
    // allow_vpc_to_remote_classic_link - computed: false, optional: true, required: false
    _allowVpcToRemoteClassicLink;
    get allowVpcToRemoteClassicLink() {
        return this.getBooleanAttribute('allow_vpc_to_remote_classic_link');
    }
    set allowVpcToRemoteClassicLink(value) {
        this._allowVpcToRemoteClassicLink = value;
    }
    resetAllowVpcToRemoteClassicLink() {
        this._allowVpcToRemoteClassicLink = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowVpcToRemoteClassicLinkInput() {
        return this._allowVpcToRemoteClassicLink;
    }
}
export function vpcPeeringConnectionOptionsRequesterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct.allowClassicLinkToRemoteVpc),
        allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct.allowRemoteVpcDnsResolution),
        allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct.allowVpcToRemoteClassicLink),
    };
}
export class VpcPeeringConnectionOptionsRequesterOutputReference extends cdktf.ComplexObject {
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
        if (this._allowClassicLinkToRemoteVpc) {
            hasAnyValues = true;
            internalValueResult.allowClassicLinkToRemoteVpc = this._allowClassicLinkToRemoteVpc;
        }
        if (this._allowRemoteVpcDnsResolution) {
            hasAnyValues = true;
            internalValueResult.allowRemoteVpcDnsResolution = this._allowRemoteVpcDnsResolution;
        }
        if (this._allowVpcToRemoteClassicLink) {
            hasAnyValues = true;
            internalValueResult.allowVpcToRemoteClassicLink = this._allowVpcToRemoteClassicLink;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allowClassicLinkToRemoteVpc = undefined;
            this._allowRemoteVpcDnsResolution = undefined;
            this._allowVpcToRemoteClassicLink = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allowClassicLinkToRemoteVpc = value.allowClassicLinkToRemoteVpc;
            this._allowRemoteVpcDnsResolution = value.allowRemoteVpcDnsResolution;
            this._allowVpcToRemoteClassicLink = value.allowVpcToRemoteClassicLink;
        }
    }
    // allow_classic_link_to_remote_vpc - computed: false, optional: true, required: false
    _allowClassicLinkToRemoteVpc;
    get allowClassicLinkToRemoteVpc() {
        return this.getBooleanAttribute('allow_classic_link_to_remote_vpc');
    }
    set allowClassicLinkToRemoteVpc(value) {
        this._allowClassicLinkToRemoteVpc = value;
    }
    resetAllowClassicLinkToRemoteVpc() {
        this._allowClassicLinkToRemoteVpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowClassicLinkToRemoteVpcInput() {
        return this._allowClassicLinkToRemoteVpc;
    }
    // allow_remote_vpc_dns_resolution - computed: false, optional: true, required: false
    _allowRemoteVpcDnsResolution;
    get allowRemoteVpcDnsResolution() {
        return this.getBooleanAttribute('allow_remote_vpc_dns_resolution');
    }
    set allowRemoteVpcDnsResolution(value) {
        this._allowRemoteVpcDnsResolution = value;
    }
    resetAllowRemoteVpcDnsResolution() {
        this._allowRemoteVpcDnsResolution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowRemoteVpcDnsResolutionInput() {
        return this._allowRemoteVpcDnsResolution;
    }
    // allow_vpc_to_remote_classic_link - computed: false, optional: true, required: false
    _allowVpcToRemoteClassicLink;
    get allowVpcToRemoteClassicLink() {
        return this.getBooleanAttribute('allow_vpc_to_remote_classic_link');
    }
    set allowVpcToRemoteClassicLink(value) {
        this._allowVpcToRemoteClassicLink = value;
    }
    resetAllowVpcToRemoteClassicLink() {
        this._allowVpcToRemoteClassicLink = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowVpcToRemoteClassicLinkInput() {
        return this._allowVpcToRemoteClassicLink;
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html aws_vpc_peering_connection_options}
*/
export class VpcPeeringConnectionOptions extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_vpc_peering_connection_options";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html aws_vpc_peering_connection_options} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcPeeringConnectionOptionsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_vpc_peering_connection_options',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._vpcPeeringConnectionId = config.vpcPeeringConnectionId;
        this._accepter.internalValue = config.accepter;
        this._requester.internalValue = config.requester;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // vpc_peering_connection_id - computed: false, optional: false, required: true
    _vpcPeeringConnectionId;
    get vpcPeeringConnectionId() {
        return this.getStringAttribute('vpc_peering_connection_id');
    }
    set vpcPeeringConnectionId(value) {
        this._vpcPeeringConnectionId = value;
    }
    // Temporarily expose input value. Use with caution.
    get vpcPeeringConnectionIdInput() {
        return this._vpcPeeringConnectionId;
    }
    // accepter - computed: false, optional: true, required: false
    _accepter = new VpcPeeringConnectionOptionsAccepterOutputReference(this, "accepter", true);
    get accepter() {
        return this._accepter;
    }
    putAccepter(value) {
        this._accepter.internalValue = value;
    }
    resetAccepter() {
        this._accepter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accepterInput() {
        return this._accepter.internalValue;
    }
    // requester - computed: false, optional: true, required: false
    _requester = new VpcPeeringConnectionOptionsRequesterOutputReference(this, "requester", true);
    get requester() {
        return this._requester;
    }
    putRequester(value) {
        this._requester.internalValue = value;
    }
    resetRequester() {
        this._requester.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requesterInput() {
        return this._requester.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            vpc_peering_connection_id: cdktf.stringToTerraform(this._vpcPeeringConnectionId),
            accepter: vpcPeeringConnectionOptionsAccepterToTerraform(this._accepter.internalValue),
            requester: vpcPeeringConnectionOptionsRequesterToTerraform(this._requester.internalValue),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnBjLXBlZXJpbmctY29ubmVjdGlvbi1vcHRpb25zLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJ2cGMtcGVlcmluZy1jb25uZWN0aW9uLW9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBc0MvQixNQUFNLFVBQVUsOENBQThDLENBQUMsTUFBaUc7SUFDOUosSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxnQ0FBZ0MsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLDJCQUEyQixDQUFDO1FBQy9GLCtCQUErQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsMkJBQTJCLENBQUM7UUFDOUYsZ0NBQWdDLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQywyQkFBMkIsQ0FBQztLQUNoRyxDQUFBO0FBQ0gsQ0FBQztBQUVELE1BQU0sT0FBTyxrREFBbUQsU0FBUSxLQUFLLENBQUMsYUFBYTtJQUNqRixhQUFhLEdBQUcsS0FBSyxDQUFDO0lBRTlCOzs7O01BSUU7SUFDRixZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BD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