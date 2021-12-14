import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Route 53
*/
export interface Route53ResolverFirewallRuleGroupAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html#firewall_rule_group_id Route53ResolverFirewallRuleGroupAssociation#firewall_rule_group_id}
    */
    readonly firewallRuleGroupId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html#mutation_protection Route53ResolverFirewallRuleGroupAssociation#mutation_protection}
    */
    readonly mutationProtection?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html#name Route53ResolverFirewallRuleGroupAssociation#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html#priority Route53ResolverFirewallRuleGroupAssociation#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html#tags Route53ResolverFirewallRuleGroupAssociation#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html#tags_all Route53ResolverFirewallRuleGroupAssociation#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html#vpc_id Route53ResolverFirewallRuleGroupAssociation#vpc_id}
    */
    readonly vpcId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html aws_route53_resolver_firewall_rule_group_association}
*/
export declare class Route53ResolverFirewallRuleGroupAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html aws_route53_resolver_firewall_rule_group_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverFirewallRuleGroupAssociationConfig
    */
    constructor(scope: Construct, id: string, config: Route53ResolverFirewallRuleGroupAssociationConfig);
    get arn(): string;
    private _firewallRuleGroupId?;
    get firewallRuleGroupId(): string;
    set firewallRuleGroupId(value: string);
    get firewallRuleGroupIdInput(): string;
    get id(): string;
    private _mutationProtection?;
    get mutationProtection(): string;
    set mutationProtection(value: string);
    resetMutationProtection(): void;
    get mutationProtectionInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number;
    private _tags?;
    get tags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tagsAll(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTagsAll(): void;
    get tagsAllInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=route53-resolver-firewall-rule-group-association.d.ts.map