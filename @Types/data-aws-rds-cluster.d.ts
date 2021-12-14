import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Relational Database Service
*/
export interface DataAwsRdsClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_cluster.html#cluster_identifier DataAwsRdsCluster#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_cluster.html#tags DataAwsRdsCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/rds_cluster.html aws_rds_cluster}
*/
export declare class DataAwsRdsCluster extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/rds_cluster.html aws_rds_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRdsClusterConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsRdsClusterConfig);
    get arn(): string;
    get availabilityZones(): string[];
    get backtrackWindow(): number;
    get backupRetentionPeriod(): number;
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    get clusterIdentifierInput(): string;
    get clusterMembers(): string[];
    get clusterResourceId(): string;
    get databaseName(): string;
    get dbClusterParameterGroupName(): string;
    get dbSubnetGroupName(): string;
    get enabledCloudwatchLogsExports(): string[];
    get endpoint(): string;
    get engine(): string;
    get engineVersion(): string;
    get finalSnapshotIdentifier(): string;
    get hostedZoneId(): string;
    get iamDatabaseAuthenticationEnabled(): any;
    get iamRoles(): string[];
    get id(): string;
    get kmsKeyId(): string;
    get masterUsername(): string;
    get port(): number;
    get preferredBackupWindow(): string;
    get preferredMaintenanceWindow(): string;
    get readerEndpoint(): string;
    get replicationSourceIdentifier(): string;
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
    get vpcSecurityGroupIds(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-rds-cluster.d.ts.map