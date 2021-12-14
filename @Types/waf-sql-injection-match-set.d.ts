import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WAF
*/
export interface WafSqlInjectionMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set.html#name WafSqlInjectionMatchSet#name}
    */
    readonly name: string;
    /**
    * sql_injection_match_tuples block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set.html#sql_injection_match_tuples WafSqlInjectionMatchSet#sql_injection_match_tuples}
    */
    readonly sqlInjectionMatchTuples?: WafSqlInjectionMatchSetSqlInjectionMatchTuples[];
}
export interface WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set.html#data WafSqlInjectionMatchSet#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set.html#type WafSqlInjectionMatchSet#type}
    */
    readonly type: string;
}
export declare function wafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchToTerraform(struct?: WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference | WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch): any;
export declare class WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch | undefined;
    set internalValue(value: WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch | undefined);
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
export interface WafSqlInjectionMatchSetSqlInjectionMatchTuples {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set.html#text_transformation WafSqlInjectionMatchSet#text_transformation}
    */
    readonly textTransformation: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set.html#field_to_match WafSqlInjectionMatchSet#field_to_match}
    */
    readonly fieldToMatch: WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch;
}
export declare function wafSqlInjectionMatchSetSqlInjectionMatchTuplesToTerraform(struct?: WafSqlInjectionMatchSetSqlInjectionMatchTuples): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set.html aws_waf_sql_injection_match_set}
*/
export declare class WafSqlInjectionMatchSet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set.html aws_waf_sql_injection_match_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafSqlInjectionMatchSetConfig
    */
    constructor(scope: Construct, id: string, config: WafSqlInjectionMatchSetConfig);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _sqlInjectionMatchTuples?;
    get sqlInjectionMatchTuples(): WafSqlInjectionMatchSetSqlInjectionMatchTuples[];
    set sqlInjectionMatchTuples(value: WafSqlInjectionMatchSetSqlInjectionMatchTuples[]);
    resetSqlInjectionMatchTuples(): void;
    get sqlInjectionMatchTuplesInput(): WafSqlInjectionMatchSetSqlInjectionMatchTuples[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=waf-sql-injection-match-set.d.ts.map