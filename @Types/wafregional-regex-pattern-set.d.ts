import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WAF Regional
*/
export interface WafregionalRegexPatternSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_pattern_set.html#name WafregionalRegexPatternSet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_pattern_set.html#regex_pattern_strings WafregionalRegexPatternSet#regex_pattern_strings}
    */
    readonly regexPatternStrings?: string[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_pattern_set.html aws_wafregional_regex_pattern_set}
*/
export declare class WafregionalRegexPatternSet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_pattern_set.html aws_wafregional_regex_pattern_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalRegexPatternSetConfig
    */
    constructor(scope: Construct, id: string, config: WafregionalRegexPatternSetConfig);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _regexPatternStrings?;
    get regexPatternStrings(): string[];
    set regexPatternStrings(value: string[]);
    resetRegexPatternStrings(): void;
    get regexPatternStringsInput(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=wafregional-regex-pattern-set.d.ts.map