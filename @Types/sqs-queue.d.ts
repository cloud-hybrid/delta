import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Simple Queue Service
*/
export interface SqsQueueConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#content_based_deduplication SqsQueue#content_based_deduplication}
    */
    readonly contentBasedDeduplication?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#deduplication_scope SqsQueue#deduplication_scope}
    */
    readonly deduplicationScope?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#delay_seconds SqsQueue#delay_seconds}
    */
    readonly delaySeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#fifo_queue SqsQueue#fifo_queue}
    */
    readonly fifoQueue?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#fifo_throughput_limit SqsQueue#fifo_throughput_limit}
    */
    readonly fifoThroughputLimit?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#kms_data_key_reuse_period_seconds SqsQueue#kms_data_key_reuse_period_seconds}
    */
    readonly kmsDataKeyReusePeriodSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#kms_master_key_id SqsQueue#kms_master_key_id}
    */
    readonly kmsMasterKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#max_message_size SqsQueue#max_message_size}
    */
    readonly maxMessageSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#message_retention_seconds SqsQueue#message_retention_seconds}
    */
    readonly messageRetentionSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#name SqsQueue#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#name_prefix SqsQueue#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#policy SqsQueue#policy}
    */
    readonly policy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#receive_wait_time_seconds SqsQueue#receive_wait_time_seconds}
    */
    readonly receiveWaitTimeSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#redrive_policy SqsQueue#redrive_policy}
    */
    readonly redrivePolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#sqs_managed_sse_enabled SqsQueue#sqs_managed_sse_enabled}
    */
    readonly sqsManagedSseEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#tags SqsQueue#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#tags_all SqsQueue#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#visibility_timeout_seconds SqsQueue#visibility_timeout_seconds}
    */
    readonly visibilityTimeoutSeconds?: number;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html aws_sqs_queue}
*/
export declare class SqsQueue extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html aws_sqs_queue} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SqsQueueConfig = {}
    */
    constructor(scope: Construct, id: string, config?: SqsQueueConfig);
    get arn(): string;
    private _contentBasedDeduplication?;
    get contentBasedDeduplication(): boolean | cdktf.IResolvable;
    set contentBasedDeduplication(value: boolean | cdktf.IResolvable);
    resetContentBasedDeduplication(): void;
    get contentBasedDeduplicationInput(): boolean | cdktf.IResolvable;
    private _deduplicationScope?;
    get deduplicationScope(): string;
    set deduplicationScope(value: string);
    resetDeduplicationScope(): void;
    get deduplicationScopeInput(): string;
    private _delaySeconds?;
    get delaySeconds(): number;
    set delaySeconds(value: number);
    resetDelaySeconds(): void;
    get delaySecondsInput(): number;
    private _fifoQueue?;
    get fifoQueue(): boolean | cdktf.IResolvable;
    set fifoQueue(value: boolean | cdktf.IResolvable);
    resetFifoQueue(): void;
    get fifoQueueInput(): boolean | cdktf.IResolvable;
    private _fifoThroughputLimit?;
    get fifoThroughputLimit(): string;
    set fifoThroughputLimit(value: string);
    resetFifoThroughputLimit(): void;
    get fifoThroughputLimitInput(): string;
    get id(): string;
    private _kmsDataKeyReusePeriodSeconds?;
    get kmsDataKeyReusePeriodSeconds(): number;
    set kmsDataKeyReusePeriodSeconds(value: number);
    resetKmsDataKeyReusePeriodSeconds(): void;
    get kmsDataKeyReusePeriodSecondsInput(): number;
    private _kmsMasterKeyId?;
    get kmsMasterKeyId(): string;
    set kmsMasterKeyId(value: string);
    resetKmsMasterKeyId(): void;
    get kmsMasterKeyIdInput(): string;
    private _maxMessageSize?;
    get maxMessageSize(): number;
    set maxMessageSize(value: number);
    resetMaxMessageSize(): void;
    get maxMessageSizeInput(): number;
    private _messageRetentionSeconds?;
    get messageRetentionSeconds(): number;
    set messageRetentionSeconds(value: number);
    resetMessageRetentionSeconds(): void;
    get messageRetentionSecondsInput(): number;
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
    private _policy?;
    get policy(): string;
    set policy(value: string);
    resetPolicy(): void;
    get policyInput(): string;
    private _receiveWaitTimeSeconds?;
    get receiveWaitTimeSeconds(): number;
    set receiveWaitTimeSeconds(value: number);
    resetReceiveWaitTimeSeconds(): void;
    get receiveWaitTimeSecondsInput(): number;
    private _redrivePolicy?;
    get redrivePolicy(): string;
    set redrivePolicy(value: string);
    resetRedrivePolicy(): void;
    get redrivePolicyInput(): string;
    private _sqsManagedSseEnabled?;
    get sqsManagedSseEnabled(): boolean | cdktf.IResolvable;
    set sqsManagedSseEnabled(value: boolean | cdktf.IResolvable);
    resetSqsManagedSseEnabled(): void;
    get sqsManagedSseEnabledInput(): boolean | cdktf.IResolvable;
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
    get url(): string;
    private _visibilityTimeoutSeconds?;
    get visibilityTimeoutSeconds(): number;
    set visibilityTimeoutSeconds(value: number);
    resetVisibilityTimeoutSeconds(): void;
    get visibilityTimeoutSecondsInput(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=sqs-queue.d.ts.map