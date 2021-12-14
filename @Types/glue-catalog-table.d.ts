import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Glue
*/
export interface GlueCatalogTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#catalog_id GlueCatalogTable#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#database_name GlueCatalogTable#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#description GlueCatalogTable#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#name GlueCatalogTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#owner GlueCatalogTable#owner}
    */
    readonly owner?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#parameters GlueCatalogTable#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#retention GlueCatalogTable#retention}
    */
    readonly retention?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#table_type GlueCatalogTable#table_type}
    */
    readonly tableType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#view_expanded_text GlueCatalogTable#view_expanded_text}
    */
    readonly viewExpandedText?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#view_original_text GlueCatalogTable#view_original_text}
    */
    readonly viewOriginalText?: string;
    /**
    * partition_index block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#partition_index GlueCatalogTable#partition_index}
    */
    readonly partitionIndex?: GlueCatalogTablePartitionIndex[];
    /**
    * partition_keys block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#partition_keys GlueCatalogTable#partition_keys}
    */
    readonly partitionKeys?: GlueCatalogTablePartitionKeys[];
    /**
    * storage_descriptor block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#storage_descriptor GlueCatalogTable#storage_descriptor}
    */
    readonly storageDescriptor?: GlueCatalogTableStorageDescriptor;
    /**
    * target_table block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#target_table GlueCatalogTable#target_table}
    */
    readonly targetTable?: GlueCatalogTableTargetTable;
}
export interface GlueCatalogTablePartitionIndex {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#index_name GlueCatalogTable#index_name}
    */
    readonly indexName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#keys GlueCatalogTable#keys}
    */
    readonly keys: string[];
}
export declare function glueCatalogTablePartitionIndexToTerraform(struct?: GlueCatalogTablePartitionIndex): any;
export interface GlueCatalogTablePartitionKeys {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#comment GlueCatalogTable#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#name GlueCatalogTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#type GlueCatalogTable#type}
    */
    readonly type?: string;
}
export declare function glueCatalogTablePartitionKeysToTerraform(struct?: GlueCatalogTablePartitionKeys): any;
export interface GlueCatalogTableStorageDescriptorColumns {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#comment GlueCatalogTable#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#name GlueCatalogTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#parameters GlueCatalogTable#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#type GlueCatalogTable#type}
    */
    readonly type?: string;
}
export declare function glueCatalogTableStorageDescriptorColumnsToTerraform(struct?: GlueCatalogTableStorageDescriptorColumns): any;
export interface GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#registry_name GlueCatalogTable#registry_name}
    */
    readonly registryName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#schema_arn GlueCatalogTable#schema_arn}
    */
    readonly schemaArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#schema_name GlueCatalogTable#schema_name}
    */
    readonly schemaName?: string;
}
export declare function glueCatalogTableStorageDescriptorSchemaReferenceSchemaIdToTerraform(struct?: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference | GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId): any;
export declare class GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId | undefined;
    set internalValue(value: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId | undefined);
    private _registryName?;
    get registryName(): string;
    set registryName(value: string);
    resetRegistryName(): void;
    get registryNameInput(): string;
    private _schemaArn?;
    get schemaArn(): string;
    set schemaArn(value: string);
    resetSchemaArn(): void;
    get schemaArnInput(): string;
    private _schemaName?;
    get schemaName(): string;
    set schemaName(value: string);
    resetSchemaName(): void;
    get schemaNameInput(): string;
}
export interface GlueCatalogTableStorageDescriptorSchemaReference {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#schema_version_id GlueCatalogTable#schema_version_id}
    */
    readonly schemaVersionId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#schema_version_number GlueCatalogTable#schema_version_number}
    */
    readonly schemaVersionNumber: number;
    /**
    * schema_id block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#schema_id GlueCatalogTable#schema_id}
    */
    readonly schemaId?: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId;
}
export declare function glueCatalogTableStorageDescriptorSchemaReferenceToTerraform(struct?: GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference | GlueCatalogTableStorageDescriptorSchemaReference): any;
export declare class GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlueCatalogTableStorageDescriptorSchemaReference | undefined;
    set internalValue(value: GlueCatalogTableStorageDescriptorSchemaReference | undefined);
    private _schemaVersionId?;
    get schemaVersionId(): string;
    set schemaVersionId(value: string);
    resetSchemaVersionId(): void;
    get schemaVersionIdInput(): string;
    private _schemaVersionNumber?;
    get schemaVersionNumber(): number;
    set schemaVersionNumber(value: number);
    get schemaVersionNumberInput(): number;
    private _schemaId;
    get schemaId(): GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference;
    putSchemaId(value: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId): void;
    resetSchemaId(): void;
    get schemaIdInput(): GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId;
}
export interface GlueCatalogTableStorageDescriptorSerDeInfo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#name GlueCatalogTable#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#parameters GlueCatalogTable#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#serialization_library GlueCatalogTable#serialization_library}
    */
    readonly serializationLibrary?: string;
}
export declare function glueCatalogTableStorageDescriptorSerDeInfoToTerraform(struct?: GlueCatalogTableStorageDescriptorSerDeInfoOutputReference | GlueCatalogTableStorageDescriptorSerDeInfo): any;
export declare class GlueCatalogTableStorageDescriptorSerDeInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlueCatalogTableStorageDescriptorSerDeInfo | undefined;
    set internalValue(value: GlueCatalogTableStorageDescriptorSerDeInfo | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _parameters?;
    get parameters(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set parameters(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetParameters(): void;
    get parametersInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _serializationLibrary?;
    get serializationLibrary(): string;
    set serializationLibrary(value: string);
    resetSerializationLibrary(): void;
    get serializationLibraryInput(): string;
}
export interface GlueCatalogTableStorageDescriptorSkewedInfo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#skewed_column_names GlueCatalogTable#skewed_column_names}
    */
    readonly skewedColumnNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#skewed_column_value_location_maps GlueCatalogTable#skewed_column_value_location_maps}
    */
    readonly skewedColumnValueLocationMaps?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#skewed_column_values GlueCatalogTable#skewed_column_values}
    */
    readonly skewedColumnValues?: string[];
}
export declare function glueCatalogTableStorageDescriptorSkewedInfoToTerraform(struct?: GlueCatalogTableStorageDescriptorSkewedInfoOutputReference | GlueCatalogTableStorageDescriptorSkewedInfo): any;
export declare class GlueCatalogTableStorageDescriptorSkewedInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlueCatalogTableStorageDescriptorSkewedInfo | undefined;
    set internalValue(value: GlueCatalogTableStorageDescriptorSkewedInfo | undefined);
    private _skewedColumnNames?;
    get skewedColumnNames(): string[];
    set skewedColumnNames(value: string[]);
    resetSkewedColumnNames(): void;
    get skewedColumnNamesInput(): string[];
    private _skewedColumnValueLocationMaps?;
    get skewedColumnValueLocationMaps(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set skewedColumnValueLocationMaps(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetSkewedColumnValueLocationMaps(): void;
    get skewedColumnValueLocationMapsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _skewedColumnValues?;
    get skewedColumnValues(): string[];
    set skewedColumnValues(value: string[]);
    resetSkewedColumnValues(): void;
    get skewedColumnValuesInput(): string[];
}
export interface GlueCatalogTableStorageDescriptorSortColumns {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#column GlueCatalogTable#column}
    */
    readonly column: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#sort_order GlueCatalogTable#sort_order}
    */
    readonly sortOrder: number;
}
export declare function glueCatalogTableStorageDescriptorSortColumnsToTerraform(struct?: GlueCatalogTableStorageDescriptorSortColumns): any;
export interface GlueCatalogTableStorageDescriptor {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#bucket_columns GlueCatalogTable#bucket_columns}
    */
    readonly bucketColumns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#compressed GlueCatalogTable#compressed}
    */
    readonly compressed?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#input_format GlueCatalogTable#input_format}
    */
    readonly inputFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#location GlueCatalogTable#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#number_of_buckets GlueCatalogTable#number_of_buckets}
    */
    readonly numberOfBuckets?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#output_format GlueCatalogTable#output_format}
    */
    readonly outputFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#parameters GlueCatalogTable#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#stored_as_sub_directories GlueCatalogTable#stored_as_sub_directories}
    */
    readonly storedAsSubDirectories?: boolean | cdktf.IResolvable;
    /**
    * columns block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#columns GlueCatalogTable#columns}
    */
    readonly columns?: GlueCatalogTableStorageDescriptorColumns[];
    /**
    * schema_reference block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#schema_reference GlueCatalogTable#schema_reference}
    */
    readonly schemaReference?: GlueCatalogTableStorageDescriptorSchemaReference;
    /**
    * ser_de_info block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#ser_de_info GlueCatalogTable#ser_de_info}
    */
    readonly serDeInfo?: GlueCatalogTableStorageDescriptorSerDeInfo;
    /**
    * skewed_info block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#skewed_info GlueCatalogTable#skewed_info}
    */
    readonly skewedInfo?: GlueCatalogTableStorageDescriptorSkewedInfo;
    /**
    * sort_columns block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#sort_columns GlueCatalogTable#sort_columns}
    */
    readonly sortColumns?: GlueCatalogTableStorageDescriptorSortColumns[];
}
export declare function glueCatalogTableStorageDescriptorToTerraform(struct?: GlueCatalogTableStorageDescriptorOutputReference | GlueCatalogTableStorageDescriptor): any;
export declare class GlueCatalogTableStorageDescriptorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlueCatalogTableStorageDescriptor | undefined;
    set internalValue(value: GlueCatalogTableStorageDescriptor | undefined);
    private _bucketColumns?;
    get bucketColumns(): string[];
    set bucketColumns(value: string[]);
    resetBucketColumns(): void;
    get bucketColumnsInput(): string[];
    private _compressed?;
    get compressed(): boolean | cdktf.IResolvable;
    set compressed(value: boolean | cdktf.IResolvable);
    resetCompressed(): void;
    get compressedInput(): boolean | cdktf.IResolvable;
    private _inputFormat?;
    get inputFormat(): string;
    set inputFormat(value: string);
    resetInputFormat(): void;
    get inputFormatInput(): string;
    private _location?;
    get location(): string;
    set location(value: string);
    resetLocation(): void;
    get locationInput(): string;
    private _numberOfBuckets?;
    get numberOfBuckets(): number;
    set numberOfBuckets(value: number);
    resetNumberOfBuckets(): void;
    get numberOfBucketsInput(): number;
    private _outputFormat?;
    get outputFormat(): string;
    set outputFormat(value: string);
    resetOutputFormat(): void;
    get outputFormatInput(): string;
    private _parameters?;
    get parameters(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set parameters(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetParameters(): void;
    get parametersInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _storedAsSubDirectories?;
    get storedAsSubDirectories(): boolean | cdktf.IResolvable;
    set storedAsSubDirectories(value: boolean | cdktf.IResolvable);
    resetStoredAsSubDirectories(): void;
    get storedAsSubDirectoriesInput(): boolean | cdktf.IResolvable;
    private _columns?;
    get columns(): GlueCatalogTableStorageDescriptorColumns[];
    set columns(value: GlueCatalogTableStorageDescriptorColumns[]);
    resetColumns(): void;
    get columnsInput(): GlueCatalogTableStorageDescriptorColumns[];
    private _schemaReference;
    get schemaReference(): GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference;
    putSchemaReference(value: GlueCatalogTableStorageDescriptorSchemaReference): void;
    resetSchemaReference(): void;
    get schemaReferenceInput(): GlueCatalogTableStorageDescriptorSchemaReference;
    private _serDeInfo;
    get serDeInfo(): GlueCatalogTableStorageDescriptorSerDeInfoOutputReference;
    putSerDeInfo(value: GlueCatalogTableStorageDescriptorSerDeInfo): void;
    resetSerDeInfo(): void;
    get serDeInfoInput(): GlueCatalogTableStorageDescriptorSerDeInfo;
    private _skewedInfo;
    get skewedInfo(): GlueCatalogTableStorageDescriptorSkewedInfoOutputReference;
    putSkewedInfo(value: GlueCatalogTableStorageDescriptorSkewedInfo): void;
    resetSkewedInfo(): void;
    get skewedInfoInput(): GlueCatalogTableStorageDescriptorSkewedInfo;
    private _sortColumns?;
    get sortColumns(): GlueCatalogTableStorageDescriptorSortColumns[];
    set sortColumns(value: GlueCatalogTableStorageDescriptorSortColumns[]);
    resetSortColumns(): void;
    get sortColumnsInput(): GlueCatalogTableStorageDescriptorSortColumns[];
}
export interface GlueCatalogTableTargetTable {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#catalog_id GlueCatalogTable#catalog_id}
    */
    readonly catalogId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#database_name GlueCatalogTable#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#name GlueCatalogTable#name}
    */
    readonly name: string;
}
export declare function glueCatalogTableTargetTableToTerraform(struct?: GlueCatalogTableTargetTableOutputReference | GlueCatalogTableTargetTable): any;
export declare class GlueCatalogTableTargetTableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlueCatalogTableTargetTable | undefined;
    set internalValue(value: GlueCatalogTableTargetTable | undefined);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    get catalogIdInput(): string;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html aws_glue_catalog_table}
*/
export declare class GlueCatalogTable extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html aws_glue_catalog_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueCatalogTableConfig
    */
    constructor(scope: Construct, id: string, config: GlueCatalogTableConfig);
    get arn(): string;
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _owner?;
    get owner(): string;
    set owner(value: string);
    resetOwner(): void;
    get ownerInput(): string;
    private _parameters?;
    get parameters(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set parameters(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetParameters(): void;
    get parametersInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _retention?;
    get retention(): number;
    set retention(value: number);
    resetRetention(): void;
    get retentionInput(): number;
    private _tableType?;
    get tableType(): string;
    set tableType(value: string);
    resetTableType(): void;
    get tableTypeInput(): string;
    private _viewExpandedText?;
    get viewExpandedText(): string;
    set viewExpandedText(value: string);
    resetViewExpandedText(): void;
    get viewExpandedTextInput(): string;
    private _viewOriginalText?;
    get viewOriginalText(): string;
    set viewOriginalText(value: string);
    resetViewOriginalText(): void;
    get viewOriginalTextInput(): string;
    private _partitionIndex?;
    get partitionIndex(): GlueCatalogTablePartitionIndex[];
    set partitionIndex(value: GlueCatalogTablePartitionIndex[]);
    resetPartitionIndex(): void;
    get partitionIndexInput(): GlueCatalogTablePartitionIndex[];
    private _partitionKeys?;
    get partitionKeys(): GlueCatalogTablePartitionKeys[];
    set partitionKeys(value: GlueCatalogTablePartitionKeys[]);
    resetPartitionKeys(): void;
    get partitionKeysInput(): GlueCatalogTablePartitionKeys[];
    private _storageDescriptor;
    get storageDescriptor(): GlueCatalogTableStorageDescriptorOutputReference;
    putStorageDescriptor(value: GlueCatalogTableStorageDescriptor): void;
    resetStorageDescriptor(): void;
    get storageDescriptorInput(): GlueCatalogTableStorageDescriptor;
    private _targetTable;
    get targetTable(): GlueCatalogTableTargetTableOutputReference;
    putTargetTable(value: GlueCatalogTableTargetTable): void;
    resetTargetTable(): void;
    get targetTableInput(): GlueCatalogTableTargetTable;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=glue-catalog-table.d.ts.map