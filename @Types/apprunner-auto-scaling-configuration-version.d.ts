import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* App Runner
*/
export interface ApprunnerAutoScalingConfigurationVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version.html#auto_scaling_configuration_name ApprunnerAutoScalingConfigurationVersion#auto_scaling_configuration_name}
    */
    readonly autoScalingConfigurationName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version.html#max_concurrency ApprunnerAutoScalingConfigurationVersion#max_concurrency}
    */
    readonly maxConcurrency?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version.html#max_size ApprunnerAutoScalingConfigurationVersion#max_size}
    */
    readonly maxSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version.html#min_size ApprunnerAutoScalingConfigurationVersion#min_size}
    */
    readonly minSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version.html#tags ApprunnerAutoScalingConfigurationVersion#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version.html#tags_all ApprunnerAutoScalingConfigurationVersion#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version.html aws_apprunner_auto_scaling_configuration_version}
*/
export declare class ApprunnerAutoScalingConfigurationVersion extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version.html aws_apprunner_auto_scaling_configuration_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApprunnerAutoScalingConfigurationVersionConfig
    */
    constructor(scope: Construct, id: string, config: ApprunnerAutoScalingConfigurationVersionConfig);
    get arn(): string;
    private _autoScalingConfigurationName?;
    get autoScalingConfigurationName(): string;
    set autoScalingConfigurationName(value: string);
    get autoScalingConfigurationNameInput(): string;
    get autoScalingConfigurationRevision(): number;
    get id(): string;
    get latest(): any;
    private _maxConcurrency?;
    get maxConcurrency(): number;
    set maxConcurrency(value: number);
    resetMaxConcurrency(): void;
    get maxConcurrencyInput(): number;
    private _maxSize?;
    get maxSize(): number;
    set maxSize(value: number);
    resetMaxSize(): void;
    get maxSizeInput(): number;
    private _minSize?;
    get minSize(): number;
    set minSize(value: number);
    resetMinSize(): void;
    get minSizeInput(): number;
    get status(): string;
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
//# sourceMappingURL=apprunner-auto-scaling-configuration-version.d.ts.map