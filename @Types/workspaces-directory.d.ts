import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WorkSpaces
*/
export interface WorkspacesDirectoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#directory_id WorkspacesDirectory#directory_id}
    */
    readonly directoryId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#ip_group_ids WorkspacesDirectory#ip_group_ids}
    */
    readonly ipGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#subnet_ids WorkspacesDirectory#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#tags WorkspacesDirectory#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#tags_all WorkspacesDirectory#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * self_service_permissions block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#self_service_permissions WorkspacesDirectory#self_service_permissions}
    */
    readonly selfServicePermissions?: WorkspacesDirectorySelfServicePermissions;
    /**
    * workspace_access_properties block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#workspace_access_properties WorkspacesDirectory#workspace_access_properties}
    */
    readonly workspaceAccessProperties?: WorkspacesDirectoryWorkspaceAccessProperties;
    /**
    * workspace_creation_properties block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#workspace_creation_properties WorkspacesDirectory#workspace_creation_properties}
    */
    readonly workspaceCreationProperties?: WorkspacesDirectoryWorkspaceCreationProperties;
}
export interface WorkspacesDirectorySelfServicePermissions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#change_compute_type WorkspacesDirectory#change_compute_type}
    */
    readonly changeComputeType?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#increase_volume_size WorkspacesDirectory#increase_volume_size}
    */
    readonly increaseVolumeSize?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#rebuild_workspace WorkspacesDirectory#rebuild_workspace}
    */
    readonly rebuildWorkspace?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#restart_workspace WorkspacesDirectory#restart_workspace}
    */
    readonly restartWorkspace?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#switch_running_mode WorkspacesDirectory#switch_running_mode}
    */
    readonly switchRunningMode?: boolean | cdktf.IResolvable;
}
export declare function workspacesDirectorySelfServicePermissionsToTerraform(struct?: WorkspacesDirectorySelfServicePermissionsOutputReference | WorkspacesDirectorySelfServicePermissions): any;
export declare class WorkspacesDirectorySelfServicePermissionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): WorkspacesDirectorySelfServicePermissions | undefined;
    set internalValue(value: WorkspacesDirectorySelfServicePermissions | undefined);
    private _changeComputeType?;
    get changeComputeType(): boolean | cdktf.IResolvable;
    set changeComputeType(value: boolean | cdktf.IResolvable);
    resetChangeComputeType(): void;
    get changeComputeTypeInput(): boolean | cdktf.IResolvable;
    private _increaseVolumeSize?;
    get increaseVolumeSize(): boolean | cdktf.IResolvable;
    set increaseVolumeSize(value: boolean | cdktf.IResolvable);
    resetIncreaseVolumeSize(): void;
    get increaseVolumeSizeInput(): boolean | cdktf.IResolvable;
    private _rebuildWorkspace?;
    get rebuildWorkspace(): boolean | cdktf.IResolvable;
    set rebuildWorkspace(value: boolean | cdktf.IResolvable);
    resetRebuildWorkspace(): void;
    get rebuildWorkspaceInput(): boolean | cdktf.IResolvable;
    private _restartWorkspace?;
    get restartWorkspace(): boolean | cdktf.IResolvable;
    set restartWorkspace(value: boolean | cdktf.IResolvable);
    resetRestartWorkspace(): void;
    get restartWorkspaceInput(): boolean | cdktf.IResolvable;
    private _switchRunningMode?;
    get switchRunningMode(): boolean | cdktf.IResolvable;
    set switchRunningMode(value: boolean | cdktf.IResolvable);
    resetSwitchRunningMode(): void;
    get switchRunningModeInput(): boolean | cdktf.IResolvable;
}
export interface WorkspacesDirectoryWorkspaceAccessProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#device_type_android WorkspacesDirectory#device_type_android}
    */
    readonly deviceTypeAndroid?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#device_type_chromeos WorkspacesDirectory#device_type_chromeos}
    */
    readonly deviceTypeChromeos?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#device_type_ios WorkspacesDirectory#device_type_ios}
    */
    readonly deviceTypeIos?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#device_type_linux WorkspacesDirectory#device_type_linux}
    */
    readonly deviceTypeLinux?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#device_type_osx WorkspacesDirectory#device_type_osx}
    */
    readonly deviceTypeOsx?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#device_type_web WorkspacesDirectory#device_type_web}
    */
    readonly deviceTypeWeb?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#device_type_windows WorkspacesDirectory#device_type_windows}
    */
    readonly deviceTypeWindows?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#device_type_zeroclient WorkspacesDirectory#device_type_zeroclient}
    */
    readonly deviceTypeZeroclient?: string;
}
export declare function workspacesDirectoryWorkspaceAccessPropertiesToTerraform(struct?: WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference | WorkspacesDirectoryWorkspaceAccessProperties): any;
export declare class WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): WorkspacesDirectoryWorkspaceAccessProperties | undefined;
    set internalValue(value: WorkspacesDirectoryWorkspaceAccessProperties | undefined);
    private _deviceTypeAndroid?;
    get deviceTypeAndroid(): string;
    set deviceTypeAndroid(value: string);
    resetDeviceTypeAndroid(): void;
    get deviceTypeAndroidInput(): string;
    private _deviceTypeChromeos?;
    get deviceTypeChromeos(): string;
    set deviceTypeChromeos(value: string);
    resetDeviceTypeChromeos(): void;
    get deviceTypeChromeosInput(): string;
    private _deviceTypeIos?;
    get deviceTypeIos(): string;
    set deviceTypeIos(value: string);
    resetDeviceTypeIos(): void;
    get deviceTypeIosInput(): string;
    private _deviceTypeLinux?;
    get deviceTypeLinux(): string;
    set deviceTypeLinux(value: string);
    resetDeviceTypeLinux(): void;
    get deviceTypeLinuxInput(): string;
    private _deviceTypeOsx?;
    get deviceTypeOsx(): string;
    set deviceTypeOsx(value: string);
    resetDeviceTypeOsx(): void;
    get deviceTypeOsxInput(): string;
    private _deviceTypeWeb?;
    get deviceTypeWeb(): string;
    set deviceTypeWeb(value: string);
    resetDeviceTypeWeb(): void;
    get deviceTypeWebInput(): string;
    private _deviceTypeWindows?;
    get deviceTypeWindows(): string;
    set deviceTypeWindows(value: string);
    resetDeviceTypeWindows(): void;
    get deviceTypeWindowsInput(): string;
    private _deviceTypeZeroclient?;
    get deviceTypeZeroclient(): string;
    set deviceTypeZeroclient(value: string);
    resetDeviceTypeZeroclient(): void;
    get deviceTypeZeroclientInput(): string;
}
export interface WorkspacesDirectoryWorkspaceCreationProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#custom_security_group_id WorkspacesDirectory#custom_security_group_id}
    */
    readonly customSecurityGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#default_ou WorkspacesDirectory#default_ou}
    */
    readonly defaultOu?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#enable_internet_access WorkspacesDirectory#enable_internet_access}
    */
    readonly enableInternetAccess?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#enable_maintenance_mode WorkspacesDirectory#enable_maintenance_mode}
    */
    readonly enableMaintenanceMode?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#user_enabled_as_local_administrator WorkspacesDirectory#user_enabled_as_local_administrator}
    */
    readonly userEnabledAsLocalAdministrator?: boolean | cdktf.IResolvable;
}
export declare function workspacesDirectoryWorkspaceCreationPropertiesToTerraform(struct?: WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference | WorkspacesDirectoryWorkspaceCreationProperties): any;
export declare class WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): WorkspacesDirectoryWorkspaceCreationProperties | undefined;
    set internalValue(value: WorkspacesDirectoryWorkspaceCreationProperties | undefined);
    private _customSecurityGroupId?;
    get customSecurityGroupId(): string;
    set customSecurityGroupId(value: string);
    resetCustomSecurityGroupId(): void;
    get customSecurityGroupIdInput(): string;
    private _defaultOu?;
    get defaultOu(): string;
    set defaultOu(value: string);
    resetDefaultOu(): void;
    get defaultOuInput(): string;
    private _enableInternetAccess?;
    get enableInternetAccess(): boolean | cdktf.IResolvable;
    set enableInternetAccess(value: boolean | cdktf.IResolvable);
    resetEnableInternetAccess(): void;
    get enableInternetAccessInput(): boolean | cdktf.IResolvable;
    private _enableMaintenanceMode?;
    get enableMaintenanceMode(): boolean | cdktf.IResolvable;
    set enableMaintenanceMode(value: boolean | cdktf.IResolvable);
    resetEnableMaintenanceMode(): void;
    get enableMaintenanceModeInput(): boolean | cdktf.IResolvable;
    private _userEnabledAsLocalAdministrator?;
    get userEnabledAsLocalAdministrator(): boolean | cdktf.IResolvable;
    set userEnabledAsLocalAdministrator(value: boolean | cdktf.IResolvable);
    resetUserEnabledAsLocalAdministrator(): void;
    get userEnabledAsLocalAdministratorInput(): boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html aws_workspaces_directory}
