import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WAF
*/
export interface DataAwsWafRateBasedRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/waf_rate_based_rule.html#name DataAwsWafRateBasedRule#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/waf_rate_based_rule.html aws_waf_rate_based_rule}
*/
export declare class DataAwsWafRateBasedRule extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/waf_rate_based_rule.html aws_waf_rate_based_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsWafRateBasedRuleConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsWafRateBasedRuleConfig);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-waf-rate-based-rule.d.ts.map