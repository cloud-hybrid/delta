import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudFront
*/
export interface CloudfrontMonitoringSubscriptionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_monitoring_subscription.html#distribution_id CloudfrontMonitoringSubscription#distribution_id}
    */
    readonly distributionId: string;
    /**
    * monitoring_subscription block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_monitoring_subscription.html#monitoring_subscription CloudfrontMonitoringSubscription#monitoring_subscription}
    */
    readonly monitoringSubscription: CloudfrontMonitoringSubscriptionMonitoringSubscription;
}
export interface CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_monitoring_subscription.html#realtime_metrics_subscription_status CloudfrontMonitoringSubscription#realtime_metrics_subscription_status}
    */
    readonly realtimeMetricsSubscriptionStatus: string;
}
export declare function cloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigToTerraform(struct?: CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference | CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig): any;
export declare class CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig | undefined;
    set internalValue(value: CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig | undefined);
    private _realtimeMetricsSubscriptionStatus?;
    get realtimeMetricsSubscriptionStatus(): string;
    set realtimeMetricsSubscriptionStatus(value: string);
    get realtimeMetricsSubscriptionStatusInput(): string;
}
export interface CloudfrontMonitoringSubscriptionMonitoringSubscription {
    /**
    * realtime_metrics_subscription_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_monitoring_subscription.html#realtime_metrics_subscription_config CloudfrontMonitoringSubscription#realtime_metrics_subscription_config}
    */
    readonly realtimeMetricsSubscriptionConfig: CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig;
}
export declare function cloudfrontMonitoringSubscriptionMonitoringSubscriptionToTerraform(struct?: CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference | CloudfrontMonitoringSubscriptionMonitoringSubscription): any;
export declare class CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontMonitoringSubscriptionMonitoringSubscription | undefined;
    set internalValue(value: CloudfrontMonitoringSubscriptionMonitoringSubscription | undefined);
    private _realtimeMetricsSubscriptionConfig;
    get realtimeMetricsSubscriptionConfig(): CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference;
    putRealtimeMetricsSubscriptionConfig(value: CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig): void;
    get realtimeMetricsSubscriptionConfigInput(): CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_monitoring_subscription.html aws_cloudfront_monitoring_subscription}
*/
export declare class CloudfrontMonitoringSubscription extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_monitoring_subscription.html aws_cloudfront_monitoring_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontMonitoringSubscriptionConfig
    */
    constructor(scope: Construct, id: string, config: CloudfrontMonitoringSubscriptionConfig);
    private _distributionId?;
    get distributionId(): string;
    set distributionId(value: string);
    get distributionIdInput(): string;
    get id(): string;
    private _monitoringSubscription;
    get monitoringSubscription(): CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference;
    putMonitoringSubscription(value: CloudfrontMonitoringSubscriptionMonitoringSubscription): void;
    get monitoringSubscriptionInput(): CloudfrontMonitoringSubscriptionMonitoringSubscription;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cloudfront-monitoring-subscription.d.ts.map