import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic Load Balancer
*/
export interface LoadBalancerBackendServerPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy.html#instance_port LoadBalancerBackendServerPolicy#instance_port}
    */
    readonly instancePort: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy.html#load_balancer_name LoadBalancerBackendServerPolicy#load_balancer_name}
    */
    readonly loadBalancerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy.html#policy_names LoadBalancerBackendServerPolicy#policy_names}
    */
    readonly policyNames?: string[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy.html aws_load_balancer_backend_server_policy}
*/
export declare class LoadBalancerBackendServerPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy.html aws_load_balancer_backend_server_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LoadBalancerBackendServerPolicyConfig
    */
    constructor(scope: Construct, id: string, config: LoadBalancerBackendServerPolicyConfig);
    get id(): string;
    private _instancePort?;
    get instancePort(): number;
    set instancePort(value: number);
    get instancePortInput(): number;
    private _loadBalancerName?;
    get loadBalancerName(): string;
    set loadBalancerName(value: string);
    get loadBalancerNameInput(): string;
    private _policyNames?;
    get policyNames(): string[];
    set policyNames(value: string[]);
    resetPolicyNames(): void;
    get policyNamesInput(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=load-balancer-backend-server-policy.d.ts.map