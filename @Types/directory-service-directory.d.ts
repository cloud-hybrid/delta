import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Directory Service
*/
export interface DirectoryServiceDirectoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#alias DirectoryServiceDirectory#alias}
    */
    readonly alias?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#description DirectoryServiceDirectory#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#edition DirectoryServiceDirectory#edition}
    */
    readonly edition?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#enable_sso DirectoryServiceDirectory#enable_sso}
    */
    readonly enableSso?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#name DirectoryServiceDirectory#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#password DirectoryServiceDirectory#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#short_name DirectoryServiceDirectory#short_name}
    */
    readonly shortName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#size DirectoryServiceDirectory#size}
    */
    readonly size?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#tags DirectoryServiceDirectory#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#tags_all DirectoryServiceDirectory#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#type DirectoryServiceDirectory#type}
    */
    readonly type?: string;
    /**
    * connect_settings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#connect_settings DirectoryServiceDirectory#connect_settings}
    */
    readonly connectSettings?: DirectoryServiceDirectoryConnectSettings;
    /**
    * vpc_settings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#vpc_settings DirectoryServiceDirectory#vpc_settings}
    */
    readonly vpcSettings?: DirectoryServiceDirectoryVpcSettings;
}
export interface DirectoryServiceDirectoryConnectSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#customer_dns_ips DirectoryServiceDirectory#customer_dns_ips}
    */
    readonly customerDnsIps: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#customer_username DirectoryServiceDirectory#customer_username}
    */
    readonly customerUsername: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#subnet_ids DirectoryServiceDirectory#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#vpc_id DirectoryServiceDirectory#vpc_id}
    */
    readonly vpcId: string;
}
export declare function directoryServiceDirectoryConnectSettingsToTerraform(struct?: DirectoryServiceDirectoryConnectSettingsOutputReference | DirectoryServiceDirectoryConnectSettings): any;
export declare class DirectoryServiceDirectoryConnectSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DirectoryServiceDirectoryConnectSettings | undefined;
    set internalValue(value: DirectoryServiceDirectoryConnectSettings | undefined);
    private _customerDnsIps?;
    get customerDnsIps(): string[];
    set customerDnsIps(value: string[]);
    get customerDnsIpsInput(): string[];
    private _customerUsername?;
    get customerUsername(): string;
    set customerUsername(value: string);
    get customerUsernameInput(): string;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[];
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
}
export interface DirectoryServiceDirectoryVpcSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#subnet_ids DirectoryServiceDirectory#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#vpc_id DirectoryServiceDirectory#vpc_id}
    */
    readonly vpcId: string;
}
export declare function directoryServiceDirectoryVpcSettingsToTerraform(struct?: DirectoryServiceDirectoryVpcSettingsOutputReference | DirectoryServiceDirectoryVpcSettings): any;
export declare class DirectoryServiceDirectoryVpcSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DirectoryServiceDirectoryVpcSettings | undefined;
    set internalValue(value: DirectoryServiceDirectoryVpcSettings | undefined);
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[];
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html aws_directory_service_directory}
*/
export declare class DirectoryServiceDirectory extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html aws_directory_service_directory} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DirectoryServiceDirectoryConfig
    */
    constructor(scope: Construct, id: string, config: DirectoryServiceDirectoryConfig);
    get accessUrl(): string;
    private _alias?;
    get alias(): string;
    set alias(value: string);
    resetAlias(): void;
    get aliasInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get dnsIpAddresses(): string[];
    private _edition?;
    get edition(): string;
    set edition(value: string);
    resetEdition(): void;
    get editionInput(): string;
    private _enableSso?;
    get enableSso(): boolean | cdktf.IResolvable;
    set enableSso(value: boolean | cdktf.IResolvable);
    resetEnableSso(): void;
    get enableSsoInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string;
    get securityGroupId(): string;
    private _shortName?;
    get shortName(): string;
    set shortName(value: string);
    resetShortName(): void;
    get shortNameInput(): string;
    private _size?;
    get size(): string;
    set size(value: string);
    resetSize(): void;
    get sizeInput(): string;
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
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
    private _connectSettings;
    get connectSettings(): DirectoryServiceDirectoryConnectSettingsOutputReference;
    putConnectSettings(value: DirectoryServiceDirectoryConnectSettings): void;
    resetConnectSettings(): void;
    get connectSettingsInput(): DirectoryServiceDirectoryConnectSettings;
    private _vpcSettings;
    get vpcSettings(): DirectoryServiceDirectoryVpcSettingsOutputReference;
    putVpcSettings(value: DirectoryServiceDirectoryVpcSettings): void;
    resetVpcSettings(): void;
    get vpcSettingsInput(): DirectoryServiceDirectoryVpcSettings;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=directory-service-directory.d.ts.map