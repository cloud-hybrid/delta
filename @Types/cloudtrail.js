// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function cloudtrailAdvancedEventSelectorFieldSelectorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ends_with: cdktf.listMapper(cdktf.stringToTerraform)(struct.endsWith),
        equals: cdktf.listMapper(cdktf.stringToTerraform)(struct.equalTo),
        field: cdktf.stringToTerraform(struct.field),
        not_ends_with: cdktf.listMapper(cdktf.stringToTerraform)(struct.notEndsWith),
        not_equals: cdktf.listMapper(cdktf.stringToTerraform)(struct.notEquals),
        not_starts_with: cdktf.listMapper(cdktf.stringToTerraform)(struct.notStartsWith),
        starts_with: cdktf.listMapper(cdktf.stringToTerraform)(struct.startsWith),
    };
}
export function cloudtrailAdvancedEventSelectorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        field_selector: cdktf.listMapper(cloudtrailAdvancedEventSelectorFieldSelectorToTerraform)(struct.fieldSelector),
    };
}
export function cloudtrailEventSelectorDataResourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values),
    };
}
export function cloudtrailEventSelectorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        exclude_management_event_sources: cdktf.listMapper(cdktf.stringToTerraform)(struct.excludeManagementEventSources),
        include_management_events: cdktf.booleanToTerraform(struct.includeManagementEvents),
        read_write_type: cdktf.stringToTerraform(struct.readWriteType),
        data_resource: cdktf.listMapper(cloudtrailEventSelectorDataResourceToTerraform)(struct.dataResource),
    };
}
export function cloudtrailInsightSelectorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        insight_type: cdktf.stringToTerraform(struct.insightType),
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html aws_cloudtrail}
*/
export class Cloudtrail extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_cloudtrail";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html aws_cloudtrail} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudtrailConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_cloudtrail',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._cloudWatchLogsGroupArn = config.cloudWatchLogsGroupArn;
        this._cloudWatchLogsRoleArn = config.cloudWatchLogsRoleArn;
        this._enableLogFileValidation = config.enableLogFileValidation;
        this._enableLogging = config.enableLogging;
        this._includeGlobalServiceEvents = config.includeGlobalServiceEvents;
        this._isMultiRegionTrail = config.isMultiRegionTrail;
        this._isOrganizationTrail = config.isOrganizationTrail;
        this._kmsKeyId = config.kmsKeyId;
        this._name = config.name;
        this._s3BucketName = config.s3BucketName;
        this._s3KeyPrefix = config.s3KeyPrefix;
        this._snsTopicName = config.snsTopicName;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._advancedEventSelector = config.advancedEventSelector;
        this._eventSelector = config.eventSelector;
        this._insightSelector = config.insightSelector;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // cloud_watch_logs_group_arn - computed: false, optional: true, required: false
    _cloudWatchLogsGroupArn;
    get cloudWatchLogsGroupArn() {
        return this.getStringAttribute('cloud_watch_logs_group_arn');
    }
    set cloudWatchLogsGroupArn(value) {
        this._cloudWatchLogsGroupArn = value;
    }
    resetCloudWatchLogsGroupArn() {
        this._cloudWatchLogsGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudWatchLogsGroupArnInput() {
        return this._cloudWatchLogsGroupArn;
    }
    // cloud_watch_logs_role_arn - computed: false, optional: true, required: false
    _cloudWatchLogsRoleArn;
    get cloudWatchLogsRoleArn() {
        return this.getStringAttribute('cloud_watch_logs_role_arn');
    }
    set cloudWatchLogsRoleArn(value) {
        this._cloudWatchLogsRoleArn = value;
    }
    resetCloudWatchLogsRoleArn() {
        this._cloudWatchLogsRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudWatchLogsRoleArnInput() {
        return this._cloudWatchLogsRoleArn;
    }
    // enable_log_file_validation - computed: false, optional: true, required: false
    _enableLogFileValidation;
    get enableLogFileValidation() {
        return this.getBooleanAttribute('enable_log_file_validation');
    }
    set enableLogFileValidation(value) {
        this._enableLogFileValidation = value;
    }
    resetEnableLogFileValidation() {
        this._enableLogFileValidation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableLogFileValidationInput() {
        return this._enableLogFileValidation;
    }
    // enable_logging - computed: false, optional: true, required: false
    _enableLogging;
    get enableLogging() {
        return this.getBooleanAttribute('enable_logging');
    }
    set enableLogging(value) {
        this._enableLogging = value;
    }
    resetEnableLogging() {
        this._enableLogging = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableLoggingInput() {
        return this._enableLogging;
    }
    // home_region - computed: true, optional: false, required: false
    get homeRegion() {
        return this.getStringAttribute('home_region');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // include_global_service_events - computed: false, optional: true, required: false
    _includeGlobalServiceEvents;
    get includeGlobalServiceEvents() {
        return this.getBooleanAttribute('include_global_service_events');
    }
    set includeGlobalServiceEvents(value) {
        this._includeGlobalServiceEvents = value;
    }
    resetIncludeGlobalServiceEvents() {
        this._includeGlobalServiceEvents = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeGlobalServiceEventsInput() {
        return this._includeGlobalServiceEvents;
    }
    // is_multi_region_trail - computed: false, optional: true, required: false
    _isMultiRegionTrail;
    get isMultiRegionTrail() {
        return this.getBooleanAttribute('is_multi_region_trail');
    }
    set isMultiRegionTrail(value) {
        this._isMultiRegionTrail = value;
    }
    resetIsMultiRegionTrail() {
        this._isMultiRegionTrail = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get isMultiRegionTrailInput() {
        return this._isMultiRegionTrail;
    }
    // is_organization_trail - computed: false, optional: true, required: false
    _isOrganizationTrail;
    get isOrganizationTrail() {
        return this.getBooleanAttribute('is_organization_trail');
    }
    set isOrganizationTrail(value) {
        this._isOrganizationTrail = value;
    }
    resetIsOrganizationTrail() {
        this._isOrganizationTrail = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get isOrganizationTrailInput() {
        return this._isOrganizationTrail;
    }
    // kms_key_id - computed: false, optional: true, required: false
    _kmsKeyId;
    get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    set kmsKeyId(value) {
        this._kmsKeyId = value;
    }
    resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kmsKeyIdInput() {
        return this._kmsKeyId;
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
    // s3_bucket_name - computed: false, optional: false, required: true
    _s3BucketName;
    get s3BucketName() {
        return this.getStringAttribute('s3_bucket_name');
    }
    set s3BucketName(value) {
        this._s3BucketName = value;
    }
    // Temporarily expose input value. Use with caution.
    get s3BucketNameInput() {
        return this._s3BucketName;
    }
    // s3_key_prefix - computed: false, optional: true, required: false
    _s3KeyPrefix;
    get s3KeyPrefix() {
        return this.getStringAttribute('s3_key_prefix');
    }
    set s3KeyPrefix(value) {
        this._s3KeyPrefix = value;
    }
    resetS3KeyPrefix() {
        this._s3KeyPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get s3KeyPrefixInput() {
        return this._s3KeyPrefix;
    }
    // sns_topic_name - computed: false, optional: true, required: false
    _snsTopicName;
    get snsTopicName() {
        return this.getStringAttribute('sns_topic_name');
    }
    set snsTopicName(value) {
        this._snsTopicName = value;
    }
    resetSnsTopicName() {
        this._snsTopicName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get snsTopicNameInput() {
        return this._snsTopicName;
    }
    // tags - computed: false, optional: true, required: false
    _tags;
    get tags() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags');
    }
    set tags(value) {
        this._tags = value;
    }
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsInput() {
        return this._tags;
    }
    // tags_all - computed: true, optional: true, required: false
    _tagsAll;
    get tagsAll() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags_all');
    }
    set tagsAll(value) {
        this._tagsAll = value;
    }
    resetTagsAll() {
        this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsAllInput() {
        return this._tagsAll;
    }
    // advanced_event_selector - computed: false, optional: true, required: false
    _advancedEventSelector;
    get advancedEventSelector() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('advanced_event_selector');
    }
    set advancedEventSelector(value) {
        this._advancedEventSelector = value;
    }
    resetAdvancedEventSelector() {
        this._advancedEventSelector = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get advancedEventSelectorInput() {
        return this._advancedEventSelector;
    }
    // event_selector - computed: false, optional: true, required: false
    _eventSelector;
    get eventSelector() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('event_selector');
    }
    set eventSelector(value) {
        this._eventSelector = value;
    }
    resetEventSelector() {
        this._eventSelector = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get eventSelectorInput() {
        return this._eventSelector;
    }
    // insight_selector - computed: false, optional: true, required: false
    _insightSelector;
    get insightSelector() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('insight_selector');
    }
    set insightSelector(value) {
        this._insightSelector = value;
    }
    resetInsightSelector() {
        this._insightSelector = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get insightSelectorInput() {
        return this._insightSelector;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            cloud_watch_logs_group_arn: cdktf.stringToTerraform(this._cloudWatchLogsGroupArn),
            cloud_watch_logs_role_arn: cdktf.stringToTerraform(this._cloudWatchLogsRoleArn),
            enable_log_file_validation: cdktf.booleanToTerraform(this._enableLogFileValidation),
            enable_logging: cdktf.booleanToTerraform(this._enableLogging),
            include_global_service_events: cdktf.booleanToTerraform(this._includeGlobalServiceEvents),
            is_multi_region_trail: cdktf.booleanToTerraform(this._isMultiRegionTrail),
            is_organization_trail: cdktf.booleanToTerraform(this._isOrganizationTrail),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            name: cdktf.stringToTerraform(this._name),
            s3_bucket_name: cdktf.stringToTerraform(this._s3BucketName),
            s3_key_prefix: cdktf.stringToTerraform(this._s3KeyPrefix),
            sns_topic_name: cdktf.stringToTerraform(this._snsTopicName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            advanced_event_selector: cdktf.listMapper(cloudtrailAdvancedEventSelectorToTerraform)(this._advancedEventSelector),
            event_selector: cdktf.listMapper(cloudtrailEventSelectorToTerraform)(this._eventSelector),
            insight_selector: cdktf.listMapper(cloudtrailInsightSelectorToTerraform)(this._insightSelector),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWR0cmFpbC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsiY2xvdWR0cmFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFnSC9CLE1BQU0sVUFBVSx1REFBdUQsQ0FBQyxNQUFxRDtJQUMzSCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFNBQVMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7UUFDdEUsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNsRSxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7UUFDN0MsYUFBYSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztRQUM3RSxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3hFLGVBQWUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7UUFDakYsV0FBVyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFD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