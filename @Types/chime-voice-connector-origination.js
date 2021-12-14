// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function chimeVoiceConnectorOriginationRouteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
        priority: cdktf.numberToTerraform(struct.priority),
        protocol: cdktf.stringToTerraform(struct.protocol),
        weight: cdktf.numberToTerraform(struct.weight),
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html aws_chime_voice_connector_origination}
*/
export class ChimeVoiceConnectorOrigination extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_chime_voice_connector_origination";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html aws_chime_voice_connector_origination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimeVoiceConnectorOriginationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_chime_voice_connector_origination',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._disabled = config.disabled;
        this._voiceConnectorId = config.voiceConnectorId;
        this._route = config.route;
    }
    // ==========
    // ATTRIBUTES
    // ==========
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
    // route - computed: false, optional: false, required: true
    _route;
    get route() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('route');
    }
    set route(value) {
        this._route = value;
    }
    // Temporarily expose input value. Use with caution.
    get routeInput() {
        return this._route;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            disabled: cdktf.booleanToTerraform(this._disabled),
            voice_connector_id: cdktf.stringToTerraform(this._voiceConnectorId),
            route: cdktf.listMapper(chimeVoiceConnectorOriginationRouteToTerraform)(this._route),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpbWUtdm9pY2UtY29ubmVjdG9yLW9yaWdpbmF0aW9uLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJjaGltZS12b2ljZS1jb25uZWN0b3Itb3JpZ2luYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBNEMvQixNQUFNLFVBQVUsOENBQThDLENBQUMsTUFBNEM7SUFDekcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztRQUNuRCxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7UUFDbkQsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO0tBQ2hELENBQUE7QUFDSCxDQUFDO0FBR0Q7O0VBRUU7QUFDRixNQUFNLE9BQU8sOEJBQStCLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQUV6RSxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNiLE1BQU0sQ0FBVSxjQUFjLEdBQVcsdUNBQXVDLENBQUM7SUFFeEYsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztN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