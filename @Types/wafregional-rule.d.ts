import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WAF Regional
*/
export interface WafregionalRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule.html#metric_name WafregionalRule#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule.html#name WafregionalRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule.html#tags WafregionalRule#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule.html#tags_all WafregionalRule#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * predicate block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule.html#predicate WafregionalRule#predicate}
    */
    readonly predicate?: WafregionalRulePredicate[];
}
export interface WafregionalRulePredicate {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule.html#data_id WafregionalRule#data_id}
    */
    readonly dataId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule.html#negated WafregionalRule#negated}
    */
    readonly negated: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule.html#type WafregionalRule#type}
    */
    readonly type: string;
}
export declare function wafregionalRulePredicateToTerraform(struct?: WafregionalRulePredicate): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule.html aws_wafregional_rule}
*/
export declare class WafregionalRule extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule.html aws_wafregional_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalRuleConfig
    */
    constructor(scope: Construct, id: string, config: WafregionalRuleConfig);
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
    get predicate(): WafregionalRulePredicate[];
    set predicate(value: WafregionalRulePredicate[]);
    resetPredicate(): void;
    get predicateInput(): WafregionalRulePredicate[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=wafregional-rule.d.ts.map