import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Simple Notification Service
*/
export interface SnsTopicConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#application_failure_feedback_role_arn SnsTopic#application_failure_feedback_role_arn}
    */
    readonly applicationFailureFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#application_success_feedback_role_arn SnsTopic#application_success_feedback_role_arn}
    */
    readonly applicationSuccessFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#application_success_feedback_sample_rate SnsTopic#application_success_feedback_sample_rate}
    */
    readonly applicationSuccessFeedbackSampleRate?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#content_based_deduplication SnsTopic#content_based_deduplication}
    */
    readonly contentBasedDeduplication?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#delivery_policy SnsTopic#delivery_policy}
    */
    readonly deliveryPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#display_name SnsTopic#display_name}
    */
    readonly displayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#fifo_topic SnsTopic#fifo_topic}
    */
    readonly fifoTopic?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#firehose_failure_feedback_role_arn SnsTopic#firehose_failure_feedback_role_arn}
    */
    readonly firehoseFailureFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#firehose_success_feedback_role_arn SnsTopic#firehose_success_feedback_role_arn}
    */
    readonly firehoseSuccessFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#firehose_success_feedback_sample_rate SnsTopic#firehose_success_feedback_sample_rate}
    */
    readonly firehoseSuccessFeedbackSampleRate?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#http_failure_feedback_role_arn SnsTopic#http_failure_feedback_role_arn}
    */
    readonly httpFailureFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#http_success_feedback_role_arn SnsTopic#http_success_feedback_role_arn}
    */
    readonly httpSuccessFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#http_success_feedback_sample_rate SnsTopic#http_success_feedback_sample_rate}
    */
    readonly httpSuccessFeedbackSampleRate?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#kms_master_key_id SnsTopic#kms_master_key_id}
    */
    readonly kmsMasterKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#lambda_failure_feedback_role_arn SnsTopic#lambda_failure_feedback_role_arn}
    */
    readonly lambdaFailureFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#lambda_success_feedback_role_arn SnsTopic#lambda_success_feedback_role_arn}
    */
    readonly lambdaSuccessFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#lambda_success_feedback_sample_rate SnsTopic#lambda_success_feedback_sample_rate}
    */
    readonly lambdaSuccessFeedbackSampleRate?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#name SnsTopic#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#name_prefix SnsTopic#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#policy SnsTopic#policy}
    */
    readonly policy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#sqs_failure_feedback_role_arn SnsTopic#sqs_failure_feedback_role_arn}
    */
    readonly sqsFailureFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#sqs_success_feedback_role_arn SnsTopic#sqs_success_feedback_role_arn}
    */
    readonly sqsSuccessFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#sqs_success_feedback_sample_rate SnsTopic#sqs_success_feedback_sample_rate}
    */
    readonly sqsSuccessFeedbackSampleRate?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#tags SnsTopic#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#tags_all SnsTopic#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html aws_sns_topic}
