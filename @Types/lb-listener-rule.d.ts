import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic Load Balancer
*/
export interface LbListenerRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#listener_arn LbListenerRule#listener_arn}
    */
    readonly listenerArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#priority LbListenerRule#priority}
    */
    readonly priority?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#tags LbListenerRule#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#tags_all LbListenerRule#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#action LbListenerRule#action}
    */
    readonly action: LbListenerRuleAction[];
    /**
    * condition block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#condition LbListenerRule#condition}
    */
    readonly condition: LbListenerRuleCondition[];
}
export interface LbListenerRuleActionAuthenticateCognito {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#authentication_request_extra_params LbListenerRule#authentication_request_extra_params}
    */
    readonly authenticationRequestExtraParams?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#on_unauthenticated_request LbListenerRule#on_unauthenticated_request}
    */
    readonly onUnauthenticatedRequest?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#scope LbListenerRule#scope}
    */
    readonly scope?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#session_cookie_name LbListenerRule#session_cookie_name}
    */
    readonly sessionCookieName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#session_timeout LbListenerRule#session_timeout}
    */
    readonly sessionTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#user_pool_arn LbListenerRule#user_pool_arn}
    */
    readonly userPoolArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#user_pool_client_id LbListenerRule#user_pool_client_id}
    */
    readonly userPoolClientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#user_pool_domain LbListenerRule#user_pool_domain}
    */
    readonly userPoolDomain: string;
}
export declare function lbListenerRuleActionAuthenticateCognitoToTerraform(struct?: LbListenerRuleActionAuthenticateCognitoOutputReference | LbListenerRuleActionAuthenticateCognito): any;
export declare class LbListenerRuleActionAuthenticateCognitoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LbListenerRuleActionAuthenticateCognito | undefined;
    set internalValue(value: LbListenerRuleActionAuthenticateCognito | undefined);
    private _authenticationRequestExtraParams?;
    get authenticationRequestExtraParams(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set authenticationRequestExtraParams(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetAuthenticationRequestExtraParams(): void;
    get authenticationRequestExtraParamsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _onUnauthenticatedRequest?;
    get onUnauthenticatedRequest(): string;
    set onUnauthenticatedRequest(value: string);
    resetOnUnauthenticatedRequest(): void;
    get onUnauthenticatedRequestInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    resetScope(): void;
    get scopeInput(): string;
    private _sessionCookieName?;
    get sessionCookieName(): string;
    set sessionCookieName(value: string);
    resetSessionCookieName(): void;
    get sessionCookieNameInput(): string;
    private _sessionTimeout?;
    get sessionTimeout(): number;
    set sessionTimeout(value: number);
    resetSessionTimeout(): void;
    get sessionTimeoutInput(): number;
    private _userPoolArn?;
    get userPoolArn(): string;
    set userPoolArn(value: string);
    get userPoolArnInput(): string;
    private _userPoolClientId?;
    get userPoolClientId(): string;
    set userPoolClientId(value: string);
    get userPoolClientIdInput(): string;
    private _userPoolDomain?;
    get userPoolDomain(): string;
    set userPoolDomain(value: string);
    get userPoolDomainInput(): string;
}
export interface LbListenerRuleActionAuthenticateOidc {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#authentication_request_extra_params LbListenerRule#authentication_request_extra_params}
    */
    readonly authenticationRequestExtraParams?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#authorization_endpoint LbListenerRule#authorization_endpoint}
    */
    readonly authorizationEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#client_id LbListenerRule#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#client_secret LbListenerRule#client_secret}
    */
    readonly clientSecret: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#issuer LbListenerRule#issuer}
    */
    readonly issuer: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#on_unauthenticated_request LbListenerRule#on_unauthenticated_request}
    */
    readonly onUnauthenticatedRequest?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#scope LbListenerRule#scope}
    */
    readonly scope?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#session_cookie_name LbListenerRule#session_cookie_name}
    */
    readonly sessionCookieName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#session_timeout LbListenerRule#session_timeout}
    */
    readonly sessionTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#token_endpoint LbListenerRule#token_endpoint}
    */
    readonly tokenEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#user_info_endpoint LbListenerRule#user_info_endpoint}
    */
    readonly userInfoEndpoint: string;
}
export declare function lbListenerRuleActionAuthenticateOidcToTerraform(struct?: LbListenerRuleActionAuthenticateOidcOutputReference | LbListenerRuleActionAuthenticateOidc): any;
export declare class LbListenerRuleActionAuthenticateOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LbListenerRuleActionAuthenticateOidc | undefined;
    set internalValue(value: LbListenerRuleActionAuthenticateOidc | undefined);
    private _authenticationRequestExtraParams?;
    get authenticationRequestExtraParams(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set authenticationRequestExtraParams(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetAuthenticationRequestExtraParams(): void;
    get authenticationRequestExtraParamsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _authorizationEndpoint?;
    get authorizationEndpoint(): string;
    set authorizationEndpoint(value: string);
    get authorizationEndpointInput(): string;
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    get clientIdInput(): string;
    private _clientSecret?;
    get clientSecret(): string;
    set clientSecret(value: string);
    get clientSecretInput(): string;
    private _issuer?;
    get issuer(): string;
    set issuer(value: string);
    get issuerInput(): string;
    private _onUnauthenticatedRequest?;
    get onUnauthenticatedRequest(): string;
    set onUnauthenticatedRequest(value: string);
    resetOnUnauthenticatedRequest(): void;
    get onUnauthenticatedRequestInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    resetScope(): void;
    get scopeInput(): string;
    private _sessionCookieName?;
    get sessionCookieName(): string;
    set sessionCookieName(value: string);
    resetSessionCookieName(): void;
    get sessionCookieNameInput(): string;
    private _sessionTimeout?;
    get sessionTimeout(): number;
    set sessionTimeout(value: number);
    resetSessionTimeout(): void;
    get sessionTimeoutInput(): number;
    private _tokenEndpoint?;
    get tokenEndpoint(): string;
    set tokenEndpoint(value: string);
    get tokenEndpointInput(): string;
    private _userInfoEndpoint?;
    get userInfoEndpoint(): string;
    set userInfoEndpoint(value: string);
    get userInfoEndpointInput(): string;
}
export interface LbListenerRuleActionFixedResponse {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#content_type LbListenerRule#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#message_body LbListenerRule#message_body}
    */
    readonly messageBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#status_code LbListenerRule#status_code}
    */
    readonly statusCode?: string;
}
export declare function lbListenerRuleActionFixedResponseToTerraform(struct?: LbListenerRuleActionFixedResponseOutputReference | LbListenerRuleActionFixedResponse): any;
export declare class LbListenerRuleActionFixedResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LbListenerRuleActionFixedResponse | undefined;
    set internalValue(value: LbListenerRuleActionFixedResponse | undefined);
    private _contentType?;
    get contentType(): string;
    set contentType(value: string);
    get contentTypeInput(): string;
    private _messageBody?;
    get messageBody(): string;
    set messageBody(value: string);
    resetMessageBody(): void;
    get messageBodyInput(): string;
    private _statusCode?;
    get statusCode(): string;
    set statusCode(value: string);
    resetStatusCode(): void;
    get statusCodeInput(): string;
}
export interface LbListenerRuleActionForwardStickiness {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#duration LbListenerRule#duration}
    */
    readonly duration: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#enabled LbListenerRule#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function lbListenerRuleActionForwardStickinessToTerraform(struct?: LbListenerRuleActionForwardStickinessOutputReference | LbListenerRuleActionForwardStickiness): any;
export declare class LbListenerRuleActionForwardStickinessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LbListenerRuleActionForwardStickiness | undefined;
    set internalValue(value: LbListenerRuleActionForwardStickiness | undefined);
    private _duration?;
    get duration(): number;
    set duration(value: number);
    get durationInput(): number;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
}
export interface LbListenerRuleActionForwardTargetGroup {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#arn LbListenerRule#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#weight LbListenerRule#weight}
    */
    readonly weight?: number;
}
export declare function lbListenerRuleActionForwardTargetGroupToTerraform(struct?: LbListenerRuleActionForwardTargetGroup): any;
export interface LbListenerRuleActionForward {
    /**
    * stickiness block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#stickiness LbListenerRule#stickiness}
    */
    readonly stickiness?: LbListenerRuleActionForwardStickiness;
    /**
    * target_group block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#target_group LbListenerRule#target_group}
    */
    readonly targetGroup: LbListenerRuleActionForwardTargetGroup[];
}
export declare function lbListenerRuleActionForwardToTerraform(struct?: LbListenerRuleActionForwardOutputReference | LbListenerRuleActionForward): any;
export declare class LbListenerRuleActionForwardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LbListenerRuleActionForward | undefined;
    set internalValue(value: LbListenerRuleActionForward | undefined);
    private _stickiness;
    get stickiness(): LbListenerRuleActionForwardStickinessOutputReference;
    putStickiness(value: LbListenerRuleActionForwardStickiness): void;
    resetStickiness(): void;
    get stickinessInput(): LbListenerRuleActionForwardStickiness;
    private _targetGroup?;
    get targetGroup(): LbListenerRuleActionForwardTargetGroup[];
    set targetGroup(value: LbListenerRuleActionForwardTargetGroup[]);
    get targetGroupInput(): LbListenerRuleActionForwardTargetGroup[];
}
export interface LbListenerRuleActionRedirect {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#host LbListenerRule#host}
    */
    readonly host?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#path LbListenerRule#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#port LbListenerRule#port}
    */
    readonly port?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#protocol LbListenerRule#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#query LbListenerRule#query}
    */
    readonly query?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#status_code LbListenerRule#status_code}
    */
    readonly statusCode: string;
}
export declare function lbListenerRuleActionRedirectToTerraform(struct?: LbListenerRuleActionRedirectOutputReference | LbListenerRuleActionRedirect): any;
export declare class LbListenerRuleActionRedirectOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LbListenerRuleActionRedirect | undefined;
    set internalValue(value: LbListenerRuleActionRedirect | undefined);
    private _host?;
    get host(): string;
    set host(value: string);
    resetHost(): void;
    get hostInput(): string;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string;
    private _port?;
    get port(): string;
    set port(value: string);
    resetPort(): void;
    get portInput(): string;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    resetProtocol(): void;
    get protocolInput(): string;
    private _query?;
    get query(): string;
    set query(value: string);
    resetQuery(): void;
    get queryInput(): string;
    private _statusCode?;
    get statusCode(): string;
    set statusCode(value: string);
    get statusCodeInput(): string;
}
export interface LbListenerRuleAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#order LbListenerRule#order}
    */
    readonly order?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#target_group_arn LbListenerRule#target_group_arn}
    */
    readonly targetGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#type LbListenerRule#type}
    */
    readonly type: string;
    /**
    * authenticate_cognito block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#authenticate_cognito LbListenerRule#authenticate_cognito}
    */
    readonly authenticateCognito?: LbListenerRuleActionAuthenticateCognito;
    /**
    * authenticate_oidc block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#authenticate_oidc LbListenerRule#authenticate_oidc}
    */
    readonly authenticateOidc?: LbListenerRuleActionAuthenticateOidc;
    /**
    * fixed_response block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#fixed_response LbListenerRule#fixed_response}
    */
    readonly fixedResponse?: LbListenerRuleActionFixedResponse;
    /**
    * forward block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#forward LbListenerRule#forward}
    */
    readonly forward?: LbListenerRuleActionForward;
    /**
    * redirect block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#redirect LbListenerRule#redirect}
    */
    readonly redirect?: LbListenerRuleActionRedirect;
}
export declare function lbListenerRuleActionToTerraform(struct?: LbListenerRuleAction): any;
export interface LbListenerRuleConditionHostHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#values LbListenerRule#values}
    */
    readonly values: string[];
}
export declare function lbListenerRuleConditionHostHeaderToTerraform(struct?: LbListenerRuleConditionHostHeaderOutputReference | LbListenerRuleConditionHostHeader): any;
export declare class LbListenerRuleConditionHostHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LbListenerRuleConditionHostHeader | undefined;
    set internalValue(value: LbListenerRuleConditionHostHeader | undefined);
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[];
}
export interface LbListenerRuleConditionHttpHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#http_header_name LbListenerRule#http_header_name}
    */
    readonly httpHeaderName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#values LbListenerRule#values}
    */
    readonly values: string[];
}
export declare function lbListenerRuleConditionHttpHeaderToTerraform(struct?: LbListenerRuleConditionHttpHeaderOutputReference | LbListenerRuleConditionHttpHeader): any;
export declare class LbListenerRuleConditionHttpHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LbListenerRuleConditionHttpHeader | undefined;
    set internalValue(value: LbListenerRuleConditionHttpHeader | undefined);
    private _httpHeaderName?;
    get httpHeaderName(): string;
    set httpHeaderName(value: string);
    get httpHeaderNameInput(): string;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[];
}
export interface LbListenerRuleConditionHttpRequestMethod {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#values LbListenerRule#values}
    */
    readonly values: string[];
}
export declare function lbListenerRuleConditionHttpRequestMethodToTerraform(struct?: LbListenerRuleConditionHttpRequestMethodOutputReference | LbListenerRuleConditionHttpRequestMethod): any;
export declare class LbListenerRuleConditionHttpRequestMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LbListenerRuleConditionHttpRequestMethod | undefined;
    set internalValue(value: LbListenerRuleConditionHttpRequestMethod | undefined);
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[];
}
export interface LbListenerRuleConditionPathPattern {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#values LbListenerRule#values}
    */
    readonly values: string[];
}
export declare function lbListenerRuleConditionPathPatternToTerraform(struct?: LbListenerRuleConditionPathPatternOutputReference | LbListenerRuleConditionPathPattern): any;
export declare class LbListenerRuleConditionPathPatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LbListenerRuleConditionPathPattern | undefined;
    set internalValue(value: LbListenerRuleConditionPathPattern | undefined);
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[];
}
export interface LbListenerRuleConditionQueryString {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#key LbListenerRule#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#value LbListenerRule#value}
    */
    readonly value: string;
}
export declare function lbListenerRuleConditionQueryStringToTerraform(struct?: LbListenerRuleConditionQueryString): any;
export interface LbListenerRuleConditionSourceIp {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#values LbListenerRule#values}
    */
    readonly values: string[];
}
export declare function lbListenerRuleConditionSourceIpToTerraform(struct?: LbListenerRuleConditionSourceIpOutputReference | LbListenerRuleConditionSourceIp): any;
export declare class LbListenerRuleConditionSourceIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LbListenerRuleConditionSourceIp | undefined;
    set internalValue(value: LbListenerRuleConditionSourceIp | undefined);
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[];
}
export interface LbListenerRuleCondition {
    /**
    * host_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#host_header LbListenerRule#host_header}
    */
    readonly hostHeader?: LbListenerRuleConditionHostHeader;
    /**
    * http_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#http_header LbListenerRule#http_header}
    */
    readonly httpHeader?: LbListenerRuleConditionHttpHeader;
    /**
    * http_request_method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#http_request_method LbListenerRule#http_request_method}
    */
    readonly httpRequestMethod?: LbListenerRuleConditionHttpRequestMethod;
    /**
    * path_pattern block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#path_pattern LbListenerRule#path_pattern}
    */
    readonly pathPattern?: LbListenerRuleConditionPathPattern;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#query_string LbListenerRule#query_string}
    */
    readonly queryString?: LbListenerRuleConditionQueryString[];
    /**
    * source_ip block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#source_ip LbListenerRule#source_ip}
    */
    readonly sourceIp?: LbListenerRuleConditionSourceIp;
}
export declare function lbListenerRuleConditionToTerraform(struct?: LbListenerRuleCondition): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html aws_lb_listener_rule}
*/
export declare class LbListenerRule extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html aws_lb_listener_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LbListenerRuleConfig
    */
    constructor(scope: Construct, id: string, config: LbListenerRuleConfig);
    get arn(): string;
    get id(): string;
    private _listenerArn?;
    get listenerArn(): string;
    set listenerArn(value: string);
    get listenerArnInput(): string;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    resetPriority(): void;
    get priorityInput(): number;
    private _tags?;
    get tags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tagsAll(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTagsAll(): void;
    get tagsAllInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _action?;
    get action(): LbListenerRuleAction[];
    set action(value: LbListenerRuleAction[]);
    get actionInput(): LbListenerRuleAction[];
    private _condition?;
    get condition(): LbListenerRuleCondition[];
    set condition(value: LbListenerRuleCondition[]);
    get conditionInput(): LbListenerRuleCondition[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=lb-listener-rule.d.ts.map