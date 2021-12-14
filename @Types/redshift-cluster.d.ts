import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Redshift
*/
export interface RedshiftClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#allow_version_upgrade RedshiftCluster#allow_version_upgrade}
    */
    readonly allowVersionUpgrade?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#automated_snapshot_retention_period RedshiftCluster#automated_snapshot_retention_period}
    */
    readonly automatedSnapshotRetentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#availability_zone RedshiftCluster#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#cluster_identifier RedshiftCluster#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#cluster_parameter_group_name RedshiftCluster#cluster_parameter_group_name}
    */
    readonly clusterParameterGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#cluster_public_key RedshiftCluster#cluster_public_key}
    */
    readonly clusterPublicKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#cluster_revision_number RedshiftCluster#cluster_revision_number}
    */
    readonly clusterRevisionNumber?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#cluster_security_groups RedshiftCluster#cluster_security_groups}
    */
    readonly clusterSecurityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#cluster_subnet_group_name RedshiftCluster#cluster_subnet_group_name}
    */
    readonly clusterSubnetGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#cluster_type RedshiftCluster#cluster_type}
    */
    readonly clusterType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#cluster_version RedshiftCluster#cluster_version}
    */
    readonly clusterVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#database_name RedshiftCluster#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#elastic_ip RedshiftCluster#elastic_ip}
    */
    readonly elasticIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#encrypted RedshiftCluster#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#endpoint RedshiftCluster#endpoint}
    */
    readonly endpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#enhanced_vpc_routing RedshiftCluster#enhanced_vpc_routing}
    */
    readonly enhancedVpcRouting?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#final_snapshot_identifier RedshiftCluster#final_snapshot_identifier}
    */
    readonly finalSnapshotIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#iam_roles RedshiftCluster#iam_roles}
    */
    readonly iamRoles?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#kms_key_id RedshiftCluster#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#master_password RedshiftCluster#master_password}
    */
    readonly masterPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#master_username RedshiftCluster#master_username}
    */
    readonly masterUsername?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#node_type RedshiftCluster#node_type}
    */
    readonly nodeType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#number_of_nodes RedshiftCluster#number_of_nodes}
    */
    readonly numberOfNodes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#owner_account RedshiftCluster#owner_account}
    */
    readonly ownerAccount?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#port RedshiftCluster#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#preferred_maintenance_window RedshiftCluster#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#publicly_accessible RedshiftCluster#publicly_accessible}
    */
    readonly publiclyAccessible?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#skip_final_snapshot RedshiftCluster#skip_final_snapshot}
    */
    readonly skipFinalSnapshot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#snapshot_cluster_identifier RedshiftCluster#snapshot_cluster_identifier}
    */
    readonly snapshotClusterIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#snapshot_identifier RedshiftCluster#snapshot_identifier}
    */
    readonly snapshotIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#tags RedshiftCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#tags_all RedshiftCluster#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#vpc_security_group_ids RedshiftCluster#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * logging block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#logging RedshiftCluster#logging}
    */
    readonly logging?: RedshiftClusterLogging;
    /**
    * snapshot_copy block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#snapshot_copy RedshiftCluster#snapshot_copy}
    */
    readonly snapshotCopy?: RedshiftClusterSnapshotCopy;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#timeouts RedshiftCluster#timeouts}
    */
    readonly timeouts?: RedshiftClusterTimeouts;
}
export declare class RedshiftClusterClusterNodes extends cdktf.ComplexComputedList {
    get nodeRole(): string;
    get privateIpAddress(): string;
    get publicIpAddress(): string;
}
export interface RedshiftClusterLogging {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#bucket_name RedshiftCluster#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#enable RedshiftCluster#enable}
    */
    readonly enable: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#s3_key_prefix RedshiftCluster#s3_key_prefix}
    */
    readonly s3KeyPrefix?: string;
}
export declare function redshiftClusterLoggingToTerraform(struct?: RedshiftClusterLoggingOutputReference | RedshiftClusterLogging): any;
export declare class RedshiftClusterLoggingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): RedshiftClusterLogging | undefined;
    set internalValue(value: RedshiftClusterLogging | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    resetBucketName(): void;
    get bucketNameInput(): string;
    private _enable?;
    get enable(): boolean | cdktf.IResolvable;
    set enable(value: boolean | cdktf.IResolvable);
    get enableInput(): boolean | cdktf.IResolvable;
    private _s3KeyPrefix?;
    get s3KeyPrefix(): string;
    set s3KeyPrefix(value: string);
    resetS3KeyPrefix(): void;
    get s3KeyPrefixInput(): string;
}
export interface RedshiftClusterSnapshotCopy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#destination_region RedshiftCluster#destination_region}
    */
    readonly destinationRegion: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#grant_name RedshiftCluster#grant_name}
    */
    readonly grantName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#retention_period RedshiftCluster#retention_period}
    */
    readonly retentionPeriod?: number;
}
export declare function redshiftClusterSnapshotCopyToTerraform(struct?: RedshiftClusterSnapshotCopyOutputReference | RedshiftClusterSnapshotCopy): any;
export declare class RedshiftClusterSnapshotCopyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): RedshiftClusterSnapshotCopy | undefined;
    set internalValue(value: RedshiftClusterSnapshotCopy | undefined);
    private _destinationRegion?;
    get destinationRegion(): string;
    set destinationRegion(value: string);
    get destinationRegionInput(): string;
    private _grantName?;
    get grantName(): string;
    set grantName(value: string);
    resetGrantName(): void;
    get grantNameInput(): string;
    private _retentionPeriod?;
    get retentionPeriod(): number;
    set retentionPeriod(value: number);
    resetRetentionPeriod(): void;
    get retentionPeriodInput(): number;
}
export interface RedshiftClusterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#create RedshiftCluster#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#delete RedshiftCluster#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#update RedshiftCluster#update}
    */
    readonly update?: string;
}
export declare function redshiftClusterTimeoutsToTerraform(struct?: RedshiftClusterTimeoutsOutputReference | RedshiftClusterTimeouts): any;
export declare class RedshiftClusterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): RedshiftClusterTimeouts | undefined;
    set internalValue(value: RedshiftClusterTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html aws_redshift_cluster}
