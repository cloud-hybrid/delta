import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WAF
*/
export interface WafSizeConstraintSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html#name WafSizeConstraintSet#name}
    */
    readonly name: string;
    /**
    * size_constraints block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html#size_constraints WafSizeConstraintSet#size_constraints}
    */
    readonly sizeConstraints?: WafSizeConstraintSetSizeConstraints[];
}
export interface WafSizeConstraintSetSizeConstraintsFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html#data WafSizeConstraintSet#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html#type WafSizeConstraintSet#type}
    */
    readonly type: string;
}
export declare function wafSizeConstraintSetSizeConstraintsFieldToMatchToTerraform(struct?: WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference | WafSizeConstraintSetSizeConstraintsFieldToMatch): any;
export declare class WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): WafSizeConstraintSetSizeConstraintsFieldToMatch | undefined;
    set internalValue(value: WafSizeConstraintSetSizeConstraintsFieldToMatch | undefined);
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
export interface WafSizeConstraintSetSizeConstraints {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html#comparison_operator WafSizeConstraintSet#comparison_operator}
    */
    readonly comparisonOperator: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html#size WafSizeConstraintSet#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html#text_transformation WafSizeConstraintSet#text_transformation}
    */
    readonly textTransformation: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html#field_to_match WafSizeConstraintSet#field_to_match}
    */
    readonly fieldToMatch: WafSizeConstraintSetSizeConstraintsFieldToMatch;
}
export declare function wafSizeConstraintSetSizeConstraintsToTerraform(struct?: WafSizeConstraintSetSizeConstraints): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html aws_waf_size_constraint_set}
*/
export declare class WafSizeConstraintSet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html aws_waf_size_constraint_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafSizeConstraintSetConfig
    */
    constructor(scope: Construct, id: string, config: WafSizeConstraintSetConfig);
    get arn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _sizeConstraints?;
    get sizeConstraints(): WafSizeConstraintSetSizeConstraints[];
    set sizeConstraints(value: WafSizeConstraintSetSizeConstraints[]);
    resetSizeConstraints(): void;
    get sizeConstraintsInput(): WafSizeConstraintSetSizeConstraints[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=waf-size-constraint-set.d.ts.map