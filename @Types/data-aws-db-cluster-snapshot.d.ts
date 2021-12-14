import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Relational Database Service
*/
export interface DataAwsDbClusterSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html#db_cluster_identifier DataAwsDbClusterSnapshot#db_cluster_identifier}
    */
    readonly dbClusterIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html#db_cluster_snapshot_identifier DataAwsDbClusterSnapshot#db_cluster_snapshot_identifier}
    */
    readonly dbClusterSnapshotIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html#include_public DataAwsDbClusterSnapshot#include_public}
    */
    readonly includePublic?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html#include_shared DataAwsDbClusterSnapshot#include_shared}
    */
    readonly includeShared?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html#most_recent DataAwsDbClusterSnapshot#most_recent}
    */
    readonly mostRecent?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html#snapshot_type DataAwsDbClusterSnapshot#snapshot_type}
    */
    readonly snapshotType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html#tags DataAwsDbClusterSnapshot#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html aws_db_cluster_snapshot}
*/
export declare class DataAwsDbClusterSnapshot extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html aws_db_cluster_snapshot} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDbClusterSnapshotConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsDbClusterSnapshotConfig);
    get allocatedStorage(): number;
    get availabilityZones(): string[];
    private _dbClusterIdentifier?;
    get dbClusterIdentifier(): string;
    set dbClusterIdentifier(value: string);
    resetDbClusterIdentifier(): void;
    get dbClusterIdentifierInput(): string;
    get dbClusterSnapshotArn(): string;
    private _dbClusterSnapshotIdentifier?;
    get dbClusterSnapshotIdentifier(): string;
    set dbClusterSnapshotIdentifier(value: string);
    resetDbClusterSnapshotIdentifier(): void;
    get dbClusterSnapshotIdentifierInput(): string;
    get engine(): string;
    get engineVersion(): string;
    get id(): string;
    private _includePublic?;
    get includePublic(): boolean | cdktf.IResolvable;
    set includePublic(value: boolean | cdktf.IResolvable);
    resetIncludePublic(): void;
    get includePublicInput(): boolean | cdktf.IResolvable;
    private _includeShared?;
    get includeShared(): boolean | cdktf.IResolvable;
    set includeShared(value: boolean | cdktf.IResolvable);
    resetIncludeShared(): void;
    get includeSharedInput(): boolean | cdktf.IResolvable;
    get kmsKeyId(): string;
    get licenseModel(): string;
    private _mostRecent?;
    get mostRecent(): boolean | cdktf.IResolvable;
    set mostRecent(value: boolean | cdktf.IResolvable);
    resetMostRecent(): void;
    get mostRecentInput(): boolean | cdktf.IResolvable;
    get port(): number;
    get snapshotCreateTime(): string;
    private _snapshotType?;
    get snapshotType(): string;
    set snapshotType(value: string);
    resetSnapshotType(): void;
    get snapshotTypeInput(): string;
    get sourceDbClusterSnapshotArn(): string;
    get status(): string;
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
    get vpcId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-db-cluster-snapshot.d.ts.map