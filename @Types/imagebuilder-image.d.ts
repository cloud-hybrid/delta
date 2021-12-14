import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Image Builder
*/
export interface ImagebuilderImageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#distribution_configuration_arn ImagebuilderImage#distribution_configuration_arn}
    */
    readonly distributionConfigurationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#enhanced_image_metadata_enabled ImagebuilderImage#enhanced_image_metadata_enabled}
    */
    readonly enhancedImageMetadataEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#image_recipe_arn ImagebuilderImage#image_recipe_arn}
    */
    readonly imageRecipeArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#infrastructure_configuration_arn ImagebuilderImage#infrastructure_configuration_arn}
    */
    readonly infrastructureConfigurationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#tags ImagebuilderImage#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#tags_all ImagebuilderImage#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * image_tests_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#image_tests_configuration ImagebuilderImage#image_tests_configuration}
    */
    readonly imageTestsConfiguration?: ImagebuilderImageImageTestsConfiguration;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#timeouts ImagebuilderImage#timeouts}
    */
    readonly timeouts?: ImagebuilderImageTimeouts;
}
export declare class ImagebuilderImageOutputResourcesAmis extends cdktf.ComplexComputedList {
    get accountId(): string;
    get description(): string;
    get image(): string;
    get name(): string;
    get region(): string;
}
export declare class ImagebuilderImageOutputResources extends cdktf.ComplexComputedList {
    get amis(): any;
}
export interface ImagebuilderImageImageTestsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#image_tests_enabled ImagebuilderImage#image_tests_enabled}
    */
    readonly imageTestsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#timeout_minutes ImagebuilderImage#timeout_minutes}
    */
    readonly timeoutMinutes?: number;
}
export declare function imagebuilderImageImageTestsConfigurationToTerraform(struct?: ImagebuilderImageImageTestsConfigurationOutputReference | ImagebuilderImageImageTestsConfiguration): any;
export declare class ImagebuilderImageImageTestsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ImagebuilderImageImageTestsConfiguration | undefined;
    set internalValue(value: ImagebuilderImageImageTestsConfiguration | undefined);
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
export interface ImagebuilderImageTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#create ImagebuilderImage#create}
    */
    readonly create?: string;
}
export declare function imagebuilderImageTimeoutsToTerraform(struct?: ImagebuilderImageTimeoutsOutputReference | ImagebuilderImageTimeouts): any;
export declare class ImagebuilderImageTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ImagebuilderImageTimeouts | undefined;
    set internalValue(value: ImagebuilderImageTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html aws_imagebuilder_image}
*/
export declare class ImagebuilderImage extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html aws_imagebuilder_image} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderImageConfig
    */
    constructor(scope: Construct, id: string, config: ImagebuilderImageConfig);
    get arn(): string;
    get dateCreated(): string;
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
    get name(): string;
    get osVersion(): string;
    outputResources(index: string): ImagebuilderImageOutputResources;
    get platform(): string;
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
    get version(): string;
    private _imageTestsConfiguration;
    get imageTestsConfiguration(): ImagebuilderImageImageTestsConfigurationOutputReference;
    putImageTestsConfiguration(value: ImagebuilderImageImageTestsConfiguration): void;
    resetImageTestsConfiguration(): void;
    get imageTestsConfigurationInput(): ImagebuilderImageImageTestsConfiguration;
    private _timeouts;
    get timeouts(): ImagebuilderImageTimeoutsOutputReference;
    putTimeouts(value: ImagebuilderImageTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): ImagebuilderImageTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=imagebuilder-image.d.ts.map