import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* Amazon API Gateway Websocket and HTTP APIs
*/
export interface Apigatewayv2ApiConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#api_key_selection_expression Apigatewayv2Api#api_key_selection_expression}
    */
    readonly apiKeySelectionExpression?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#body Apigatewayv2Api#body}
    */
    readonly body?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#credentials_arn Apigatewayv2Api#credentials_arn}
    */
    readonly credentialsArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#description Apigatewayv2Api#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#disable_execute_api_endpoint Apigatewayv2Api#disable_execute_api_endpoint}
    */
    readonly disableExecuteApiEndpoint?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#fail_on_warnings Apigatewayv2Api#fail_on_warnings}
    */
    readonly failOnWarnings?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#name Apigatewayv2Api#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#protocol_type Apigatewayv2Api#protocol_type}
    */
    readonly protocolType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#route_key Apigatewayv2Api#route_key}
    */
    readonly routeKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#route_selection_expression Apigatewayv2Api#route_selection_expression}
    */
    readonly routeSelectionExpression?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#tags Apigatewayv2Api#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#tags_all Apigatewayv2Api#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#target Apigatewayv2Api#target}
    */
    readonly target?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#version Apigatewayv2Api#version}
    */
    readonly version?: string;
    /**
    * cors_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#cors_configuration Apigatewayv2Api#cors_configuration}
    */
    readonly corsConfiguration?: Apigatewayv2ApiCorsConfiguration;
}
export interface Apigatewayv2ApiCorsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#allow_credentials Apigatewayv2Api#allow_credentials}
    */
    readonly allowCredentials?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#allow_headers Apigatewayv2Api#allow_headers}
    */
    readonly allowHeaders?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#allow_methods Apigatewayv2Api#allow_methods}
    */
    readonly allowMethods?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#allow_origins Apigatewayv2Api#allow_origins}
    */
    readonly allowOrigins?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#expose_headers Apigatewayv2Api#expose_headers}
    */
    readonly exposeHeaders?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#max_age Apigatewayv2Api#max_age}
    */
    readonly maxAge?: number;
}
export declare function apigatewayv2ApiCorsConfigurationToTerraform(struct?: Apigatewayv2ApiCorsConfigurationOutputReference | Apigatewayv2ApiCorsConfiguration): any;
export declare class Apigatewayv2ApiCorsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Apigatewayv2ApiCorsConfiguration | undefined;
    set internalValue(value: Apigatewayv2ApiCorsConfiguration | undefined);
    private _allowCredentials?;
    get allowCredentials(): boolean | cdktf.IResolvable;
    set allowCredentials(value: boolean | cdktf.IResolvable);
    resetAllowCredentials(): void;
    get allowCredentialsInput(): boolean | cdktf.IResolvable;
    private _allowHeaders?;
    get allowHeaders(): string[];
    set allowHeaders(value: string[]);
    resetAllowHeaders(): void;
    get allowHeadersInput(): string[];
    private _allowMethods?;
    get allowMethods(): string[];
    set allowMethods(value: string[]);
    resetAllowMethods(): void;
    get allowMethodsInput(): string[];
    private _allowOrigins?;
    get allowOrigins(): string[];
    set allowOrigins(value: string[]);
    resetAllowOrigins(): void;
    get allowOriginsInput(): string[];
    private _exposeHeaders?;
    get exposeHeaders(): string[];
    set exposeHeaders(value: string[]);
    resetExposeHeaders(): void;
    get exposeHeadersInput(): string[];
    private _maxAge?;
    get maxAge(): number;
    set maxAge(value: number);
    resetMaxAge(): void;
    get maxAgeInput(): number;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html aws_apigatewayv2_api}
*/
export declare class Apigatewayv2Api extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html aws_apigatewayv2_api} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2ApiConfig
    */
    constructor(scope: Construct, id: string, config: Apigatewayv2ApiConfig);
    get apiEndpoint(): string;
    private _apiKeySelectionExpression?;
    get apiKeySelectionExpression(): string;
    set apiKeySelectionExpression(value: string);
    resetApiKeySelectionExpression(): void;
    get apiKeySelectionExpressionInput(): string;
    get arn(): string;
    private _body?;
    get body(): string;
    set body(value: string);
    resetBody(): void;
    get bodyInput(): string;
    private _credentialsArn?;
    get credentialsArn(): string;
    set credentialsArn(value: string);
    resetCredentialsArn(): void;
    get credentialsArnInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _disableExecuteApiEndpoint?;
    get disableExecuteApiEndpoint(): boolean | cdktf.IResolvable;
    set disableExecuteApiEndpoint(value: boolean | cdktf.IResolvable);
    resetDisableExecuteApiEndpoint(): void;
    get disableExecuteApiEndpointInput(): boolean | cdktf.IResolvable;
    get executionArn(): string;
    private _failOnWarnings?;
    get failOnWarnings(): boolean | cdktf.IResolvable;
    set failOnWarnings(value: boolean | cdktf.IResolvable);
    resetFailOnWarnings(): void;
    get failOnWarningsInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _protocolType?;
    get protocolType(): string;
    set protocolType(value: string);
    get protocolTypeInput(): string;
    private _routeKey?;
    get routeKey(): string;
    set routeKey(value: string);
    resetRouteKey(): void;
    get routeKeyInput(): string;
    private _routeSelectionExpression?;
    get routeSelectionExpression(): string;
    set routeSelectionExpression(value: string);
    resetRouteSelectionExpression(): void;
    get routeSelectionExpressionInput(): string;
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
    private _target?;
    get target(): string;
    set target(value: string);
    resetTarget(): void;
    get targetInput(): string;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string;
    private _corsConfiguration;
    get corsConfiguration(): Apigatewayv2ApiCorsConfigurationOutputReference;
    putCorsConfiguration(value: Apigatewayv2ApiCorsConfiguration): void;
    resetCorsConfiguration(): void;
    get corsConfigurationInput(): Apigatewayv2ApiCorsConfiguration;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=apigatewayv2-api.d.ts.map