*/
export declare class WorkspacesDirectory extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html aws_workspaces_directory} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkspacesDirectoryConfig
    */
    constructor(scope: Construct, id: string, config: WorkspacesDirectoryConfig);
    get alias(): string;
    get customerUserName(): string;
    private _directoryId?;
    get directoryId(): string;
    set directoryId(value: string);
    get directoryIdInput(): string;
    get directoryName(): string;
    get directoryType(): string;
    get dnsIpAddresses(): string[];
    get iamRoleId(): string;
    get id(): string;
    private _ipGroupIds?;
    get ipGroupIds(): string[];
    set ipGroupIds(value: string[]);
    resetIpGroupIds(): void;
    get ipGroupIdsInput(): string[];
    get registrationCode(): string;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    resetSubnetIds(): void;
    get subnetIdsInput(): string[];
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
    get workspaceSecurityGroupId(): string;
    private _selfServicePermissions;
    get selfServicePermissions(): WorkspacesDirectorySelfServicePermissionsOutputReference;
    putSelfServicePermissions(value: WorkspacesDirectorySelfServicePermissions): void;
    resetSelfServicePermissions(): void;
    get selfServicePermissionsInput(): WorkspacesDirectorySelfServicePermissions;
    private _workspaceAccessProperties;
    get workspaceAccessProperties(): WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference;
    putWorkspaceAccessProperties(value: WorkspacesDirectoryWorkspaceAccessProperties): void;
    resetWorkspaceAccessProperties(): void;
    get workspaceAccessPropertiesInput(): WorkspacesDirectoryWorkspaceAccessProperties;
    private _workspaceCreationProperties;
    get workspaceCreationProperties(): WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference;
    putWorkspaceCreationProperties(value: WorkspacesDirectoryWorkspaceCreationProperties): void;
    resetWorkspaceCreationProperties(): void;
    get workspaceCreationPropertiesInput(): WorkspacesDirectoryWorkspaceCreationProperties;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=workspaces-directory.d.ts.map