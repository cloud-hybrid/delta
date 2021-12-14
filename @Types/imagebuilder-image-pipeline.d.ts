import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Image Builder
*/
export interface ImagebuilderImagePipelineConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#description ImagebuilderImagePipeline#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#distribution_configuration_arn ImagebuilderImagePipeline#distribution_configuration_arn}
    */
    readonly distributionConfigurationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#enhanced_image_metadata_enabled ImagebuilderImagePipeline#enhanced_image_metadata_enabled}
    */
    readonly enhancedImageMetadataEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#image_recipe_arn ImagebuilderImagePipeline#image_recipe_arn}
    */
    readonly imageRecipeArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#infrastructure_configuration_arn ImagebuilderImagePipeline#infrastructure_configuration_arn}
    */
    readonly infrastructureConfigurationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#name ImagebuilderImagePipeline#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#status ImagebuilderImagePipeline#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#tags ImagebuilderImagePipeline#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#tags_all ImagebuilderImagePipeline#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * image_tests_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#image_tests_configuration ImagebuilderImagePipeline#image_tests_configuration}
    */
    readonly imageTestsConfiguration?: ImagebuilderImagePipelineImageTestsConfiguration;
    /**
    * schedule block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#schedule ImagebuilderImagePipeline#schedule}
    */
    readonly schedule?: ImagebuilderImagePipelineSchedule;
}
export interface ImagebuilderImagePipelineImageTestsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#image_tests_enabled ImagebuilderImagePipeline#image_tests_enabled}
    */
    readonly imageTestsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#timeout_minutes ImagebuilderImagePipeline#timeout_minutes}
    */
    readonly timeoutMinutes?: number;
}
export declare function imagebuilderImagePipelineImageTestsConfigurationToTerraform(struct?: ImagebuilderImagePipelineImageTestsConfigurationOutputReference | ImagebuilderImagePipelineImageTestsConfiguration): any;
export declare class ImagebuilderImagePipelineImageTestsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ImagebuilderImagePipelineImageTestsConfiguration | undefined;
    set internalValue(value: ImagebuilderImagePipelineImageTestsConfiguration | undefined);
    private _imageTestsEnabled?;
    get imageTestsEnabled(): boolean | cdktf.IResolvable;
    set imageTestsEnabled(value: boolean | cdktf.IResolvable);
    resetImageTestsEnabled(): void;
    get imageTestsEnabledInput(): boolean | cdktf.IResolvable;
    private _timeoutMinutes?;
    get timeoutMinutes(): number;
    set timeoutMinutes(value: number);
    resetTimeoutMinutes(): void;
    get timeoutMinutesInput(): number;
}
export interface ImagebuilderImagePipelineSchedule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#pipeline_execution_start_condition ImagebuilderImagePipeline#pipeline_execution_start_condition}
    */
    readonly pipelineExecutionStartCondition?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#schedule_expression ImagebuilderImagePipeline#schedule_expression}
    */
    readonly scheduleExpression: string;
}
export declare function imagebuilderImagePipelineScheduleToTerraform(struct?: ImagebuilderImagePipelineScheduleOutputReference | ImagebuilderImagePipelineSchedule): any;
export declare class ImagebuilderImagePipelineScheduleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ImagebuilderImagePipelineSchedule | undefined;
    set internalValue(value: ImagebuilderImagePipelineSchedule | undefined);
    private _pipelineExecutionStartCondition?;
    get pipelineExecutionStartCondition(): string;
    set pipelineExecutionStartCondition(value: string);
    resetPipelineExecutionStartCondition(): void;
    get pipelineExecutionStartConditionInput(): string;
    private _scheduleExpression?;
    get scheduleExpression(): string;
    set scheduleExpression(value: string);
    get scheduleExpressionInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html aws_imagebuilder_image_pipeline}
*/
export declare class ImagebuilderImagePipeline extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html aws_imagebuilder_image_pipeline} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderImagePipelineConfig
    */
    constructor(scope: Construct, id: string, config: ImagebuilderImagePipelineConfig);
    get arn(): string;
    get dateCreated(): string;
    get dateLastRun(): string;
    get dateNextRun(): string;
    get dateUpdated(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _distributionConfigurationArn?;
    get distributionConfigurationArn(): string;
    set distributionConfigurationArn(value: string);
    resetDistributionConfigurationArn(): void;
    get distributionConfigurationArnInput(): string;
    private _enhancedImageMetadataEnabled?;
    get enhancedImageMetadataEnabled(): boolean | cdktf.IResolvable;
    set enhancedImageMetadataEnabled(value: boolean | cdktf.IResolvable);
    resetEnhancedImageMetadataEnabled(): void;
    get enhancedImageMetadataEnabledInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _imageRecipeArn?;
    get imageRecipeArn(): string;
    set imageRecipeArn(value: string);
    get imageRecipeArnInput(): string;
    private _infrastructureConfigurationArn?;
    get infrastructureConfigurationArn(): string;
    set infrastructureConfigurationArn(value: string);
    get infrastructureConfigurationArnInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get platform(): string;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string;
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
    private _imageTestsConfiguration;
    get imageTestsConfiguration(): ImagebuilderImagePipelineImageTestsConfigurationOutputReference;
    putImageTestsConfiguration(value: ImagebuilderImagePipelineImageTestsConfiguration): void;
    resetImageTestsConfiguration(): void;
    get imageTestsConfigurationInput(): ImagebuilderImagePipelineImageTestsConfiguration;
    private _schedule;
    get schedule(): ImagebuilderImagePipelineScheduleOutputReference;
    putSchedule(value: ImagebuilderImagePipelineSchedule): void;
    resetSchedule(): void;
    get scheduleInput(): ImagebuilderImagePipelineSchedule;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=imagebuilder-image-pipeline.d.ts.map