import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WAF
*/
export interface WafByteMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html#name WafByteMatchSet#name}
    */
    readonly name: string;
    /**
    * byte_match_tuples block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html#byte_match_tuples WafByteMatchSet#byte_match_tuples}
    */
    readonly byteMatchTuples?: WafByteMatchSetByteMatchTuples[];
}
export interface WafByteMatchSetByteMatchTuplesFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html#data WafByteMatchSet#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html#type WafByteMatchSet#type}
    */
    readonly type: string;
}
export declare function wafByteMatchSetByteMatchTuplesFieldToMatchToTerraform(struct?: WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference | WafByteMatchSetByteMatchTuplesFieldToMatch): any;
export declare class WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): WafByteMatchSetByteMatchTuplesFieldToMatch | undefined;
    set internalValue(value: WafByteMatchSetByteMatchTuplesFieldToMatch | undefined);
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
export interface WafByteMatchSetByteMatchTuples {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html#positional_constraint WafByteMatchSet#positional_constraint}
    */
    readonly positionalConstraint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html#target_string WafByteMatchSet#target_string}
    */
    readonly targetString?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html#text_transformation WafByteMatchSet#text_transformation}
    */
    readonly textTransformation: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html#field_to_match WafByteMatchSet#field_to_match}
    */
    readonly fieldToMatch: WafByteMatchSetByteMatchTuplesFieldToMatch;
}
export declare function wafByteMatchSetByteMatchTuplesToTerraform(struct?: WafByteMatchSetByteMatchTuples): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html aws_waf_byte_match_set}
*/
export declare class WafByteMatchSet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html aws_waf_byte_match_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafByteMatchSetConfig
    */
    constructor(scope: Construct, id: string, config: WafByteMatchSetConfig);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _byteMatchTuples?;
    get byteMatchTuples(): WafByteMatchSetByteMatchTuples[];
    set byteMatchTuples(value: WafByteMatchSetByteMatchTuples[]);
    resetByteMatchTuples(): void;
    get byteMatchTuplesInput(): WafByteMatchSetByteMatchTuples[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=waf-byte-match-set.d.ts.map