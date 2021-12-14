import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WAF
*/
export interface WafRuleGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#metric_name WafRuleGroup#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#name WafRuleGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#tags WafRuleGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#tags_all WafRuleGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * activated_rule block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#activated_rule WafRuleGroup#activated_rule}
    */
    readonly activatedRule?: WafRuleGroupActivatedRule[];
}
export interface WafRuleGroupActivatedRuleAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#type WafRuleGroup#type}
    */
    readonly type: string;
}
export declare function wafRuleGroupActivatedRuleActionToTerraform(struct?: WafRuleGroupActivatedRuleActionOutputReference | WafRuleGroupActivatedRuleAction): any;
export declare class WafRuleGroupActivatedRuleActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): WafRuleGroupActivatedRuleAction | undefined;
    set internalValue(value: WafRuleGroupActivatedRuleAction | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
export interface WafRuleGroupActivatedRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#priority WafRuleGroup#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#rule_id WafRuleGroup#rule_id}
    */
    readonly ruleId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#type WafRuleGroup#type}
    */
    readonly type?: string;
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#action WafRuleGroup#action}
    */
    readonly action: WafRuleGroupActivatedRuleAction;
}
export declare function wafRuleGroupActivatedRuleToTerraform(struct?: WafRuleGroupActivatedRule): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html aws_waf_rule_group}
*/
export declare class WafRuleGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html aws_waf_rule_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafRuleGroupConfig
    */
    constructor(scope: Construct, id: string, config: WafRuleGroupConfig);
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
    private _activatedRule?;
    get activatedRule(): WafRuleGroupActivatedRule[];
    set activatedRule(value: WafRuleGroupActivatedRule[]);
    resetActivatedRule(): void;
    get activatedRuleInput(): WafRuleGroupActivatedRule[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=waf-rule-group.d.ts.map