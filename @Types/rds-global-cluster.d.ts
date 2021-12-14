import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Relational Database Service
*/
export interface RdsGlobalClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#database_name RdsGlobalCluster#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#deletion_protection RdsGlobalCluster#deletion_protection}
    */
    readonly deletionProtection?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#engine RdsGlobalCluster#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#engine_version RdsGlobalCluster#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#force_destroy RdsGlobalCluster#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#global_cluster_identifier RdsGlobalCluster#global_cluster_identifier}
    */
    readonly globalClusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#source_db_cluster_identifier RdsGlobalCluster#source_db_cluster_identifier}
    */
    readonly sourceDbClusterIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#storage_encrypted RdsGlobalCluster#storage_encrypted}
    */
    readonly storageEncrypted?: boolean | cdktf.IResolvable;
}
export declare class RdsGlobalClusterGlobalClusterMembers extends cdktf.ComplexComputedList {
    get dbClusterArn(): string;
    get isWriter(): any;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html aws_rds_global_cluster}
*/
export declare class RdsGlobalCluster extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html aws_rds_global_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsGlobalClusterConfig
    */
    constructor(scope: Construct, id: string, config: RdsGlobalClusterConfig);
    get arn(): string;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    resetDatabaseName(): void;
    get databaseNameInput(): string;
    private _deletionProtection?;
    get deletionProtection(): boolean | cdktf.IResolvable;
    set deletionProtection(value: boolean | cdktf.IResolvable);
    resetDeletionProtection(): void;
    get deletionProtectionInput(): boolean | cdktf.IResolvable;
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
    private _forceDestroy?;
    get forceDestroy(): boolean | cdktf.IResolvable;
    set forceDestroy(value: boolean | cdktf.IResolvable);
    resetForceDestroy(): void;
    get forceDestroyInput(): boolean | cdktf.IResolvable;
    private _globalClusterIdentifier?;
    get globalClusterIdentifier(): string;
    set globalClusterIdentifier(value: string);
    get globalClusterIdentifierInput(): string;
    globalClusterMembers(index: string): RdsGlobalClusterGlobalClusterMembers;
    get globalClusterResourceId(): string;
    get id(): string;
    private _sourceDbClusterIdentifier?;
    get sourceDbClusterIdentifier(): string;
    set sourceDbClusterIdentifier(value: string);
    resetSourceDbClusterIdentifier(): void;
    get sourceDbClusterIdentifierInput(): string;
    private _storageEncrypted?;
    get storageEncrypted(): boolean | cdktf.IResolvable;
    set storageEncrypted(value: boolean | cdktf.IResolvable);
    resetStorageEncrypted(): void;
    get storageEncryptedInput(): boolean | cdktf.IResolvable;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=rds-global-cluster.d.ts.map