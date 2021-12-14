// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider.html aws_cognito_identity_provider}
*/
export class CognitoIdentityProvider extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_cognito_identity_provider";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider.html aws_cognito_identity_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoIdentityProviderConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_cognito_identity_provider',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._attributeMapping = config.attributeMapping;
        this._idpIdentifiers = config.idpIdentifiers;
        this._providerDetails = config.providerDetails;
        this._providerName = config.providerName;
        this._providerType = config.providerType;
        this._userPoolId = config.userPoolId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // attribute_mapping - computed: true, optional: true, required: false
    _attributeMapping;
    get attributeMapping() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('attribute_mapping');
    }
    set attributeMapping(value) {
        this._attributeMapping = value;
    }
    resetAttributeMapping() {
        this._attributeMapping = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get attributeMappingInput() {
        return this._attributeMapping;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // idp_identifiers - computed: false, optional: true, required: false
    _idpIdentifiers;
    get idpIdentifiers() {
        return this.getListAttribute('idp_identifiers');
    }
    set idpIdentifiers(value) {
        this._idpIdentifiers = value;
    }
    resetIdpIdentifiers() {
        this._idpIdentifiers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idpIdentifiersInput() {
        return this._idpIdentifiers;
    }
    // provider_details - computed: false, optional: false, required: true
    _providerDetails;
    get providerDetails() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('provider_details');
    }
    set providerDetails(value) {
        this._providerDetails = value;
    }
    // Temporarily expose input value. Use with caution.
    get providerDetailsInput() {
        return this._providerDetails;
    }
    // provider_name - computed: false, optional: false, required: true
    _providerName;
    get providerName() {
        return this.getStringAttribute('provider_name');
    }
    set providerName(value) {
        this._providerName = value;
    }
    // Temporarily expose input value. Use with caution.
    get providerNameInput() {
        return this._providerName;
    }
    // provider_type - computed: false, optional: false, required: true
    _providerType;
    get providerType() {
        return this.getStringAttribute('provider_type');
    }
    set providerType(value) {
        this._providerType = value;
    }
    // Temporarily expose input value. Use with caution.
    get providerTypeInput() {
        return this._providerType;
    }
    // user_pool_id - computed: false, optional: false, required: true
    _userPoolId;
    get userPoolId() {
        return this.getStringAttribute('user_pool_id');
    }
    set userPoolId(value) {
        this._userPoolId = value;
    }
    // Temporarily expose input value. Use with caution.
    get userPoolIdInput() {
        return this._userPoolId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            attribute_mapping: cdktf.hashMapper(cdktf.anyToTerraform)(this._attributeMapping),
            idp_identifiers: cdktf.listMapper(cdktf.stringToTerraform)(this._idpIdentifiers),
            provider_details: cdktf.hashMapper(cdktf.anyToTerraform)(this._providerDetails),
            provider_name: cdktf.stringToTerraform(this._providerName),
            provider_type: cdktf.stringToTerraform(this._providerType),
            user_pool_id: cdktf.stringToTerraform(this._userPoolId),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29nbml0by1pZGVudGl0eS1wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsiY29nbml0by1pZGVudGl0eS1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFnQy9COztFQUVFO0FBQ0YsTUFBTSxPQUFPLHVCQUF3QixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFFbEUsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDYixNQUFNLENBQVUsY0FBYyxHQUFXLCtCQUErQixDQUFDO0lBRWhGLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQXFDO1FBQ3BGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsK0JBQStCO1lBQ3RELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pELElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUM3QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxXQUFX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