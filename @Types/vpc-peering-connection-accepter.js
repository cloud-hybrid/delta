// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function vpcPeeringConnectionAccepterAccepterToTerraform(struct) {
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
export class VpcPeeringConnectionAccepterAccepterOutputReference extends cdktf.ComplexObject {
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
export function vpcPeeringConnectionAccepterRequesterToTerraform(struct) {
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
export class VpcPeeringConnectionAccepterRequesterOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html aws_vpc_peering_connection_accepter}
*/
export class VpcPeeringConnectionAccepterA extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_vpc_peering_connection_accepter";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html aws_vpc_peering_connection_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcPeeringConnectionAccepterAConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_vpc_peering_connection_accepter',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._autoAccept = config.autoAccept;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._vpcPeeringConnectionId = config.vpcPeeringConnectionId;
        this._accepter.internalValue = config.accepter;
        this._requester.internalValue = config.requester;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // accept_status - computed: true, optional: false, required: false
    get acceptStatus() {
        return this.getStringAttribute('accept_status');
    }
    // auto_accept - computed: false, optional: true, required: false
    _autoAccept;
    get autoAccept() {
        return this.getBooleanAttribute('auto_accept');
    }
    set autoAccept(value) {
        this._autoAccept = value;
    }
    resetAutoAccept() {
        this._autoAccept = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoAcceptInput() {
        return this._autoAccept;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // peer_owner_id - computed: true, optional: false, required: false
    get peerOwnerId() {
        return this.getStringAttribute('peer_owner_id');
    }
    // peer_region - computed: true, optional: false, required: false
    get peerRegion() {
        return this.getStringAttribute('peer_region');
    }
    // peer_vpc_id - computed: true, optional: false, required: false
    get peerVpcId() {
        return this.getStringAttribute('peer_vpc_id');
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
    // vpc_id - computed: true, optional: false, required: false
    get vpcId() {
        return this.getStringAttribute('vpc_id');
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
    _accepter = new VpcPeeringConnectionAccepterAccepterOutputReference(this, "accepter", true);
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
    _requester = new VpcPeeringConnectionAccepterRequesterOutputReference(this, "requester", true);
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
            auto_accept: cdktf.booleanToTerraform(this._autoAccept),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpc_peering_connection_id: cdktf.stringToTerraform(this._vpcPeeringConnectionId),
            accepter: vpcPeeringConnectionAccepterAccepterToTerraform(this._accepter.internalValue),
            requester: vpcPeeringConnectionAccepterRequesterToTerraform(this._requester.internalValue),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnBjLXBlZXJpbmctY29ubmVjdGlvbi1hY2NlcHRlci5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsidnBjLXBlZXJpbmctY29ubmVjdGlvbi1hY2NlcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFrRC9CLE1BQU0sVUFBVSwrQ0FBK0MsQ0FBQyxNQUFtRztJQUNqSyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLGdDQUFnQyxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsMkJBQTJCLENBQUM7UUFDL0YsK0JBQStCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQywyQkFBMkIsQ0FBQztRQUM5RixnQ0FBZ0MsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLDJCQUEyQixDQUFDO0tBQ2hHLENBQUE7QUFDSCxDQUFDO0FBRUQsTUFBTSxPQUFPLG1EQUFvRCxTQUFRLEtBQUssQ0FBQyxhQUFhO0lBQ2xGLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFFOUI7Ozs7TUFJRTtJQUNGLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFD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