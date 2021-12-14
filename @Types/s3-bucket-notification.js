// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function s3BucketNotificationLambdaFunctionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        events: cdktf.listMapper(cdktf.stringToTerraform)(struct.events),
        filter_prefix: cdktf.stringToTerraform(struct.filterPrefix),
        filter_suffix: cdktf.stringToTerraform(struct.filterSuffix),
        lambda_function_arn: cdktf.stringToTerraform(struct.lambdaFunctionArn),
    };
}
export function s3BucketNotificationQueueToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        events: cdktf.listMapper(cdktf.stringToTerraform)(struct.events),
        filter_prefix: cdktf.stringToTerraform(struct.filterPrefix),
        filter_suffix: cdktf.stringToTerraform(struct.filterSuffix),
        queue_arn: cdktf.stringToTerraform(struct.queueArn),
    };
}
export function s3BucketNotificationTopicToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        events: cdktf.listMapper(cdktf.stringToTerraform)(struct.events),
        filter_prefix: cdktf.stringToTerraform(struct.filterPrefix),
        filter_suffix: cdktf.stringToTerraform(struct.filterSuffix),
        topic_arn: cdktf.stringToTerraform(struct.topicArn),
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html aws_s3_bucket_notification}
*/
export class S3BucketNotification extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_s3_bucket_notification";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html aws_s3_bucket_notification} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketNotificationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_s3_bucket_notification',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._bucket = config.bucket;
        this._lambdaFunction = config.lambdaFunction;
        this._queue = config.queue;
        this._topic = config.topic;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // bucket - computed: false, optional: false, required: true
    _bucket;
    get bucket() {
        return this.getStringAttribute('bucket');
    }
    set bucket(value) {
        this._bucket = value;
    }
    // Temporarily expose input value. Use with caution.
    get bucketInput() {
        return this._bucket;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // lambda_function - computed: false, optional: true, required: false
    _lambdaFunction;
    get lambdaFunction() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('lambda_function');
    }
    set lambdaFunction(value) {
        this._lambdaFunction = value;
    }
    resetLambdaFunction() {
        this._lambdaFunction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lambdaFunctionInput() {
        return this._lambdaFunction;
    }
    // queue - computed: false, optional: true, required: false
    _queue;
    get queue() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('queue');
    }
    set queue(value) {
        this._queue = value;
    }
    resetQueue() {
        this._queue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queueInput() {
        return this._queue;
    }
    // topic - computed: false, optional: true, required: false
    _topic;
    get topic() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('topic');
    }
    set topic(value) {
        this._topic = value;
    }
    resetTopic() {
        this._topic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get topicInput() {
        return this._topic;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            bucket: cdktf.stringToTerraform(this._bucket),
            lambda_function: cdktf.listMapper(s3BucketNotificationLambdaFunctionToTerraform)(this._lambdaFunction),
            queue: cdktf.listMapper(s3BucketNotificationQueueToTerraform)(this._queue),
            topic: cdktf.listMapper(s3BucketNotificationTopicToTerraform)(this._topic),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiczMtYnVja2V0LW5vdGlmaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsiczMtYnVja2V0LW5vdGlmaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFvRC9CLE1BQU0sVUFBVSw2Q0FBNkMsQ0FBQyxNQUEyQztJQUN2RyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLE1BQU0sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7UUFDakUsYUFBYSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDO1FBQzVELGFBQWEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztRQUM1RCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGlCQUFpQixDQUFDO0tBQ3hFLENBQUE7QUFDSCxDQUFDO0FBeUJELE1BQU0sVUFBVSxvQ0FBb0MsQ0FBQyxNQUFrQztJQUNyRixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLE1BQU0sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7UUFDakUsYUFBYSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDO1FBQzVELGFBQWEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztRQUM1RCxTQUFTLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7S0FDckQsQ0FBQTtBQUNILENBQUM7QUF5QkQsTUFBTSxVQUFVLG9DQUFvQyxDQUFDLE1BQWtDO0lBQ3JGLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztRQUNqRSxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7UUFDNUQsYUFBYSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDO1FBQzVELFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztLQUNyRCxDQUFBO0FBQ0gsQ0FBQztBQUdEOztFQUVFO0FBQ0YsTUFBTSxPQUFPLG9CQUFxQixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFFL0Qsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDYixNQUFNLENBQVUsY0FBYyxHQUFXLDRCQUE0QixDQUFDO0lBRTdFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQWtDO1FBQ2pGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsNEJBQTRCO1lBQ25ELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVELGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUViLDREQUE0RDtJQUNwRCxPQUFPLENBQVU7SUFDekIsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNELElBQVcsTUFBTSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCx1REFBdUQ7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHFFQUFxRTtJQUM3RCxlQUFlLENBQXdDO0lBQy9ELElBQVcsY0FBYztRQUN2QixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsaUJBQWlCLENBQVEsQ0FBQztJQUNsRSxDQUFDO0lBQ0QsSUFBVyxjQUFjLENBQUMsS0FBMkM7UUFDbkUsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUNNLG1CQUFtQjtRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBRUQsMkRBQTJEO0lBQ25ELE1BQU0sQ0FBK0I7SUFDN0MsSUFBVyxLQUFLO1FBQ2Qsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLE9BQU8sQ0FBUSxDQUFDO0lBQ3hELENBQUM7SUFDRCxJQUFXLEtBQUssQ0FBQyxLQUFrQztRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ00sVUFBVTtRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQsMkRBQTJEO0lBQ25ELE1BQU0sQ0FBK0I7SUFDN0MsSUFBVyxLQUFLO1FBQ2Qsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLE9BQU8sQ0FBUSxDQUFDO0lBQ3hELENBQUM7SUFDRCxJQUFXLEtBQUssQ0FBQyxLQUFrQztRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ00sVUFBVTtRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxNQUFNLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0MsZUFBZSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsNkNBQTZDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQ3RHLEtBQUssRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLG9DQUFvQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMxRSxLQUFLLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDM0UsQ0FBQztJQUNKLENBQUMifQ==