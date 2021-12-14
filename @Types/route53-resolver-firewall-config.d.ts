import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Route 53
*/
export interface Route53ResolverFirewallConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_config.html#firewall_fail_open Route53ResolverFirewallConfig#firewall_fail_open}
    */
    readonly firewallFailOpen?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_config.html#resource_id Route53ResolverFirewallConfig#resource_id}
    */
    readonly resourceId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_config.html aws_route53_resolver_firewall_config}
*/
export declare class Route53ResolverFirewallConfig extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_config.html aws_route53_resolver_firewall_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverFirewallConfigConfig
    */
    constructor(scope: Construct, id: string, config: Route53ResolverFirewallConfigConfig);
    private _firewallFailOpen?;
    get firewallFailOpen(): string;
    set firewallFailOpen(value: string);
    resetFirewallFailOpen(): void;
    get firewallFailOpenInput(): string;
    get id(): string;
    get ownerId(): string;
    private _resourceId?;
    get resourceId(): string;
    set resourceId(value: string);
    get resourceIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=route53-resolver-firewall-config.d.ts.map