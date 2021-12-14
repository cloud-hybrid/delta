import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Glue
*/
export interface GluePartitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#catalog_id GluePartition#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#database_name GluePartition#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#parameters GluePartition#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#partition_values GluePartition#partition_values}
    */
    readonly partitionValues: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#table_name GluePartition#table_name}
    */
    readonly tableName: string;
    /**
    * storage_descriptor block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#storage_descriptor GluePartition#storage_descriptor}
    */
    readonly storageDescriptor?: GluePartitionStorageDescriptor;
}
export interface GluePartitionStorageDescriptorColumns {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#comment GluePartition#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#name GluePartition#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#type GluePartition#type}
    */
    readonly type?: string;
}
export declare function gluePartitionStorageDescriptorColumnsToTerraform(struct?: GluePartitionStorageDescriptorColumns): any;
export interface GluePartitionStorageDescriptorSerDeInfo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#name GluePartition#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#parameters GluePartition#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#serialization_library GluePartition#serialization_library}
    */
    readonly serializationLibrary?: string;
}
export declare function gluePartitionStorageDescriptorSerDeInfoToTerraform(struct?: GluePartitionStorageDescriptorSerDeInfoOutputReference | GluePartitionStorageDescriptorSerDeInfo): any;
export declare class GluePartitionStorageDescriptorSerDeInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GluePartitionStorageDescriptorSerDeInfo | undefined;
    set internalValue(value: GluePartitionStorageDescriptorSerDeInfo | undefined);
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
export interface GluePartitionStorageDescriptorSkewedInfo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#skewed_column_names GluePartition#skewed_column_names}
    */
    readonly skewedColumnNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#skewed_column_value_location_maps GluePartition#skewed_column_value_location_maps}
    */
    readonly skewedColumnValueLocationMaps?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#skewed_column_values GluePartition#skewed_column_values}
    */
    readonly skewedColumnValues?: string[];
}
export declare function gluePartitionStorageDescriptorSkewedInfoToTerraform(struct?: GluePartitionStorageDescriptorSkewedInfoOutputReference | GluePartitionStorageDescriptorSkewedInfo): any;
export declare class GluePartitionStorageDescriptorSkewedInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GluePartitionStorageDescriptorSkewedInfo | undefined;
    set internalValue(value: GluePartitionStorageDescriptorSkewedInfo | undefined);
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
export interface GluePartitionStorageDescriptorSortColumns {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#column GluePartition#column}
    */
    readonly column: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#sort_order GluePartition#sort_order}
    */
    readonly sortOrder: number;
}
export declare function gluePartitionStorageDescriptorSortColumnsToTerraform(struct?: GluePartitionStorageDescriptorSortColumns): any;
export interface GluePartitionStorageDescriptor {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#bucket_columns GluePartition#bucket_columns}
    */
    readonly bucketColumns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#compressed GluePartition#compressed}
    */
    readonly compressed?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#input_format GluePartition#input_format}
    */
    readonly inputFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#location GluePartition#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#number_of_buckets GluePartition#number_of_buckets}
    */
    readonly numberOfBuckets?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#output_format GluePartition#output_format}
    */
    readonly outputFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#parameters GluePartition#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#stored_as_sub_directories GluePartition#stored_as_sub_directories}
    */
    readonly storedAsSubDirectories?: boolean | cdktf.IResolvable;
    /**
    * columns block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#columns GluePartition#columns}
    */
    readonly columns?: GluePartitionStorageDescriptorColumns[];
    /**
    * ser_de_info block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#ser_de_info GluePartition#ser_de_info}
    */
    readonly serDeInfo?: GluePartitionStorageDescriptorSerDeInfo;
    /**
    * skewed_info block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#skewed_info GluePartition#skewed_info}
    */
    readonly skewedInfo?: GluePartitionStorageDescriptorSkewedInfo;
    /**
    * sort_columns block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#sort_columns GluePartition#sort_columns}
    */
    readonly sortColumns?: GluePartitionStorageDescriptorSortColumns[];
}
export declare function gluePartitionStorageDescriptorToTerraform(struct?: GluePartitionStorageDescriptorOutputReference | GluePartitionStorageDescriptor): any;
export declare class GluePartitionStorageDescriptorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GluePartitionStorageDescriptor | undefined;
    set internalValue(value: GluePartitionStorageDescriptor | undefined);
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
    get columns(): GluePartitionStorageDescriptorColumns[];
    set columns(value: GluePartitionStorageDescriptorColumns[]);
    resetColumns(): void;
    get columnsInput(): GluePartitionStorageDescriptorColumns[];
    private _serDeInfo;
    get serDeInfo(): GluePartitionStorageDescriptorSerDeInfoOutputReference;
    putSerDeInfo(value: GluePartitionStorageDescriptorSerDeInfo): void;
    resetSerDeInfo(): void;
    get serDeInfoInput(): GluePartitionStorageDescriptorSerDeInfo;
    private _skewedInfo;
    get skewedInfo(): GluePartitionStorageDescriptorSkewedInfoOutputReference;
    putSkewedInfo(value: GluePartitionStorageDescriptorSkewedInfo): void;
    resetSkewedInfo(): void;
    get skewedInfoInput(): GluePartitionStorageDescriptorSkewedInfo;
    private _sortColumns?;
    get sortColumns(): GluePartitionStorageDescriptorSortColumns[];
    set sortColumns(value: GluePartitionStorageDescriptorSortColumns[]);
    resetSortColumns(): void;
    get sortColumnsInput(): GluePartitionStorageDescriptorSortColumns[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html aws_glue_partition}
*/
export declare class GluePartition extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html aws_glue_partition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GluePartitionConfig
    */
    constructor(scope: Construct, id: string, config: GluePartitionConfig);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string;
    get creationTime(): string;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string;
    get id(): string;
    get lastAccessedTime(): string;
    get lastAnalyzedTime(): string;
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
    private _partitionValues?;
    get partitionValues(): string[];
    set partitionValues(value: string[]);
    get partitionValuesInput(): string[];
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string;
    private _storageDescriptor;
    get storageDescriptor(): GluePartitionStorageDescriptorOutputReference;
    putStorageDescriptor(value: GluePartitionStorageDescriptor): void;
    resetStorageDescriptor(): void;
    get storageDescriptorInput(): GluePartitionStorageDescriptor;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=glue-partition.d.ts.map