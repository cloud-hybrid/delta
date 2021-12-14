// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder_status.html aws_config_configuration_recorder_status}
*/
export class ConfigConfigurationRecorderStatus extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_config_configuration_recorder_status";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder_status.html aws_config_configuration_recorder_status} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigConfigurationRecorderStatusConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_config_configuration_recorder_status',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._isEnabled = config.isEnabled;
        this._name = config.name;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // is_enabled - computed: false, optional: false, required: true
    _isEnabled;
    get isEnabled() {
        return this.getBooleanAttribute('is_enabled');
    }
    set isEnabled(value) {
        this._isEnabled = value;
    }
    // Temporarily expose input value. Use with caution.
    get isEnabledInput() {
        return this._isEnabled;
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            is_enabled: cdktf.booleanToTerraform(this._isEnabled),
            name: cdktf.stringToTerraform(this._name),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWNvbmZpZ3VyYXRpb24tcmVjb3JkZXItc3RhdHVzLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJjb25maWctY29uZmlndXJhdGlvbi1yZWNvcmRlci1zdGF0dXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBZ0IvQjs7RUFFRTtBQUNGLE1BQU0sT0FBTyxpQ0FBa0MsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBRTVFLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ2IsTUFBTSxDQUFVLGNBQWMsR0FBVywwQ0FBMEMsQ0FBQztJQUUzRixjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUErQztRQUM5RixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLDBDQUEwQztZQUNqRSwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBRWIsdURBQXVEO0lBQ3ZELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxnRUFBZ0U7SUFDeEQsVUFBVSxDQUErQjtJQUNqRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFRLENBQUM7SUFDdkQsQ0FBQztJQUNELElBQVcsU0FBUyxDQUFDLEtBQWtDO1FBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRUQsMERBQTBEO0lBQ2xELEtBQUssQ0FBVTtJQUN2QixJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3JELElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUMxQyxDQUFDO0lBQ0osQ0FBQyJ9