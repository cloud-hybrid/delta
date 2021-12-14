// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function chimeVoiceConnectorTerminationCredentialsCredentialsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        password: cdktf.stringToTerraform(struct.password),
        username: cdktf.stringToTerraform(struct.username),
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials.html aws_chime_voice_connector_termination_credentials}
*/
export class ChimeVoiceConnectorTerminationCredentials extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_chime_voice_connector_termination_credentials";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials.html aws_chime_voice_connector_termination_credentials} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimeVoiceConnectorTerminationCredentialsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_chime_voice_connector_termination_credentials',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._voiceConnectorId = config.voiceConnectorId;
        this._credentials = config.credentials;
    }
    // ==========
    // ATTRIBUTES
    // ==========
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
    // credentials - computed: false, optional: false, required: true
    _credentials;
    get credentials() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('credentials');
    }
    set credentials(value) {
        this._credentials = value;
    }
    // Temporarily expose input value. Use with caution.
    get credentialsInput() {
        return this._credentials;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            voice_connector_id: cdktf.stringToTerraform(this._voiceConnectorId),
            credentials: cdktf.listMapper(chimeVoiceConnectorTerminationCredentialsCredentialsToTerraform)(this._credentials),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpbWUtdm9pY2UtY29ubmVjdG9yLXRlcm1pbmF0aW9uLWNyZWRlbnRpYWxzLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJjaGltZS12b2ljZS1jb25uZWN0b3ItdGVybWluYXRpb24tY3JlZGVudGlhbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBNEIvQixNQUFNLFVBQVUsK0RBQStELENBQUMsTUFBNkQ7SUFDM0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7UUFDbkQsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsUUFBUSxDQUFDO0tBQ3BELENBQUE7QUFDSCxDQUFDO0FBR0Q7O0VBRUU7QUFDRixNQUFNLE9BQU8seUNBQTBDLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQUVwRixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNiLE1BQU0sQ0FBVSxjQUFjLEdBQVcsbURBQW1ELENBQUM7SUFFcEcsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBdUQ7UUFDdEcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSxtREFBbUQ7WUFDMUUsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYix1REFBdUQ7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHdFQUF3RTtJQUNoRSxpQkFBaUIsQ0FBVTtJQUNuQyxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDRCxJQUFXLGdCQUFnQixDQUFDLEtBQWE7UUFDdkMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFFRCxpRUFBaUU7SUFDekQsWUFBWSxDQUEwRDtJQUM5RSxJQUFXLFdBQVc7UUFDcEIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsQ0FBUSxDQUFDO0lBQzlELENBQUM7SUFDRCxJQUFXLFdBQVcsQ0FBQyxLQUE2RDtRQUNsRixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxrQkFBa0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQ25FLFdBQVcsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLCtEQUErRCxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUNsSCxDQUFDO0lBQ0osQ0FBQyJ9