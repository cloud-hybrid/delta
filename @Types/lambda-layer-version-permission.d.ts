import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Lambda
*/
export interface LambdaLayerVersionPermissionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version_permission.html#action LambdaLayerVersionPermission#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version_permission.html#layer_name LambdaLayerVersionPermission#layer_name}
    */
    readonly layerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version_permission.html#organization_id LambdaLayerVersionPermission#organization_id}
    */
    readonly organizationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version_permission.html#principal LambdaLayerVersionPermission#principal}
    */
    readonly principal: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version_permission.html#statement_id LambdaLayerVersionPermission#statement_id}
    */
    readonly statementId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version_permission.html#version_number LambdaLayerVersionPermission#version_number}
    */
    readonly versionNumber: number;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version_permission.html aws_lambda_layer_version_permission}
*/
export declare class LambdaLayerVersionPermission extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version_permission.html aws_lambda_layer_version_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaLayerVersionPermissionConfig
    */
    constructor(scope: Construct, id: string, config: LambdaLayerVersionPermissionConfig);
    private _action?;
    get action(): string;
    set action(value: string);
    get actionInput(): string;
    get id(): string;
    private _layerName?;
    get layerName(): string;
    set layerName(value: string);
    get layerNameInput(): string;
    private _organizationId?;
    get organizationId(): string;
    set organizationId(value: string);
    resetOrganizationId(): void;
    get organizationIdInput(): string;
    get policy(): string;
    private _principal?;
    get principal(): string;
    set principal(value: string);
    get principalInput(): string;
    get revisionId(): string;
    private _statementId?;
    get statementId(): string;
    set statementId(value: string);
    get statementIdInput(): string;
    private _versionNumber?;
    get versionNumber(): number;
    set versionNumber(value: number);
    get versionNumberInput(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=lambda-layer-version-permission.d.ts.map