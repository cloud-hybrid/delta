// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function budgetsBudgetCostFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values),
    };
}
export function budgetsBudgetCostTypesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        include_credit: cdktf.booleanToTerraform(struct.includeCredit),
        include_discount: cdktf.booleanToTerraform(struct.includeDiscount),
        include_other_subscription: cdktf.booleanToTerraform(struct.includeOtherSubscription),
        include_recurring: cdktf.booleanToTerraform(struct.includeRecurring),
        include_refund: cdktf.booleanToTerraform(struct.includeRefund),
        include_subscription: cdktf.booleanToTerraform(struct.includeSubscription),
        include_support: cdktf.booleanToTerraform(struct.includeSupport),
        include_tax: cdktf.booleanToTerraform(struct.includeTax),
        include_upfront: cdktf.booleanToTerraform(struct.includeUpfront),
        use_amortized: cdktf.booleanToTerraform(struct.useAmortized),
        use_blended: cdktf.booleanToTerraform(struct.useBlended),
    };
}
export class BudgetsBudgetCostTypesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._includeCredit) {
            hasAnyValues = true;
            internalValueResult.includeCredit = this._includeCredit;
        }
        if (this._includeDiscount) {
            hasAnyValues = true;
            internalValueResult.includeDiscount = this._includeDiscount;
        }
        if (this._includeOtherSubscription) {
            hasAnyValues = true;
            internalValueResult.includeOtherSubscription = this._includeOtherSubscription;
        }
        if (this._includeRecurring) {
            hasAnyValues = true;
            internalValueResult.includeRecurring = this._includeRecurring;
        }
        if (this._includeRefund) {
            hasAnyValues = true;
            internalValueResult.includeRefund = this._includeRefund;
        }
        if (this._includeSubscription) {
            hasAnyValues = true;
            internalValueResult.includeSubscription = this._includeSubscription;
        }
        if (this._includeSupport) {
            hasAnyValues = true;
            internalValueResult.includeSupport = this._includeSupport;
        }
        if (this._includeTax) {
            hasAnyValues = true;
            internalValueResult.includeTax = this._includeTax;
        }
        if (this._includeUpfront) {
            hasAnyValues = true;
            internalValueResult.includeUpfront = this._includeUpfront;
        }
        if (this._useAmortized) {
            hasAnyValues = true;
            internalValueResult.useAmortized = this._useAmortized;
        }
        if (this._useBlended) {
            hasAnyValues = true;
            internalValueResult.useBlended = this._useBlended;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._includeCredit = undefined;
            this._includeDiscount = undefined;
            this._includeOtherSubscription = undefined;
            this._includeRecurring = undefined;
            this._includeRefund = undefined;
            this._includeSubscription = undefined;
            this._includeSupport = undefined;
            this._includeTax = undefined;
            this._includeUpfront = undefined;
            this._useAmortized = undefined;
            this._useBlended = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._includeCredit = value.includeCredit;
            this._includeDiscount = value.includeDiscount;
            this._includeOtherSubscription = value.includeOtherSubscription;
            this._includeRecurring = value.includeRecurring;
            this._includeRefund = value.includeRefund;
            this._includeSubscription = value.includeSubscription;
            this._includeSupport = value.includeSupport;
            this._includeTax = value.includeTax;
            this._includeUpfront = value.includeUpfront;
            this._useAmortized = value.useAmortized;
            this._useBlended = value.useBlended;
        }
    }
    // include_credit - computed: false, optional: true, required: false
    _includeCredit;
    get includeCredit() {
        return this.getBooleanAttribute('include_credit');
    }
    set includeCredit(value) {
        this._includeCredit = value;
    }
    resetIncludeCredit() {
        this._includeCredit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeCreditInput() {
        return this._includeCredit;
    }
    // include_discount - computed: false, optional: true, required: false
    _includeDiscount;
    get includeDiscount() {
        return this.getBooleanAttribute('include_discount');
    }
    set includeDiscount(value) {
        this._includeDiscount = value;
    }
    resetIncludeDiscount() {
        this._includeDiscount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeDiscountInput() {
        return this._includeDiscount;
    }
    // include_other_subscription - computed: false, optional: true, required: false
    _includeOtherSubscription;
    get includeOtherSubscription() {
        return this.getBooleanAttribute('include_other_subscription');
    }
    set includeOtherSubscription(value) {
        this._includeOtherSubscription = value;
    }
    resetIncludeOtherSubscription() {
        this._includeOtherSubscription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeOtherSubscriptionInput() {
        return this._includeOtherSubscription;
    }
    // include_recurring - computed: false, optional: true, required: false
    _includeRecurring;
    get includeRecurring() {
        return this.getBooleanAttribute('include_recurring');
    }
    set includeRecurring(value) {
        this._includeRecurring = value;
    }
    resetIncludeRecurring() {
        this._includeRecurring = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeRecurringInput() {
        return this._includeRecurring;
    }
    // include_refund - computed: false, optional: true, required: false
    _includeRefund;
    get includeRefund() {
        return this.getBooleanAttribute('include_refund');
    }
    set includeRefund(value) {
        this._includeRefund = value;
    }
    resetIncludeRefund() {
        this._includeRefund = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeRefundInput() {
        return this._includeRefund;
    }
    // include_subscription - computed: false, optional: true, required: false
    _includeSubscription;
    get includeSubscription() {
        return this.getBooleanAttribute('include_subscription');
    }
    set includeSubscription(value) {
        this._includeSubscription = value;
    }
    resetIncludeSubscription() {
        this._includeSubscription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeSubscriptionInput() {
        return this._includeSubscription;
    }
    // include_support - computed: false, optional: true, required: false
    _includeSupport;
    get includeSupport() {
        return this.getBooleanAttribute('include_support');
    }
    set includeSupport(value) {
        this._includeSupport = value;
    }
    resetIncludeSupport() {
        this._includeSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeSupportInput() {
        return this._includeSupport;
    }
    // include_tax - computed: false, optional: true, required: false
    _includeTax;
    get includeTax() {
        return this.getBooleanAttribute('include_tax');
    }
    set includeTax(value) {
        this._includeTax = value;
    }
    resetIncludeTax() {
        this._includeTax = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeTaxInput() {
        return this._includeTax;
    }
    // include_upfront - computed: false, optional: true, required: false
    _includeUpfront;
    get includeUpfront() {
        return this.getBooleanAttribute('include_upfront');
    }
    set includeUpfront(value) {
        this._includeUpfront = value;
    }
    resetIncludeUpfront() {
        this._includeUpfront = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeUpfrontInput() {
        return this._includeUpfront;
    }
    // use_amortized - computed: false, optional: true, required: false
    _useAmortized;
    get useAmortized() {
        return this.getBooleanAttribute('use_amortized');
    }
    set useAmortized(value) {
        this._useAmortized = value;
    }
    resetUseAmortized() {
        this._useAmortized = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get useAmortizedInput() {
        return this._useAmortized;
    }
    // use_blended - computed: false, optional: true, required: false
    _useBlended;
    get useBlended() {
        return this.getBooleanAttribute('use_blended');
    }
    set useBlended(value) {
        this._useBlended = value;
    }
    resetUseBlended() {
        this._useBlended = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get useBlendedInput() {
        return this._useBlended;
    }
}
export function budgetsBudgetNotificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        notification_type: cdktf.stringToTerraform(struct.notificationType),
        subscriber_email_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct.subscriberEmailAddresses),
        subscriber_sns_topic_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.subscriberSnsTopicArns),
        threshold: cdktf.numberToTerraform(struct.threshold),
        threshold_type: cdktf.stringToTerraform(struct.thresholdType),
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html aws_budgets_budget}
*/
export class BudgetsBudget extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_budgets_budget";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html aws_budgets_budget} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BudgetsBudgetConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_budgets_budget',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._accountId = config.accountId;
        this._budgetType = config.budgetType;
        this._costFilters = config.costFilters;
        this._limitAmount = config.limitAmount;
        this._limitUnit = config.limitUnit;
        this._name = config.name;
        this._namePrefix = config.namePrefix;
        this._timePeriodEnd = config.timePeriodEnd;
        this._timePeriodStart = config.timePeriodStart;
        this._timeUnit = config.timeUnit;
        this._costFilter = config.costFilter;
        this._costTypes.internalValue = config.costTypes;
        this._notification = config.notification;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: true, optional: true, required: false
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // budget_type - computed: false, optional: false, required: true
    _budgetType;
    get budgetType() {
        return this.getStringAttribute('budget_type');
    }
    set budgetType(value) {
        this._budgetType = value;
    }
    // Temporarily expose input value. Use with caution.
    get budgetTypeInput() {
        return this._budgetType;
    }
    // cost_filters - computed: true, optional: true, required: false
    _costFilters;
    get costFilters() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('cost_filters');
    }
    set costFilters(value) {
        this._costFilters = value;
    }
    resetCostFilters() {
        this._costFilters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get costFiltersInput() {
        return this._costFilters;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // limit_amount - computed: false, optional: false, required: true
    _limitAmount;
    get limitAmount() {
        return this.getStringAttribute('limit_amount');
    }
    set limitAmount(value) {
        this._limitAmount = value;
    }
    // Temporarily expose input value. Use with caution.
    get limitAmountInput() {
        return this._limitAmount;
    }
    // limit_unit - computed: false, optional: false, required: true
    _limitUnit;
    get limitUnit() {
        return this.getStringAttribute('limit_unit');
    }
    set limitUnit(value) {
        this._limitUnit = value;
    }
    // Temporarily expose input value. Use with caution.
    get limitUnitInput() {
        return this._limitUnit;
    }
    // name - computed: true, optional: true, required: false
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // name_prefix - computed: true, optional: true, required: false
    _namePrefix;
    get namePrefix() {
        return this.getStringAttribute('name_prefix');
    }
    set namePrefix(value) {
        this._namePrefix = value;
    }
    resetNamePrefix() {
        this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get namePrefixInput() {
        return this._namePrefix;
    }
    // time_period_end - computed: false, optional: true, required: false
    _timePeriodEnd;
    get timePeriodEnd() {
        return this.getStringAttribute('time_period_end');
    }
    set timePeriodEnd(value) {
        this._timePeriodEnd = value;
    }
    resetTimePeriodEnd() {
        this._timePeriodEnd = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timePeriodEndInput() {
        return this._timePeriodEnd;
    }
    // time_period_start - computed: true, optional: true, required: false
    _timePeriodStart;
    get timePeriodStart() {
        return this.getStringAttribute('time_period_start');
    }
    set timePeriodStart(value) {
        this._timePeriodStart = value;
    }
    resetTimePeriodStart() {
        this._timePeriodStart = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timePeriodStartInput() {
        return this._timePeriodStart;
    }
    // time_unit - computed: false, optional: false, required: true
    _timeUnit;
    get timeUnit() {
        return this.getStringAttribute('time_unit');
    }
    set timeUnit(value) {
        this._timeUnit = value;
    }
    // Temporarily expose input value. Use with caution.
    get timeUnitInput() {
        return this._timeUnit;
    }
    // cost_filter - computed: false, optional: true, required: false
    _costFilter;
    get costFilter() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('cost_filter');
    }
    set costFilter(value) {
        this._costFilter = value;
    }
    resetCostFilter() {
        this._costFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get costFilterInput() {
        return this._costFilter;
    }
    // cost_types - computed: false, optional: true, required: false
    _costTypes = new BudgetsBudgetCostTypesOutputReference(this, "cost_types", true);
    get costTypes() {
        return this._costTypes;
    }
    putCostTypes(value) {
        this._costTypes.internalValue = value;
    }
    resetCostTypes() {
        this._costTypes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get costTypesInput() {
        return this._costTypes.internalValue;
    }
    // notification - computed: false, optional: true, required: false
    _notification;
    get notification() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('notification');
    }
    set notification(value) {
        this._notification = value;
    }
    resetNotification() {
        this._notification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get notificationInput() {
        return this._notification;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            budget_type: cdktf.stringToTerraform(this._budgetType),
            cost_filters: cdktf.hashMapper(cdktf.anyToTerraform)(this._costFilters),
            limit_amount: cdktf.stringToTerraform(this._limitAmount),
            limit_unit: cdktf.stringToTerraform(this._limitUnit),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            time_period_end: cdktf.stringToTerraform(this._timePeriodEnd),
            time_period_start: cdktf.stringToTerraform(this._timePeriodStart),
            time_unit: cdktf.stringToTerraform(this._timeUnit),
            cost_filter: cdktf.listMapper(budgetsBudgetCostFilterToTerraform)(this._costFilter),
            cost_types: budgetsBudgetCostTypesToTerraform(this._costTypes.internalValue),
            notification: cdktf.listMapper(budgetsBudgetNotificationToTerraform)(this._notification),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVkZ2V0cy1idWRnZXQuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImJ1ZGdldHMtYnVkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQTRFL0IsTUFBTSxVQUFVLGtDQUFrQyxDQUFDLE1BQWdDO0lBQ2pGLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLE1BQU0sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7S0FDbEUsQ0FBQTtBQUNILENBQUM7QUFpREQsTUFBTSxVQUFVLGlDQUFpQyxDQUFDLE1BQXVFO0lBQ3ZILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsY0FBYyxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO1FBQy9ELGdCQUFnQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsZUFBZSxDQUFDO1FBQ25FLDBCQUEwQixFQUFFLEtBQUssQ0FB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