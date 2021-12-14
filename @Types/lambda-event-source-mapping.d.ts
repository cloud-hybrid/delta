import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Lambda
*/
export interface LambdaEventSourceMappingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#batch_size LambdaEventSourceMapping#batch_size}
    */
    readonly batchSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#bisect_batch_on_function_error LambdaEventSourceMapping#bisect_batch_on_function_error}
    */
    readonly bisectBatchOnFunctionError?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#enabled LambdaEventSourceMapping#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#event_source_arn LambdaEventSourceMapping#event_source_arn}
    */
    readonly eventSourceArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#function_name LambdaEventSourceMapping#function_name}
    */
    readonly functionName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#function_response_types LambdaEventSourceMapping#function_response_types}
    */
    readonly functionResponseTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#maximum_batching_window_in_seconds LambdaEventSourceMapping#maximum_batching_window_in_seconds}
    */
    readonly maximumBatchingWindowInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#maximum_record_age_in_seconds LambdaEventSourceMapping#maximum_record_age_in_seconds}
    */
    readonly maximumRecordAgeInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#maximum_retry_attempts LambdaEventSourceMapping#maximum_retry_attempts}
    */
    readonly maximumRetryAttempts?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#parallelization_factor LambdaEventSourceMapping#parallelization_factor}
    */
    readonly parallelizationFactor?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#queues LambdaEventSourceMapping#queues}
    */
    readonly queues?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#starting_position LambdaEventSourceMapping#starting_position}
    */
    readonly startingPosition?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#starting_position_timestamp LambdaEventSourceMapping#starting_position_timestamp}
    */
    readonly startingPositionTimestamp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#topics LambdaEventSourceMapping#topics}
    */
    readonly topics?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#tumbling_window_in_seconds LambdaEventSourceMapping#tumbling_window_in_seconds}
    */
    readonly tumblingWindowInSeconds?: number;
    /**
    * destination_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#destination_config LambdaEventSourceMapping#destination_config}
    */
    readonly destinationConfig?: LambdaEventSourceMappingDestinationConfig;
    /**
    * filter_criteria block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#filter_criteria LambdaEventSourceMapping#filter_criteria}
    */
    readonly filterCriteria?: LambdaEventSourceMappingFilterCriteria;
    /**
    * self_managed_event_source block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#self_managed_event_source LambdaEventSourceMapping#self_managed_event_source}
    */
    readonly selfManagedEventSource?: LambdaEventSourceMappingSelfManagedEventSource;
    /**
    * source_access_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#source_access_configuration LambdaEventSourceMapping#source_access_configuration}
    */
    readonly sourceAccessConfiguration?: LambdaEventSourceMappingSourceAccessConfiguration[];
}
export interface LambdaEventSourceMappingDestinationConfigOnFailure {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#destination_arn LambdaEventSourceMapping#destination_arn}
    */
    readonly destinationArn: string;
}
export declare function lambdaEventSourceMappingDestinationConfigOnFailureToTerraform(struct?: LambdaEventSourceMappingDestinationConfigOnFailureOutputReference | LambdaEventSourceMappingDestinationConfigOnFailure): any;
export declare class LambdaEventSourceMappingDestinationConfigOnFailureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LambdaEventSourceMappingDestinationConfigOnFailure | undefined;
    set internalValue(value: LambdaEventSourceMappingDestinationConfigOnFailure | undefined);
    private _destinationArn?;
    get destinationArn(): string;
    set destinationArn(value: string);
    get destinationArnInput(): string;
}
export interface LambdaEventSourceMappingDestinationConfig {
    /**
    * on_failure block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#on_failure LambdaEventSourceMapping#on_failure}
    */
    readonly onFailure?: LambdaEventSourceMappingDestinationConfigOnFailure;
}
export declare function lambdaEventSourceMappingDestinationConfigToTerraform(struct?: LambdaEventSourceMappingDestinationConfigOutputReference | LambdaEventSourceMappingDestinationConfig): any;
export declare class LambdaEventSourceMappingDestinationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LambdaEventSourceMappingDestinationConfig | undefined;
    set internalValue(value: LambdaEventSourceMappingDestinationConfig | undefined);
    private _onFailure;
    get onFailure(): LambdaEventSourceMappingDestinationConfigOnFailureOutputReference;
    putOnFailure(value: LambdaEventSourceMappingDestinationConfigOnFailure): void;
    resetOnFailure(): void;
    get onFailureInput(): LambdaEventSourceMappingDestinationConfigOnFailure;
}
export interface LambdaEventSourceMappingFilterCriteriaFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#pattern LambdaEventSourceMapping#pattern}
    */
    readonly pattern?: string;
}
export declare function lambdaEventSourceMappingFilterCriteriaFilterToTerraform(struct?: LambdaEventSourceMappingFilterCriteriaFilter): any;
export interface LambdaEventSourceMappingFilterCriteria {
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#filter LambdaEventSourceMapping#filter}
    */
    readonly filter?: LambdaEventSourceMappingFilterCriteriaFilter[];
}
export declare function lambdaEventSourceMappingFilterCriteriaToTerraform(struct?: LambdaEventSourceMappingFilterCriteriaOutputReference | LambdaEventSourceMappingFilterCriteria): any;
export declare class LambdaEventSourceMappingFilterCriteriaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LambdaEventSourceMappingFilterCriteria | undefined;
    set internalValue(value: LambdaEventSourceMappingFilterCriteria | undefined);
    private _filter?;
    get filter(): LambdaEventSourceMappingFilterCriteriaFilter[];
    set filter(value: LambdaEventSourceMappingFilterCriteriaFilter[]);
    resetFilter(): void;
    get filterInput(): LambdaEventSourceMappingFilterCriteriaFilter[];
}
export interface LambdaEventSourceMappingSelfManagedEventSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#endpoints LambdaEventSourceMapping#endpoints}
    */
    readonly endpoints: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare function lambdaEventSourceMappingSelfManagedEventSourceToTerraform(struct?: LambdaEventSourceMappingSelfManagedEventSourceOutputReference | LambdaEventSourceMappingSelfManagedEventSource): any;
