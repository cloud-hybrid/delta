import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS OpsWorks
*/
export interface OpsworksNodejsAppLayerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#auto_assign_elastic_ips OpsworksNodejsAppLayer#auto_assign_elastic_ips}
    */
    readonly autoAssignElasticIps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#auto_assign_public_ips OpsworksNodejsAppLayer#auto_assign_public_ips}
    */
    readonly autoAssignPublicIps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#auto_healing OpsworksNodejsAppLayer#auto_healing}
    */
    readonly autoHealing?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#custom_configure_recipes OpsworksNodejsAppLayer#custom_configure_recipes}
    */
    readonly customConfigureRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#custom_deploy_recipes OpsworksNodejsAppLayer#custom_deploy_recipes}
    */
    readonly customDeployRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#custom_instance_profile_arn OpsworksNodejsAppLayer#custom_instance_profile_arn}
    */
    readonly customInstanceProfileArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#custom_json OpsworksNodejsAppLayer#custom_json}
    */
    readonly customJson?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#custom_security_group_ids OpsworksNodejsAppLayer#custom_security_group_ids}
    */
    readonly customSecurityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#custom_setup_recipes OpsworksNodejsAppLayer#custom_setup_recipes}
    */
    readonly customSetupRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#custom_shutdown_recipes OpsworksNodejsAppLayer#custom_shutdown_recipes}
    */
    readonly customShutdownRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#custom_undeploy_recipes OpsworksNodejsAppLayer#custom_undeploy_recipes}
    */
    readonly customUndeployRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#drain_elb_on_shutdown OpsworksNodejsAppLayer#drain_elb_on_shutdown}
    */
    readonly drainElbOnShutdown?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#elastic_load_balancer OpsworksNodejsAppLayer#elastic_load_balancer}
    */
    readonly elasticLoadBalancer?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#install_updates_on_boot OpsworksNodejsAppLayer#install_updates_on_boot}
    */
    readonly installUpdatesOnBoot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#instance_shutdown_timeout OpsworksNodejsAppLayer#instance_shutdown_timeout}
    */
    readonly instanceShutdownTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#name OpsworksNodejsAppLayer#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#nodejs_version OpsworksNodejsAppLayer#nodejs_version}
    */
    readonly nodejsVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#stack_id OpsworksNodejsAppLayer#stack_id}
    */
    readonly stackId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#system_packages OpsworksNodejsAppLayer#system_packages}
    */
    readonly systemPackages?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#tags OpsworksNodejsAppLayer#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#tags_all OpsworksNodejsAppLayer#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#use_ebs_optimized_instances OpsworksNodejsAppLayer#use_ebs_optimized_instances}
    */
    readonly useEbsOptimizedInstances?: boolean | cdktf.IResolvable;
    /**
    * ebs_volume block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#ebs_volume OpsworksNodejsAppLayer#ebs_volume}
    */
    readonly ebsVolume?: OpsworksNodejsAppLayerEbsVolume[];
}
export interface OpsworksNodejsAppLayerEbsVolume {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#encrypted OpsworksNodejsAppLayer#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#iops OpsworksNodejsAppLayer#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#mount_point OpsworksNodejsAppLayer#mount_point}
    */
    readonly mountPoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#number_of_disks OpsworksNodejsAppLayer#number_of_disks}
    */
    readonly numberOfDisks: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#raid_level OpsworksNodejsAppLayer#raid_level}
    */
    readonly raidLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#size OpsworksNodejsAppLayer#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#type OpsworksNodejsAppLayer#type}
    */
    readonly type?: string;
}
export declare function opsworksNodejsAppLayerEbsVolumeToTerraform(struct?: OpsworksNodejsAppLayerEbsVolume): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html aws_opsworks_nodejs_app_layer}
*/
export declare class OpsworksNodejsAppLayer extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html aws_opsworks_nodejs_app_layer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksNodejsAppLayerConfig
    */
    constructor(scope: Construct, id: string, config: OpsworksNodejsAppLayerConfig);
    get arn(): string;
    private _autoAssignElasticIps?;
    get autoAssignElasticIps(): boolean | cdktf.IResolvable;
    set autoAssignElasticIps(value: boolean | cdktf.IResolvable);
    resetAutoAssignElasticIps(): void;
    get autoAssignElasticIpsInput(): boolean | cdktf.IResolvable;
    private _autoAssignPublicIps?;
    get autoAssignPublicIps(): boolean | cdktf.IResolvable;
    set autoAssignPublicIps(value: boolean | cdktf.IResolvable);
    resetAutoAssignPublicIps(): void;
    get autoAssignPublicIpsInput(): boolean | cdktf.IResolvable;
    private _autoHealing?;
    get autoHealing(): boolean | cdktf.IResolvable;
    set autoHealing(value: boolean | cdktf.IResolvable);
    resetAutoHealing(): void;
    get autoHealingInput(): boolean | cdktf.IResolvable;
    private _customConfigureRecipes?;
    get customConfigureRecipes(): string[];
    set customConfigureRecipes(value: string[]);
    resetCustomConfigureRecipes(): void;
    get customConfigureRecipesInput(): string[];
    private _customDeployRecipes?;
    get customDeployRecipes(): string[];
    set customDeployRecipes(value: string[]);
    resetCustomDeployRecipes(): void;
    get customDeployRecipesInput(): string[];
    private _customInstanceProfileArn?;
    get customInstanceProfileArn(): string;
    set customInstanceProfileArn(value: string);
    resetCustomInstanceProfileArn(): void;
    get customInstanceProfileArnInput(): string;
    private _customJson?;
    get customJson(): string;
    set customJson(value: string);
    resetCustomJson(): void;
    get customJsonInput(): string;
    private _customSecurityGroupIds?;
    get customSecurityGroupIds(): string[];
    set customSecurityGroupIds(value: string[]);
    resetCustomSecurityGroupIds(): void;
    get customSecurityGroupIdsInput(): string[];
    private _customSetupRecipes?;
    get customSetupRecipes(): string[];
    set customSetupRecipes(value: string[]);
    resetCustomSetupRecipes(): void;
    get customSetupRecipesInput(): string[];
    private _customShutdownRecipes?;
    get customShutdownRecipes(): string[];
    set customShutdownRecipes(value: string[]);
    resetCustomShutdownRecipes(): void;
    get customShutdownRecipesInput(): string[];
    private _customUndeployRecipes?;
    get customUndeployRecipes(): string[];
    set customUndeployRecipes(value: string[]);
    resetCustomUndeployRecipes(): void;
    get customUndeployRecipesInput(): string[];
    private _drainElbOnShutdown?;
    get drainElbOnShutdown(): boolean | cdktf.IResolvable;
    set drainElbOnShutdown(value: boolean | cdktf.IResolvable);
    resetDrainElbOnShutdown(): void;
    get drainElbOnShutdownInput(): boolean | cdktf.IResolvable;
    private _elasticLoadBalancer?;
    get elasticLoadBalancer(): string;
    set elasticLoadBalancer(value: string);
    resetElasticLoadBalancer(): void;
    get elasticLoadBalancerInput(): string;
    get id(): string;
    private _installUpdatesOnBoot?;
    get installUpdatesOnBoot(): boolean | cdktf.IResolvable;
    set installUpdatesOnBoot(value: boolean | cdktf.IResolvable);
    resetInstallUpdatesOnBoot(): void;
    get installUpdatesOnBootInput(): boolean | cdktf.IResolvable;
    private _instanceShutdownTimeout?;
    get instanceShutdownTimeout(): number;
    set instanceShutdownTimeout(value: number);
    resetInstanceShutdownTimeout(): void;
    get instanceShutdownTimeoutInput(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _nodejsVersion?;
    get nodejsVersion(): string;
    set nodejsVersion(value: string);
    resetNodejsVersion(): void;
    get nodejsVersionInput(): string;
    private _stackId?;
    get stackId(): string;
    set stackId(value: string);
    get stackIdInput(): string;
    private _systemPackages?;
    get systemPackages(): string[];
    set systemPackages(value: string[]);
    resetSystemPackages(): void;
    get systemPackagesInput(): string[];
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
    private _useEbsOptimizedInstances?;
    get useEbsOptimizedInstances(): boolean | cdktf.IResolvable;
    set useEbsOptimizedInstances(value: boolean | cdktf.IResolvable);
    resetUseEbsOptimizedInstances(): void;
    get useEbsOptimizedInstancesInput(): boolean | cdktf.IResolvable;
    private _ebsVolume?;
    get ebsVolume(): OpsworksNodejsAppLayerEbsVolume[];
    set ebsVolume(value: OpsworksNodejsAppLayerEbsVolume[]);
    resetEbsVolume(): void;
    get ebsVolumeInput(): OpsworksNodejsAppLayerEbsVolume[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=opsworks-nodejs-app-layer.d.ts.map