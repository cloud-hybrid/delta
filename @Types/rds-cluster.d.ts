import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Relational Database Service
*/
export interface RdsClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#allow_major_version_upgrade RdsCluster#allow_major_version_upgrade}
    */
    readonly allowMajorVersionUpgrade?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#apply_immediately RdsCluster#apply_immediately}
    */
    readonly applyImmediately?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#availability_zones RdsCluster#availability_zones}
    */
    readonly availabilityZones?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#backtrack_window RdsCluster#backtrack_window}
    */
    readonly backtrackWindow?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#backup_retention_period RdsCluster#backup_retention_period}
    */
    readonly backupRetentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#cluster_identifier RdsCluster#cluster_identifier}
    */
    readonly clusterIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#cluster_identifier_prefix RdsCluster#cluster_identifier_prefix}
    */
    readonly clusterIdentifierPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#cluster_members RdsCluster#cluster_members}
    */
    readonly clusterMembers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#copy_tags_to_snapshot RdsCluster#copy_tags_to_snapshot}
    */
    readonly copyTagsToSnapshot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#database_name RdsCluster#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#db_cluster_parameter_group_name RdsCluster#db_cluster_parameter_group_name}
    */
    readonly dbClusterParameterGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#db_instance_parameter_group_name RdsCluster#db_instance_parameter_group_name}
    */
    readonly dbInstanceParameterGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#db_subnet_group_name RdsCluster#db_subnet_group_name}
    */
    readonly dbSubnetGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#deletion_protection RdsCluster#deletion_protection}
    */
    readonly deletionProtection?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#enable_global_write_forwarding RdsCluster#enable_global_write_forwarding}
    */
    readonly enableGlobalWriteForwarding?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#enable_http_endpoint RdsCluster#enable_http_endpoint}
    */
    readonly enableHttpEndpoint?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#enabled_cloudwatch_logs_exports RdsCluster#enabled_cloudwatch_logs_exports}
    */
    readonly enabledCloudwatchLogsExports?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#engine RdsCluster#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#engine_mode RdsCluster#engine_mode}
    */
    readonly engineMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#engine_version RdsCluster#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#final_snapshot_identifier RdsCluster#final_snapshot_identifier}
    */
    readonly finalSnapshotIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#global_cluster_identifier RdsCluster#global_cluster_identifier}
    */
    readonly globalClusterIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#iam_database_authentication_enabled RdsCluster#iam_database_authentication_enabled}
    */
    readonly iamDatabaseAuthenticationEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#iam_roles RdsCluster#iam_roles}
    */
    readonly iamRoles?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#kms_key_id RdsCluster#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#master_password RdsCluster#master_password}
    */
    readonly masterPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#master_username RdsCluster#master_username}
    */
    readonly masterUsername?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#port RdsCluster#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#preferred_backup_window RdsCluster#preferred_backup_window}
    */
    readonly preferredBackupWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#preferred_maintenance_window RdsCluster#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#replication_source_identifier RdsCluster#replication_source_identifier}
    */
    readonly replicationSourceIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#skip_final_snapshot RdsCluster#skip_final_snapshot}
    */
    readonly skipFinalSnapshot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#snapshot_identifier RdsCluster#snapshot_identifier}
    */
    readonly snapshotIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#source_region RdsCluster#source_region}
    */
    readonly sourceRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#storage_encrypted RdsCluster#storage_encrypted}
    */
    readonly storageEncrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#tags RdsCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#tags_all RdsCluster#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#vpc_security_group_ids RdsCluster#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * restore_to_point_in_time block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#restore_to_point_in_time RdsCluster#restore_to_point_in_time}
    */
    readonly restoreToPointInTime?: RdsClusterRestoreToPointInTime;
    /**
    * s3_import block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#s3_import RdsCluster#s3_import}
    */
    readonly s3Import?: RdsClusterS3Import;
    /**
    * scaling_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#scaling_configuration RdsCluster#scaling_configuration}
    */
    readonly scalingConfiguration?: RdsClusterScalingConfiguration;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#timeouts RdsCluster#timeouts}
    */
    readonly timeouts?: RdsClusterTimeouts;
}
export interface RdsClusterRestoreToPointInTime {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#restore_to_time RdsCluster#restore_to_time}
    */
    readonly restoreToTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#restore_type RdsCluster#restore_type}
    */
    readonly restoreType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#source_cluster_identifier RdsCluster#source_cluster_identifier}
    */
    readonly sourceClusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#use_latest_restorable_time RdsCluster#use_latest_restorable_time}
    */
    readonly useLatestRestorableTime?: boolean | cdktf.IResolvable;
}
export declare function rdsClusterRestoreToPointInTimeToTerraform(struct?: RdsClusterRestoreToPointInTimeOutputReference | RdsClusterRestoreToPointInTime): any;
export declare class RdsClusterRestoreToPointInTimeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): RdsClusterRestoreToPointInTime | undefined;
    set internalValue(value: RdsClusterRestoreToPointInTime | undefined);
    private _restoreToTime?;
    get restoreToTime(): string;
    set restoreToTime(value: string);
    resetRestoreToTime(): void;
    get restoreToTimeInput(): string;
    private _restoreType?;
    get restoreType(): string;
    set restoreType(value: string);
    resetRestoreType(): void;
    get restoreTypeInput(): string;
    private _sourceClusterIdentifier?;
    get sourceClusterIdentifier(): string;
    set sourceClusterIdentifier(value: string);
    get sourceClusterIdentifierInput(): string;
    private _useLatestRestorableTime?;
    get useLatestRestorableTime(): boolean | cdktf.IResolvable;
    set useLatestRestorableTime(value: boolean | cdktf.IResolvable);
    resetUseLatestRestorableTime(): void;
    get useLatestRestorableTimeInput(): boolean | cdktf.IResolvable;
}
export interface RdsClusterS3Import {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#bucket_name RdsCluster#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#bucket_prefix RdsCluster#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#ingestion_role RdsCluster#ingestion_role}
    */
    readonly ingestionRole: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#source_engine RdsCluster#source_engine}
    */
    readonly sourceEngine: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#source_engine_version RdsCluster#source_engine_version}
    */
    readonly sourceEngineVersion: string;
}
export declare function rdsClusterS3ImportToTerraform(struct?: RdsClusterS3ImportOutputReference | RdsClusterS3Import): any;
export declare class RdsClusterS3ImportOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): RdsClusterS3Import | undefined;
    set internalValue(value: RdsClusterS3Import | undefined);
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
export interface RdsClusterScalingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#auto_pause RdsCluster#auto_pause}
    */
    readonly autoPause?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#max_capacity RdsCluster#max_capacity}
    */
    readonly maxCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#min_capacity RdsCluster#min_capacity}
    */
    readonly minCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#seconds_until_auto_pause RdsCluster#seconds_until_auto_pause}
    */
    readonly secondsUntilAutoPause?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#timeout_action RdsCluster#timeout_action}
    */
    readonly timeoutAction?: string;
}
export declare function rdsClusterScalingConfigurationToTerraform(struct?: RdsClusterScalingConfigurationOutputReference | RdsClusterScalingConfiguration): any;
export declare class RdsClusterScalingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): RdsClusterScalingConfiguration | undefined;
    set internalValue(value: RdsClusterScalingConfiguration | undefined);
    private _autoPause?;
    get autoPause(): boolean | cdktf.IResolvable;
    set autoPause(value: boolean | cdktf.IResolvable);
    resetAutoPause(): void;
    get autoPauseInput(): boolean | cdktf.IResolvable;
    private _maxCapacity?;
    get maxCapacity(): number;
    set maxCapacity(value: number);
    resetMaxCapacity(): void;
    get maxCapacityInput(): number;
    private _minCapacity?;
    get minCapacity(): number;
    set minCapacity(value: number);
    resetMinCapacity(): void;
    get minCapacityInput(): number;
    private _secondsUntilAutoPause?;
    get secondsUntilAutoPause(): number;
    set secondsUntilAutoPause(value: number);
    resetSecondsUntilAutoPause(): void;
    get secondsUntilAutoPauseInput(): number;
    private _timeoutAction?;
    get timeoutAction(): string;
    set timeoutAction(value: string);
    resetTimeoutAction(): void;
    get timeoutActionInput(): string;
}
export interface RdsClusterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#create RdsCluster#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#delete RdsCluster#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#update RdsCluster#update}
    */
    readonly update?: string;
}
export declare function rdsClusterTimeoutsToTerraform(struct?: RdsClusterTimeoutsOutputReference | RdsClusterTimeouts): any;
export declare class RdsClusterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): RdsClusterTimeouts | undefined;
    set internalValue(value: RdsClusterTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html aws_rds_cluster}
