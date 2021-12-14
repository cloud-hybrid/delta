import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* Amazon API Gateway Websocket and HTTP APIs
*/
export interface Apigatewayv2IntegrationResponseConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response.html#api_id Apigatewayv2IntegrationResponse#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response.html#content_handling_strategy Apigatewayv2IntegrationResponse#content_handling_strategy}
    */
    readonly contentHandlingStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response.html#integration_id Apigatewayv2IntegrationResponse#integration_id}
    */
    readonly integrationId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response.html#integration_response_key Apigatewayv2IntegrationResponse#integration_response_key}
    */
    readonly integrationResponseKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response.html#response_templates Apigatewayv2IntegrationResponse#response_templates}
    */
    readonly responseTemplates?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response.html#template_selection_expression Apigatewayv2IntegrationResponse#template_selection_expression}
    */
    readonly templateSelectionExpression?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response.html aws_apigatewayv2_integration_response}
*/
export declare class Apigatewayv2IntegrationResponse extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response.html aws_apigatewayv2_integration_response} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2IntegrationResponseConfig
    */
    constructor(scope: Construct, id: string, config: Apigatewayv2IntegrationResponseConfig);
    private _apiId?;
    get apiId(): string;
    set apiId(value: string);
    get apiIdInput(): string;
    private _contentHandlingStrategy?;
    get contentHandlingStrategy(): string;
    set contentHandlingStrategy(value: string);
    resetContentHandlingStrategy(): void;
    get contentHandlingStrategyInput(): string;
    get id(): string;
    private _integrationId?;
    get integrationId(): string;
    set integrationId(value: string);
    get integrationIdInput(): string;
    private _integrationResponseKey?;
    get integrationResponseKey(): string;
    set integrationResponseKey(value: string);
    get integrationResponseKeyInput(): string;
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
    private _templateSelectionExpression?;
    get templateSelectionExpression(): string;
    set templateSelectionExpression(value: string);
    resetTemplateSelectionExpression(): void;
    get templateSelectionExpressionInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=apigatewayv2-integration-response.d.ts.map