*/
export declare class SnsTopic extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html aws_sns_topic} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SnsTopicConfig = {}
    */
    constructor(scope: Construct, id: string, config?: SnsTopicConfig);
    private _applicationFailureFeedbackRoleArn?;
    get applicationFailureFeedbackRoleArn(): string;
    set applicationFailureFeedbackRoleArn(value: string);
    resetApplicationFailureFeedbackRoleArn(): void;
    get applicationFailureFeedbackRoleArnInput(): string;
    private _applicationSuccessFeedbackRoleArn?;
    get applicationSuccessFeedbackRoleArn(): string;
    set applicationSuccessFeedbackRoleArn(value: string);
    resetApplicationSuccessFeedbackRoleArn(): void;
    get applicationSuccessFeedbackRoleArnInput(): string;
    private _applicationSuccessFeedbackSampleRate?;
    get applicationSuccessFeedbackSampleRate(): number;
    set applicationSuccessFeedbackSampleRate(value: number);
    resetApplicationSuccessFeedbackSampleRate(): void;
    get applicationSuccessFeedbackSampleRateInput(): number;
    get arn(): string;
    private _contentBasedDeduplication?;
    get contentBasedDeduplication(): boolean | cdktf.IResolvable;
    set contentBasedDeduplication(value: boolean | cdktf.IResolvable);
    resetContentBasedDeduplication(): void;
    get contentBasedDeduplicationInput(): boolean | cdktf.IResolvable;
    private _deliveryPolicy?;
    get deliveryPolicy(): string;
    set deliveryPolicy(value: string);
    resetDeliveryPolicy(): void;
    get deliveryPolicyInput(): string;
    private _displayName?;
    get displayName(): string;
    set displayName(value: string);
    resetDisplayName(): void;
    get displayNameInput(): string;
    private _fifoTopic?;
    get fifoTopic(): boolean | cdktf.IResolvable;
    set fifoTopic(value: boolean | cdktf.IResolvable);
    resetFifoTopic(): void;
    get fifoTopicInput(): boolean | cdktf.IResolvable;
    private _firehoseFailureFeedbackRoleArn?;
    get firehoseFailureFeedbackRoleArn(): string;
    set firehoseFailureFeedbackRoleArn(value: string);
    resetFirehoseFailureFeedbackRoleArn(): void;
    get firehoseFailureFeedbackRoleArnInput(): string;
    private _firehoseSuccessFeedbackRoleArn?;
    get firehoseSuccessFeedbackRoleArn(): string;
    set firehoseSuccessFeedbackRoleArn(value: string);
    resetFirehoseSuccessFeedbackRoleArn(): void;
    get firehoseSuccessFeedbackRoleArnInput(): string;
    private _firehoseSuccessFeedbackSampleRate?;
    get firehoseSuccessFeedbackSampleRate(): number;
    set firehoseSuccessFeedbackSampleRate(value: number);
    resetFirehoseSuccessFeedbackSampleRate(): void;
    get firehoseSuccessFeedbackSampleRateInput(): number;
    private _httpFailureFeedbackRoleArn?;
    get httpFailureFeedbackRoleArn(): string;
    set httpFailureFeedbackRoleArn(value: string);
    resetHttpFailureFeedbackRoleArn(): void;
    get httpFailureFeedbackRoleArnInput(): string;
    private _httpSuccessFeedbackRoleArn?;
    get httpSuccessFeedbackRoleArn(): string;
    set httpSuccessFeedbackRoleArn(value: string);
    resetHttpSuccessFeedbackRoleArn(): void;
    get httpSuccessFeedbackRoleArnInput(): string;
    private _httpSuccessFeedbackSampleRate?;
    get httpSuccessFeedbackSampleRate(): number;
    set httpSuccessFeedbackSampleRate(value: number);
    resetHttpSuccessFeedbackSampleRate(): void;
    get httpSuccessFeedbackSampleRateInput(): number;
    get id(): string;
    private _kmsMasterKeyId?;
    get kmsMasterKeyId(): string;
    set kmsMasterKeyId(value: string);
    resetKmsMasterKeyId(): void;
    get kmsMasterKeyIdInput(): string;
    private _lambdaFailureFeedbackRoleArn?;
    get lambdaFailureFeedbackRoleArn(): string;
    set lambdaFailureFeedbackRoleArn(value: string);
    resetLambdaFailureFeedbackRoleArn(): void;
    get lambdaFailureFeedbackRoleArnInput(): string;
    private _lambdaSuccessFeedbackRoleArn?;
    get lambdaSuccessFeedbackRoleArn(): string;
    set lambdaSuccessFeedbackRoleArn(value: string);
    resetLambdaSuccessFeedbackRoleArn(): void;
    get lambdaSuccessFeedbackRoleArnInput(): string;
    private _lambdaSuccessFeedbackSampleRate?;
    get lambdaSuccessFeedbackSampleRate(): number;
    set lambdaSuccessFeedbackSampleRate(value: number);
    resetLambdaSuccessFeedbackSampleRate(): void;
    get lambdaSuccessFeedbackSampleRateInput(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string;
    get owner(): string;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    resetPolicy(): void;
    get policyInput(): string;
    private _sqsFailureFeedbackRoleArn?;
    get sqsFailureFeedbackRoleArn(): string;
    set sqsFailureFeedbackRoleArn(value: string);
    resetSqsFailureFeedbackRoleArn(): void;
    get sqsFailureFeedbackRoleArnInput(): string;
    private _sqsSuccessFeedbackRoleArn?;
    get sqsSuccessFeedbackRoleArn(): string;
    set sqsSuccessFeedbackRoleArn(value: string);
    resetSqsSuccessFeedbackRoleArn(): void;
    get sqsSuccessFeedbackRoleArnInput(): string;
    private _sqsSuccessFeedbackSampleRate?;
    get sqsSuccessFeedbackSampleRate(): number;
    set sqsSuccessFeedbackSampleRate(value: number);
    resetSqsSuccessFeedbackSampleRate(): void;
    get sqsSuccessFeedbackSampleRateInput(): number;
    private _tags?;
    get tags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tagsAll(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTagsAll(): void;
    get tagsAllInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=sns-topic.d.ts.map