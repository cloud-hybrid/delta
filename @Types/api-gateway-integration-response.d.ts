import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* API Gateway
*/
export interface ApiGatewayIntegrationResponseConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response.html#content_handling ApiGatewayIntegrationResponse#content_handling}
    */
    readonly contentHandling?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response.html#http_method ApiGatewayIntegrationResponse#http_method}
    */
    readonly httpMethod: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response.html#resource_id ApiGatewayIntegrationResponse#resource_id}
    */
    readonly resourceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response.html#response_parameters ApiGatewayIntegrationResponse#response_parameters}
    */
    readonly responseParameters?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response.html#response_templates ApiGatewayIntegrationResponse#response_templates}
    */
    readonly responseTemplates?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response.html#rest_api_id ApiGatewayIntegrationResponse#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response.html#selection_pattern ApiGatewayIntegrationResponse#selection_pattern}
    */
    readonly selectionPattern?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response.html#status_code ApiGatewayIntegrationResponse#status_code}
    */
    readonly statusCode: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response.html aws_api_gateway_integration_response}
*/
export declare class ApiGatewayIntegrationResponse extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response.html aws_api_gateway_integration_response} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayIntegrationResponseConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayIntegrationResponseConfig);
    private _contentHandling?;
    get contentHandling(): string;
    set contentHandling(value: string);
    resetContentHandling(): void;
    get contentHandlingInput(): string;
    private _httpMethod?;
    get httpMethod(): string;
    set httpMethod(value: string);
    get httpMethodInput(): string;
    get id(): string;
    private _resourceId?;
    get resourceId(): string;
    set resourceId(value: string);
    get resourceIdInput(): string;
    private _responseParameters?;
    get responseParameters(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set responseParameters(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetResponseParameters(): void;
    get responseParametersInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _responseTemplates?;
    get responseTemplates(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set responseTemplates(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetResponseTemplates(): void;
    get responseTemplatesInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _restApiId?;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string;
    private _selectionPattern?;
    get selectionPattern(): string;
    set selectionPattern(value: string);
    resetSelectionPattern(): void;
    get selectionPatternInput(): string;
    private _statusCode?;
    get statusCode(): string;
    set statusCode(value: string);
    get statusCodeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=api-gateway-integration-response.d.ts.map