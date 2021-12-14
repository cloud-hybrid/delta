// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_region_settings.html aws_backup_region_settings}
*/
export class BackupRegionSettings extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_backup_region_settings";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/backup_region_settings.html aws_backup_region_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupRegionSettingsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_backup_region_settings',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._resourceTypeManagementPreference = config.resourceTypeManagementPreference;
        this._resourceTypeOptInPreference = config.resourceTypeOptInPreference;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // resource_type_management_preference - computed: true, optional: true, required: false
    _resourceTypeManagementPreference;
    get resourceTypeManagementPreference() {
        return this.getBooleanAttribute('resource_type_management_preference');
    }
    set resourceTypeManagementPreference(value) {
        this._resourceTypeManagementPreference = value;
    }
    resetResourceTypeManagementPreference() {
        this._resourceTypeManagementPreference = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceTypeManagementPreferenceInput() {
        return this._resourceTypeManagementPreference;
    }
    // resource_type_opt_in_preference - computed: false, optional: false, required: true
    _resourceTypeOptInPreference;
    get resourceTypeOptInPreference() {
        return this.getBooleanAttribute('resource_type_opt_in_preference');
    }
    set resourceTypeOptInPreference(value) {
        this._resourceTypeOptInPreference = value;
    }
    // Temporarily expose input value. Use with caution.
    get resourceTypeOptInPreferenceInput() {
        return this._resourceTypeOptInPreference;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            resource_type_management_preference: cdktf.hashMapper(cdktf.anyToTerraform)(this._resourceTypeManagementPreference),
            resource_type_opt_in_preference: cdktf.hashMapper(cdktf.anyToTerraform)(this._resourceTypeOptInPreference),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja3VwLXJlZ2lvbi1zZXR0aW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsiYmFja3VwLXJlZ2lvbi1zZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFnQi9COztFQUVFO0FBQ0YsTUFBTSxPQUFPLG9CQUFxQixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFFL0Qsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDYixNQUFNLENBQVUsY0FBYyxHQUFXLDRCQUE0QixDQUFDO0lBRTdFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQWtDO1FBQ2pGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsNEJBQTRCO1lBQ25ELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsaUNBQWlDLEdBQUcsTUFBTSxDQUFDLGdDQUFnQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxNQUFNLENBQUMsMkJBQTJCLENBQUM7SUFDekUsQ0FBQztJQUVELGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUViLHVEQUF1RDtJQUN2RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsd0ZBQXdGO0lBQ2hGLGlDQUFpQyxDQUFrRDtJQUMzRixJQUFXLGdDQUFnQztRQUN6QyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxxQ0FBcUMsQ0FBUSxDQUFDO0lBQ2hGLENBQUM7SUFDRCxJQUFXLGdDQUFnQyxDQUFDLEtBQXFEO1FBQy9GLElBQUksQ0FBQyxpQ0FBaUMsR0FBRyxLQUFLLENBQUM7SUFDakQsQ0FBQztJQUNNLHFDQUFxQztRQUMxQyxJQUFJLENBQUMsaUNBQWlDLEdBQUcsU0FBUyxDQUFDO0lBQ3JELENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxxQ0FBcUM7UUFDOUMsT0FBTyxJQUFJLENBQUMsaUNBQWlDLENBQUM7SUFDaEQsQ0FBQztJQUVELHFGQUFxRjtJQUM3RSw0QkFBNEIsQ0FBa0Q7SUFDdEYsSUFBVywyQkFBMkI7UUFDcEMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsaUNBQWlDLENBQVEsQ0FBQztJQUM1RSxDQUFDO0lBQ0QsSUFBVywyQkFBMkIsQ0FBQyxLQUFxRDtRQUMxRixJQUFJLENBQUMsNEJBQTRCLEdBQUcsS0FBSyxDQUFDO0lBQzVDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxnQ0FBZ0M7UUFDekMsT0FBTyxJQUFJLENBQUMsNEJBQTRCLENBQUM7SUFDM0MsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsbUNBQW1DLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDO1lBQ25ILCtCQUErQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztTQUMzRyxDQUFDO0lBQ0osQ0FBQyJ9