export declare class LambdaEventSourceMappingSelfManagedEventSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LambdaEventSourceMappingSelfManagedEventSource | undefined;
    set internalValue(value: LambdaEventSourceMappingSelfManagedEventSource | undefined);
    private _endpoints?;
    get endpoints(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set endpoints(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    get endpointsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
}
export interface LambdaEventSourceMappingSourceAccessConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#type LambdaEventSourceMapping#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#uri LambdaEventSourceMapping#uri}
    */
    readonly uri: string;
}
export declare function lambdaEventSourceMappingSourceAccessConfigurationToTerraform(struct?: LambdaEventSourceMappingSourceAccessConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html aws_lambda_event_source_mapping}
*/
export declare class LambdaEventSourceMapping extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html aws_lambda_event_source_mapping} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaEventSourceMappingConfig
    */
    constructor(scope: Construct, id: string, config: LambdaEventSourceMappingConfig);
    private _batchSize?;
    get batchSize(): number;
    set batchSize(value: number);
    resetBatchSize(): void;
    get batchSizeInput(): number;
    private _bisectBatchOnFunctionError?;
    get bisectBatchOnFunctionError(): boolean | cdktf.IResolvable;
    set bisectBatchOnFunctionError(value: boolean | cdktf.IResolvable);
    resetBisectBatchOnFunctionError(): void;
    get bisectBatchOnFunctionErrorInput(): boolean | cdktf.IResolvable;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _eventSourceArn?;
    get eventSourceArn(): string;
    set eventSourceArn(value: string);
    resetEventSourceArn(): void;
    get eventSourceArnInput(): string;
    get functionArn(): string;
    private _functionName?;
    get functionName(): string;
    set functionName(value: string);
    get functionNameInput(): string;
    private _functionResponseTypes?;
    get functionResponseTypes(): string[];
    set functionResponseTypes(value: string[]);
    resetFunctionResponseTypes(): void;
    get functionResponseTypesInput(): string[];
    get id(): string;
    get lastModified(): string;
    get lastProcessingResult(): string;
    private _maximumBatchingWindowInSeconds?;
    get maximumBatchingWindowInSeconds(): number;
    set maximumBatchingWindowInSeconds(value: number);
    resetMaximumBatchingWindowInSeconds(): void;
    get maximumBatchingWindowInSecondsInput(): number;
    private _maximumRecordAgeInSeconds?;
    get maximumRecordAgeInSeconds(): number;
    set maximumRecordAgeInSeconds(value: number);
    resetMaximumRecordAgeInSeconds(): void;
    get maximumRecordAgeInSecondsInput(): number;
    private _maximumRetryAttempts?;
    get maximumRetryAttempts(): number;
    set maximumRetryAttempts(value: number);
    resetMaximumRetryAttempts(): void;
    get maximumRetryAttemptsInput(): number;
    private _parallelizationFactor?;
    get parallelizationFactor(): number;
    set parallelizationFactor(value: number);
    resetParallelizationFactor(): void;
    get parallelizationFactorInput(): number;
    private _queues?;
    get queues(): string[];
    set queues(value: string[]);
    resetQueues(): void;
    get queuesInput(): string[];
    private _startingPosition?;
    get startingPosition(): string;
    set startingPosition(value: string);
    resetStartingPosition(): void;
    get startingPositionInput(): string;
    private _startingPositionTimestamp?;
    get startingPositionTimestamp(): string;
    set startingPositionTimestamp(value: string);
    resetStartingPositionTimestamp(): void;
    get startingPositionTimestampInput(): string;
    get state(): string;
    get stateTransitionReason(): string;
    private _topics?;
    get topics(): string[];
    set topics(value: string[]);
    resetTopics(): void;
    get topicsInput(): string[];
    private _tumblingWindowInSeconds?;
    get tumblingWindowInSeconds(): number;
    set tumblingWindowInSeconds(value: number);
    resetTumblingWindowInSeconds(): void;
    get tumblingWindowInSecondsInput(): number;
    get uuid(): string;
    private _destinationConfig;
    get destinationConfig(): LambdaEventSourceMappingDestinationConfigOutputReference;
    putDestinationConfig(value: LambdaEventSourceMappingDestinationConfig): void;
    resetDestinationConfig(): void;
    get destinationConfigInput(): LambdaEventSourceMappingDestinationConfig;
    private _filterCriteria;
    get filterCriteria(): LambdaEventSourceMappingFilterCriteriaOutputReference;
    putFilterCriteria(value: LambdaEventSourceMappingFilterCriteria): void;
    resetFilterCriteria(): void;
    get filterCriteriaInput(): LambdaEventSourceMappingFilterCriteria;
    private _selfManagedEventSource;
    get selfManagedEventSource(): LambdaEventSourceMappingSelfManagedEventSourceOutputReference;
    putSelfManagedEventSource(value: LambdaEventSourceMappingSelfManagedEventSource): void;
    resetSelfManagedEventSource(): void;
    get selfManagedEventSourceInput(): LambdaEventSourceMappingSelfManagedEventSource;
    private _sourceAccessConfiguration?;
    get sourceAccessConfiguration(): LambdaEventSourceMappingSourceAccessConfiguration[];
    set sourceAccessConfiguration(value: LambdaEventSourceMappingSourceAccessConfiguration[]);
    resetSourceAccessConfiguration(): void;
    get sourceAccessConfigurationInput(): LambdaEventSourceMappingSourceAccessConfiguration[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=lambda-event-source-mapping.d.ts.map