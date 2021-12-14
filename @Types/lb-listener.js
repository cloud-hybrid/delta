// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function lbListenerDefaultActionAuthenticateCognitoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        authentication_request_extra_params: cdktf.hashMapper(cdktf.anyToTerraform)(struct.authenticationRequestExtraParams),
        on_unauthenticated_request: cdktf.stringToTerraform(struct.onUnauthenticatedRequest),
        scope: cdktf.stringToTerraform(struct.scope),
        session_cookie_name: cdktf.stringToTerraform(struct.sessionCookieName),
        session_timeout: cdktf.numberToTerraform(struct.sessionTimeout),
        user_pool_arn: cdktf.stringToTerraform(struct.userPoolArn),
        user_pool_client_id: cdktf.stringToTerraform(struct.userPoolClientId),
        user_pool_domain: cdktf.stringToTerraform(struct.userPoolDomain),
    };
}
export class LbListenerDefaultActionAuthenticateCognitoOutputReference extends cdktf.ComplexObject {
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
        if (this._authenticationRequestExtraParams) {
            hasAnyValues = true;
            internalValueResult.authenticationRequestExtraParams = this._authenticationRequestExtraParams;
        }
        if (this._onUnauthenticatedRequest) {
            hasAnyValues = true;
            internalValueResult.onUnauthenticatedRequest = this._onUnauthenticatedRequest;
        }
        if (this._scope) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        if (this._sessionCookieName) {
            hasAnyValues = true;
            internalValueResult.sessionCookieName = this._sessionCookieName;
        }
        if (this._sessionTimeout) {
            hasAnyValues = true;
            internalValueResult.sessionTimeout = this._sessionTimeout;
        }
        if (this._userPoolArn) {
            hasAnyValues = true;
            internalValueResult.userPoolArn = this._userPoolArn;
        }
        if (this._userPoolClientId) {
            hasAnyValues = true;
            internalValueResult.userPoolClientId = this._userPoolClientId;
        }
        if (this._userPoolDomain) {
            hasAnyValues = true;
            internalValueResult.userPoolDomain = this._userPoolDomain;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._authenticationRequestExtraParams = undefined;
            this._onUnauthenticatedRequest = undefined;
            this._scope = undefined;
            this._sessionCookieName = undefined;
            this._sessionTimeout = undefined;
            this._userPoolArn = undefined;
            this._userPoolClientId = undefined;
            this._userPoolDomain = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._authenticationRequestExtraParams = value.authenticationRequestExtraParams;
            this._onUnauthenticatedRequest = value.onUnauthenticatedRequest;
            this._scope = value.scope;
            this._sessionCookieName = value.sessionCookieName;
            this._sessionTimeout = value.sessionTimeout;
            this._userPoolArn = value.userPoolArn;
            this._userPoolClientId = value.userPoolClientId;
            this._userPoolDomain = value.userPoolDomain;
        }
    }
    // authentication_request_extra_params - computed: false, optional: true, required: false
    _authenticationRequestExtraParams;
    get authenticationRequestExtraParams() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('authentication_request_extra_params');
    }
    set authenticationRequestExtraParams(value) {
        this._authenticationRequestExtraParams = value;
    }
    resetAuthenticationRequestExtraParams() {
        this._authenticationRequestExtraParams = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authenticationRequestExtraParamsInput() {
        return this._authenticationRequestExtraParams;
    }
    // on_unauthenticated_request - computed: true, optional: true, required: false
    _onUnauthenticatedRequest;
    get onUnauthenticatedRequest() {
        return this.getStringAttribute('on_unauthenticated_request');
    }
    set onUnauthenticatedRequest(value) {
        this._onUnauthenticatedRequest = value;
    }
    resetOnUnauthenticatedRequest() {
        this._onUnauthenticatedRequest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get onUnauthenticatedRequestInput() {
        return this._onUnauthenticatedRequest;
    }
    // scope - computed: true, optional: true, required: false
    _scope;
    get scope() {
        return this.getStringAttribute('scope');
    }
    set scope(value) {
        this._scope = value;
    }
    resetScope() {
        this._scope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scopeInput() {
        return this._scope;
    }
    // session_cookie_name - computed: true, optional: true, required: false
    _sessionCookieName;
    get sessionCookieName() {
        return this.getStringAttribute('session_cookie_name');
    }
    set sessionCookieName(value) {
        this._sessionCookieName = value;
    }
    resetSessionCookieName() {
        this._sessionCookieName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sessionCookieNameInput() {
        return this._sessionCookieName;
    }
    // session_timeout - computed: true, optional: true, required: false
    _sessionTimeout;
    get sessionTimeout() {
        return this.getNumberAttribute('session_timeout');
    }
    set sessionTimeout(value) {
        this._sessionTimeout = value;
    }
    resetSessionTimeout() {
        this._sessionTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sessionTimeoutInput() {
        return this._sessionTimeout;
    }
    // user_pool_arn - computed: false, optional: false, required: true
    _userPoolArn;
    get userPoolArn() {
        return this.getStringAttribute('user_pool_arn');
    }
    set userPoolArn(value) {
        this._userPoolArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get userPoolArnInput() {
        return this._userPoolArn;
    }
    // user_pool_client_id - computed: false, optional: false, required: true
    _userPoolClientId;
    get userPoolClientId() {
        return this.getStringAttribute('user_pool_client_id');
    }
    set userPoolClientId(value) {
        this._userPoolClientId = value;
    }
    // Temporarily expose input value. Use with caution.
    get userPoolClientIdInput() {
        return this._userPoolClientId;
    }
    // user_pool_domain - computed: false, optional: false, required: true
    _userPoolDomain;
    get userPoolDomain() {
        return this.getStringAttribute('user_pool_domain');
    }
    set userPoolDomain(value) {
        this._userPoolDomain = value;
    }
    // Temporarily expose input value. Use with caution.
    get userPoolDomainInput() {
        return this._userPoolDomain;
    }
}
export function lbListenerDefaultActionAuthenticateOidcToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        authentication_request_extra_params: cdktf.hashMapper(cdktf.anyToTerraform)(struct.authenticationRequestExtraParams),
        authorization_endpoint: cdktf.stringToTerraform(struct.authorizationEndpoint),
        client_id: cdktf.stringToTerraform(struct.clientId),
        client_secret: cdktf.stringToTerraform(struct.clientSecret),
        issuer: cdktf.stringToTerraform(struct.issuer),
        on_unauthenticated_request: cdktf.stringToTerraform(struct.onUnauthenticatedRequest),
        scope: cdktf.stringToTerraform(struct.scope),
        session_cookie_name: cdktf.stringToTerraform(struct.sessionCookieName),
        session_timeout: cdktf.numberToTerraform(struct.sessionTimeout),
        token_endpoint: cdktf.stringToTerraform(struct.tokenEndpoint),
        user_info_endpoint: cdktf.stringToTerraform(struct.userInfoEndpoint),
    };
}
export class LbListenerDefaultActionAuthenticateOidcOutputReference extends cdktf.ComplexObject {
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
        if (this._authenticationRequestExtraParams) {
            hasAnyValues = true;
            internalValueResult.authenticationRequestExtraParams = this._authenticationRequestExtraParams;
        }
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
        if (this._onUnauthenticatedRequest) {
            hasAnyValues = true;
            internalValueResult.onUnauthenticatedRequest = this._onUnauthenticatedRequest;
        }
        if (this._scope) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        if (this._sessionCookieName) {
            hasAnyValues = true;
            internalValueResult.sessionCookieName = this._sessionCookieName;
        }
        if (this._sessionTimeout) {
            hasAnyValues = true;
            internalValueResult.sessionTimeout = this._sessionTimeout;
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
            this._authenticationRequestExtraParams = undefined;
            this._authorizationEndpoint = undefined;
            this._clientId = undefined;
            this._clientSecret = undefined;
            this._issuer = undefined;
            this._onUnauthenticatedRequest = undefined;
            this._scope = undefined;
            this._sessionCookieName = undefined;
            this._sessionTimeout = undefined;
            this._tokenEndpoint = undefined;
            this._userInfoEndpoint = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._authenticationRequestExtraParams = value.authenticationRequestExtraParams;
            this._authorizationEndpoint = value.authorizationEndpoint;
            this._clientId = value.clientId;
            this._clientSecret = value.clientSecret;
            this._issuer = value.issuer;
            this._onUnauthenticatedRequest = value.onUnauthenticatedRequest;
            this._scope = value.scope;
            this._sessionCookieName = value.sessionCookieName;
            this._sessionTimeout = value.sessionTimeout;
            this._tokenEndpoint = value.tokenEndpoint;
            this._userInfoEndpoint = value.userInfoEndpoint;
        }
    }
    // authentication_request_extra_params - computed: false, optional: true, required: false
    _authenticationRequestExtraParams;
    get authenticationRequestExtraParams() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('authentication_request_extra_params');
    }
    set authenticationRequestExtraParams(value) {
        this._authenticationRequestExtraParams = value;
    }
    resetAuthenticationRequestExtraParams() {
        this._authenticationRequestExtraParams = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authenticationRequestExtraParamsInput() {
        return this._authenticationRequestExtraParams;
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
    // on_unauthenticated_request - computed: true, optional: true, required: false
    _onUnauthenticatedRequest;
    get onUnauthenticatedRequest() {
        return this.getStringAttribute('on_unauthenticated_request');
    }
    set onUnauthenticatedRequest(value) {
        this._onUnauthenticatedRequest = value;
    }
    resetOnUnauthenticatedRequest() {
        this._onUnauthenticatedRequest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get onUnauthenticatedRequestInput() {
        return this._onUnauthenticatedRequest;
    }
    // scope - computed: true, optional: true, required: false
    _scope;
    get scope() {
        return this.getStringAttribute('scope');
    }
    set scope(value) {
        this._scope = value;
    }
    resetScope() {
        this._scope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scopeInput() {
        return this._scope;
    }
    // session_cookie_name - computed: true, optional: true, required: false
    _sessionCookieName;
    get sessionCookieName() {
        return this.getStringAttribute('session_cookie_name');
    }
    set sessionCookieName(value) {
        this._sessionCookieName = value;
    }
    resetSessionCookieName() {
        this._sessionCookieName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sessionCookieNameInput() {
        return this._sessionCookieName;
    }
    // session_timeout - computed: true, optional: true, required: false
    _sessionTimeout;
    get sessionTimeout() {
        return this.getNumberAttribute('session_timeout');
    }
    set sessionTimeout(value) {
        this._sessionTimeout = value;
    }
    resetSessionTimeout() {
        this._sessionTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sessionTimeoutInput() {
        return this._sessionTimeout;
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
export function lbListenerDefaultActionFixedResponseToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content_type: cdktf.stringToTerraform(struct.contentType),
        message_body: cdktf.stringToTerraform(struct.messageBody),
        status_code: cdktf.stringToTerraform(struct.statusCode),
    };
}
export class LbListenerDefaultActionFixedResponseOutputReference extends cdktf.ComplexObject {
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
        if (this._contentType) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._messageBody) {
            hasAnyValues = true;
            internalValueResult.messageBody = this._messageBody;
        }
        if (this._statusCode) {
            hasAnyValues = true;
            internalValueResult.statusCode = this._statusCode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._contentType = undefined;
            this._messageBody = undefined;
            this._statusCode = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._contentType = value.contentType;
            this._messageBody = value.messageBody;
            this._statusCode = value.statusCode;
        }
    }
    // content_type - computed: false, optional: false, required: true
    _contentType;
    get contentType() {
        return this.getStringAttribute('content_type');
    }
    set contentType(value) {
        this._contentType = value;
    }
    // Temporarily expose input value. Use with caution.
    get contentTypeInput() {
        return this._contentType;
    }
    // message_body - computed: false, optional: true, required: false
    _messageBody;
    get messageBody() {
        return this.getStringAttribute('message_body');
    }
    set messageBody(value) {
        this._messageBody = value;
    }
    resetMessageBody() {
        this._messageBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get messageBodyInput() {
        return this._messageBody;
    }
    // status_code - computed: true, optional: true, required: false
    _statusCode;
    get statusCode() {
        return this.getStringAttribute('status_code');
    }
    set statusCode(value) {
        this._statusCode = value;
    }
    resetStatusCode() {
        this._statusCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statusCodeInput() {
        return this._statusCode;
    }
}
export function lbListenerDefaultActionForwardStickinessToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        duration: cdktf.numberToTerraform(struct.duration),
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
export class LbListenerDefaultActionForwardStickinessOutputReference extends cdktf.ComplexObject {
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
        if (this._duration) {
            hasAnyValues = true;
            internalValueResult.duration = this._duration;
        }
        if (this._enabled) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._duration = undefined;
            this._enabled = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._duration = value.duration;
            this._enabled = value.enabled;
        }
    }
    // duration - computed: false, optional: false, required: true
    _duration;
    get duration() {
        return this.getNumberAttribute('duration');
    }
    set duration(value) {
        this._duration = value;
    }
    // Temporarily expose input value. Use with caution.
    get durationInput() {
        return this._duration;
    }
    // enabled - computed: false, optional: true, required: false
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
}
export function lbListenerDefaultActionForwardTargetGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        weight: cdktf.numberToTerraform(struct.weight),
    };
}
export function lbListenerDefaultActionForwardToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        stickiness: lbListenerDefaultActionForwardStickinessToTerraform(struct.stickiness),
        target_group: cdktf.listMapper(lbListenerDefaultActionForwardTargetGroupToTerraform)(struct.targetGroup),
    };
}
export class LbListenerDefaultActionForwardOutputReference extends cdktf.ComplexObject {
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
        if (this._stickiness?.internalValue) {
            hasAnyValues = true;
            internalValueResult.stickiness = this._stickiness?.internalValue;
        }
        if (this._targetGroup) {
            hasAnyValues = true;
            internalValueResult.targetGroup = this._targetGroup;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._stickiness.internalValue = undefined;
            this._targetGroup = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._stickiness.internalValue = value.stickiness;
            this._targetGroup = value.targetGroup;
        }
    }
    // stickiness - computed: false, optional: true, required: false
    _stickiness = new LbListenerDefaultActionForwardStickinessOutputReference(this, "stickiness", true);
    get stickiness() {
        return this._stickiness;
    }
    putStickiness(value) {
        this._stickiness.internalValue = value;
    }
    resetStickiness() {
        this._stickiness.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stickinessInput() {
        return this._stickiness.internalValue;
    }
    // target_group - computed: false, optional: false, required: true
    _targetGroup;
    get targetGroup() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('target_group');
    }
    set targetGroup(value) {
        this._targetGroup = value;
    }
    // Temporarily expose input value. Use with caution.
    get targetGroupInput() {
        return this._targetGroup;
    }
}
export function lbListenerDefaultActionRedirectToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        host: cdktf.stringToTerraform(struct.host),
        path: cdktf.stringToTerraform(struct.path),
        port: cdktf.stringToTerraform(struct.port),
        protocol: cdktf.stringToTerraform(struct.protocol),
        query: cdktf.stringToTerraform(struct.query),
        status_code: cdktf.stringToTerraform(struct.statusCode),
    };
}
export class LbListenerDefaultActionRedirectOutputReference extends cdktf.ComplexObject {
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
        if (this._host) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._path) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        if (this._port) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._protocol) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._query) {
            hasAnyValues = true;
            internalValueResult.query = this._query;
        }
        if (this._statusCode) {
            hasAnyValues = true;
            internalValueResult.statusCode = this._statusCode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._host = undefined;
            this._path = undefined;
            this._port = undefined;
            this._protocol = undefined;
            this._query = undefined;
            this._statusCode = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._host = value.host;
            this._path = value.path;
            this._port = value.port;
            this._protocol = value.protocol;
            this._query = value.query;
            this._statusCode = value.statusCode;
        }
    }
    // host - computed: false, optional: true, required: false
    _host;
    get host() {
        return this.getStringAttribute('host');
    }
    set host(value) {
        this._host = value;
    }
    resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostInput() {
        return this._host;
    }
    // path - computed: false, optional: true, required: false
    _path;
    get path() {
        return this.getStringAttribute('path');
    }
    set path(value) {
        this._path = value;
    }
    resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pathInput() {
        return this._path;
    }
    // port - computed: false, optional: true, required: false
    _port;
    get port() {
        return this.getStringAttribute('port');
    }
    set port(value) {
        this._port = value;
    }
    resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get portInput() {
        return this._port;
    }
    // protocol - computed: false, optional: true, required: false
    _protocol;
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    set protocol(value) {
        this._protocol = value;
    }
    resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get protocolInput() {
        return this._protocol;
    }
    // query - computed: false, optional: true, required: false
    _query;
    get query() {
        return this.getStringAttribute('query');
    }
    set query(value) {
        this._query = value;
    }
    resetQuery() {
        this._query = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryInput() {
        return this._query;
    }
    // status_code - computed: false, optional: false, required: true
    _statusCode;
    get statusCode() {
        return this.getStringAttribute('status_code');
    }
    set statusCode(value) {
        this._statusCode = value;
    }
    // Temporarily expose input value. Use with caution.
    get statusCodeInput() {
        return this._statusCode;
    }
}
export function lbListenerDefaultActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        order: cdktf.numberToTerraform(struct.order),
        target_group_arn: cdktf.stringToTerraform(struct.targetGroupArn),
        type: cdktf.stringToTerraform(struct.type),
        authenticate_cognito: lbListenerDefaultActionAuthenticateCognitoToTerraform(struct.authenticateCognito),
        authenticate_oidc: lbListenerDefaultActionAuthenticateOidcToTerraform(struct.authenticateOidc),
        fixed_response: lbListenerDefaultActionFixedResponseToTerraform(struct.fixedResponse),
        forward: lbListenerDefaultActionForwardToTerraform(struct.forward),
        redirect: lbListenerDefaultActionRedirectToTerraform(struct.redirect),
    };
}
export function lbListenerTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        read: cdktf.stringToTerraform(struct.read),
    };
}
export class LbListenerTimeoutsOutputReference extends cdktf.ComplexObject {
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
        if (this._read) {
            hasAnyValues = true;
            internalValueResult.read = this._read;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._read = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._read = value.read;
        }
    }
    // read - computed: false, optional: true, required: false
    _read;
    get read() {
        return this.getStringAttribute('read');
    }
    set read(value) {
        this._read = value;
    }
    resetRead() {
        this._read = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get readInput() {
        return this._read;
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html aws_lb_listener}
*/
export class LbListener extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_lb_listener";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html aws_lb_listener} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LbListenerConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_lb_listener',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._alpnPolicy = config.alpnPolicy;
        this._certificateArn = config.certificateArn;
        this._loadBalancerArn = config.loadBalancerArn;
        this._port = config.port;
        this._protocol = config.protocol;
        this._sslPolicy = config.sslPolicy;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._defaultAction = config.defaultAction;
        this._timeouts.internalValue = config.timeouts;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // alpn_policy - computed: false, optional: true, required: false
    _alpnPolicy;
    get alpnPolicy() {
        return this.getStringAttribute('alpn_policy');
    }
    set alpnPolicy(value) {
        this._alpnPolicy = value;
    }
    resetAlpnPolicy() {
        this._alpnPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get alpnPolicyInput() {
        return this._alpnPolicy;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // certificate_arn - computed: false, optional: true, required: false
    _certificateArn;
    get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }
    set certificateArn(value) {
        this._certificateArn = value;
    }
    resetCertificateArn() {
        this._certificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get certificateArnInput() {
        return this._certificateArn;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // load_balancer_arn - computed: false, optional: false, required: true
    _loadBalancerArn;
    get loadBalancerArn() {
        return this.getStringAttribute('load_balancer_arn');
    }
    set loadBalancerArn(value) {
        this._loadBalancerArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get loadBalancerArnInput() {
        return this._loadBalancerArn;
    }
    // port - computed: false, optional: true, required: false
    _port;
    get port() {
        return this.getNumberAttribute('port');
    }
    set port(value) {
        this._port = value;
    }
    resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get portInput() {
        return this._port;
    }
    // protocol - computed: true, optional: true, required: false
    _protocol;
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    set protocol(value) {
        this._protocol = value;
    }
    resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get protocolInput() {
        return this._protocol;
    }
    // ssl_policy - computed: true, optional: true, required: false
    _sslPolicy;
    get sslPolicy() {
        return this.getStringAttribute('ssl_policy');
    }
    set sslPolicy(value) {
        this._sslPolicy = value;
    }
    resetSslPolicy() {
        this._sslPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sslPolicyInput() {
        return this._sslPolicy;
    }
    // tags - computed: false, optional: true, required: false
    _tags;
    get tags() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags');
    }
    set tags(value) {
        this._tags = value;
    }
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsInput() {
        return this._tags;
    }
    // tags_all - computed: true, optional: true, required: false
    _tagsAll;
    get tagsAll() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags_all');
    }
    set tagsAll(value) {
        this._tagsAll = value;
    }
    resetTagsAll() {
        this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsAllInput() {
        return this._tagsAll;
    }
    // default_action - computed: false, optional: false, required: true
    _defaultAction;
    get defaultAction() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('default_action');
    }
    set defaultAction(value) {
        this._defaultAction = value;
    }
    // Temporarily expose input value. Use with caution.
    get defaultActionInput() {
        return this._defaultAction;
    }
    // timeouts - computed: false, optional: true, required: false
    _timeouts = new LbListenerTimeoutsOutputReference(this, "timeouts", true);
    get timeouts() {
        return this._timeouts;
    }
    putTimeouts(value) {
        this._timeouts.internalValue = value;
    }
    resetTimeouts() {
        this._timeouts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutsInput() {
        return this._timeouts.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            alpn_policy: cdktf.stringToTerraform(this._alpnPolicy),
            certificate_arn: cdktf.stringToTerraform(this._certificateArn),
            load_balancer_arn: cdktf.stringToTerraform(this._loadBalancerArn),
            port: cdktf.numberToTerraform(this._port),
            protocol: cdktf.stringToTerraform(this._protocol),
            ssl_policy: cdktf.stringToTerraform(this._sslPolicy),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            default_action: cdktf.listMapper(lbListenerDefaultActionToTerraform)(this._defaultAction),
            timeouts: lbListenerTimeoutsToTerraform(this._timeouts.internalValue),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGItbGlzdGVuZXIuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxiLWxpc3RlbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQXNGL0IsTUFBTSxVQUFVLHFEQUFxRCxDQUFDLE1BQStHO0lBQ25MLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsbUNBQW1DLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTyxDQUFDLGdDQUFnQyxDQUFDO1FBQ3JILDBCQUEwQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsd0JBQXdCLENBQUM7UUFDckYsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO1FBQzdDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDdkUsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO1FBQ2hFLGFBQWEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztRQUMzRCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGdCQUFnQixDQUFDO1FBQ3RFLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO0tBQ2xFLENBQUE7QUFDSCxDQUFDO0FBRUQsTUFBTSxPQUFPLHlEQUEwRCxTQUFRLEtBQUssQ0FBQyxhQUFhO0lBQ3hGLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFFOUI7Ozs7TUFJRTtJQUNGLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsaUNBQWlDLEVBQUU7WUFDMUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxnQ0FBZ0MsR0FBRyxJQUFJLENBQUMsaUNBQWlDLENBQUM7U0FDL0Y7UUFDRCxJQUFJLElBQUksQ0FBQyx5QkFBeUIsRUFBRTtZQUNsQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztTQUMvRTtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDekM7UUFDRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztTQUNqRTtRQUNELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1NBQzNEO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDckQ7UUFDRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztTQUMvRDtRQUNELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1NBQzNEO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQztJQUVELElBQVcsYUFBYSxDQUFDLEtBQTZEO1FBQ3BGLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsaUNBQWlDLEdBQUcsU0FBUyxDQUFDO1lBQ25ELElBQUksQ0FBQyx5QkFBeUIsR0FBRyxTQUFTLENBQUM7WUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7WUFDeEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztZQUNwQyxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztZQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztZQUM5QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO1lBQ25DLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1NBQ2xDO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsaUNBQWlDLEdBQUcsS0FBSyxDQUFDLGdDQUFnQyxDQUFDO1lBQ2hGLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQUMsd0JBQXdCLENBQUM7WUFDaEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUM7WUFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO1lBQzVDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztZQUN0QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDO1lBQ2hELElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQztTQUM3QztJQUNILENBQUM7SUFFRCx5RkFBeUY7SUFDakYsaUNBQWlDLENBQWlEO0lBQzFGLElBQVcsZ0NBQWdDO1FBQ3pDLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxxQ0FBcUMsQ0FBUSxDQUFDO0lBQ3RGLENBQUM7SUFDRCxJQUFXLGdDQUFnQyxDQUFDLEtBQW9EO1FBQzlGLElBQUksQ0FBQyxpQ0FBaUMsR0FBRyxLQUFLLENBQUM7SUFDakQsQ0FBQztJQUNNLHFDQUFxQztRQUMxQyxJQUFJLENBQUMsaUNBQWlDLEdBQUcsU0FBUyxDQUFDO0lBQ3JELENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxxQ0FBcUM7UUFDOUMsT0FBTyxJQUFJLENBQUMsaUNBQWlDLENBQUM7SUFDaEQsQ0FBQztJQUVELCtFQUErRTtJQUN2RSx5QkFBeUIsQ0FBVTtJQUMzQyxJQUFXLHdCQUF3QjtRQUNqQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDRCxJQUFXLHdCQUF3QixDQUFDLEtBQWE7UUFDL0MsSUFBSSxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQztJQUN6QyxDQUFDO0lBQ00sNkJBQTZCO1FBQ2xDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxTQUFTLENBQUM7SUFDN0MsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLDZCQUE2QjtRQUN0QyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztJQUN4QyxDQUFDO0lBRUQsMERBQTBEO0lBQ2xELE1BQU0sQ0FBVTtJQUN4QixJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0QsSUFBVyxLQUFLLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ00sVUFBVTtRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQsd0VBQXdFO0lBQ2hFLGtCQUFrQixDQUFVO0lBQ3BDLElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNELElBQVcsaUJBQWlCLENBQUMsS0FBYTtRQUN4QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFDTSxzQkFBc0I7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztJQUN0QyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7SUFFRCxvRUFBb0U7SUFDNUQsZUFBZSxDQUFVO0lBQ2pDLElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxJQUFXLGNBQWMsQ0FBQyxLQUFhO1FBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFDTSxtQkFBbUI7UUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVELG1FQUFtRTtJQUMzRCxZQUFZLENBQVU7SUFDOUIsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDRCxJQUFXLFdBQVcsQ0FBQyxLQUFhO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFFRCx5RUFBeUU7SUFDakUsaUJBQWlCLENBQVU7SUFDbkMsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBQ0QsSUFBVyxnQkFBZ0IsQ0FBQyxLQUFhO1FBQ3ZDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDO0lBRUQsc0VBQXNFO0lBQzlELGVBQWUsQ0FBVTtJQUNqQyxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0QsSUFBVyxjQUFjLENBQUMsS0FBYTtRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0NBQ0Y7QUFnREQsTUFBTSxVQUFVLGtEQUFrRCxDQUFDLE1BQXlHO0lBQzFLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsbUNBQW1DLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTyxDQUFDLGdDQUFnQyxDQUFDO1FBQ3JILHNCQUFzQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMscUJBQXFCLENBQUM7UUFDOUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsUUFBUSxDQUFDO1FBQ3BELGFBQWEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztRQUM1RCxNQUFNLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7UUFDL0MsMEJBQTBCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyx3QkFBd0IsQ0FBQztRQUNyRixLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7UUFDN0MsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUN2RSxlQUFlLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxjQUFjLENBQUM7UUFDaEUsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO1FBQzlELGtCQUFrQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsZ0JBQWdCLENBQUM7S0FDdEUsQ0FBQTtBQUNILENBQUM7QUFFRCxNQUFNLE9BQU8sc0RBQXVELFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFDckYsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUU5Qjs7OztNQUlFO0lBQ0YsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxpQ0FBaUMsRUFBRTtZQUMxQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGdDQUFnQyxHQUFHLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQztTQUMvRjtRQUNELElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQy9CLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDO1NBQ3pFO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDL0M7UUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUN2RDtRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxJQUFJLENBQUMseUJBQXlCLEVBQUU7WUFDbEMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUM7U0FDL0U7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7U0FDakU7UUFDRCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUMzRDtRQUNELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7U0FDL0Q7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBMEQ7UUFDakYsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxpQ0FBaUMsR0FBRyxTQUFTLENBQUM7WUFDbkQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLFNBQVMsQ0FBQztZQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztZQUN6QixJQUFJLENBQUMseUJBQXlCLEdBQUcsU0FBUyxDQUFDO1lBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7WUFDcEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7WUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7WUFDaEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztTQUNwQzthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLGlDQUFpQyxHQUFHLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQztZQUNoRixJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDLHFCQUFxQixDQUFDO1lBQzFELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQzVCLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQUMsd0JBQXdCLENBQUM7WUFDaEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUM7WUFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO1lBQzVDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztZQUMxQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDO1NBQ2pEO0lBQ0gsQ0FBQztJQUVELHlGQUF5RjtJQUNqRixpQ0FBaUMsQ0FBaUQ7SUFDMUYsSUFBVyxnQ0FBZ0M7UUFDekMsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLHFDQUFxQyxDQUFRLENBQUM7SUFDdEYsQ0FBQztJQUNELElBQVcsZ0NBQWdDLENBQUMsS0FBb0Q7UUFDOUYsSUFBSSxDQUFDLGlDQUFpQyxHQUFHLEtBQUssQ0FBQztJQUNqRCxDQUFDO0lBQ00scUNBQXFDO1FBQzFDLElBQUksQ0FBQyxpQ0FBaUMsR0FBRyxTQUFTLENBQUM7SUFDckQsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLHFDQUFxQztRQUM5QyxPQUFPLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsNEVBQTRFO0lBQ3BFLHNCQUFzQixDQUFVO0lBQ3hDLElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNELElBQVcscUJBQXFCLENBQUMsS0FBYTtRQUM1QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVywwQkFBMEI7UUFDbkMsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDckMsQ0FBQztJQUVELCtEQUErRDtJQUN2RCxTQUFTLENBQVU7SUFDM0IsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDRCxJQUFXLFFBQVEsQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsbUVBQW1FO0lBQzNELGFBQWEsQ0FBVTtJQUMvQixJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNELElBQVcsWUFBWSxDQUFDLEtBQWE7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztJQUVELDREQUE0RDtJQUNwRCxPQUFPLENBQVU7SUFDekIsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNELElBQVcsTUFBTSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCwrRUFBK0U7SUFDdkUseUJBQXlCLENBQVU7SUFDM0MsSUFBVyx3QkFBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBQ0QsSUFBVyx3QkFBd0IsQ0FBQyxLQUFhO1FBQy9DLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQUM7SUFDekMsQ0FBQztJQUNNLDZCQUE2QjtRQUNsQyxJQUFJLENBQUMseUJBQXlCLEdBQUcsU0FBUyxDQUFDO0lBQzdDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyw2QkFBNkI7UUFDdEMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUM7SUFDeEMsQ0FBQztJQUVELDBEQUEwRDtJQUNsRCxNQUFNLENBQVU7SUFDeEIsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNELElBQVcsS0FBSyxDQUFDLEtBQWE7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNNLFVBQVU7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVELHdFQUF3RTtJQUNoRSxrQkFBa0IsQ0FBVTtJQUNwQyxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDRCxJQUFXLGlCQUFpQixDQUFDLEtBQWE7UUFDeEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBQ00sc0JBQXNCO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDO0lBRUQsb0VBQW9FO0lBQzVELGVBQWUsQ0FBVTtJQUNqQyxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0QsSUFBVyxjQUFjLENBQUMsS0FBYTtRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBQ00sbUJBQW1CO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFFRCxvRUFBb0U7SUFDNUQsY0FBYyxDQUFVO0lBQ2hDLElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDRCxJQUFXLGFBQWEsQ0FBQyxLQUFhO1FBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFFRCx3RUFBd0U7SUFDaEUsaUJBQWlCLENBQVU7SUFDbkMsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsSUFBVyxnQkFBZ0IsQ0FBQyxLQUFhO1FBQ3ZDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDO0NBQ0Y7QUFnQkQsTUFBTSxVQUFVLCtDQUErQyxDQUFDLE1BQW1HO0lBQ2pLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQzFELFlBQVksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztRQUMxRCxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7S0FDekQsQ0FBQTtBQUNILENBQUM7QUFFRCxNQUFNLE9BQU8sbURBQW9ELFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFDbEYsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUU5Qjs7OztNQUlFO0lBQ0YsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUNyRDtRQUNELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3JEO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDbkQ7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBdUQ7UUFDOUUsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1lBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1lBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1NBQzlCO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7WUFDdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztTQUNyQztJQUNILENBQUM7SUFFRCxrRUFBa0U7SUFDMUQsWUFBWSxDQUFVO0lBQzlCLElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsSUFBVyxXQUFXLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBRUQsa0VBQWtFO0lBQzFELFlBQVksQ0FBVTtJQUM5QixJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELElBQVcsV0FBVyxDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBRUQsZ0VBQWdFO0lBQ3hELFdBQVcsQ0FBVTtJQUM3QixJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNELElBQVcsVUFBVSxDQUFDLEtBQWE7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNNLGVBQWU7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Q0FDRjtBQVlELE1BQU0sVUFBVSxtREFBbUQsQ0FBQyxNQUEyRztJQUM3SyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztRQUNuRCxPQUFPLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7S0FDbkQsQ0FBQTtBQUNILENBQUM7QUFFRCxNQUFNLE9BQU8sdURBQXdELFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFDdEYsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUU5Qjs7OztNQUlFO0lBQ0YsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUMvQztRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQzdDO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQztJQUVELElBQVcsYUFBYSxDQUFDLEtBQTJEO1FBQ2xGLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztTQUMzQjthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUMvQjtJQUNILENBQUM7SUFFRCw4REFBOEQ7SUFDdEQsU0FBUyxDQUFVO0lBQzNCLElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsSUFBVyxRQUFRLENBQUMsS0FBYTtRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVELDZEQUE2RDtJQUNyRCxRQUFRLENBQStCO0lBQy9DLElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQVEsQ0FBQztJQUNwRCxDQUFDO0lBQ0QsSUFBVyxPQUFPLENBQUMsS0FBa0M7UUFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUNNLFlBQVk7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7SUFDNUIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Q0FDRjtBQVlELE1BQU0sVUFBVSxvREFBb0QsQ0FBQyxNQUFrRDtJQUNySCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztRQUN6QyxNQUFNLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7S0FDaEQsQ0FBQTtBQUNILENBQUM7QUFpQkQsTUFBTSxVQUFVLHlDQUF5QyxDQUFDLE1BQXVGO0lBQy9JLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLG1EQUFtRCxDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDbkYsWUFBWSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsb0RBQW9ELENBQUMsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO0tBQzFHLENBQUE7QUFDSCxDQUFDO0FBRUQsTUFBTSxPQUFPLDZDQUE4QyxTQUFRLEtBQUssQ0FBQyxhQUFhO0lBQzVFLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFFOUI7Ozs7TUFJRTtJQUNGLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRTtZQUNuQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQztTQUNsRTtRQUNELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3JEO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQztJQUVELElBQVcsYUFBYSxDQUFDLEtBQWlEO1FBQ3hFLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7U0FDL0I7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFDbEQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztJQUVELGdFQUFnRTtJQUN4RCxXQUFXLEdBQUcsSUFBSSx1REFBdUQsQ0FBQyxJQUFXLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25ILElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNNLGFBQWEsQ0FBQyxLQUErQztRQUNsRSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDekMsQ0FBQztJQUNNLGVBQWU7UUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQzdDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7SUFDeEMsQ0FBQztJQUVELGtFQUFrRTtJQUMxRCxZQUFZLENBQStDO0lBQ25FLElBQVcsV0FBVztRQUNwQixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsY0FBYyxDQUFRLENBQUM7SUFDL0QsQ0FBQztJQUNELElBQVcsV0FBVyxDQUFDLEtBQWtEO1FBQ3ZFLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7Q0FDRjtBQTRCRCxNQUFNLFVBQVUsMENBQTBDLENBQUMsTUFBeUY7SUFDbEosSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztRQUMzQyxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7UUFDbkQsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO1FBQzdDLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztLQUN6RCxDQUFBO0FBQ0gsQ0FBQztBQUVELE1BQU0sT0FBTyw4Q0FBK0MsU0FBUSxLQUFLLENBQUMsYUFBYTtJQUM3RSxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBRTlCOzs7O01BSUU7SUFDRixZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDdkM7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUN2QztRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQy9DO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUN6QztRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ25EO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQztJQUVELElBQVcsYUFBYSxDQUFDLEtBQWtEO1FBQ3pFLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztZQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztTQUM5QjthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRUQsMERBQTBEO0lBQ2xELEtBQUssQ0FBVTtJQUN2QixJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ00sU0FBUztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsMERBQTBEO0lBQ2xELEtBQUssQ0FBVTtJQUN2QixJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ00sU0FBUztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsMERBQTBEO0lBQ2xELEtBQUssQ0FBVTtJQUN2QixJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ00sU0FBUztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsOERBQThEO0lBQ3RELFNBQVMsQ0FBVTtJQUMzQixJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELElBQVcsUUFBUSxDQUFDLEtBQWE7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNNLGFBQWE7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRCwyREFBMkQ7SUFDbkQsTUFBTSxDQUFVO0lBQ3hCLElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDRCxJQUFXLEtBQUssQ0FBQyxLQUFhO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDTSxVQUFVO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpRUFBaUU7SUFDekQsV0FBVyxDQUFVO0lBQzdCLElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsSUFBVyxVQUFVLENBQUMsS0FBYTtRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztDQUNGO0FBOENELE1BQU0sVUFBVSxrQ0FBa0MsQ0FBQyxNQUFnQztJQUNqRixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztRQUM3QyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztRQUNqRSxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0Msb0JBQW9CLEVBQUUscURBQXFELENBQUMsTUFBTyxDQUFDLG1CQUFtQixDQUFDO1FBQ3hHLGlCQUFpQixFQUFFLGtEQUFrRCxDQUFDLE1BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvRixjQUFjLEVBQUUsK0NBQStDLENBQUMsTUFBTyxDQUFDLGFBQWEsQ0FBQztRQUN0RixPQUFPLEVBQUUseUNBQXlDLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNuRSxRQUFRLEVBQUUsMENBQTBDLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztLQUN2RSxDQUFBO0FBQ0gsQ0FBQztBQVNELE1BQU0sVUFBVSw2QkFBNkIsQ0FBQyxNQUErRDtJQUMzRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztLQUM1QyxDQUFBO0FBQ0gsQ0FBQztBQUVELE1BQU0sT0FBTyxpQ0FBa0MsU0FBUSxLQUFLLENBQUMsYUFBYTtJQUNoRSxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBRTlCOzs7O01BSUU7SUFDRixZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDdkM7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBcUM7UUFDNUQsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1NBQ3hCO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsMERBQTBEO0lBQ2xELEtBQUssQ0FBVTtJQUN2QixJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ00sU0FBUztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0NBQ0Y7QUFFRDs7RUFFRTtBQUNGLE1BQU0sT0FBTyxVQUFXLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQUVyRCxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNiLE1BQU0sQ0FBVSxjQUFjLEdBQVcsaUJBQWlCLENBQUM7SUFFbEUsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBd0I7UUFDdkUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSxpQkFBaUI7WUFDeEMsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDN0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUM7UUFDL0MsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNqRCxDQUFDO0lBRUQsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBRWIsaUVBQWlFO0lBQ3pELFdBQVcsQ0FBVTtJQUM3QixJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNELElBQVcsVUFBVSxDQUFDLEtBQWE7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNNLGVBQWU7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFRCx5REFBeUQ7SUFDekQsSUFBVyxHQUFHO1FBQ1osT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELHFFQUFxRTtJQUM3RCxlQUFlLENBQVU7SUFDakMsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNELElBQVcsY0FBYyxDQUFDLEtBQWE7UUFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUNNLG1CQUFtQjtRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBRUQsdURBQXVEO0lBQ3ZELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx1RUFBdUU7SUFDL0QsZ0JBQWdCLENBQVU7SUFDbEMsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNELElBQVcsZUFBZSxDQUFDLEtBQWE7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7SUFFRCwwREFBMEQ7SUFDbEQsS0FBSyxDQUFVO0lBQ3ZCLElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCxJQUFXLElBQUksQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7SUFDekIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCw2REFBNkQ7SUFDckQsU0FBUyxDQUFVO0lBQzNCLElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsSUFBVyxRQUFRLENBQUMsS0FBYTtRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBQ00sYUFBYTtRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVELCtEQUErRDtJQUN2RCxVQUFVLENBQVU7SUFDNUIsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDTSxjQUFjO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRUQsMERBQTBEO0lBQ2xELEtBQUssQ0FBaUQ7SUFDOUQsSUFBVyxJQUFJO1FBQ2Isb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBUSxDQUFDO0lBQ3ZELENBQUM7SUFDRCxJQUFXLElBQUksQ0FBQyxLQUFvRDtRQUNsRSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ00sU0FBUztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsNkRBQTZEO0lBQ3JELFFBQVEsQ0FBaUQ7SUFDakUsSUFBVyxPQUFPO1FBQ2hCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLENBQVEsQ0FBQztJQUMzRCxDQUFDO0lBQ0QsSUFBVyxPQUFPLENBQUMsS0FBb0Q7UUFDckUsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUNNLFlBQVk7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7SUFDNUIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxvRUFBb0U7SUFDNUQsY0FBYyxDQUE2QjtJQUNuRCxJQUFXLGFBQWE7UUFDdEIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGdCQUFnQixDQUFRLENBQUM7SUFDakUsQ0FBQztJQUNELElBQVcsYUFBYSxDQUFDLEtBQWdDO1FBQ3ZELElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFFRCw4REFBOEQ7SUFDdEQsU0FBUyxHQUFHLElBQUksaUNBQWlDLENBQUMsSUFBVyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RixJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDTSxXQUFXLENBQUMsS0FBeUI7UUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7SUFDTSxhQUFhO1FBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUMzQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN0RCxlQUFlLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDOUQsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUNqRSxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekMsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2pELFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNwRCxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN4RCxRQUFRLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvRCxjQUFjLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDekYsUUFBUSxFQUFFLDZCQUE2QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1NBQ3RFLENBQUM7SUFDSixDQUFDIn0=