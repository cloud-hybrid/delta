import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AppConfig
*/
export interface AppconfigDeploymentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment.html#application_id AppconfigDeployment#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment.html#configuration_profile_id AppconfigDeployment#configuration_profile_id}
    */
    readonly configurationProfileId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment.html#configuration_version AppconfigDeployment#configuration_version}
    */
    readonly configurationVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment.html#deployment_strategy_id AppconfigDeployment#deployment_strategy_id}
    */
    readonly deploymentStrategyId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment.html#description AppconfigDeployment#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment.html#environment_id AppconfigDeployment#environment_id}
    */
    readonly environmentId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment.html#tags AppconfigDeployment#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment.html#tags_all AppconfigDeployment#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment.html aws_appconfig_deployment}
*/
export declare class AppconfigDeployment extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment.html aws_appconfig_deployment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppconfigDeploymentConfig
    */
    constructor(scope: Construct, id: string, config: AppconfigDeploymentConfig);
    private _applicationId?;
    get applicationId(): string;
    set applicationId(value: string);
    get applicationIdInput(): string;
    get arn(): string;
    private _configurationProfileId?;
    get configurationProfileId(): string;
    set configurationProfileId(value: string);
    get configurationProfileIdInput(): string;
    private _configurationVersion?;
    get configurationVersion(): string;
    set configurationVersion(value: string);
    get configurationVersionInput(): string;
    get deploymentNumber(): number;
    private _deploymentStrategyId?;
    get deploymentStrategyId(): string;
    set deploymentStrategyId(value: string);
    get deploymentStrategyIdInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _environmentId?;
    get environmentId(): string;
    set environmentId(value: string);
    get environmentIdInput(): string;
    get id(): string;
    get state(): string;
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
//# sourceMappingURL=appconfig-deployment.d.ts.map