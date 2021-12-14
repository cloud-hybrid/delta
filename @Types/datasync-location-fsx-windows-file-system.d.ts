import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS DataSync
*/
export interface DatasyncLocationFsxWindowsFileSystemConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html#domain DatasyncLocationFsxWindowsFileSystem#domain}
    */
    readonly domain?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html#fsx_filesystem_arn DatasyncLocationFsxWindowsFileSystem#fsx_filesystem_arn}
    */
    readonly fsxFilesystemArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html#password DatasyncLocationFsxWindowsFileSystem#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html#security_group_arns DatasyncLocationFsxWindowsFileSystem#security_group_arns}
    */
    readonly securityGroupArns: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html#subdirectory DatasyncLocationFsxWindowsFileSystem#subdirectory}
    */
    readonly subdirectory?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html#tags DatasyncLocationFsxWindowsFileSystem#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html#tags_all DatasyncLocationFsxWindowsFileSystem#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html#user DatasyncLocationFsxWindowsFileSystem#user}
    */
    readonly user: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html aws_datasync_location_fsx_windows_file_system}
*/
export declare class DatasyncLocationFsxWindowsFileSystem extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html aws_datasync_location_fsx_windows_file_system} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncLocationFsxWindowsFileSystemConfig
    */
    constructor(scope: Construct, id: string, config: DatasyncLocationFsxWindowsFileSystemConfig);
    get arn(): string;
    get creationTime(): string;
    private _domain?;
    get domain(): string;
    set domain(value: string);
    resetDomain(): void;
    get domainInput(): string;
    private _fsxFilesystemArn?;
    get fsxFilesystemArn(): string;
    set fsxFilesystemArn(value: string);
    get fsxFilesystemArnInput(): string;
    get id(): string;
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string;
    private _securityGroupArns?;
    get securityGroupArns(): string[];
    set securityGroupArns(value: string[]);
    get securityGroupArnsInput(): string[];
    private _subdirectory?;
    get subdirectory(): string;
    set subdirectory(value: string);
    resetSubdirectory(): void;
    get subdirectoryInput(): string;
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
    get uri(): string;
    private _user?;
    get user(): string;
    set user(value: string);
    get userInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=datasync-location-fsx-windows-file-system.d.ts.map