import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* API Gateway
*/
export interface ApiGatewayRestApiPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api_policy.html#policy ApiGatewayRestApiPolicy#policy}
    */
    readonly policy: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api_policy.html#rest_api_id ApiGatewayRestApiPolicy#rest_api_id}
    */
    readonly restApiId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api_policy.html aws_api_gateway_rest_api_policy}
*/
export declare class ApiGatewayRestApiPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api_policy.html aws_api_gateway_rest_api_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayRestApiPolicyConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayRestApiPolicyConfig);
    get id(): string;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string;
    private _restApiId?;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=api-gateway-rest-api-policy.d.ts.map