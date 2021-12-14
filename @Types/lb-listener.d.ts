import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic Load Balancer
*/
export interface LbListenerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#alpn_policy LbListener#alpn_policy}
    */
    readonly alpnPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#certificate_arn LbListener#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#load_balancer_arn LbListener#load_balancer_arn}
    */
    readonly loadBalancerArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#port LbListener#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#protocol LbListener#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#ssl_policy LbListener#ssl_policy}
    */
    readonly sslPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#tags LbListener#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#tags_all LbListener#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * default_action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#default_action LbListener#default_action}
    */
    readonly defaultAction: LbListenerDefaultAction[];
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#timeouts LbListener#timeouts}
    */
    readonly timeouts?: LbListenerTimeouts;
}
export interface LbListenerDefaultActionAuthenticateCognito {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#authentication_request_extra_params LbListener#authentication_request_extra_params}
    */
    readonly authenticationRequestExtraParams?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#on_unauthenticated_request LbListener#on_unauthenticated_request}
    */
    readonly onUnauthenticatedRequest?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#scope LbListener#scope}
    */
    readonly scope?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#session_cookie_name LbListener#session_cookie_name}
    */
    readonly sessionCookieName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#session_timeout LbListener#session_timeout}
    */
    readonly sessionTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#user_pool_arn LbListener#user_pool_arn}
    */
    readonly userPoolArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#user_pool_client_id LbListener#user_pool_client_id}
    */
    readonly userPoolClientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#user_pool_domain LbListener#user_pool_domain}
    */
    readonly userPoolDomain: string;
}
export declare function lbListenerDefaultActionAuthenticateCognitoToTerraform(struct?: LbListenerDefaultActionAuthenticateCognitoOutputReference | LbListenerDefaultActionAuthenticateCognito): any;
export declare class LbListenerDefaultActionAuthenticateCognitoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LbListenerDefaultActionAuthenticateCognito | undefined;
    set internalValue(value: LbListenerDefaultActionAuthenticateCognito | undefined);
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
export interface LbListenerDefaultActionAuthenticateOidc {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#authentication_request_extra_params LbListener#authentication_request_extra_params}
    */
    readonly authenticationRequestExtraParams?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#authorization_endpoint LbListener#authorization_endpoint}
    */
    readonly authorizationEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#client_id LbListener#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#client_secret LbListener#client_secret}
    */
    readonly clientSecret: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#issuer LbListener#issuer}
    */
    readonly issuer: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#on_unauthenticated_request LbListener#on_unauthenticated_request}
    */
    readonly onUnauthenticatedRequest?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#scope LbListener#scope}
    */
    readonly scope?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#session_cookie_name LbListener#session_cookie_name}
    */
    readonly sessionCookieName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#session_timeout LbListener#session_timeout}
    */
    readonly sessionTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#token_endpoint LbListener#token_endpoint}
    */
    readonly tokenEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#user_info_endpoint LbListener#user_info_endpoint}
    */
    readonly userInfoEndpoint: string;
}
export declare function lbListenerDefaultActionAuthenticateOidcToTerraform(struct?: LbListenerDefaultActionAuthenticateOidcOutputReference | LbListenerDefaultActionAuthenticateOidc): any;
export declare class LbListenerDefaultActionAuthenticateOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LbListenerDefaultActionAuthenticateOidc | undefined;
    set internalValue(value: LbListenerDefaultActionAuthenticateOidc | undefined);
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
export interface LbListenerDefaultActionFixedResponse {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#content_type LbListener#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#message_body LbListener#message_body}
    */
    readonly messageBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#status_code LbListener#status_code}
    */
    readonly statusCode?: string;
}
export declare function lbListenerDefaultActionFixedResponseToTerraform(struct?: LbListenerDefaultActionFixedResponseOutputReference | LbListenerDefaultActionFixedResponse): any;
export declare class LbListenerDefaultActionFixedResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LbListenerDefaultActionFixedResponse | undefined;
    set internalValue(value: LbListenerDefaultActionFixedResponse | undefined);
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
export interface LbListenerDefaultActionForwardStickiness {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#duration LbListener#duration}
    */
    readonly duration: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#enabled LbListener#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function lbListenerDefaultActionForwardStickinessToTerraform(struct?: LbListenerDefaultActionForwardStickinessOutputReference | LbListenerDefaultActionForwardStickiness): any;
export declare class LbListenerDefaultActionForwardStickinessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LbListenerDefaultActionForwardStickiness | undefined;
    set internalValue(value: LbListenerDefaultActionForwardStickiness | undefined);
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
export interface LbListenerDefaultActionForwardTargetGroup {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#arn LbListener#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#weight LbListener#weight}
    */
    readonly weight?: number;
}
export declare function lbListenerDefaultActionForwardTargetGroupToTerraform(struct?: LbListenerDefaultActionForwardTargetGroup): any;
export interface LbListenerDefaultActionForward {
    /**
    * stickiness block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#stickiness LbListener#stickiness}
    */
    readonly stickiness?: LbListenerDefaultActionForwardStickiness;
    /**
    * target_group block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#target_group LbListener#target_group}
    */
    readonly targetGroup: LbListenerDefaultActionForwardTargetGroup[];
}
export declare function lbListenerDefaultActionForwardToTerraform(struct?: LbListenerDefaultActionForwardOutputReference | LbListenerDefaultActionForward): any;
export declare class LbListenerDefaultActionForwardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LbListenerDefaultActionForward | undefined;
    set internalValue(value: LbListenerDefaultActionForward | undefined);
    private _stickiness;
    get stickiness(): LbListenerDefaultActionForwardStickinessOutputReference;
    putStickiness(value: LbListenerDefaultActionForwardStickiness): void;
    resetStickiness(): void;
    get stickinessInput(): LbListenerDefaultActionForwardStickiness;
    private _targetGroup?;
    get targetGroup(): LbListenerDefaultActionForwardTargetGroup[];
    set targetGroup(value: LbListenerDefaultActionForwardTargetGroup[]);
    get targetGroupInput(): LbListenerDefaultActionForwardTargetGroup[];
}
export interface LbListenerDefaultActionRedirect {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#host LbListener#host}
    */
    readonly host?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#path LbListener#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#port LbListener#port}
    */
    readonly port?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#protocol LbListener#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#query LbListener#query}
    */
    readonly query?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#status_code LbListener#status_code}
    */
    readonly statusCode: string;
}
export declare function lbListenerDefaultActionRedirectToTerraform(struct?: LbListenerDefaultActionRedirectOutputReference | LbListenerDefaultActionRedirect): any;
export declare class LbListenerDefaultActionRedirectOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LbListenerDefaultActionRedirect | undefined;
    set internalValue(value: LbListenerDefaultActionRedirect | undefined);
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
export interface LbListenerDefaultAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#order LbListener#order}
    */
    readonly order?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#target_group_arn LbListener#target_group_arn}
    */
    readonly targetGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#type LbListener#type}
    */
    readonly type: string;
    /**
    * authenticate_cognito block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#authenticate_cognito LbListener#authenticate_cognito}
    */
    readonly authenticateCognito?: LbListenerDefaultActionAuthenticateCognito;
    /**
    * authenticate_oidc block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#authenticate_oidc LbListener#authenticate_oidc}
    */
    readonly authenticateOidc?: LbListenerDefaultActionAuthenticateOidc;
    /**
    * fixed_response block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#fixed_response LbListener#fixed_response}
    */
    readonly fixedResponse?: LbListenerDefaultActionFixedResponse;
    /**
    * forward block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#forward LbListener#forward}
    */
    readonly forward?: LbListenerDefaultActionForward;
    /**
    * redirect block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#redirect LbListener#redirect}
    */
    readonly redirect?: LbListenerDefaultActionRedirect;
}
export declare function lbListenerDefaultActionToTerraform(struct?: LbListenerDefaultAction): any;
export interface LbListenerTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#read LbListener#read}
    */
    readonly read?: string;
}
export declare function lbListenerTimeoutsToTerraform(struct?: LbListenerTimeoutsOutputReference | LbListenerTimeouts): any;
export declare class LbListenerTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LbListenerTimeouts | undefined;
    set internalValue(value: LbListenerTimeouts | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html aws_lb_listener}
