import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WAF
*/
export interface WafRegexMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html#name WafRegexMatchSet#name}
    */
    readonly name: string;
    /**
    * regex_match_tuple block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html#regex_match_tuple WafRegexMatchSet#regex_match_tuple}
    */
    readonly regexMatchTuple?: WafRegexMatchSetRegexMatchTuple[];
}
export interface WafRegexMatchSetRegexMatchTupleFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html#data WafRegexMatchSet#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html#type WafRegexMatchSet#type}
    */
    readonly type: string;
}
export declare function wafRegexMatchSetRegexMatchTupleFieldToMatchToTerraform(struct?: WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference | WafRegexMatchSetRegexMatchTupleFieldToMatch): any;
export declare class WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): WafRegexMatchSetRegexMatchTupleFieldToMatch | undefined;
    set internalValue(value: WafRegexMatchSetRegexMatchTupleFieldToMatch | undefined);
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
export interface WafRegexMatchSetRegexMatchTuple {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html#regex_pattern_set_id WafRegexMatchSet#regex_pattern_set_id}
    */
    readonly regexPatternSetId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html#text_transformation WafRegexMatchSet#text_transformation}
    */
    readonly textTransformation: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html#field_to_match WafRegexMatchSet#field_to_match}
    */
    readonly fieldToMatch: WafRegexMatchSetRegexMatchTupleFieldToMatch;
}
export declare function wafRegexMatchSetRegexMatchTupleToTerraform(struct?: WafRegexMatchSetRegexMatchTuple): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html aws_waf_regex_match_set}
*/
export declare class WafRegexMatchSet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html aws_waf_regex_match_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafRegexMatchSetConfig
    */
    constructor(scope: Construct, id: string, config: WafRegexMatchSetConfig);
    get arn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _regexMatchTuple?;
    get regexMatchTuple(): WafRegexMatchSetRegexMatchTuple[];
    set regexMatchTuple(value: WafRegexMatchSetRegexMatchTuple[]);
    resetRegexMatchTuple(): void;
    get regexMatchTupleInput(): WafRegexMatchSetRegexMatchTuple[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=waf-regex-match-set.d.ts.map