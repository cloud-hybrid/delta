import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* API Gateway
*/
export interface ApiGatewayRequestValidatorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html#name ApiGatewayRequestValidator#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html#rest_api_id ApiGatewayRequestValidator#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html#validate_request_body ApiGatewayRequestValidator#validate_request_body}
    */
    readonly validateRequestBody?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html#validate_request_parameters ApiGatewayRequestValidator#validate_request_parameters}
    */
    readonly validateRequestParameters?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html aws_api_gateway_request_validator}
*/
export declare class ApiGatewayRequestValidator extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html aws_api_gateway_request_validator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayRequestValidatorConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayRequestValidatorConfig);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _restApiId?;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string;
    private _validateRequestBody?;
    get validateRequestBody(): boolean | cdktf.IResolvable;
    set validateRequestBody(value: boolean | cdktf.IResolvable);
    resetValidateRequestBody(): void;
    get validateRequestBodyInput(): boolean | cdktf.IResolvable;
    private _validateRequestParameters?;
    get validateRequestParameters(): boolean | cdktf.IResolvable;
    set validateRequestParameters(value: boolean | cdktf.IResolvable);
    resetValidateRequestParameters(): void;
    get validateRequestParametersInput(): boolean | cdktf.IResolvable;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=api-gateway-request-validator.d.ts.map