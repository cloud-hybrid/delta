import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Relational Database Service
*/
export interface DbInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#allocated_storage DbInstance#allocated_storage}
    */
    readonly allocatedStorage?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#allow_major_version_upgrade DbInstance#allow_major_version_upgrade}
    */
    readonly allowMajorVersionUpgrade?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#apply_immediately DbInstance#apply_immediately}
    */
    readonly applyImmediately?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#auto_minor_version_upgrade DbInstance#auto_minor_version_upgrade}
    */
    readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#availability_zone DbInstance#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#backup_retention_period DbInstance#backup_retention_period}
    */
    readonly backupRetentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#backup_window DbInstance#backup_window}
    */
    readonly backupWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#ca_cert_identifier DbInstance#ca_cert_identifier}
    */
    readonly caCertIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#character_set_name DbInstance#character_set_name}
    */
    readonly characterSetName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#copy_tags_to_snapshot DbInstance#copy_tags_to_snapshot}
    */
    readonly copyTagsToSnapshot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#customer_owned_ip_enabled DbInstance#customer_owned_ip_enabled}
    */
    readonly customerOwnedIpEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#db_subnet_group_name DbInstance#db_subnet_group_name}
    */
    readonly dbSubnetGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#delete_automated_backups DbInstance#delete_automated_backups}
    */
    readonly deleteAutomatedBackups?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#deletion_protection DbInstance#deletion_protection}
    */
    readonly deletionProtection?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#domain DbInstance#domain}
    */
    readonly domain?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#domain_iam_role_name DbInstance#domain_iam_role_name}
    */
    readonly domainIamRoleName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#enabled_cloudwatch_logs_exports DbInstance#enabled_cloudwatch_logs_exports}
    */
    readonly enabledCloudwatchLogsExports?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#engine DbInstance#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#engine_version DbInstance#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#final_snapshot_identifier DbInstance#final_snapshot_identifier}
    */
    readonly finalSnapshotIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#iam_database_authentication_enabled DbInstance#iam_database_authentication_enabled}
    */
    readonly iamDatabaseAuthenticationEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#identifier DbInstance#identifier}
    */
    readonly identifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#identifier_prefix DbInstance#identifier_prefix}
    */
    readonly identifierPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#instance_class DbInstance#instance_class}
    */
    readonly instanceClass: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#iops DbInstance#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#kms_key_id DbInstance#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#license_model DbInstance#license_model}
    */
    readonly licenseModel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#maintenance_window DbInstance#maintenance_window}
    */
    readonly maintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#max_allocated_storage DbInstance#max_allocated_storage}
    */
    readonly maxAllocatedStorage?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#monitoring_interval DbInstance#monitoring_interval}
    */
    readonly monitoringInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#monitoring_role_arn DbInstance#monitoring_role_arn}
    */
    readonly monitoringRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#multi_az DbInstance#multi_az}
    */
    readonly multiAz?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#name DbInstance#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#nchar_character_set_name DbInstance#nchar_character_set_name}
    */
    readonly ncharCharacterSetName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#option_group_name DbInstance#option_group_name}
    */
    readonly optionGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#parameter_group_name DbInstance#parameter_group_name}
    */
    readonly parameterGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#password DbInstance#password}
    */
    readonly password?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#performance_insights_enabled DbInstance#performance_insights_enabled}
    */
    readonly performanceInsightsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#performance_insights_kms_key_id DbInstance#performance_insights_kms_key_id}
    */
    readonly performanceInsightsKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#performance_insights_retention_period DbInstance#performance_insights_retention_period}
    */
    readonly performanceInsightsRetentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#port DbInstance#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#publicly_accessible DbInstance#publicly_accessible}
    */
    readonly publiclyAccessible?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#replica_mode DbInstance#replica_mode}
    */
    readonly replicaMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#replicate_source_db DbInstance#replicate_source_db}
    */
    readonly replicateSourceDb?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#security_group_names DbInstance#security_group_names}
    */
    readonly securityGroupNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#skip_final_snapshot DbInstance#skip_final_snapshot}
    */
    readonly skipFinalSnapshot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#snapshot_identifier DbInstance#snapshot_identifier}
    */
    readonly snapshotIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#storage_encrypted DbInstance#storage_encrypted}
    */
    readonly storageEncrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#storage_type DbInstance#storage_type}
    */
    readonly storageType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#tags DbInstance#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#tags_all DbInstance#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#timezone DbInstance#timezone}
    */
    readonly timezone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#username DbInstance#username}
    */
    readonly username?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#vpc_security_group_ids DbInstance#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * restore_to_point_in_time block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#restore_to_point_in_time DbInstance#restore_to_point_in_time}
    */
    readonly restoreToPointInTime?: DbInstanceRestoreToPointInTime;
    /**
    * s3_import block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#s3_import DbInstance#s3_import}
    */
    readonly s3Import?: DbInstanceS3Import;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#timeouts DbInstance#timeouts}
    */
    readonly timeouts?: DbInstanceTimeouts;
}
export interface DbInstanceRestoreToPointInTime {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#restore_time DbInstance#restore_time}
    */
    readonly restoreTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#source_db_instance_identifier DbInstance#source_db_instance_identifier}
    */
    readonly sourceDbInstanceIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#source_dbi_resource_id DbInstance#source_dbi_resource_id}
    */
    readonly sourceDbiResourceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#use_latest_restorable_time DbInstance#use_latest_restorable_time}
    */
    readonly useLatestRestorableTime?: boolean | cdktf.IResolvable;
}
export declare function dbInstanceRestoreToPointInTimeToTerraform(struct?: DbInstanceRestoreToPointInTimeOutputReference | DbInstanceRestoreToPointInTime): any;
export declare class DbInstanceRestoreToPointInTimeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DbInstanceRestoreToPointInTime | undefined;
    set internalValue(value: DbInstanceRestoreToPointInTime | undefined);
    private _restoreTime?;
    get restoreTime(): string;
    set restoreTime(value: string);
    resetRestoreTime(): void;
    get restoreTimeInput(): string;
    private _sourceDbInstanceIdentifier?;
    get sourceDbInstanceIdentifier(): string;
    set sourceDbInstanceIdentifier(value: string);
    resetSourceDbInstanceIdentifier(): void;
    get sourceDbInstanceIdentifierInput(): string;
    private _sourceDbiResourceId?;
    get sourceDbiResourceId(): string;
    set sourceDbiResourceId(value: string);
    resetSourceDbiResourceId(): void;
    get sourceDbiResourceIdInput(): string;
    private _useLatestRestorableTime?;
    get useLatestRestorableTime(): boolean | cdktf.IResolvable;
    set useLatestRestorableTime(value: boolean | cdktf.IResolvable);
    resetUseLatestRestorableTime(): void;
    get useLatestRestorableTimeInput(): boolean | cdktf.IResolvable;
}
export interface DbInstanceS3Import {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#bucket_name DbInstance#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#bucket_prefix DbInstance#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#ingestion_role DbInstance#ingestion_role}
    */
    readonly ingestionRole: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#source_engine DbInstance#source_engine}
    */
    readonly sourceEngine: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#source_engine_version DbInstance#source_engine_version}
    */
    readonly sourceEngineVersion: string;
}
export declare function dbInstanceS3ImportToTerraform(struct?: DbInstanceS3ImportOutputReference | DbInstanceS3Import): any;
export declare class DbInstanceS3ImportOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DbInstanceS3Import | undefined;
    set internalValue(value: DbInstanceS3Import | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string;
    private _bucketPrefix?;
    get bucketPrefix(): string;
    set bucketPrefix(value: string);
    resetBucketPrefix(): void;
    get bucketPrefixInput(): string;
    private _ingestionRole?;
    get ingestionRole(): string;
    set ingestionRole(value: string);
    get ingestionRoleInput(): string;
    private _sourceEngine?;
    get sourceEngine(): string;
    set sourceEngine(value: string);
    get sourceEngineInput(): string;
    private _sourceEngineVersion?;
    get sourceEngineVersion(): string;
    set sourceEngineVersion(value: string);
    get sourceEngineVersionInput(): string;
}
export interface DbInstanceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#create DbInstance#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#delete DbInstance#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#update DbInstance#update}
    */
    readonly update?: string;
}
export declare function dbInstanceTimeoutsToTerraform(struct?: DbInstanceTimeoutsOutputReference | DbInstanceTimeouts): any;
export declare class DbInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DbInstanceTimeouts | undefined;
    set internalValue(value: DbInstanceTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html aws_db_instance}
