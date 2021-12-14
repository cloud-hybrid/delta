import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WAF Regional
*/
export interface WafregionalRateBasedRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html#metric_name WafregionalRateBasedRule#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html#name WafregionalRateBasedRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html#rate_key WafregionalRateBasedRule#rate_key}
    */
    readonly rateKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html#rate_limit WafregionalRateBasedRule#rate_limit}
    */
    readonly rateLimit: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html#tags WafregionalRateBasedRule#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html#tags_all WafregionalRateBasedRule#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * predicate block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html#predicate WafregionalRateBasedRule#predicate}
    */
    readonly predicate?: WafregionalRateBasedRulePredicate[];
}
export interface WafregionalRateBasedRulePredicate {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html#data_id WafregionalRateBasedRule#data_id}
    */
    readonly dataId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html#negated WafregionalRateBasedRule#negated}
    */
    readonly negated: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html#type WafregionalRateBasedRule#type}
    */
    readonly type: string;
}
export declare function wafregionalRateBasedRulePredicateToTerraform(struct?: WafregionalRateBasedRulePredicate): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html aws_wafregional_rate_based_rule}
*/
export declare class WafregionalRateBasedRule extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html aws_wafregional_rate_based_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalRateBasedRuleConfig
    */
    constructor(scope: Construct, id: string, config: WafregionalRateBasedRuleConfig);
    get arn(): string;
    get id(): string;
    private _metricName?;
    get metricName(): string;
    set metricName(value: string);
    get metricNameInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _rateKey?;
    get rateKey(): string;
    set rateKey(value: string);
    get rateKeyInput(): string;
    private _rateLimit?;
    get rateLimit(): number;
    set rateLimit(value: number);
    get rateLimitInput(): number;
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
    private _predicate?;
    get predicate(): WafregionalRateBasedRulePredicate[];
    set predicate(value: WafregionalRateBasedRulePredicate[]);
    resetPredicate(): void;
    get predicateInput(): WafregionalRateBasedRulePredicate[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=wafregional-rate-based-rule.d.ts.map