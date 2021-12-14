// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging.html aws_chime_voice_connector_logging}
*/
export class ChimeVoiceConnectorLogging extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_chime_voice_connector_logging";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging.html aws_chime_voice_connector_logging} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimeVoiceConnectorLoggingConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_chime_voice_connector_logging',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._enableSipLogs = config.enableSipLogs;
        this._voiceConnectorId = config.voiceConnectorId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // enable_sip_logs - computed: false, optional: true, required: false
    _enableSipLogs;
    get enableSipLogs() {
        return this.getBooleanAttribute('enable_sip_logs');
    }
    set enableSipLogs(value) {
        this._enableSipLogs = value;
    }
    resetEnableSipLogs() {
        this._enableSipLogs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableSipLogsInput() {
        return this._enableSipLogs;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // voice_connector_id - computed: false, optional: false, required: true
    _voiceConnectorId;
    get voiceConnectorId() {
        return this.getStringAttribute('voice_connector_id');
    }
    set voiceConnectorId(value) {
        this._voiceConnectorId = value;
    }
    // Temporarily expose input value. Use with caution.
    get voiceConnectorIdInput() {
        return this._voiceConnectorId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            enable_sip_logs: cdktf.booleanToTerraform(this._enableSipLogs),
            voice_connector_id: cdktf.stringToTerraform(this._voiceConnectorId),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpbWUtdm9pY2UtY29ubmVjdG9yLWxvZ2dpbmcuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImNoaW1lLXZvaWNlLWNvbm5lY3Rvci1sb2dnaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQWdCL0I7O0VBRUU7QUFDRixNQUFNLE9BQU8sMEJBQTJCLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQUVyRSxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNiLE1BQU0sQ0FBVSxjQUFjLEdBQVcsbUNBQW1DLENBQUM7SUFFcEYsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBd0M7UUFDdkYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSxtQ0FBbUM7WUFDMUQsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO0lBQ25ELENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYixxRUFBcUU7SUFDN0QsY0FBYyxDQUErQjtJQUNyRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLENBQVEsQ0FBQztJQUM1RCxDQUFDO0lBQ0QsSUFBVyxhQUFhLENBQUMsS0FBa0M7UUFDekQsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUNNLGtCQUFrQjtRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBRUQsdURBQXVEO0lBQ3ZELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx3RUFBd0U7SUFDaEUsaUJBQWlCLENBQVU7SUFDbkMsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsSUFBVyxnQkFBZ0IsQ0FBQyxLQUFhO1FBQ3ZDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxlQUFlLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDOUQsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztTQUNwRSxDQUFDO0lBQ0osQ0FBQyJ9