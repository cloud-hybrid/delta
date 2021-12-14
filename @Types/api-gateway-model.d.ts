import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* API Gateway
*/
export interface ApiGatewayModelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_model.html#content_type ApiGatewayModel#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_model.html#description ApiGatewayModel#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_model.html#name ApiGatewayModel#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_model.html#rest_api_id ApiGatewayModel#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_model.html#schema ApiGatewayModel#schema}
    */
    readonly schema?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_model.html aws_api_gateway_model}
*/
export declare class ApiGatewayModel extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_model.html aws_api_gateway_model} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayModelConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayModelConfig);
    private _contentType?;
    get contentType(): string;
    set contentType(value: string);
    get contentTypeInput(): string;
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
    private _restApiId?;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string;
    private _schema?;
    get schema(): string;
    set schema(value: string);
    resetSchema(): void;
    get schemaInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=api-gateway-model.d.ts.map