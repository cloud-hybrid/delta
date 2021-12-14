import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS SageMaker
*/
export interface SagemakerFeatureGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#description SagemakerFeatureGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#event_time_feature_name SagemakerFeatureGroup#event_time_feature_name}
    */
    readonly eventTimeFeatureName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#feature_group_name SagemakerFeatureGroup#feature_group_name}
    */
    readonly featureGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#record_identifier_feature_name SagemakerFeatureGroup#record_identifier_feature_name}
    */
    readonly recordIdentifierFeatureName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#role_arn SagemakerFeatureGroup#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#tags SagemakerFeatureGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#tags_all SagemakerFeatureGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * feature_definition block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#feature_definition SagemakerFeatureGroup#feature_definition}
    */
    readonly featureDefinition: SagemakerFeatureGroupFeatureDefinition[];
    /**
    * offline_store_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#offline_store_config SagemakerFeatureGroup#offline_store_config}
    */
    readonly offlineStoreConfig?: SagemakerFeatureGroupOfflineStoreConfig;
    /**
    * online_store_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#online_store_config SagemakerFeatureGroup#online_store_config}
    */
    readonly onlineStoreConfig?: SagemakerFeatureGroupOnlineStoreConfig;
}
export interface SagemakerFeatureGroupFeatureDefinition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#feature_name SagemakerFeatureGroup#feature_name}
    */
    readonly featureName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#feature_type SagemakerFeatureGroup#feature_type}
    */
    readonly featureType?: string;
}
export declare function sagemakerFeatureGroupFeatureDefinitionToTerraform(struct?: SagemakerFeatureGroupFeatureDefinition): any;
export interface SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#catalog SagemakerFeatureGroup#catalog}
    */
    readonly catalog?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#database SagemakerFeatureGroup#database}
    */
    readonly database?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#table_name SagemakerFeatureGroup#table_name}
    */
    readonly tableName?: string;
}
export declare function sagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigToTerraform(struct?: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference | SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig): any;
export declare class SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig | undefined;
    set internalValue(value: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig | undefined);
    private _catalog?;
    get catalog(): string;
    set catalog(value: string);
    resetCatalog(): void;
    get catalogInput(): string;
    private _database?;
    get database(): string;
    set database(value: string);
    resetDatabase(): void;
    get databaseInput(): string;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    resetTableName(): void;
    get tableNameInput(): string;
}
export interface SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#kms_key_id SagemakerFeatureGroup#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#s3_uri SagemakerFeatureGroup#s3_uri}
    */
    readonly s3Uri: string;
}
export declare function sagemakerFeatureGroupOfflineStoreConfigS3StorageConfigToTerraform(struct?: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference | SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig): any;
export declare class SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig | undefined;
    set internalValue(value: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig | undefined);
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string;
    private _s3Uri?;
    get s3Uri(): string;
    set s3Uri(value: string);
    get s3UriInput(): string;
}
export interface SagemakerFeatureGroupOfflineStoreConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#disable_glue_table_creation SagemakerFeatureGroup#disable_glue_table_creation}
    */
    readonly disableGlueTableCreation?: boolean | cdktf.IResolvable;
    /**
    * data_catalog_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#data_catalog_config SagemakerFeatureGroup#data_catalog_config}
    */
    readonly dataCatalogConfig?: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig;
    /**
    * s3_storage_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#s3_storage_config SagemakerFeatureGroup#s3_storage_config}
    */
    readonly s3StorageConfig: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig;
}
export declare function sagemakerFeatureGroupOfflineStoreConfigToTerraform(struct?: SagemakerFeatureGroupOfflineStoreConfigOutputReference | SagemakerFeatureGroupOfflineStoreConfig): any;
export declare class SagemakerFeatureGroupOfflineStoreConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerFeatureGroupOfflineStoreConfig | undefined;
    set internalValue(value: SagemakerFeatureGroupOfflineStoreConfig | undefined);
    private _disableGlueTableCreation?;
    get disableGlueTableCreation(): boolean | cdktf.IResolvable;
    set disableGlueTableCreation(value: boolean | cdktf.IResolvable);
    resetDisableGlueTableCreation(): void;
    get disableGlueTableCreationInput(): boolean | cdktf.IResolvable;
    private _dataCatalogConfig;
    get dataCatalogConfig(): SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference;
    putDataCatalogConfig(value: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig): void;
    resetDataCatalogConfig(): void;
    get dataCatalogConfigInput(): SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig;
    private _s3StorageConfig;
    get s3StorageConfig(): SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference;
    putS3StorageConfig(value: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig): void;
    get s3StorageConfigInput(): SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig;
}
export interface SagemakerFeatureGroupOnlineStoreConfigSecurityConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#kms_key_id SagemakerFeatureGroup#kms_key_id}
    */
    readonly kmsKeyId?: string;
}
export declare function sagemakerFeatureGroupOnlineStoreConfigSecurityConfigToTerraform(struct?: SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference | SagemakerFeatureGroupOnlineStoreConfigSecurityConfig): any;
export declare class SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerFeatureGroupOnlineStoreConfigSecurityConfig | undefined;
    set internalValue(value: SagemakerFeatureGroupOnlineStoreConfigSecurityConfig | undefined);
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string;
}
export interface SagemakerFeatureGroupOnlineStoreConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#enable_online_store SagemakerFeatureGroup#enable_online_store}
    */
    readonly enableOnlineStore?: boolean | cdktf.IResolvable;
    /**
    * security_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#security_config SagemakerFeatureGroup#security_config}
    */
    readonly securityConfig?: SagemakerFeatureGroupOnlineStoreConfigSecurityConfig;
}
export declare function sagemakerFeatureGroupOnlineStoreConfigToTerraform(struct?: SagemakerFeatureGroupOnlineStoreConfigOutputReference | SagemakerFeatureGroupOnlineStoreConfig): any;
export declare class SagemakerFeatureGroupOnlineStoreConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerFeatureGroupOnlineStoreConfig | undefined;
    set internalValue(value: SagemakerFeatureGroupOnlineStoreConfig | undefined);
    private _enableOnlineStore?;
    get enableOnlineStore(): boolean | cdktf.IResolvable;
    set enableOnlineStore(value: boolean | cdktf.IResolvable);
    resetEnableOnlineStore(): void;
    get enableOnlineStoreInput(): boolean | cdktf.IResolvable;
    private _securityConfig;
    get securityConfig(): SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference;
    putSecurityConfig(value: SagemakerFeatureGroupOnlineStoreConfigSecurityConfig): void;
    resetSecurityConfig(): void;
    get securityConfigInput(): SagemakerFeatureGroupOnlineStoreConfigSecurityConfig;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html aws_sagemaker_feature_group}
