import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Lake Formation
*/
export interface DataAwsLakeformationPermissionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#catalog_id DataAwsLakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#catalog_resource DataAwsLakeformationPermissions#catalog_resource}
    */
    readonly catalogResource?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#principal DataAwsLakeformationPermissions#principal}
    */
    readonly principal: string;
    /**
    * data_location block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#data_location DataAwsLakeformationPermissions#data_location}
    */
    readonly dataLocation?: DataAwsLakeformationPermissionsDataLocation;
    /**
    * database block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#database DataAwsLakeformationPermissions#database}
    */
    readonly database?: DataAwsLakeformationPermissionsDatabase;
    /**
    * table block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#table DataAwsLakeformationPermissions#table}
    */
    readonly table?: DataAwsLakeformationPermissionsTable;
    /**
    * table_with_columns block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#table_with_columns DataAwsLakeformationPermissions#table_with_columns}
    */
    readonly tableWithColumns?: DataAwsLakeformationPermissionsTableWithColumns;
}
export interface DataAwsLakeformationPermissionsDataLocation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#arn DataAwsLakeformationPermissions#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#catalog_id DataAwsLakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
}
export declare function dataAwsLakeformationPermissionsDataLocationToTerraform(struct?: DataAwsLakeformationPermissionsDataLocationOutputReference | DataAwsLakeformationPermissionsDataLocation): any;
export declare class DataAwsLakeformationPermissionsDataLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DataAwsLakeformationPermissionsDataLocation | undefined;
    set internalValue(value: DataAwsLakeformationPermissionsDataLocation | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string;
}
export interface DataAwsLakeformationPermissionsDatabase {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#catalog_id DataAwsLakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#name DataAwsLakeformationPermissions#name}
    */
    readonly name: string;
}
export declare function dataAwsLakeformationPermissionsDatabaseToTerraform(struct?: DataAwsLakeformationPermissionsDatabaseOutputReference | DataAwsLakeformationPermissionsDatabase): any;
export declare class DataAwsLakeformationPermissionsDatabaseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DataAwsLakeformationPermissionsDatabase | undefined;
    set internalValue(value: DataAwsLakeformationPermissionsDatabase | undefined);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface DataAwsLakeformationPermissionsTable {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#catalog_id DataAwsLakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#database_name DataAwsLakeformationPermissions#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#name DataAwsLakeformationPermissions#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#wildcard DataAwsLakeformationPermissions#wildcard}
    */
    readonly wildcard?: boolean | cdktf.IResolvable;
}
export declare function dataAwsLakeformationPermissionsTableToTerraform(struct?: DataAwsLakeformationPermissionsTableOutputReference | DataAwsLakeformationPermissionsTable): any;
export declare class DataAwsLakeformationPermissionsTableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DataAwsLakeformationPermissionsTable | undefined;
    set internalValue(value: DataAwsLakeformationPermissionsTable | undefined);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _wildcard?;
    get wildcard(): boolean | cdktf.IResolvable;
    set wildcard(value: boolean | cdktf.IResolvable);
    resetWildcard(): void;
    get wildcardInput(): boolean | cdktf.IResolvable;
}
export interface DataAwsLakeformationPermissionsTableWithColumns {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#catalog_id DataAwsLakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#column_names DataAwsLakeformationPermissions#column_names}
    */
    readonly columnNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#database_name DataAwsLakeformationPermissions#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#excluded_column_names DataAwsLakeformationPermissions#excluded_column_names}
    */
    readonly excludedColumnNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#name DataAwsLakeformationPermissions#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#wildcard DataAwsLakeformationPermissions#wildcard}
    */
    readonly wildcard?: boolean | cdktf.IResolvable;
}
export declare function dataAwsLakeformationPermissionsTableWithColumnsToTerraform(struct?: DataAwsLakeformationPermissionsTableWithColumnsOutputReference | DataAwsLakeformationPermissionsTableWithColumns): any;
export declare class DataAwsLakeformationPermissionsTableWithColumnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DataAwsLakeformationPermissionsTableWithColumns | undefined;
    set internalValue(value: DataAwsLakeformationPermissionsTableWithColumns | undefined);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string;
    private _columnNames?;
    get columnNames(): string[];
    set columnNames(value: string[]);
    resetColumnNames(): void;
    get columnNamesInput(): string[];
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string;
    private _excludedColumnNames?;
    get excludedColumnNames(): string[];
    set excludedColumnNames(value: string[]);
    resetExcludedColumnNames(): void;
    get excludedColumnNamesInput(): string[];
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _wildcard?;
    get wildcard(): boolean | cdktf.IResolvable;
    set wildcard(value: boolean | cdktf.IResolvable);
    resetWildcard(): void;
    get wildcardInput(): boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html aws_lakeformation_permissions}
*/
export declare class DataAwsLakeformationPermissions extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html aws_lakeformation_permissions} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLakeformationPermissionsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsLakeformationPermissionsConfig);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string;
    private _catalogResource?;
    get catalogResource(): boolean | cdktf.IResolvable;
    set catalogResource(value: boolean | cdktf.IResolvable);
    resetCatalogResource(): void;
    get catalogResourceInput(): boolean | cdktf.IResolvable;
    get id(): string;
    get permissions(): string[];
    get permissionsWithGrantOption(): string[];
    private _principal?;
    get principal(): string;
    set principal(value: string);
    get principalInput(): string;
    private _dataLocation;
    get dataLocation(): DataAwsLakeformationPermissionsDataLocationOutputReference;
    putDataLocation(value: DataAwsLakeformationPermissionsDataLocation): void;
    resetDataLocation(): void;
    get dataLocationInput(): DataAwsLakeformationPermissionsDataLocation;
    private _database;
    get database(): DataAwsLakeformationPermissionsDatabaseOutputReference;
    putDatabase(value: DataAwsLakeformationPermissionsDatabase): void;
    resetDatabase(): void;
    get databaseInput(): DataAwsLakeformationPermissionsDatabase;
    private _table;
    get table(): DataAwsLakeformationPermissionsTableOutputReference;
    putTable(value: DataAwsLakeformationPermissionsTable): void;
    resetTable(): void;
    get tableInput(): DataAwsLakeformationPermissionsTable;
    private _tableWithColumns;
    get tableWithColumns(): DataAwsLakeformationPermissionsTableWithColumnsOutputReference;
    putTableWithColumns(value: DataAwsLakeformationPermissionsTableWithColumns): void;
    resetTableWithColumns(): void;
    get tableWithColumnsInput(): DataAwsLakeformationPermissionsTableWithColumns;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-lakeformation-permissions.d.ts.map