*/
export declare class RedshiftCluster extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html aws_redshift_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftClusterConfig
    */
    constructor(scope: Construct, id: string, config: RedshiftClusterConfig);
    private _allowVersionUpgrade?;
    get allowVersionUpgrade(): boolean | cdktf.IResolvable;
    set allowVersionUpgrade(value: boolean | cdktf.IResolvable);
    resetAllowVersionUpgrade(): void;
    get allowVersionUpgradeInput(): boolean | cdktf.IResolvable;
    get arn(): string;
    private _automatedSnapshotRetentionPeriod?;
    get automatedSnapshotRetentionPeriod(): number;
    set automatedSnapshotRetentionPeriod(value: number);
    resetAutomatedSnapshotRetentionPeriod(): void;
    get automatedSnapshotRetentionPeriodInput(): number;
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string;
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    get clusterIdentifierInput(): string;
    clusterNodes(index: string): RedshiftClusterClusterNodes;
    private _clusterParameterGroupName?;
    get clusterParameterGroupName(): string;
    set clusterParameterGroupName(value: string);
    resetClusterParameterGroupName(): void;
    get clusterParameterGroupNameInput(): string;
    private _clusterPublicKey?;
    get clusterPublicKey(): string;
    set clusterPublicKey(value: string);
    resetClusterPublicKey(): void;
    get clusterPublicKeyInput(): string;
    private _clusterRevisionNumber?;
    get clusterRevisionNumber(): string;
    set clusterRevisionNumber(value: string);
    resetClusterRevisionNumber(): void;
    get clusterRevisionNumberInput(): string;
    private _clusterSecurityGroups?;
    get clusterSecurityGroups(): string[];
    set clusterSecurityGroups(value: string[]);
    resetClusterSecurityGroups(): void;
    get clusterSecurityGroupsInput(): string[];
    private _clusterSubnetGroupName?;
    get clusterSubnetGroupName(): string;
    set clusterSubnetGroupName(value: string);
    resetClusterSubnetGroupName(): void;
    get clusterSubnetGroupNameInput(): string;
    private _clusterType?;
    get clusterType(): string;
    set clusterType(value: string);
    resetClusterType(): void;
    get clusterTypeInput(): string;
    private _clusterVersion?;
    get clusterVersion(): string;
    set clusterVersion(value: string);
    resetClusterVersion(): void;
    get clusterVersionInput(): string;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    resetDatabaseName(): void;
    get databaseNameInput(): string;
    get dnsName(): string;
    private _elasticIp?;
    get elasticIp(): string;
    set elasticIp(value: string);
    resetElasticIp(): void;
    get elasticIpInput(): string;
    private _encrypted?;
    get encrypted(): boolean | cdktf.IResolvable;
    set encrypted(value: boolean | cdktf.IResolvable);
    resetEncrypted(): void;
    get encryptedInput(): boolean | cdktf.IResolvable;
    private _endpoint?;
    get endpoint(): string;
    set endpoint(value: string);
    resetEndpoint(): void;
    get endpointInput(): string;
    private _enhancedVpcRouting?;
    get enhancedVpcRouting(): boolean | cdktf.IResolvable;
    set enhancedVpcRouting(value: boolean | cdktf.IResolvable);
    resetEnhancedVpcRouting(): void;
    get enhancedVpcRoutingInput(): boolean | cdktf.IResolvable;
    private _finalSnapshotIdentifier?;
    get finalSnapshotIdentifier(): string;
    set finalSnapshotIdentifier(value: string);
    resetFinalSnapshotIdentifier(): void;
    get finalSnapshotIdentifierInput(): string;
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
    private _nodeType?;
    get nodeType(): string;
    set nodeType(value: string);
    get nodeTypeInput(): string;
    private _numberOfNodes?;
    get numberOfNodes(): number;
    set numberOfNodes(value: number);
    resetNumberOfNodes(): void;
    get numberOfNodesInput(): number;
    private _ownerAccount?;
    get ownerAccount(): string;
    set ownerAccount(value: string);
    resetOwnerAccount(): void;
    get ownerAccountInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number;
    private _preferredMaintenanceWindow?;
    get preferredMaintenanceWindow(): string;
    set preferredMaintenanceWindow(value: string);
    resetPreferredMaintenanceWindow(): void;
    get preferredMaintenanceWindowInput(): string;
    private _publiclyAccessible?;
    get publiclyAccessible(): boolean | cdktf.IResolvable;
    set publiclyAccessible(value: boolean | cdktf.IResolvable);
    resetPubliclyAccessible(): void;
    get publiclyAccessibleInput(): boolean | cdktf.IResolvable;
    private _skipFinalSnapshot?;
    get skipFinalSnapshot(): boolean | cdktf.IResolvable;
    set skipFinalSnapshot(value: boolean | cdktf.IResolvable);
    resetSkipFinalSnapshot(): void;
    get skipFinalSnapshotInput(): boolean | cdktf.IResolvable;
    private _snapshotClusterIdentifier?;
    get snapshotClusterIdentifier(): string;
    set snapshotClusterIdentifier(value: string);
    resetSnapshotClusterIdentifier(): void;
    get snapshotClusterIdentifierInput(): string;
    private _snapshotIdentifier?;
    get snapshotIdentifier(): string;
    set snapshotIdentifier(value: string);
    resetSnapshotIdentifier(): void;
    get snapshotIdentifierInput(): string;
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
    private _logging;
    get logging(): RedshiftClusterLoggingOutputReference;
    putLogging(value: RedshiftClusterLogging): void;
    resetLogging(): void;
    get loggingInput(): RedshiftClusterLogging;
    private _snapshotCopy;
    get snapshotCopy(): RedshiftClusterSnapshotCopyOutputReference;
    putSnapshotCopy(value: RedshiftClusterSnapshotCopy): void;
    resetSnapshotCopy(): void;
    get snapshotCopyInput(): RedshiftClusterSnapshotCopy;
    private _timeouts;
    get timeouts(): RedshiftClusterTimeoutsOutputReference;
    putTimeouts(value: RedshiftClusterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): RedshiftClusterTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=redshift-cluster.d.ts.map