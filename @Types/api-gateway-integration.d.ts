import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* API Gateway
*/
export interface ApiGatewayIntegrationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#cache_key_parameters ApiGatewayIntegration#cache_key_parameters}
    */
    readonly cacheKeyParameters?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#cache_namespace ApiGatewayIntegration#cache_namespace}
    */
    readonly cacheNamespace?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#connection_id ApiGatewayIntegration#connection_id}
    */
    readonly connectionId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#connection_type ApiGatewayIntegration#connection_type}
    */
    readonly connectionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#content_handling ApiGatewayIntegration#content_handling}
    */
    readonly contentHandling?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#credentials ApiGatewayIntegration#credentials}
    */
    readonly credentials?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#http_method ApiGatewayIntegration#http_method}
    */
    readonly httpMethod: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#integration_http_method ApiGatewayIntegration#integration_http_method}
    */
    readonly integrationHttpMethod?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#passthrough_behavior ApiGatewayIntegration#passthrough_behavior}
    */
    readonly passthroughBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#request_parameters ApiGatewayIntegration#request_parameters}
    */
    readonly requestParameters?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#request_templates ApiGatewayIntegration#request_templates}
    */
    readonly requestTemplates?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#resource_id ApiGatewayIntegration#resource_id}
    */
    readonly resourceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#rest_api_id ApiGatewayIntegration#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#timeout_milliseconds ApiGatewayIntegration#timeout_milliseconds}
    */
    readonly timeoutMilliseconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#type ApiGatewayIntegration#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#uri ApiGatewayIntegration#uri}
    */
    readonly uri?: string;
    /**
    * tls_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#tls_config ApiGatewayIntegration#tls_config}
    */
    readonly tlsConfig?: ApiGatewayIntegrationTlsConfig;
}
export interface ApiGatewayIntegrationTlsConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#insecure_skip_verification ApiGatewayIntegration#insecure_skip_verification}
    */
    readonly insecureSkipVerification?: boolean | cdktf.IResolvable;
}
export declare function apiGatewayIntegrationTlsConfigToTerraform(struct?: ApiGatewayIntegrationTlsConfigOutputReference | ApiGatewayIntegrationTlsConfig): any;
export declare class ApiGatewayIntegrationTlsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ApiGatewayIntegrationTlsConfig | undefined;
    set internalValue(value: ApiGatewayIntegrationTlsConfig | undefined);
    private _insecureSkipVerification?;
    get insecureSkipVerification(): boolean | cdktf.IResolvable;
    set insecureSkipVerification(value: boolean | cdktf.IResolvable);
    resetInsecureSkipVerification(): void;
    get insecureSkipVerificationInput(): boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html aws_api_gateway_integration}
*/
export declare class ApiGatewayIntegration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html aws_api_gateway_integration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayIntegrationConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayIntegrationConfig);
    private _cacheKeyParameters?;
    get cacheKeyParameters(): string[];
    set cacheKeyParameters(value: string[]);
    resetCacheKeyParameters(): void;
    get cacheKeyParametersInput(): string[];
    private _cacheNamespace?;
    get cacheNamespace(): string;
    set cacheNamespace(value: string);
    resetCacheNamespace(): void;
    get cacheNamespaceInput(): string;
    private _connectionId?;
    get connectionId(): string;
    set connectionId(value: string);
    resetConnectionId(): void;
    get connectionIdInput(): string;
    private _connectionType?;
    get connectionType(): string;
    set connectionType(value: string);
    resetConnectionType(): void;
    get connectionTypeInput(): string;
    private _contentHandling?;
    get contentHandling(): string;
    set contentHandling(value: string);
    resetContentHandling(): void;
    get contentHandlingInput(): string;
    private _credentials?;
    get credentials(): string;
    set credentials(value: string);
    resetCredentials(): void;
    get credentialsInput(): string;
    private _httpMethod?;
    get httpMethod(): string;
    set httpMethod(value: string);
    get httpMethodInput(): string;
    get id(): string;
    private _integrationHttpMethod?;
    get integrationHttpMethod(): string;
    set integrationHttpMethod(value: string);
    resetIntegrationHttpMethod(): void;
    get integrationHttpMethodInput(): string;
    private _passthroughBehavior?;
    get passthroughBehavior(): string;
    set passthroughBehavior(value: string);
    resetPassthroughBehavior(): void;
    get passthroughBehaviorInput(): string;
    private _requestParameters?;
    get requestParameters(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set requestParameters(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetRequestParameters(): void;
    get requestParametersInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _requestTemplates?;
    get requestTemplates(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set requestTemplates(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetRequestTemplates(): void;
    get requestTemplatesInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _resourceId?;
    get resourceId(): string;
    set resourceId(value: string);
    get resourceIdInput(): string;
    private _restApiId?;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string;
    private _timeoutMilliseconds?;
    get timeoutMilliseconds(): number;
    set timeoutMilliseconds(value: number);
    resetTimeoutMilliseconds(): void;
    get timeoutMillisecondsInput(): number;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _uri?;
    get uri(): string;
    set uri(value: string);
    resetUri(): void;
    get uriInput(): string;
    private _tlsConfig;
    get tlsConfig(): ApiGatewayIntegrationTlsConfigOutputReference;
    putTlsConfig(value: ApiGatewayIntegrationTlsConfig): void;
    resetTlsConfig(): void;
    get tlsConfigInput(): ApiGatewayIntegrationTlsConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=api-gateway-integration.d.ts.map