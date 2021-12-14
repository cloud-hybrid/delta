import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS File System FSx
*/
export interface FsxOntapStorageVirtualMachineConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#file_system_id FsxOntapStorageVirtualMachine#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#name FsxOntapStorageVirtualMachine#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#root_volume_security_style FsxOntapStorageVirtualMachine#root_volume_security_style}
    */
    readonly rootVolumeSecurityStyle?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#svm_admin_password FsxOntapStorageVirtualMachine#svm_admin_password}
    */
    readonly svmAdminPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#tags FsxOntapStorageVirtualMachine#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#tags_all FsxOntapStorageVirtualMachine#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * active_directory_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#active_directory_configuration FsxOntapStorageVirtualMachine#active_directory_configuration}
    */
    readonly activeDirectoryConfiguration?: FsxOntapStorageVirtualMachineActiveDirectoryConfiguration;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#timeouts FsxOntapStorageVirtualMachine#timeouts}
    */
    readonly timeouts?: FsxOntapStorageVirtualMachineTimeouts;
}
export declare class FsxOntapStorageVirtualMachineEndpointsIscsi extends cdktf.ComplexComputedList {
    get dnsName(): string;
    get ipAddresses(): string[];
}
export declare class FsxOntapStorageVirtualMachineEndpointsManagement extends cdktf.ComplexComputedList {
    get dnsName(): string;
    get ipAddresses(): string[];
}
export declare class FsxOntapStorageVirtualMachineEndpointsNfs extends cdktf.ComplexComputedList {
    get dnsName(): string;
    get ipAddresses(): string[];
}
export declare class FsxOntapStorageVirtualMachineEndpointsSmb extends cdktf.ComplexComputedList {
    get dnsName(): string;
    get ipAddresses(): string[];
}
export declare class FsxOntapStorageVirtualMachineEndpoints extends cdktf.ComplexComputedList {
    get iscsi(): any;
    get management(): any;
    get nfs(): any;
    get smb(): any;
}
export interface FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#dns_ips FsxOntapStorageVirtualMachine#dns_ips}
    */
    readonly dnsIps: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#domain_name FsxOntapStorageVirtualMachine#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#file_system_administrators_group FsxOntapStorageVirtualMachine#file_system_administrators_group}
    */
    readonly fileSystemAdministratorsGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#organizational_unit_distinguidshed_name FsxOntapStorageVirtualMachine#organizational_unit_distinguidshed_name}
    */
    readonly organizationalUnitDistinguidshedName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#password FsxOntapStorageVirtualMachine#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#username FsxOntapStorageVirtualMachine#username}
    */
    readonly username: string;
}
export declare function fsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationToTerraform(struct?: FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference | FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration): any;
export declare class FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration | undefined;
    set internalValue(value: FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration | undefined);
    private _dnsIps?;
    get dnsIps(): string[];
    set dnsIps(value: string[]);
    get dnsIpsInput(): string[];
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    private _fileSystemAdministratorsGroup?;
    get fileSystemAdministratorsGroup(): string;
    set fileSystemAdministratorsGroup(value: string);
    resetFileSystemAdministratorsGroup(): void;
    get fileSystemAdministratorsGroupInput(): string;
    private _organizationalUnitDistinguidshedName?;
    get organizationalUnitDistinguidshedName(): string;
    set organizationalUnitDistinguidshedName(value: string);
    resetOrganizationalUnitDistinguidshedName(): void;
    get organizationalUnitDistinguidshedNameInput(): string;
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string;
}
export interface FsxOntapStorageVirtualMachineActiveDirectoryConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#netbios_name FsxOntapStorageVirtualMachine#netbios_name}
    */
    readonly netbiosName?: string;
    /**
    * self_managed_active_directory_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#self_managed_active_directory_configuration FsxOntapStorageVirtualMachine#self_managed_active_directory_configuration}
    */
    readonly selfManagedActiveDirectoryConfiguration?: FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration;
}
export declare function fsxOntapStorageVirtualMachineActiveDirectoryConfigurationToTerraform(struct?: FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference | FsxOntapStorageVirtualMachineActiveDirectoryConfiguration): any;
export declare class FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): FsxOntapStorageVirtualMachineActiveDirectoryConfiguration | undefined;
    set internalValue(value: FsxOntapStorageVirtualMachineActiveDirectoryConfiguration | undefined);
    private _netbiosName?;
    get netbiosName(): string;
    set netbiosName(value: string);
    resetNetbiosName(): void;
    get netbiosNameInput(): string;
    private _selfManagedActiveDirectoryConfiguration;
    get selfManagedActiveDirectoryConfiguration(): FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference;
    putSelfManagedActiveDirectoryConfiguration(value: FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration): void;
    resetSelfManagedActiveDirectoryConfiguration(): void;
    get selfManagedActiveDirectoryConfigurationInput(): FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration;
}
export interface FsxOntapStorageVirtualMachineTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#create FsxOntapStorageVirtualMachine#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#delete FsxOntapStorageVirtualMachine#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#update FsxOntapStorageVirtualMachine#update}
    */
    readonly update?: string;
}
export declare function fsxOntapStorageVirtualMachineTimeoutsToTerraform(struct?: FsxOntapStorageVirtualMachineTimeoutsOutputReference | FsxOntapStorageVirtualMachineTimeouts): any;
export declare class FsxOntapStorageVirtualMachineTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): FsxOntapStorageVirtualMachineTimeouts | undefined;
    set internalValue(value: FsxOntapStorageVirtualMachineTimeouts | undefined);
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
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html aws_fsx_ontap_storage_virtual_machine}
*/
export declare class FsxOntapStorageVirtualMachine extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html aws_fsx_ontap_storage_virtual_machine} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FsxOntapStorageVirtualMachineConfig
    */
    constructor(scope: Construct, id: string, config: FsxOntapStorageVirtualMachineConfig);
    get arn(): string;
    endpoints(index: string): FsxOntapStorageVirtualMachineEndpoints;
    private _fileSystemId?;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    get fileSystemIdInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _rootVolumeSecurityStyle?;
    get rootVolumeSecurityStyle(): string;
    set rootVolumeSecurityStyle(value: string);
    resetRootVolumeSecurityStyle(): void;
    get rootVolumeSecurityStyleInput(): string;
    get subtype(): string;
    private _svmAdminPassword?;
    get svmAdminPassword(): string;
    set svmAdminPassword(value: string);
    resetSvmAdminPassword(): void;
    get svmAdminPasswordInput(): string;
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
    get uuid(): string;
    private _activeDirectoryConfiguration;
    get activeDirectoryConfiguration(): FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference;
    putActiveDirectoryConfiguration(value: FsxOntapStorageVirtualMachineActiveDirectoryConfiguration): void;
    resetActiveDirectoryConfiguration(): void;
    get activeDirectoryConfigurationInput(): FsxOntapStorageVirtualMachineActiveDirectoryConfiguration;
    private _timeouts;
    get timeouts(): FsxOntapStorageVirtualMachineTimeoutsOutputReference;
    putTimeouts(value: FsxOntapStorageVirtualMachineTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): FsxOntapStorageVirtualMachineTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=fsx-ontap-storage-virtual-machine.d.ts.map