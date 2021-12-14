import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AppConfig
*/
export interface AppconfigDeploymentStrategyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html#deployment_duration_in_minutes AppconfigDeploymentStrategy#deployment_duration_in_minutes}
    */
    readonly deploymentDurationInMinutes: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html#description AppconfigDeploymentStrategy#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html#final_bake_time_in_minutes AppconfigDeploymentStrategy#final_bake_time_in_minutes}
    */
    readonly finalBakeTimeInMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html#growth_factor AppconfigDeploymentStrategy#growth_factor}
    */
    readonly growthFactor: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html#growth_type AppconfigDeploymentStrategy#growth_type}
    */
    readonly growthType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html#name AppconfigDeploymentStrategy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html#replicate_to AppconfigDeploymentStrategy#replicate_to}
    */
    readonly replicateTo: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html#tags AppconfigDeploymentStrategy#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html#tags_all AppconfigDeploymentStrategy#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html aws_appconfig_deployment_strategy}
*/
export declare class AppconfigDeploymentStrategy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html aws_appconfig_deployment_strategy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppconfigDeploymentStrategyConfig
    */
    constructor(scope: Construct, id: string, config: AppconfigDeploymentStrategyConfig);
    get arn(): string;
    private _deploymentDurationInMinutes?;
    get deploymentDurationInMinutes(): number;
    set deploymentDurationInMinutes(value: number);
    get deploymentDurationInMinutesInput(): number;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _finalBakeTimeInMinutes?;
    get finalBakeTimeInMinutes(): number;
    set finalBakeTimeInMinutes(value: number);
    resetFinalBakeTimeInMinutes(): void;
    get finalBakeTimeInMinutesInput(): number;
    private _growthFactor?;
    get growthFactor(): number;
    set growthFactor(value: number);
    get growthFactorInput(): number;
    private _growthType?;
    get growthType(): string;
    set growthType(value: string);
    resetGrowthType(): void;
    get growthTypeInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _replicateTo?;
    get replicateTo(): string;
    set replicateTo(value: string);
    get replicateToInput(): string;
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
//# sourceMappingURL=appconfig-deployment-strategy.d.ts.map