*/
export declare class DbInstance extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html aws_db_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbInstanceConfig
    */
    constructor(scope: Construct, id: string, config: DbInstanceConfig);
    get address(): string;
    private _allocatedStorage?;
    get allocatedStorage(): number;
    set allocatedStorage(value: number);
    resetAllocatedStorage(): void;
    get allocatedStorageInput(): number;
    private _allowMajorVersionUpgrade?;
    get allowMajorVersionUpgrade(): boolean | cdktf.IResolvable;
    set allowMajorVersionUpgrade(value: boolean | cdktf.IResolvable);
    resetAllowMajorVersionUpgrade(): void;
    get allowMajorVersionUpgradeInput(): boolean | cdktf.IResolvable;
    private _applyImmediately?;
    get applyImmediately(): boolean | cdktf.IResolvable;
    set applyImmediately(value: boolean | cdktf.IResolvable);
    resetApplyImmediately(): void;
    get applyImmediatelyInput(): boolean | cdktf.IResolvable;
    get arn(): string;
    private _autoMinorVersionUpgrade?;
    get autoMinorVersionUpgrade(): boolean | cdktf.IResolvable;
    set autoMinorVersionUpgrade(value: boolean | cdktf.IResolvable);
    resetAutoMinorVersionUpgrade(): void;
    get autoMinorVersionUpgradeInput(): boolean | cdktf.IResolvable;
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string;
    private _backupRetentionPeriod?;
    get backupRetentionPeriod(): number;
    set backupRetentionPeriod(value: number);
    resetBackupRetentionPeriod(): void;
    get backupRetentionPeriodInput(): number;
    private _backupWindow?;
    get backupWindow(): string;
    set backupWindow(value: string);
    resetBackupWindow(): void;
    get backupWindowInput(): string;
    private _caCertIdentifier?;
    get caCertIdentifier(): string;
    set caCertIdentifier(value: string);
    resetCaCertIdentifier(): void;
    get caCertIdentifierInput(): string;
    private _characterSetName?;
    get characterSetName(): string;
    set characterSetName(value: string);
    resetCharacterSetName(): void;
    get characterSetNameInput(): string;
    private _copyTagsToSnapshot?;
    get copyTagsToSnapshot(): boolean | cdktf.IResolvable;
    set copyTagsToSnapshot(value: boolean | cdktf.IResolvable);
    resetCopyTagsToSnapshot(): void;
    get copyTagsToSnapshotInput(): boolean | cdktf.IResolvable;
    private _customerOwnedIpEnabled?;
    get customerOwnedIpEnabled(): boolean | cdktf.IResolvable;
    set customerOwnedIpEnabled(value: boolean | cdktf.IResolvable);
    resetCustomerOwnedIpEnabled(): void;
    get customerOwnedIpEnabledInput(): boolean | cdktf.IResolvable;
    private _dbSubnetGroupName?;
    get dbSubnetGroupName(): string;
    set dbSubnetGroupName(value: string);
    resetDbSubnetGroupName(): void;
    get dbSubnetGroupNameInput(): string;
    private _deleteAutomatedBackups?;
    get deleteAutomatedBackups(): boolean | cdktf.IResolvable;
    set deleteAutomatedBackups(value: boolean | cdktf.IResolvable);
    resetDeleteAutomatedBackups(): void;
    get deleteAutomatedBackupsInput(): boolean | cdktf.IResolvable;
    private _deletionProtection?;
    get deletionProtection(): boolean | cdktf.IResolvable;
    set deletionProtection(value: boolean | cdktf.IResolvable);
    resetDeletionProtection(): void;
    get deletionProtectionInput(): boolean | cdktf.IResolvable;
    private _domain?;
    get domain(): string;
    set domain(value: string);
    resetDomain(): void;
    get domainInput(): string;
    private _domainIamRoleName?;
    get domainIamRoleName(): string;
    set domainIamRoleName(value: string);
    resetDomainIamRoleName(): void;
    get domainIamRoleNameInput(): string;
    private _enabledCloudwatchLogsExports?;
    get enabledCloudwatchLogsExports(): string[];
    set enabledCloudwatchLogsExports(value: string[]);
    resetEnabledCloudwatchLogsExports(): void;
    get enabledCloudwatchLogsExportsInput(): string[];
    get endpoint(): string;
    private _engine?;
    get engine(): string;
    set engine(value: string);
    resetEngine(): void;
    get engineInput(): string;
    private _engineVersion?;
    get engineVersion(): string;
    set engineVersion(value: string);
    resetEngineVersion(): void;
    get engineVersionInput(): string;
    get engineVersionActual(): string;
    private _finalSnapshotIdentifier?;
    get finalSnapshotIdentifier(): string;
    set finalSnapshotIdentifier(value: string);
    resetFinalSnapshotIdentifier(): void;
    get finalSnapshotIdentifierInput(): string;
    get hostedZoneId(): string;
    private _iamDatabaseAuthenticationEnabled?;
    get iamDatabaseAuthenticationEnabled(): boolean | cdktf.IResolvable;
    set iamDatabaseAuthenticationEnabled(value: boolean | cdktf.IResolvable);
    resetIamDatabaseAuthenticationEnabled(): void;
    get iamDatabaseAuthenticationEnabledInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _identifier?;
    get identifier(): string;
    set identifier(value: string);
    resetIdentifier(): void;
    get identifierInput(): string;
    private _identifierPrefix?;
    get identifierPrefix(): string;
    set identifierPrefix(value: string);
    resetIdentifierPrefix(): void;
    get identifierPrefixInput(): string;
    private _instanceClass?;
    get instanceClass(): string;
    set instanceClass(value: string);
    get instanceClassInput(): string;
    private _iops?;
    get iops(): number;
    set iops(value: number);
    resetIops(): void;
    get iopsInput(): number;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string;
    get latestRestorableTime(): string;
    private _licenseModel?;
    get licenseModel(): string;
    set licenseModel(value: string);
    resetLicenseModel(): void;
    get licenseModelInput(): string;
    private _maintenanceWindow?;
    get maintenanceWindow(): string;
    set maintenanceWindow(value: string);
    resetMaintenanceWindow(): void;
    get maintenanceWindowInput(): string;
    private _maxAllocatedStorage?;
    get maxAllocatedStorage(): number;
    set maxAllocatedStorage(value: number);
    resetMaxAllocatedStorage(): void;
    get maxAllocatedStorageInput(): number;
    private _monitoringInterval?;
    get monitoringInterval(): number;
    set monitoringInterval(value: number);
    resetMonitoringInterval(): void;
    get monitoringIntervalInput(): number;
    private _monitoringRoleArn?;
    get monitoringRoleArn(): string;
    set monitoringRoleArn(value: string);
    resetMonitoringRoleArn(): void;
    get monitoringRoleArnInput(): string;
    private _multiAz?;
    get multiAz(): boolean | cdktf.IResolvable;
    set multiAz(value: boolean | cdktf.IResolvable);
    resetMultiAz(): void;
    get multiAzInput(): boolean | cdktf.IResolvable;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _ncharCharacterSetName?;
    get ncharCharacterSetName(): string;
    set ncharCharacterSetName(value: string);
    resetNcharCharacterSetName(): void;
    get ncharCharacterSetNameInput(): string;
    private _optionGroupName?;
    get optionGroupName(): string;
    set optionGroupName(value: string);
    resetOptionGroupName(): void;
    get optionGroupNameInput(): string;
    private _parameterGroupName?;
    get parameterGroupName(): string;
    set parameterGroupName(value: string);
    resetParameterGroupName(): void;
    get parameterGroupNameInput(): string;
    private _password?;
    get password(): string;
    set password(value: string);
    resetPassword(): void;
    get passwordInput(): string;
    private _performanceInsightsEnabled?;
    get performanceInsightsEnabled(): boolean | cdktf.IResolvable;
    set performanceInsightsEnabled(value: boolean | cdktf.IResolvable);
    resetPerformanceInsightsEnabled(): void;
    get performanceInsightsEnabledInput(): boolean | cdktf.IResolvable;
    private _performanceInsightsKmsKeyId?;
    get performanceInsightsKmsKeyId(): string;
    set performanceInsightsKmsKeyId(value: string);
    resetPerformanceInsightsKmsKeyId(): void;
    get performanceInsightsKmsKeyIdInput(): string;
    private _performanceInsightsRetentionPeriod?;
    get performanceInsightsRetentionPeriod(): number;
    set performanceInsightsRetentionPeriod(value: number);
    resetPerformanceInsightsRetentionPeriod(): void;
    get performanceInsightsRetentionPeriodInput(): number;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number;
    private _publiclyAccessible?;
    get publiclyAccessible(): boolean | cdktf.IResolvable;
    set publiclyAccessible(value: boolean | cdktf.IResolvable);
    resetPubliclyAccessible(): void;
    get publiclyAccessibleInput(): boolean | cdktf.IResolvable;
    private _replicaMode?;
    get replicaMode(): string;
    set replicaMode(value: string);
    resetReplicaMode(): void;
    get replicaModeInput(): string;
    get replicas(): string[];
    private _replicateSourceDb?;
    get replicateSourceDb(): string;
    set replicateSourceDb(value: string);
    resetReplicateSourceDb(): void;
    get replicateSourceDbInput(): string;
    get resourceId(): string;
    private _securityGroupNames?;
    get securityGroupNames(): string[];
    set securityGroupNames(value: string[]);
    resetSecurityGroupNames(): void;
    get securityGroupNamesInput(): string[];
    private _skipFinalSnapshot?;
    get skipFinalSnapshot(): boolean | cdktf.IResolvable;
    set skipFinalSnapshot(value: boolean | cdktf.IResolvable);
    resetSkipFinalSnapshot(): void;
    get skipFinalSnapshotInput(): boolean | cdktf.IResolvable;
    private _snapshotIdentifier?;
    get snapshotIdentifier(): string;
    set snapshotIdentifier(value: string);
    resetSnapshotIdentifier(): void;
    get snapshotIdentifierInput(): string;
    get status(): string;
    private _storageEncrypted?;
    get storageEncrypted(): boolean | cdktf.IResolvable;
    set storageEncrypted(value: boolean | cdktf.IResolvable);
    resetStorageEncrypted(): void;
    get storageEncryptedInput(): boolean | cdktf.IResolvable;
    private _storageType?;
    get storageType(): string;
    set storageType(value: string);
    resetStorageType(): void;
    get storageTypeInput(): string;
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
    private _timezone?;
    get timezone(): string;
    set timezone(value: string);
    resetTimezone(): void;
    get timezoneInput(): string;
    private _username?;
    get username(): string;
    set username(value: string);
    resetUsername(): void;
    get usernameInput(): string;
    private _vpcSecurityGroupIds?;
    get vpcSecurityGroupIds(): string[];
    set vpcSecurityGroupIds(value: string[]);
    resetVpcSecurityGroupIds(): void;
    get vpcSecurityGroupIdsInput(): string[];
    private _restoreToPointInTime;
    get restoreToPointInTime(): DbInstanceRestoreToPointInTimeOutputReference;
    putRestoreToPointInTime(value: DbInstanceRestoreToPointInTime): void;
    resetRestoreToPointInTime(): void;
    get restoreToPointInTimeInput(): DbInstanceRestoreToPointInTime;
    private _s3Import;
    get s3Import(): DbInstanceS3ImportOutputReference;
    putS3Import(value: DbInstanceS3Import): void;
    resetS3Import(): void;
    get s3ImportInput(): DbInstanceS3Import;
    private _timeouts;
    get timeouts(): DbInstanceTimeoutsOutputReference;
    putTimeouts(value: DbInstanceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): DbInstanceTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=db-instance.d.ts.map