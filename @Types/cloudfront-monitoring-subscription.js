// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function cloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        realtime_metrics_subscription_status: cdktf.stringToTerraform(struct.realtimeMetricsSubscriptionStatus),
    };
}
export class CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._realtimeMetricsSubscriptionStatus) {
            hasAnyValues = true;
            internalValueResult.realtimeMetricsSubscriptionStatus = this._realtimeMetricsSubscriptionStatus;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._realtimeMetricsSubscriptionStatus = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._realtimeMetricsSubscriptionStatus = value.realtimeMetricsSubscriptionStatus;
        }
    }
    // realtime_metrics_subscription_status - computed: false, optional: false, required: true
    _realtimeMetricsSubscriptionStatus;
    get realtimeMetricsSubscriptionStatus() {
        return this.getStringAttribute('realtime_metrics_subscription_status');
    }
    set realtimeMetricsSubscriptionStatus(value) {
        this._realtimeMetricsSubscriptionStatus = value;
    }
    // Temporarily expose input value. Use with caution.
    get realtimeMetricsSubscriptionStatusInput() {
        return this._realtimeMetricsSubscriptionStatus;
    }
}
export function cloudfrontMonitoringSubscriptionMonitoringSubscriptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        realtime_metrics_subscription_config: cloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigToTerraform(struct.realtimeMetricsSubscriptionConfig),
    };
}
export class CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference extends cdktf.ComplexObject {
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
        if (this._realtimeMetricsSubscriptionConfig?.internalValue) {
            hasAnyValues = true;
            internalValueResult.realtimeMetricsSubscriptionConfig = this._realtimeMetricsSubscriptionConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._realtimeMetricsSubscriptionConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._realtimeMetricsSubscriptionConfig.internalValue = value.realtimeMetricsSubscriptionConfig;
        }
    }
    // realtime_metrics_subscription_config - computed: false, optional: false, required: true
    _realtimeMetricsSubscriptionConfig = new CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference(this, "realtime_metrics_subscription_config", true);
    get realtimeMetricsSubscriptionConfig() {
        return this._realtimeMetricsSubscriptionConfig;
    }
    putRealtimeMetricsSubscriptionConfig(value) {
        this._realtimeMetricsSubscriptionConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get realtimeMetricsSubscriptionConfigInput() {
        return this._realtimeMetricsSubscriptionConfig.internalValue;
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_monitoring_subscription.html aws_cloudfront_monitoring_subscription}
*/
export class CloudfrontMonitoringSubscription extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_cloudfront_monitoring_subscription";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_monitoring_subscription.html aws_cloudfront_monitoring_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontMonitoringSubscriptionConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_cloudfront_monitoring_subscription',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._distributionId = config.distributionId;
        this._monitoringSubscription.internalValue = config.monitoringSubscription;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // distribution_id - computed: false, optional: false, required: true
    _distributionId;
    get distributionId() {
        return this.getStringAttribute('distribution_id');
    }
    set distributionId(value) {
        this._distributionId = value;
    }
    // Temporarily expose input value. Use with caution.
    get distributionIdInput() {
        return this._distributionId;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // monitoring_subscription - computed: false, optional: false, required: true
    _monitoringSubscription = new CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference(this, "monitoring_subscription", true);
    get monitoringSubscription() {
        return this._monitoringSubscription;
    }
    putMonitoringSubscription(value) {
        this._monitoringSubscription.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get monitoringSubscriptionInput() {
        return this._monitoringSubscription.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            distribution_id: cdktf.stringToTerraform(this._distributionId),
            monitoring_subscription: cloudfrontMonitoringSubscriptionMonitoringSubscriptionToTerraform(this._monitoringSubscription.internalValue),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRmcm9udC1tb25pdG9yaW5nLXN1YnNjcmlwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsiY2xvdWRmcm9udC1tb25pdG9yaW5nLXN1YnNjcmlwdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUF3Qi9CLE1BQU0sVUFBVSxrR0FBa0csQ0FBQyxNQUF5TTtJQUMxVCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLG9DQUFvQyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsaUNBQWlDLENBQUM7S0FDekcsQ0FBQTtBQUNILENBQUM7QUFFRCxNQUFNLE9BQU8sc0dBQXVHLFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFDckksYUFBYSxHQUFHLEtBQUssQ0FBQztJQUU5Qjs7OztNQUlFO0lBQ0YsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxrQ0FBa0MsRUFBRTtZQUMzQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGlDQUFpQyxHQUFHLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQztTQUNqRztRQUNE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