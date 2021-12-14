import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WAF Regional
*/
export interface WafregionalRegexMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html#name WafregionalRegexMatchSet#name}
    */
    readonly name: string;
    /**
    * regex_match_tuple block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html#regex_match_tuple WafregionalRegexMatchSet#regex_match_tuple}
    */
    readonly regexMatchTuple?: WafregionalRegexMatchSetRegexMatchTuple[];
}
export interface WafregionalRegexMatchSetRegexMatchTupleFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html#data WafregionalRegexMatchSet#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html#type WafregionalRegexMatchSet#type}
    */
    readonly type: string;
}
export declare function wafregionalRegexMatchSetRegexMatchTupleFieldToMatchToTerraform(struct?: WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference | WafregionalRegexMatchSetRegexMatchTupleFieldToMatch): any;
export declare class WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): WafregionalRegexMatchSetRegexMatchTupleFieldToMatch | undefined;
    set internalValue(value: WafregionalRegexMatchSetRegexMatchTupleFieldToMatch | undefined);
    private _data?;
    get data(): string;
    set data(value: string);
    resetData(): void;
    get dataInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
export interface WafregionalRegexMatchSetRegexMatchTuple {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html#regex_pattern_set_id WafregionalRegexMatchSet#regex_pattern_set_id}
    */
    readonly regexPatternSetId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html#text_transformation WafregionalRegexMatchSet#text_transformation}
    */
    readonly textTransformation: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html#field_to_match WafregionalRegexMatchSet#field_to_match}
    */
    readonly fieldToMatch: WafregionalRegexMatchSetRegexMatchTupleFieldToMatch;
}
export declare function wafregionalRegexMatchSetRegexMatchTupleToTerraform(struct?: WafregionalRegexMatchSetRegexMatchTuple): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html aws_wafregional_regex_match_set}
*/
export declare class WafregionalRegexMatchSet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html aws_wafregional_regex_match_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalRegexMatchSetConfig
    */
    constructor(scope: Construct, id: string, config: WafregionalRegexMatchSetConfig);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _regexMatchTuple?;
    get regexMatchTuple(): WafregionalRegexMatchSetRegexMatchTuple[];
    set regexMatchTuple(value: WafregionalRegexMatchSetRegexMatchTuple[]);
    resetRegexMatchTuple(): void;
    get regexMatchTupleInput(): WafregionalRegexMatchSetRegexMatchTuple[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=wafregional-regex-match-set.d.ts.map