// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function connectInstanceTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        delete: cdktf.stringToTerraform(struct.delete),
    };
}
export class ConnectInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
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
        if (this._create) {
            hasAnyValues = true;
            internalValueResult.create = this._create;
        }
        if (this._delete) {
            hasAnyValues = true;
            internalValueResult.delete = this._delete;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._create = undefined;
            this._delete = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._create = value.create;
            this._delete = value.delete;
        }
    }
    // create - computed: false, optional: true, required: false
    _create;
    get create() {
        return this.getStringAttribute('create');
    }
    set create(value) {
        this._create = value;
    }
    resetCreate() {
        this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get createInput() {
        return this._create;
    }
    // delete - computed: false, optional: true, required: false
    _delete;
    get delete() {
        return this.getStringAttribute('delete');
    }
    set delete(value) {
        this._delete = value;
    }
    resetDelete() {
        this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deleteInput() {
        return this._delete;
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html aws_connect_instance}
*/
export class ConnectInstance extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_connect_instance";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html aws_connect_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConnectInstanceConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_connect_instance',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._autoResolveBestVoicesEnabled = config.autoResolveBestVoicesEnabled;
        this._contactFlowLogsEnabled = config.contactFlowLogsEnabled;
        this._contactLensEnabled = config.contactLensEnabled;
        this._directoryId = config.directoryId;
        this._earlyMediaEnabled = config.earlyMediaEnabled;
        this._identityManagementType = config.identityManagementType;
        this._inboundCallsEnabled = config.inboundCallsEnabled;
        this._instanceAlias = config.instanceAlias;
        this._outboundCallsEnabled = config.outboundCallsEnabled;
        this._timeouts.internalValue = config.timeouts;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // auto_resolve_best_voices_enabled - computed: false, optional: true, required: false
    _autoResolveBestVoicesEnabled;
    get autoResolveBestVoicesEnabled() {
        return this.getBooleanAttribute('auto_resolve_best_voices_enabled');
    }
    set autoResolveBestVoicesEnabled(value) {
        this._autoResolveBestVoicesEnabled = value;
    }
    resetAutoResolveBestVoicesEnabled() {
        this._autoResolveBestVoicesEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoResolveBestVoicesEnabledInput() {
        return this._autoResolveBestVoicesEnabled;
    }
    // contact_flow_logs_enabled - computed: false, optional: true, required: false
    _contactFlowLogsEnabled;
    get contactFlowLogsEnabled() {
        return this.getBooleanAttribute('contact_flow_logs_enabled');
    }
    set contactFlowLogsEnabled(value) {
        this._contactFlowLogsEnabled = value;
    }
    resetContactFlowLogsEnabled() {
        this._contactFlowLogsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contactFlowLogsEnabledInput() {
        return this._contactFlowLogsEnabled;
    }
    // contact_lens_enabled - computed: false, optional: true, required: false
    _contactLensEnabled;
    get contactLensEnabled() {
        return this.getBooleanAttribute('contact_lens_enabled');
    }
    set contactLensEnabled(value) {
        this._contactLensEnabled = value;
    }
    resetContactLensEnabled() {
        this._contactLensEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contactLensEnabledInput() {
        return this._contactLensEnabled;
    }
    // created_time - computed: true, optional: false, required: false
    get createdTime() {
        return this.getStringAttribute('created_time');
    }
    // directory_id - computed: false, optional: true, required: false
    _directoryId;
    get directoryId() {
        return this.getStringAttribute('directory_id');
    }
    set directoryId(value) {
        this._directoryId = value;
    }
    resetDirectoryId() {
        this._directoryId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get directoryIdInput() {
        return this._directoryId;
    }
    // early_media_enabled - computed: false, optional: true, required: false
    _earlyMediaEnabled;
    get earlyMediaEnabled() {
        return this.getBooleanAttribute('early_media_enabled');
    }
    set earlyMediaEnabled(value) {
        this._earlyMediaEnabled = value;
    }
    resetEarlyMediaEnabled() {
        this._earlyMediaEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get earlyMediaEnabledInput() {
        return this._earlyMediaEnabled;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // identity_management_type - computed: false, optional: false, required: true
    _identityManagementType;
    get identityManagementType() {
        return this.getStringAttribute('identity_management_type');
    }
    set identityManagementType(value) {
        this._identityManagementType = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityManagementTypeInput() {
        return this._identityManagementType;
    }
    // inbound_calls_enabled - computed: false, optional: false, required: true
    _inboundCallsEnabled;
    get inboundCallsEnabled() {
        return this.getBooleanAttribute('inbound_calls_enabled');
    }
    set inboundCallsEnabled(value) {
        this._inboundCallsEnabled = value;
    }
    // Temporarily expose input value. Use with caution.
    get inboundCallsEnabledInput() {
        return this._inboundCallsEnabled;
    }
    // instance_alias - computed: false, optional: true, required: false
    _instanceAlias;
    get instanceAlias() {
        return this.getStringAttribute('instance_alias');
    }
    set instanceAlias(value) {
        this._instanceAlias = value;
    }
    resetInstanceAlias() {
        this._instanceAlias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceAliasInput() {
        return this._instanceAlias;
    }
    // outbound_calls_enabled - computed: false, optional: false, required: true
    _outboundCallsEnabled;
    get outboundCallsEnabled() {
        return this.getBooleanAttribute('outbound_calls_enabled');
    }
    set outboundCallsEnabled(value) {
        this._outboundCallsEnabled = value;
    }
    // Temporarily expose input value. Use with caution.
    get outboundCallsEnabledInput() {
        return this._outboundCallsEnabled;
    }
    // service_role - computed: true, optional: false, required: false
    get serviceRole() {
        return this.getStringAttribute('service_role');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // timeouts - computed: false, optional: true, required: false
    _timeouts = new ConnectInstanceTimeoutsOutputReference(this, "timeouts", true);
    get timeouts() {
        return this._timeouts;
    }
    putTimeouts(value) {
        this._timeouts.internalValue = value;
    }
    resetTimeouts() {
        this._timeouts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutsInput() {
        return this._timeouts.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            auto_resolve_best_voices_enabled: cdktf.booleanToTerraform(this._autoResolveBestVoicesEnabled),
            contact_flow_logs_enabled: cdktf.booleanToTerraform(this._contactFlowLogsEnabled),
            contact_lens_enabled: cdktf.booleanToTerraform(this._contactLensEnabled),
            directory_id: cdktf.stringToTerraform(this._directoryId),
            early_media_enabled: cdktf.booleanToTerraform(this._earlyMediaEnabled),
            identity_management_type: cdktf.stringToTerraform(this._identityManagementType),
            inbound_calls_enabled: cdktf.booleanToTerraform(this._inboundCallsEnabled),
            instance_alias: cdktf.stringToTerraform(this._instanceAlias),
            outbound_calls_enabled: cdktf.booleanToTerraform(this._outboundCallsEnabled),
            timeouts: connectInstanceTimeoutsToTerraform(this._timeouts.internalValue),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdC1pbnN0YW5jZS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsiY29ubmVjdC1pbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUE0RC9CLE1BQU0sVUFBVSxrQ0FBa0MsQ0FBQyxNQUF5RTtJQUMxSCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztRQUMvQyxNQUFNLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7S0FDaEQsQ0FBQTtBQUNILENBQUM7QUFFRCxNQUFNLE9BQU8sc0NBQXVDLFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFDckUsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUU5Qjs7OztNQUlFO0lBQ0YsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUMzQztRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQzNDO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQztJQUVELElBQVcsYUFBYSxDQUFDLEtBQTBDO1FBQ2pFLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztTQUMxQjthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztTQUM3QjtJQUNILENBQUM7SUFFRCw0REFBNEQ7SUFDcEQsT0FBTyxDQUFVO0lBQ3pCLElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCxJQUFXLE1BQU0sQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFDTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0lBQzNCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRUQsNERBQTREO0lBQ3BELE9BQU8sQ0FBVTtJQUN6QixJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsSUFBVyxNQUFNLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ00sV0FBVztRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztDQUNGO0FBRUQ7O0VBRUU7QUFDRixNQUFNLE9BQU8sZUFBZ0IsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBRTFELG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ2IsTUFBTSxDQUFVLGNBQWMsR0FBVyxzQkFBc0IsQ0FBQztJQUV2RSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUE2QjtRQUM1RSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLHNCQUFzQjtZQUM3QywwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLDZCQUE2QixHQUFHLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQztRQUN6RSxJQUFJLENBQUMsdUJBQXVCLEdBQUcsTUFBTSxDQUFDLHNCQUFzQixDQUFDO1FBQzdELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUM7UUFDckQsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUM7UUFDbkQsSUFBSSxDQUFDLHVCQUF1QixHQUFHLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQztRQUM3RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDO1FBQ3pELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDakQsQ0FBQztJQUVELGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUViLHlEQUF5RDtJQUN6RCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsc0ZBQXNGO0lBQzlFLDZCQUE2QixDQUErQjtJQUNwRSxJQUFXLDRCQUE0QjtRQUNyQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxrQ0FBa0MsQ0FBUSxDQUFDO0lBQzdFLENBQUM7SUFDRCxJQUFXLDRCQUE0QixDQUFDLEtBQWtDO1FBQ3hFLElBQUksQ0FBQyw2QkFBNkIsR0FBRyxLQUFLLENBQUM7SUFDN0MsQ0FBQztJQUNNLGlDQUFpQztRQUN0QyxJQUFJLENBQUMsNkJBQTZCLEdBQUcsU0FBUyxDQUFDO0lBQ2pELENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxpQ0FBaUM7UUFDMUMsT0FBTyxJQUFJLENBQUMsNkJBQTZCLENBQUM7SUFDNUMsQ0FBQztJQUVELCtFQUErRTtJQUN2RSx1QkFBdUIsQ0FBK0I7SUFDOUQsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsMkJBQTJCLENBQVEsQ0FBQztJQUN0RSxDQUFDO0lBQ0QsSUFBVyxzQkFBc0IsQ0FBQyxLQUFrQztRQUNsRSxJQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7SUFDTSwyQkFBMkI7UUFDaEMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLFNBQVMsQ0FBQztJQUMzQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsMkJBQTJCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDO0lBQ3RDLENBQUM7SUFFRCwwRUFBMEU7SUFDbEUsbUJBQW1CLENBQStCO0lBQzFELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLHNCQUFzQixDQUFRLENBQUM7SUFDakUsQ0FBQztJQUNELElBQVcsa0JBQWtCLENBQUMsS0FBa0M7UUFDOUQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBQ00sdUJBQXVCO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUM7SUFDdkMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLHVCQUF1QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUNsQyxDQUFDO0lBRUQsa0VBQWtFO0lBQ2xFLElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsa0VBQWtFO0lBQzFELFlBQVksQ0FBVTtJQUM5QixJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELElBQVcsV0FBVyxDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBRUQseUVBQXlFO0lBQ2pFLGtCQUFrQixDQUErQjtJQUN6RCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBUSxDQUFDO0lBQ2hFLENBQUM7SUFDRCxJQUFXLGlCQUFpQixDQUFDLEtBQWtDO1FBQzdELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUNNLHNCQUFzQjtRQUMzQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQztJQUVELHVEQUF1RDtJQUN2RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsOEVBQThFO0lBQ3RFLHVCQUF1QixDQUFVO0lBQ3pDLElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNELElBQVcsc0JBQXNCLENBQUMsS0FBYTtRQUM3QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVywyQkFBMkI7UUFDcEMsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUM7SUFDdEMsQ0FBQztJQUVELDJFQUEyRTtJQUNuRSxvQkFBb0IsQ0FBK0I7SUFDM0QsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsdUJBQXVCLENBQVEsQ0FBQztJQUNsRSxDQUFDO0lBQ0QsSUFBVyxtQkFBbUIsQ0FBQyxLQUFrQztRQUMvRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyx3QkFBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDbkMsQ0FBQztJQUVELG9FQUFvRTtJQUM1RCxjQUFjLENBQVU7SUFDaEMsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELElBQVcsYUFBYSxDQUFDLEtBQWE7UUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUNNLGtCQUFrQjtRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBRUQsNEVBQTRFO0lBQ3BFLHFCQUFxQixDQUErQjtJQUM1RCxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx3QkFBd0IsQ0FBUSxDQUFDO0lBQ25FLENBQUM7SUFDRCxJQUFXLG9CQUFvQixDQUFDLEtBQWtDO1FBQ2hFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLHlCQUF5QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUNwQyxDQUFDO0lBRUQsa0VBQWtFO0lBQ2xFLElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsNERBQTREO0lBQzVELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCw4REFBOEQ7SUFDdEQsU0FBUyxHQUFHLElBQUksc0NBQXNDLENBQUMsSUFBVyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5RixJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDTSxXQUFXLENBQUMsS0FBOEI7UUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7SUFDTSxhQUFhO1FBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUMzQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLGdDQUFnQyxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUM7WUFDOUYseUJBQXlCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztZQUNqRixvQkFBb0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1lBQ3hFLFlBQVksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN4RCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQ3RFLHdCQUF3QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7WUFDL0UscUJBQXFCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUMxRSxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDNUQsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztZQUM1RSxRQUFRLEVBQUUsa0NBQWtDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7U0FDM0UsQ0FBQztJQUNKLENBQUMifQ==