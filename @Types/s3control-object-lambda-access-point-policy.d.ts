import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Simple Storage Service
*/
export interface S3ControlObjectLambdaAccessPointPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point_policy.html#account_id S3ControlObjectLambdaAccessPointPolicy#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point_policy.html#name S3ControlObjectLambdaAccessPointPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point_policy.html#policy S3ControlObjectLambdaAccessPointPolicy#policy}
    */
    readonly policy: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point_policy.html aws_s3control_object_lambda_access_point_policy}
*/
export declare class S3ControlObjectLambdaAccessPointPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point_policy.html aws_s3control_object_lambda_access_point_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3ControlObjectLambdaAccessPointPolicyConfig
    */
    constructor(scope: Construct, id: string, config: S3ControlObjectLambdaAccessPointPolicyConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get hasPublicAccessPolicy(): any;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=s3control-object-lambda-access-point-policy.d.ts.map