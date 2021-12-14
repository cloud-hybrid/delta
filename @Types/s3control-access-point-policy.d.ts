import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Simple Storage Service
*/
export interface S3ControlAccessPointPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_access_point_policy.html#access_point_arn S3ControlAccessPointPolicy#access_point_arn}
    */
    readonly accessPointArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_access_point_policy.html#policy S3ControlAccessPointPolicy#policy}
    */
    readonly policy: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_access_point_policy.html aws_s3control_access_point_policy}
*/
export declare class S3ControlAccessPointPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3control_access_point_policy.html aws_s3control_access_point_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3ControlAccessPointPolicyConfig
    */
    constructor(scope: Construct, id: string, config: S3ControlAccessPointPolicyConfig);
    private _accessPointArn?;
    get accessPointArn(): string;
    set accessPointArn(value: string);
    get accessPointArnInput(): string;
    get hasPublicAccessPolicy(): any;
    get id(): string;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=s3control-access-point-policy.d.ts.map