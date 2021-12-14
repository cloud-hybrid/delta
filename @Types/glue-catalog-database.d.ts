import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Glue
*/
export interface GlueCatalogDatabaseConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html#catalog_id GlueCatalogDatabase#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html#description GlueCatalogDatabase#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html#location_uri GlueCatalogDatabase#location_uri}
    */
    readonly locationUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html#name GlueCatalogDatabase#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html#parameters GlueCatalogDatabase#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * target_database block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html#target_database GlueCatalogDatabase#target_database}
    */
    readonly targetDatabase?: GlueCatalogDatabaseTargetDatabase;
}
export interface GlueCatalogDatabaseTargetDatabase {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html#catalog_id GlueCatalogDatabase#catalog_id}
    */
    readonly catalogId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html#database_name GlueCatalogDatabase#database_name}
    */
    readonly databaseName: string;
}
export declare function glueCatalogDatabaseTargetDatabaseToTerraform(struct?: GlueCatalogDatabaseTargetDatabaseOutputReference | GlueCatalogDatabaseTargetDatabase): any;
export declare class GlueCatalogDatabaseTargetDatabaseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlueCatalogDatabaseTargetDatabase | undefined;
    set internalValue(value: GlueCatalogDatabaseTargetDatabase | undefined);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    get catalogIdInput(): string;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html aws_glue_catalog_database}
*/
export declare class GlueCatalogDatabase extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html aws_glue_catalog_database} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueCatalogDatabaseConfig
    */
    constructor(scope: Construct, id: string, config: GlueCatalogDatabaseConfig);
    get arn(): string;
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _locationUri?;
    get locationUri(): string;
    set locationUri(value: string);
    resetLocationUri(): void;
    get locationUriInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
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
    private _targetDatabase;
    get targetDatabase(): GlueCatalogDatabaseTargetDatabaseOutputReference;
    putTargetDatabase(value: GlueCatalogDatabaseTargetDatabase): void;
    resetTargetDatabase(): void;
    get targetDatabaseInput(): GlueCatalogDatabaseTargetDatabase;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=glue-catalog-database.d.ts.map