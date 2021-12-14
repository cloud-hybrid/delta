import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WAF Regional
*/
export interface WafregionalSqlInjectionMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html#name WafregionalSqlInjectionMatchSet#name}
    */
    readonly name: string;
    /**
    * sql_injection_match_tuple block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html#sql_injection_match_tuple WafregionalSqlInjectionMatchSet#sql_injection_match_tuple}
    */
    readonly sqlInjectionMatchTuple?: WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple[];
}
export interface WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html#data WafregionalSqlInjectionMatchSet#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html#type WafregionalSqlInjectionMatchSet#type}
    */
    readonly type: string;
}
export declare function wafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchToTerraform(struct?: WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference | WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch): any;
export declare class WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch | undefined;
    set internalValue(value: WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch | undefined);
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
export interface WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html#text_transformation WafregionalSqlInjectionMatchSet#text_transformation}
    */
    readonly textTransformation: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html#field_to_match WafregionalSqlInjectionMatchSet#field_to_match}
    */
    readonly fieldToMatch: WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch;
}
export declare function wafregionalSqlInjectionMatchSetSqlInjectionMatchTupleToTerraform(struct?: WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html aws_wafregional_sql_injection_match_set}
*/
export declare class WafregionalSqlInjectionMatchSet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html aws_wafregional_sql_injection_match_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalSqlInjectionMatchSetConfig
    */
    constructor(scope: Construct, id: string, config: WafregionalSqlInjectionMatchSetConfig);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _sqlInjectionMatchTuple?;
    get sqlInjectionMatchTuple(): WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple[];
    set sqlInjectionMatchTuple(value: WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple[]);
    resetSqlInjectionMatchTuple(): void;
    get sqlInjectionMatchTupleInput(): WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=wafregional-sql-injection-match-set.d.ts.map