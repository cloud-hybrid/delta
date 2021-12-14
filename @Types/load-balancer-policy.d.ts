import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic Load Balancer
*/
export interface LoadBalancerPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html#load_balancer_name LoadBalancerPolicy#load_balancer_name}
    */
    readonly loadBalancerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html#policy_name LoadBalancerPolicy#policy_name}
    */
    readonly policyName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html#policy_type_name LoadBalancerPolicy#policy_type_name}
    */
    readonly policyTypeName: string;
    /**
    * policy_attribute block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html#policy_attribute LoadBalancerPolicy#policy_attribute}
    */
    readonly policyAttribute?: LoadBalancerPolicyPolicyAttribute[];
}
export interface LoadBalancerPolicyPolicyAttribute {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html#name LoadBalancerPolicy#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html#value LoadBalancerPolicy#value}
    */
    readonly value?: string;
}
export declare function loadBalancerPolicyPolicyAttributeToTerraform(struct?: LoadBalancerPolicyPolicyAttribute): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html aws_load_balancer_policy}
*/
export declare class LoadBalancerPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html aws_load_balancer_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LoadBalancerPolicyConfig
    */
    constructor(scope: Construct, id: string, config: LoadBalancerPolicyConfig);
    get id(): string;
    private _loadBalancerName?;
    get loadBalancerName(): string;
    set loadBalancerName(value: string);
    get loadBalancerNameInput(): string;
    private _policyName?;
    get policyName(): string;
    set policyName(value: string);
    get policyNameInput(): string;
    private _policyTypeName?;
    get policyTypeName(): string;
    set policyTypeName(value: string);
    get policyTypeNameInput(): string;
    private _policyAttribute?;
    get policyAttribute(): LoadBalancerPolicyPolicyAttribute[];
    set policyAttribute(value: LoadBalancerPolicyPolicyAttribute[]);
    resetPolicyAttribute(): void;
    get policyAttributeInput(): LoadBalancerPolicyPolicyAttribute[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=load-balancer-policy.d.ts.map