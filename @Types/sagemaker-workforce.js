// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function sagemakerWorkforceCognitoConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        client_id: cdktf.stringToTerraform(struct.clientId),
        user_pool: cdktf.stringToTerraform(struct.userPool),
    };
}
export class SagemakerWorkforceCognitoConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._clientId) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._userPool) {
            hasAnyValues = true;
            internalValueResult.userPool = this._userPool;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._clientId = undefined;
            this._userPool = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._clientId = value.clientId;
            this._userPool = value.userPool;
        }
    }
    // client_id - computed: false, optional: false, required: true
    _clientId;
    get clientId() {
        return this.getStringAttribute('client_id');
    }
    set clientId(value) {
        this._clientId = value;
    }
    // Temporarily expose input value. Use with caution.
    get clientIdInput() {
        return this._clientId;
    }
    // user_pool - computed: false, optional: false, required: true
    _userPool;
    get userPool() {
        return this.getStringAttribute('user_pool');
    }
    set userPool(value) {
        this._userPool = value;
    }
    // Temporarily expose input value. Use with caution.
    get userPoolInput() {
        return this._userPool;
    }
}
export function sagemakerWorkforceOidcConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        authorization_endpoint: cdktf.stringToTerraform(struct.authorizationEndpoint),
        client_id: cdktf.stringToTerraform(struct.clientId),
        client_secret: cdktf.stringToTerraform(struct.clientSecret),
        issuer: cdktf.stringToTerraform(struct.issuer),
        jwks_uri: cdktf.stringToTerraform(struct.jwksUri),
        logout_endpoint: cdktf.stringToTerraform(struct.logoutEndpoint),
        token_endpoint: cdktf.stringToTerraform(struct.tokenEndpoint),
        user_info_endpoint: cdktf.stringToTerraform(struct.userInfoEndpoint),
    };
}
export class SagemakerWorkforceOidcConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._authorizationEndpoint) {
            hasAnyValues = true;
            internalValueResult.authorizationEndpoint = this._authorizationEndpoint;
        }
        if (this._clientId) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._clientSecret) {
            hasAnyValues = true;
            internalValueResult.clientSecret = this._clientSecret;
        }
        if (this._issuer) {
            hasAnyValues = true;
            internalValueResult.issuer = this._issuer;
        }
        if (this._jwksUri) {
            hasAnyValues = true;
            internalValueResult.jwksUri = this._jwksUri;
        }
        if (this._logoutEndpoint) {
            hasAnyValues = true;
            internalValueResult.logoutEndpoint = this._logoutEndpoint;
        }
        if (this._tokenEndpoint) {
            hasAnyValues = true;
            internalValueResult.tokenEndpoint = this._tokenEndpoint;
        }
        if (this._userInfoEndpoint) {
            hasAnyValues = true;
            internalValueResult.userInfoEndpoint = this._userInfoEndpoint;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._authorizationEndpoint = undefined;
            this._clientId = undefined;
            this._clientSecret = undefined;
            this._issuer = undefined;
            this._jwksUri = undefined;
            this._logoutEndpoint = undefined;
            this._tokenEndpoint = undefined;
            this._userInfoEndpoint = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._authorizationEndpoint = value.authorizationEndpoint;
            this._clientId = value.clientId;
            this._clientSecret = value.clientSecret;
            this._issuer = value.issuer;
            this._jwksUri = value.jwksUri;
            this._logoutEndpoint = value.logoutEndpoint;
            this._tokenEndpoint = value.tokenEndpoint;
            this._userInfoEndpoint = value.userInfoEndpoint;
        }
    }
    // authorization_endpoint - computed: false, optional: false, required: true
    _authorizationEndpoint;
    get authorizationEndpoint() {
        return this.getStringAttribute('authorization_endpoint');
    }
    set authorizationEndpoint(value) {
        this._authorizationEndpoint = value;
    }
    // Temporarily expose input value. Use with caution.
    get authorizationEndpointInput() {
        return this._authorizationEndpoint;
    }
    // client_id - computed: false, optional: false, required: true
    _clientId;
    get clientId() {
        return this.getStringAttribute('client_id');
    }
    set clientId(value) {
        this._clientId = value;
    }
    // Temporarily expose input value. Use with caution.
    get clientIdInput() {
        return this._clientId;
    }
    // client_secret - computed: false, optional: false, required: true
    _clientSecret;
    get clientSecret() {
        return this.getStringAttribute('client_secret');
    }
    set clientSecret(value) {
        this._clientSecret = value;
    }
    // Temporarily expose input value. Use with caution.
    get clientSecretInput() {
        return this._clientSecret;
    }
    // issuer - computed: false, optional: false, required: true
    _issuer;
    get issuer() {
        return this.getStringAttribute('issuer');
    }
    set issuer(value) {
        this._issuer = value;
    }
    // Temporarily expose input value. Use with caution.
    get issuerInput() {
        return this._issuer;
    }
    // jwks_uri - computed: false, optional: false, required: true
    _jwksUri;
    get jwksUri() {
        return this.getStringAttribute('jwks_uri');
    }
    set jwksUri(value) {
        this._jwksUri = value;
    }
    // Temporarily expose input value. Use with caution.
    get jwksUriInput() {
        return this._jwksUri;
    }
    // logout_endpoint - computed: false, optional: false, required: true
    _logoutEndpoint;
    get logoutEndpoint() {
        return this.getStringAttribute('logout_endpoint');
    }
    set logoutEndpoint(value) {
        this._logoutEndpoint = value;
    }
    // Temporarily expose input value. Use with caution.
    get logoutEndpointInput() {
        return this._logoutEndpoint;
    }
    // token_endpoint - computed: false, optional: false, required: true
    _tokenEndpoint;
    get tokenEndpoint() {
        return this.getStringAttribute('token_endpoint');
    }
    set tokenEndpoint(value) {
        this._tokenEndpoint = value;
    }
    // Temporarily expose input value. Use with caution.
    get tokenEndpointInput() {
        return this._tokenEndpoint;
    }
    // user_info_endpoint - computed: false, optional: false, required: true
    _userInfoEndpoint;
    get userInfoEndpoint() {
        return this.getStringAttribute('user_info_endpoint');
    }
    set userInfoEndpoint(value) {
        this._userInfoEndpoint = value;
    }
    // Temporarily expose input value. Use with caution.
    get userInfoEndpointInput() {
        return this._userInfoEndpoint;
    }
}
export function sagemakerWorkforceSourceIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cidrs: cdktf.listMapper(cdktf.stringToTerraform)(struct.cidrs),
    };
}
export class SagemakerWorkforceSourceIpConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._cidrs) {
            hasAnyValues = true;
            internalValueResult.cidrs = this._cidrs;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._cidrs = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._cidrs = value.cidrs;
        }
    }
    // cidrs - computed: false, optional: false, required: true
    _cidrs;
    get cidrs() {
        return this.getListAttribute('cidrs');
    }
    set cidrs(value) {
        this._cidrs = value;
    }
    // Temporarily expose input value. Use with caution.
    get cidrsInput() {
        return this._cidrs;
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html aws_sagemaker_workforce}
*/
export class SagemakerWorkforce extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_sagemaker_workforce";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html aws_sagemaker_workforce} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerWorkforceConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_sagemaker_workforce',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._workforceName = config.workforceName;
        this._cognitoConfig.internalValue = config.cognitoConfig;
        this._oidcConfig.internalValue = config.oidcConfig;
        this._sourceIpConfig.internalValue = config.sourceIpConfig;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // subdomain - computed: true, optional: false, required: false
    get subdomain() {
        return this.getStringAttribute('subdomain');
    }
    // workforce_name - computed: false, optional: false, required: true
    _workforceName;
    get workforceName() {
        return this.getStringAttribute('workforce_name');
    }
    set workforceName(value) {
        this._workforceName = value;
    }
    // Temporarily expose input value. Use with caution.
    get workforceNameInput() {
        return this._workforceName;
    }
    // cognito_config - computed: false, optional: true, required: false
    _cognitoConfig = new SagemakerWorkforceCognitoConfigOutputReference(this, "cognito_config", true);
    get cognitoConfig() {
        return this._cognitoConfig;
    }
    putCognitoConfig(value) {
        this._cognitoConfig.internalValue = value;
    }
    resetCognitoConfig() {
        this._cognitoConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cognitoConfigInput() {
        return this._cognitoConfig.internalValue;
    }
    // oidc_config - computed: false, optional: true, required: false
    _oidcConfig = new SagemakerWorkforceOidcConfigOutputReference(this, "oidc_config", true);
    get oidcConfig() {
        return this._oidcConfig;
    }
    putOidcConfig(value) {
        this._oidcConfig.internalValue = value;
    }
    resetOidcConfig() {
        this._oidcConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get oidcConfigInput() {
        return this._oidcConfig.internalValue;
    }
    // source_ip_config - computed: false, optional: true, required: false
    _sourceIpConfig = new SagemakerWorkforceSourceIpConfigOutputReference(this, "source_ip_config", true);
    get sourceIpConfig() {
        return this._sourceIpConfig;
    }
    putSourceIpConfig(value) {
        this._sourceIpConfig.internalValue = value;
    }
    resetSourceIpConfig() {
        this._sourceIpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceIpConfigInput() {
        return this._sourceIpConfig.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            workforce_name: cdktf.stringToTerraform(this._workforceName),
            cognito_config: sagemakerWorkforceCognitoConfigToTerraform(this._cognitoConfig.internalValue),
            oidc_config: sagemakerWorkforceOidcConfigToTerraform(this._oidcConfig.internalValue),
            source_ip_config: sagemakerWorkforceSourceIpConfigToTerraform(this._sourceIpConfig.internalValue),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FnZW1ha2VyLXdvcmtmb3JjZS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsic2FnZW1ha2VyLXdvcmtmb3JjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUF3Qy9CLE1BQU0sVUFBVSwwQ0FBMEMsQ0FBQyxNQUF5RjtJQUNsSixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztRQUNwRCxTQUFTLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7S0FDckQsQ0FBQTtBQUNILENBQUM7QUFFRCxNQUFNLE9BQU8sOENBQStDLFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFDN0UsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUU5Qjs7OztNQUlFO0lBQ0YsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNB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