import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Route 53
*/
export interface DataAwsRoute53ResolverRulesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules.html#owner_id DataAwsRoute53ResolverRules#owner_id}
    */
    readonly ownerId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules.html#resolver_endpoint_id DataAwsRoute53ResolverRules#resolver_endpoint_id}
    */
    readonly resolverEndpointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules.html#rule_type DataAwsRoute53ResolverRules#rule_type}
    */
    readonly ruleType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules.html#share_status DataAwsRoute53ResolverRules#share_status}
    */
    readonly shareStatus?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules.html aws_route53_resolver_rules}
*/
export declare class DataAwsRoute53ResolverRules extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules.html aws_route53_resolver_rules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRoute53ResolverRulesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsRoute53ResolverRulesConfig);
    get id(): string;
    private _ownerId?;
    get ownerId(): string;
    set ownerId(value: string);
    resetOwnerId(): void;
    get ownerIdInput(): string;
    private _resolverEndpointId?;
    get resolverEndpointId(): string;
    set resolverEndpointId(value: string);
    resetResolverEndpointId(): void;
    get resolverEndpointIdInput(): string;
    get resolverRuleIds(): string[];
    private _ruleType?;
    get ruleType(): string;
    set ruleType(value: string);
    resetRuleType(): void;
    get ruleTypeInput(): string;
    private _shareStatus?;
    get shareStatus(): string;
    set shareStatus(value: string);
    resetShareStatus(): void;
    get shareStatusInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-route53-resolver-rules.d.ts.map