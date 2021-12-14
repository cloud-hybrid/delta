// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class DataAwsWorkspacesWorkspaceWorkspaceProperties extends cdktf.ComplexComputedList {
    // compute_type_name - computed: true, optional: false, required: false
    get computeTypeName() {
        return this.getStringAttribute('compute_type_name');
    }
    // root_volume_size_gib - computed: true, optional: false, required: false
    get rootVolumeSizeGib() {
        return this.getNumberAttribute('root_volume_size_gib');
    }
    // running_mode - computed: true, optional: false, required: false
    get runningMode() {
        return this.getStringAttribute('running_mode');
    }
    // running_mode_auto_stop_timeout_in_minutes - computed: true, optional: false, required: false
    get runningModeAutoStopTimeoutInMinutes() {
        return this.getNumberAttribute('running_mode_auto_stop_timeout_in_minutes');
    }
    // user_volume_size_gib - computed: true, optional: false, required: false
    get userVolumeSizeGib() {
        return this.getNumberAttribute('user_volume_size_gib');
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace.html aws_workspaces_workspace}
*/
export class DataAwsWorkspacesWorkspace extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_workspaces_workspace";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace.html aws_workspaces_workspace} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsWorkspacesWorkspaceConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_workspaces_workspace',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._directoryId = config.directoryId;
        this._tags = config.tags;
        this._userName = config.userName;
        this._workspaceId = config.workspaceId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // bundle_id - computed: true, optional: false, required: false
    get bundleId() {
        return this.getStringAttribute('bundle_id');
    }
    // computer_name - computed: true, optional: false, required: false
    get computerName() {
        return this.getStringAttribute('computer_name');
    }
    // directory_id - computed: true, optional: true, required: false
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
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // ip_address - computed: true, optional: false, required: false
    get ipAddress() {
        return this.getStringAttribute('ip_address');
    }
    // root_volume_encryption_enabled - computed: true, optional: false, required: false
    get rootVolumeEncryptionEnabled() {
        return this.getBooleanAttribute('root_volume_encryption_enabled');
    }
    // state - computed: true, optional: false, required: false
    get state() {
        return this.getStringAttribute('state');
    }
    // tags - computed: true, optional: true, required: false
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
    // user_name - computed: true, optional: true, required: false
    _userName;
    get userName() {
        return this.getStringAttribute('user_name');
    }
    set userName(value) {
        this._userName = value;
    }
    resetUserName() {
        this._userName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userNameInput() {
        return this._userName;
    }
    // user_volume_encryption_enabled - computed: true, optional: false, required: false
    get userVolumeEncryptionEnabled() {
        return this.getBooleanAttribute('user_volume_encryption_enabled');
    }
    // volume_encryption_key - computed: true, optional: false, required: false
    get volumeEncryptionKey() {
        return this.getStringAttribute('volume_encryption_key');
    }
    // workspace_id - computed: true, optional: true, required: false
    _workspaceId;
    get workspaceId() {
        return this.getStringAttribute('workspace_id');
    }
    set workspaceId(value) {
        this._workspaceId = value;
    }
    resetWorkspaceId() {
        this._workspaceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get workspaceIdInput() {
        return this._workspaceId;
    }
    // workspace_properties - computed: true, optional: false, required: false
    workspaceProperties(index) {
        return new DataAwsWorkspacesWorkspaceWorkspaceProperties(this, 'workspace_properties', index);
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            directory_id: cdktf.stringToTerraform(this._directoryId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            user_name: cdktf.stringToTerraform(this._userName),
            workspace_id: cdktf.stringToTerraform(this._workspaceId),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3Mtd29ya3NwYWNlcy13b3Jrc3BhY2UuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImRhdGEtYXdzLXdvcmtzcGFjZXMtd29ya3NwYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQXVCL0IsTUFBTSxPQUFPLDZDQUE4QyxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFMUYsdUVBQXVFO0lBQ3ZFLElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCwwRUFBMEU7SUFDMUUsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsa0VBQWtFO0lBQ2xFLElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsK0ZBQStGO0lBQy9GLElBQVcsbUNBQW1DO1FBQzVDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLDJDQUEyQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELDBFQUEwRTtJQUMxRSxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Q0FDRjtBQUVEOztFQUVFO0FBQ0YsTUFBTSxPQUFPLDBCQUEyQixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFdkUsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDYixNQUFNLENBQVUsY0FBYyxHQUFXLDBCQUEwQixDQUFDO0lBRTNFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFF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