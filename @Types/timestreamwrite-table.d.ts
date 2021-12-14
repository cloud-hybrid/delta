import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Timestream Write
*/
export interface TimestreamwriteTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html#database_name TimestreamwriteTable#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html#table_name TimestreamwriteTable#table_name}
    */
    readonly tableName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html#tags TimestreamwriteTable#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html#tags_all TimestreamwriteTable#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * retention_properties block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html#retention_properties TimestreamwriteTable#retention_properties}
    */
    readonly retentionProperties?: TimestreamwriteTableRetentionProperties;
}
export interface TimestreamwriteTableRetentionProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html#magnetic_store_retention_period_in_days TimestreamwriteTable#magnetic_store_retention_period_in_days}
    */
    readonly magneticStoreRetentionPeriodInDays: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html#memory_store_retention_period_in_hours TimestreamwriteTable#memory_store_retention_period_in_hours}
    */
    readonly memoryStoreRetentionPeriodInHours: number;
}
export declare function timestreamwriteTableRetentionPropertiesToTerraform(struct?: TimestreamwriteTableRetentionPropertiesOutputReference | TimestreamwriteTableRetentionProperties): any;
export declare class TimestreamwriteTableRetentionPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): TimestreamwriteTableRetentionProperties | undefined;
    set internalValue(value: TimestreamwriteTableRetentionProperties | undefined);
    private _magneticStoreRetentionPeriodInDays?;
    get magneticStoreRetentionPeriodInDays(): number;
    set magneticStoreRetentionPeriodInDays(value: number);
    get magneticStoreRetentionPeriodInDaysInput(): number;
    private _memoryStoreRetentionPeriodInHours?;
    get memoryStoreRetentionPeriodInHours(): number;
    set memoryStoreRetentionPeriodInHours(value: number);
    get memoryStoreRetentionPeriodInHoursInput(): number;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html aws_timestreamwrite_table}
*/
export declare class TimestreamwriteTable extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html aws_timestreamwrite_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TimestreamwriteTableConfig
    */
    constructor(scope: Construct, id: string, config: TimestreamwriteTableConfig);
    get arn(): string;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string;
    get id(): string;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string;
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
    private _retentionProperties;
    get retentionProperties(): TimestreamwriteTableRetentionPropertiesOutputReference;
    putRetentionProperties(value: TimestreamwriteTableRetentionProperties): void;
    resetRetentionProperties(): void;
    get retentionPropertiesInput(): TimestreamwriteTableRetentionProperties;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=timestreamwrite-table.d.ts.map