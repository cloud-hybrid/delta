import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Macie 2
*/
export interface Macie2FindingsFilterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#action Macie2FindingsFilter#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#description Macie2FindingsFilter#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#name Macie2FindingsFilter#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#name_prefix Macie2FindingsFilter#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#position Macie2FindingsFilter#position}
    */
    readonly position?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#tags Macie2FindingsFilter#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#tags_all Macie2FindingsFilter#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * finding_criteria block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#finding_criteria Macie2FindingsFilter#finding_criteria}
    */
    readonly findingCriteria: Macie2FindingsFilterFindingCriteria;
}
export interface Macie2FindingsFilterFindingCriteriaCriterion {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#eq Macie2FindingsFilter#eq}
    */
    readonly eq?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#eq_exact_match Macie2FindingsFilter#eq_exact_match}
    */
    readonly eqExactMatch?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#field Macie2FindingsFilter#field}
    */
    readonly field: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#gt Macie2FindingsFilter#gt}
    */
    readonly gt?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#gte Macie2FindingsFilter#gte}
    */
    readonly gte?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#lt Macie2FindingsFilter#lt}
    */
    readonly lt?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#lte Macie2FindingsFilter#lte}
    */
    readonly lte?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#neq Macie2FindingsFilter#neq}
    */
    readonly neq?: string[];
}
export declare function macie2FindingsFilterFindingCriteriaCriterionToTerraform(struct?: Macie2FindingsFilterFindingCriteriaCriterion): any;
export interface Macie2FindingsFilterFindingCriteria {
    /**
    * criterion block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#criterion Macie2FindingsFilter#criterion}
    */
    readonly criterion?: Macie2FindingsFilterFindingCriteriaCriterion[];
}
export declare function macie2FindingsFilterFindingCriteriaToTerraform(struct?: Macie2FindingsFilterFindingCriteriaOutputReference | Macie2FindingsFilterFindingCriteria): any;
export declare class Macie2FindingsFilterFindingCriteriaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Macie2FindingsFilterFindingCriteria | undefined;
    set internalValue(value: Macie2FindingsFilterFindingCriteria | undefined);
    private _criterion?;
    get criterion(): Macie2FindingsFilterFindingCriteriaCriterion[];
    set criterion(value: Macie2FindingsFilterFindingCriteriaCriterion[]);
    resetCriterion(): void;
    get criterionInput(): Macie2FindingsFilterFindingCriteriaCriterion[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html aws_macie2_findings_filter}
*/
export declare class Macie2FindingsFilter extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html aws_macie2_findings_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Macie2FindingsFilterConfig
    */
    constructor(scope: Construct, id: string, config: Macie2FindingsFilterConfig);
    private _action?;
    get action(): string;
    set action(value: string);
    get actionInput(): string;
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string;
    private _position?;
    get position(): number;
    set position(value: number);
    resetPosition(): void;
    get positionInput(): number;
    private _tags?;
    get tags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tagsAll(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTagsAll(): void;
    get tagsAllInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _findingCriteria;
    get findingCriteria(): Macie2FindingsFilterFindingCriteriaOutputReference;
    putFindingCriteria(value: Macie2FindingsFilterFindingCriteria): void;
    get findingCriteriaInput(): Macie2FindingsFilterFindingCriteria;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=macie2-findings-filter.d.ts.map