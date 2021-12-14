// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html aws_sns_topic}
*/
export class SnsTopic extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_sns_topic";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html aws_sns_topic} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SnsTopicConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_sns_topic',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._applicationFailureFeedbackRoleArn = config.applicationFailureFeedbackRoleArn;
        this._applicationSuccessFeedbackRoleArn = config.applicationSuccessFeedbackRoleArn;
        this._applicationSuccessFeedbackSampleRate = config.applicationSuccessFeedbackSampleRate;
        this._contentBasedDeduplication = config.contentBasedDeduplication;
        this._deliveryPolicy = config.deliveryPolicy;
        this._displayName = config.displayName;
        this._fifoTopic = config.fifoTopic;
        this._firehoseFailureFeedbackRoleArn = config.firehoseFailureFeedbackRoleArn;
        this._firehoseSuccessFeedbackRoleArn = config.firehoseSuccessFeedbackRoleArn;
        this._firehoseSuccessFeedbackSampleRate = config.firehoseSuccessFeedbackSampleRate;
        this._httpFailureFeedbackRoleArn = config.httpFailureFeedbackRoleArn;
        this._httpSuccessFeedbackRoleArn = config.httpSuccessFeedbackRoleArn;
        this._httpSuccessFeedbackSampleRate = config.httpSuccessFeedbackSampleRate;
        this._kmsMasterKeyId = config.kmsMasterKeyId;
        this._lambdaFailureFeedbackRoleArn = config.lambdaFailureFeedbackRoleArn;
        this._lambdaSuccessFeedbackRoleArn = config.lambdaSuccessFeedbackRoleArn;
        this._lambdaSuccessFeedbackSampleRate = config.lambdaSuccessFeedbackSampleRate;
        this._name = config.name;
        this._namePrefix = config.namePrefix;
        this._policy = config.policy;
        this._sqsFailureFeedbackRoleArn = config.sqsFailureFeedbackRoleArn;
        this._sqsSuccessFeedbackRoleArn = config.sqsSuccessFeedbackRoleArn;
        this._sqsSuccessFeedbackSampleRate = config.sqsSuccessFeedbackSampleRate;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // application_failure_feedback_role_arn - computed: false, optional: true, required: false
    _applicationFailureFeedbackRoleArn;
    get applicationFailureFeedbackRoleArn() {
        return this.getStringAttribute('application_failure_feedback_role_arn');
    }
    set applicationFailureFeedbackRoleArn(value) {
        this._applicationFailureFeedbackRoleArn = value;
    }
    resetApplicationFailureFeedbackRoleArn() {
        this._applicationFailureFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get applicationFailureFeedbackRoleArnInput() {
        return this._applicationFailureFeedbackRoleArn;
    }
    // application_success_feedback_role_arn - computed: false, optional: true, required: false
    _applicationSuccessFeedbackRoleArn;
    get applicationSuccessFeedbackRoleArn() {
        return this.getStringAttribute('application_success_feedback_role_arn');
    }
    set applicationSuccessFeedbackRoleArn(value) {
        this._applicationSuccessFeedbackRoleArn = value;
    }
    resetApplicationSuccessFeedbackRoleArn() {
        this._applicationSuccessFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get applicationSuccessFeedbackRoleArnInput() {
        return this._applicationSuccessFeedbackRoleArn;
    }
    // application_success_feedback_sample_rate - computed: false, optional: true, required: false
    _applicationSuccessFeedbackSampleRate;
    get applicationSuccessFeedbackSampleRate() {
        return this.getNumberAttribute('application_success_feedback_sample_rate');
    }
    set applicationSuccessFeedbackSampleRate(value) {
        this._applicationSuccessFeedbackSampleRate = value;
    }
    resetApplicationSuccessFeedbackSampleRate() {
        this._applicationSuccessFeedbackSampleRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get applicationSuccessFeedbackSampleRateInput() {
        return this._applicationSuccessFeedbackSampleRate;
    }
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
    // delivery_policy - computed: false, optional: true, required: false
    _deliveryPolicy;
    get deliveryPolicy() {
        return this.getStringAttribute('delivery_policy');
    }
    set deliveryPolicy(value) {
        this._deliveryPolicy = value;
    }
    resetDeliveryPolicy() {
        this._deliveryPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deliveryPolicyInput() {
        return this._deliveryPolicy;
    }
    // display_name - computed: false, optional: true, required: false
    _displayName;
    get displayName() {
        return this.getStringAttribute('display_name');
    }
    set displayName(value) {
        this._displayName = value;
    }
    resetDisplayName() {
        this._displayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get displayNameInput() {
        return this._displayName;
    }
    // fifo_topic - computed: false, optional: true, required: false
    _fifoTopic;
    get fifoTopic() {
        return this.getBooleanAttribute('fifo_topic');
    }
    set fifoTopic(value) {
        this._fifoTopic = value;
    }
    resetFifoTopic() {
        this._fifoTopic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fifoTopicInput() {
        return this._fifoTopic;
    }
    // firehose_failure_feedback_role_arn - computed: false, optional: true, required: false
    _firehoseFailureFeedbackRoleArn;
    get firehoseFailureFeedbackRoleArn() {
        return this.getStringAttribute('firehose_failure_feedback_role_arn');
    }
    set firehoseFailureFeedbackRoleArn(value) {
        this._firehoseFailureFeedbackRoleArn = value;
    }
    resetFirehoseFailureFeedbackRoleArn() {
        this._firehoseFailureFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get firehoseFailureFeedbackRoleArnInput() {
        return this._firehoseFailureFeedbackRoleArn;
    }
    // firehose_success_feedback_role_arn - computed: false, optional: true, required: false
    _firehoseSuccessFeedbackRoleArn;
    get firehoseSuccessFeedbackRoleArn() {
        return this.getStringAttribute('firehose_success_feedback_role_arn');
    }
    set firehoseSuccessFeedbackRoleArn(value) {
        this._firehoseSuccessFeedbackRoleArn = value;
    }
    resetFirehoseSuccessFeedbackRoleArn() {
        this._firehoseSuccessFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get firehoseSuccessFeedbackRoleArnInput() {
        return this._firehoseSuccessFeedbackRoleArn;
    }
    // firehose_success_feedback_sample_rate - computed: false, optional: true, required: false
    _firehoseSuccessFeedbackSampleRate;
    get firehoseSuccessFeedbackSampleRate() {
        return this.getNumberAttribute('firehose_success_feedback_sample_rate');
    }
    set firehoseSuccessFeedbackSampleRate(value) {
        this._firehoseSuccessFeedbackSampleRate = value;
    }
    resetFirehoseSuccessFeedbackSampleRate() {
        this._firehoseSuccessFeedbackSampleRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get firehoseSuccessFeedbackSampleRateInput() {
        return this._firehoseSuccessFeedbackSampleRate;
    }
    // http_failure_feedback_role_arn - computed: false, optional: true, required: false
    _httpFailureFeedbackRoleArn;
    get httpFailureFeedbackRoleArn() {
        return this.getStringAttribute('http_failure_feedback_role_arn');
    }
    set httpFailureFeedbackRoleArn(value) {
        this._httpFailureFeedbackRoleArn = value;
    }
    resetHttpFailureFeedbackRoleArn() {
        this._httpFailureFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get httpFailureFeedbackRoleArnInput() {
        return this._httpFailureFeedbackRoleArn;
    }
    // http_success_feedback_role_arn - computed: false, optional: true, required: false
    _httpSuccessFeedbackRoleArn;
    get httpSuccessFeedbackRoleArn() {
        return this.getStringAttribute('http_success_feedback_role_arn');
    }
    set httpSuccessFeedbackRoleArn(value) {
        this._httpSuccessFeedbackRoleArn = value;
    }
    resetHttpSuccessFeedbackRoleArn() {
        this._httpSuccessFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get httpSuccessFeedbackRoleArnInput() {
        return this._httpSuccessFeedbackRoleArn;
    }
    // http_success_feedback_sample_rate - computed: false, optional: true, required: false
    _httpSuccessFeedbackSampleRate;
    get httpSuccessFeedbackSampleRate() {
        return this.getNumberAttribute('http_success_feedback_sample_rate');
    }
    set httpSuccessFeedbackSampleRate(value) {
        this._httpSuccessFeedbackSampleRate = value;
    }
    resetHttpSuccessFeedbackSampleRate() {
        this._httpSuccessFeedbackSampleRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get httpSuccessFeedbackSampleRateInput() {
        return this._httpSuccessFeedbackSampleRate;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
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
    // lambda_failure_feedback_role_arn - computed: false, optional: true, required: false
    _lambdaFailureFeedbackRoleArn;
    get lambdaFailureFeedbackRoleArn() {
        return this.getStringAttribute('lambda_failure_feedback_role_arn');
    }
    set lambdaFailureFeedbackRoleArn(value) {
        this._lambdaFailureFeedbackRoleArn = value;
    }
    resetLambdaFailureFeedbackRoleArn() {
        this._lambdaFailureFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lambdaFailureFeedbackRoleArnInput() {
        return this._lambdaFailureFeedbackRoleArn;
    }
    // lambda_success_feedback_role_arn - computed: false, optional: true, required: false
    _lambdaSuccessFeedbackRoleArn;
    get lambdaSuccessFeedbackRoleArn() {
        return this.getStringAttribute('lambda_success_feedback_role_arn');
    }
    set lambdaSuccessFeedbackRoleArn(value) {
        this._lambdaSuccessFeedbackRoleArn = value;
    }
    resetLambdaSuccessFeedbackRoleArn() {
        this._lambdaSuccessFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lambdaSuccessFeedbackRoleArnInput() {
        return this._lambdaSuccessFeedbackRoleArn;
    }
    // lambda_success_feedback_sample_rate - computed: false, optional: true, required: false
    _lambdaSuccessFeedbackSampleRate;
    get lambdaSuccessFeedbackSampleRate() {
        return this.getNumberAttribute('lambda_success_feedback_sample_rate');
    }
    set lambdaSuccessFeedbackSampleRate(value) {
        this._lambdaSuccessFeedbackSampleRate = value;
    }
    resetLambdaSuccessFeedbackSampleRate() {
        this._lambdaSuccessFeedbackSampleRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lambdaSuccessFeedbackSampleRateInput() {
        return this._lambdaSuccessFeedbackSampleRate;
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
    // owner - computed: true, optional: false, required: false
    get owner() {
        return this.getStringAttribute('owner');
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
    // sqs_failure_feedback_role_arn - computed: false, optional: true, required: false
    _sqsFailureFeedbackRoleArn;
    get sqsFailureFeedbackRoleArn() {
        return this.getStringAttribute('sqs_failure_feedback_role_arn');
    }
    set sqsFailureFeedbackRoleArn(value) {
        this._sqsFailureFeedbackRoleArn = value;
    }
    resetSqsFailureFeedbackRoleArn() {
        this._sqsFailureFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sqsFailureFeedbackRoleArnInput() {
        return this._sqsFailureFeedbackRoleArn;
    }
    // sqs_success_feedback_role_arn - computed: false, optional: true, required: false
    _sqsSuccessFeedbackRoleArn;
    get sqsSuccessFeedbackRoleArn() {
        return this.getStringAttribute('sqs_success_feedback_role_arn');
    }
    set sqsSuccessFeedbackRoleArn(value) {
        this._sqsSuccessFeedbackRoleArn = value;
    }
    resetSqsSuccessFeedbackRoleArn() {
        this._sqsSuccessFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sqsSuccessFeedbackRoleArnInput() {
        return this._sqsSuccessFeedbackRoleArn;
    }
    // sqs_success_feedback_sample_rate - computed: false, optional: true, required: false
    _sqsSuccessFeedbackSampleRate;
    get sqsSuccessFeedbackSampleRate() {
        return this.getNumberAttribute('sqs_success_feedback_sample_rate');
    }
    set sqsSuccessFeedbackSampleRate(value) {
        this._sqsSuccessFeedbackSampleRate = value;
    }
    resetSqsSuccessFeedbackSampleRate() {
        this._sqsSuccessFeedbackSampleRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sqsSuccessFeedbackSampleRateInput() {
        return this._sqsSuccessFeedbackSampleRate;
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            application_failure_feedback_role_arn: cdktf.stringToTerraform(this._applicationFailureFeedbackRoleArn),
            application_success_feedback_role_arn: cdktf.stringToTerraform(this._applicationSuccessFeedbackRoleArn),
            application_success_feedback_sample_rate: cdktf.numberToTerraform(this._applicationSuccessFeedbackSampleRate),
            content_based_deduplication: cdktf.booleanToTerraform(this._contentBasedDeduplication),
            delivery_policy: cdktf.stringToTerraform(this._deliveryPolicy),
            display_name: cdktf.stringToTerraform(this._displayName),
            fifo_topic: cdktf.booleanToTerraform(this._fifoTopic),
            firehose_failure_feedback_role_arn: cdktf.stringToTerraform(this._firehoseFailureFeedbackRoleArn),
            firehose_success_feedback_role_arn: cdktf.stringToTerraform(this._firehoseSuccessFeedbackRoleArn),
            firehose_success_feedback_sample_rate: cdktf.numberToTerraform(this._firehoseSuccessFeedbackSampleRate),
            http_failure_feedback_role_arn: cdktf.stringToTerraform(this._httpFailureFeedbackRoleArn),
            http_success_feedback_role_arn: cdktf.stringToTerraform(this._httpSuccessFeedbackRoleArn),
            http_success_feedback_sample_rate: cdktf.numberToTerraform(this._httpSuccessFeedbackSampleRate),
            kms_master_key_id: cdktf.stringToTerraform(this._kmsMasterKeyId),
            lambda_failure_feedback_role_arn: cdktf.stringToTerraform(this._lambdaFailureFeedbackRoleArn),
            lambda_success_feedback_role_arn: cdktf.stringToTerraform(this._lambdaSuccessFeedbackRoleArn),
            lambda_success_feedback_sample_rate: cdktf.numberToTerraform(this._lambdaSuccessFeedbackSampleRate),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            policy: cdktf.stringToTerraform(this._policy),
            sqs_failure_feedback_role_arn: cdktf.stringToTerraform(this._sqsFailureFeedbackRoleArn),
            sqs_success_feedback_role_arn: cdktf.stringToTerraform(this._sqsSuccessFeedbackRoleArn),
            sqs_success_feedback_sample_rate: cdktf.numberToTerraform(this._sqsSuccessFeedbackSampleRate),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25zLXRvcGljLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJzbnMtdG9waWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBNEcvQjs7RUFFRTtBQUNGLE1BQU0sT0FBTyxRQUFTLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQUVuRCxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNiLE1BQU0sQ0FBVSxjQUFjLEdBQVcsZUFBZSxDQUFDO0lBRWhFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLFNBQXlCLEVBQUU7UUFDMUUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSxlQUFlO1lBQ3RDLDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsa0NBQWtDLEdBQUcsTUFBTSxDQUFDLGlDQUFpQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxrQ0FBa0MsR0FBRyxNQUFNLENBQUMsaUNBQWlDLENBQUM7UUFDbkYsSUFBSSxDQUFDLHFDQUFxQyxHQUFHLE1BQU0sQ0FBQyxvQ0FBb0MsQ0FBQztRQUN6RixJQUFJLENBQUMsMEJBQTBCLEdBQUcsTUFBTSxDQUFDLHlCQUF5QixDQUFDO1FBQ25FLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUM3QyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENB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