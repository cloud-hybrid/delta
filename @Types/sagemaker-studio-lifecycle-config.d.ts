import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS SageMaker
*/
export interface SagemakerStudioLifecycleConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config.html#studio_lifecycle_config_app_type SagemakerStudioLifecycleConfig#studio_lifecycle_config_app_type}
    */
    readonly studioLifecycleConfigAppType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config.html#studio_lifecycle_config_content SagemakerStudioLifecycleConfig#studio_lifecycle_config_content}
    */
    readonly studioLifecycleConfigContent: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config.html#studio_lifecycle_config_name SagemakerStudioLifecycleConfig#studio_lifecycle_config_name}
    */
    readonly studioLifecycleConfigName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config.html#tags SagemakerStudioLifecycleConfig#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config.html#tags_all SagemakerStudioLifecycleConfig#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config.html aws_sagemaker_studio_lifecycle_config}
*/
export declare class SagemakerStudioLifecycleConfig extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config.html aws_sagemaker_studio_lifecycle_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerStudioLifecycleConfigConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerStudioLifecycleConfigConfig);
    get arn(): string;
    get id(): string;
    private _studioLifecycleConfigAppType?;
    get studioLifecycleConfigAppType(): string;
    set studioLifecycleConfigAppType(value: string);
    get studioLifecycleConfigAppTypeInput(): string;
    private _studioLifecycleConfigContent?;
    get studioLifecycleConfigContent(): string;
    set studioLifecycleConfigContent(value: string);
    get studioLifecycleConfigContentInput(): string;
    private _studioLifecycleConfigName?;
    get studioLifecycleConfigName(): string;
    set studioLifecycleConfigName(value: string);
    get studioLifecycleConfigNameInput(): string;
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
//# sourceMappingURL=sagemaker-studio-lifecycle-config.d.ts.map