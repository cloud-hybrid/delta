import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Glue
*/
export interface GlueCrawlerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#classifiers GlueCrawler#classifiers}
    */
    readonly classifiers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#configuration GlueCrawler#configuration}
    */
    readonly configuration?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#database_name GlueCrawler#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#description GlueCrawler#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#name GlueCrawler#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#role GlueCrawler#role}
    */
    readonly role: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#schedule GlueCrawler#schedule}
    */
    readonly schedule?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#security_configuration GlueCrawler#security_configuration}
    */
    readonly securityConfiguration?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#table_prefix GlueCrawler#table_prefix}
    */
    readonly tablePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#tags GlueCrawler#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#tags_all GlueCrawler#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * catalog_target block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#catalog_target GlueCrawler#catalog_target}
    */
    readonly catalogTarget?: GlueCrawlerCatalogTarget[];
    /**
    * dynamodb_target block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#dynamodb_target GlueCrawler#dynamodb_target}
    */
    readonly dynamodbTarget?: GlueCrawlerDynamodbTarget[];
    /**
    * jdbc_target block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#jdbc_target GlueCrawler#jdbc_target}
    */
    readonly jdbcTarget?: GlueCrawlerJdbcTarget[];
    /**
    * lineage_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#lineage_configuration GlueCrawler#lineage_configuration}
    */
    readonly lineageConfiguration?: GlueCrawlerLineageConfiguration;
    /**
    * mongodb_target block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#mongodb_target GlueCrawler#mongodb_target}
    */
    readonly mongodbTarget?: GlueCrawlerMongodbTarget[];
    /**
    * recrawl_policy block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#recrawl_policy GlueCrawler#recrawl_policy}
    */
    readonly recrawlPolicy?: GlueCrawlerRecrawlPolicy;
    /**
    * s3_target block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#s3_target GlueCrawler#s3_target}
    */
    readonly s3Target?: GlueCrawlerS3Target[];
    /**
    * schema_change_policy block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#schema_change_policy GlueCrawler#schema_change_policy}
    */
    readonly schemaChangePolicy?: GlueCrawlerSchemaChangePolicy;
}
export interface GlueCrawlerCatalogTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#database_name GlueCrawler#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#tables GlueCrawler#tables}
    */
    readonly tables: string[];
}
export declare function glueCrawlerCatalogTargetToTerraform(struct?: GlueCrawlerCatalogTarget): any;
export interface GlueCrawlerDynamodbTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#path GlueCrawler#path}
    */
    readonly path: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#scan_all GlueCrawler#scan_all}
    */
    readonly scanAll?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#scan_rate GlueCrawler#scan_rate}
    */
    readonly scanRate?: number;
}
export declare function glueCrawlerDynamodbTargetToTerraform(struct?: GlueCrawlerDynamodbTarget): any;
export interface GlueCrawlerJdbcTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#connection_name GlueCrawler#connection_name}
    */
    readonly connectionName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#exclusions GlueCrawler#exclusions}
    */
    readonly exclusions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#path GlueCrawler#path}
    */
    readonly path: string;
}
export declare function glueCrawlerJdbcTargetToTerraform(struct?: GlueCrawlerJdbcTarget): any;
export interface GlueCrawlerLineageConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#crawler_lineage_settings GlueCrawler#crawler_lineage_settings}
    */
    readonly crawlerLineageSettings?: string;
}
export declare function glueCrawlerLineageConfigurationToTerraform(struct?: GlueCrawlerLineageConfigurationOutputReference | GlueCrawlerLineageConfiguration): any;
export declare class GlueCrawlerLineageConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlueCrawlerLineageConfiguration | undefined;
    set internalValue(value: GlueCrawlerLineageConfiguration | undefined);
    private _crawlerLineageSettings?;
    get crawlerLineageSettings(): string;
    set crawlerLineageSettings(value: string);
    resetCrawlerLineageSettings(): void;
    get crawlerLineageSettingsInput(): string;
}
export interface GlueCrawlerMongodbTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#connection_name GlueCrawler#connection_name}
    */
    readonly connectionName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#path GlueCrawler#path}
    */
    readonly path: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#scan_all GlueCrawler#scan_all}
    */
    readonly scanAll?: boolean | cdktf.IResolvable;
}
export declare function glueCrawlerMongodbTargetToTerraform(struct?: GlueCrawlerMongodbTarget): any;
export interface GlueCrawlerRecrawlPolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#recrawl_behavior GlueCrawler#recrawl_behavior}
    */
    readonly recrawlBehavior?: string;
}
export declare function glueCrawlerRecrawlPolicyToTerraform(struct?: GlueCrawlerRecrawlPolicyOutputReference | GlueCrawlerRecrawlPolicy): any;
export declare class GlueCrawlerRecrawlPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlueCrawlerRecrawlPolicy | undefined;
    set internalValue(value: GlueCrawlerRecrawlPolicy | undefined);
    private _recrawlBehavior?;
    get recrawlBehavior(): string;
    set recrawlBehavior(value: string);
    resetRecrawlBehavior(): void;
    get recrawlBehaviorInput(): string;
}
export interface GlueCrawlerS3Target {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#connection_name GlueCrawler#connection_name}
    */
    readonly connectionName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#dlq_event_queue_arn GlueCrawler#dlq_event_queue_arn}
    */
    readonly dlqEventQueueArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#event_queue_arn GlueCrawler#event_queue_arn}
    */
    readonly eventQueueArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#exclusions GlueCrawler#exclusions}
    */
    readonly exclusions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#path GlueCrawler#path}
    */
    readonly path: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#sample_size GlueCrawler#sample_size}
    */
    readonly sampleSize?: number;
}
export declare function glueCrawlerS3TargetToTerraform(struct?: GlueCrawlerS3Target): any;
export interface GlueCrawlerSchemaChangePolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#delete_behavior GlueCrawler#delete_behavior}
    */
    readonly deleteBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#update_behavior GlueCrawler#update_behavior}
    */
    readonly updateBehavior?: string;
}
export declare function glueCrawlerSchemaChangePolicyToTerraform(struct?: GlueCrawlerSchemaChangePolicyOutputReference | GlueCrawlerSchemaChangePolicy): any;
export declare class GlueCrawlerSchemaChangePolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlueCrawlerSchemaChangePolicy | undefined;
    set internalValue(value: GlueCrawlerSchemaChangePolicy | undefined);
    private _deleteBehavior?;
    get deleteBehavior(): string;
    set deleteBehavior(value: string);
    resetDeleteBehavior(): void;
    get deleteBehaviorInput(): string;
    private _updateBehavior?;
    get updateBehavior(): string;
    set updateBehavior(value: string);
    resetUpdateBehavior(): void;
    get updateBehaviorInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html aws_glue_crawler}
