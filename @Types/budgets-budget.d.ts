import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Budgets
*/
export interface BudgetsBudgetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#account_id BudgetsBudget#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#budget_type BudgetsBudget#budget_type}
    */
    readonly budgetType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#cost_filters BudgetsBudget#cost_filters}
    */
    readonly costFilters?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#limit_amount BudgetsBudget#limit_amount}
    */
    readonly limitAmount: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#limit_unit BudgetsBudget#limit_unit}
    */
    readonly limitUnit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#name BudgetsBudget#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#name_prefix BudgetsBudget#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#time_period_end BudgetsBudget#time_period_end}
    */
    readonly timePeriodEnd?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#time_period_start BudgetsBudget#time_period_start}
    */
    readonly timePeriodStart?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#time_unit BudgetsBudget#time_unit}
    */
    readonly timeUnit: string;
    /**
    * cost_filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#cost_filter BudgetsBudget#cost_filter}
    */
    readonly costFilter?: BudgetsBudgetCostFilter[];
    /**
    * cost_types block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#cost_types BudgetsBudget#cost_types}
    */
    readonly costTypes?: BudgetsBudgetCostTypes;
    /**
    * notification block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#notification BudgetsBudget#notification}
    */
    readonly notification?: BudgetsBudgetNotification[];
}
export interface BudgetsBudgetCostFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#name BudgetsBudget#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#values BudgetsBudget#values}
    */
    readonly values: string[];
}
export declare function budgetsBudgetCostFilterToTerraform(struct?: BudgetsBudgetCostFilter): any;
export interface BudgetsBudgetCostTypes {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#include_credit BudgetsBudget#include_credit}
    */
    readonly includeCredit?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#include_discount BudgetsBudget#include_discount}
    */
    readonly includeDiscount?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#include_other_subscription BudgetsBudget#include_other_subscription}
    */
    readonly includeOtherSubscription?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#include_recurring BudgetsBudget#include_recurring}
    */
    readonly includeRecurring?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#include_refund BudgetsBudget#include_refund}
    */
    readonly includeRefund?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#include_subscription BudgetsBudget#include_subscription}
    */
    readonly includeSubscription?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#include_support BudgetsBudget#include_support}
    */
    readonly includeSupport?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#include_tax BudgetsBudget#include_tax}
    */
    readonly includeTax?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#include_upfront BudgetsBudget#include_upfront}
    */
    readonly includeUpfront?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#use_amortized BudgetsBudget#use_amortized}
    */
    readonly useAmortized?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#use_blended BudgetsBudget#use_blended}
    */
    readonly useBlended?: boolean | cdktf.IResolvable;
}
export declare function budgetsBudgetCostTypesToTerraform(struct?: BudgetsBudgetCostTypesOutputReference | BudgetsBudgetCostTypes): any;
export declare class BudgetsBudgetCostTypesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): BudgetsBudgetCostTypes | undefined;
    set internalValue(value: BudgetsBudgetCostTypes | undefined);
    private _includeCredit?;
    get includeCredit(): boolean | cdktf.IResolvable;
    set includeCredit(value: boolean | cdktf.IResolvable);
    resetIncludeCredit(): void;
    get includeCreditInput(): boolean | cdktf.IResolvable;
    private _includeDiscount?;
    get includeDiscount(): boolean | cdktf.IResolvable;
    set includeDiscount(value: boolean | cdktf.IResolvable);
    resetIncludeDiscount(): void;
    get includeDiscountInput(): boolean | cdktf.IResolvable;
    private _includeOtherSubscription?;
    get includeOtherSubscription(): boolean | cdktf.IResolvable;
    set includeOtherSubscription(value: boolean | cdktf.IResolvable);
    resetIncludeOtherSubscription(): void;
    get includeOtherSubscriptionInput(): boolean | cdktf.IResolvable;
    private _includeRecurring?;
    get includeRecurring(): boolean | cdktf.IResolvable;
    set includeRecurring(value: boolean | cdktf.IResolvable);
    resetIncludeRecurring(): void;
    get includeRecurringInput(): boolean | cdktf.IResolvable;
    private _includeRefund?;
    get includeRefund(): boolean | cdktf.IResolvable;
    set includeRefund(value: boolean | cdktf.IResolvable);
    resetIncludeRefund(): void;
    get includeRefundInput(): boolean | cdktf.IResolvable;
    private _includeSubscription?;
    get includeSubscription(): boolean | cdktf.IResolvable;
    set includeSubscription(value: boolean | cdktf.IResolvable);
    resetIncludeSubscription(): void;
    get includeSubscriptionInput(): boolean | cdktf.IResolvable;
    private _includeSupport?;
    get includeSupport(): boolean | cdktf.IResolvable;
    set includeSupport(value: boolean | cdktf.IResolvable);
    resetIncludeSupport(): void;
    get includeSupportInput(): boolean | cdktf.IResolvable;
    private _includeTax?;
    get includeTax(): boolean | cdktf.IResolvable;
    set includeTax(value: boolean | cdktf.IResolvable);
    resetIncludeTax(): void;
    get includeTaxInput(): boolean | cdktf.IResolvable;
    private _includeUpfront?;
    get includeUpfront(): boolean | cdktf.IResolvable;
    set includeUpfront(value: boolean | cdktf.IResolvable);
    resetIncludeUpfront(): void;
    get includeUpfrontInput(): boolean | cdktf.IResolvable;
    private _useAmortized?;
    get useAmortized(): boolean | cdktf.IResolvable;
    set useAmortized(value: boolean | cdktf.IResolvable);
    resetUseAmortized(): void;
    get useAmortizedInput(): boolean | cdktf.IResolvable;
    private _useBlended?;
    get useBlended(): boolean | cdktf.IResolvable;
    set useBlended(value: boolean | cdktf.IResolvable);
    resetUseBlended(): void;
    get useBlendedInput(): boolean | cdktf.IResolvable;
}
export interface BudgetsBudgetNotification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#comparison_operator BudgetsBudget#comparison_operator}
    */
    readonly comparisonOperator: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#notification_type BudgetsBudget#notification_type}
    */
    readonly notificationType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#subscriber_email_addresses BudgetsBudget#subscriber_email_addresses}
    */
    readonly subscriberEmailAddresses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#subscriber_sns_topic_arns BudgetsBudget#subscriber_sns_topic_arns}
    */
    readonly subscriberSnsTopicArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#threshold BudgetsBudget#threshold}
    */
    readonly threshold: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#threshold_type BudgetsBudget#threshold_type}
    */
    readonly thresholdType: string;
}
export declare function budgetsBudgetNotificationToTerraform(struct?: BudgetsBudgetNotification): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html aws_budgets_budget}
*/
export declare class BudgetsBudget extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html aws_budgets_budget} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BudgetsBudgetConfig
    */
    constructor(scope: Construct, id: string, config: BudgetsBudgetConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get arn(): string;
    private _budgetType?;
    get budgetType(): string;
    set budgetType(value: string);
    get budgetTypeInput(): string;
    private _costFilters?;
    get costFilters(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set costFilters(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetCostFilters(): void;
    get costFiltersInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    get id(): string;
    private _limitAmount?;
    get limitAmount(): string;
    set limitAmount(value: string);
    get limitAmountInput(): string;
    private _limitUnit?;
    get limitUnit(): string;
    set limitUnit(value: string);
    get limitUnitInput(): string;
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
    private _timePeriodEnd?;
    get timePeriodEnd(): string;
    set timePeriodEnd(value: string);
    resetTimePeriodEnd(): void;
    get timePeriodEndInput(): string;
    private _timePeriodStart?;
    get timePeriodStart(): string;
    set timePeriodStart(value: string);
    resetTimePeriodStart(): void;
    get timePeriodStartInput(): string;
    private _timeUnit?;
    get timeUnit(): string;
    set timeUnit(value: string);
    get timeUnitInput(): string;
    private _costFilter?;
    get costFilter(): BudgetsBudgetCostFilter[];
    set costFilter(value: BudgetsBudgetCostFilter[]);
    resetCostFilter(): void;
    get costFilterInput(): BudgetsBudgetCostFilter[];
    private _costTypes;
    get costTypes(): BudgetsBudgetCostTypesOutputReference;
    putCostTypes(value: BudgetsBudgetCostTypes): void;
    resetCostTypes(): void;
    get costTypesInput(): BudgetsBudgetCostTypes;
    private _notification?;
    get notification(): BudgetsBudgetNotification[];
    set notification(value: BudgetsBudgetNotification[]);
    resetNotification(): void;
    get notificationInput(): BudgetsBudgetNotification[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=budgets-budget.d.ts.map