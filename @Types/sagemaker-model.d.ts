import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS SageMaker
*/
export interface SagemakerModelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#enable_network_isolation SagemakerModel#enable_network_isolation}
    */
    readonly enableNetworkIsolation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#execution_role_arn SagemakerModel#execution_role_arn}
    */
    readonly executionRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#name SagemakerModel#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#tags SagemakerModel#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#tags_all SagemakerModel#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * container block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#container SagemakerModel#container}
    */
    readonly container?: SagemakerModelContainer[];
    /**
    * inference_execution_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#inference_execution_config SagemakerModel#inference_execution_config}
    */
    readonly inferenceExecutionConfig?: SagemakerModelInferenceExecutionConfig;
    /**
    * primary_container block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#primary_container SagemakerModel#primary_container}
    */
    readonly primaryContainer?: SagemakerModelPrimaryContainer;
    /**
    * vpc_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#vpc_config SagemakerModel#vpc_config}
    */
    readonly vpcConfig?: SagemakerModelVpcConfig;
}
export interface SagemakerModelContainerImageConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#repository_access_mode SagemakerModel#repository_access_mode}
    */
    readonly repositoryAccessMode: string;
}
export declare function sagemakerModelContainerImageConfigToTerraform(struct?: SagemakerModelContainerImageConfigOutputReference | SagemakerModelContainerImageConfig): any;
export declare class SagemakerModelContainerImageConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerModelContainerImageConfig | undefined;
    set internalValue(value: SagemakerModelContainerImageConfig | undefined);
    private _repositoryAccessMode?;
    get repositoryAccessMode(): string;
    set repositoryAccessMode(value: string);
    get repositoryAccessModeInput(): string;
}
export interface SagemakerModelContainer {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#container_hostname SagemakerModel#container_hostname}
    */
    readonly containerHostname?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#environment SagemakerModel#environment}
    */
    readonly environment?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#image SagemakerModel#image}
    */
    readonly image: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#mode SagemakerModel#mode}
    */
    readonly mode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#model_data_url SagemakerModel#model_data_url}
    */
    readonly modelDataUrl?: string;
    /**
    * image_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#image_config SagemakerModel#image_config}
    */
    readonly imageConfig?: SagemakerModelContainerImageConfig;
}
export declare function sagemakerModelContainerToTerraform(struct?: SagemakerModelContainer): any;
export interface SagemakerModelInferenceExecutionConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#mode SagemakerModel#mode}
    */
    readonly mode: string;
}
export declare function sagemakerModelInferenceExecutionConfigToTerraform(struct?: SagemakerModelInferenceExecutionConfigOutputReference | SagemakerModelInferenceExecutionConfig): any;
export declare class SagemakerModelInferenceExecutionConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerModelInferenceExecutionConfig | undefined;
    set internalValue(value: SagemakerModelInferenceExecutionConfig | undefined);
    private _mode?;
    get mode(): string;
    set mode(value: string);
    get modeInput(): string;
}
export interface SagemakerModelPrimaryContainerImageConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#repository_access_mode SagemakerModel#repository_access_mode}
    */
    readonly repositoryAccessMode: string;
}
export declare function sagemakerModelPrimaryContainerImageConfigToTerraform(struct?: SagemakerModelPrimaryContainerImageConfigOutputReference | SagemakerModelPrimaryContainerImageConfig): any;
export declare class SagemakerModelPrimaryContainerImageConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerModelPrimaryContainerImageConfig | undefined;
    set internalValue(value: SagemakerModelPrimaryContainerImageConfig | undefined);
    private _repositoryAccessMode?;
    get repositoryAccessMode(): string;
    set repositoryAccessMode(value: string);
    get repositoryAccessModeInput(): string;
}
export interface SagemakerModelPrimaryContainer {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#container_hostname SagemakerModel#container_hostname}
    */
    readonly containerHostname?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#environment SagemakerModel#environment}
    */
    readonly environment?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#image SagemakerModel#image}
    */
    readonly image: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#mode SagemakerModel#mode}
    */
    readonly mode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#model_data_url SagemakerModel#model_data_url}
    */
    readonly modelDataUrl?: string;
    /**
    * image_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#image_config SagemakerModel#image_config}
    */
    readonly imageConfig?: SagemakerModelPrimaryContainerImageConfig;
}
export declare function sagemakerModelPrimaryContainerToTerraform(struct?: SagemakerModelPrimaryContainerOutputReference | SagemakerModelPrimaryContainer): any;
export declare class SagemakerModelPrimaryContainerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerModelPrimaryContainer | undefined;
    set internalValue(value: SagemakerModelPrimaryContainer | undefined);
    private _containerHostname?;
    get containerHostname(): string;
    set containerHostname(value: string);
    resetContainerHostname(): void;
    get containerHostnameInput(): string;
    private _environment?;
    get environment(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set environment(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetEnvironment(): void;
    get environmentInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _image?;
    get image(): string;
    set image(value: string);
    get imageInput(): string;
    private _mode?;
    get mode(): string;
    set mode(value: string);
    resetMode(): void;
    get modeInput(): string;
    private _modelDataUrl?;
    get modelDataUrl(): string;
    set modelDataUrl(value: string);
    resetModelDataUrl(): void;
    get modelDataUrlInput(): string;
    private _imageConfig;
    get imageConfig(): SagemakerModelPrimaryContainerImageConfigOutputReference;
    putImageConfig(value: SagemakerModelPrimaryContainerImageConfig): void;
    resetImageConfig(): void;
    get imageConfigInput(): SagemakerModelPrimaryContainerImageConfig;
}
export interface SagemakerModelVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#security_group_ids SagemakerModel#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#subnets SagemakerModel#subnets}
    */
    readonly subnets: string[];
}
export declare function sagemakerModelVpcConfigToTerraform(struct?: SagemakerModelVpcConfigOutputReference | SagemakerModelVpcConfig): any;
export declare class SagemakerModelVpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerModelVpcConfig | undefined;
    set internalValue(value: SagemakerModelVpcConfig | undefined);
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    get securityGroupIdsInput(): string[];
    private _subnets?;
    get subnets(): string[];
    set subnets(value: string[]);
    get subnetsInput(): string[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html aws_sagemaker_model}
