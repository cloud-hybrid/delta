import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Glue
*/
export interface GlueDataCatalogEncryptionSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#catalog_id GlueDataCatalogEncryptionSettings#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * data_catalog_encryption_settings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#data_catalog_encryption_settings GlueDataCatalogEncryptionSettings#data_catalog_encryption_settings}
    */
    readonly dataCatalogEncryptionSettings: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings;
}
export interface GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#aws_kms_key_id GlueDataCatalogEncryptionSettings#aws_kms_key_id}
    */
    readonly awsKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#return_connection_password_encrypted GlueDataCatalogEncryptionSettings#return_connection_password_encrypted}
    */
    readonly returnConnectionPasswordEncrypted: boolean | cdktf.IResolvable;
}
export declare function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToTerraform(struct?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference | GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption): any;
export declare class GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption | undefined;
    set internalValue(value: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption | undefined);
    private _awsKmsKeyId?;
    get awsKmsKeyId(): string;
    set awsKmsKeyId(value: string);
    resetAwsKmsKeyId(): void;
    get awsKmsKeyIdInput(): string;
    private _returnConnectionPasswordEncrypted?;
    get returnConnectionPasswordEncrypted(): boolean | cdktf.IResolvable;
    set returnConnectionPasswordEncrypted(value: boolean | cdktf.IResolvable);
    get returnConnectionPasswordEncryptedInput(): boolean | cdktf.IResolvable;
}
export interface GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#catalog_encryption_mode GlueDataCatalogEncryptionSettings#catalog_encryption_mode}
    */
    readonly catalogEncryptionMode: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#sse_aws_kms_key_id GlueDataCatalogEncryptionSettings#sse_aws_kms_key_id}
    */
    readonly sseAwsKmsKeyId?: string;
}
export declare function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToTerraform(struct?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference | GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest): any;
export declare class GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest | undefined;
    set internalValue(value: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest | undefined);
    private _catalogEncryptionMode?;
    get catalogEncryptionMode(): string;
    set catalogEncryptionMode(value: string);
    get catalogEncryptionModeInput(): string;
    private _sseAwsKmsKeyId?;
    get sseAwsKmsKeyId(): string;
    set sseAwsKmsKeyId(value: string);
    resetSseAwsKmsKeyId(): void;
    get sseAwsKmsKeyIdInput(): string;
}
export interface GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings {
    /**
    * connection_password_encryption block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#connection_password_encryption GlueDataCatalogEncryptionSettings#connection_password_encryption}
    */
    readonly connectionPasswordEncryption: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption;
    /**
    * encryption_at_rest block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#encryption_at_rest GlueDataCatalogEncryptionSettings#encryption_at_rest}
    */
    readonly encryptionAtRest: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest;
}
export declare function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToTerraform(struct?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference | GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings): any;
export declare class GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings | undefined;
    set internalValue(value: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings | undefined);
    private _connectionPasswordEncryption;
    get connectionPasswordEncryption(): GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference;
    putConnectionPasswordEncryption(value: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption): void;
    get connectionPasswordEncryptionInput(): GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption;
    private _encryptionAtRest;
    get encryptionAtRest(): GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference;
    putEncryptionAtRest(value: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest): void;
    get encryptionAtRestInput(): GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html aws_glue_data_catalog_encryption_settings}
*/
export declare class GlueDataCatalogEncryptionSettings extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html aws_glue_data_catalog_encryption_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueDataCatalogEncryptionSettingsConfig
    */
    constructor(scope: Construct, id: string, config: GlueDataCatalogEncryptionSettingsConfig);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string;
    get id(): string;
    private _dataCatalogEncryptionSettings;
    get dataCatalogEncryptionSettings(): GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference;
    putDataCatalogEncryptionSettings(value: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings): void;
    get dataCatalogEncryptionSettingsInput(): GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=glue-data-catalog-encryption-settings.d.ts.map