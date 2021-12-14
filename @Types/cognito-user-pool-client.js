// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function cognitoUserPoolClientAnalyticsConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        application_arn: cdktf.stringToTerraform(struct.applicationArn),
        application_id: cdktf.stringToTerraform(struct.applicationId),
        external_id: cdktf.stringToTerraform(struct.externalId),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        user_data_shared: cdktf.booleanToTerraform(struct.userDataShared),
    };
}
export class CognitoUserPoolClientAnalyticsConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._applicationArn) {
            hasAnyValues = true;
            internalValueResult.applicationArn = this._applicationArn;
        }
        if (this._applicationId) {
            hasAnyValues = true;
            internalValueResult.applicationId = this._applicationId;
        }
        if (this._externalId) {
            hasAnyValues = true;
            internalValueResult.externalId = this._externalId;
        }
        if (this._roleArn) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._userDataShared) {
            hasAnyValues = true;
            internalValueResult.userDataShared = this._userDataShared;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._applicationArn = undefined;
            this._applicationId = undefined;
            this._externalId = undefined;
            this._roleArn = undefined;
            this._userDataShared = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._applicationArn = value.applicationArn;
            this._applicationId = value.applicationId;
            this._externalId = value.externalId;
            this._roleArn = value.roleArn;
            this._userDataShared = value.userDataShared;
        }
    }
    // application_arn - computed: false, optional: true, required: false
    _applicationArn;
    get applicationArn() {
        return this.getStringAttribute('application_arn');
    }
    set applicationArn(value) {
        this._applicationArn = value;
    }
    resetApplicationArn() {
        this._applicationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get applicationArnInput() {
        return this._applicationArn;
    }
    // application_id - computed: false, optional: true, required: false
    _applicationId;
    get applicationId() {
        return this.getStringAttribute('application_id');
    }
    set applicationId(value) {
        this._applicationId = value;
    }
    resetApplicationId() {
        this._applicationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get applicationIdInput() {
        return this._applicationId;
    }
    // external_id - computed: false, optional: true, required: false
    _externalId;
    get externalId() {
        return this.getStringAttribute('external_id');
    }
    set externalId(value) {
        this._externalId = value;
    }
    resetExternalId() {
        this._externalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get externalIdInput() {
        return this._externalId;
    }
    // role_arn - computed: true, optional: true, required: false
    _roleArn;
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    set roleArn(value) {
        this._roleArn = value;
    }
    resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get roleArnInput() {
        return this._roleArn;
    }
    // user_data_shared - computed: false, optional: true, required: false
    _userDataShared;
    get userDataShared() {
        return this.getBooleanAttribute('user_data_shared');
    }
    set userDataShared(value) {
        this._userDataShared = value;
    }
    resetUserDataShared() {
        this._userDataShared = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userDataSharedInput() {
        return this._userDataShared;
    }
}
export function cognitoUserPoolClientTokenValidityUnitsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_token: cdktf.stringToTerraform(struct.accessToken),
        id_token: cdktf.stringToTerraform(struct.idToken),
        refresh_token: cdktf.stringToTerraform(struct.refreshToken),
    };
}
export class CognitoUserPoolClientTokenValidityUnitsOutputReference extends cdktf.ComplexObject {
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
        if (this._accessToken) {
            hasAnyValues = true;
            internalValueResult.accessToken = this._accessToken;
        }
        if (this._idToken) {
            hasAnyValues = true;
            internalValueResult.idToken = this._idToken;
        }
        if (this._refreshToken) {
            hasAnyValues = true;
            internalValueResult.refreshToken = this._refreshToken;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._accessToken = undefined;
            this._idToken = undefined;
            this._refreshToken = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._accessToken = value.accessToken;
            this._idToken = value.idToken;
            this._refreshToken = value.refreshToken;
        }
    }
    // access_token - computed: false, optional: true, required: false
    _accessToken;
    get accessToken() {
        return this.getStringAttribute('access_token');
    }
    set accessToken(value) {
        this._accessToken = value;
    }
    resetAccessToken() {
        this._accessToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessTokenInput() {
        return this._accessToken;
    }
    // id_token - computed: false, optional: true, required: false
    _idToken;
    get idToken() {
        return this.getStringAttribute('id_token');
    }
    set idToken(value) {
        this._idToken = value;
    }
    resetIdToken() {
        this._idToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idTokenInput() {
        return this._idToken;
    }
    // refresh_token - computed: false, optional: true, required: false
    _refreshToken;
    get refreshToken() {
        return this.getStringAttribute('refresh_token');
    }
    set refreshToken(value) {
        this._refreshToken = value;
    }
    resetRefreshToken() {
        this._refreshToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get refreshTokenInput() {
        return this._refreshToken;
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html aws_cognito_user_pool_client}
*/
export class CognitoUserPoolClient extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_cognito_user_pool_client";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html aws_cognito_user_pool_client} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoUserPoolClientConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_cognito_user_pool_client',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._accessTokenValidity = config.accessTokenValidity;
        this._allowedOauthFlows = config.allowedOauthFlows;
        this._allowedOauthFlowsUserPoolClient = config.allowedOauthFlowsUserPoolClient;
        this._allowedOauthScopes = config.allowedOauthScopes;
        this._callbackUrls = config.callbackUrls;
        this._defaultRedirectUri = config.defaultRedirectUri;
        this._enableTokenRevocation = config.enableTokenRevocation;
        this._explicitAuthFlows = config.explicitAuthFlows;
        this._generateSecret = config.generateSecret;
        this._idTokenValidity = config.idTokenValidity;
        this._logoutUrls = config.logoutUrls;
        this._name = config.name;
        this._preventUserExistenceErrors = config.preventUserExistenceErrors;
        this._readAttributes = config.readAttributes;
        this._refreshTokenValidity = config.refreshTokenValidity;
        this._supportedIdentityProviders = config.supportedIdentityProviders;
        this._userPoolId = config.userPoolId;
        this._writeAttributes = config.writeAttributes;
        this._analyticsConfiguration.internalValue = config.analyticsConfiguration;
        this._tokenValidityUnits.internalValue = config.tokenValidityUnits;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // access_token_validity - computed: false, optional: true, required: false
    _accessTokenValidity;
    get accessTokenValidity() {
        return this.getNumberAttribute('access_token_validity');
    }
    set accessTokenValidity(value) {
        this._accessTokenValidity = value;
    }
    resetAccessTokenValidity() {
        this._accessTokenValidity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessTokenValidityInput() {
        return this._accessTokenValidity;
    }
    // allowed_oauth_flows - computed: false, optional: true, required: false
    _allowedOauthFlows;
    get allowedOauthFlows() {
        return this.getListAttribute('allowed_oauth_flows');
    }
    set allowedOauthFlows(value) {
        this._allowedOauthFlows = value;
    }
    resetAllowedOauthFlows() {
        this._allowedOauthFlows = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedOauthFlowsInput() {
        return this._allowedOauthFlows;
    }
    // allowed_oauth_flows_user_pool_client - computed: false, optional: true, required: false
    _allowedOauthFlowsUserPoolClient;
    get allowedOauthFlowsUserPoolClient() {
        return this.getBooleanAttribute('allowed_oauth_flows_user_pool_client');
    }
    set allowedOauthFlowsUserPoolClient(value) {
        this._allowedOauthFlowsUserPoolClient = value;
    }
    resetAllowedOauthFlowsUserPoolClient() {
        this._allowedOauthFlowsUserPoolClient = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedOauthFlowsUserPoolClientInput() {
        return this._allowedOauthFlowsUserPoolClient;
    }
    // allowed_oauth_scopes - computed: false, optional: true, required: false
    _allowedOauthScopes;
    get allowedOauthScopes() {
        return this.getListAttribute('allowed_oauth_scopes');
    }
    set allowedOauthScopes(value) {
        this._allowedOauthScopes = value;
    }
    resetAllowedOauthScopes() {
        this._allowedOauthScopes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedOauthScopesInput() {
        return this._allowedOauthScopes;
    }
    // callback_urls - computed: true, optional: true, required: false
    _callbackUrls;
    get callbackUrls() {
        return this.getListAttribute('callback_urls');
    }
    set callbackUrls(value) {
        this._callbackUrls = value;
    }
    resetCallbackUrls() {
        this._callbackUrls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get callbackUrlsInput() {
        return this._callbackUrls;
    }
    // client_secret - computed: true, optional: false, required: false
    get clientSecret() {
        return this.getStringAttribute('client_secret');
    }
    // default_redirect_uri - computed: false, optional: true, required: false
    _defaultRedirectUri;
    get defaultRedirectUri() {
        return this.getStringAttribute('default_redirect_uri');
    }
    set defaultRedirectUri(value) {
        this._defaultRedirectUri = value;
    }
    resetDefaultRedirectUri() {
        this._defaultRedirectUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultRedirectUriInput() {
        return this._defaultRedirectUri;
    }
    // enable_token_revocation - computed: true, optional: true, required: false
    _enableTokenRevocation;
    get enableTokenRevocation() {
        return this.getBooleanAttribute('enable_token_revocation');
    }
    set enableTokenRevocation(value) {
        this._enableTokenRevocation = value;
    }
    resetEnableTokenRevocation() {
        this._enableTokenRevocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableTokenRevocationInput() {
        return this._enableTokenRevocation;
    }
    // explicit_auth_flows - computed: false, optional: true, required: false
    _explicitAuthFlows;
    get explicitAuthFlows() {
        return this.getListAttribute('explicit_auth_flows');
    }
    set explicitAuthFlows(value) {
        this._explicitAuthFlows = value;
    }
    resetExplicitAuthFlows() {
        this._explicitAuthFlows = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get explicitAuthFlowsInput() {
        return this._explicitAuthFlows;
    }
    // generate_secret - computed: false, optional: true, required: false
    _generateSecret;
    get generateSecret() {
        return this.getBooleanAttribute('generate_secret');
    }
    set generateSecret(value) {
        this._generateSecret = value;
    }
    resetGenerateSecret() {
        this._generateSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get generateSecretInput() {
        return this._generateSecret;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // id_token_validity - computed: false, optional: true, required: false
    _idTokenValidity;
    get idTokenValidity() {
        return this.getNumberAttribute('id_token_validity');
    }
    set idTokenValidity(value) {
        this._idTokenValidity = value;
    }
    resetIdTokenValidity() {
        this._idTokenValidity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idTokenValidityInput() {
        return this._idTokenValidity;
    }
    // logout_urls - computed: true, optional: true, required: false
    _logoutUrls;
    get logoutUrls() {
        return this.getListAttribute('logout_urls');
    }
    set logoutUrls(value) {
        this._logoutUrls = value;
    }
    resetLogoutUrls() {
        this._logoutUrls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logoutUrlsInput() {
        return this._logoutUrls;
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // prevent_user_existence_errors - computed: true, optional: true, required: false
    _preventUserExistenceErrors;
    get preventUserExistenceErrors() {
        return this.getStringAttribute('prevent_user_existence_errors');
    }
    set preventUserExistenceErrors(value) {
        this._preventUserExistenceErrors = value;
    }
    resetPreventUserExistenceErrors() {
        this._preventUserExistenceErrors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get preventUserExistenceErrorsInput() {
        return this._preventUserExistenceErrors;
    }
    // read_attributes - computed: false, optional: true, required: false
    _readAttributes;
    get readAttributes() {
        return this.getListAttribute('read_attributes');
    }
    set readAttributes(value) {
        this._readAttributes = value;
    }
    resetReadAttributes() {
        this._readAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get readAttributesInput() {
        return this._readAttributes;
    }
    // refresh_token_validity - computed: false, optional: true, required: false
    _refreshTokenValidity;
    get refreshTokenValidity() {
        return this.getNumberAttribute('refresh_token_validity');
    }
    set refreshTokenValidity(value) {
        this._refreshTokenValidity = value;
    }
    resetRefreshTokenValidity() {
        this._refreshTokenValidity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get refreshTokenValidityInput() {
        return this._refreshTokenValidity;
    }
    // supported_identity_providers - computed: false, optional: true, required: false
    _supportedIdentityProviders;
    get supportedIdentityProviders() {
        return this.getListAttribute('supported_identity_providers');
    }
    set supportedIdentityProviders(value) {
        this._supportedIdentityProviders = value;
    }
    resetSupportedIdentityProviders() {
        this._supportedIdentityProviders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get supportedIdentityProvidersInput() {
        return this._supportedIdentityProviders;
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
    // write_attributes - computed: false, optional: true, required: false
    _writeAttributes;
    get writeAttributes() {
        return this.getListAttribute('write_attributes');
    }
    set writeAttributes(value) {
        this._writeAttributes = value;
    }
    resetWriteAttributes() {
        this._writeAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get writeAttributesInput() {
        return this._writeAttributes;
    }
    // analytics_configuration - computed: false, optional: true, required: false
    _analyticsConfiguration = new CognitoUserPoolClientAnalyticsConfigurationOutputReference(this, "analytics_configuration", true);
    get analyticsConfiguration() {
        return this._analyticsConfiguration;
    }
    putAnalyticsConfiguration(value) {
        this._analyticsConfiguration.internalValue = value;
    }
    resetAnalyticsConfiguration() {
        this._analyticsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get analyticsConfigurationInput() {
        return this._analyticsConfiguration.internalValue;
    }
    // token_validity_units - computed: false, optional: true, required: false
    _tokenValidityUnits = new CognitoUserPoolClientTokenValidityUnitsOutputReference(this, "token_validity_units", true);
    get tokenValidityUnits() {
        return this._tokenValidityUnits;
    }
    putTokenValidityUnits(value) {
        this._tokenValidityUnits.internalValue = value;
    }
    resetTokenValidityUnits() {
        this._tokenValidityUnits.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tokenValidityUnitsInput() {
        return this._tokenValidityUnits.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            access_token_validity: cdktf.numberToTerraform(this._accessTokenValidity),
            allowed_oauth_flows: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedOauthFlows),
            allowed_oauth_flows_user_pool_client: cdktf.booleanToTerraform(this._allowedOauthFlowsUserPoolClient),
            allowed_oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedOauthScopes),
            callback_urls: cdktf.listMapper(cdktf.stringToTerraform)(this._callbackUrls),
            default_redirect_uri: cdktf.stringToTerraform(this._defaultRedirectUri),
            enable_token_revocation: cdktf.booleanToTerraform(this._enableTokenRevocation),
            explicit_auth_flows: cdktf.listMapper(cdktf.stringToTerraform)(this._explicitAuthFlows),
            generate_secret: cdktf.booleanToTerraform(this._generateSecret),
            id_token_validity: cdktf.numberToTerraform(this._idTokenValidity),
            logout_urls: cdktf.listMapper(cdktf.stringToTerraform)(this._logoutUrls),
            name: cdktf.stringToTerraform(this._name),
            prevent_user_existence_errors: cdktf.stringToTerraform(this._preventUserExistenceErrors),
            read_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._readAttributes),
            refresh_token_validity: cdktf.numberToTerraform(this._refreshTokenValidity),
            supported_identity_providers: cdktf.listMapper(cdktf.stringToTerraform)(this._supportedIdentityProviders),
            user_pool_id: cdktf.stringToTerraform(this._userPoolId),
            write_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._writeAttributes),
            analytics_configuration: cognitoUserPoolClientAnalyticsConfigurationToTerraform(this._analyticsConfiguration.internalValue),
            token_validity_units: cognitoUserPoolClientTokenValidityUnitsToTerraform(this._tokenValidityUnits.internalValue),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29nbml0by11c2VyLXBvb2wtY2xpZW50LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJjb2duaXRvLXVzZXItcG9vbC1jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBa0gvQixNQUFNLFVBQVUsc0RBQXNELENBQUMsTUFBaUg7SUFDdEwsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxlQUFlLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxjQUFjLENBQUM7UUFDaEUsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO1FBQzlELFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN4RCxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7UUFDbEQsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxjQUFjLENBQUM7S0FDbkUsQ0FBQTtBQUNILENBQUM7QUFFRCxNQUFNLE9BQU8sMERBQTJELFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFDekYsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUU5Qjs7OztNQUlFO0lBQ0YsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzdELENBQUM7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