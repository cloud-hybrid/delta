import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS DocumentDB
*/
export interface DocdbGlobalClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_global_cluster.html#database_name DocdbGlobalCluster#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_global_cluster.html#deletion_protection DocdbGlobalCluster#deletion_protection}
    */
    readonly deletionProtection?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_global_cluster.html#engine DocdbGlobalCluster#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_global_cluster.html#engine_version DocdbGlobalCluster#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_global_cluster.html#global_cluster_identifier DocdbGlobalCluster#global_cluster_identifier}
    */
    readonly globalClusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_global_cluster.html#source_db_cluster_identifier DocdbGlobalCluster#source_db_cluster_identifier}
    */
    readonly sourceDbClusterIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_global_cluster.html#storage_encrypted DocdbGlobalCluster#storage_encrypted}
    */
    readonly storageEncrypted?: boolean | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_global_cluster.html#timeouts DocdbGlobalCluster#timeouts}
    */
    readonly timeouts?: DocdbGlobalClusterTimeouts;
}
export declare class DocdbGlobalClusterGlobalClusterMembers extends cdktf.ComplexComputedList {
    get dbClusterArn(): string;
    get isWriter(): any;
}
export interface DocdbGlobalClusterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_global_cluster.html#create DocdbGlobalCluster#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_global_cluster.html#delete DocdbGlobalCluster#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_global_cluster.html#update DocdbGlobalCluster#update}
    */
    readonly update?: string;
}
export declare function docdbGlobalClusterTimeoutsToTerraform(struct?: DocdbGlobalClusterTimeoutsOutputReference | DocdbGlobalClusterTimeouts): any;
export declare class DocdbGlobalClusterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DocdbGlobalClusterTimeouts | undefined;
    set internalValue(value: DocdbGlobalClusterTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/docdb_global_cluster.html aws_docdb_global_cluster}
*/
export declare class DocdbGlobalCluster extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/docdb_global_cluster.html aws_docdb_global_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DocdbGlobalClusterConfig
    */
    constructor(scope: Construct, id: string, config: DocdbGlobalClusterConfig);
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
    private _globalClusterIdentifier?;
    get globalClusterIdentifier(): string;
    set globalClusterIdentifier(value: string);
    get globalClusterIdentifierInput(): string;
    globalClusterMembers(index: string): DocdbGlobalClusterGlobalClusterMembers;
    get globalClusterResourceId(): string;
    get id(): string;
    private _sourceDbClusterIdentifier?;
    get sourceDbClusterIdentifier(): string;
    set sourceDbClusterIdentifier(value: string);
    resetSourceDbClusterIdentifier(): void;
    get sourceDbClusterIdentifierInput(): string;
    get status(): string;
    private _storageEncrypted?;
    get storageEncrypted(): boolean | cdktf.IResolvable;
    set storageEncrypted(value: boolean | cdktf.IResolvable);
    resetStorageEncrypted(): void;
    get storageEncryptedInput(): boolean | cdktf.IResolvable;
    private _timeouts;
    get timeouts(): DocdbGlobalClusterTimeoutsOutputReference;
    putTimeouts(value: DocdbGlobalClusterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): DocdbGlobalClusterTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=docdb-global-cluster.d.ts.map