import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WAF Regional
*/
export interface WafregionalRuleGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html#metric_name WafregionalRuleGroup#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html#name WafregionalRuleGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html#tags WafregionalRuleGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html#tags_all WafregionalRuleGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * activated_rule block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html#activated_rule WafregionalRuleGroup#activated_rule}
    */
    readonly activatedRule?: WafregionalRuleGroupActivatedRule[];
}
export interface WafregionalRuleGroupActivatedRuleAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html#type WafregionalRuleGroup#type}
    */
    readonly type: string;
}
export declare function wafregionalRuleGroupActivatedRuleActionToTerraform(struct?: WafregionalRuleGroupActivatedRuleActionOutputReference | WafregionalRuleGroupActivatedRuleAction): any;
export declare class WafregionalRuleGroupActivatedRuleActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): WafregionalRuleGroupActivatedRuleAction | undefined;
    set internalValue(value: WafregionalRuleGroupActivatedRuleAction | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
export interface WafregionalRuleGroupActivatedRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html#priority WafregionalRuleGroup#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html#rule_id WafregionalRuleGroup#rule_id}
    */
    readonly ruleId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html#type WafregionalRuleGroup#type}
    */
    readonly type?: string;
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html#action WafregionalRuleGroup#action}
    */
    readonly action: WafregionalRuleGroupActivatedRuleAction;
}
export declare function wafregionalRuleGroupActivatedRuleToTerraform(struct?: WafregionalRuleGroupActivatedRule): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html aws_wafregional_rule_group}
*/
export declare class WafregionalRuleGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html aws_wafregional_rule_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalRuleGroupConfig
    */
    constructor(scope: Construct, id: string, config: WafregionalRuleGroupConfig);
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
    get activatedRule(): WafregionalRuleGroupActivatedRule[];
    set activatedRule(value: WafregionalRuleGroupActivatedRule[]);
    resetActivatedRule(): void;
    get activatedRuleInput(): WafregionalRuleGroupActivatedRule[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=wafregional-rule-group.d.ts.map