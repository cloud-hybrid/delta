import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WAF Regional
*/
export interface WafregionalSizeConstraintSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html#name WafregionalSizeConstraintSet#name}
    */
    readonly name: string;
    /**
    * size_constraints block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html#size_constraints WafregionalSizeConstraintSet#size_constraints}
    */
    readonly sizeConstraints?: WafregionalSizeConstraintSetSizeConstraints[];
}
export interface WafregionalSizeConstraintSetSizeConstraintsFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html#data WafregionalSizeConstraintSet#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html#type WafregionalSizeConstraintSet#type}
    */
    readonly type: string;
}
export declare function wafregionalSizeConstraintSetSizeConstraintsFieldToMatchToTerraform(struct?: WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference | WafregionalSizeConstraintSetSizeConstraintsFieldToMatch): any;
export declare class WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): WafregionalSizeConstraintSetSizeConstraintsFieldToMatch | undefined;
    set internalValue(value: WafregionalSizeConstraintSetSizeConstraintsFieldToMatch | undefined);
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
export interface WafregionalSizeConstraintSetSizeConstraints {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html#comparison_operator WafregionalSizeConstraintSet#comparison_operator}
    */
    readonly comparisonOperator: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html#size WafregionalSizeConstraintSet#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html#text_transformation WafregionalSizeConstraintSet#text_transformation}
    */
    readonly textTransformation: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html#field_to_match WafregionalSizeConstraintSet#field_to_match}
    */
    readonly fieldToMatch: WafregionalSizeConstraintSetSizeConstraintsFieldToMatch;
}
export declare function wafregionalSizeConstraintSetSizeConstraintsToTerraform(struct?: WafregionalSizeConstraintSetSizeConstraints): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html aws_wafregional_size_constraint_set}
*/
export declare class WafregionalSizeConstraintSet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html aws_wafregional_size_constraint_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalSizeConstraintSetConfig
    */
    constructor(scope: Construct, id: string, config: WafregionalSizeConstraintSetConfig);
    get arn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _sizeConstraints?;
    get sizeConstraints(): WafregionalSizeConstraintSetSizeConstraints[];
    set sizeConstraints(value: WafregionalSizeConstraintSetSizeConstraints[]);
    resetSizeConstraints(): void;
    get sizeConstraintsInput(): WafregionalSizeConstraintSetSizeConstraints[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=wafregional-size-constraint-set.d.ts.map