// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html aws_api_gateway_method}
*/
export class ApiGatewayMethod extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_api_gateway_method";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html aws_api_gateway_method} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayMethodConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_api_gateway_method',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._apiKeyRequired = config.apiKeyRequired;
        this._authorization = config.authorization;
        this._authorizationScopes = config.authorizationScopes;
        this._authorizerId = config.authorizerId;
        this._httpMethod = config.httpMethod;
        this._operationName = config.operationName;
        this._requestModels = config.requestModels;
        this._requestParameters = config.requestParameters;
        this._requestValidatorId = config.requestValidatorId;
        this._resourceId = config.resourceId;
        this._restApiId = config.restApiId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // api_key_required - computed: false, optional: true, required: false
    _apiKeyRequired;
    get apiKeyRequired() {
        return this.getBooleanAttribute('api_key_required');
    }
    set apiKeyRequired(value) {
        this._apiKeyRequired = value;
    }
    resetApiKeyRequired() {
        this._apiKeyRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get apiKeyRequiredInput() {
        return this._apiKeyRequired;
    }
    // authorization - computed: false, optional: false, required: true
    _authorization;
    get authorization() {
        return this.getStringAttribute('authorization');
    }
    set authorization(value) {
        this._authorization = value;
    }
    // Temporarily expose input value. Use with caution.
    get authorizationInput() {
        return this._authorization;
    }
    // authorization_scopes - computed: false, optional: true, required: false
    _authorizationScopes;
    get authorizationScopes() {
        return this.getListAttribute('authorization_scopes');
    }
    set authorizationScopes(value) {
        this._authorizationScopes = value;
    }
    resetAuthorizationScopes() {
        this._authorizationScopes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authorizationScopesInput() {
        return this._authorizationScopes;
    }
    // authorizer_id - computed: false, optional: true, required: false
    _authorizerId;
    get authorizerId() {
        return this.getStringAttribute('authorizer_id');
    }
    set authorizerId(value) {
        this._authorizerId = value;
    }
    resetAuthorizerId() {
        this._authorizerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authorizerIdInput() {
        return this._authorizerId;
    }
    // http_method - computed: false, optional: false, required: true
    _httpMethod;
    get httpMethod() {
        return this.getStringAttribute('http_method');
    }
    set httpMethod(value) {
        this._httpMethod = value;
    }
    // Temporarily expose input value. Use with caution.
    get httpMethodInput() {
        return this._httpMethod;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // operation_name - computed: false, optional: true, required: false
    _operationName;
    get operationName() {
        return this.getStringAttribute('operation_name');
    }
    set operationName(value) {
        this._operationName = value;
    }
    resetOperationName() {
        this._operationName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get operationNameInput() {
        return this._operationName;
    }
    // request_models - computed: false, optional: true, required: false
    _requestModels;
    get requestModels() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('request_models');
    }
    set requestModels(value) {
        this._requestModels = value;
    }
    resetRequestModels() {
        this._requestModels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requestModelsInput() {
        return this._requestModels;
    }
    // request_parameters - computed: false, optional: true, required: false
    _requestParameters;
    get requestParameters() {
        return this.getBooleanAttribute('request_parameters');
    }
    set requestParameters(value) {
        this._requestParameters = value;
    }
    resetRequestParameters() {
        this._requestParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requestParametersInput() {
        return this._requestParameters;
    }
    // request_validator_id - computed: false, optional: true, required: false
    _requestValidatorId;
    get requestValidatorId() {
        return this.getStringAttribute('request_validator_id');
    }
    set requestValidatorId(value) {
        this._requestValidatorId = value;
    }
    resetRequestValidatorId() {
        this._requestValidatorId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requestValidatorIdInput() {
        return this._requestValidatorId;
    }
    // resource_id - computed: false, optional: false, required: true
    _resourceId;
    get resourceId() {
        return this.getStringAttribute('resource_id');
    }
    set resourceId(value) {
        this._resourceId = value;
    }
    // Temporarily expose input value. Use with caution.
    get resourceIdInput() {
        return this._resourceId;
    }
    // rest_api_id - computed: false, optional: false, required: true
    _restApiId;
    get restApiId() {
        return this.getStringAttribute('rest_api_id');
    }
    set restApiId(value) {
        this._restApiId = value;
    }
    // Temporarily expose input value. Use with caution.
    get restApiIdInput() {
        return this._restApiId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            api_key_required: cdktf.booleanToTerraform(this._apiKeyRequired),
            authorization: cdktf.stringToTerraform(this._authorization),
            authorization_scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._authorizationScopes),
            authorizer_id: cdktf.stringToTerraform(this._authorizerId),
            http_method: cdktf.stringToTerraform(this._httpMethod),
            operation_name: cdktf.stringToTerraform(this._operationName),
            request_models: cdktf.hashMapper(cdktf.anyToTerraform)(this._requestModels),
            request_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._requestParameters),
            request_validator_id: cdktf.stringToTerraform(this._requestValidatorId),
            resource_id: cdktf.stringToTerraform(this._resourceId),
            rest_api_id: cdktf.stringToTerraform(this._restApiId),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWdhdGV3YXktbWV0aG9kLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJhcGktZ2F0ZXdheS1tZXRob2QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBb0QvQjs7RUFFRTtBQUNGLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBRTNELG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ2IsTUFBTSxDQUFVLGNBQWMsR0FBVyx3QkFBd0IsQ0FBQztJQUV6RSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUE4QjtRQUM3RSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLHdCQUF3QjtZQUMvQywwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzdDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMs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