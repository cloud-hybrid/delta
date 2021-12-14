import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* Amazon API Gateway Websocket and HTTP APIs
*/
export interface Apigatewayv2DeploymentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_deployment.html#api_id Apigatewayv2Deployment#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_deployment.html#description Apigatewayv2Deployment#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_deployment.html#triggers Apigatewayv2Deployment#triggers}
    */
    readonly triggers?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_deployment.html aws_apigatewayv2_deployment}
*/
export declare class Apigatewayv2Deployment extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_deployment.html aws_apigatewayv2_deployment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2DeploymentConfig
    */
    constructor(scope: Construct, id: string, config: Apigatewayv2DeploymentConfig);
    private _apiId?;
    get apiId(): string;
    set apiId(value: string);
    get apiIdInput(): string;
    get autoDeployed(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _triggers?;
    get triggers(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set triggers(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTriggers(): void;
    get triggersInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=apigatewayv2-deployment.d.ts.map