*/
export declare class GlueCrawler extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html aws_glue_crawler} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueCrawlerConfig
    */
    constructor(scope: Construct, id: string, config: GlueCrawlerConfig);
    get arn(): string;
    private _classifiers?;
    get classifiers(): string[];
    set classifiers(value: string[]);
    resetClassifiers(): void;
    get classifiersInput(): string[];
    private _configuration?;
    get configuration(): string;
    set configuration(value: string);
    resetConfiguration(): void;
    get configurationInput(): string;
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
    private _role?;
    get role(): string;
    set role(value: string);
    get roleInput(): string;
    private _schedule?;
    get schedule(): string;
    set schedule(value: string);
    resetSchedule(): void;
    get scheduleInput(): string;
    private _securityConfiguration?;
    get securityConfiguration(): string;
    set securityConfiguration(value: string);
    resetSecurityConfiguration(): void;
    get securityConfigurationInput(): string;
    private _tablePrefix?;
    get tablePrefix(): string;
    set tablePrefix(value: string);
    resetTablePrefix(): void;
    get tablePrefixInput(): string;
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
    private _catalogTarget?;
    get catalogTarget(): GlueCrawlerCatalogTarget[];
    set catalogTarget(value: GlueCrawlerCatalogTarget[]);
    resetCatalogTarget(): void;
    get catalogTargetInput(): GlueCrawlerCatalogTarget[];
    private _dynamodbTarget?;
    get dynamodbTarget(): GlueCrawlerDynamodbTarget[];
    set dynamodbTarget(value: GlueCrawlerDynamodbTarget[]);
    resetDynamodbTarget(): void;
    get dynamodbTargetInput(): GlueCrawlerDynamodbTarget[];
    private _jdbcTarget?;
    get jdbcTarget(): GlueCrawlerJdbcTarget[];
    set jdbcTarget(value: GlueCrawlerJdbcTarget[]);
    resetJdbcTarget(): void;
    get jdbcTargetInput(): GlueCrawlerJdbcTarget[];
    private _lineageConfiguration;
    get lineageConfiguration(): GlueCrawlerLineageConfigurationOutputReference;
    putLineageConfiguration(value: GlueCrawlerLineageConfiguration): void;
    resetLineageConfiguration(): void;
    get lineageConfigurationInput(): GlueCrawlerLineageConfiguration;
    private _mongodbTarget?;
    get mongodbTarget(): GlueCrawlerMongodbTarget[];
    set mongodbTarget(value: GlueCrawlerMongodbTarget[]);
    resetMongodbTarget(): void;
    get mongodbTargetInput(): GlueCrawlerMongodbTarget[];
    private _recrawlPolicy;
    get recrawlPolicy(): GlueCrawlerRecrawlPolicyOutputReference;
    putRecrawlPolicy(value: GlueCrawlerRecrawlPolicy): void;
    resetRecrawlPolicy(): void;
    get recrawlPolicyInput(): GlueCrawlerRecrawlPolicy;
    private _s3Target?;
    get s3Target(): GlueCrawlerS3Target[];
    set s3Target(value: GlueCrawlerS3Target[]);
    resetS3Target(): void;
    get s3TargetInput(): GlueCrawlerS3Target[];
    private _schemaChangePolicy;
    get schemaChangePolicy(): GlueCrawlerSchemaChangePolicyOutputReference;
    putSchemaChangePolicy(value: GlueCrawlerSchemaChangePolicy): void;
    resetSchemaChangePolicy(): void;
    get schemaChangePolicyInput(): GlueCrawlerSchemaChangePolicy;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=glue-crawler.d.ts.map