import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS GuardDuty
*/
export interface GuarddutyFilterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#action GuarddutyFilter#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#description GuarddutyFilter#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#detector_id GuarddutyFilter#detector_id}
    */
    readonly detectorId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#name GuarddutyFilter#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#rank GuarddutyFilter#rank}
    */
    readonly rank: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#tags GuarddutyFilter#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#tags_all GuarddutyFilter#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * finding_criteria block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#finding_criteria GuarddutyFilter#finding_criteria}
    */
    readonly findingCriteria: GuarddutyFilterFindingCriteria;
}
export interface GuarddutyFilterFindingCriteriaCriterion {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#equals GuarddutyFilter#equals}
    */
    readonly equalTo?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#field GuarddutyFilter#field}
    */
    readonly field: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#greater_than GuarddutyFilter#greater_than}
    */
    readonly greaterThan?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#greater_than_or_equal GuarddutyFilter#greater_than_or_equal}
    */
    readonly greaterThanOrEqual?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#less_than GuarddutyFilter#less_than}
    */
    readonly lessThan?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#less_than_or_equal GuarddutyFilter#less_than_or_equal}
    */
    readonly lessThanOrEqual?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#not_equals GuarddutyFilter#not_equals}
    */
    readonly notEquals?: string[];
}
export declare function guarddutyFilterFindingCriteriaCriterionToTerraform(struct?: GuarddutyFilterFindingCriteriaCriterion): any;
export interface GuarddutyFilterFindingCriteria {
    /**
    * criterion block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#criterion GuarddutyFilter#criterion}
    */
    readonly criterion: GuarddutyFilterFindingCriteriaCriterion[];
}
export declare function guarddutyFilterFindingCriteriaToTerraform(struct?: GuarddutyFilterFindingCriteriaOutputReference | GuarddutyFilterFindingCriteria): any;
export declare class GuarddutyFilterFindingCriteriaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GuarddutyFilterFindingCriteria | undefined;
    set internalValue(value: GuarddutyFilterFindingCriteria | undefined);
    private _criterion?;
    get criterion(): GuarddutyFilterFindingCriteriaCriterion[];
    set criterion(value: GuarddutyFilterFindingCriteriaCriterion[]);
    get criterionInput(): GuarddutyFilterFindingCriteriaCriterion[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html aws_guardduty_filter}
*/
export declare class GuarddutyFilter extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html aws_guardduty_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyFilterConfig
    */
    constructor(scope: Construct, id: string, config: GuarddutyFilterConfig);
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
    private _detectorId?;
    get detectorId(): string;
    set detectorId(value: string);
    get detectorIdInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _rank?;
    get rank(): number;
    set rank(value: number);
    get rankInput(): number;
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
    get findingCriteria(): GuarddutyFilterFindingCriteriaOutputReference;
    putFindingCriteria(value: GuarddutyFilterFindingCriteria): void;
    get findingCriteriaInput(): GuarddutyFilterFindingCriteria;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=guardduty-filter.d.ts.map