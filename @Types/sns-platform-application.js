// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html aws_sns_platform_application}
*/
export class SnsPlatformApplication extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_sns_platform_application";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html aws_sns_platform_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SnsPlatformApplicationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_sns_platform_application',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._eventDeliveryFailureTopicArn = config.eventDeliveryFailureTopicArn;
        this._eventEndpointCreatedTopicArn = config.eventEndpointCreatedTopicArn;
        this._eventEndpointDeletedTopicArn = config.eventEndpointDeletedTopicArn;
        this._eventEndpointUpdatedTopicArn = config.eventEndpointUpdatedTopicArn;
        this._failureFeedbackRoleArn = config.failureFeedbackRoleArn;
        this._name = config.name;
        this._platform = config.platform;
        this._platformCredential = config.platformCredential;
        this._platformPrincipal = config.platformPrincipal;
        this._successFeedbackRoleArn = config.successFeedbackRoleArn;
        this._successFeedbackSampleRate = config.successFeedbackSampleRate;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // event_delivery_failure_topic_arn - computed: false, optional: true, required: false
    _eventDeliveryFailureTopicArn;
    get eventDeliveryFailureTopicArn() {
        return this.getStringAttribute('event_delivery_failure_topic_arn');
    }
    set eventDeliveryFailureTopicArn(value) {
        this._eventDeliveryFailureTopicArn = value;
    }
    resetEventDeliveryFailureTopicArn() {
        this._eventDeliveryFailureTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get eventDeliveryFailureTopicArnInput() {
        return this._eventDeliveryFailureTopicArn;
    }
    // event_endpoint_created_topic_arn - computed: false, optional: true, required: false
    _eventEndpointCreatedTopicArn;
    get eventEndpointCreatedTopicArn() {
        return this.getStringAttribute('event_endpoint_created_topic_arn');
    }
    set eventEndpointCreatedTopicArn(value) {
        this._eventEndpointCreatedTopicArn = value;
    }
    resetEventEndpointCreatedTopicArn() {
        this._eventEndpointCreatedTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get eventEndpointCreatedTopicArnInput() {
        return this._eventEndpointCreatedTopicArn;
    }
    // event_endpoint_deleted_topic_arn - computed: false, optional: true, required: false
    _eventEndpointDeletedTopicArn;
    get eventEndpointDeletedTopicArn() {
        return this.getStringAttribute('event_endpoint_deleted_topic_arn');
    }
    set eventEndpointDeletedTopicArn(value) {
        this._eventEndpointDeletedTopicArn = value;
    }
    resetEventEndpointDeletedTopicArn() {
        this._eventEndpointDeletedTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get eventEndpointDeletedTopicArnInput() {
        return this._eventEndpointDeletedTopicArn;
    }
    // event_endpoint_updated_topic_arn - computed: false, optional: true, required: false
    _eventEndpointUpdatedTopicArn;
    get eventEndpointUpdatedTopicArn() {
        return this.getStringAttribute('event_endpoint_updated_topic_arn');
    }
    set eventEndpointUpdatedTopicArn(value) {
        this._eventEndpointUpdatedTopicArn = value;
    }
    resetEventEndpointUpdatedTopicArn() {
        this._eventEndpointUpdatedTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get eventEndpointUpdatedTopicArnInput() {
        return this._eventEndpointUpdatedTopicArn;
    }
    // failure_feedback_role_arn - computed: false, optional: true, required: false
    _failureFeedbackRoleArn;
    get failureFeedbackRoleArn() {
        return this.getStringAttribute('failure_feedback_role_arn');
    }
    set failureFeedbackRoleArn(value) {
        this._failureFeedbackRoleArn = value;
    }
    resetFailureFeedbackRoleArn() {
        this._failureFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get failureFeedbackRoleArnInput() {
        return this._failureFeedbackRoleArn;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
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
    // platform - computed: false, optional: false, required: true
    _platform;
    get platform() {
        return this.getStringAttribute('platform');
    }
    set platform(value) {
        this._platform = value;
    }
    // Temporarily expose input value. Use with caution.
    get platformInput() {
        return this._platform;
    }
    // platform_credential - computed: false, optional: false, required: true
    _platformCredential;
    get platformCredential() {
        return this.getStringAttribute('platform_credential');
    }
    set platformCredential(value) {
        this._platformCredential = value;
    }
    // Temporarily expose input value. Use with caution.
    get platformCredentialInput() {
        return this._platformCredential;
    }
    // platform_principal - computed: false, optional: true, required: false
    _platformPrincipal;
    get platformPrincipal() {
        return this.getStringAttribute('platform_principal');
    }
    set platformPrincipal(value) {
        this._platformPrincipal = value;
    }
    resetPlatformPrincipal() {
        this._platformPrincipal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get platformPrincipalInput() {
        return this._platformPrincipal;
    }
    // success_feedback_role_arn - computed: false, optional: true, required: false
    _successFeedbackRoleArn;
    get successFeedbackRoleArn() {
        return this.getStringAttribute('success_feedback_role_arn');
    }
    set successFeedbackRoleArn(value) {
        this._successFeedbackRoleArn = value;
    }
    resetSuccessFeedbackRoleArn() {
        this._successFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get successFeedbackRoleArnInput() {
        return this._successFeedbackRoleArn;
    }
    // success_feedback_sample_rate - computed: false, optional: true, required: false
    _successFeedbackSampleRate;
    get successFeedbackSampleRate() {
        return this.getStringAttribute('success_feedback_sample_rate');
    }
    set successFeedbackSampleRate(value) {
        this._successFeedbackSampleRate = value;
    }
    resetSuccessFeedbackSampleRate() {
        this._successFeedbackSampleRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get successFeedbackSampleRateInput() {
        return this._successFeedbackSampleRate;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            event_delivery_failure_topic_arn: cdktf.stringToTerraform(this._eventDeliveryFailureTopicArn),
            event_endpoint_created_topic_arn: cdktf.stringToTerraform(this._eventEndpointCreatedTopicArn),
            event_endpoint_deleted_topic_arn: cdktf.stringToTerraform(this._eventEndpointDeletedTopicArn),
            event_endpoint_updated_topic_arn: cdktf.stringToTerraform(this._eventEndpointUpdatedTopicArn),
            failure_feedback_role_arn: cdktf.stringToTerraform(this._failureFeedbackRoleArn),
            name: cdktf.stringToTerraform(this._name),
            platform: cdktf.stringToTerraform(this._platform),
            platform_credential: cdktf.stringToTerraform(this._platformCredential),
            platform_principal: cdktf.stringToTerraform(this._platformPrincipal),
            success_feedback_role_arn: cdktf.stringToTerraform(this._successFeedbackRoleArn),
            success_feedback_sample_rate: cdktf.stringToTerraform(this._successFeedbackSampleRate),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25zLXBsYXRmb3JtLWFwcGxpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJzbnMtcGxhdGZvcm0tYXBwbGljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBb0QvQjs7RUFFRTtBQUNGLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBRWpFLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ2IsTUFBTSxDQUFVLGNBQWMsR0FBVyw4QkFBOEIsQ0FBQztJQUUvRSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUFvQztRQUNuRixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLDhCQUE4QjtZQUNyRCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLDZCQUE2QixHQUFHLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQztRQUN6RSxJQUFJLENBQUMsNkJBQTZCLEdBQUcsTUFBTSxDQUFDLDRCQUE0QixDQUFDO1FBQ3pFLElBQUksQ0FBQyw2QkFBNkIsR0FBRyxNQUFNLENBQUMsNEJBQTRCLENBQUM7UUFDekUsSUFBSSxDQUFDLDZCQUE2QixHQUFHLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQztRQUN6RSxJQUFJLENBQUMsdUJBQXVCLEdBQUcsTUFBTSxDQUFDLHNCQUFzQixDQUFDO1FBQzdELElB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