*/
export declare class SagemakerModel extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html aws_sagemaker_model} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerModelConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerModelConfig);
    get arn(): string;
    private _enableNetworkIsolation?;
    get enableNetworkIsolation(): boolean | cdktf.IResolvable;
    set enableNetworkIsolation(value: boolean | cdktf.IResolvable);
    resetEnableNetworkIsolation(): void;
    get enableNetworkIsolationInput(): boolean | cdktf.IResolvable;
    private _executionRoleArn?;
    get executionRoleArn(): string;
    set executionRoleArn(value: string);
    get executionRoleArnInput(): string;
    get id(): string;
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
    private _container?;
    get container(): SagemakerModelContainer[];
    set container(value: SagemakerModelContainer[]);
    resetContainer(): void;
    get containerInput(): SagemakerModelContainer[];
    private _inferenceExecutionConfig;
    get inferenceExecutionConfig(): SagemakerModelInferenceExecutionConfigOutputReference;
    putInferenceExecutionConfig(value: SagemakerModelInferenceExecutionConfig): void;
    resetInferenceExecutionConfig(): void;
    get inferenceExecutionConfigInput(): SagemakerModelInferenceExecutionConfig;
    private _primaryContainer;
    get primaryContainer(): SagemakerModelPrimaryContainerOutputReference;
    putPrimaryContainer(value: SagemakerModelPrimaryContainer): void;
    resetPrimaryContainer(): void;
    get primaryContainerInput(): SagemakerModelPrimaryContainer;
    private _vpcConfig;
    get vpcConfig(): SagemakerModelVpcConfigOutputReference;
    putVpcConfig(value: SagemakerModelVpcConfig): void;
    resetVpcConfig(): void;
    get vpcConfigInput(): SagemakerModelVpcConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=sagemaker-model.d.ts.map