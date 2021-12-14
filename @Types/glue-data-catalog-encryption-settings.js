// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aws_kms_key_id: cdktf.stringToTerraform(struct.awsKmsKeyId),
        return_connection_password_encrypted: cdktf.booleanToTerraform(struct.returnConnectionPasswordEncrypted),
    };
}
export class GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._awsKmsKeyId) {
            hasAnyValues = true;
            internalValueResult.awsKmsKeyId = this._awsKmsKeyId;
        }
        if (this._returnConnectionPasswordEncrypted) {
            hasAnyValues = true;
            internalValueResult.returnConnectionPasswordEncrypted = this._returnConnectionPasswordEncrypted;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._awsKmsKeyId = undefined;
            this._returnConnectionPasswordEncrypted = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._awsKmsKeyId = value.awsKmsKeyId;
            this._returnConnectionPasswordEncrypted = value.returnConnectionPasswordEncrypted;
        }
    }
    // aws_kms_key_id - computed: false, optional: true, required: false
    _awsKmsKeyId;
    get awsKmsKeyId() {
        return this.getStringAttribute('aws_kms_key_id');
    }
    set awsKmsKeyId(value) {
        this._awsKmsKeyId = value;
    }
    resetAwsKmsKeyId() {
        this._awsKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get awsKmsKeyIdInput() {
        return this._awsKmsKeyId;
    }
    // return_connection_password_encrypted - computed: false, optional: false, required: true
    _returnConnectionPasswordEncrypted;
    get returnConnectionPasswordEncrypted() {
        return this.getBooleanAttribute('return_connection_password_encrypted');
    }
    set returnConnectionPasswordEncrypted(value) {
        this._returnConnectionPasswordEncrypted = value;
    }
    // Temporarily expose input value. Use with caution.
    get returnConnectionPasswordEncryptedInput() {
        return this._returnConnectionPasswordEncrypted;
    }
}
export function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        catalog_encryption_mode: cdktf.stringToTerraform(struct.catalogEncryptionMode),
        sse_aws_kms_key_id: cdktf.stringToTerraform(struct.sseAwsKmsKeyId),
    };
}
export class GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._catalogEncryptionMode) {
            hasAnyValues = true;
            internalValueResult.catalogEncryptionMode = this._catalogEncryptionMode;
        }
        if (this._sseAwsKmsKeyId) {
            hasAnyValues = true;
            internalValueResult.sseAwsKmsKeyId = this._sseAwsKmsKeyId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._catalogEncryptionMode = undefined;
            this._sseAwsKmsKeyId = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._catalogEncryptionMode = value.catalogEncryptionMode;
            this._sseAwsKmsKeyId = value.sseAwsKmsKeyId;
        }
    }
    // catalog_encryption_mode - computed: false, optional: false, required: true
    _catalogEncryptionMode;
    get catalogEncryptionMode() {
        return this.getStringAttribute('catalog_encryption_mode');
    }
    set catalogEncryptionMode(value) {
        this._catalogEncryptionMode = value;
    }
    // Temporarily expose input value. Use with caution.
    get catalogEncryptionModeInput() {
        return this._catalogEncryptionMode;
    }
    // sse_aws_kms_key_id - computed: false, optional: true, required: false
    _sseAwsKmsKeyId;
    get sseAwsKmsKeyId() {
        return this.getStringAttribute('sse_aws_kms_key_id');
    }
    set sseAwsKmsKeyId(value) {
        this._sseAwsKmsKeyId = value;
    }
    resetSseAwsKmsKeyId() {
        this._sseAwsKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sseAwsKmsKeyIdInput() {
        return this._sseAwsKmsKeyId;
    }
}
export function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        connection_password_encryption: glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToTerraform(struct.connectionPasswordEncryption),
        encryption_at_rest: glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToTerraform(struct.encryptionAtRest),
    };
}
export class GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._connectionPasswordEncryption?.internalValue) {
            hasAnyValues = true;
            internalValueResult.connectionPasswordEncryption = this._connectionPasswordEncryption?.internalValue;
        }
        if (this._encryptionAtRest?.internalValue) {
            hasAnyValues = true;
            internalValueResult.encryptionAtRest = this._encryptionAtRest?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._connectionPasswordEncryption.internalValue = undefined;
            this._encryptionAtRest.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._connectionPasswordEncryption.internalValue = value.connectionPasswordEncryption;
            this._encryptionAtRest.internalValue = value.encryptionAtRest;
        }
    }
    // connection_password_encryption - computed: false, optional: false, required: true
    _connectionPasswordEncryption = new GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference(this, "connection_password_encryption", true);
    get connectionPasswordEncryption() {
        return this._connectionPasswordEncryption;
    }
    putConnectionPasswordEncryption(value) {
        this._connectionPasswordEncryption.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get connectionPasswordEncryptionInput() {
        return this._connectionPasswordEncryption.internalValue;
    }
    // encryption_at_rest - computed: false, optional: false, required: true
    _encryptionAtRest = new GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference(this, "encryption_at_rest", true);
    get encryptionAtRest() {
        return this._encryptionAtRest;
    }
    putEncryptionAtRest(value) {
        this._encryptionAtRest.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get encryptionAtRestInput() {
        return this._encryptionAtRest.internalValue;
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html aws_glue_data_catalog_encryption_settings}
*/
export class GlueDataCatalogEncryptionSettings extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_glue_data_catalog_encryption_settings";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html aws_glue_data_catalog_encryption_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueDataCatalogEncryptionSettingsConfig
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
        this._dataCatalogEncryptionSettings.internalValue = config.dataCatalogEncryptionSettings;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // catalog_id - computed: true, optional: true, required: false
    _catalogId;
    get catalogId() {
        return this.getStringAttribute('catalog_id');
    }
    set catalogId(value) {
        this._catalogId = value;
    }
    resetCatalogId() {
        this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get catalogIdInput() {
        return this._catalogId;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // data_catalog_encryption_settings - computed: false, optional: false, required: true
    _dataCatalogEncryptionSettings = new GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference(this, "data_catalog_encryption_settings", true);
    get dataCatalogEncryptionSettings() {
        return this._dataCatalogEncryptionSettings;
    }
    putDataCatalogEncryptionSettings(value) {
        this._dataCatalogEncryptionSettings.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get dataCatalogEncryptionSettingsInput() {
        return this._dataCatalogEncryptionSettings.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            catalog_id: cdktf.stringToTerraform(this._catalogId),
            data_catalog_encryption_settings: glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToTerraform(this._dataCatalogEncryptionSettings.internalValue),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2x1ZS1kYXRhLWNhdGFsb2ctZW5jcnlwdGlvbi1zZXR0aW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsiZ2x1ZS1kYXRhLWNhdGFsb2ctZW5jcnlwdGlvbi1zZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUE0Qi9CLE1BQU0sVUFBVSxxR0FBcUcsQ0FBQyxNQUErTTtJQUNuVSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztRQUM1RCxvQ0FBb0MsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLGlDQUFpQyxDQUFDO0tBQzFHLENBQUE7QUFDSCxDQUFDO0FBRUQsTUFBTSxPQUFPLHlHQUEwRyxTQUFRLEtBQUssQ0FBQyxhQUFhO0lBQ3hJLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFFOUI7Ozs7TUFJRTtJQUNGLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLFlBQVksR0FBRyxJQUFJLENBQUM7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