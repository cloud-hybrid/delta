// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function appstreamDirectoryConfigServiceAccountCredentialsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        account_name: cdktf.stringToTerraform(struct.accountName),
        account_password: cdktf.stringToTerraform(struct.accountPassword),
    };
}
export class AppstreamDirectoryConfigServiceAccountCredentialsOutputReference extends cdktf.ComplexObject {
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
        if (this._accountName) {
            hasAnyValues = true;
            internalValueResult.accountName = this._accountName;
        }
        if (this._accountPassword) {
            hasAnyValues = true;
            internalValueResult.accountPassword = this._accountPassword;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._accountName = undefined;
            this._accountPassword = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._accountName = value.accountName;
            this._accountPassword = value.accountPassword;
        }
    }
    // account_name - computed: false, optional: false, required: true
    _accountName;
    get accountName() {
        return this.getStringAttribute('account_name');
    }
    set accountName(value) {
        this._accountName = value;
    }
    // Temporarily expose input value. Use with caution.
    get accountNameInput() {
        return this._accountName;
    }
    // account_password - computed: false, optional: false, required: true
    _accountPassword;
    get accountPassword() {
        return this.getStringAttribute('account_password');
    }
    set accountPassword(value) {
        this._accountPassword = value;
    }
    // Temporarily expose input value. Use with caution.
    get accountPasswordInput() {
        return this._accountPassword;
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config.html aws_appstream_directory_config}
*/
export class AppstreamDirectoryConfig extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_appstream_directory_config";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config.html aws_appstream_directory_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppstreamDirectoryConfigConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_appstream_directory_config',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._directoryName = config.directoryName;
        this._organizationalUnitDistinguishedNames = config.organizationalUnitDistinguishedNames;
        this._serviceAccountCredentials.internalValue = config.serviceAccountCredentials;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // created_time - computed: true, optional: false, required: false
    get createdTime() {
        return this.getStringAttribute('created_time');
    }
    // directory_name - computed: false, optional: false, required: true
    _directoryName;
    get directoryName() {
        return this.getStringAttribute('directory_name');
    }
    set directoryName(value) {
        this._directoryName = value;
    }
    // Temporarily expose input value. Use with caution.
    get directoryNameInput() {
        return this._directoryName;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // organizational_unit_distinguished_names - computed: false, optional: false, required: true
    _organizationalUnitDistinguishedNames;
    get organizationalUnitDistinguishedNames() {
        return this.getListAttribute('organizational_unit_distinguished_names');
    }
    set organizationalUnitDistinguishedNames(value) {
        this._organizationalUnitDistinguishedNames = value;
    }
    // Temporarily expose input value. Use with caution.
    get organizationalUnitDistinguishedNamesInput() {
        return this._organizationalUnitDistinguishedNames;
    }
    // service_account_credentials - computed: false, optional: false, required: true
    _serviceAccountCredentials = new AppstreamDirectoryConfigServiceAccountCredentialsOutputReference(this, "service_account_credentials", true);
    get serviceAccountCredentials() {
        return this._serviceAccountCredentials;
    }
    putServiceAccountCredentials(value) {
        this._serviceAccountCredentials.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get serviceAccountCredentialsInput() {
        return this._serviceAccountCredentials.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            directory_name: cdktf.stringToTerraform(this._directoryName),
            organizational_unit_distinguished_names: cdktf.listMapper(cdktf.stringToTerraform)(this._organizationalUnitDistinguishedNames),
            service_account_credentials: appstreamDirectoryConfigServiceAccountCredentialsToTerraform(this._serviceAccountCredentials.internalValue),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwc3RyZWFtLWRpcmVjdG9yeS1jb25maWcuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImFwcHN0cmVhbS1kaXJlY3RvcnktY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQWdDL0IsTUFBTSxVQUFVLDREQUE0RCxDQUFDLE1BQTZIO0lBQ3hNLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQzFELGdCQUFnQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsZUFBZSxDQUFDO0tBQ25FLENBQUE7QUFDSCxDQUFDO0FBRUQsTUFBTSxPQUFPLGdFQUFpRSxTQUFRLEtBQUssQ0FBQyxhQUFhO0lBQy9GLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFFOUI7Ozs7TUFJRTtJQUNGLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsV0FBVyxH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