import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WorkSpaces
*/
export interface DataAwsWorkspacesWorkspaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace.html#directory_id DataAwsWorkspacesWorkspace#directory_id}
    */
    readonly directoryId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace.html#tags DataAwsWorkspacesWorkspace#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace.html#user_name DataAwsWorkspacesWorkspace#user_name}
    */
    readonly userName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace.html#workspace_id DataAwsWorkspacesWorkspace#workspace_id}
    */
    readonly workspaceId?: string;
}
export declare class DataAwsWorkspacesWorkspaceWorkspaceProperties extends cdktf.ComplexComputedList {
    get computeTypeName(): string;
    get rootVolumeSizeGib(): number;
    get runningMode(): string;
    get runningModeAutoStopTimeoutInMinutes(): number;
    get userVolumeSizeGib(): number;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace.html aws_workspaces_workspace}
*/
export declare class DataAwsWorkspacesWorkspace extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace.html aws_workspaces_workspace} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsWorkspacesWorkspaceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsWorkspacesWorkspaceConfig);
    get bundleId(): string;
    get computerName(): string;
    private _directoryId?;
    get directoryId(): string;
    set directoryId(value: string);
    resetDirectoryId(): void;
    get directoryIdInput(): string;
    get id(): string;
    get ipAddress(): string;
    get rootVolumeEncryptionEnabled(): any;
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
    private _userName?;
    get userName(): string;
    set userName(value: string);
    resetUserName(): void;
    get userNameInput(): string;
    get userVolumeEncryptionEnabled(): any;
    get volumeEncryptionKey(): string;
    private _workspaceId?;
    get workspaceId(): string;
    set workspaceId(value: string);
    resetWorkspaceId(): void;
    get workspaceIdInput(): string;
    workspaceProperties(index: string): DataAwsWorkspacesWorkspaceWorkspaceProperties;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-workspaces-workspace.d.ts.map