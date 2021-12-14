import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Relational Database Service
*/
export interface RdsClusterInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#apply_immediately RdsClusterInstance#apply_immediately}
    */
    readonly applyImmediately?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#auto_minor_version_upgrade RdsClusterInstance#auto_minor_version_upgrade}
    */
    readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#availability_zone RdsClusterInstance#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#ca_cert_identifier RdsClusterInstance#ca_cert_identifier}
    */
    readonly caCertIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#cluster_identifier RdsClusterInstance#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#copy_tags_to_snapshot RdsClusterInstance#copy_tags_to_snapshot}
    */
    readonly copyTagsToSnapshot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#db_parameter_group_name RdsClusterInstance#db_parameter_group_name}
    */
    readonly dbParameterGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#db_subnet_group_name RdsClusterInstance#db_subnet_group_name}
    */
    readonly dbSubnetGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#engine RdsClusterInstance#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#engine_version RdsClusterInstance#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#identifier RdsClusterInstance#identifier}
    */
    readonly identifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#identifier_prefix RdsClusterInstance#identifier_prefix}
    */
    readonly identifierPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#instance_class RdsClusterInstance#instance_class}
    */
    readonly instanceClass: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#monitoring_interval RdsClusterInstance#monitoring_interval}
    */
    readonly monitoringInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#monitoring_role_arn RdsClusterInstance#monitoring_role_arn}
    */
    readonly monitoringRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#performance_insights_enabled RdsClusterInstance#performance_insights_enabled}
    */
    readonly performanceInsightsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#performance_insights_kms_key_id RdsClusterInstance#performance_insights_kms_key_id}
    */
    readonly performanceInsightsKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#performance_insights_retention_period RdsClusterInstance#performance_insights_retention_period}
    */
    readonly performanceInsightsRetentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#preferred_backup_window RdsClusterInstance#preferred_backup_window}
    */
    readonly preferredBackupWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#preferred_maintenance_window RdsClusterInstance#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#promotion_tier RdsClusterInstance#promotion_tier}
    */
    readonly promotionTier?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#publicly_accessible RdsClusterInstance#publicly_accessible}
    */
    readonly publiclyAccessible?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#tags RdsClusterInstance#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#tags_all RdsClusterInstance#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#timeouts RdsClusterInstance#timeouts}
    */
    readonly timeouts?: RdsClusterInstanceTimeouts;
}
export interface RdsClusterInstanceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#create RdsClusterInstance#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#delete RdsClusterInstance#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#update RdsClusterInstance#update}
    */
    readonly update?: string;
}
export declare function rdsClusterInstanceTimeoutsToTerraform(struct?: RdsClusterInstanceTimeoutsOutputReference | RdsClusterInstanceTimeouts): any;
export declare class RdsClusterInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): RdsClusterInstanceTimeouts | undefined;
    set internalValue(value: RdsClusterInstanceTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html aws_rds_cluster_instance}
*/
export declare class RdsClusterInstance extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html aws_rds_cluster_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsClusterInstanceConfig
    */
    constructor(scope: Construct, id: string, config: RdsClusterInstanceConfig);
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
    private _caCertIdentifier?;
    get caCertIdentifier(): string;
    set caCertIdentifier(value: string);
    resetCaCertIdentifier(): void;
    get caCertIdentifierInput(): string;
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    get clusterIdentifierInput(): string;
    private _copyTagsToSnapshot?;
    get copyTagsToSnapshot(): boolean | cdktf.IResolvable;
    set copyTagsToSnapshot(value: boolean | cdktf.IResolvable);
    resetCopyTagsToSnapshot(): void;
    get copyTagsToSnapshotInput(): boolean | cdktf.IResolvable;
    private _dbParameterGroupName?;
    get dbParameterGroupName(): string;
    set dbParameterGroupName(value: string);
    resetDbParameterGroupName(): void;
    get dbParameterGroupNameInput(): string;
    private _dbSubnetGroupName?;
    get dbSubnetGroupName(): string;
    set dbSubnetGroupName(value: string);
    resetDbSubnetGroupName(): void;
    get dbSubnetGroupNameInput(): string;
    get dbiResourceId(): string;
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
    get kmsKeyId(): string;
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
    get port(): number;
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
    private _promotionTier?;
    get promotionTier(): number;
    set promotionTier(value: number);
    resetPromotionTier(): void;
    get promotionTierInput(): number;
    private _publiclyAccessible?;
    get publiclyAccessible(): boolean | cdktf.IResolvable;
    set publiclyAccessible(value: boolean | cdktf.IResolvable);
    resetPubliclyAccessible(): void;
    get publiclyAccessibleInput(): boolean | cdktf.IResolvable;
    get storageEncrypted(): any;
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
    get writer(): any;
    private _timeouts;
    get timeouts(): RdsClusterInstanceTimeoutsOutputReference;
    putTimeouts(value: RdsClusterInstanceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): RdsClusterInstanceTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=rds-cluster-instance.d.ts.map