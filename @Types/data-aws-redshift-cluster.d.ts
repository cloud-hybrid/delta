import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Redshift
*/
export interface DataAwsRedshiftClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster.html#cluster_identifier DataAwsRedshiftCluster#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster.html#tags DataAwsRedshiftCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster.html aws_redshift_cluster}
*/
export declare class DataAwsRedshiftCluster extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster.html aws_redshift_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRedshiftClusterConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsRedshiftClusterConfig);
    get allowVersionUpgrade(): any;
    get automatedSnapshotRetentionPeriod(): number;
    get availabilityZone(): string;
    get bucketName(): string;
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    get clusterIdentifierInput(): string;
    get clusterParameterGroupName(): string;
    get clusterPublicKey(): string;
    get clusterRevisionNumber(): string;
    get clusterSecurityGroups(): string[];
    get clusterSubnetGroupName(): string;
    get clusterType(): string;
    get clusterVersion(): string;
    get databaseName(): string;
    get elasticIp(): string;
    get enableLogging(): any;
    get encrypted(): any;
    get endpoint(): string;
    get enhancedVpcRouting(): any;
    get iamRoles(): string[];
    get id(): string;
    get kmsKeyId(): string;
    get masterUsername(): string;
    get nodeType(): string;
    get numberOfNodes(): number;
    get port(): number;
    get preferredMaintenanceWindow(): string;
    get publiclyAccessible(): any;
    get s3KeyPrefix(): string;
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
    get vpcId(): string;
    get vpcSecurityGroupIds(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-redshift-cluster.d.ts.map