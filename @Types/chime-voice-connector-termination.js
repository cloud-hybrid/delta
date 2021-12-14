// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination.html aws_chime_voice_connector_termination}
*/
export class ChimeVoiceConnectorTermination extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_chime_voice_connector_termination";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination.html aws_chime_voice_connector_termination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimeVoiceConnectorTerminationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_chime_voice_connector_termination',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._callingRegions = config.callingRegions;
        this._cidrAllowList = config.cidrAllowList;
        this._cpsLimit = config.cpsLimit;
        this._defaultPhoneNumber = config.defaultPhoneNumber;
        this._disabled = config.disabled;
        this._voiceConnectorId = config.voiceConnectorId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // calling_regions - computed: false, optional: false, required: true
    _callingRegions;
    get callingRegions() {
        return this.getListAttribute('calling_regions');
    }
    set callingRegions(value) {
        this._callingRegions = value;
    }
    // Temporarily expose input value. Use with caution.
    get callingRegionsInput() {
        return this._callingRegions;
    }
    // cidr_allow_list - computed: false, optional: false, required: true
    _cidrAllowList;
    get cidrAllowList() {
        return this.getListAttribute('cidr_allow_list');
    }
    set cidrAllowList(value) {
        this._cidrAllowList = value;
    }
    // Temporarily expose input value. Use with caution.
    get cidrAllowListInput() {
        return this._cidrAllowList;
    }
    // cps_limit - computed: false, optional: true, required: false
    _cpsLimit;
    get cpsLimit() {
        return this.getNumberAttribute('cps_limit');
    }
    set cpsLimit(value) {
        this._cpsLimit = value;
    }
    resetCpsLimit() {
        this._cpsLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cpsLimitInput() {
        return this._cpsLimit;
    }
    // default_phone_number - computed: false, optional: true, required: false
    _defaultPhoneNumber;
    get defaultPhoneNumber() {
        return this.getStringAttribute('default_phone_number');
    }
    set defaultPhoneNumber(value) {
        this._defaultPhoneNumber = value;
    }
    resetDefaultPhoneNumber() {
        this._defaultPhoneNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultPhoneNumberInput() {
        return this._defaultPhoneNumber;
    }
    // disabled - computed: false, optional: true, required: false
    _disabled;
    get disabled() {
        return this.getBooleanAttribute('disabled');
    }
    set disabled(value) {
        this._disabled = value;
    }
    resetDisabled() {
        this._disabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get disabledInput() {
        return this._disabled;
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
            calling_regions: cdktf.listMapper(cdktf.stringToTerraform)(this._callingRegions),
            cidr_allow_list: cdktf.listMapper(cdktf.stringToTerraform)(this._cidrAllowList),
            cps_limit: cdktf.numberToTerraform(this._cpsLimit),
            default_phone_number: cdktf.stringToTerraform(this._defaultPhoneNumber),
            disabled: cdktf.booleanToTerraform(this._disabled),
            voice_connector_id: cdktf.stringToTerraform(this._voiceConnectorId),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpbWUtdm9pY2UtY29ubmVjdG9yLXRlcm1pbmF0aW9uLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJjaGltZS12b2ljZS1jb25uZWN0b3ItdGVybWluYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBZ0MvQjs7RUFFRTtBQUNGLE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBRXpFLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ2IsTUFBTSxDQUFVLGNBQWMsR0FBVyx1Q0FBdUMsQ0FBQztJQUV4RixjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUE0QztRQUMzRixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLHVDQUF1QztZQUM5RCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzdDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDakMs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