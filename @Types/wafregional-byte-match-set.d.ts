import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WAF Regional
*/
export interface WafregionalByteMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#name WafregionalByteMatchSet#name}
    */
    readonly name: string;
    /**
    * byte_match_tuples block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#byte_match_tuples WafregionalByteMatchSet#byte_match_tuples}
    */
    readonly byteMatchTuples?: WafregionalByteMatchSetByteMatchTuples[];
}
export interface WafregionalByteMatchSetByteMatchTuplesFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#data WafregionalByteMatchSet#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#type WafregionalByteMatchSet#type}
    */
    readonly type: string;
}
export declare function wafregionalByteMatchSetByteMatchTuplesFieldToMatchToTerraform(struct?: WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference | WafregionalByteMatchSetByteMatchTuplesFieldToMatch): any;
export declare class WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): WafregionalByteMatchSetByteMatchTuplesFieldToMatch | undefined;
    set internalValue(value: WafregionalByteMatchSetByteMatchTuplesFieldToMatch | undefined);
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
export interface WafregionalByteMatchSetByteMatchTuples {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#positional_constraint WafregionalByteMatchSet#positional_constraint}
    */
    readonly positionalConstraint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#target_string WafregionalByteMatchSet#target_string}
    */
    readonly targetString?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#text_transformation WafregionalByteMatchSet#text_transformation}
    */
    readonly textTransformation: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#field_to_match WafregionalByteMatchSet#field_to_match}
    */
    readonly fieldToMatch: WafregionalByteMatchSetByteMatchTuplesFieldToMatch;
}
export declare function wafregionalByteMatchSetByteMatchTuplesToTerraform(struct?: WafregionalByteMatchSetByteMatchTuples): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html aws_wafregional_byte_match_set}
*/
export declare class WafregionalByteMatchSet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html aws_wafregional_byte_match_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalByteMatchSetConfig
    */
    constructor(scope: Construct, id: string, config: WafregionalByteMatchSetConfig);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _byteMatchTuples?;
    get byteMatchTuples(): WafregionalByteMatchSetByteMatchTuples[];
    set byteMatchTuples(value: WafregionalByteMatchSetByteMatchTuples[]);
    resetByteMatchTuples(): void;
    get byteMatchTuplesInput(): WafregionalByteMatchSetByteMatchTuples[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=wafregional-byte-match-set.d.ts.map