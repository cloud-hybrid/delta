import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Glue
*/
export interface GlueResourcePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_resource_policy.html#enable_hybrid GlueResourcePolicy#enable_hybrid}
    */
    readonly enableHybrid?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_resource_policy.html#policy GlueResourcePolicy#policy}
    */
    readonly policy: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_resource_policy.html aws_glue_resource_policy}
*/
export declare class GlueResourcePolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_resource_policy.html aws_glue_resource_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueResourcePolicyConfig
    */
    constructor(scope: Construct, id: string, config: GlueResourcePolicyConfig);
    private _enableHybrid?;
    get enableHybrid(): string;
    set enableHybrid(value: string);
    resetEnableHybrid(): void;
    get enableHybridInput(): string;
    get id(): string;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=glue-resource-policy.d.ts.map