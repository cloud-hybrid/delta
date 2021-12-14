// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function ec2ClientVpnEndpointAuthenticationOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        active_directory_id: cdktf.stringToTerraform(struct.activeDirectoryId),
        root_certificate_chain_arn: cdktf.stringToTerraform(struct.rootCertificateChainArn),
        saml_provider_arn: cdktf.stringToTerraform(struct.samlProviderArn),
        self_service_saml_provider_arn: cdktf.stringToTerraform(struct.selfServiceSamlProviderArn),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function ec2ClientVpnEndpointConnectionLogOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudwatch_log_group: cdktf.stringToTerraform(struct.cloudwatchLogGroup),
        cloudwatch_log_stream: cdktf.stringToTerraform(struct.cloudwatchLogStream),
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
export class Ec2ClientVpnEndpointConnectionLogOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._cloudwatchLogGroup) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLogGroup = this._cloudwatchLogGroup;
        }
        if (this._cloudwatchLogStream) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLogStream = this._cloudwatchLogStream;
        }
        if (this._enabled) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._cloudwatchLogGroup = undefined;
            this._cloudwatchLogStream = undefined;
            this._enabled = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._cloudwatchLogGroup = value.cloudwatchLogGroup;
            this._cloudwatchLogStream = value.cloudwatchLogStream;
            this._enabled = value.enabled;
        }
    }
    // cloudwatch_log_group - computed: false, optional: true, required: false
    _cloudwatchLogGroup;
    get cloudwatchLogGroup() {
        return this.getStringAttribute('cloudwatch_log_group');
    }
    set cloudwatchLogGroup(value) {
        this._cloudwatchLogGroup = value;
    }
    resetCloudwatchLogGroup() {
        this._cloudwatchLogGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudwatchLogGroupInput() {
        return this._cloudwatchLogGroup;
    }
    // cloudwatch_log_stream - computed: false, optional: true, required: false
    _cloudwatchLogStream;
    get cloudwatchLogStream() {
        return this.getStringAttribute('cloudwatch_log_stream');
    }
    set cloudwatchLogStream(value) {
        this._cloudwatchLogStream = value;
    }
    resetCloudwatchLogStream() {
        this._cloudwatchLogStream = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudwatchLogStreamInput() {
        return this._cloudwatchLogStream;
    }
    // enabled - computed: false, optional: false, required: true
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html aws_ec2_client_vpn_endpoint}
*/
export class Ec2ClientVpnEndpoint extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_ec2_client_vpn_endpoint";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html aws_ec2_client_vpn_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2ClientVpnEndpointConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_ec2_client_vpn_endpoint',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._clientCidrBlock = config.clientCidrBlock;
        this._description = config.description;
        this._dnsServers = config.dnsServers;
        this._selfServicePortal = config.selfServicePortal;
        this._serverCertificateArn = config.serverCertificateArn;
        this._splitTunnel = config.splitTunnel;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._transportProtocol = config.transportProtocol;
        this._authenticationOptions = config.authenticationOptions;
        this._connectionLogOptions.internalValue = config.connectionLogOptions;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // client_cidr_block - computed: false, optional: false, required: true
    _clientCidrBlock;
    get clientCidrBlock() {
        return this.getStringAttribute('client_cidr_block');
    }
    set clientCidrBlock(value) {
        this._clientCidrBlock = value;
    }
    // Temporarily expose input value. Use with caution.
    get clientCidrBlockInput() {
        return this._clientCidrBlock;
    }
    // description - computed: false, optional: true, required: false
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // dns_name - computed: true, optional: false, required: false
    get dnsName() {
        return this.getStringAttribute('dns_name');
    }
    // dns_servers - computed: false, optional: true, required: false
    _dnsServers;
    get dnsServers() {
        return this.getListAttribute('dns_servers');
    }
    set dnsServers(value) {
        this._dnsServers = value;
    }
    resetDnsServers() {
        this._dnsServers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dnsServersInput() {
        return this._dnsServers;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // self_service_portal - computed: false, optional: true, required: false
    _selfServicePortal;
    get selfServicePortal() {
        return this.getStringAttribute('self_service_portal');
    }
    set selfServicePortal(value) {
        this._selfServicePortal = value;
    }
    resetSelfServicePortal() {
        this._selfServicePortal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get selfServicePortalInput() {
        return this._selfServicePortal;
    }
    // server_certificate_arn - computed: false, optional: false, required: true
    _serverCertificateArn;
    get serverCertificateArn() {
        return this.getStringAttribute('server_certificate_arn');
    }
    set serverCertificateArn(value) {
        this._serverCertificateArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get serverCertificateArnInput() {
        return this._serverCertificateArn;
    }
    // split_tunnel - computed: false, optional: true, required: false
    _splitTunnel;
    get splitTunnel() {
        return this.getBooleanAttribute('split_tunnel');
    }
    set splitTunnel(value) {
        this._splitTunnel = value;
    }
    resetSplitTunnel() {
        this._splitTunnel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get splitTunnelInput() {
        return this._splitTunnel;
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
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
    // transport_protocol - computed: false, optional: true, required: false
    _transportProtocol;
    get transportProtocol() {
        return this.getStringAttribute('transport_protocol');
    }
    set transportProtocol(value) {
        this._transportProtocol = value;
    }
    resetTransportProtocol() {
        this._transportProtocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get transportProtocolInput() {
        return this._transportProtocol;
    }
    // authentication_options - computed: false, optional: false, required: true
    _authenticationOptions;
    get authenticationOptions() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('authentication_options');
    }
    set authenticationOptions(value) {
        this._authenticationOptions = value;
    }
    // Temporarily expose input value. Use with caution.
    get authenticationOptionsInput() {
        return this._authenticationOptions;
    }
    // connection_log_options - computed: false, optional: false, required: true
    _connectionLogOptions = new Ec2ClientVpnEndpointConnectionLogOptionsOutputReference(this, "connection_log_options", true);
    get connectionLogOptions() {
        return this._connectionLogOptions;
    }
    putConnectionLogOptions(value) {
        this._connectionLogOptions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get connectionLogOptionsInput() {
        return this._connectionLogOptions.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            client_cidr_block: cdktf.stringToTerraform(this._clientCidrBlock),
            description: cdktf.stringToTerraform(this._description),
            dns_servers: cdktf.listMapper(cdktf.stringToTerraform)(this._dnsServers),
            self_service_portal: cdktf.stringToTerraform(this._selfServicePortal),
            server_certificate_arn: cdktf.stringToTerraform(this._serverCertificateArn),
            split_tunnel: cdktf.booleanToTerraform(this._splitTunnel),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            transport_protocol: cdktf.stringToTerraform(this._transportProtocol),
            authentication_options: cdktf.listMapper(ec2ClientVpnEndpointAuthenticationOptionsToTerraform)(this._authenticationOptions),
            connection_log_options: ec2ClientVpnEndpointConnectionLogOptionsToTerraform(this._connectionLogOptions.internalValue),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWMyLWNsaWVudC12cG4tZW5kcG9pbnQuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImVjMi1jbGllbnQtdnBuLWVuZHBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQThFL0IsTUFBTSxVQUFVLG9EQUFvRCxDQUFDLE1BQWtEO0lBQ3JILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUN2RSwwQkFBMEIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLHVCQUF1QixDQUFDO1FBQ3BGLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsZUFBZSxDQUFDO1FBQ25FLDhCQUE4QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsMEJBQTBCLENBQUM7UUFDM0YsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO0tBQzVDLENBQUE7QUFDSCxDQUFDO0FBaUJELE1BQU0sVUFBVSxtREFBbUQsQ0FBQyxNQUEyRztJQUM3SyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsa0JBQWtCLENBQUM7UUFDekUscUJBQXFCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxtQkFBbUIsQ0FBQztRQUMzRSxPQUFPLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7S0FDbkQsQ0FBQTtBQUNILENBQUM7QUFFRCxNQUFNLE9BQU8sdURBQXdELFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFDdEYsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUU5Qjs7OztNQUlFO0lBQ0YsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM1QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztTQUNuRTtRQUNELElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzdCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1NBQ3JFO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDN0M7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBMkQ7UUFDbEYsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUM7WUFDckMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFNBQVMsQ0FBQztZQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztTQUMzQjthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztZQUNwRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDLG1CQUFtQixDQUFDO1lBQ3RELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUMvQjtJQUNILENBQUM7SUFFRCwwRUFBMEU7SUFDbEUsbUJBQW1CLENBQVU7SUFDckMsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBQ0QsSUFBVyxrQkFBa0IsQ0FBQyxLQUFhO1FBQ3pDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQUNNLHVCQUF1QjtRQUM1QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyx1QkFBdUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQztJQUVELDJFQUEyRTtJQUNuRSxvQkFBb0IsQ0FBVTtJQUN0QyxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDRCxJQUFXLG1CQUFtQixDQUFDLEtBQWE7UUFDMUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztJQUNwQyxDQUFDO0lBQ00sd0JBQXdCO1FBQzdCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxTQUFTLENBQUM7SUFDeEMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLHdCQUF3QjtRQUNqQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNuQyxDQUFDO0lBRUQsNkRBQTZEO0lBQ3JELFFBQVEsQ0FBK0I7SUFDL0MsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBUSxDQUFDO0lBQ3BELENBQUM7SUFDRCxJQUFXLE9BQU8sQ0FBQyxLQUFrQztRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztDQUNGO0FBRUQ7O0VBRUU7QUFDRixNQUFNLE9BQU8sb0JBQXFCLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQUUvRCxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNiLE1BQU0sQ0FBVSxjQUFjLEdBQVcsNkJBQTZCLENBQUM7SUFFOUUsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBa0M7UUFDakYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSw2QkFBNkI7WUFDcEQsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQy9DLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDckMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztRQUNuRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDO1FBQ3pELElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUM7UUFDbkQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztRQUMzRCxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztJQUN6RSxDQUFDO0lBRUQsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBRWIseURBQXlEO0lBQ3pELElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCx1RUFBdUU7SUFDL0QsZ0JBQWdCLENBQVU7SUFDbEMsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNELElBQVcsZUFBZSxDQUFDLEtBQWE7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7SUFFRCxpRUFBaUU7SUFDekQsWUFBWSxDQUFVO0lBQzlCLElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsSUFBVyxXQUFXLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ00sZ0JBQWdCO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFFRCw4REFBOEQ7SUFDOUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxpRUFBaUU7SUFDekQsV0FBVyxDQUFZO0lBQy9CLElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0QsSUFBVyxVQUFVLENBQUMsS0FBZTtRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQ00sZUFBZTtRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVELHVEQUF1RDtJQUN2RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQseUVBQXlFO0lBQ2pFLGtCQUFrQixDQUFVO0lBQ3BDLElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNELElBQVcsaUJBQWlCLENBQUMsS0FBYTtRQUN4QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFDTSxzQkFBc0I7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztJQUN0QyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7SUFFRCw0RUFBNEU7SUFDcEUscUJBQXFCLENBQVU7SUFDdkMsSUFBVyxvQkFBb0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBQ0QsSUFBVyxvQkFBb0IsQ0FBQyxLQUFhO1FBQzNDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLHlCQUF5QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUNwQyxDQUFDO0lBRUQsa0VBQWtFO0lBQzFELFlBQVksQ0FBK0I7SUFDbkQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBUSxDQUFDO0lBQ3pELENBQUM7SUFDRCxJQUFXLFdBQVcsQ0FBQyxLQUFrQztRQUN2RCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ00sZ0JBQWdCO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFFRCw0REFBNEQ7SUFDNUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELDBEQUEwRDtJQUNsRCxLQUFLLENBQWlEO0lBQzlELElBQVcsSUFBSTtRQUNiLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQVEsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBb0Q7UUFDbEUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNNLFNBQVM7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztJQUN6QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELDZEQUE2RDtJQUNyRCxRQUFRLENBQWlEO0lBQ2pFLElBQVcsT0FBTztRQUNoQixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsVUFBVSxDQUFRLENBQUM7SUFDM0QsQ0FBQztJQUNELElBQVcsT0FBTyxDQUFDLEtBQW9EO1FBQ3JFLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFDTSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO0lBQzVCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsd0VBQXdFO0lBQ2hFLGtCQUFrQixDQUFVO0lBQ3BDLElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNELElBQVcsaUJBQWlCLENBQUMsS0FBYTtRQUN4QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFDTSxzQkFBc0I7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztJQUN0QyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7SUFFRCw0RUFBNEU7SUFDcEUsc0JBQXNCLENBQStDO0lBQzdFLElBQVcscUJBQXFCO1FBQzlCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyx3QkFBd0IsQ0FBUSxDQUFDO0lBQ3pFLENBQUM7SUFDRCxJQUFXLHFCQUFxQixDQUFDLEtBQWtEO1FBQ2pGLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLDBCQUEwQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUNyQyxDQUFDO0lBRUQsNEVBQTRFO0lBQ3BFLHFCQUFxQixHQUFHLElBQUksdURBQXVELENBQUMsSUFBVyxFQUFFLHdCQUF3QixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pJLElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ3BDLENBQUM7SUFDTSx1QkFBdUIsQ0FBQyxLQUErQztRQUM1RSxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUNuRCxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcseUJBQXlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQztJQUNsRCxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ2pFLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN2RCxXQUFXLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3hFLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFDckUsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztZQUMzRSxZQUFZLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDekQsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEQsUUFBUSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0Qsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUNwRSxzQkFBc0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLG9EQUFvRCxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDO1lBQzNILHNCQUFzQixFQUFFLG1EQUFtRCxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUM7U0FDdEgsQ0FBQztJQUNKLENBQUMifQ==