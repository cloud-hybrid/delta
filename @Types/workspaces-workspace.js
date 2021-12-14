// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function workspacesWorkspaceTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        delete: cdktf.stringToTerraform(struct.delete),
        update: cdktf.stringToTerraform(struct.update),
    };
}
export class WorkspacesWorkspaceTimeoutsOutputReference extends cdktf.ComplexObject {
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
        if (this._update) {
            hasAnyValues = true;
            internalValueResult.update = this._update;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._create = undefined;
            this._delete = undefined;
            this._update = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._create = value.create;
            this._delete = value.delete;
            this._update = value.update;
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
    // update - computed: false, optional: true, required: false
    _update;
    get update() {
        return this.getStringAttribute('update');
    }
    set update(value) {
        this._update = value;
    }
    resetUpdate() {
        this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get updateInput() {
        return this._update;
    }
}
export function workspacesWorkspaceWorkspacePropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        compute_type_name: cdktf.stringToTerraform(struct.computeTypeName),
        root_volume_size_gib: cdktf.numberToTerraform(struct.rootVolumeSizeGib),
        running_mode: cdktf.stringToTerraform(struct.runningMode),
        running_mode_auto_stop_timeout_in_minutes: cdktf.numberToTerraform(struct.runningModeAutoStopTimeoutInMinutes),
        user_volume_size_gib: cdktf.numberToTerraform(struct.userVolumeSizeGib),
    };
}
export class WorkspacesWorkspaceWorkspacePropertiesOutputReference extends cdktf.ComplexObject {
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
        if (this._computeTypeName) {
            hasAnyValues = true;
            internalValueResult.computeTypeName = this._computeTypeName;
        }
        if (this._rootVolumeSizeGib) {
            hasAnyValues = true;
            internalValueResult.rootVolumeSizeGib = this._rootVolumeSizeGib;
        }
        if (this._runningMode) {
            hasAnyValues = true;
            internalValueResult.runningMode = this._runningMode;
        }
        if (this._runningModeAutoStopTimeoutInMinutes) {
            hasAnyValues = true;
            internalValueResult.runningModeAutoStopTimeoutInMinutes = this._runningModeAutoStopTimeoutInMinutes;
        }
        if (this._userVolumeSizeGib) {
            hasAnyValues = true;
            internalValueResult.userVolumeSizeGib = this._userVolumeSizeGib;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._computeTypeName = undefined;
            this._rootVolumeSizeGib = undefined;
            this._runningMode = undefined;
            this._runningModeAutoStopTimeoutInMinutes = undefined;
            this._userVolumeSizeGib = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._computeTypeName = value.computeTypeName;
            this._rootVolumeSizeGib = value.rootVolumeSizeGib;
            this._runningMode = value.runningMode;
            this._runningModeAutoStopTimeoutInMinutes = value.runningModeAutoStopTimeoutInMinutes;
            this._userVolumeSizeGib = value.userVolumeSizeGib;
        }
    }
    // compute_type_name - computed: false, optional: true, required: false
    _computeTypeName;
    get computeTypeName() {
        return this.getStringAttribute('compute_type_name');
    }
    set computeTypeName(value) {
        this._computeTypeName = value;
    }
    resetComputeTypeName() {
        this._computeTypeName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get computeTypeNameInput() {
        return this._computeTypeName;
    }
    // root_volume_size_gib - computed: false, optional: true, required: false
    _rootVolumeSizeGib;
    get rootVolumeSizeGib() {
        return this.getNumberAttribute('root_volume_size_gib');
    }
    set rootVolumeSizeGib(value) {
        this._rootVolumeSizeGib = value;
    }
    resetRootVolumeSizeGib() {
        this._rootVolumeSizeGib = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rootVolumeSizeGibInput() {
        return this._rootVolumeSizeGib;
    }
    // running_mode - computed: false, optional: true, required: false
    _runningMode;
    get runningMode() {
        return this.getStringAttribute('running_mode');
    }
    set runningMode(value) {
        this._runningMode = value;
    }
    resetRunningMode() {
        this._runningMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get runningModeInput() {
        return this._runningMode;
    }
    // running_mode_auto_stop_timeout_in_minutes - computed: true, optional: true, required: false
    _runningModeAutoStopTimeoutInMinutes;
    get runningModeAutoStopTimeoutInMinutes() {
        return this.getNumberAttribute('running_mode_auto_stop_timeout_in_minutes');
    }
    set runningModeAutoStopTimeoutInMinutes(value) {
        this._runningModeAutoStopTimeoutInMinutes = value;
    }
    resetRunningModeAutoStopTimeoutInMinutes() {
        this._runningModeAutoStopTimeoutInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get runningModeAutoStopTimeoutInMinutesInput() {
        return this._runningModeAutoStopTimeoutInMinutes;
    }
    // user_volume_size_gib - computed: false, optional: true, required: false
    _userVolumeSizeGib;
    get userVolumeSizeGib() {
        return this.getNumberAttribute('user_volume_size_gib');
    }
    set userVolumeSizeGib(value) {
        this._userVolumeSizeGib = value;
    }
    resetUserVolumeSizeGib() {
        this._userVolumeSizeGib = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userVolumeSizeGibInput() {
        return this._userVolumeSizeGib;
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html aws_workspaces_workspace}
*/
export class WorkspacesWorkspace extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_workspaces_workspace";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html aws_workspaces_workspace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkspacesWorkspaceConfig
    */
    constructor(scope, id, config) {
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
        this._bundleId = config.bundleId;
        this._directoryId = config.directoryId;
        this._rootVolumeEncryptionEnabled = config.rootVolumeEncryptionEnabled;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._userName = config.userName;
        this._userVolumeEncryptionEnabled = config.userVolumeEncryptionEnabled;
        this._volumeEncryptionKey = config.volumeEncryptionKey;
        this._timeouts.internalValue = config.timeouts;
        this._workspaceProperties.internalValue = config.workspaceProperties;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // bundle_id - computed: false, optional: false, required: true
    _bundleId;
    get bundleId() {
        return this.getStringAttribute('bundle_id');
    }
    set bundleId(value) {
        this._bundleId = value;
    }
    // Temporarily expose input value. Use with caution.
    get bundleIdInput() {
        return this._bundleId;
    }
    // computer_name - computed: true, optional: false, required: false
    get computerName() {
        return this.getStringAttribute('computer_name');
    }
    // directory_id - computed: false, optional: false, required: true
    _directoryId;
    get directoryId() {
        return this.getStringAttribute('directory_id');
    }
    set directoryId(value) {
        this._directoryId = value;
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
    // root_volume_encryption_enabled - computed: false, optional: true, required: false
    _rootVolumeEncryptionEnabled;
    get rootVolumeEncryptionEnabled() {
        return this.getBooleanAttribute('root_volume_encryption_enabled');
    }
    set rootVolumeEncryptionEnabled(value) {
        this._rootVolumeEncryptionEnabled = value;
    }
    resetRootVolumeEncryptionEnabled() {
        this._rootVolumeEncryptionEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rootVolumeEncryptionEnabledInput() {
        return this._rootVolumeEncryptionEnabled;
    }
    // state - computed: true, optional: false, required: false
    get state() {
        return this.getStringAttribute('state');
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
    // user_name - computed: false, optional: false, required: true
    _userName;
    get userName() {
        return this.getStringAttribute('user_name');
    }
    set userName(value) {
        this._userName = value;
    }
    // Temporarily expose input value. Use with caution.
    get userNameInput() {
        return this._userName;
    }
    // user_volume_encryption_enabled - computed: false, optional: true, required: false
    _userVolumeEncryptionEnabled;
    get userVolumeEncryptionEnabled() {
        return this.getBooleanAttribute('user_volume_encryption_enabled');
    }
    set userVolumeEncryptionEnabled(value) {
        this._userVolumeEncryptionEnabled = value;
    }
    resetUserVolumeEncryptionEnabled() {
        this._userVolumeEncryptionEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userVolumeEncryptionEnabledInput() {
        return this._userVolumeEncryptionEnabled;
    }
    // volume_encryption_key - computed: false, optional: true, required: false
    _volumeEncryptionKey;
    get volumeEncryptionKey() {
        return this.getStringAttribute('volume_encryption_key');
    }
    set volumeEncryptionKey(value) {
        this._volumeEncryptionKey = value;
    }
    resetVolumeEncryptionKey() {
        this._volumeEncryptionKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get volumeEncryptionKeyInput() {
        return this._volumeEncryptionKey;
    }
    // timeouts - computed: false, optional: true, required: false
    _timeouts = new WorkspacesWorkspaceTimeoutsOutputReference(this, "timeouts", true);
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
    // workspace_properties - computed: false, optional: true, required: false
    _workspaceProperties = new WorkspacesWorkspaceWorkspacePropertiesOutputReference(this, "workspace_properties", true);
    get workspaceProperties() {
        return this._workspaceProperties;
    }
    putWorkspaceProperties(value) {
        this._workspaceProperties.internalValue = value;
    }
    resetWorkspaceProperties() {
        this._workspaceProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get workspacePropertiesInput() {
        return this._workspaceProperties.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            bundle_id: cdktf.stringToTerraform(this._bundleId),
            directory_id: cdktf.stringToTerraform(this._directoryId),
            root_volume_encryption_enabled: cdktf.booleanToTerraform(this._rootVolumeEncryptionEnabled),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            user_name: cdktf.stringToTerraform(this._userName),
            user_volume_encryption_enabled: cdktf.booleanToTerraform(this._userVolumeEncryptionEnabled),
            volume_encryption_key: cdktf.stringToTerraform(this._volumeEncryptionKey),
            timeouts: workspacesWorkspaceTimeoutsToTerraform(this._timeouts.internalValue),
            workspace_properties: workspacesWorkspaceWorkspacePropertiesToTerraform(this._workspaceProperties.internalValue),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlcy13b3Jrc3BhY2UuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbIndvcmtzcGFjZXMtd29ya3NwYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQWtFL0IsTUFBTSxVQUFVLHNDQUFzQyxDQUFDLE1BQWlGO0lBQ3RJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO1FBQy9DLE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztRQUMvQyxNQUFNLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7S0FDaEQsQ0FBQTtBQUNILENBQUM7QUFFRCxNQUFNLE9BQU8sMENBQTJDLFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFDekUsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUU5Qjs7OztNQUlFO0lBQ0YsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIs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