import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic Load Balancer
*/
export interface AlbListenerRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#listener_arn AlbListenerRule#listener_arn}
    */
    readonly listenerArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#priority AlbListenerRule#priority}
    */
    readonly priority?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#tags AlbListenerRule#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#tags_all AlbListenerRule#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#action AlbListenerRule#action}
    */
    readonly action: AlbListenerRuleAction[];
    /**
    * condition block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#condition AlbListenerRule#condition}
    */
    readonly condition: AlbListenerRuleCondition[];
}
export interface AlbListenerRuleActionAuthenticateCognito {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#authentication_request_extra_params AlbListenerRule#authentication_request_extra_params}
    */
    readonly authenticationRequestExtraParams?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#on_unauthenticated_request AlbListenerRule#on_unauthenticated_request}
    */
    readonly onUnauthenticatedRequest?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#scope AlbListenerRule#scope}
    */
    readonly scope?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#session_cookie_name AlbListenerRule#session_cookie_name}
    */
    readonly sessionCookieName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#session_timeout AlbListenerRule#session_timeout}
    */
    readonly sessionTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#user_pool_arn AlbListenerRule#user_pool_arn}
    */
    readonly userPoolArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#user_pool_client_id AlbListenerRule#user_pool_client_id}
    */
    readonly userPoolClientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#user_pool_domain AlbListenerRule#user_pool_domain}
    */
    readonly userPoolDomain: string;
}
export declare function albListenerRuleActionAuthenticateCognitoToTerraform(struct?: AlbListenerRuleActionAuthenticateCognitoOutputReference | AlbListenerRuleActionAuthenticateCognito): any;
export declare class AlbListenerRuleActionAuthenticateCognitoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AlbListenerRuleActionAuthenticateCognito | undefined;
    set internalValue(value: AlbListenerRuleActionAuthenticateCognito | undefined);
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
export interface AlbListenerRuleActionAuthenticateOidc {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#authentication_request_extra_params AlbListenerRule#authentication_request_extra_params}
    */
    readonly authenticationRequestExtraParams?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#authorization_endpoint AlbListenerRule#authorization_endpoint}
    */
    readonly authorizationEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#client_id AlbListenerRule#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#client_secret AlbListenerRule#client_secret}
    */
    readonly clientSecret: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#issuer AlbListenerRule#issuer}
    */
    readonly issuer: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#on_unauthenticated_request AlbListenerRule#on_unauthenticated_request}
    */
    readonly onUnauthenticatedRequest?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#scope AlbListenerRule#scope}
    */
    readonly scope?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#session_cookie_name AlbListenerRule#session_cookie_name}
    */
    readonly sessionCookieName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#session_timeout AlbListenerRule#session_timeout}
    */
    readonly sessionTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#token_endpoint AlbListenerRule#token_endpoint}
    */
    readonly tokenEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#user_info_endpoint AlbListenerRule#user_info_endpoint}
    */
    readonly userInfoEndpoint: string;
}
export declare function albListenerRuleActionAuthenticateOidcToTerraform(struct?: AlbListenerRuleActionAuthenticateOidcOutputReference | AlbListenerRuleActionAuthenticateOidc): any;
export declare class AlbListenerRuleActionAuthenticateOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AlbListenerRuleActionAuthenticateOidc | undefined;
    set internalValue(value: AlbListenerRuleActionAuthenticateOidc | undefined);
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
export interface AlbListenerRuleActionFixedResponse {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#content_type AlbListenerRule#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#message_body AlbListenerRule#message_body}
    */
    readonly messageBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#status_code AlbListenerRule#status_code}
    */
    readonly statusCode?: string;
}
export declare function albListenerRuleActionFixedResponseToTerraform(struct?: AlbListenerRuleActionFixedResponseOutputReference | AlbListenerRuleActionFixedResponse): any;
export declare class AlbListenerRuleActionFixedResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AlbListenerRuleActionFixedResponse | undefined;
    set internalValue(value: AlbListenerRuleActionFixedResponse | undefined);
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
export interface AlbListenerRuleActionForwardStickiness {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#duration AlbListenerRule#duration}
    */
    readonly duration: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#enabled AlbListenerRule#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function albListenerRuleActionForwardStickinessToTerraform(struct?: AlbListenerRuleActionForwardStickinessOutputReference | AlbListenerRuleActionForwardStickiness): any;
export declare class AlbListenerRuleActionForwardStickinessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AlbListenerRuleActionForwardStickiness | undefined;
    set internalValue(value: AlbListenerRuleActionForwardStickiness | undefined);
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
export interface AlbListenerRuleActionForwardTargetGroup {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#arn AlbListenerRule#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#weight AlbListenerRule#weight}
    */
    readonly weight?: number;
}
export declare function albListenerRuleActionForwardTargetGroupToTerraform(struct?: AlbListenerRuleActionForwardTargetGroup): any;
export interface AlbListenerRuleActionForward {
    /**
    * stickiness block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#stickiness AlbListenerRule#stickiness}
    */
    readonly stickiness?: AlbListenerRuleActionForwardStickiness;
    /**
    * target_group block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#target_group AlbListenerRule#target_group}
    */
    readonly targetGroup: AlbListenerRuleActionForwardTargetGroup[];
}
export declare function albListenerRuleActionForwardToTerraform(struct?: AlbListenerRuleActionForwardOutputReference | AlbListenerRuleActionForward): any;
export declare class AlbListenerRuleActionForwardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AlbListenerRuleActionForward | undefined;
    set internalValue(value: AlbListenerRuleActionForward | undefined);
    private _stickiness;
    get stickiness(): AlbListenerRuleActionForwardStickinessOutputReference;
    putStickiness(value: AlbListenerRuleActionForwardStickiness): void;
    resetStickiness(): void;
    get stickinessInput(): AlbListenerRuleActionForwardStickiness;
    private _targetGroup?;
    get targetGroup(): AlbListenerRuleActionForwardTargetGroup[];
    set targetGroup(value: AlbListenerRuleActionForwardTargetGroup[]);
    get targetGroupInput(): AlbListenerRuleActionForwardTargetGroup[];
}
export interface AlbListenerRuleActionRedirect {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#host AlbListenerRule#host}
    */
    readonly host?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#path AlbListenerRule#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#port AlbListenerRule#port}
    */
    readonly port?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#protocol AlbListenerRule#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#query AlbListenerRule#query}
    */
    readonly query?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#status_code AlbListenerRule#status_code}
    */
    readonly statusCode: string;
}
export declare function albListenerRuleActionRedirectToTerraform(struct?: AlbListenerRuleActionRedirectOutputReference | AlbListenerRuleActionRedirect): any;
export declare class AlbListenerRuleActionRedirectOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AlbListenerRuleActionRedirect | undefined;
    set internalValue(value: AlbListenerRuleActionRedirect | undefined);
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
export interface AlbListenerRuleAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#order AlbListenerRule#order}
    */
    readonly order?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#target_group_arn AlbListenerRule#target_group_arn}
    */
    readonly targetGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#type AlbListenerRule#type}
    */
    readonly type: string;
    /**
    * authenticate_cognito block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#authenticate_cognito AlbListenerRule#authenticate_cognito}
    */
    readonly authenticateCognito?: AlbListenerRuleActionAuthenticateCognito;
    /**
    * authenticate_oidc block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#authenticate_oidc AlbListenerRule#authenticate_oidc}
    */
    readonly authenticateOidc?: AlbListenerRuleActionAuthenticateOidc;
    /**
    * fixed_response block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#fixed_response AlbListenerRule#fixed_response}
    */
    readonly fixedResponse?: AlbListenerRuleActionFixedResponse;
    /**
    * forward block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#forward AlbListenerRule#forward}
    */
    readonly forward?: AlbListenerRuleActionForward;
    /**
    * redirect block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#redirect AlbListenerRule#redirect}
    */
    readonly redirect?: AlbListenerRuleActionRedirect;
}
export declare function albListenerRuleActionToTerraform(struct?: AlbListenerRuleAction): any;
export interface AlbListenerRuleConditionHostHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#values AlbListenerRule#values}
    */
    readonly values: string[];
}
export declare function albListenerRuleConditionHostHeaderToTerraform(struct?: AlbListenerRuleConditionHostHeaderOutputReference | AlbListenerRuleConditionHostHeader): any;
export declare class AlbListenerRuleConditionHostHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AlbListenerRuleConditionHostHeader | undefined;
    set internalValue(value: AlbListenerRuleConditionHostHeader | undefined);
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[];
}
export interface AlbListenerRuleConditionHttpHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#http_header_name AlbListenerRule#http_header_name}
    */
    readonly httpHeaderName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#values AlbListenerRule#values}
    */
    readonly values: string[];
}
export declare function albListenerRuleConditionHttpHeaderToTerraform(struct?: AlbListenerRuleConditionHttpHeaderOutputReference | AlbListenerRuleConditionHttpHeader): any;
export declare class AlbListenerRuleConditionHttpHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AlbListenerRuleConditionHttpHeader | undefined;
    set internalValue(value: AlbListenerRuleConditionHttpHeader | undefined);
    private _httpHeaderName?;
    get httpHeaderName(): string;
    set httpHeaderName(value: string);
    get httpHeaderNameInput(): string;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[];
}
export interface AlbListenerRuleConditionHttpRequestMethod {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#values AlbListenerRule#values}
    */
    readonly values: string[];
}
export declare function albListenerRuleConditionHttpRequestMethodToTerraform(struct?: AlbListenerRuleConditionHttpRequestMethodOutputReference | AlbListenerRuleConditionHttpRequestMethod): any;
export declare class AlbListenerRuleConditionHttpRequestMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AlbListenerRuleConditionHttpRequestMethod | undefined;
    set internalValue(value: AlbListenerRuleConditionHttpRequestMethod | undefined);
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[];
}
export interface AlbListenerRuleConditionPathPattern {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#values AlbListenerRule#values}
    */
    readonly values: string[];
}
export declare function albListenerRuleConditionPathPatternToTerraform(struct?: AlbListenerRuleConditionPathPatternOutputReference | AlbListenerRuleConditionPathPattern): any;
export declare class AlbListenerRuleConditionPathPatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AlbListenerRuleConditionPathPattern | undefined;
    set internalValue(value: AlbListenerRuleConditionPathPattern | undefined);
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[];
}
export interface AlbListenerRuleConditionQueryString {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#key AlbListenerRule#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#value AlbListenerRule#value}
    */
    readonly value: string;
}
export declare function albListenerRuleConditionQueryStringToTerraform(struct?: AlbListenerRuleConditionQueryString): any;
export interface AlbListenerRuleConditionSourceIp {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#values AlbListenerRule#values}
    */
    readonly values: string[];
}
export declare function albListenerRuleConditionSourceIpToTerraform(struct?: AlbListenerRuleConditionSourceIpOutputReference | AlbListenerRuleConditionSourceIp): any;
export declare class AlbListenerRuleConditionSourceIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AlbListenerRuleConditionSourceIp | undefined;
    set internalValue(value: AlbListenerRuleConditionSourceIp | undefined);
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[];
}
export interface AlbListenerRuleCondition {
    /**
    * host_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#host_header AlbListenerRule#host_header}
    */
    readonly hostHeader?: AlbListenerRuleConditionHostHeader;
    /**
    * http_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#http_header AlbListenerRule#http_header}
    */
    readonly httpHeader?: AlbListenerRuleConditionHttpHeader;
    /**
    * http_request_method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#http_request_method AlbListenerRule#http_request_method}
    */
    readonly httpRequestMethod?: AlbListenerRuleConditionHttpRequestMethod;
    /**
    * path_pattern block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#path_pattern AlbListenerRule#path_pattern}
    */
    readonly pathPattern?: AlbListenerRuleConditionPathPattern;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#query_string AlbListenerRule#query_string}
    */
    readonly queryString?: AlbListenerRuleConditionQueryString[];
    /**
    * source_ip block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#source_ip AlbListenerRule#source_ip}
    */
    readonly sourceIp?: AlbListenerRuleConditionSourceIp;
}
export declare function albListenerRuleConditionToTerraform(struct?: AlbListenerRuleCondition): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html aws_alb_listener_rule}
*/
export declare class AlbListenerRule extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html aws_alb_listener_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AlbListenerRuleConfig
    */
    constructor(scope: Construct, id: string, config: AlbListenerRuleConfig);
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
    get action(): AlbListenerRuleAction[];
    set action(value: AlbListenerRuleAction[]);
    get actionInput(): AlbListenerRuleAction[];
    private _condition?;
    get condition(): AlbListenerRuleCondition[];
    set condition(value: AlbListenerRuleCondition[]);
    get conditionInput(): AlbListenerRuleCondition[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=alb-listener-rule.d.ts.map