*/
export declare class SagemakerFeatureGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html aws_sagemaker_feature_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerFeatureGroupConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerFeatureGroupConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _eventTimeFeatureName?;
    get eventTimeFeatureName(): string;
    set eventTimeFeatureName(value: string);
    get eventTimeFeatureNameInput(): string;
    private _featureGroupName?;
    get featureGroupName(): string;
    set featureGroupName(value: string);
    get featureGroupNameInput(): string;
    get id(): string;
    private _recordIdentifierFeatureName?;
    get recordIdentifierFeatureName(): string;
    set recordIdentifierFeatureName(value: string);
    get recordIdentifierFeatureNameInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
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
    private _featureDefinition?;
    get featureDefinition(): SagemakerFeatureGroupFeatureDefinition[];
    set featureDefinition(value: SagemakerFeatureGroupFeatureDefinition[]);
    get featureDefinitionInput(): SagemakerFeatureGroupFeatureDefinition[];
    private _offlineStoreConfig;
    get offlineStoreConfig(): SagemakerFeatureGroupOfflineStoreConfigOutputReference;
    putOfflineStoreConfig(value: SagemakerFeatureGroupOfflineStoreConfig): void;
    resetOfflineStoreConfig(): void;
    get offlineStoreConfigInput(): SagemakerFeatureGroupOfflineStoreConfig;
    private _onlineStoreConfig;
    get onlineStoreConfig(): SagemakerFeatureGroupOnlineStoreConfigOutputReference;
    putOnlineStoreConfig(value: SagemakerFeatureGroupOnlineStoreConfig): void;
    resetOnlineStoreConfig(): void;
    get onlineStoreConfigInput(): SagemakerFeatureGroupOnlineStoreConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=sagemaker-feature-group.d.ts.map