// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        predefined_metric_type: cdktf.stringToTerraform(struct.predefinedMetricType),
        resource_label: cdktf.stringToTerraform(struct.resourceLabel),
    };
}
export class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._predefinedMetricType) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricType = this._predefinedMetricType;
        }
        if (this._resourceLabel) {
            hasAnyValues = true;
            internalValueResult.resourceLabel = this._resourceLabel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._predefinedMetricType = undefined;
            this._resourceLabel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._predefinedMetricType = value.predefinedMetricType;
            this._resourceLabel = value.resourceLabel;
        }
    }
    // predefined_metric_type - computed: false, optional: false, required: true
    _predefinedMetricType;
    get predefinedMetricType() {
        return this.getStringAttribute('predefined_metric_type');
    }
    set predefinedMetricType(value) {
        this._predefinedMetricType = value;
    }
    // Temporarily expose input value. Use with caution.
    get predefinedMetricTypeInput() {
        return this._predefinedMetricType;
    }
    // resource_label - computed: false, optional: false, required: true
    _resourceLabel;
    get resourceLabel() {
        return this.getStringAttribute('resource_label');
    }
    set resourceLabel(value) {
        this._resourceLabel = value;
    }
    // Temporarily expose input value. Use with caution.
    get resourceLabelInput() {
        return this._resourceLabel;
    }
}
export function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        predefined_metric_type: cdktf.stringToTerraform(struct.predefinedMetricType),
        resource_label: cdktf.stringToTerraform(struct.resourceLabel),
    };
}
export class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._predefinedMetricType) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricType = this._predefinedMetricType;
        }
        if (this._resourceLabel) {
            hasAnyValues = true;
            internalValueResult.resourceLabel = this._resourceLabel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._predefinedMetricType = undefined;
            this._resourceLabel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._predefinedMetricType = value.predefinedMetricType;
            this._resourceLabel = value.resourceLabel;
        }
    }
    // predefined_metric_type - computed: false, optional: false, required: true
    _predefinedMetricType;
    get predefinedMetricType() {
        return this.getStringAttribute('predefined_metric_type');
    }
    set predefinedMetricType(value) {
        this._predefinedMetricType = value;
    }
    // Temporarily expose input value. Use with caution.
    get predefinedMetricTypeInput() {
        return this._predefinedMetricType;
    }
    // resource_label - computed: false, optional: false, required: true
    _resourceLabel;
    get resourceLabel() {
        return this.getStringAttribute('resource_label');
    }
    set resourceLabel(value) {
        this._resourceLabel = value;
    }
    // Temporarily expose input value. Use with caution.
    get resourceLabelInput() {
        return this._resourceLabel;
    }
}
export function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        predefined_metric_type: cdktf.stringToTerraform(struct.predefinedMetricType),
        resource_label: cdktf.stringToTerraform(struct.resourceLabel),
    };
}
export class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._predefinedMetricType) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricType = this._predefinedMetricType;
        }
        if (this._resourceLabel) {
            hasAnyValues = true;
            internalValueResult.resourceLabel = this._resourceLabel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._predefinedMetricType = undefined;
            this._resourceLabel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._predefinedMetricType = value.predefinedMetricType;
            this._resourceLabel = value.resourceLabel;
        }
    }
    // predefined_metric_type - computed: false, optional: false, required: true
    _predefinedMetricType;
    get predefinedMetricType() {
        return this.getStringAttribute('predefined_metric_type');
    }
    set predefinedMetricType(value) {
        this._predefinedMetricType = value;
    }
    // Temporarily expose input value. Use with caution.
    get predefinedMetricTypeInput() {
        return this._predefinedMetricType;
    }
    // resource_label - computed: false, optional: false, required: true
    _resourceLabel;
    get resourceLabel() {
        return this.getStringAttribute('resource_label');
    }
    set resourceLabel(value) {
        this._resourceLabel = value;
    }
    // Temporarily expose input value. Use with caution.
    get resourceLabelInput() {
        return this._resourceLabel;
    }
}
export function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        target_value: cdktf.numberToTerraform(struct.targetValue),
        predefined_load_metric_specification: autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToTerraform(struct.predefinedLoadMetricSpecification),
        predefined_metric_pair_specification: autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationToTerraform(struct.predefinedMetricPairSpecification),
        predefined_scaling_metric_specification: autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToTerraform(struct.predefinedScalingMetricSpecification),
    };
}
export class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._targetValue) {
            hasAnyValues = true;
            internalValueResult.targetValue = this._targetValue;
        }
        if (this._predefinedLoadMetricSpecification?.internalValue) {
            hasAnyValues = true;
            internalValueResult.predefinedLoadMetricSpecification = this._predefinedLoadMetricSpecification?.internalValue;
        }
        if (this._predefinedMetricPairSpecification?.internalValue) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricPairSpecification = this._predefinedMetricPairSpecification?.internalValue;
        }
        if (this._predefinedScalingMetricSpecification?.internalValue) {
            hasAnyValues = true;
            internalValueResult.predefinedScalingMetricSpecification = this._predefinedScalingMetricSpecification?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._targetValue = undefined;
            this._predefinedLoadMetricSpecification.internalValue = undefined;
            this._predefinedMetricPairSpecification.internalValue = undefined;
            this._predefinedScalingMetricSpecification.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._targetValue = value.targetValue;
            this._predefinedLoadMetricSpecification.internalValue = value.predefinedLoadMetricSpecification;
            this._predefinedMetricPairSpecification.internalValue = value.predefinedMetricPairSpecification;
            this._predefinedScalingMetricSpecification.internalValue = value.predefinedScalingMetricSpecification;
        }
    }
    // target_value - computed: false, optional: false, required: true
    _targetValue;
    get targetValue() {
        return this.getNumberAttribute('target_value');
    }
    set targetValue(value) {
        this._targetValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get targetValueInput() {
        return this._targetValue;
    }
    // predefined_load_metric_specification - computed: false, optional: true, required: false
    _predefinedLoadMetricSpecification = new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference(this, "predefined_load_metric_specification", true);
    get predefinedLoadMetricSpecification() {
        return this._predefinedLoadMetricSpecification;
    }
    putPredefinedLoadMetricSpecification(value) {
        this._predefinedLoadMetricSpecification.internalValue = value;
    }
    resetPredefinedLoadMetricSpecification() {
        this._predefinedLoadMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get predefinedLoadMetricSpecificationInput() {
        return this._predefinedLoadMetricSpecification.internalValue;
    }
    // predefined_metric_pair_specification - computed: false, optional: true, required: false
    _predefinedMetricPairSpecification = new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference(this, "predefined_metric_pair_specification", true);
    get predefinedMetricPairSpecification() {
        return this._predefinedMetricPairSpecification;
    }
    putPredefinedMetricPairSpecification(value) {
        this._predefinedMetricPairSpecification.internalValue = value;
    }
    resetPredefinedMetricPairSpecification() {
        this._predefinedMetricPairSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get predefinedMetricPairSpecificationInput() {
        return this._predefinedMetricPairSpecification.internalValue;
    }
    // predefined_scaling_metric_specification - computed: false, optional: true, required: false
    _predefinedScalingMetricSpecification = new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference(this, "predefined_scaling_metric_specification", true);
    get predefinedScalingMetricSpecification() {
        return this._predefinedScalingMetricSpecification;
    }
    putPredefinedScalingMetricSpecification(value) {
        this._predefinedScalingMetricSpecification.internalValue = value;
    }
    resetPredefinedScalingMetricSpecification() {
        this._predefinedScalingMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get predefinedScalingMetricSpecificationInput() {
        return this._predefinedScalingMetricSpecification.internalValue;
    }
}
export function autoscalingPolicyPredictiveScalingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max_capacity_breach_behavior: cdktf.stringToTerraform(struct.maxCapacityBreachBehavior),
        max_capacity_buffer: cdktf.stringToTerraform(struct.maxCapacityBuffer),
        mode: cdktf.stringToTerraform(struct.mode),
        scheduling_buffer_time: cdktf.stringToTerraform(struct.schedulingBufferTime),
        metric_specification: autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationToTerraform(struct.metricSpecification),
    };
}
export class AutoscalingPolicyPredictiveScalingConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._maxCapacityBreachBehavior) {
            hasAnyValues = true;
            internalValueResult.maxCapacityBreachBehavior = this._maxCapacityBreachBehavior;
        }
        if (this._maxCapacityBuffer) {
            hasAnyValues = true;
            internalValueResult.maxCapacityBuffer = this._maxCapacityBuffer;
        }
        if (this._mode) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        if (this._schedulingBufferTime) {
            hasAnyValues = true;
            internalValueResult.schedulingBufferTime = this._schedulingBufferTime;
        }
        if (this._metricSpecification?.internalValue) {
            hasAnyValues = true;
            internalValueResult.metricSpecification = this._metricSpecification?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._maxCapacityBreachBehavior = undefined;
            this._maxCapacityBuffer = undefined;
            this._mode = undefined;
            this._schedulingBufferTime = undefined;
            this._metricSpecification.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._maxCapacityBreachBehavior = value.maxCapacityBreachBehavior;
            this._maxCapacityBuffer = value.maxCapacityBuffer;
            this._mode = value.mode;
            this._schedulingBufferTime = value.schedulingBufferTime;
            this._metricSpecification.internalValue = value.metricSpecification;
        }
    }
    // max_capacity_breach_behavior - computed: false, optional: true, required: false
    _maxCapacityBreachBehavior;
    get maxCapacityBreachBehavior() {
        return this.getStringAttribute('max_capacity_breach_behavior');
    }
    set maxCapacityBreachBehavior(value) {
        this._maxCapacityBreachBehavior = value;
    }
    resetMaxCapacityBreachBehavior() {
        this._maxCapacityBreachBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxCapacityBreachBehaviorInput() {
        return this._maxCapacityBreachBehavior;
    }
    // max_capacity_buffer - computed: false, optional: true, required: false
    _maxCapacityBuffer;
    get maxCapacityBuffer() {
        return this.getStringAttribute('max_capacity_buffer');
    }
    set maxCapacityBuffer(value) {
        this._maxCapacityBuffer = value;
    }
    resetMaxCapacityBuffer() {
        this._maxCapacityBuffer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxCapacityBufferInput() {
        return this._maxCapacityBuffer;
    }
    // mode - computed: false, optional: true, required: false
    _mode;
    get mode() {
        return this.getStringAttribute('mode');
    }
    set mode(value) {
        this._mode = value;
    }
    resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get modeInput() {
        return this._mode;
    }
    // scheduling_buffer_time - computed: false, optional: true, required: false
    _schedulingBufferTime;
    get schedulingBufferTime() {
        return this.getStringAttribute('scheduling_buffer_time');
    }
    set schedulingBufferTime(value) {
        this._schedulingBufferTime = value;
    }
    resetSchedulingBufferTime() {
        this._schedulingBufferTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get schedulingBufferTimeInput() {
        return this._schedulingBufferTime;
    }
    // metric_specification - computed: false, optional: false, required: true
    _metricSpecification = new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference(this, "metric_specification", true);
    get metricSpecification() {
        return this._metricSpecification;
    }
    putMetricSpecification(value) {
        this._metricSpecification.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get metricSpecificationInput() {
        return this._metricSpecification.internalValue;
    }
}
export function autoscalingPolicyStepAdjustmentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        metric_interval_lower_bound: cdktf.stringToTerraform(struct.metricIntervalLowerBound),
        metric_interval_upper_bound: cdktf.stringToTerraform(struct.metricIntervalUpperBound),
        scaling_adjustment: cdktf.numberToTerraform(struct.scalingAdjustment),
    };
}
export function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        metric_name: cdktf.stringToTerraform(struct.metricName),
        namespace: cdktf.stringToTerraform(struct.namespace),
        statistic: cdktf.stringToTerraform(struct.statistic),
        unit: cdktf.stringToTerraform(struct.unit),
        metric_dimension: cdktf.listMapper(autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToTerraform)(struct.metricDimension),
    };
}
export class AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._metricName) {
            hasAnyValues = true;
            internalValueResult.metricName = this._metricName;
        }
        if (this._namespace) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        if (this._statistic) {
            hasAnyValues = true;
            internalValueResult.statistic = this._statistic;
        }
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._metricDimension) {
            hasAnyValues = true;
            internalValueResult.metricDimension = this._metricDimension;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._metricName = undefined;
            this._namespace = undefined;
            this._statistic = undefined;
            this._unit = undefined;
            this._metricDimension = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._metricName = value.metricName;
            this._namespace = value.namespace;
            this._statistic = value.statistic;
            this._unit = value.unit;
            this._metricDimension = value.metricDimension;
        }
    }
    // metric_name - computed: false, optional: false, required: true
    _metricName;
    get metricName() {
        return this.getStringAttribute('metric_name');
    }
    set metricName(value) {
        this._metricName = value;
    }
    // Temporarily expose input value. Use with caution.
    get metricNameInput() {
        return this._metricName;
    }
    // namespace - computed: false, optional: false, required: true
    _namespace;
    get namespace() {
        return this.getStringAttribute('namespace');
    }
    set namespace(value) {
        this._namespace = value;
    }
    // Temporarily expose input value. Use with caution.
    get namespaceInput() {
        return this._namespace;
    }
    // statistic - computed: false, optional: false, required: true
    _statistic;
    get statistic() {
        return this.getStringAttribute('statistic');
    }
    set statistic(value) {
        this._statistic = value;
    }
    // Temporarily expose input value. Use with caution.
    get statisticInput() {
        return this._statistic;
    }
    // unit - computed: false, optional: true, required: false
    _unit;
    get unit() {
        return this.getStringAttribute('unit');
    }
    set unit(value) {
        this._unit = value;
    }
    resetUnit() {
        this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get unitInput() {
        return this._unit;
    }
    // metric_dimension - computed: false, optional: true, required: false
    _metricDimension;
    get metricDimension() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('metric_dimension');
    }
    set metricDimension(value) {
        this._metricDimension = value;
    }
    resetMetricDimension() {
        this._metricDimension = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get metricDimensionInput() {
        return this._metricDimension;
    }
}
export function autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        predefined_metric_type: cdktf.stringToTerraform(struct.predefinedMetricType),
        resource_label: cdktf.stringToTerraform(struct.resourceLabel),
    };
}
export class AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._predefinedMetricType) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricType = this._predefinedMetricType;
        }
        if (this._resourceLabel) {
            hasAnyValues = true;
            internalValueResult.resourceLabel = this._resourceLabel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._predefinedMetricType = undefined;
            this._resourceLabel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._predefinedMetricType = value.predefinedMetricType;
            this._resourceLabel = value.resourceLabel;
        }
    }
    // predefined_metric_type - computed: false, optional: false, required: true
    _predefinedMetricType;
    get predefinedMetricType() {
        return this.getStringAttribute('predefined_metric_type');
    }
    set predefinedMetricType(value) {
        this._predefinedMetricType = value;
    }
    // Temporarily expose input value. Use with caution.
    get predefinedMetricTypeInput() {
        return this._predefinedMetricType;
    }
    // resource_label - computed: false, optional: true, required: false
    _resourceLabel;
    get resourceLabel() {
        return this.getStringAttribute('resource_label');
    }
    set resourceLabel(value) {
        this._resourceLabel = value;
    }
    resetResourceLabel() {
        this._resourceLabel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceLabelInput() {
        return this._resourceLabel;
    }
}
export function autoscalingPolicyTargetTrackingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        disable_scale_in: cdktf.booleanToTerraform(struct.disableScaleIn),
        target_value: cdktf.numberToTerraform(struct.targetValue),
        customized_metric_specification: autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToTerraform(struct.customizedMetricSpecification),
        predefined_metric_specification: autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToTerraform(struct.predefinedMetricSpecification),
    };
}
export class AutoscalingPolicyTargetTrackingConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._disableScaleIn) {
            hasAnyValues = true;
            internalValueResult.disableScaleIn = this._disableScaleIn;
        }
        if (this._targetValue) {
            hasAnyValues = true;
            internalValueResult.targetValue = this._targetValue;
        }
        if (this._customizedMetricSpecification?.internalValue) {
            hasAnyValues = true;
            internalValueResult.customizedMetricSpecification = this._customizedMetricSpecification?.internalValue;
        }
        if (this._predefinedMetricSpecification?.internalValue) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricSpecification = this._predefinedMetricSpecification?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._disableScaleIn = undefined;
            this._targetValue = undefined;
            this._customizedMetricSpecification.internalValue = undefined;
            this._predefinedMetricSpecification.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._disableScaleIn = value.disableScaleIn;
            this._targetValue = value.targetValue;
            this._customizedMetricSpecification.internalValue = value.customizedMetricSpecification;
            this._predefinedMetricSpecification.internalValue = value.predefinedMetricSpecification;
        }
    }
    // disable_scale_in - computed: false, optional: true, required: false
    _disableScaleIn;
    get disableScaleIn() {
        return this.getBooleanAttribute('disable_scale_in');
    }
    set disableScaleIn(value) {
        this._disableScaleIn = value;
    }
    resetDisableScaleIn() {
        this._disableScaleIn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get disableScaleInInput() {
        return this._disableScaleIn;
    }
    // target_value - computed: false, optional: false, required: true
    _targetValue;
    get targetValue() {
        return this.getNumberAttribute('target_value');
    }
    set targetValue(value) {
        this._targetValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get targetValueInput() {
        return this._targetValue;
    }
    // customized_metric_specification - computed: false, optional: true, required: false
    _customizedMetricSpecification = new AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference(this, "customized_metric_specification", true);
    get customizedMetricSpecification() {
        return this._customizedMetricSpecification;
    }
    putCustomizedMetricSpecification(value) {
        this._customizedMetricSpecification.internalValue = value;
    }
    resetCustomizedMetricSpecification() {
        this._customizedMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customizedMetricSpecificationInput() {
        return this._customizedMetricSpecification.internalValue;
    }
    // predefined_metric_specification - computed: false, optional: true, required: false
    _predefinedMetricSpecification = new AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference(this, "predefined_metric_specification", true);
    get predefinedMetricSpecification() {
        return this._predefinedMetricSpecification;
    }
    putPredefinedMetricSpecification(value) {
        this._predefinedMetricSpecification.internalValue = value;
    }
    resetPredefinedMetricSpecification() {
        this._predefinedMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get predefinedMetricSpecificationInput() {
        return this._predefinedMetricSpecification.internalValue;
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html aws_autoscaling_policy}
*/
export class AutoscalingPolicy extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_autoscaling_policy";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html aws_autoscaling_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingPolicyConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_autoscaling_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._adjustmentType = config.adjustmentType;
        this._autoscalingGroupName = config.autoscalingGroupName;
        this._cooldown = config.cooldown;
        this._estimatedInstanceWarmup = config.estimatedInstanceWarmup;
        this._metricAggregationType = config.metricAggregationType;
        this._minAdjustmentMagnitude = config.minAdjustmentMagnitude;
        this._name = config.name;
        this._policyType = config.policyType;
        this._scalingAdjustment = config.scalingAdjustment;
        this._predictiveScalingConfiguration.internalValue = config.predictiveScalingConfiguration;
        this._stepAdjustment = config.stepAdjustment;
        this._targetTrackingConfiguration.internalValue = config.targetTrackingConfiguration;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // adjustment_type - computed: false, optional: true, required: false
    _adjustmentType;
    get adjustmentType() {
        return this.getStringAttribute('adjustment_type');
    }
    set adjustmentType(value) {
        this._adjustmentType = value;
    }
    resetAdjustmentType() {
        this._adjustmentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get adjustmentTypeInput() {
        return this._adjustmentType;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // autoscaling_group_name - computed: false, optional: false, required: true
    _autoscalingGroupName;
    get autoscalingGroupName() {
        return this.getStringAttribute('autoscaling_group_name');
    }
    set autoscalingGroupName(value) {
        this._autoscalingGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    get autoscalingGroupNameInput() {
        return this._autoscalingGroupName;
    }
    // cooldown - computed: false, optional: true, required: false
    _cooldown;
    get cooldown() {
        return this.getNumberAttribute('cooldown');
    }
    set cooldown(value) {
        this._cooldown = value;
    }
    resetCooldown() {
        this._cooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cooldownInput() {
        return this._cooldown;
    }
    // estimated_instance_warmup - computed: false, optional: true, required: false
    _estimatedInstanceWarmup;
    get estimatedInstanceWarmup() {
        return this.getNumberAttribute('estimated_instance_warmup');
    }
    set estimatedInstanceWarmup(value) {
        this._estimatedInstanceWarmup = value;
    }
    resetEstimatedInstanceWarmup() {
        this._estimatedInstanceWarmup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get estimatedInstanceWarmupInput() {
        return this._estimatedInstanceWarmup;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // metric_aggregation_type - computed: true, optional: true, required: false
    _metricAggregationType;
    get metricAggregationType() {
        return this.getStringAttribute('metric_aggregation_type');
    }
    set metricAggregationType(value) {
        this._metricAggregationType = value;
    }
    resetMetricAggregationType() {
        this._metricAggregationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get metricAggregationTypeInput() {
        return this._metricAggregationType;
    }
    // min_adjustment_magnitude - computed: false, optional: true, required: false
    _minAdjustmentMagnitude;
    get minAdjustmentMagnitude() {
        return this.getNumberAttribute('min_adjustment_magnitude');
    }
    set minAdjustmentMagnitude(value) {
        this._minAdjustmentMagnitude = value;
    }
    resetMinAdjustmentMagnitude() {
        this._minAdjustmentMagnitude = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minAdjustmentMagnitudeInput() {
        return this._minAdjustmentMagnitude;
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // policy_type - computed: false, optional: true, required: false
    _policyType;
    get policyType() {
        return this.getStringAttribute('policy_type');
    }
    set policyType(value) {
        this._policyType = value;
    }
    resetPolicyType() {
        this._policyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get policyTypeInput() {
        return this._policyType;
    }
    // scaling_adjustment - computed: false, optional: true, required: false
    _scalingAdjustment;
    get scalingAdjustment() {
        return this.getNumberAttribute('scaling_adjustment');
    }
    set scalingAdjustment(value) {
        this._scalingAdjustment = value;
    }
    resetScalingAdjustment() {
        this._scalingAdjustment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scalingAdjustmentInput() {
        return this._scalingAdjustment;
    }
    // predictive_scaling_configuration - computed: false, optional: true, required: false
    _predictiveScalingConfiguration = new AutoscalingPolicyPredictiveScalingConfigurationOutputReference(this, "predictive_scaling_configuration", true);
    get predictiveScalingConfiguration() {
        return this._predictiveScalingConfiguration;
    }
    putPredictiveScalingConfiguration(value) {
        this._predictiveScalingConfiguration.internalValue = value;
    }
    resetPredictiveScalingConfiguration() {
        this._predictiveScalingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get predictiveScalingConfigurationInput() {
        return this._predictiveScalingConfiguration.internalValue;
    }
    // step_adjustment - computed: false, optional: true, required: false
    _stepAdjustment;
    get stepAdjustment() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('step_adjustment');
    }
    set stepAdjustment(value) {
        this._stepAdjustment = value;
    }
    resetStepAdjustment() {
        this._stepAdjustment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stepAdjustmentInput() {
        return this._stepAdjustment;
    }
    // target_tracking_configuration - computed: false, optional: true, required: false
    _targetTrackingConfiguration = new AutoscalingPolicyTargetTrackingConfigurationOutputReference(this, "target_tracking_configuration", true);
    get targetTrackingConfiguration() {
        return this._targetTrackingConfiguration;
    }
    putTargetTrackingConfiguration(value) {
        this._targetTrackingConfiguration.internalValue = value;
    }
    resetTargetTrackingConfiguration() {
        this._targetTrackingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get targetTrackingConfigurationInput() {
        return this._targetTrackingConfiguration.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            adjustment_type: cdktf.stringToTerraform(this._adjustmentType),
            autoscaling_group_name: cdktf.stringToTerraform(this._autoscalingGroupName),
            cooldown: cdktf.numberToTerraform(this._cooldown),
            estimated_instance_warmup: cdktf.numberToTerraform(this._estimatedInstanceWarmup),
            metric_aggregation_type: cdktf.stringToTerraform(this._metricAggregationType),
            min_adjustment_magnitude: cdktf.numberToTerraform(this._minAdjustmentMagnitude),
            name: cdktf.stringToTerraform(this._name),
            policy_type: cdktf.stringToTerraform(this._policyType),
            scaling_adjustment: cdktf.numberToTerraform(this._scalingAdjustment),
            predictive_scaling_configuration: autoscalingPolicyPredictiveScalingConfigurationToTerraform(this._predictiveScalingConfiguration.internalValue),
            step_adjustment: cdktf.listMapper(autoscalingPolicyStepAdjustmentToTerraform)(this._stepAdjustment),
            target_tracking_configuration: autoscalingPolicyTargetTrackingConfigurationToTerraform(this._targetTrackingConfiguration.internalValue),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b3NjYWxpbmctcG9saWN5LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJhdXRvc2NhbGluZy1wb2xpY3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBd0UvQixNQUFNLFVBQVUsOEdBQThHLENBQUMsTUFBaU87SUFDOVYsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxzQkFBc0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLG9CQUFvQixDQUFDO1FBQzdFLGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGFBQWEsQ0FBQztLQUMvRCxDQUFBO0FBQ0gsQ0FBQztBQUVELE1BQU0sT0FBTyxrSEFBbUgsU0FBUSxLQUFLLENBQUMsYUFBYTtJQUNqSixhQUFhLEdBQUcsS0FBSyxDQUFDO0lBRTlCOzs7O01BSUU7SUFDRixZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzlCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1NBQ3ZFO1FBQ0QsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDekQ7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBc0g7UUFDN0ksSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxTQUFTLENBQUM7WUFDdkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7U0FDakM7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUM7WUFDeEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO1NBQzNDO0lBQ0gsQ0FBQztJQUVELDRFQUE0RTtJQUNwRSxxQkFBcUIsQ0FBVTtJQUN2QyxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFDRCxJQUFXLG9CQUFvQixDQUFDLEtBQWE7UUFDM0MsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztJQUNyQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcseUJBQXlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ3BDLENBQUM7SUFFRCxvRUFBb0U7SUFDNUQsY0FBYyxDQUFVO0lBQ2hDLElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDRCxJQUFXLGFBQWEsQ0FBQyxLQUFhO1FBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7Q0FDRjtBQVlELE1BQU0sVUFBVSw4R0FBOEcsQ0FBQyxNQUFpTztJQUM5VixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsb0JBQW9CLENBQUM7UUFDN0UsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO0tBQy9ELENBQUE7QUFDSCxDQUFDO0FBRUQsTUFBTSxPQUFPLGtIQUFtSCxTQUFRLEtBQUssQ0FBQyxhQUFhO0lBQ2pKLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFFOUI7Ozs7TUFJRTtJQUNGLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDOUIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUM7U0FDdkU7UUFDRCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUN6RDtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUFzSDtRQUM3SSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFNBQVMsQ0FBQztZQUN2QyxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztTQUNqQzthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztZQUN4RCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBRUQsNEVBQTRFO0lBQ3BFLHFCQUFxQixDQUFVO0lBQ3ZDLElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNELElBQVcsb0JBQW9CLENBQUMsS0FBYTtRQUMzQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyx5QkFBeUI7UUFDbEMsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDcEMsQ0FBQztJQUVELG9FQUFvRTtJQUM1RCxjQUFjLENBQVU7SUFDaEMsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELElBQVcsYUFBYSxDQUFDLEtBQWE7UUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztDQUNGO0FBWUQsTUFBTSxVQUFVLGlIQUFpSCxDQUFDLE1BQXVPO0lBQ3ZXLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxvQkFBb0IsQ0FBQztRQUM3RSxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7S0FDL0QsQ0FBQTtBQUNILENBQUM7QUFFRCxNQUFNLE9BQU8scUhBQXNILFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFDcEosYUFBYSxHQUFHLEtBQUssQ0FBQztJQUU5Qjs7OztNQUlFO0lBQ0YsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUM5QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztTQUN2RTtRQUNELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQ3pEO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQztJQUVELElBQVcsYUFBYSxDQUFDLEtBQXlIO1FBQ2hKLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO1NBQ2pDO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDLG9CQUFvQixDQUFDO1lBQ3hELElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztTQUMzQztJQUNILENBQUM7SUFFRCw0RUFBNEU7SUFDcEUscUJBQXFCLENBQVU7SUFDdkMsSUFBVyxvQkFBb0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBQ0QsSUFBVyxvQkFBb0IsQ0FBQyxLQUFhO1FBQzNDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLHlCQUF5QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUNwQyxDQUFDO0lBRUQsb0VBQW9FO0lBQzVELGNBQWMsQ0FBVTtJQUNoQyxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0QsSUFBVyxhQUFhLENBQUMsS0FBYTtRQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0NBQ0Y7QUEwQkQsTUFBTSxVQUFVLDZFQUE2RSxDQUFDLE1BQStKO0lBQzNQLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQzFELG9DQUFvQyxFQUFFLDhHQUE4RyxDQUFDLE1BQU8sQ0FBQyxpQ0FBaUMsQ0FBQztRQUMvTCxvQ0FBb0MsRUFBRSw4R0FBOEcsQ0FBQyxNQUFPLENBQUMsaUNBQWlDLENBQUM7UUFDL0wsdUNBQXVDLEVBQUUsaUhBQWlILENBQUMsTUFBTyxDQUFDLG9DQUFvQyxDQUFDO0tBQ3pNLENBQUE7QUFDSCxDQUFDO0FBRUQsTUFBTSxPQUFPLGlGQUFrRixTQUFRLEtBQUssQ0FBQyxhQUFhO0lBQ2hILGFBQWEsR0FBRyxLQUFLLENBQUM7SUFFOUI7Ozs7TUFJRTtJQUNGLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDckQ7UUFDRCxJQUFJLElBQUksQ0FBQyxrQ0FBa0MsRUFBRSxhQUFhLEVBQUU7WUFDMUQsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxpQ0FBaUMsR0FBRyxJQUFJLENBQUMsa0NBQWtDLEVBQUUsYUFBYSxDQUFDO1NBQ2hIO1FBQ0QsSUFBSSxJQUFJLENBQUMsa0NBQWtDLEVBQUUsYUFBYSxFQUFFO1lBQzFELFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsaUNBQWlDLEdBQUcsSUFBSSxDQUFDLGtDQUFrQyxFQUFFLGFBQWEsQ0FBQztTQUNoSDtRQUNELElBQUksSUFBSSxDQUFDLHFDQUFxQyxFQUFFLGFBQWEsRUFBRTtZQUM3RCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLG9DQUFvQyxHQUFHLElBQUksQ0FBQyxxQ0FBcUMsRUFBRSxhQUFhLENBQUM7U0FDdEg7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBcUY7UUFDNUcsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1lBQzlCLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1NBQ3RFO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7WUFDdEMsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsaUNBQWlDLENBQUM7WUFDaEcsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsaUNBQWlDLENBQUM7WUFDaEcsSUFBSSxDQUFDLHFDQUFxQyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsb0NBQW9DLENBQUM7U0FDdkc7SUFDSCxDQUFDO0lBRUQsa0VBQWtFO0lBQzFELFlBQVksQ0FBVTtJQUM5QixJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELElBQVcsV0FBVyxDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUVELDBGQUEwRjtJQUNsRixrQ0FBa0MsR0FBRyxJQUFJLGtIQUFrSCxDQUFDLElBQVcsRUFBRSxzQ0FBc0MsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvTixJQUFXLGlDQUFpQztRQUMxQyxPQUFPLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQztJQUNqRCxDQUFDO0lBQ00sb0NBQW9DLENBQUMsS0FBMEc7UUFDcEosSUFBSSxDQUFDLGtDQUFrQyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDaEUsQ0FBQztJQUNNLHNDQUFzQztRQUMzQyxJQUFJLENBQUMsa0NBQWtDLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNwRSxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsc0NBQXNDO1FBQy9DLE9BQU8sSUFBSSxDQUFDLGtDQUFrQyxDQUFDLGFBQWEsQ0FBQztJQUMvRCxDQUFDO0lBRUQsMEZBQTBGO0lBQ2xGLGtDQUFrQyxHQUFHLElBQUksa0hBQWtILENBQUMsSUFBVyxFQUFFLHNDQUFzQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9OLElBQVcsaUNBQWlDO1FBQzFDLE9BQU8sSUFBSSxDQUFDLGtDQUFrQyxDQUFDO0lBQ2pELENBQUM7SUFDTSxvQ0FBb0MsQ0FBQyxLQUEwRztRQUNwSixJQUFJLENBQUMsa0NBQWtDLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUNoRSxDQUFDO0lBQ00sc0NBQXNDO1FBQzNDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ3BFLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxzQ0FBc0M7UUFDL0MsT0FBTyxJQUFJLENBQUMsa0NBQWtDLENBQUMsYUFBYSxDQUFDO0lBQy9ELENBQUM7SUFFRCw2RkFBNkY7SUFDckYscUNBQXFDLEdBQUcsSUFBSSxxSEFBcUgsQ0FBQyxJQUFXLEVBQUUseUNBQXlDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeE8sSUFBVyxvQ0FBb0M7UUFDN0MsT0FBTyxJQUFJLENBQUMscUNBQXFDLENBQUM7SUFDcEQsQ0FBQztJQUNNLHVDQUF1QyxDQUFDLEtBQTZHO1FBQzFKLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ25FLENBQUM7SUFDTSx5Q0FBeUM7UUFDOUMsSUFBSSxDQUFDLHFDQUFxQyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDdkUsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLHlDQUF5QztRQUNsRCxPQUFPLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxhQUFhLENBQUM7SUFDbEUsQ0FBQztDQUNGO0FBMEJELE1BQU0sVUFBVSwwREFBMEQsQ0FBQyxNQUF5SDtJQUNsTSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLDRCQUE0QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMseUJBQXlCLENBQUM7UUFDeEYsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUN2RSxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0Msc0JBQXNCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxvQkFBb0IsQ0FBQztRQUM3RSxvQkFBb0IsRUFBRSw2RUFBNkUsQ0FBQyxNQUFPLENBQUMsbUJBQW1CLENBQUM7S0FDakksQ0FBQTtBQUNILENBQUM7QUFFRCxNQUFNLE9BQU8sOERBQStELFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFDN0YsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUU5Qjs7OztNQUlFO0lBQ0YsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQywwQkFBMEIsRUFBRTtZQUNuQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQztTQUNqRjtRQUNELElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1NBQ2pFO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUN2QztRQUNELElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzlCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1NBQ3ZFO1FBQ0QsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsYUFBYSxFQUFFO1lBQzVDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLGFBQWEsQ0FBQztTQUNwRjtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUFrRTtRQUN6RixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLDBCQUEwQixHQUFHLFNBQVMsQ0FBQztZQUM1QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxTQUFTLENBQUM7WUFDdkMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7U0FDckQ7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQywwQkFBMEIsR0FBRyxLQUFLLENBQUMseUJBQXlCLENBQUM7WUFDbEUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztZQUNsRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztZQUN4RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztTQUNyRTtJQUNILENBQUM7SUFFRCxrRkFBa0Y7SUFDMUUsMEJBQTBCLENBQVU7SUFDNUMsSUFBVyx5QkFBeUI7UUFDbEMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ0QsSUFBVyx5QkFBeUIsQ0FBQyxLQUFhO1FBQ2hELElBQUksQ0FBQywwQkFBMEIsR0FBRyxLQUFLLENBQUM7SUFDMUMsQ0FBQztJQUNNLDhCQUE4QjtRQUNuQyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsU0FBUyxDQUFDO0lBQzlDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyw4QkFBOEI7UUFDdkMsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUM7SUFDekMsQ0FBQztJQUVELHlFQUF5RTtJQUNqRSxrQkFBa0IsQ0FBVTtJQUNwQyxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDRCxJQUFXLGlCQUFpQixDQUFDLEtBQWE7UUFDeEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBQ00sc0JBQXNCO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDO0lBRUQsMERBQTBEO0lBQ2xELEtBQUssQ0FBVTtJQUN2QixJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ00sU0FBUztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsNEVBQTRFO0lBQ3BFLHFCQUFxQixDQUFVO0lBQ3ZDLElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNELElBQVcsb0JBQW9CLENBQUMsS0FBYTtRQUMzQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO0lBQ3JDLENBQUM7SUFDTSx5QkFBeUI7UUFDOUIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFNBQVMsQ0FBQztJQUN6QyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcseUJBQXlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ3BDLENBQUM7SUFFRCwwRUFBMEU7SUFDbEUsb0JBQW9CLEdBQUcsSUFBSSxpRkFBaUYsQ0FBQyxJQUFXLEVBQUUsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEssSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDbkMsQ0FBQztJQUNNLHNCQUFzQixDQUFDLEtBQXlFO1FBQ3JHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ2xELENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyx3QkFBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDO0lBQ2pELENBQUM7Q0FDRjtBQWdCRCxNQUFNLFVBQVUsMENBQTBDLENBQUMsTUFBd0M7SUFDakcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCwyQkFBMkIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLHdCQUF3QixDQUFDO1FBQ3RGLDJCQUEyQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsd0JBQXdCLENBQUM7UUFDdEYsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxpQkFBaUIsQ0FBQztLQUN2RSxDQUFBO0FBQ0gsQ0FBQztBQWFELE1BQU0sVUFBVSxtR0FBbUcsQ0FBQyxNQUFpRztJQUNuTixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztRQUMzQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUEyQkQsTUFBTSxVQUFVLG9GQUFvRixDQUFDLE1BQTZLO0lBQ2hSLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3hELFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztRQUNyRCxTQUFTLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7UUFDckQsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsbUdBQW1HLENBQUMsQ0FBQyxNQUFPLENBQUMsZUFBZSxDQUFDO0tBQ2pLLENBQUE7QUFDSCxDQUFDO0FBRUQsTUFBTSxPQUFPLHdGQUF5RixTQUFRLEtBQUssQ0FBQyxhQUFhO0lBQ3ZILGFBQWEsR0FBRyxLQUFLLENBQUM7SUFFOUI7Ozs7TUFJRTtJQUNGLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDbkQ7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUNqRDtRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUN2QztRQUNELElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUM3RDtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUE0RjtRQUNuSCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7WUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDdkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztTQUNuQzthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7WUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztJQUVELGlFQUFpRTtJQUN6RCxXQUFXLENBQVU7SUFDN0IsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCxJQUFXLFVBQVUsQ0FBQyxLQUFhO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQsK0RBQStEO0lBQ3ZELFVBQVUsQ0FBVTtJQUM1QixJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNELElBQVcsU0FBUyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFFRCwrREFBK0Q7SUFDdkQsVUFBVSxDQUFVO0lBQzVCLElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0QsSUFBVyxTQUFTLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVELDBEQUEwRDtJQUNsRCxLQUFLLENBQVU7SUFDdkIsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELElBQVcsSUFBSSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNNLFNBQVM7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztJQUN6QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELHNFQUFzRTtJQUM5RCxnQkFBZ0IsQ0FBOEY7SUFDdEgsSUFBVyxlQUFlO1FBQ3hCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxrQkFBa0IsQ0FBUSxDQUFDO0lBQ25FLENBQUM7SUFDRCxJQUFXLGVBQWUsQ0FBQyxLQUFpRztRQUMxSCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFDTSxvQkFBb0I7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztJQUNwQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7Q0FDRjtBQVlELE1BQU0sVUFBVSxvRkFBb0YsQ0FBQyxNQUE2SztJQUNoUixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsb0JBQW9CLENBQUM7UUFDN0UsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO0tBQy9ELENBQUE7QUFDSCxDQUFDO0FBRUQsTUFBTSxPQUFPLHdGQUF5RixTQUFRLEtBQUssQ0FBQyxhQUFhO0lBQ3ZILGFBQWEsR0FBRyxLQUFLLENBQUM7SUFFOUI7Ozs7TUFJRTtJQUNGLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDOUIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUM7U0FDdkU7UUFDRCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUN6RDtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUE0RjtRQUNuSCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFNBQVMsQ0FBQztZQUN2QyxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztTQUNqQzthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztZQUN4RCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBRUQsNEVBQTRFO0lBQ3BFLHFCQUFxQixDQUFVO0lBQ3ZDLElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNELElBQVcsb0JBQW9CLENBQUMsS0FBYTtRQUMzQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyx5QkFBeUI7UUFDbEMsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDcEMsQ0FBQztJQUVELG9FQUFvRTtJQUM1RCxjQUFjLENBQVU7SUFDaEMsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELElBQVcsYUFBYSxDQUFDLEtBQWE7UUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUNNLGtCQUFrQjtRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0NBQ0Y7QUF3QkQsTUFBTSxVQUFVLHVEQUF1RCxDQUFDLE1BQW1IO0lBQ3pMLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxjQUFjLENBQUM7UUFDbEUsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQzFELCtCQUErQixFQUFFLG9GQUFvRixDQUFDLE1BQU8sQ0FBQyw2QkFBNkIsQ0FBQztRQUM1SiwrQkFBK0IsRUFBRSxvRkFBb0YsQ0FBQyxNQUFPLENBQUMsNkJBQTZCLENBQUM7S0FDN0osQ0FBQTtBQUNILENBQUM7QUFFRCxNQUFNLE9BQU8sMkRBQTRELFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFDMUYsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUU5Qjs7OztNQUlFO0lBQ0YsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUMzRDtRQUNELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3JEO1FBQ0QsSUFBSSxJQUFJLENBQUMsOEJBQThCLEVBQUUsYUFBYSxFQUFFO1lBQ3RELFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLDhCQUE4QixFQUFFLGFBQWEsQ0FBQztTQUN4RztRQUNELElBQUksSUFBSSxDQUFDLDhCQUE4QixFQUFFLGFBQWEsRUFBRTtZQUN0RCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLDZCQUE2QixHQUFHLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxhQUFhLENBQUM7U0FDeEc7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBK0Q7UUFDdEYsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1lBQzlCLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQzlELElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1NBQy9EO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUM7WUFDNUMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1lBQ3RDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLDZCQUE2QixDQUFDO1lBQ3hGLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLDZCQUE2QixDQUFDO1NBQ3pGO0lBQ0gsQ0FBQztJQUVELHNFQUFzRTtJQUM5RCxlQUFlLENBQStCO0lBQ3RELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBUSxDQUFDO0lBQzdELENBQUM7SUFDRCxJQUFXLGNBQWMsQ0FBQyxLQUFrQztRQUMxRCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBQ00sbUJBQW1CO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFFRCxrRUFBa0U7SUFDMUQsWUFBWSxDQUFVO0lBQzlCLElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsSUFBVyxXQUFXLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBRUQscUZBQXFGO0lBQzdFLDhCQUE4QixHQUFHLElBQUksd0ZBQXdGLENBQUMsSUFBVyxFQUFFLGlDQUFpQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVMLElBQVcsNkJBQTZCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLDhCQUE4QixDQUFDO0lBQzdDLENBQUM7SUFDTSxnQ0FBZ0MsQ0FBQyxLQUFnRjtRQUN0SCxJQUFJLENBQUMsOEJBQThCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM1RCxDQUFDO0lBQ00sa0NBQWtDO1FBQ3ZDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ2hFLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxrQ0FBa0M7UUFDM0MsT0FBTyxJQUFJLENBQUMsOEJBQThCLENBQUMsYUFBYSxDQUFDO0lBQzNELENBQUM7SUFFRCxxRkFBcUY7SUFDN0UsOEJBQThCLEdBQUcsSUFBSSx3RkFBd0YsQ0FBQyxJQUFXLEVBQUUsaUNBQWlDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUwsSUFBVyw2QkFBNkI7UUFDdEMsT0FBTyxJQUFJLENBQUMsOEJBQThCLENBQUM7SUFDN0MsQ0FBQztJQUNNLGdDQUFnQyxDQUFDLEtBQWdGO1FBQ3RILElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzVELENBQUM7SUFDTSxrQ0FBa0M7UUFDdkMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDaEUsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGtDQUFrQztRQUMzQyxPQUFPLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxhQUFhLENBQUM7SUFDM0QsQ0FBQztDQUNGO0FBRUQ7O0VBRUU7QUFDRixNQUFNLE9BQU8saUJBQWtCLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQUU1RCxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNiLE1BQU0sQ0FBVSxjQUFjLEdBQVcsd0JBQXdCLENBQUM7SUFFekUsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBK0I7UUFDOUUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSx3QkFBd0I7WUFDL0MsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUM3QyxJQUFJLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDO1FBQ3pELElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxDQUFDLHVCQUF1QixDQUFDO1FBQy9ELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxNQUFNLENBQUMscUJBQXFCLENBQUM7UUFDM0QsSUFBSSxDQUFDLHVCQUF1QixHQUFHLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQztRQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUM7UUFDbkQsSUFBSSxDQUFDLCtCQUErQixDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsOEJBQThCLENBQUM7UUFDM0YsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzdDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLDJCQUEyQixDQUFDO0lBQ3ZGLENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYixxRUFBcUU7SUFDN0QsZUFBZSxDQUFVO0lBQ2pDLElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxJQUFXLGNBQWMsQ0FBQyxLQUFhO1FBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFDTSxtQkFBbUI7UUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVELHlEQUF5RDtJQUN6RCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsNEVBQTRFO0lBQ3BFLHFCQUFxQixDQUFVO0lBQ3ZDLElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNELElBQVcsb0JBQW9CLENBQUMsS0FBYTtRQUMzQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyx5QkFBeUI7UUFDbEMsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDcEMsQ0FBQztJQUVELDhEQUE4RDtJQUN0RCxTQUFTLENBQVU7SUFDM0IsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCxJQUFXLFFBQVEsQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFDTSxhQUFhO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsK0VBQStFO0lBQ3ZFLHdCQUF3QixDQUFVO0lBQzFDLElBQVcsdUJBQXVCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUNELElBQVcsdUJBQXVCLENBQUMsS0FBYTtRQUM5QyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDO0lBQ3hDLENBQUM7SUFDTSw0QkFBNEI7UUFDakMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLFNBQVMsQ0FBQztJQUM1QyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsNEJBQTRCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDO0lBQ3ZDLENBQUM7SUFFRCx1REFBdUQ7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELDRFQUE0RTtJQUNwRSxzQkFBc0IsQ0FBVTtJQUN4QyxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFDRCxJQUFXLHFCQUFxQixDQUFDLEtBQWE7UUFDNUMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztJQUN0QyxDQUFDO0lBQ00sMEJBQTBCO1FBQy9CLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxTQUFTLENBQUM7SUFDMUMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLDBCQUEwQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUNyQyxDQUFDO0lBRUQsOEVBQThFO0lBQ3RFLHVCQUF1QixDQUFVO0lBQ3pDLElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNELElBQVcsc0JBQXNCLENBQUMsS0FBYTtRQUM3QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7SUFDTSwyQkFBMkI7UUFDaEMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLFNBQVMsQ0FBQztJQUMzQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsMkJBQTJCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDO0lBQ3RDLENBQUM7SUFFRCwwREFBMEQ7SUFDbEQsS0FBSyxDQUFVO0lBQ3ZCLElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCxJQUFXLElBQUksQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsaUVBQWlFO0lBQ3pELFdBQVcsQ0FBVTtJQUM3QixJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNELElBQVcsVUFBVSxDQUFDLEtBQWE7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNNLGVBQWU7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFRCx3RUFBd0U7SUFDaEUsa0JBQWtCLENBQVU7SUFDcEMsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsSUFBVyxpQkFBaUIsQ0FBQyxLQUFhO1FBQ3hDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUNNLHNCQUFzQjtRQUMzQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQztJQUVELHNGQUFzRjtJQUM5RSwrQkFBK0IsR0FBRyxJQUFJLDhEQUE4RCxDQUFDLElBQVcsRUFBRSxrQ0FBa0MsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwSyxJQUFXLDhCQUE4QjtRQUN2QyxPQUFPLElBQUksQ0FBQywrQkFBK0IsQ0FBQztJQUM5QyxDQUFDO0lBQ00saUNBQWlDLENBQUMsS0FBc0Q7UUFDN0YsSUFBSSxDQUFDLCtCQUErQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0QsQ0FBQztJQUNNLG1DQUFtQztRQUN4QyxJQUFJLENBQUMsK0JBQStCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNqRSxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsbUNBQW1DO1FBQzVDLE9BQU8sSUFBSSxDQUFDLCtCQUErQixDQUFDLGFBQWEsQ0FBQztJQUM1RCxDQUFDO0lBRUQscUVBQXFFO0lBQzdELGVBQWUsQ0FBcUM7SUFDNUQsSUFBVyxjQUFjO1FBQ3ZCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxpQkFBaUIsQ0FBUSxDQUFDO0lBQ2xFLENBQUM7SUFDRCxJQUFXLGNBQWMsQ0FBQyxLQUF3QztRQUNoRSxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBQ00sbUJBQW1CO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFFRCxtRkFBbUY7SUFDM0UsNEJBQTRCLEdBQUcsSUFBSSwyREFBMkQsQ0FBQyxJQUFXLEVBQUUsK0JBQStCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0osSUFBVywyQkFBMkI7UUFDcEMsT0FBTyxJQUFJLENBQUMsNEJBQTRCLENBQUM7SUFDM0MsQ0FBQztJQUNNLDhCQUE4QixDQUFDLEtBQW1EO1FBQ3ZGLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzFELENBQUM7SUFDTSxnQ0FBZ0M7UUFDckMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDOUQsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGdDQUFnQztRQUN6QyxPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxhQUFhLENBQUM7SUFDekQsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQzlELHNCQUFzQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7WUFDM0UsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2pELHlCQUF5QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUM7WUFDakYsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztZQUM3RSx3QkFBd0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDO1lBQy9FLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6QyxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDdEQsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUNwRSxnQ0FBZ0MsRUFBRSwwREFBMEQsQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsYUFBYSxDQUFDO1lBQ2hKLGVBQWUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDBDQUEwQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUNuRyw2QkFBNkIsRUFBRSx1REFBdUQsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsYUFBYSxDQUFDO1NBQ3hJLENBQUM7SUFDSixDQUFDIn0=