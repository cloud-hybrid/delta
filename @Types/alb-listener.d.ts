import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic Load Balancer
*/
export interface AlbListenerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#alpn_policy AlbListener#alpn_policy}
    */
    readonly alpnPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#certificate_arn AlbListener#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#load_balancer_arn AlbListener#load_balancer_arn}
    */
    readonly loadBalancerArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#port AlbListener#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#protocol AlbListener#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#ssl_policy AlbListener#ssl_policy}
    */
    readonly sslPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#tags AlbListener#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#tags_all AlbListener#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * default_action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#default_action AlbListener#default_action}
    */
    readonly defaultAction: AlbListenerDefaultAction[];
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#timeouts AlbListener#timeouts}
    */
    readonly timeouts?: AlbListenerTimeouts;
}
export interface AlbListenerDefaultActionAuthenticateCognito {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#authentication_request_extra_params AlbListener#authentication_request_extra_params}
    */
    readonly authenticationRequestExtraParams?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#on_unauthenticated_request AlbListener#on_unauthenticated_request}
    */
    readonly onUnauthenticatedRequest?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#scope AlbListener#scope}
    */
    readonly scope?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#session_cookie_name AlbListener#session_cookie_name}
    */
    readonly sessionCookieName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#session_timeout AlbListener#session_timeout}
    */
    readonly sessionTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#user_pool_arn AlbListener#user_pool_arn}
    */
    readonly userPoolArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#user_pool_client_id AlbListener#user_pool_client_id}
    */
    readonly userPoolClientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#user_pool_domain AlbListener#user_pool_domain}
    */
    readonly userPoolDomain: string;
}
export declare function albListenerDefaultActionAuthenticateCognitoToTerraform(struct?: AlbListenerDefaultActionAuthenticateCognitoOutputReference | AlbListenerDefaultActionAuthenticateCognito): any;
export declare class AlbListenerDefaultActionAuthenticateCognitoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AlbListenerDefaultActionAuthenticateCognito | undefined;
    set internalValue(value: AlbListenerDefaultActionAuthenticateCognito | undefined);
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
export interface AlbListenerDefaultActionAuthenticateOidc {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#authentication_request_extra_params AlbListener#authentication_request_extra_params}
    */
    readonly authenticationRequestExtraParams?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#authorization_endpoint AlbListener#authorization_endpoint}
    */
    readonly authorizationEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#client_id AlbListener#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#client_secret AlbListener#client_secret}
    */
    readonly clientSecret: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#issuer AlbListener#issuer}
    */
    readonly issuer: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#on_unauthenticated_request AlbListener#on_unauthenticated_request}
    */
    readonly onUnauthenticatedRequest?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#scope AlbListener#scope}
    */
    readonly scope?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#session_cookie_name AlbListener#session_cookie_name}
    */
    readonly sessionCookieName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#session_timeout AlbListener#session_timeout}
    */
    readonly sessionTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#token_endpoint AlbListener#token_endpoint}
    */
    readonly tokenEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#user_info_endpoint AlbListener#user_info_endpoint}
    */
    readonly userInfoEndpoint: string;
}
export declare function albListenerDefaultActionAuthenticateOidcToTerraform(struct?: AlbListenerDefaultActionAuthenticateOidcOutputReference | AlbListenerDefaultActionAuthenticateOidc): any;
export declare class AlbListenerDefaultActionAuthenticateOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AlbListenerDefaultActionAuthenticateOidc | undefined;
    set internalValue(value: AlbListenerDefaultActionAuthenticateOidc | undefined);
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
export interface AlbListenerDefaultActionFixedResponse {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#content_type AlbListener#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#message_body AlbListener#message_body}
    */
    readonly messageBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#status_code AlbListener#status_code}
    */
    readonly statusCode?: string;
}
export declare function albListenerDefaultActionFixedResponseToTerraform(struct?: AlbListenerDefaultActionFixedResponseOutputReference | AlbListenerDefaultActionFixedResponse): any;
export declare class AlbListenerDefaultActionFixedResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AlbListenerDefaultActionFixedResponse | undefined;
    set internalValue(value: AlbListenerDefaultActionFixedResponse | undefined);
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
export interface AlbListenerDefaultActionForwardStickiness {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#duration AlbListener#duration}
    */
    readonly duration: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#enabled AlbListener#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function albListenerDefaultActionForwardStickinessToTerraform(struct?: AlbListenerDefaultActionForwardStickinessOutputReference | AlbListenerDefaultActionForwardStickiness): any;
export declare class AlbListenerDefaultActionForwardStickinessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AlbListenerDefaultActionForwardStickiness | undefined;
    set internalValue(value: AlbListenerDefaultActionForwardStickiness | undefined);
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
export interface AlbListenerDefaultActionForwardTargetGroup {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#arn AlbListener#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#weight AlbListener#weight}
    */
    readonly weight?: number;
}
export declare function albListenerDefaultActionForwardTargetGroupToTerraform(struct?: AlbListenerDefaultActionForwardTargetGroup): any;
export interface AlbListenerDefaultActionForward {
    /**
    * stickiness block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#stickiness AlbListener#stickiness}
    */
    readonly stickiness?: AlbListenerDefaultActionForwardStickiness;
    /**
    * target_group block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#target_group AlbListener#target_group}
    */
    readonly targetGroup: AlbListenerDefaultActionForwardTargetGroup[];
}
export declare function albListenerDefaultActionForwardToTerraform(struct?: AlbListenerDefaultActionForwardOutputReference | AlbListenerDefaultActionForward): any;
export declare class AlbListenerDefaultActionForwardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AlbListenerDefaultActionForward | undefined;
    set internalValue(value: AlbListenerDefaultActionForward | undefined);
    private _stickiness;
    get stickiness(): AlbListenerDefaultActionForwardStickinessOutputReference;
    putStickiness(value: AlbListenerDefaultActionForwardStickiness): void;
    resetStickiness(): void;
    get stickinessInput(): AlbListenerDefaultActionForwardStickiness;
    private _targetGroup?;
    get targetGroup(): AlbListenerDefaultActionForwardTargetGroup[];
    set targetGroup(value: AlbListenerDefaultActionForwardTargetGroup[]);
    get targetGroupInput(): AlbListenerDefaultActionForwardTargetGroup[];
}
export interface AlbListenerDefaultActionRedirect {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#host AlbListener#host}
    */
    readonly host?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#path AlbListener#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#port AlbListener#port}
    */
    readonly port?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#protocol AlbListener#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#query AlbListener#query}
    */
    readonly query?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#status_code AlbListener#status_code}
    */
    readonly statusCode: string;
}
export declare function albListenerDefaultActionRedirectToTerraform(struct?: AlbListenerDefaultActionRedirectOutputReference | AlbListenerDefaultActionRedirect): any;
export declare class AlbListenerDefaultActionRedirectOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AlbListenerDefaultActionRedirect | undefined;
    set internalValue(value: AlbListenerDefaultActionRedirect | undefined);
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
export interface AlbListenerDefaultAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#order AlbListener#order}
    */
    readonly order?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#target_group_arn AlbListener#target_group_arn}
    */
    readonly targetGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#type AlbListener#type}
    */
    readonly type: string;
    /**
    * authenticate_cognito block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#authenticate_cognito AlbListener#authenticate_cognito}
    */
    readonly authenticateCognito?: AlbListenerDefaultActionAuthenticateCognito;
    /**
    * authenticate_oidc block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#authenticate_oidc AlbListener#authenticate_oidc}
    */
    readonly authenticateOidc?: AlbListenerDefaultActionAuthenticateOidc;
    /**
    * fixed_response block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#fixed_response AlbListener#fixed_response}
    */
    readonly fixedResponse?: AlbListenerDefaultActionFixedResponse;
    /**
    * forward block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#forward AlbListener#forward}
    */
    readonly forward?: AlbListenerDefaultActionForward;
    /**
    * redirect block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#redirect AlbListener#redirect}
    */
    readonly redirect?: AlbListenerDefaultActionRedirect;
}
export declare function albListenerDefaultActionToTerraform(struct?: AlbListenerDefaultAction): any;
export interface AlbListenerTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#read AlbListener#read}
    */
    readonly read?: string;
}
export declare function albListenerTimeoutsToTerraform(struct?: AlbListenerTimeoutsOutputReference | AlbListenerTimeouts): any;
export declare class AlbListenerTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AlbListenerTimeouts | undefined;
    set internalValue(value: AlbListenerTimeouts | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html aws_alb_listener}
*/
export declare class AlbListener extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html aws_alb_listener} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AlbListenerConfig
    */
    constructor(scope: Construct, id: string, config: AlbListenerConfig);
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
    get defaultAction(): AlbListenerDefaultAction[];
    set defaultAction(value: AlbListenerDefaultAction[]);
    get defaultActionInput(): AlbListenerDefaultAction[];
    private _timeouts;
    get timeouts(): AlbListenerTimeoutsOutputReference;
    putTimeouts(value: AlbListenerTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): AlbListenerTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=alb-listener.d.ts.map