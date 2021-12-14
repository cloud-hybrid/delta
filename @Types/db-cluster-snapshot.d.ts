import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Relational Database Service
*/
export interface DbClusterSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_cluster_snapshot.html#db_cluster_identifier DbClusterSnapshot#db_cluster_identifier}
    */
    readonly dbClusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_cluster_snapshot.html#db_cluster_snapshot_identifier DbClusterSnapshot#db_cluster_snapshot_identifier}
    */
    readonly dbClusterSnapshotIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_cluster_snapshot.html#tags DbClusterSnapshot#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_cluster_snapshot.html#tags_all DbClusterSnapshot#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_cluster_snapshot.html#timeouts DbClusterSnapshot#timeouts}
    */
    readonly timeouts?: DbClusterSnapshotTimeouts;
}
export interface DbClusterSnapshotTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_cluster_snapshot.html#create DbClusterSnapshot#create}
    */
    readonly create?: string;
}
export declare function dbClusterSnapshotTimeoutsToTerraform(struct?: DbClusterSnapshotTimeoutsOutputReference | DbClusterSnapshotTimeouts): any;
export declare class DbClusterSnapshotTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DbClusterSnapshotTimeouts | undefined;
    set internalValue(value: DbClusterSnapshotTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_cluster_snapshot.html aws_db_cluster_snapshot}
*/
export declare class DbClusterSnapshot extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_cluster_snapshot.html aws_db_cluster_snapshot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbClusterSnapshotConfig
    */
    constructor(scope: Construct, id: string, config: DbClusterSnapshotConfig);
    get allocatedStorage(): number;
    get availabilityZones(): string[];
    private _dbClusterIdentifier?;
    get dbClusterIdentifier(): string;
    set dbClusterIdentifier(value: string);
    get dbClusterIdentifierInput(): string;
    get dbClusterSnapshotArn(): string;
    private _dbClusterSnapshotIdentifier?;
    get dbClusterSnapshotIdentifier(): string;
    set dbClusterSnapshotIdentifier(value: string);
    get dbClusterSnapshotIdentifierInput(): string;
    get engine(): string;
    get engineVersion(): string;
    get id(): string;
    get kmsKeyId(): string;
    get licenseModel(): string;
    get port(): number;
    get snapshotType(): string;
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
    private _timeouts;
    get timeouts(): DbClusterSnapshotTimeoutsOutputReference;
    putTimeouts(value: DbClusterSnapshotTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): DbClusterSnapshotTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=db-cluster-snapshot.d.ts.map