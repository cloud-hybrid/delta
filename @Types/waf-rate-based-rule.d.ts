import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WAF
*/
export interface WafRateBasedRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html#metric_name WafRateBasedRule#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html#name WafRateBasedRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html#rate_key WafRateBasedRule#rate_key}
    */
    readonly rateKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html#rate_limit WafRateBasedRule#rate_limit}
    */
    readonly rateLimit: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html#tags WafRateBasedRule#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html#tags_all WafRateBasedRule#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * predicates block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html#predicates WafRateBasedRule#predicates}
    */
    readonly predicates?: WafRateBasedRulePredicates[];
}
export interface WafRateBasedRulePredicates {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html#data_id WafRateBasedRule#data_id}
    */
    readonly dataId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html#negated WafRateBasedRule#negated}
    */
    readonly negated: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html#type WafRateBasedRule#type}
    */
    readonly type: string;
}
export declare function wafRateBasedRulePredicatesToTerraform(struct?: WafRateBasedRulePredicates): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html aws_waf_rate_based_rule}
*/
export declare class WafRateBasedRule extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html aws_waf_rate_based_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafRateBasedRuleConfig
    */
    constructor(scope: Construct, id: string, config: WafRateBasedRuleConfig);
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
    private _predicates?;
    get predicates(): WafRateBasedRulePredicates[];
    set predicates(value: WafRateBasedRulePredicates[]);
    resetPredicates(): void;
    get predicatesInput(): WafRateBasedRulePredicates[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=waf-rate-based-rule.d.ts.map