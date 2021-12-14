import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Data Lifecycle Manager
*/
export interface DlmLifecyclePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#description DlmLifecyclePolicy#description}
    */
    readonly description: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#execution_role_arn DlmLifecyclePolicy#execution_role_arn}
    */
    readonly executionRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#state DlmLifecyclePolicy#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#tags DlmLifecyclePolicy#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#tags_all DlmLifecyclePolicy#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * policy_details block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#policy_details DlmLifecyclePolicy#policy_details}
    */
    readonly policyDetails: DlmLifecyclePolicyPolicyDetails;
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleCreateRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#interval DlmLifecyclePolicy#interval}
    */
    readonly interval: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#interval_unit DlmLifecyclePolicy#interval_unit}
    */
    readonly intervalUnit?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#times DlmLifecyclePolicy#times}
    */
    readonly times?: string[];
}
export declare function dlmLifecyclePolicyPolicyDetailsScheduleCreateRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleCreateRule): any;
export declare class DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DlmLifecyclePolicyPolicyDetailsScheduleCreateRule | undefined;
    set internalValue(value: DlmLifecyclePolicyPolicyDetailsScheduleCreateRule | undefined);
    private _interval?;
    get interval(): number;
    set interval(value: number);
    get intervalInput(): number;
    private _intervalUnit?;
    get intervalUnit(): string;
    set intervalUnit(value: string);
    resetIntervalUnit(): void;
    get intervalUnitInput(): string;
    private _times?;
    get times(): string[];
    set times(value: string[]);
    resetTimes(): void;
    get timesInput(): string[];
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#interval DlmLifecyclePolicy#interval}
    */
    readonly interval: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#interval_unit DlmLifecyclePolicy#interval_unit}
    */
    readonly intervalUnit: string;
}
export declare function dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule): any;
export declare class DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule | undefined;
    set internalValue(value: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule | undefined);
    private _interval?;
    get interval(): number;
    set interval(value: number);
    get intervalInput(): number;
    private _intervalUnit?;
    get intervalUnit(): string;
    set intervalUnit(value: string);
    get intervalUnitInput(): string;
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#interval DlmLifecyclePolicy#interval}
    */
    readonly interval: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#interval_unit DlmLifecyclePolicy#interval_unit}
    */
    readonly intervalUnit: string;
}
export declare function dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule): any;
export declare class DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule | undefined;
    set internalValue(value: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule | undefined);
    private _interval?;
    get interval(): number;
    set interval(value: number);
    get intervalInput(): number;
    private _intervalUnit?;
    get intervalUnit(): string;
    set intervalUnit(value: string);
    get intervalUnitInput(): string;
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#cmk_arn DlmLifecyclePolicy#cmk_arn}
    */
    readonly cmkArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#copy_tags DlmLifecyclePolicy#copy_tags}
    */
    readonly copyTags?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#encrypted DlmLifecyclePolicy#encrypted}
    */
    readonly encrypted: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#target DlmLifecyclePolicy#target}
    */
    readonly target: string;
    /**
    * deprecate_rule block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#deprecate_rule DlmLifecyclePolicy#deprecate_rule}
    */
    readonly deprecateRule?: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule;
    /**
    * retain_rule block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#retain_rule DlmLifecyclePolicy#retain_rule}
    */
    readonly retainRule?: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule;
}
export declare function dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule): any;
export interface DlmLifecyclePolicyPolicyDetailsScheduleRetainRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#count DlmLifecyclePolicy#count}
    */
    readonly count: number;
}
export declare function dlmLifecyclePolicyPolicyDetailsScheduleRetainRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleRetainRule): any;
export declare class DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DlmLifecyclePolicyPolicyDetailsScheduleRetainRule | undefined;
    set internalValue(value: DlmLifecyclePolicyPolicyDetailsScheduleRetainRule | undefined);
    private _count?;
    get count(): number;
    set count(value: number);
    get countInput(): number;
}
export interface DlmLifecyclePolicyPolicyDetailsSchedule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#copy_tags DlmLifecyclePolicy#copy_tags}
    */
    readonly copyTags?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#name DlmLifecyclePolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#tags_to_add DlmLifecyclePolicy#tags_to_add}
    */
    readonly tagsToAdd?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * create_rule block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#create_rule DlmLifecyclePolicy#create_rule}
    */
    readonly createRule: DlmLifecyclePolicyPolicyDetailsScheduleCreateRule;
    /**
    * cross_region_copy_rule block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#cross_region_copy_rule DlmLifecyclePolicy#cross_region_copy_rule}
    */
    readonly crossRegionCopyRule?: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule[];
    /**
    * retain_rule block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#retain_rule DlmLifecyclePolicy#retain_rule}
    */
    readonly retainRule: DlmLifecyclePolicyPolicyDetailsScheduleRetainRule;
}
export declare function dlmLifecyclePolicyPolicyDetailsScheduleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedule): any;
export interface DlmLifecyclePolicyPolicyDetails {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#resource_types DlmLifecyclePolicy#resource_types}
    */
    readonly resourceTypes: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#target_tags DlmLifecyclePolicy#target_tags}
    */
    readonly targetTags: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * schedule block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#schedule DlmLifecyclePolicy#schedule}
    */
    readonly schedule: DlmLifecyclePolicyPolicyDetailsSchedule[];
}
export declare function dlmLifecyclePolicyPolicyDetailsToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsOutputReference | DlmLifecyclePolicyPolicyDetails): any;
export declare class DlmLifecyclePolicyPolicyDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DlmLifecyclePolicyPolicyDetails | undefined;
    set internalValue(value: DlmLifecyclePolicyPolicyDetails | undefined);
    private _resourceTypes?;
    get resourceTypes(): string[];
    set resourceTypes(value: string[]);
    get resourceTypesInput(): string[];
    private _targetTags?;
    get targetTags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set targetTags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    get targetTagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _schedule?;
    get schedule(): DlmLifecyclePolicyPolicyDetailsSchedule[];
    set schedule(value: DlmLifecyclePolicyPolicyDetailsSchedule[]);
    get scheduleInput(): DlmLifecyclePolicyPolicyDetailsSchedule[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html aws_dlm_lifecycle_policy}
*/
export declare class DlmLifecyclePolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html aws_dlm_lifecycle_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DlmLifecyclePolicyConfig
    */
    constructor(scope: Construct, id: string, config: DlmLifecyclePolicyConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    get descriptionInput(): string;
    private _executionRoleArn?;
    get executionRoleArn(): string;
    set executionRoleArn(value: string);
    get executionRoleArnInput(): string;
    get id(): string;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string;
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
    private _policyDetails;
    get policyDetails(): DlmLifecyclePolicyPolicyDetailsOutputReference;
    putPolicyDetails(value: DlmLifecyclePolicyPolicyDetails): void;
    get policyDetailsInput(): DlmLifecyclePolicyPolicyDetails;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=dlm-lifecycle-policy.d.ts.map