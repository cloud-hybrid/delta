import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudWatch Event Bridge
*/
export interface CloudwatchEventConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#authorization_type CloudwatchEventConnection#authorization_type}
    */
    readonly authorizationType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#description CloudwatchEventConnection#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#name CloudwatchEventConnection#name}
    */
    readonly name: string;
    /**
    * auth_parameters block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#auth_parameters CloudwatchEventConnection#auth_parameters}
    */
    readonly authParameters: CloudwatchEventConnectionAuthParameters;
}
export interface CloudwatchEventConnectionAuthParametersApiKey {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#key CloudwatchEventConnection#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#value CloudwatchEventConnection#value}
    */
    readonly value: string;
}
export declare function cloudwatchEventConnectionAuthParametersApiKeyToTerraform(struct?: CloudwatchEventConnectionAuthParametersApiKeyOutputReference | CloudwatchEventConnectionAuthParametersApiKey): any;
export declare class CloudwatchEventConnectionAuthParametersApiKeyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudwatchEventConnectionAuthParametersApiKey | undefined;
    set internalValue(value: CloudwatchEventConnectionAuthParametersApiKey | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
}
export interface CloudwatchEventConnectionAuthParametersBasic {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#password CloudwatchEventConnection#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#username CloudwatchEventConnection#username}
    */
    readonly username: string;
}
export declare function cloudwatchEventConnectionAuthParametersBasicToTerraform(struct?: CloudwatchEventConnectionAuthParametersBasicOutputReference | CloudwatchEventConnectionAuthParametersBasic): any;
export declare class CloudwatchEventConnectionAuthParametersBasicOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudwatchEventConnectionAuthParametersBasic | undefined;
    set internalValue(value: CloudwatchEventConnectionAuthParametersBasic | undefined);
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string;
}
export interface CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#is_value_secret CloudwatchEventConnection#is_value_secret}
    */
    readonly isValueSecret?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#key CloudwatchEventConnection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#value CloudwatchEventConnection#value}
    */
    readonly value?: string;
}
export declare function cloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyToTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody): any;
export interface CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#is_value_secret CloudwatchEventConnection#is_value_secret}
    */
    readonly isValueSecret?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#key CloudwatchEventConnection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#value CloudwatchEventConnection#value}
    */
    readonly value?: string;
}
export declare function cloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderToTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader): any;
export interface CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#is_value_secret CloudwatchEventConnection#is_value_secret}
    */
    readonly isValueSecret?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#key CloudwatchEventConnection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#value CloudwatchEventConnection#value}
    */
    readonly value?: string;
}
export declare function cloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringToTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString): any;
export interface CloudwatchEventConnectionAuthParametersInvocationHttpParameters {
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#body CloudwatchEventConnection#body}
    */
    readonly body?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody[];
    /**
    * header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#header CloudwatchEventConnection#header}
    */
    readonly header?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader[];
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#query_string CloudwatchEventConnection#query_string}
    */
    readonly queryString?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString[];
}
export declare function cloudwatchEventConnectionAuthParametersInvocationHttpParametersToTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference | CloudwatchEventConnectionAuthParametersInvocationHttpParameters): any;
export declare class CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudwatchEventConnectionAuthParametersInvocationHttpParameters | undefined;
    set internalValue(value: CloudwatchEventConnectionAuthParametersInvocationHttpParameters | undefined);
    private _body?;
    get body(): CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody[];
    set body(value: CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody[]);
    resetBody(): void;
    get bodyInput(): CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody[];
    private _header?;
    get header(): CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader[];
    set header(value: CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader[]);
    resetHeader(): void;
    get headerInput(): CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader[];
    private _queryString?;
    get queryString(): CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString[];
    set queryString(value: CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString[]);
    resetQueryString(): void;
    get queryStringInput(): CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString[];
}
export interface CloudwatchEventConnectionAuthParametersOauthClientParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#client_id CloudwatchEventConnection#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#client_secret CloudwatchEventConnection#client_secret}
    */
    readonly clientSecret: string;
}
export declare function cloudwatchEventConnectionAuthParametersOauthClientParametersToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference | CloudwatchEventConnectionAuthParametersOauthClientParameters): any;
export declare class CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudwatchEventConnectionAuthParametersOauthClientParameters | undefined;
    set internalValue(value: CloudwatchEventConnectionAuthParametersOauthClientParameters | undefined);
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    get clientIdInput(): string;
    private _clientSecret?;
    get clientSecret(): string;
    set clientSecret(value: string);
    get clientSecretInput(): string;
}
export interface CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#is_value_secret CloudwatchEventConnection#is_value_secret}
    */
    readonly isValueSecret?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#key CloudwatchEventConnection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#value CloudwatchEventConnection#value}
    */
    readonly value?: string;
}
export declare function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody): any;
export interface CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#is_value_secret CloudwatchEventConnection#is_value_secret}
    */
    readonly isValueSecret?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#key CloudwatchEventConnection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#value CloudwatchEventConnection#value}
    */
    readonly value?: string;
}
export declare function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader): any;
export interface CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#is_value_secret CloudwatchEventConnection#is_value_secret}
    */
    readonly isValueSecret?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#key CloudwatchEventConnection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#value CloudwatchEventConnection#value}
    */
    readonly value?: string;
}
export declare function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString): any;
export interface CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters {
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#body CloudwatchEventConnection#body}
    */
    readonly body?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody[];
    /**
    * header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#header CloudwatchEventConnection#header}
    */
    readonly header?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader[];
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#query_string CloudwatchEventConnection#query_string}
    */
    readonly queryString?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString[];
}
export declare function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference | CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters): any;
export declare class CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters | undefined;
    set internalValue(value: CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters | undefined);
    private _body?;
    get body(): CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody[];
    set body(value: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody[]);
    resetBody(): void;
    get bodyInput(): CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody[];
    private _header?;
    get header(): CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader[];
    set header(value: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader[]);
    resetHeader(): void;
    get headerInput(): CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader[];
    private _queryString?;
    get queryString(): CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString[];
    set queryString(value: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString[]);
    resetQueryString(): void;
    get queryStringInput(): CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString[];
}
export interface CloudwatchEventConnectionAuthParametersOauth {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#authorization_endpoint CloudwatchEventConnection#authorization_endpoint}
    */
    readonly authorizationEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#http_method CloudwatchEventConnection#http_method}
    */
    readonly httpMethod: string;
    /**
    * client_parameters block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#client_parameters CloudwatchEventConnection#client_parameters}
    */
    readonly clientParameters?: CloudwatchEventConnectionAuthParametersOauthClientParameters;
    /**
    * oauth_http_parameters block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#oauth_http_parameters CloudwatchEventConnection#oauth_http_parameters}
    */
    readonly oauthHttpParameters: CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters;
}
export declare function cloudwatchEventConnectionAuthParametersOauthToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOutputReference | CloudwatchEventConnectionAuthParametersOauth): any;
export declare class CloudwatchEventConnectionAuthParametersOauthOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudwatchEventConnectionAuthParametersOauth | undefined;
    set internalValue(value: CloudwatchEventConnectionAuthParametersOauth | undefined);
    private _authorizationEndpoint?;
    get authorizationEndpoint(): string;
    set authorizationEndpoint(value: string);
    get authorizationEndpointInput(): string;
    private _httpMethod?;
    get httpMethod(): string;
    set httpMethod(value: string);
    get httpMethodInput(): string;
    private _clientParameters;
    get clientParameters(): CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference;
    putClientParameters(value: CloudwatchEventConnectionAuthParametersOauthClientParameters): void;
    resetClientParameters(): void;
    get clientParametersInput(): CloudwatchEventConnectionAuthParametersOauthClientParameters;
    private _oauthHttpParameters;
    get oauthHttpParameters(): CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference;
    putOauthHttpParameters(value: CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters): void;
    get oauthHttpParametersInput(): CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters;
}
export interface CloudwatchEventConnectionAuthParameters {
    /**
    * api_key block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#api_key CloudwatchEventConnection#api_key}
    */
    readonly apiKey?: CloudwatchEventConnectionAuthParametersApiKey;
    /**
    * basic block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#basic CloudwatchEventConnection#basic}
    */
    readonly basic?: CloudwatchEventConnectionAuthParametersBasic;
    /**
    * invocation_http_parameters block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#invocation_http_parameters CloudwatchEventConnection#invocation_http_parameters}
    */
    readonly invocationHttpParameters?: CloudwatchEventConnectionAuthParametersInvocationHttpParameters;
    /**
    * oauth block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#oauth CloudwatchEventConnection#oauth}
    */
    readonly oauth?: CloudwatchEventConnectionAuthParametersOauth;
}
export declare function cloudwatchEventConnectionAuthParametersToTerraform(struct?: CloudwatchEventConnectionAuthParametersOutputReference | CloudwatchEventConnectionAuthParameters): any;
export declare class CloudwatchEventConnectionAuthParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudwatchEventConnectionAuthParameters | undefined;
    set internalValue(value: CloudwatchEventConnectionAuthParameters | undefined);
    private _apiKey;
    get apiKey(): CloudwatchEventConnectionAuthParametersApiKeyOutputReference;
    putApiKey(value: CloudwatchEventConnectionAuthParametersApiKey): void;
    resetApiKey(): void;
    get apiKeyInput(): CloudwatchEventConnectionAuthParametersApiKey;
    private _basic;
    get basic(): CloudwatchEventConnectionAuthParametersBasicOutputReference;
    putBasic(value: CloudwatchEventConnectionAuthParametersBasic): void;
    resetBasic(): void;
    get basicInput(): CloudwatchEventConnectionAuthParametersBasic;
    private _invocationHttpParameters;
    get invocationHttpParameters(): CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference;
    putInvocationHttpParameters(value: CloudwatchEventConnectionAuthParametersInvocationHttpParameters): void;
    resetInvocationHttpParameters(): void;
    get invocationHttpParametersInput(): CloudwatchEventConnectionAuthParametersInvocationHttpParameters;
    private _oauth;
    get oauth(): CloudwatchEventConnectionAuthParametersOauthOutputReference;
    putOauth(value: CloudwatchEventConnectionAuthParametersOauth): void;
    resetOauth(): void;
    get oauthInput(): CloudwatchEventConnectionAuthParametersOauth;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html aws_cloudwatch_event_connection}
*/
export declare class CloudwatchEventConnection extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html aws_cloudwatch_event_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventConnectionConfig
    */
    constructor(scope: Construct, id: string, config: CloudwatchEventConnectionConfig);
    get arn(): string;
    private _authorizationType?;
    get authorizationType(): string;
    set authorizationType(value: string);
    get authorizationTypeInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get secretArn(): string;
    private _authParameters;
    get authParameters(): CloudwatchEventConnectionAuthParametersOutputReference;
    putAuthParameters(value: CloudwatchEventConnectionAuthParameters): void;
    get authParametersInput(): CloudwatchEventConnectionAuthParameters;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cloudwatch-event-connection.d.ts.map