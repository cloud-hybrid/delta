import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Lake Formation
*/
export interface LakeformationPermissionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#catalog_id LakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#catalog_resource LakeformationPermissions#catalog_resource}
    */
    readonly catalogResource?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#permissions LakeformationPermissions#permissions}
    */
    readonly permissions: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#permissions_with_grant_option LakeformationPermissions#permissions_with_grant_option}
    */
    readonly permissionsWithGrantOption?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#principal LakeformationPermissions#principal}
    */
    readonly principal: string;
    /**
    * data_location block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#data_location LakeformationPermissions#data_location}
    */
    readonly dataLocation?: LakeformationPermissionsDataLocation;
    /**
    * database block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#database LakeformationPermissions#database}
    */
    readonly database?: LakeformationPermissionsDatabase;
    /**
    * table block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#table LakeformationPermissions#table}
    */
    readonly table?: LakeformationPermissionsTable;
    /**
    * table_with_columns block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#table_with_columns LakeformationPermissions#table_with_columns}
    */
    readonly tableWithColumns?: LakeformationPermissionsTableWithColumns;
}
export interface LakeformationPermissionsDataLocation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#arn LakeformationPermissions#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#catalog_id LakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
}
export declare function lakeformationPermissionsDataLocationToTerraform(struct?: LakeformationPermissionsDataLocationOutputReference | LakeformationPermissionsDataLocation): any;
export declare class LakeformationPermissionsDataLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LakeformationPermissionsDataLocation | undefined;
    set internalValue(value: LakeformationPermissionsDataLocation | undefined);
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
export interface LakeformationPermissionsDatabase {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#catalog_id LakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#name LakeformationPermissions#name}
    */
    readonly name: string;
}
export declare function lakeformationPermissionsDatabaseToTerraform(struct?: LakeformationPermissionsDatabaseOutputReference | LakeformationPermissionsDatabase): any;
export declare class LakeformationPermissionsDatabaseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LakeformationPermissionsDatabase | undefined;
    set internalValue(value: LakeformationPermissionsDatabase | undefined);
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
export interface LakeformationPermissionsTable {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#catalog_id LakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#database_name LakeformationPermissions#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#name LakeformationPermissions#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#wildcard LakeformationPermissions#wildcard}
    */
    readonly wildcard?: boolean | cdktf.IResolvable;
}
export declare function lakeformationPermissionsTableToTerraform(struct?: LakeformationPermissionsTableOutputReference | LakeformationPermissionsTable): any;
export declare class LakeformationPermissionsTableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LakeformationPermissionsTable | undefined;
    set internalValue(value: LakeformationPermissionsTable | undefined);
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
export interface LakeformationPermissionsTableWithColumns {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#catalog_id LakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#column_names LakeformationPermissions#column_names}
    */
    readonly columnNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#database_name LakeformationPermissions#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#excluded_column_names LakeformationPermissions#excluded_column_names}
    */
    readonly excludedColumnNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#name LakeformationPermissions#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#wildcard LakeformationPermissions#wildcard}
    */
    readonly wildcard?: boolean | cdktf.IResolvable;
}
export declare function lakeformationPermissionsTableWithColumnsToTerraform(struct?: LakeformationPermissionsTableWithColumnsOutputReference | LakeformationPermissionsTableWithColumns): any;
export declare class LakeformationPermissionsTableWithColumnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LakeformationPermissionsTableWithColumns | undefined;
    set internalValue(value: LakeformationPermissionsTableWithColumns | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html aws_lakeformation_permissions}
*/
export declare class LakeformationPermissions extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html aws_lakeformation_permissions} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LakeformationPermissionsConfig
    */
    constructor(scope: Construct, id: string, config: LakeformationPermissionsConfig);
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
    private _permissions?;
    get permissions(): string[];
    set permissions(value: string[]);
    get permissionsInput(): string[];
    private _permissionsWithGrantOption?;
    get permissionsWithGrantOption(): string[];
    set permissionsWithGrantOption(value: string[]);
    resetPermissionsWithGrantOption(): void;
    get permissionsWithGrantOptionInput(): string[];
    private _principal?;
    get principal(): string;
    set principal(value: string);
    get principalInput(): string;
    private _dataLocation;
    get dataLocation(): LakeformationPermissionsDataLocationOutputReference;
    putDataLocation(value: LakeformationPermissionsDataLocation): void;
    resetDataLocation(): void;
    get dataLocationInput(): LakeformationPermissionsDataLocation;
    private _database;
    get database(): LakeformationPermissionsDatabaseOutputReference;
    putDatabase(value: LakeformationPermissionsDatabase): void;
    resetDatabase(): void;
    get databaseInput(): LakeformationPermissionsDatabase;
    private _table;
    get table(): LakeformationPermissionsTableOutputReference;
    putTable(value: LakeformationPermissionsTable): void;
    resetTable(): void;
    get tableInput(): LakeformationPermissionsTable;
    private _tableWithColumns;
    get tableWithColumns(): LakeformationPermissionsTableWithColumnsOutputReference;
    putTableWithColumns(value: LakeformationPermissionsTableWithColumns): void;
    resetTableWithColumns(): void;
    get tableWithColumnsInput(): LakeformationPermissionsTableWithColumns;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=lakeformation-permissions.d.ts.map