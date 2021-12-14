import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS DocumentDB
*/
export interface DocdbClusterSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_snapshot.html#db_cluster_identifier DocdbClusterSnapshot#db_cluster_identifier}
    */
    readonly dbClusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_snapshot.html#db_cluster_snapshot_identifier DocdbClusterSnapshot#db_cluster_snapshot_identifier}
    */
    readonly dbClusterSnapshotIdentifier: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_snapshot.html#timeouts DocdbClusterSnapshot#timeouts}
    */
    readonly timeouts?: DocdbClusterSnapshotTimeouts;
}
export interface DocdbClusterSnapshotTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_snapshot.html#create DocdbClusterSnapshot#create}
    */
    readonly create?: string;
}
export declare function docdbClusterSnapshotTimeoutsToTerraform(struct?: DocdbClusterSnapshotTimeoutsOutputReference | DocdbClusterSnapshotTimeouts): any;
export declare class DocdbClusterSnapshotTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DocdbClusterSnapshotTimeouts | undefined;
    set internalValue(value: DocdbClusterSnapshotTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_snapshot.html aws_docdb_cluster_snapshot}
*/
export declare class DocdbClusterSnapshot extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_snapshot.html aws_docdb_cluster_snapshot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DocdbClusterSnapshotConfig
    */
    constructor(scope: Construct, id: string, config: DocdbClusterSnapshotConfig);
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
    get port(): number;
    get snapshotType(): string;
    get sourceDbClusterSnapshotArn(): string;
    get status(): string;
    get storageEncrypted(): any;
    get vpcId(): string;
    private _timeouts;
    get timeouts(): DocdbClusterSnapshotTimeoutsOutputReference;
    putTimeouts(value: DocdbClusterSnapshotTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): DocdbClusterSnapshotTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=docdb-cluster-snapshot.d.ts.map