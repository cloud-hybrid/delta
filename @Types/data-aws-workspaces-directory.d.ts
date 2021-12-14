import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WorkSpaces
*/
export interface DataAwsWorkspacesDirectoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_directory.html#directory_id DataAwsWorkspacesDirectory#directory_id}
    */
    readonly directoryId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_directory.html#tags DataAwsWorkspacesDirectory#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare class DataAwsWorkspacesDirectorySelfServicePermissions extends cdktf.ComplexComputedList {
    get changeComputeType(): any;
    get increaseVolumeSize(): any;
    get rebuildWorkspace(): any;
    get restartWorkspace(): any;
    get switchRunningMode(): any;
}
export declare class DataAwsWorkspacesDirectoryWorkspaceAccessProperties extends cdktf.ComplexComputedList {
    get deviceTypeAndroid(): string;
    get deviceTypeChromeos(): string;
    get deviceTypeIos(): string;
    get deviceTypeLinux(): string;
    get deviceTypeOsx(): string;
    get deviceTypeWeb(): string;
    get deviceTypeWindows(): string;
    get deviceTypeZeroclient(): string;
}
export declare class DataAwsWorkspacesDirectoryWorkspaceCreationProperties extends cdktf.ComplexComputedList {
    get customSecurityGroupId(): string;
    get defaultOu(): string;
    get enableInternetAccess(): any;
    get enableMaintenanceMode(): any;
    get userEnabledAsLocalAdministrator(): any;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/workspaces_directory.html aws_workspaces_directory}
*/
export declare class DataAwsWorkspacesDirectory extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/workspaces_directory.html aws_workspaces_directory} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsWorkspacesDirectoryConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsWorkspacesDirectoryConfig);
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
    get ipGroupIds(): string[];
    get registrationCode(): string;
    selfServicePermissions(index: string): DataAwsWorkspacesDirectorySelfServicePermissions;
    get subnetIds(): string[];
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
    workspaceAccessProperties(index: string): DataAwsWorkspacesDirectoryWorkspaceAccessProperties;
    workspaceCreationProperties(index: string): DataAwsWorkspacesDirectoryWorkspaceCreationProperties;
    get workspaceSecurityGroupId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-workspaces-directory.d.ts.map