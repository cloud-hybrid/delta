// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function lambdaEventSourceMappingDestinationConfigOnFailureToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        destination_arn: cdktf.stringToTerraform(struct.destinationArn),
    };
}
export class LambdaEventSourceMappingDestinationConfigOnFailureOutputReference extends cdktf.ComplexObject {
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
        if (this._destinationArn) {
            hasAnyValues = true;
            internalValueResult.destinationArn = this._destinationArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._destinationArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._destinationArn = value.destinationArn;
        }
    }
    // destination_arn - computed: false, optional: false, required: true
    _destinationArn;
    get destinationArn() {
        return this.getStringAttribute('destination_arn');
    }
    set destinationArn(value) {
        this._destinationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get destinationArnInput() {
        return this._destinationArn;
    }
}
export function lambdaEventSourceMappingDestinationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        on_failure: lambdaEventSourceMappingDestinationConfigOnFailureToTerraform(struct.onFailure),
    };
}
export class LambdaEventSourceMappingDestinationConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._onFailure?.internalValue) {
            hasAnyValues = true;
            internalValueResult.onFailure = this._onFailure?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._onFailure.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._onFailure.internalValue = value.onFailure;
        }
    }
    // on_failure - computed: false, optional: true, required: false
    _onFailure = new LambdaEventSourceMappingDestinationConfigOnFailureOutputReference(this, "on_failure", true);
    get onFailure() {
        return this._onFailure;
    }
    putOnFailure(value) {
        this._onFailure.internalValue = value;
    }
    resetOnFailure() {
        this._onFailure.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get onFailureInput() {
        return this._onFailure.internalValue;
    }
}
export function lambdaEventSourceMappingFilterCriteriaFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        pattern: cdktf.stringToTerraform(struct.pattern),
    };
}
export function lambdaEventSourceMappingFilterCriteriaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        filter: cdktf.listMapper(lambdaEventSourceMappingFilterCriteriaFilterToTerraform)(struct.filter),
    };
}
export class LambdaEventSourceMappingFilterCriteriaOutputReference extends cdktf.ComplexObject {
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
        if (this._filter) {
            hasAnyValues = true;
            internalValueResult.filter = this._filter;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._filter = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._filter = value.filter;
        }
    }
    // filter - computed: false, optional: true, required: false
    _filter;
    get filter() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('filter');
    }
    set filter(value) {
        this._filter = value;
    }
    resetFilter() {
        this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get filterInput() {
        return this._filter;
    }
}
export function lambdaEventSourceMappingSelfManagedEventSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        endpoints: cdktf.hashMapper(cdktf.anyToTerraform)(struct.endpoints),
    };
}
export class LambdaEventSourceMappingSelfManagedEventSourceOutputReference extends cdktf.ComplexObject {
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
        if (this._endpoints) {
            hasAnyValues = true;
            internalValueResult.endpoints = this._endpoints;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._endpoints = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._endpoints = value.endpoints;
        }
    }
    // endpoints - computed: false, optional: false, required: true
    _endpoints;
    get endpoints() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('endpoints');
    }
    set endpoints(value) {
        this._endpoints = value;
    }
    // Temporarily expose input value. Use with caution.
    get endpointsInput() {
        return this._endpoints;
    }
}
export function lambdaEventSourceMappingSourceAccessConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        uri: cdktf.stringToTerraform(struct.uri),
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html aws_lambda_event_source_mapping}
*/
export class LambdaEventSourceMapping extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_lambda_event_source_mapping";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html aws_lambda_event_source_mapping} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaEventSourceMappingConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_lambda_event_source_mapping',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._batchSize = config.batchSize;
        this._bisectBatchOnFunctionError = config.bisectBatchOnFunctionError;
        this._enabled = config.enabled;
        this._eventSourceArn = config.eventSourceArn;
        this._functionName = config.functionName;
        this._functionResponseTypes = config.functionResponseTypes;
        this._maximumBatchingWindowInSeconds = config.maximumBatchingWindowInSeconds;
        this._maximumRecordAgeInSeconds = config.maximumRecordAgeInSeconds;
        this._maximumRetryAttempts = config.maximumRetryAttempts;
        this._parallelizationFactor = config.parallelizationFactor;
        this._queues = config.queues;
        this._startingPosition = config.startingPosition;
        this._startingPositionTimestamp = config.startingPositionTimestamp;
        this._topics = config.topics;
        this._tumblingWindowInSeconds = config.tumblingWindowInSeconds;
        this._destinationConfig.internalValue = config.destinationConfig;
        this._filterCriteria.internalValue = config.filterCriteria;
        this._selfManagedEventSource.internalValue = config.selfManagedEventSource;
        this._sourceAccessConfiguration = config.sourceAccessConfiguration;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // batch_size - computed: false, optional: true, required: false
    _batchSize;
    get batchSize() {
        return this.getNumberAttribute('batch_size');
    }
    set batchSize(value) {
        this._batchSize = value;
    }
    resetBatchSize() {
        this._batchSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get batchSizeInput() {
        return this._batchSize;
    }
    // bisect_batch_on_function_error - computed: false, optional: true, required: false
    _bisectBatchOnFunctionError;
    get bisectBatchOnFunctionError() {
        return this.getBooleanAttribute('bisect_batch_on_function_error');
    }
    set bisectBatchOnFunctionError(value) {
        this._bisectBatchOnFunctionError = value;
    }
    resetBisectBatchOnFunctionError() {
        this._bisectBatchOnFunctionError = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bisectBatchOnFunctionErrorInput() {
        return this._bisectBatchOnFunctionError;
    }
    // enabled - computed: false, optional: true, required: false
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // event_source_arn - computed: false, optional: true, required: false
    _eventSourceArn;
    get eventSourceArn() {
        return this.getStringAttribute('event_source_arn');
    }
    set eventSourceArn(value) {
        this._eventSourceArn = value;
    }
    resetEventSourceArn() {
        this._eventSourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get eventSourceArnInput() {
        return this._eventSourceArn;
    }
    // function_arn - computed: true, optional: false, required: false
    get functionArn() {
        return this.getStringAttribute('function_arn');
    }
    // function_name - computed: false, optional: false, required: true
    _functionName;
    get functionName() {
        return this.getStringAttribute('function_name');
    }
    set functionName(value) {
        this._functionName = value;
    }
    // Temporarily expose input value. Use with caution.
    get functionNameInput() {
        return this._functionName;
    }
    // function_response_types - computed: false, optional: true, required: false
    _functionResponseTypes;
    get functionResponseTypes() {
        return this.getListAttribute('function_response_types');
    }
    set functionResponseTypes(value) {
        this._functionResponseTypes = value;
    }
    resetFunctionResponseTypes() {
        this._functionResponseTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get functionResponseTypesInput() {
        return this._functionResponseTypes;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // last_modified - computed: true, optional: false, required: false
    get lastModified() {
        return this.getStringAttribute('last_modified');
    }
    // last_processing_result - computed: true, optional: false, required: false
    get lastProcessingResult() {
        return this.getStringAttribute('last_processing_result');
    }
    // maximum_batching_window_in_seconds - computed: false, optional: true, required: false
    _maximumBatchingWindowInSeconds;
    get maximumBatchingWindowInSeconds() {
        return this.getNumberAttribute('maximum_batching_window_in_seconds');
    }
    set maximumBatchingWindowInSeconds(value) {
        this._maximumBatchingWindowInSeconds = value;
    }
    resetMaximumBatchingWindowInSeconds() {
        this._maximumBatchingWindowInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maximumBatchingWindowInSecondsInput() {
        return this._maximumBatchingWindowInSeconds;
    }
    // maximum_record_age_in_seconds - computed: true, optional: true, required: false
    _maximumRecordAgeInSeconds;
    get maximumRecordAgeInSeconds() {
        return this.getNumberAttribute('maximum_record_age_in_seconds');
    }
    set maximumRecordAgeInSeconds(value) {
        this._maximumRecordAgeInSeconds = value;
    }
    resetMaximumRecordAgeInSeconds() {
        this._maximumRecordAgeInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maximumRecordAgeInSecondsInput() {
        return this._maximumRecordAgeInSeconds;
    }
    // maximum_retry_attempts - computed: true, optional: true, required: false
    _maximumRetryAttempts;
    get maximumRetryAttempts() {
        return this.getNumberAttribute('maximum_retry_attempts');
    }
    set maximumRetryAttempts(value) {
        this._maximumRetryAttempts = value;
    }
    resetMaximumRetryAttempts() {
        this._maximumRetryAttempts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maximumRetryAttemptsInput() {
        return this._maximumRetryAttempts;
    }
    // parallelization_factor - computed: true, optional: true, required: false
    _parallelizationFactor;
    get parallelizationFactor() {
        return this.getNumberAttribute('parallelization_factor');
    }
    set parallelizationFactor(value) {
        this._parallelizationFactor = value;
    }
    resetParallelizationFactor() {
        this._parallelizationFactor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get parallelizationFactorInput() {
        return this._parallelizationFactor;
    }
    // queues - computed: false, optional: true, required: false
    _queues;
    get queues() {
        return this.getListAttribute('queues');
    }
    set queues(value) {
        this._queues = value;
    }
    resetQueues() {
        this._queues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queuesInput() {
        return this._queues;
    }
    // starting_position - computed: false, optional: true, required: false
    _startingPosition;
    get startingPosition() {
        return this.getStringAttribute('starting_position');
    }
    set startingPosition(value) {
        this._startingPosition = value;
    }
    resetStartingPosition() {
        this._startingPosition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get startingPositionInput() {
        return this._startingPosition;
    }
    // starting_position_timestamp - computed: false, optional: true, required: false
    _startingPositionTimestamp;
    get startingPositionTimestamp() {
        return this.getStringAttribute('starting_position_timestamp');
    }
    set startingPositionTimestamp(value) {
        this._startingPositionTimestamp = value;
    }
    resetStartingPositionTimestamp() {
        this._startingPositionTimestamp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get startingPositionTimestampInput() {
        return this._startingPositionTimestamp;
    }
    // state - computed: true, optional: false, required: false
    get state() {
        return this.getStringAttribute('state');
    }
    // state_transition_reason - computed: true, optional: false, required: false
    get stateTransitionReason() {
        return this.getStringAttribute('state_transition_reason');
    }
    // topics - computed: false, optional: true, required: false
    _topics;
    get topics() {
        return this.getListAttribute('topics');
    }
    set topics(value) {
        this._topics = value;
    }
    resetTopics() {
        this._topics = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get topicsInput() {
        return this._topics;
    }
    // tumbling_window_in_seconds - computed: false, optional: true, required: false
    _tumblingWindowInSeconds;
    get tumblingWindowInSeconds() {
        return this.getNumberAttribute('tumbling_window_in_seconds');
    }
    set tumblingWindowInSeconds(value) {
        this._tumblingWindowInSeconds = value;
    }
    resetTumblingWindowInSeconds() {
        this._tumblingWindowInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tumblingWindowInSecondsInput() {
        return this._tumblingWindowInSeconds;
    }
    // uuid - computed: true, optional: false, required: false
    get uuid() {
        return this.getStringAttribute('uuid');
    }
    // destination_config - computed: false, optional: true, required: false
    _destinationConfig = new LambdaEventSourceMappingDestinationConfigOutputReference(this, "destination_config", true);
    get destinationConfig() {
        return this._destinationConfig;
    }
    putDestinationConfig(value) {
        this._destinationConfig.internalValue = value;
    }
    resetDestinationConfig() {
        this._destinationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get destinationConfigInput() {
        return this._destinationConfig.internalValue;
    }
    // filter_criteria - computed: false, optional: true, required: false
    _filterCriteria = new LambdaEventSourceMappingFilterCriteriaOutputReference(this, "filter_criteria", true);
    get filterCriteria() {
        return this._filterCriteria;
    }
    putFilterCriteria(value) {
        this._filterCriteria.internalValue = value;
    }
    resetFilterCriteria() {
        this._filterCriteria.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get filterCriteriaInput() {
        return this._filterCriteria.internalValue;
    }
    // self_managed_event_source - computed: false, optional: true, required: false
    _selfManagedEventSource = new LambdaEventSourceMappingSelfManagedEventSourceOutputReference(this, "self_managed_event_source", true);
    get selfManagedEventSource() {
        return this._selfManagedEventSource;
    }
    putSelfManagedEventSource(value) {
        this._selfManagedEventSource.internalValue = value;
    }
    resetSelfManagedEventSource() {
        this._selfManagedEventSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get selfManagedEventSourceInput() {
        return this._selfManagedEventSource.internalValue;
    }
    // source_access_configuration - computed: false, optional: true, required: false
    _sourceAccessConfiguration;
    get sourceAccessConfiguration() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('source_access_configuration');
    }
    set sourceAccessConfiguration(value) {
        this._sourceAccessConfiguration = value;
    }
    resetSourceAccessConfiguration() {
        this._sourceAccessConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceAccessConfigurationInput() {
        return this._sourceAccessConfiguration;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            batch_size: cdktf.numberToTerraform(this._batchSize),
            bisect_batch_on_function_error: cdktf.booleanToTerraform(this._bisectBatchOnFunctionError),
            enabled: cdktf.booleanToTerraform(this._enabled),
            event_source_arn: cdktf.stringToTerraform(this._eventSourceArn),
            function_name: cdktf.stringToTerraform(this._functionName),
            function_response_types: cdktf.listMapper(cdktf.stringToTerraform)(this._functionResponseTypes),
            maximum_batching_window_in_seconds: cdktf.numberToTerraform(this._maximumBatchingWindowInSeconds),
            maximum_record_age_in_seconds: cdktf.numberToTerraform(this._maximumRecordAgeInSeconds),
            maximum_retry_attempts: cdktf.numberToTerraform(this._maximumRetryAttempts),
            parallelization_factor: cdktf.numberToTerraform(this._parallelizationFactor),
            queues: cdktf.listMapper(cdktf.stringToTerraform)(this._queues),
            starting_position: cdktf.stringToTerraform(this._startingPosition),
            starting_position_timestamp: cdktf.stringToTerraform(this._startingPositionTimestamp),
            topics: cdktf.listMapper(cdktf.stringToTerraform)(this._topics),
            tumbling_window_in_seconds: cdktf.numberToTerraform(this._tumblingWindowInSeconds),
            destination_config: lambdaEventSourceMappingDestinationConfigToTerraform(this._destinationConfig.internalValue),
            filter_criteria: lambdaEventSourceMappingFilterCriteriaToTerraform(this._filterCriteria.internalValue),
            self_managed_event_source: lambdaEventSourceMappingSelfManagedEventSourceToTerraform(this._selfManagedEventSource.internalValue),
            source_access_configuration: cdktf.listMapper(lambdaEventSourceMappingSourceAccessConfigurationToTerraform)(this._sourceAccessConfiguration),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFtYmRhLWV2ZW50LXNvdXJjZS1tYXBwaW5nLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsYW1iZGEtZXZlbnQtc291cmNlLW1hcHBpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBa0cvQixNQUFNLFVBQVUsNkRBQTZELENBQUMsTUFBK0g7SUFDM00sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxlQUFlLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxjQUFjLENBQUM7S0FDakUsQ0FBQTtBQUNILENBQUM7QUFFRCxNQUFNLE9BQU8saUVBQWtFLFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFDaEcsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUU5Qjs7OztNQUlFO0lBQ0YsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUMzRDtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FB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