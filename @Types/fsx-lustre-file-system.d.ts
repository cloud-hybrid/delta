import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS File System FSx
*/
export interface FsxLustreFileSystemConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#auto_import_policy FsxLustreFileSystem#auto_import_policy}
    */
    readonly autoImportPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#automatic_backup_retention_days FsxLustreFileSystem#automatic_backup_retention_days}
    */
    readonly automaticBackupRetentionDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#backup_id FsxLustreFileSystem#backup_id}
    */
    readonly backupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#copy_tags_to_backups FsxLustreFileSystem#copy_tags_to_backups}
    */
    readonly copyTagsToBackups?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#daily_automatic_backup_start_time FsxLustreFileSystem#daily_automatic_backup_start_time}
    */
    readonly dailyAutomaticBackupStartTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#data_compression_type FsxLustreFileSystem#data_compression_type}
    */
    readonly dataCompressionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#deployment_type FsxLustreFileSystem#deployment_type}
    */
    readonly deploymentType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#drive_cache_type FsxLustreFileSystem#drive_cache_type}
    */
    readonly driveCacheType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#export_path FsxLustreFileSystem#export_path}
    */
    readonly exportPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#import_path FsxLustreFileSystem#import_path}
    */
    readonly importPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#imported_file_chunk_size FsxLustreFileSystem#imported_file_chunk_size}
    */
    readonly importedFileChunkSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#kms_key_id FsxLustreFileSystem#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#per_unit_storage_throughput FsxLustreFileSystem#per_unit_storage_throughput}
    */
    readonly perUnitStorageThroughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#security_group_ids FsxLustreFileSystem#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#storage_capacity FsxLustreFileSystem#storage_capacity}
    */
    readonly storageCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#storage_type FsxLustreFileSystem#storage_type}
    */
    readonly storageType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#subnet_ids FsxLustreFileSystem#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#tags FsxLustreFileSystem#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#tags_all FsxLustreFileSystem#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#weekly_maintenance_start_time FsxLustreFileSystem#weekly_maintenance_start_time}
    */
    readonly weeklyMaintenanceStartTime?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#timeouts FsxLustreFileSystem#timeouts}
    */
    readonly timeouts?: FsxLustreFileSystemTimeouts;
}
export interface FsxLustreFileSystemTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#create FsxLustreFileSystem#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#delete FsxLustreFileSystem#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#update FsxLustreFileSystem#update}
    */
    readonly update?: string;
}
export declare function fsxLustreFileSystemTimeoutsToTerraform(struct?: FsxLustreFileSystemTimeoutsOutputReference | FsxLustreFileSystemTimeouts): any;
export declare class FsxLustreFileSystemTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): FsxLustreFileSystemTimeouts | undefined;
    set internalValue(value: FsxLustreFileSystemTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html aws_fsx_lustre_file_system}
*/
export declare class FsxLustreFileSystem extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html aws_fsx_lustre_file_system} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FsxLustreFileSystemConfig
    */
    constructor(scope: Construct, id: string, config: FsxLustreFileSystemConfig);
    get arn(): string;
    private _autoImportPolicy?;
    get autoImportPolicy(): string;
    set autoImportPolicy(value: string);
    resetAutoImportPolicy(): void;
    get autoImportPolicyInput(): string;
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
    private _dataCompressionType?;
    get dataCompressionType(): string;
    set dataCompressionType(value: string);
    resetDataCompressionType(): void;
    get dataCompressionTypeInput(): string;
    private _deploymentType?;
    get deploymentType(): string;
    set deploymentType(value: string);
    resetDeploymentType(): void;
    get deploymentTypeInput(): string;
    get dnsName(): string;
    private _driveCacheType?;
    get driveCacheType(): string;
    set driveCacheType(value: string);
    resetDriveCacheType(): void;
    get driveCacheTypeInput(): string;
    private _exportPath?;
    get exportPath(): string;
    set exportPath(value: string);
    resetExportPath(): void;
    get exportPathInput(): string;
    get id(): string;
    private _importPath?;
    get importPath(): string;
    set importPath(value: string);
    resetImportPath(): void;
    get importPathInput(): string;
    private _importedFileChunkSize?;
    get importedFileChunkSize(): number;
    set importedFileChunkSize(value: number);
    resetImportedFileChunkSize(): void;
    get importedFileChunkSizeInput(): number;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string;
    get mountName(): string;
    get networkInterfaceIds(): string[];
    get ownerId(): string;
    private _perUnitStorageThroughput?;
    get perUnitStorageThroughput(): number;
    set perUnitStorageThroughput(value: number);
    resetPerUnitStorageThroughput(): void;
    get perUnitStorageThroughputInput(): number;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[];
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
    get vpcId(): string;
    private _weeklyMaintenanceStartTime?;
    get weeklyMaintenanceStartTime(): string;
    set weeklyMaintenanceStartTime(value: string);
    resetWeeklyMaintenanceStartTime(): void;
    get weeklyMaintenanceStartTimeInput(): string;
    private _timeouts;
    get timeouts(): FsxLustreFileSystemTimeoutsOutputReference;
    putTimeouts(value: FsxLustreFileSystemTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): FsxLustreFileSystemTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=fsx-lustre-file-system.d.ts.map