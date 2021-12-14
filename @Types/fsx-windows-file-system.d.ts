import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS File System FSx
*/
export interface FsxWindowsFileSystemConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#active_directory_id FsxWindowsFileSystem#active_directory_id}
    */
    readonly activeDirectoryId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#aliases FsxWindowsFileSystem#aliases}
    */
    readonly aliases?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#automatic_backup_retention_days FsxWindowsFileSystem#automatic_backup_retention_days}
    */
    readonly automaticBackupRetentionDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#backup_id FsxWindowsFileSystem#backup_id}
    */
    readonly backupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#copy_tags_to_backups FsxWindowsFileSystem#copy_tags_to_backups}
    */
    readonly copyTagsToBackups?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#daily_automatic_backup_start_time FsxWindowsFileSystem#daily_automatic_backup_start_time}
    */
    readonly dailyAutomaticBackupStartTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#deployment_type FsxWindowsFileSystem#deployment_type}
    */
    readonly deploymentType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#kms_key_id FsxWindowsFileSystem#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#preferred_subnet_id FsxWindowsFileSystem#preferred_subnet_id}
    */
    readonly preferredSubnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#security_group_ids FsxWindowsFileSystem#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#skip_final_backup FsxWindowsFileSystem#skip_final_backup}
    */
    readonly skipFinalBackup?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#storage_capacity FsxWindowsFileSystem#storage_capacity}
    */
    readonly storageCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#storage_type FsxWindowsFileSystem#storage_type}
    */
    readonly storageType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#subnet_ids FsxWindowsFileSystem#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#tags FsxWindowsFileSystem#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#tags_all FsxWindowsFileSystem#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#throughput_capacity FsxWindowsFileSystem#throughput_capacity}
    */
    readonly throughputCapacity: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#weekly_maintenance_start_time FsxWindowsFileSystem#weekly_maintenance_start_time}
    */
    readonly weeklyMaintenanceStartTime?: string;
    /**
    * audit_log_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#audit_log_configuration FsxWindowsFileSystem#audit_log_configuration}
    */
    readonly auditLogConfiguration?: FsxWindowsFileSystemAuditLogConfiguration;
    /**
    * self_managed_active_directory block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#self_managed_active_directory FsxWindowsFileSystem#self_managed_active_directory}
    */
    readonly selfManagedActiveDirectory?: FsxWindowsFileSystemSelfManagedActiveDirectory;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#timeouts FsxWindowsFileSystem#timeouts}
    */
    readonly timeouts?: FsxWindowsFileSystemTimeouts;
}
export interface FsxWindowsFileSystemAuditLogConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#audit_log_destination FsxWindowsFileSystem#audit_log_destination}
    */
    readonly auditLogDestination?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#file_access_audit_log_level FsxWindowsFileSystem#file_access_audit_log_level}
    */
    readonly fileAccessAuditLogLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#file_share_access_audit_log_level FsxWindowsFileSystem#file_share_access_audit_log_level}
    */
    readonly fileShareAccessAuditLogLevel?: string;
}
export declare function fsxWindowsFileSystemAuditLogConfigurationToTerraform(struct?: FsxWindowsFileSystemAuditLogConfigurationOutputReference | FsxWindowsFileSystemAuditLogConfiguration): any;
export declare class FsxWindowsFileSystemAuditLogConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): FsxWindowsFileSystemAuditLogConfiguration | undefined;
    set internalValue(value: FsxWindowsFileSystemAuditLogConfiguration | undefined);
    private _auditLogDestination?;
    get auditLogDestination(): string;
    set auditLogDestination(value: string);
    resetAuditLogDestination(): void;
    get auditLogDestinationInput(): string;
    private _fileAccessAuditLogLevel?;
    get fileAccessAuditLogLevel(): string;
    set fileAccessAuditLogLevel(value: string);
    resetFileAccessAuditLogLevel(): void;
    get fileAccessAuditLogLevelInput(): string;
    private _fileShareAccessAuditLogLevel?;
    get fileShareAccessAuditLogLevel(): string;
    set fileShareAccessAuditLogLevel(value: string);
    resetFileShareAccessAuditLogLevel(): void;
    get fileShareAccessAuditLogLevelInput(): string;
}
export interface FsxWindowsFileSystemSelfManagedActiveDirectory {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#dns_ips FsxWindowsFileSystem#dns_ips}
    */
    readonly dnsIps: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#domain_name FsxWindowsFileSystem#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#file_system_administrators_group FsxWindowsFileSystem#file_system_administrators_group}
    */
    readonly fileSystemAdministratorsGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#organizational_unit_distinguished_name FsxWindowsFileSystem#organizational_unit_distinguished_name}
    */
    readonly organizationalUnitDistinguishedName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#password FsxWindowsFileSystem#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#username FsxWindowsFileSystem#username}
    */
    readonly username: string;
}
export declare function fsxWindowsFileSystemSelfManagedActiveDirectoryToTerraform(struct?: FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference | FsxWindowsFileSystemSelfManagedActiveDirectory): any;
export declare class FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): FsxWindowsFileSystemSelfManagedActiveDirectory | undefined;
    set internalValue(value: FsxWindowsFileSystemSelfManagedActiveDirectory | undefined);
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
    private _organizationalUnitDistinguishedName?;
    get organizationalUnitDistinguishedName(): string;
    set organizationalUnitDistinguishedName(value: string);
    resetOrganizationalUnitDistinguishedName(): void;
    get organizationalUnitDistinguishedNameInput(): string;
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string;
}
export interface FsxWindowsFileSystemTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#create FsxWindowsFileSystem#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#delete FsxWindowsFileSystem#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#update FsxWindowsFileSystem#update}
    */
    readonly update?: string;
}
export declare function fsxWindowsFileSystemTimeoutsToTerraform(struct?: FsxWindowsFileSystemTimeoutsOutputReference | FsxWindowsFileSystemTimeouts): any;
export declare class FsxWindowsFileSystemTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): FsxWindowsFileSystemTimeouts | undefined;
    set internalValue(value: FsxWindowsFileSystemTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html aws_fsx_windows_file_system}
