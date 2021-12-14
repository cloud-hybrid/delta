// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption extends cdktf.ComplexComputedList {
    // aws_kms_key_id - computed: true, optional: false, required: false
    get awsKmsKeyId() {
        return this.getStringAttribute('aws_kms_key_id');
    }
    // return_connection_password_encrypted - computed: true, optional: false, required: false
    get returnConnectionPasswordEncrypted() {
        return this.getBooleanAttribute('return_connection_password_encrypted');
    }
}
export class DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest extends cdktf.ComplexComputedList {
    // catalog_encryption_mode - computed: true, optional: false, required: false
    get catalogEncryptionMode() {
        return this.getStringAttribute('catalog_encryption_mode');
    }
    // sse_aws_kms_key_id - computed: true, optional: false, required: false
    get sseAwsKmsKeyId() {
        return this.getStringAttribute('sse_aws_kms_key_id');
    }
}
export class DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings extends cdktf.ComplexComputedList {
    // connection_password_encryption - computed: true, optional: false, required: false
    get connectionPasswordEncryption() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('connection_password_encryption');
    }
    // encryption_at_rest - computed: true, optional: false, required: false
    get encryptionAtRest() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('encryption_at_rest');
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/glue_data_catalog_encryption_settings.html aws_glue_data_catalog_encryption_settings}
*/
export class DataAwsGlueDataCatalogEncryptionSettings extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_glue_data_catalog_encryption_settings";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/glue_data_catalog_encryption_settings.html aws_glue_data_catalog_encryption_settings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsGlueDataCatalogEncryptionSettingsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_glue_data_catalog_encryption_settings',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._catalogId = config.catalogId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // catalog_id - computed: false, optional: false, required: true
    _catalogId;
    get catalogId() {
        return this.getStringAttribute('catalog_id');
    }
    set catalogId(value) {
        this._catalogId = value;
    }
    // Temporarily expose input value. Use with caution.
    get catalogIdInput() {
        return this._catalogId;
    }
    // data_catalog_encryption_settings - computed: true, optional: false, required: false
    dataCatalogEncryptionSettings(index) {
        return new DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings(this, 'data_catalog_encryption_settings', index);
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            catalog_id: cdktf.stringToTerraform(this._catalogId),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtZ2x1ZS1kYXRhLWNhdGFsb2ctZW5jcnlwdGlvbi1zZXR0aW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsiZGF0YS1hd3MtZ2x1ZS1kYXRhLWNhdGFsb2ctZW5jcnlwdGlvbi1zZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFXL0IsTUFBTSxPQUFPLGlHQUFrRyxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFOUksb0VBQW9FO0lBQ3BFLElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCwwRkFBMEY7SUFDMUYsSUFBVyxpQ0FBaUM7UUFDMUMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsc0NBQXNDLENBQVEsQ0FBQztJQUNqRixDQUFDO0NBQ0Y7QUFDRCxNQUFNLE9BQU8scUZBQXNGLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVsSSw2RUFBNkU7SUFDN0UsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsd0VBQXdFO0lBQ3hFLElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FDRjtBQUNELE1BQU0sT0FBTyxxRUFBc0UsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRWxILG9GQUFvRjtJQUNwRixJQUFXLDRCQUE0QjtRQUNyQyxvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsZ0NBQWdDLENBQVEsQ0FBQztJQUNqRixDQUFDO0lBRUQsd0VBQXdFO0lBQ3hFLElBQVcsZ0JBQWdCO1FBQ3pCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxvQkFBb0IsQ0FBUSxDQUFDO0lBQ3JFLENBQUM7Q0FDRjtBQUVEOztFQUVFO0FBQ0YsTUFBTSxPQUFPLHdDQUF5QyxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFckYsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDYixNQUFNLENBQVUsY0FBYyxHQUFXLDJDQUEyQyxDQUFDO0lBRTVGLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQXNEO1FBQ3JHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsMkNBQTJDO1lBQ2xFLDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDckMsQ0FBQztJQUVELGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUViLGdFQUFnRTtJQUN4RCxVQUFVLENBQVU7SUFDNUIsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRUQsc0ZBQXNGO0lBQy9FLDZCQUE2QixDQUFDLEtBQWE7UUFDaEQsT0FBTyxJQUFJLHFFQUFxRSxDQUFDLElBQUksRUFBRSxrQ0FBa0MsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwSSxDQUFDO0lBRUQsdURBQXVEO0lBQ3ZELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUNyRCxDQUFDO0lBQ0osQ0FBQyJ9