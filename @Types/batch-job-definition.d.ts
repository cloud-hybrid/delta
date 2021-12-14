import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Batch
*/
export interface BatchJobDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#container_properties BatchJobDefinition#container_properties}
    */
    readonly containerProperties?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#name BatchJobDefinition#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#parameters BatchJobDefinition#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#platform_capabilities BatchJobDefinition#platform_capabilities}
    */
    readonly platformCapabilities?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#propagate_tags BatchJobDefinition#propagate_tags}
    */
    readonly propagateTags?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#tags BatchJobDefinition#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#tags_all BatchJobDefinition#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#type BatchJobDefinition#type}
    */
    readonly type: string;
    /**
    * retry_strategy block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#retry_strategy BatchJobDefinition#retry_strategy}
    */
    readonly retryStrategy?: BatchJobDefinitionRetryStrategy;
    /**
    * timeout block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#timeout BatchJobDefinition#timeout}
    */
    readonly timeout?: BatchJobDefinitionTimeout;
}
export interface BatchJobDefinitionRetryStrategyEvaluateOnExit {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#action BatchJobDefinition#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#on_exit_code BatchJobDefinition#on_exit_code}
    */
    readonly onExitCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#on_reason BatchJobDefinition#on_reason}
    */
    readonly onReason?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#on_status_reason BatchJobDefinition#on_status_reason}
    */
    readonly onStatusReason?: string;
}
export declare function batchJobDefinitionRetryStrategyEvaluateOnExitToTerraform(struct?: BatchJobDefinitionRetryStrategyEvaluateOnExit): any;
export interface BatchJobDefinitionRetryStrategy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#attempts BatchJobDefinition#attempts}
    */
    readonly attempts?: number;
    /**
    * evaluate_on_exit block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#evaluate_on_exit BatchJobDefinition#evaluate_on_exit}
    */
    readonly evaluateOnExit?: BatchJobDefinitionRetryStrategyEvaluateOnExit[];
}
export declare function batchJobDefinitionRetryStrategyToTerraform(struct?: BatchJobDefinitionRetryStrategyOutputReference | BatchJobDefinitionRetryStrategy): any;
export declare class BatchJobDefinitionRetryStrategyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): BatchJobDefinitionRetryStrategy | undefined;
    set internalValue(value: BatchJobDefinitionRetryStrategy | undefined);
    private _attempts?;
    get attempts(): number;
    set attempts(value: number);
    resetAttempts(): void;
    get attemptsInput(): number;
    private _evaluateOnExit?;
    get evaluateOnExit(): BatchJobDefinitionRetryStrategyEvaluateOnExit[];
    set evaluateOnExit(value: BatchJobDefinitionRetryStrategyEvaluateOnExit[]);
    resetEvaluateOnExit(): void;
    get evaluateOnExitInput(): BatchJobDefinitionRetryStrategyEvaluateOnExit[];
}
export interface BatchJobDefinitionTimeout {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#attempt_duration_seconds BatchJobDefinition#attempt_duration_seconds}
    */
    readonly attemptDurationSeconds?: number;
}
export declare function batchJobDefinitionTimeoutToTerraform(struct?: BatchJobDefinitionTimeoutOutputReference | BatchJobDefinitionTimeout): any;
export declare class BatchJobDefinitionTimeoutOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): BatchJobDefinitionTimeout | undefined;
    set internalValue(value: BatchJobDefinitionTimeout | undefined);
    private _attemptDurationSeconds?;
    get attemptDurationSeconds(): number;
    set attemptDurationSeconds(value: number);
    resetAttemptDurationSeconds(): void;
    get attemptDurationSecondsInput(): number;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html aws_batch_job_definition}
*/
export declare class BatchJobDefinition extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html aws_batch_job_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BatchJobDefinitionConfig
    */
    constructor(scope: Construct, id: string, config: BatchJobDefinitionConfig);
    get arn(): string;
    private _containerProperties?;
    get containerProperties(): string;
    set containerProperties(value: string);
    resetContainerProperties(): void;
    get containerPropertiesInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _parameters?;
    get parameters(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set parameters(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetParameters(): void;
    get parametersInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _platformCapabilities?;
    get platformCapabilities(): string[];
    set platformCapabilities(value: string[]);
    resetPlatformCapabilities(): void;
    get platformCapabilitiesInput(): string[];
    private _propagateTags?;
    get propagateTags(): boolean | cdktf.IResolvable;
    set propagateTags(value: boolean | cdktf.IResolvable);
    resetPropagateTags(): void;
    get propagateTagsInput(): boolean | cdktf.IResolvable;
    get revision(): number;
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
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _retryStrategy;
    get retryStrategy(): BatchJobDefinitionRetryStrategyOutputReference;
    putRetryStrategy(value: BatchJobDefinitionRetryStrategy): void;
    resetRetryStrategy(): void;
    get retryStrategyInput(): BatchJobDefinitionRetryStrategy;
    private _timeout;
    get timeout(): BatchJobDefinitionTimeoutOutputReference;
    putTimeout(value: BatchJobDefinitionTimeout): void;
    resetTimeout(): void;
    get timeoutInput(): BatchJobDefinitionTimeout;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=batch-job-definition.d.ts.map