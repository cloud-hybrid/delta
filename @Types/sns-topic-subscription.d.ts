import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Simple Notification Service
*/
export interface SnsTopicSubscriptionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription.html#confirmation_timeout_in_minutes SnsTopicSubscription#confirmation_timeout_in_minutes}
    */
    readonly confirmationTimeoutInMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription.html#delivery_policy SnsTopicSubscription#delivery_policy}
    */
    readonly deliveryPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription.html#endpoint SnsTopicSubscription#endpoint}
    */
    readonly endpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription.html#endpoint_auto_confirms SnsTopicSubscription#endpoint_auto_confirms}
    */
    readonly endpointAutoConfirms?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription.html#filter_policy SnsTopicSubscription#filter_policy}
    */
    readonly filterPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription.html#protocol SnsTopicSubscription#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription.html#raw_message_delivery SnsTopicSubscription#raw_message_delivery}
    */
    readonly rawMessageDelivery?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription.html#redrive_policy SnsTopicSubscription#redrive_policy}
    */
    readonly redrivePolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription.html#subscription_role_arn SnsTopicSubscription#subscription_role_arn}
    */
    readonly subscriptionRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription.html#topic_arn SnsTopicSubscription#topic_arn}
    */
    readonly topicArn: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription.html aws_sns_topic_subscription}
*/
export declare class SnsTopicSubscription extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription.html aws_sns_topic_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SnsTopicSubscriptionConfig
    */
    constructor(scope: Construct, id: string, config: SnsTopicSubscriptionConfig);
    get arn(): string;
    private _confirmationTimeoutInMinutes?;
    get confirmationTimeoutInMinutes(): number;
    set confirmationTimeoutInMinutes(value: number);
    resetConfirmationTimeoutInMinutes(): void;
    get confirmationTimeoutInMinutesInput(): number;
    get confirmationWasAuthenticated(): any;
    private _deliveryPolicy?;
    get deliveryPolicy(): string;
    set deliveryPolicy(value: string);
    resetDeliveryPolicy(): void;
    get deliveryPolicyInput(): string;
    private _endpoint?;
    get endpoint(): string;
    set endpoint(value: string);
    get endpointInput(): string;
    private _endpointAutoConfirms?;
    get endpointAutoConfirms(): boolean | cdktf.IResolvable;
    set endpointAutoConfirms(value: boolean | cdktf.IResolvable);
    resetEndpointAutoConfirms(): void;
    get endpointAutoConfirmsInput(): boolean | cdktf.IResolvable;
    private _filterPolicy?;
    get filterPolicy(): string;
    set filterPolicy(value: string);
    resetFilterPolicy(): void;
    get filterPolicyInput(): string;
    get id(): string;
    get ownerId(): string;
    get pendingConfirmation(): any;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string;
    private _rawMessageDelivery?;
    get rawMessageDelivery(): boolean | cdktf.IResolvable;
    set rawMessageDelivery(value: boolean | cdktf.IResolvable);
    resetRawMessageDelivery(): void;
    get rawMessageDeliveryInput(): boolean | cdktf.IResolvable;
    private _redrivePolicy?;
    get redrivePolicy(): string;
    set redrivePolicy(value: string);
    resetRedrivePolicy(): void;
    get redrivePolicyInput(): string;
    private _subscriptionRoleArn?;
    get subscriptionRoleArn(): string;
    set subscriptionRoleArn(value: string);
    resetSubscriptionRoleArn(): void;
    get subscriptionRoleArnInput(): string;
    private _topicArn?;
    get topicArn(): string;
    set topicArn(value: string);
    get topicArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=sns-topic-subscription.d.ts.map