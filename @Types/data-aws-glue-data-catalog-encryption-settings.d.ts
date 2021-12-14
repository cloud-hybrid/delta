import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Glue
*/
export interface DataAwsGlueDataCatalogEncryptionSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_data_catalog_encryption_settings.html#catalog_id DataAwsGlueDataCatalogEncryptionSettings#catalog_id}
    */
    readonly catalogId: string;
}
export declare class DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption extends cdktf.ComplexComputedList {
    get awsKmsKeyId(): string;
    get returnConnectionPasswordEncrypted(): any;
}
export declare class DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest extends cdktf.ComplexComputedList {
    get catalogEncryptionMode(): string;
    get sseAwsKmsKeyId(): string;
}
export declare class DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings extends cdktf.ComplexComputedList {
    get connectionPasswordEncryption(): any;
    get encryptionAtRest(): any;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/glue_data_catalog_encryption_settings.html aws_glue_data_catalog_encryption_settings}
*/
export declare class DataAwsGlueDataCatalogEncryptionSettings extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/glue_data_catalog_encryption_settings.html aws_glue_data_catalog_encryption_settings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsGlueDataCatalogEncryptionSettingsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsGlueDataCatalogEncryptionSettingsConfig);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    get catalogIdInput(): string;
    dataCatalogEncryptionSettings(index: string): DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-glue-data-catalog-encryption-settings.d.ts.map