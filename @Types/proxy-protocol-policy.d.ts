import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic Load Balancer
*/
export interface ProxyProtocolPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/proxy_protocol_policy.html#instance_ports ProxyProtocolPolicy#instance_ports}
    */
    readonly instancePorts: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/proxy_protocol_policy.html#load_balancer ProxyProtocolPolicy#load_balancer}
    */
    readonly loadBalancer: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/proxy_protocol_policy.html aws_proxy_protocol_policy}
*/
export declare class ProxyProtocolPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/proxy_protocol_policy.html aws_proxy_protocol_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ProxyProtocolPolicyConfig
    */
    constructor(scope: Construct, id: string, config: ProxyProtocolPolicyConfig);
    get id(): string;
    private _instancePorts?;
    get instancePorts(): string[];
    set instancePorts(value: string[]);
    get instancePortsInput(): string[];
    private _loadBalancer?;
    get loadBalancer(): string;
    set loadBalancer(value: string);
    get loadBalancerInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=proxy-protocol-policy.d.ts.map