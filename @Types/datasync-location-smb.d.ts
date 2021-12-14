import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS DataSync
*/
export interface DatasyncLocationSmbConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html#agent_arns DatasyncLocationSmb#agent_arns}
    */
    readonly agentArns: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html#domain DatasyncLocationSmb#domain}
    */
    readonly domain?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html#password DatasyncLocationSmb#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html#server_hostname DatasyncLocationSmb#server_hostname}
    */
    readonly serverHostname: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html#subdirectory DatasyncLocationSmb#subdirectory}
    */
    readonly subdirectory: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html#tags DatasyncLocationSmb#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html#tags_all DatasyncLocationSmb#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html#user DatasyncLocationSmb#user}
    */
    readonly user: string;
    /**
    * mount_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html#mount_options DatasyncLocationSmb#mount_options}
    */
    readonly mountOptions?: DatasyncLocationSmbMountOptions;
}
export interface DatasyncLocationSmbMountOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html#version DatasyncLocationSmb#version}
    */
    readonly version?: string;
}
export declare function datasyncLocationSmbMountOptionsToTerraform(struct?: DatasyncLocationSmbMountOptionsOutputReference | DatasyncLocationSmbMountOptions): any;
export declare class DatasyncLocationSmbMountOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DatasyncLocationSmbMountOptions | undefined;
    set internalValue(value: DatasyncLocationSmbMountOptions | undefined);
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html aws_datasync_location_smb}
*/
export declare class DatasyncLocationSmb extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html aws_datasync_location_smb} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncLocationSmbConfig
    */
    constructor(scope: Construct, id: string, config: DatasyncLocationSmbConfig);
    private _agentArns?;
    get agentArns(): string[];
    set agentArns(value: string[]);
    get agentArnsInput(): string[];
    get arn(): string;
    private _domain?;
    get domain(): string;
    set domain(value: string);
    resetDomain(): void;
    get domainInput(): string;
    get id(): string;
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string;
    private _serverHostname?;
    get serverHostname(): string;
    set serverHostname(value: string);
    get serverHostnameInput(): string;
    private _subdirectory?;
    get subdirectory(): string;
    set subdirectory(value: string);
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
    private _mountOptions;
    get mountOptions(): DatasyncLocationSmbMountOptionsOutputReference;
    putMountOptions(value: DatasyncLocationSmbMountOptions): void;
    resetMountOptions(): void;
    get mountOptionsInput(): DatasyncLocationSmbMountOptions;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=datasync-location-smb.d.ts.map