import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WAF V2
*/
export interface DataAwsWafv2RuleGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/wafv2_rule_group.html#name DataAwsWafv2RuleGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/wafv2_rule_group.html#scope DataAwsWafv2RuleGroup#scope}
    */
    readonly scope: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/wafv2_rule_group.html aws_wafv2_rule_group}
*/
export declare class DataAwsWafv2RuleGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/wafv2_rule_group.html aws_wafv2_rule_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsWafv2RuleGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsWafv2RuleGroupConfig);
    get arn(): string;
    get description(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-wafv2-rule-group.d.ts.map