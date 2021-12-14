import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Glue
*/
export interface GluePartitionIndexConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index.html#catalog_id GluePartitionIndex#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index.html#database_name GluePartitionIndex#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index.html#table_name GluePartitionIndex#table_name}
    */
    readonly tableName: string;
    /**
    * partition_index block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index.html#partition_index GluePartitionIndex#partition_index}
    */
    readonly partitionIndex: GluePartitionIndexPartitionIndex;
}
export interface GluePartitionIndexPartitionIndex {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index.html#index_name GluePartitionIndex#index_name}
    */
    readonly indexName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index.html#keys GluePartitionIndex#keys}
    */
    readonly keys?: string[];
}
export declare function gluePartitionIndexPartitionIndexToTerraform(struct?: GluePartitionIndexPartitionIndexOutputReference | GluePartitionIndexPartitionIndex): any;
export declare class GluePartitionIndexPartitionIndexOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GluePartitionIndexPartitionIndex | undefined;
    set internalValue(value: GluePartitionIndexPartitionIndex | undefined);
    private _indexName?;
    get indexName(): string;
    set indexName(value: string);
    resetIndexName(): void;
    get indexNameInput(): string;
    private _keys?;
    get keys(): string[];
    set keys(value: string[]);
    resetKeys(): void;
    get keysInput(): string[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index.html aws_glue_partition_index}
*/
export declare class GluePartitionIndex extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index.html aws_glue_partition_index} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GluePartitionIndexConfig
    */
    constructor(scope: Construct, id: string, config: GluePartitionIndexConfig);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string;
    get id(): string;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string;
    private _partitionIndex;
    get partitionIndex(): GluePartitionIndexPartitionIndexOutputReference;
    putPartitionIndex(value: GluePartitionIndexPartitionIndex): void;
    get partitionIndexInput(): GluePartitionIndexPartitionIndex;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=glue-partition-index.d.ts.map