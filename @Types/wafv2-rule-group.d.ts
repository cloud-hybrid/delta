import { Wafv2RuleGroupCustomResponseBody, Wafv2RuleGroupRule, Wafv2RuleGroupVisibilityConfig } from './wafv2-rule-group-structs';
import { Wafv2RuleGroupVisibilityConfigOutputReference } from './wafv2-rule-group-structs';
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WAF V2
*/
export interface Wafv2RuleGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#capacity Wafv2RuleGroup#capacity}
    */
    readonly capacity: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#description Wafv2RuleGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#scope Wafv2RuleGroup#scope}
    */
    readonly scope: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#tags Wafv2RuleGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#tags_all Wafv2RuleGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * custom_response_body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#custom_response_body Wafv2RuleGroup#custom_response_body}
    */
    readonly customResponseBody?: Wafv2RuleGroupCustomResponseBody[];
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#rule Wafv2RuleGroup#rule}
    */
    readonly rule?: Wafv2RuleGroupRule[];
    /**
    * visibility_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#visibility_config Wafv2RuleGroup#visibility_config}
    */
    readonly visibilityConfig: Wafv2RuleGroupVisibilityConfig;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html aws_wafv2_rule_group}
*/
export declare class Wafv2RuleGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html aws_wafv2_rule_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Wafv2RuleGroupConfig
    */
    constructor(scope: Construct, id: string, config: Wafv2RuleGroupConfig);
    get arn(): string;
    private _capacity?;
    get capacity(): number;
    set capacity(value: number);
    get capacityInput(): number;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    get lockToken(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
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
    private _customResponseBody?;
    get customResponseBody(): Wafv2RuleGroupCustomResponseBody[];
    set customResponseBody(value: Wafv2RuleGroupCustomResponseBody[]);
    resetCustomResponseBody(): void;
    get customResponseBodyInput(): Wafv2RuleGroupCustomResponseBody[];
    private _rule?;
    get rule(): Wafv2RuleGroupRule[];
    set rule(value: Wafv2RuleGroupRule[]);
    resetRule(): void;
    get ruleInput(): Wafv2RuleGroupRule[];
    private _visibilityConfig;
    get visibilityConfig(): Wafv2RuleGroupVisibilityConfigOutputReference;
    putVisibilityConfig(value: Wafv2RuleGroupVisibilityConfig): void;
    get visibilityConfigInput(): Wafv2RuleGroupVisibilityConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=wafv2-rule-group.d.ts.map