*/
export declare class FsxWindowsFileSystem extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html aws_fsx_windows_file_system} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FsxWindowsFileSystemConfig
    */
    constructor(scope: Construct, id: string, config: FsxWindowsFileSystemConfig);
    private _activeDirectoryId?;
    get activeDirectoryId(): string;
    set activeDirectoryId(value: string);
    resetActiveDirectoryId(): void;
    get activeDirectoryIdInput(): string;
    private _aliases?;
    get aliases(): string[];
    set aliases(value: string[]);
    resetAliases(): void;
    get aliasesInput(): string[];
    get arn(): string;
    private _automaticBackupRetentionDays?;
    get automaticBackupRetentionDays(): number;
    set automaticBackupRetentionDays(value: number);
    resetAutomaticBackupRetentionDays(): void;
    get automaticBackupRetentionDaysInput(): number;
    private _backupId?;
    get backupId(): string;
    set backupId(value: string);
    resetBackupId(): void;
    get backupIdInput(): string;
    private _copyTagsToBackups?;
    get copyTagsToBackups(): boolean | cdktf.IResolvable;
    set copyTagsToBackups(value: boolean | cdktf.IResolvable);
    resetCopyTagsToBackups(): void;
    get copyTagsToBackupsInput(): boolean | cdktf.IResolvable;
    private _dailyAutomaticBackupStartTime?;
    get dailyAutomaticBackupStartTime(): string;
    set dailyAutomaticBackupStartTime(value: string);
    resetDailyAutomaticBackupStartTime(): void;
    get dailyAutomaticBackupStartTimeInput(): string;
    private _deploymentType?;
    get deploymentType(): string;
    set deploymentType(value: string);
    resetDeploymentType(): void;
    get deploymentTypeInput(): string;
    get dnsName(): string;
    get id(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string;
    get networkInterfaceIds(): string[];
    get ownerId(): string;
    get preferredFileServerIp(): string;
    private _preferredSubnetId?;
    get preferredSubnetId(): string;
    set preferredSubnetId(value: string);
    resetPreferredSubnetId(): void;
    get preferredSubnetIdInput(): string;
    get remoteAdministrationEndpoint(): string;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[];
    private _skipFinalBackup?;
    get skipFinalBackup(): boolean | cdktf.IResolvable;
    set skipFinalBackup(value: boolean | cdktf.IResolvable);
    resetSkipFinalBackup(): void;
    get skipFinalBackupInput(): boolean | cdktf.IResolvable;
    private _storageCapacity?;
    get storageCapacity(): number;
    set storageCapacity(value: number);
    resetStorageCapacity(): void;
    get storageCapacityInput(): number;
    private _storageType?;
    get storageType(): string;
    set storageType(value: string);
    resetStorageType(): void;
    get storageTypeInput(): string;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
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
    private _throughputCapacity?;
    get throughputCapacity(): number;
    set throughputCapacity(value: number);
    get throughputCapacityInput(): number;
    get vpcId(): string;
    private _weeklyMaintenanceStartTime?;
    get weeklyMaintenanceStartTime(): string;
    set weeklyMaintenanceStartTime(value: string);
    resetWeeklyMaintenanceStartTime(): void;
    get weeklyMaintenanceStartTimeInput(): string;
    private _auditLogConfiguration;
    get auditLogConfiguration(): FsxWindowsFileSystemAuditLogConfigurationOutputReference;
    putAuditLogConfiguration(value: FsxWindowsFileSystemAuditLogConfiguration): void;
    resetAuditLogConfiguration(): void;
    get auditLogConfigurationInput(): FsxWindowsFileSystemAuditLogConfiguration;
    private _selfManagedActiveDirectory;
    get selfManagedActiveDirectory(): FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference;
    putSelfManagedActiveDirectory(value: FsxWindowsFileSystemSelfManagedActiveDirectory): void;
    resetSelfManagedActiveDirectory(): void;
    get selfManagedActiveDirectoryInput(): FsxWindowsFileSystemSelfManagedActiveDirectory;
    private _timeouts;
    get timeouts(): FsxWindowsFileSystemTimeoutsOutputReference;
    putTimeouts(value: FsxWindowsFileSystemTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): FsxWindowsFileSystemTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=fsx-windows-file-system.d.ts.map