*/
export declare class LbListener extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html aws_lb_listener} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LbListenerConfig
    */
    constructor(scope: Construct, id: string, config: LbListenerConfig);
    private _alpnPolicy?;
    get alpnPolicy(): string;
    set alpnPolicy(value: string);
    resetAlpnPolicy(): void;
    get alpnPolicyInput(): string;
    get arn(): string;
    private _certificateArn?;
    get certificateArn(): string;
    set certificateArn(value: string);
    resetCertificateArn(): void;
    get certificateArnInput(): string;
    get id(): string;
    private _loadBalancerArn?;
    get loadBalancerArn(): string;
    set loadBalancerArn(value: string);
    get loadBalancerArnInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    resetProtocol(): void;
    get protocolInput(): string;
    private _sslPolicy?;
    get sslPolicy(): string;
    set sslPolicy(value: string);
    resetSslPolicy(): void;
    get sslPolicyInput(): string;
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
    private _defaultAction?;
    get defaultAction(): LbListenerDefaultAction[];
    set defaultAction(value: LbListenerDefaultAction[]);
    get defaultActionInput(): LbListenerDefaultAction[];
    private _timeouts;
    get timeouts(): LbListenerTimeoutsOutputReference;
    putTimeouts(value: LbListenerTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): LbListenerTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=lb-listener.d.ts.map