*/
export declare class RdsCluster extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html aws_rds_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsClusterConfig = {}
    */
    constructor(scope: Construct, id: string, config?: RdsClusterConfig);
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
    private _availabilityZones?;
    get availabilityZones(): string[];
    set availabilityZones(value: string[]);
    resetAvailabilityZones(): void;
    get availabilityZonesInput(): string[];
    private _backtrackWindow?;
    get backtrackWindow(): number;
    set backtrackWindow(value: number);
    resetBacktrackWindow(): void;
    get backtrackWindowInput(): number;
    private _backupRetentionPeriod?;
    get backupRetentionPeriod(): number;
    set backupRetentionPeriod(value: number);
    resetBackupRetentionPeriod(): void;
    get backupRetentionPeriodInput(): number;
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    resetClusterIdentifier(): void;
    get clusterIdentifierInput(): string;
    private _clusterIdentifierPrefix?;
    get clusterIdentifierPrefix(): string;
    set clusterIdentifierPrefix(value: string);
    resetClusterIdentifierPrefix(): void;
    get clusterIdentifierPrefixInput(): string;
    private _clusterMembers?;
    get clusterMembers(): string[];
    set clusterMembers(value: string[]);
    resetClusterMembers(): void;
    get clusterMembersInput(): string[];
    get clusterResourceId(): string;
    private _copyTagsToSnapshot?;
    get copyTagsToSnapshot(): boolean | cdktf.IResolvable;
    set copyTagsToSnapshot(value: boolean | cdktf.IResolvable);
    resetCopyTagsToSnapshot(): void;
    get copyTagsToSnapshotInput(): boolean | cdktf.IResolvable;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    resetDatabaseName(): void;
    get databaseNameInput(): string;
    private _dbClusterParameterGroupName?;
    get dbClusterParameterGroupName(): string;
    set dbClusterParameterGroupName(value: string);
    resetDbClusterParameterGroupName(): void;
    get dbClusterParameterGroupNameInput(): string;
    private _dbInstanceParameterGroupName?;
    get dbInstanceParameterGroupName(): string;
    set dbInstanceParameterGroupName(value: string);
    resetDbInstanceParameterGroupName(): void;
    get dbInstanceParameterGroupNameInput(): string;
    private _dbSubnetGroupName?;
    get dbSubnetGroupName(): string;
    set dbSubnetGroupName(value: string);
    resetDbSubnetGroupName(): void;
    get dbSubnetGroupNameInput(): string;
    private _deletionProtection?;
    get deletionProtection(): boolean | cdktf.IResolvable;
    set deletionProtection(value: boolean | cdktf.IResolvable);
    resetDeletionProtection(): void;
    get deletionProtectionInput(): boolean | cdktf.IResolvable;
    private _enableGlobalWriteForwarding?;
    get enableGlobalWriteForwarding(): boolean | cdktf.IResolvable;
    set enableGlobalWriteForwarding(value: boolean | cdktf.IResolvable);
    resetEnableGlobalWriteForwarding(): void;
    get enableGlobalWriteForwardingInput(): boolean | cdktf.IResolvable;
    private _enableHttpEndpoint?;
    get enableHttpEndpoint(): boolean | cdktf.IResolvable;
    set enableHttpEndpoint(value: boolean | cdktf.IResolvable);
    resetEnableHttpEndpoint(): void;
    get enableHttpEndpointInput(): boolean | cdktf.IResolvable;
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
    private _engineMode?;
    get engineMode(): string;
    set engineMode(value: string);
    resetEngineMode(): void;
    get engineModeInput(): string;
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
    private _globalClusterIdentifier?;
    get globalClusterIdentifier(): string;
    set globalClusterIdentifier(value: string);
    resetGlobalClusterIdentifier(): void;
    get globalClusterIdentifierInput(): string;
    get hostedZoneId(): string;
    private _iamDatabaseAuthenticationEnabled?;
    get iamDatabaseAuthenticationEnabled(): boolean | cdktf.IResolvable;
    set iamDatabaseAuthenticationEnabled(value: boolean | cdktf.IResolvable);
    resetIamDatabaseAuthenticationEnabled(): void;
    get iamDatabaseAuthenticationEnabledInput(): boolean | cdktf.IResolvable;
    private _iamRoles?;
    get iamRoles(): string[];
    set iamRoles(value: string[]);
    resetIamRoles(): void;
    get iamRolesInput(): string[];
    get id(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string;
    private _masterPassword?;
    get masterPassword(): string;
    set masterPassword(value: string);
    resetMasterPassword(): void;
    get masterPasswordInput(): string;
    private _masterUsername?;
    get masterUsername(): string;
    set masterUsername(value: string);
    resetMasterUsername(): void;
    get masterUsernameInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number;
    private _preferredBackupWindow?;
    get preferredBackupWindow(): string;
    set preferredBackupWindow(value: string);
    resetPreferredBackupWindow(): void;
    get preferredBackupWindowInput(): string;
    private _preferredMaintenanceWindow?;
    get preferredMaintenanceWindow(): string;
    set preferredMaintenanceWindow(value: string);
    resetPreferredMaintenanceWindow(): void;
    get preferredMaintenanceWindowInput(): string;
    get readerEndpoint(): string;
    private _replicationSourceIdentifier?;
    get replicationSourceIdentifier(): string;
    set replicationSourceIdentifier(value: string);
    resetReplicationSourceIdentifier(): void;
    get replicationSourceIdentifierInput(): string;
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
    private _sourceRegion?;
    get sourceRegion(): string;
    set sourceRegion(value: string);
    resetSourceRegion(): void;
    get sourceRegionInput(): string;
    private _storageEncrypted?;
    get storageEncrypted(): boolean | cdktf.IResolvable;
    set storageEncrypted(value: boolean | cdktf.IResolvable);
    resetStorageEncrypted(): void;
    get storageEncryptedInput(): boolean | cdktf.IResolvable;
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
    private _vpcSecurityGroupIds?;
    get vpcSecurityGroupIds(): string[];
    set vpcSecurityGroupIds(value: string[]);
    resetVpcSecurityGroupIds(): void;
    get vpcSecurityGroupIdsInput(): string[];
    private _restoreToPointInTime;
    get restoreToPointInTime(): RdsClusterRestoreToPointInTimeOutputReference;
    putRestoreToPointInTime(value: RdsClusterRestoreToPointInTime): void;
    resetRestoreToPointInTime(): void;
    get restoreToPointInTimeInput(): RdsClusterRestoreToPointInTime;
    private _s3Import;
    get s3Import(): RdsClusterS3ImportOutputReference;
    putS3Import(value: RdsClusterS3Import): void;
    resetS3Import(): void;
    get s3ImportInput(): RdsClusterS3Import;
    private _scalingConfiguration;
    get scalingConfiguration(): RdsClusterScalingConfigurationOutputReference;
    putScalingConfiguration(value: RdsClusterScalingConfiguration): void;
    resetScalingConfiguration(): void;
    get scalingConfigurationInput(): RdsClusterScalingConfiguration;
    private _timeouts;
    get timeouts(): RdsClusterTimeoutsOutputReference;
    putTimeouts(value: RdsClusterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): RdsClusterTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=rds-cluster.d.ts.map