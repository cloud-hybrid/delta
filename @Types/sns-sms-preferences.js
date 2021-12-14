// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences.html aws_sns_sms_preferences}
*/
export class SnsSmsPreferences extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_sns_sms_preferences";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences.html aws_sns_sms_preferences} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SnsSmsPreferencesConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_sns_sms_preferences',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._defaultSenderId = config.defaultSenderId;
        this._defaultSmsType = config.defaultSmsType;
        this._deliveryStatusIamRoleArn = config.deliveryStatusIamRoleArn;
        this._deliveryStatusSuccessSamplingRate = config.deliveryStatusSuccessSamplingRate;
        this._monthlySpendLimit = config.monthlySpendLimit;
        this._usageReportS3Bucket = config.usageReportS3Bucket;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // default_sender_id - computed: false, optional: true, required: false
    _defaultSenderId;
    get defaultSenderId() {
        return this.getStringAttribute('default_sender_id');
    }
    set defaultSenderId(value) {
        this._defaultSenderId = value;
    }
    resetDefaultSenderId() {
        this._defaultSenderId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultSenderIdInput() {
        return this._defaultSenderId;
    }
    // default_sms_type - computed: false, optional: true, required: false
    _defaultSmsType;
    get defaultSmsType() {
        return this.getStringAttribute('default_sms_type');
    }
    set defaultSmsType(value) {
        this._defaultSmsType = value;
    }
    resetDefaultSmsType() {
        this._defaultSmsType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultSmsTypeInput() {
        return this._defaultSmsType;
    }
    // delivery_status_iam_role_arn - computed: false, optional: true, required: false
    _deliveryStatusIamRoleArn;
    get deliveryStatusIamRoleArn() {
        return this.getStringAttribute('delivery_status_iam_role_arn');
    }
    set deliveryStatusIamRoleArn(value) {
        this._deliveryStatusIamRoleArn = value;
    }
    resetDeliveryStatusIamRoleArn() {
        this._deliveryStatusIamRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deliveryStatusIamRoleArnInput() {
        return this._deliveryStatusIamRoleArn;
    }
    // delivery_status_success_sampling_rate - computed: false, optional: true, required: false
    _deliveryStatusSuccessSamplingRate;
    get deliveryStatusSuccessSamplingRate() {
        return this.getStringAttribute('delivery_status_success_sampling_rate');
    }
    set deliveryStatusSuccessSamplingRate(value) {
        this._deliveryStatusSuccessSamplingRate = value;
    }
    resetDeliveryStatusSuccessSamplingRate() {
        this._deliveryStatusSuccessSamplingRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deliveryStatusSuccessSamplingRateInput() {
        return this._deliveryStatusSuccessSamplingRate;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // monthly_spend_limit - computed: true, optional: true, required: false
    _monthlySpendLimit;
    get monthlySpendLimit() {
        return this.getNumberAttribute('monthly_spend_limit');
    }
    set monthlySpendLimit(value) {
        this._monthlySpendLimit = value;
    }
    resetMonthlySpendLimit() {
        this._monthlySpendLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get monthlySpendLimitInput() {
        return this._monthlySpendLimit;
    }
    // usage_report_s3_bucket - computed: false, optional: true, required: false
    _usageReportS3Bucket;
    get usageReportS3Bucket() {
        return this.getStringAttribute('usage_report_s3_bucket');
    }
    set usageReportS3Bucket(value) {
        this._usageReportS3Bucket = value;
    }
    resetUsageReportS3Bucket() {
        this._usageReportS3Bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get usageReportS3BucketInput() {
        return this._usageReportS3Bucket;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            default_sender_id: cdktf.stringToTerraform(this._defaultSenderId),
            default_sms_type: cdktf.stringToTerraform(this._defaultSmsType),
            delivery_status_iam_role_arn: cdktf.stringToTerraform(this._deliveryStatusIamRoleArn),
            delivery_status_success_sampling_rate: cdktf.stringToTerraform(this._deliveryStatusSuccessSamplingRate),
            monthly_spend_limit: cdktf.numberToTerraform(this._monthlySpendLimit),
            usage_report_s3_bucket: cdktf.stringToTerraform(this._usageReportS3Bucket),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25zLXNtcy1wcmVmZXJlbmNlcy5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsic25zLXNtcy1wcmVmZXJlbmNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFnQy9COztFQUVFO0FBQ0YsTUFBTSxPQUFPLGlCQUFrQixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFFNUQsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDYixNQUFNLENBQVUsY0FBYyxHQUFXLHlCQUF5QixDQUFDO0lBRTFFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLFNBQWtDLEVBQUU7UUFDbkYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSx5QkFBeUI7WUFDaEQsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQy9DLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUM3QyxJQUFJLENBQUMseUJBQXlCLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDO1FBQ2pFLElBQUksQ0FBQyxrQ0FBa0MsR0FBRyxNQUFNLENBQUMsaUNBQWlDLENBQUM7UUFDbkYsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztRQUNuRCxJQUFJLENBQUMsb0JB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