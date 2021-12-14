import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WorkSpaces
*/
export interface WorkspacesWorkspaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#bundle_id WorkspacesWorkspace#bundle_id}
    */
    readonly bundleId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#directory_id WorkspacesWorkspace#directory_id}
    */
    readonly directoryId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#root_volume_encryption_enabled WorkspacesWorkspace#root_volume_encryption_enabled}
    */
    readonly rootVolumeEncryptionEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#tags WorkspacesWorkspace#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#tags_all WorkspacesWorkspace#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#user_name WorkspacesWorkspace#user_name}
    */
    readonly userName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#user_volume_encryption_enabled WorkspacesWorkspace#user_volume_encryption_enabled}
    */
    readonly userVolumeEncryptionEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#volume_encryption_key WorkspacesWorkspace#volume_encryption_key}
    */
    readonly volumeEncryptionKey?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#timeouts WorkspacesWorkspace#timeouts}
    */
    readonly timeouts?: WorkspacesWorkspaceTimeouts;
    /**
    * workspace_properties block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#workspace_properties WorkspacesWorkspace#workspace_properties}
    */
    readonly workspaceProperties?: WorkspacesWorkspaceWorkspaceProperties;
}
export interface WorkspacesWorkspaceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#create WorkspacesWorkspace#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#delete WorkspacesWorkspace#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#update WorkspacesWorkspace#update}
    */
    readonly update?: string;
}
export declare function workspacesWorkspaceTimeoutsToTerraform(struct?: WorkspacesWorkspaceTimeoutsOutputReference | WorkspacesWorkspaceTimeouts): any;
export declare class WorkspacesWorkspaceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): WorkspacesWorkspaceTimeouts | undefined;
    set internalValue(value: WorkspacesWorkspaceTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
export interface WorkspacesWorkspaceWorkspaceProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#compute_type_name WorkspacesWorkspace#compute_type_name}
    */
    readonly computeTypeName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#root_volume_size_gib WorkspacesWorkspace#root_volume_size_gib}
    */
    readonly rootVolumeSizeGib?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#running_mode WorkspacesWorkspace#running_mode}
    */
    readonly runningMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#running_mode_auto_stop_timeout_in_minutes WorkspacesWorkspace#running_mode_auto_stop_timeout_in_minutes}
    */
    readonly runningModeAutoStopTimeoutInMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#user_volume_size_gib WorkspacesWorkspace#user_volume_size_gib}
    */
    readonly userVolumeSizeGib?: number;
}
export declare function workspacesWorkspaceWorkspacePropertiesToTerraform(struct?: WorkspacesWorkspaceWorkspacePropertiesOutputReference | WorkspacesWorkspaceWorkspaceProperties): any;
export declare class WorkspacesWorkspaceWorkspacePropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): WorkspacesWorkspaceWorkspaceProperties | undefined;
    set internalValue(value: WorkspacesWorkspaceWorkspaceProperties | undefined);
    private _computeTypeName?;
    get computeTypeName(): string;
    set computeTypeName(value: string);
    resetComputeTypeName(): void;
    get computeTypeNameInput(): string;
    private _rootVolumeSizeGib?;
    get rootVolumeSizeGib(): number;
    set rootVolumeSizeGib(value: number);
    resetRootVolumeSizeGib(): void;
    get rootVolumeSizeGibInput(): number;
    private _runningMode?;
    get runningMode(): string;
    set runningMode(value: string);
    resetRunningMode(): void;
    get runningModeInput(): string;
    private _runningModeAutoStopTimeoutInMinutes?;
    get runningModeAutoStopTimeoutInMinutes(): number;
    set runningModeAutoStopTimeoutInMinutes(value: number);
    resetRunningModeAutoStopTimeoutInMinutes(): void;
    get runningModeAutoStopTimeoutInMinutesInput(): number;
    private _userVolumeSizeGib?;
    get userVolumeSizeGib(): number;
    set userVolumeSizeGib(value: number);
    resetUserVolumeSizeGib(): void;
    get userVolumeSizeGibInput(): number;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html aws_workspaces_workspace}
*/
export declare class WorkspacesWorkspace extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html aws_workspaces_workspace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkspacesWorkspaceConfig
    */
    constructor(scope: Construct, id: string, config: WorkspacesWorkspaceConfig);
    private _bundleId?;
    get bundleId(): string;
    set bundleId(value: string);
    get bundleIdInput(): string;
    get computerName(): string;
    private _directoryId?;
    get directoryId(): string;
    set directoryId(value: string);
    get directoryIdInput(): string;
    get id(): string;
    get ipAddress(): string;
    private _rootVolumeEncryptionEnabled?;
    get rootVolumeEncryptionEnabled(): boolean | cdktf.IResolvable;
    set rootVolumeEncryptionEnabled(value: boolean | cdktf.IResolvable);
    resetRootVolumeEncryptionEnabled(): void;
    get rootVolumeEncryptionEnabledInput(): boolean | cdktf.IResolvable;
    get state(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tagsAll(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTagsAll(): void;
    get tagsAllInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _userName?;
    get userName(): string;
    set userName(value: string);
    get userNameInput(): string;
    private _userVolumeEncryptionEnabled?;
    get userVolumeEncryptionEnabled(): boolean | cdktf.IResolvable;
    set userVolumeEncryptionEnabled(value: boolean | cdktf.IResolvable);
    resetUserVolumeEncryptionEnabled(): void;
    get userVolumeEncryptionEnabledInput(): boolean | cdktf.IResolvable;
    private _volumeEncryptionKey?;
    get volumeEncryptionKey(): string;
    set volumeEncryptionKey(value: string);
    resetVolumeEncryptionKey(): void;
    get volumeEncryptionKeyInput(): string;
    private _timeouts;
    get timeouts(): WorkspacesWorkspaceTimeoutsOutputReference;
    putTimeouts(value: WorkspacesWorkspaceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): WorkspacesWorkspaceTimeouts;
    private _workspaceProperties;
    get workspaceProperties(): WorkspacesWorkspaceWorkspacePropertiesOutputReference;
    putWorkspaceProperties(value: WorkspacesWorkspaceWorkspaceProperties): void;
    resetWorkspaceProperties(): void;
    get workspacePropertiesInput(): WorkspacesWorkspaceWorkspaceProperties;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=workspaces-workspace.d.ts.map