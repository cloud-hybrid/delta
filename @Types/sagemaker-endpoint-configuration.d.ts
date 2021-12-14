import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS SageMaker
*/
export interface SagemakerEndpointConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#kms_key_arn SagemakerEndpointConfiguration#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#name SagemakerEndpointConfiguration#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#tags SagemakerEndpointConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#tags_all SagemakerEndpointConfiguration#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * async_inference_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#async_inference_config SagemakerEndpointConfiguration#async_inference_config}
    */
    readonly asyncInferenceConfig?: SagemakerEndpointConfigurationAsyncInferenceConfig;
    /**
    * data_capture_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#data_capture_config SagemakerEndpointConfiguration#data_capture_config}
    */
    readonly dataCaptureConfig?: SagemakerEndpointConfigurationDataCaptureConfig;
    /**
    * production_variants block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#production_variants SagemakerEndpointConfiguration#production_variants}
    */
    readonly productionVariants: SagemakerEndpointConfigurationProductionVariants[];
}
export interface SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#max_concurrent_invocations_per_instance SagemakerEndpointConfiguration#max_concurrent_invocations_per_instance}
    */
    readonly maxConcurrentInvocationsPerInstance?: number;
}
export declare function sagemakerEndpointConfigurationAsyncInferenceConfigClientConfigToTerraform(struct?: SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference | SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig): any;
export declare class SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig | undefined;
    set internalValue(value: SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig | undefined);
    private _maxConcurrentInvocationsPerInstance?;
    get maxConcurrentInvocationsPerInstance(): number;
    set maxConcurrentInvocationsPerInstance(value: number);
    resetMaxConcurrentInvocationsPerInstance(): void;
    get maxConcurrentInvocationsPerInstanceInput(): number;
}
export interface SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#error_topic SagemakerEndpointConfiguration#error_topic}
    */
    readonly errorTopic?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#success_topic SagemakerEndpointConfiguration#success_topic}
    */
    readonly successTopic?: string;
}
export declare function sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigToTerraform(struct?: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference | SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig): any;
export declare class SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig | undefined;
    set internalValue(value: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig | undefined);
    private _errorTopic?;
    get errorTopic(): string;
    set errorTopic(value: string);
    resetErrorTopic(): void;
    get errorTopicInput(): string;
    private _successTopic?;
    get successTopic(): string;
    set successTopic(value: string);
    resetSuccessTopic(): void;
    get successTopicInput(): string;
}
export interface SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#kms_key_id SagemakerEndpointConfiguration#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#s3_output_path SagemakerEndpointConfiguration#s3_output_path}
    */
    readonly s3OutputPath: string;
    /**
    * notification_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#notification_config SagemakerEndpointConfiguration#notification_config}
    */
    readonly notificationConfig?: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig;
}
export declare function sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigToTerraform(struct?: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference | SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig): any;
export declare class SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig | undefined;
    set internalValue(value: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig | undefined);
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string;
    private _s3OutputPath?;
    get s3OutputPath(): string;
    set s3OutputPath(value: string);
    get s3OutputPathInput(): string;
    private _notificationConfig;
    get notificationConfig(): SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference;
    putNotificationConfig(value: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig): void;
    resetNotificationConfig(): void;
    get notificationConfigInput(): SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig;
}
export interface SagemakerEndpointConfigurationAsyncInferenceConfig {
    /**
    * client_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#client_config SagemakerEndpointConfiguration#client_config}
    */
    readonly clientConfig?: SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig;
    /**
    * output_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#output_config SagemakerEndpointConfiguration#output_config}
    */
    readonly outputConfig: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig;
}
export declare function sagemakerEndpointConfigurationAsyncInferenceConfigToTerraform(struct?: SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference | SagemakerEndpointConfigurationAsyncInferenceConfig): any;
export declare class SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerEndpointConfigurationAsyncInferenceConfig | undefined;
    set internalValue(value: SagemakerEndpointConfigurationAsyncInferenceConfig | undefined);
    private _clientConfig;
    get clientConfig(): SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference;
    putClientConfig(value: SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig): void;
    resetClientConfig(): void;
    get clientConfigInput(): SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig;
    private _outputConfig;
    get outputConfig(): SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference;
    putOutputConfig(value: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig): void;
    get outputConfigInput(): SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig;
}
export interface SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#csv_content_types SagemakerEndpointConfiguration#csv_content_types}
    */
    readonly csvContentTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#json_content_types SagemakerEndpointConfiguration#json_content_types}
    */
    readonly jsonContentTypes?: string[];
}
export declare function sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToTerraform(struct?: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference | SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader): any;
export declare class SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader | undefined;
    set internalValue(value: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader | undefined);
    private _csvContentTypes?;
    get csvContentTypes(): string[];
    set csvContentTypes(value: string[]);
    resetCsvContentTypes(): void;
    get csvContentTypesInput(): string[];
    private _jsonContentTypes?;
    get jsonContentTypes(): string[];
    set jsonContentTypes(value: string[]);
    resetJsonContentTypes(): void;
    get jsonContentTypesInput(): string[];
}
export interface SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#capture_mode SagemakerEndpointConfiguration#capture_mode}
    */
    readonly captureMode: string;
}
export declare function sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToTerraform(struct?: SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions): any;
export interface SagemakerEndpointConfigurationDataCaptureConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#destination_s3_uri SagemakerEndpointConfiguration#destination_s3_uri}
    */
    readonly destinationS3Uri: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#enable_capture SagemakerEndpointConfiguration#enable_capture}
    */
    readonly enableCapture?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#initial_sampling_percentage SagemakerEndpointConfiguration#initial_sampling_percentage}
    */
    readonly initialSamplingPercentage: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#kms_key_id SagemakerEndpointConfiguration#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * capture_content_type_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#capture_content_type_header SagemakerEndpointConfiguration#capture_content_type_header}
    */
    readonly captureContentTypeHeader?: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader;
    /**
    * capture_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#capture_options SagemakerEndpointConfiguration#capture_options}
    */
    readonly captureOptions: SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions[];
}
export declare function sagemakerEndpointConfigurationDataCaptureConfigToTerraform(struct?: SagemakerEndpointConfigurationDataCaptureConfigOutputReference | SagemakerEndpointConfigurationDataCaptureConfig): any;
export declare class SagemakerEndpointConfigurationDataCaptureConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerEndpointConfigurationDataCaptureConfig | undefined;
    set internalValue(value: SagemakerEndpointConfigurationDataCaptureConfig | undefined);
    private _destinationS3Uri?;
    get destinationS3Uri(): string;
    set destinationS3Uri(value: string);
    get destinationS3UriInput(): string;
    private _enableCapture?;
    get enableCapture(): boolean | cdktf.IResolvable;
    set enableCapture(value: boolean | cdktf.IResolvable);
    resetEnableCapture(): void;
    get enableCaptureInput(): boolean | cdktf.IResolvable;
    private _initialSamplingPercentage?;
    get initialSamplingPercentage(): number;
    set initialSamplingPercentage(value: number);
    get initialSamplingPercentageInput(): number;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string;
    private _captureContentTypeHeader;
    get captureContentTypeHeader(): SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference;
    putCaptureContentTypeHeader(value: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader): void;
    resetCaptureContentTypeHeader(): void;
    get captureContentTypeHeaderInput(): SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader;
    private _captureOptions?;
    get captureOptions(): SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions[];
    set captureOptions(value: SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions[]);
    get captureOptionsInput(): SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions[];
}
export interface SagemakerEndpointConfigurationProductionVariants {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#accelerator_type SagemakerEndpointConfiguration#accelerator_type}
    */
    readonly acceleratorType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#initial_instance_count SagemakerEndpointConfiguration#initial_instance_count}
    */
    readonly initialInstanceCount: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#initial_variant_weight SagemakerEndpointConfiguration#initial_variant_weight}
    */
    readonly initialVariantWeight?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#instance_type SagemakerEndpointConfiguration#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#model_name SagemakerEndpointConfiguration#model_name}
    */
    readonly modelName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#variant_name SagemakerEndpointConfiguration#variant_name}
    */
    readonly variantName?: string;
}
export declare function sagemakerEndpointConfigurationProductionVariantsToTerraform(struct?: SagemakerEndpointConfigurationProductionVariants): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html aws_sagemaker_endpoint_configuration}
*/
export declare class SagemakerEndpointConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html aws_sagemaker_endpoint_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerEndpointConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerEndpointConfigurationConfig);
    get arn(): string;
    get id(): string;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
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
    private _asyncInferenceConfig;
    get asyncInferenceConfig(): SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference;
    putAsyncInferenceConfig(value: SagemakerEndpointConfigurationAsyncInferenceConfig): void;
    resetAsyncInferenceConfig(): void;
    get asyncInferenceConfigInput(): SagemakerEndpointConfigurationAsyncInferenceConfig;
    private _dataCaptureConfig;
    get dataCaptureConfig(): SagemakerEndpointConfigurationDataCaptureConfigOutputReference;
    putDataCaptureConfig(value: SagemakerEndpointConfigurationDataCaptureConfig): void;
    resetDataCaptureConfig(): void;
    get dataCaptureConfigInput(): SagemakerEndpointConfigurationDataCaptureConfig;
    private _productionVariants?;
    get productionVariants(): SagemakerEndpointConfigurationProductionVariants[];
    set productionVariants(value: SagemakerEndpointConfigurationProductionVariants[]);
    get productionVariantsInput(): SagemakerEndpointConfigurationProductionVariants[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=sagemaker-endpoint-configuration.d.ts.map