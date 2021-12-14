import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS DataSync
*/
export interface DatasyncLocationNfsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#server_hostname DatasyncLocationNfs#server_hostname}
    */
    readonly serverHostname: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#subdirectory DatasyncLocationNfs#subdirectory}
    */
    readonly subdirectory: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#tags DatasyncLocationNfs#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#tags_all DatasyncLocationNfs#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * mount_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#mount_options DatasyncLocationNfs#mount_options}
    */
    readonly mountOptions?: DatasyncLocationNfsMountOptions;
    /**
    * on_prem_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#on_prem_config DatasyncLocationNfs#on_prem_config}
    */
    readonly onPremConfig: DatasyncLocationNfsOnPremConfig;
}
export interface DatasyncLocationNfsMountOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#version DatasyncLocationNfs#version}
    */
    readonly version?: string;
}
export declare function datasyncLocationNfsMountOptionsToTerraform(struct?: DatasyncLocationNfsMountOptionsOutputReference | DatasyncLocationNfsMountOptions): any;
export declare class DatasyncLocationNfsMountOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DatasyncLocationNfsMountOptions | undefined;
    set internalValue(value: DatasyncLocationNfsMountOptions | undefined);
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string;
}
export interface DatasyncLocationNfsOnPremConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#agent_arns DatasyncLocationNfs#agent_arns}
    */
    readonly agentArns: string[];
}
export declare function datasyncLocationNfsOnPremConfigToTerraform(struct?: DatasyncLocationNfsOnPremConfigOutputReference | DatasyncLocationNfsOnPremConfig): any;
export declare class DatasyncLocationNfsOnPremConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DatasyncLocationNfsOnPremConfig | undefined;
    set internalValue(value: DatasyncLocationNfsOnPremConfig | undefined);
    private _agentArns?;
    get agentArns(): string[];
    set agentArns(value: string[]);
    get agentArnsInput(): string[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html aws_datasync_location_nfs}
*/
export declare class DatasyncLocationNfs extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html aws_datasync_location_nfs} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncLocationNfsConfig
    */
    constructor(scope: Construct, id: string, config: DatasyncLocationNfsConfig);
    get arn(): string;
    get id(): string;
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
    private _mountOptions;
    get mountOptions(): DatasyncLocationNfsMountOptionsOutputReference;
    putMountOptions(value: DatasyncLocationNfsMountOptions): void;
    resetMountOptions(): void;
    get mountOptionsInput(): DatasyncLocationNfsMountOptions;
    private _onPremConfig;
    get onPremConfig(): DatasyncLocationNfsOnPremConfigOutputReference;
    putOnPremConfig(value: DatasyncLocationNfsOnPremConfig): void;
    get onPremConfigInput(): DatasyncLocationNfsOnPremConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=datasync-location-nfs.d.ts.map