// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html aws_sqs_queue}
*/
export class SqsQueue extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_sqs_queue";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html aws_sqs_queue} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SqsQueueConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_sqs_queue',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._contentBasedDeduplication = config.contentBasedDeduplication;
        this._deduplicationScope = config.deduplicationScope;
        this._delaySeconds = config.delaySeconds;
        this._fifoQueue = config.fifoQueue;
        this._fifoThroughputLimit = config.fifoThroughputLimit;
        this._kmsDataKeyReusePeriodSeconds = config.kmsDataKeyReusePeriodSeconds;
        this._kmsMasterKeyId = config.kmsMasterKeyId;
        this._maxMessageSize = config.maxMessageSize;
        this._messageRetentionSeconds = config.messageRetentionSeconds;
        this._name = config.name;
        this._namePrefix = config.namePrefix;
        this._policy = config.policy;
        this._receiveWaitTimeSeconds = config.receiveWaitTimeSeconds;
        this._redrivePolicy = config.redrivePolicy;
        this._sqsManagedSseEnabled = config.sqsManagedSseEnabled;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._visibilityTimeoutSeconds = config.visibilityTimeoutSeconds;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // content_based_deduplication - computed: false, optional: true, required: false
    _contentBasedDeduplication;
    get contentBasedDeduplication() {
        return this.getBooleanAttribute('content_based_deduplication');
    }
    set contentBasedDeduplication(value) {
        this._contentBasedDeduplication = value;
    }
    resetContentBasedDeduplication() {
        this._contentBasedDeduplication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentBasedDeduplicationInput() {
        return this._contentBasedDeduplication;
    }
    // deduplication_scope - computed: true, optional: true, required: false
    _deduplicationScope;
    get deduplicationScope() {
        return this.getStringAttribute('deduplication_scope');
    }
    set deduplicationScope(value) {
        this._deduplicationScope = value;
    }
    resetDeduplicationScope() {
        this._deduplicationScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deduplicationScopeInput() {
        return this._deduplicationScope;
    }
    // delay_seconds - computed: false, optional: true, required: false
    _delaySeconds;
    get delaySeconds() {
        return this.getNumberAttribute('delay_seconds');
    }
    set delaySeconds(value) {
        this._delaySeconds = value;
    }
    resetDelaySeconds() {
        this._delaySeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get delaySecondsInput() {
        return this._delaySeconds;
    }
    // fifo_queue - computed: false, optional: true, required: false
    _fifoQueue;
    get fifoQueue() {
        return this.getBooleanAttribute('fifo_queue');
    }
    set fifoQueue(value) {
        this._fifoQueue = value;
    }
    resetFifoQueue() {
        this._fifoQueue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fifoQueueInput() {
        return this._fifoQueue;
    }
    // fifo_throughput_limit - computed: true, optional: true, required: false
    _fifoThroughputLimit;
    get fifoThroughputLimit() {
        return this.getStringAttribute('fifo_throughput_limit');
    }
    set fifoThroughputLimit(value) {
        this._fifoThroughputLimit = value;
    }
    resetFifoThroughputLimit() {
        this._fifoThroughputLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fifoThroughputLimitInput() {
        return this._fifoThroughputLimit;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // kms_data_key_reuse_period_seconds - computed: true, optional: true, required: false
    _kmsDataKeyReusePeriodSeconds;
    get kmsDataKeyReusePeriodSeconds() {
        return this.getNumberAttribute('kms_data_key_reuse_period_seconds');
    }
    set kmsDataKeyReusePeriodSeconds(value) {
        this._kmsDataKeyReusePeriodSeconds = value;
    }
    resetKmsDataKeyReusePeriodSeconds() {
        this._kmsDataKeyReusePeriodSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kmsDataKeyReusePeriodSecondsInput() {
        return this._kmsDataKeyReusePeriodSeconds;
    }
    // kms_master_key_id - computed: false, optional: true, required: false
    _kmsMasterKeyId;
    get kmsMasterKeyId() {
        return this.getStringAttribute('kms_master_key_id');
    }
    set kmsMasterKeyId(value) {
        this._kmsMasterKeyId = value;
    }
    resetKmsMasterKeyId() {
        this._kmsMasterKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kmsMasterKeyIdInput() {
        return this._kmsMasterKeyId;
    }
    // max_message_size - computed: false, optional: true, required: false
    _maxMessageSize;
    get maxMessageSize() {
        return this.getNumberAttribute('max_message_size');
    }
    set maxMessageSize(value) {
        this._maxMessageSize = value;
    }
    resetMaxMessageSize() {
        this._maxMessageSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxMessageSizeInput() {
        return this._maxMessageSize;
    }
    // message_retention_seconds - computed: false, optional: true, required: false
    _messageRetentionSeconds;
    get messageRetentionSeconds() {
        return this.getNumberAttribute('message_retention_seconds');
    }
    set messageRetentionSeconds(value) {
        this._messageRetentionSeconds = value;
    }
    resetMessageRetentionSeconds() {
        this._messageRetentionSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get messageRetentionSecondsInput() {
        return this._messageRetentionSeconds;
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
    // policy - computed: true, optional: true, required: false
    _policy;
    get policy() {
        return this.getStringAttribute('policy');
    }
    set policy(value) {
        this._policy = value;
    }
    resetPolicy() {
        this._policy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get policyInput() {
        return this._policy;
    }
    // receive_wait_time_seconds - computed: false, optional: true, required: false
    _receiveWaitTimeSeconds;
    get receiveWaitTimeSeconds() {
        return this.getNumberAttribute('receive_wait_time_seconds');
    }
    set receiveWaitTimeSeconds(value) {
        this._receiveWaitTimeSeconds = value;
    }
    resetReceiveWaitTimeSeconds() {
        this._receiveWaitTimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get receiveWaitTimeSecondsInput() {
        return this._receiveWaitTimeSeconds;
    }
    // redrive_policy - computed: false, optional: true, required: false
    _redrivePolicy;
    get redrivePolicy() {
        return this.getStringAttribute('redrive_policy');
    }
    set redrivePolicy(value) {
        this._redrivePolicy = value;
    }
    resetRedrivePolicy() {
        this._redrivePolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get redrivePolicyInput() {
        return this._redrivePolicy;
    }
    // sqs_managed_sse_enabled - computed: false, optional: true, required: false
    _sqsManagedSseEnabled;
    get sqsManagedSseEnabled() {
        return this.getBooleanAttribute('sqs_managed_sse_enabled');
    }
    set sqsManagedSseEnabled(value) {
        this._sqsManagedSseEnabled = value;
    }
    resetSqsManagedSseEnabled() {
        this._sqsManagedSseEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sqsManagedSseEnabledInput() {
        return this._sqsManagedSseEnabled;
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
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
    // visibility_timeout_seconds - computed: false, optional: true, required: false
    _visibilityTimeoutSeconds;
    get visibilityTimeoutSeconds() {
        return this.getNumberAttribute('visibility_timeout_seconds');
    }
    set visibilityTimeoutSeconds(value) {
        this._visibilityTimeoutSeconds = value;
    }
    resetVisibilityTimeoutSeconds() {
        this._visibilityTimeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get visibilityTimeoutSecondsInput() {
        return this._visibilityTimeoutSeconds;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            content_based_deduplication: cdktf.booleanToTerraform(this._contentBasedDeduplication),
            deduplication_scope: cdktf.stringToTerraform(this._deduplicationScope),
            delay_seconds: cdktf.numberToTerraform(this._delaySeconds),
            fifo_queue: cdktf.booleanToTerraform(this._fifoQueue),
            fifo_throughput_limit: cdktf.stringToTerraform(this._fifoThroughputLimit),
            kms_data_key_reuse_period_seconds: cdktf.numberToTerraform(this._kmsDataKeyReusePeriodSeconds),
            kms_master_key_id: cdktf.stringToTerraform(this._kmsMasterKeyId),
            max_message_size: cdktf.numberToTerraform(this._maxMessageSize),
            message_retention_seconds: cdktf.numberToTerraform(this._messageRetentionSeconds),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            policy: cdktf.stringToTerraform(this._policy),
            receive_wait_time_seconds: cdktf.numberToTerraform(this._receiveWaitTimeSeconds),
            redrive_policy: cdktf.stringToTerraform(this._redrivePolicy),
            sqs_managed_sse_enabled: cdktf.booleanToTerraform(this._sqsManagedSseEnabled),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            visibility_timeout_seconds: cdktf.numberToTerraform(this._visibilityTimeoutSeconds),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3FzLXF1ZXVlLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJzcXMtcXVldWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBZ0YvQjs7RUFFRTtBQUNGLE1BQU0sT0FBTyxRQUFTLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQUVuRCxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNiLE1BQU0sQ0FBVSxjQUFjLEdBQVcsZUFBZSxDQUFDO0lBRWhFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLFNBQXlCLEVBQUU7UUFDMUUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSxlQUFlO1lBQ3RDLDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsMEJBQTBCLEdBQUcsTUFBTSxDQUFDLHlCQUF5QixDQUFDO1FBQ25FLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUM7UUFDckQsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1FBQ3ZELElBQUksQ0FBQyw2QkFBNkIsR0FBRyxNQUFNLENBQUMsNEJBQTRCLENB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