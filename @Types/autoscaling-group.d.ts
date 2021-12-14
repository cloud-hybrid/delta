import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Auto Scaling
*/
export interface AutoscalingGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#availability_zones AutoscalingGroup#availability_zones}
    */
    readonly availabilityZones?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#capacity_rebalance AutoscalingGroup#capacity_rebalance}
    */
    readonly capacityRebalance?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#default_cooldown AutoscalingGroup#default_cooldown}
    */
    readonly defaultCooldown?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#desired_capacity AutoscalingGroup#desired_capacity}
    */
    readonly desiredCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#enabled_metrics AutoscalingGroup#enabled_metrics}
    */
    readonly enabledMetrics?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#force_delete AutoscalingGroup#force_delete}
    */
    readonly forceDelete?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#force_delete_warm_pool AutoscalingGroup#force_delete_warm_pool}
    */
    readonly forceDeleteWarmPool?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#health_check_grace_period AutoscalingGroup#health_check_grace_period}
    */
    readonly healthCheckGracePeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#health_check_type AutoscalingGroup#health_check_type}
    */
    readonly healthCheckType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_configuration AutoscalingGroup#launch_configuration}
    */
    readonly launchConfiguration?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#load_balancers AutoscalingGroup#load_balancers}
    */
    readonly loadBalancers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#max_instance_lifetime AutoscalingGroup#max_instance_lifetime}
    */
    readonly maxInstanceLifetime?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#max_size AutoscalingGroup#max_size}
    */
    readonly maxSize: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#metrics_granularity AutoscalingGroup#metrics_granularity}
    */
    readonly metricsGranularity?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#min_elb_capacity AutoscalingGroup#min_elb_capacity}
    */
    readonly minElbCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#min_size AutoscalingGroup#min_size}
    */
    readonly minSize: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#name AutoscalingGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#name_prefix AutoscalingGroup#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#placement_group AutoscalingGroup#placement_group}
    */
    readonly placementGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#protect_from_scale_in AutoscalingGroup#protect_from_scale_in}
    */
    readonly protectFromScaleIn?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#service_linked_role_arn AutoscalingGroup#service_linked_role_arn}
    */
    readonly serviceLinkedRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#suspended_processes AutoscalingGroup#suspended_processes}
    */
    readonly suspendedProcesses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#tags AutoscalingGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#target_group_arns AutoscalingGroup#target_group_arns}
    */
    readonly targetGroupArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#termination_policies AutoscalingGroup#termination_policies}
    */
    readonly terminationPolicies?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#vpc_zone_identifier AutoscalingGroup#vpc_zone_identifier}
    */
    readonly vpcZoneIdentifier?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#wait_for_capacity_timeout AutoscalingGroup#wait_for_capacity_timeout}
    */
    readonly waitForCapacityTimeout?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#wait_for_elb_capacity AutoscalingGroup#wait_for_elb_capacity}
    */
    readonly waitForElbCapacity?: number;
    /**
    * initial_lifecycle_hook block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#initial_lifecycle_hook AutoscalingGroup#initial_lifecycle_hook}
    */
    readonly initialLifecycleHook?: AutoscalingGroupInitialLifecycleHook[];
    /**
    * instance_refresh block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#instance_refresh AutoscalingGroup#instance_refresh}
    */
    readonly instanceRefresh?: AutoscalingGroupInstanceRefresh;
    /**
    * launch_template block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template AutoscalingGroup#launch_template}
    */
    readonly launchTemplate?: AutoscalingGroupLaunchTemplate;
    /**
    * mixed_instances_policy block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#mixed_instances_policy AutoscalingGroup#mixed_instances_policy}
    */
    readonly mixedInstancesPolicy?: AutoscalingGroupMixedInstancesPolicy;
    /**
    * tag block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#tag AutoscalingGroup#tag}
    */
    readonly tag?: AutoscalingGroupTag[];
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#timeouts AutoscalingGroup#timeouts}
    */
    readonly timeouts?: AutoscalingGroupTimeouts;
    /**
    * warm_pool block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#warm_pool AutoscalingGroup#warm_pool}
    */
    readonly warmPool?: AutoscalingGroupWarmPool;
}
export interface AutoscalingGroupInitialLifecycleHook {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#default_result AutoscalingGroup#default_result}
    */
    readonly defaultResult?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#heartbeat_timeout AutoscalingGroup#heartbeat_timeout}
    */
    readonly heartbeatTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#lifecycle_transition AutoscalingGroup#lifecycle_transition}
    */
    readonly lifecycleTransition: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#name AutoscalingGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#notification_metadata AutoscalingGroup#notification_metadata}
    */
    readonly notificationMetadata?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#notification_target_arn AutoscalingGroup#notification_target_arn}
    */
    readonly notificationTargetArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#role_arn AutoscalingGroup#role_arn}
    */
    readonly roleArn?: string;
}
export declare function autoscalingGroupInitialLifecycleHookToTerraform(struct?: AutoscalingGroupInitialLifecycleHook): any;
export interface AutoscalingGroupInstanceRefreshPreferences {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#checkpoint_delay AutoscalingGroup#checkpoint_delay}
    */
    readonly checkpointDelay?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#checkpoint_percentages AutoscalingGroup#checkpoint_percentages}
    */
    readonly checkpointPercentages?: number[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#instance_warmup AutoscalingGroup#instance_warmup}
    */
    readonly instanceWarmup?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#min_healthy_percentage AutoscalingGroup#min_healthy_percentage}
    */
    readonly minHealthyPercentage?: number;
}
export declare function autoscalingGroupInstanceRefreshPreferencesToTerraform(struct?: AutoscalingGroupInstanceRefreshPreferencesOutputReference | AutoscalingGroupInstanceRefreshPreferences): any;
export declare class AutoscalingGroupInstanceRefreshPreferencesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AutoscalingGroupInstanceRefreshPreferences | undefined;
    set internalValue(value: AutoscalingGroupInstanceRefreshPreferences | undefined);
    private _checkpointDelay?;
    get checkpointDelay(): string;
    set checkpointDelay(value: string);
    resetCheckpointDelay(): void;
    get checkpointDelayInput(): string;
    private _checkpointPercentages?;
    get checkpointPercentages(): number[];
    set checkpointPercentages(value: number[]);
    resetCheckpointPercentages(): void;
    get checkpointPercentagesInput(): number[];
    private _instanceWarmup?;
    get instanceWarmup(): string;
    set instanceWarmup(value: string);
    resetInstanceWarmup(): void;
    get instanceWarmupInput(): string;
    private _minHealthyPercentage?;
    get minHealthyPercentage(): number;
    set minHealthyPercentage(value: number);
    resetMinHealthyPercentage(): void;
    get minHealthyPercentageInput(): number;
}
export interface AutoscalingGroupInstanceRefresh {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#strategy AutoscalingGroup#strategy}
    */
    readonly strategy: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#triggers AutoscalingGroup#triggers}
    */
    readonly triggers?: string[];
    /**
    * preferences block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#preferences AutoscalingGroup#preferences}
    */
    readonly preferences?: AutoscalingGroupInstanceRefreshPreferences;
}
export declare function autoscalingGroupInstanceRefreshToTerraform(struct?: AutoscalingGroupInstanceRefreshOutputReference | AutoscalingGroupInstanceRefresh): any;
export declare class AutoscalingGroupInstanceRefreshOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AutoscalingGroupInstanceRefresh | undefined;
    set internalValue(value: AutoscalingGroupInstanceRefresh | undefined);
    private _strategy?;
    get strategy(): string;
    set strategy(value: string);
    get strategyInput(): string;
    private _triggers?;
    get triggers(): string[];
    set triggers(value: string[]);
    resetTriggers(): void;
    get triggersInput(): string[];
    private _preferences;
    get preferences(): AutoscalingGroupInstanceRefreshPreferencesOutputReference;
    putPreferences(value: AutoscalingGroupInstanceRefreshPreferences): void;
    resetPreferences(): void;
    get preferencesInput(): AutoscalingGroupInstanceRefreshPreferences;
}
export interface AutoscalingGroupLaunchTemplate {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#id AutoscalingGroup#id}
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#name AutoscalingGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#version AutoscalingGroup#version}
    */
    readonly version?: string;
}
export declare function autoscalingGroupLaunchTemplateToTerraform(struct?: AutoscalingGroupLaunchTemplateOutputReference | AutoscalingGroupLaunchTemplate): any;
export declare class AutoscalingGroupLaunchTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AutoscalingGroupLaunchTemplate | undefined;
    set internalValue(value: AutoscalingGroupLaunchTemplate | undefined);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string;
}
export interface AutoscalingGroupMixedInstancesPolicyInstancesDistribution {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#on_demand_allocation_strategy AutoscalingGroup#on_demand_allocation_strategy}
    */
    readonly onDemandAllocationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#on_demand_base_capacity AutoscalingGroup#on_demand_base_capacity}
    */
    readonly onDemandBaseCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#on_demand_percentage_above_base_capacity AutoscalingGroup#on_demand_percentage_above_base_capacity}
    */
    readonly onDemandPercentageAboveBaseCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#spot_allocation_strategy AutoscalingGroup#spot_allocation_strategy}
    */
    readonly spotAllocationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#spot_instance_pools AutoscalingGroup#spot_instance_pools}
    */
    readonly spotInstancePools?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#spot_max_price AutoscalingGroup#spot_max_price}
    */
    readonly spotMaxPrice?: string;
}
export declare function autoscalingGroupMixedInstancesPolicyInstancesDistributionToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference | AutoscalingGroupMixedInstancesPolicyInstancesDistribution): any;
export declare class AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AutoscalingGroupMixedInstancesPolicyInstancesDistribution | undefined;
    set internalValue(value: AutoscalingGroupMixedInstancesPolicyInstancesDistribution | undefined);
    private _onDemandAllocationStrategy?;
    get onDemandAllocationStrategy(): string;
    set onDemandAllocationStrategy(value: string);
    resetOnDemandAllocationStrategy(): void;
    get onDemandAllocationStrategyInput(): string;
    private _onDemandBaseCapacity?;
    get onDemandBaseCapacity(): number;
    set onDemandBaseCapacity(value: number);
    resetOnDemandBaseCapacity(): void;
    get onDemandBaseCapacityInput(): number;
    private _onDemandPercentageAboveBaseCapacity?;
    get onDemandPercentageAboveBaseCapacity(): number;
    set onDemandPercentageAboveBaseCapacity(value: number);
    resetOnDemandPercentageAboveBaseCapacity(): void;
    get onDemandPercentageAboveBaseCapacityInput(): number;
    private _spotAllocationStrategy?;
    get spotAllocationStrategy(): string;
    set spotAllocationStrategy(value: string);
    resetSpotAllocationStrategy(): void;
    get spotAllocationStrategyInput(): string;
    private _spotInstancePools?;
    get spotInstancePools(): number;
    set spotInstancePools(value: number);
    resetSpotInstancePools(): void;
    get spotInstancePoolsInput(): number;
    private _spotMaxPrice?;
    get spotMaxPrice(): string;
    set spotMaxPrice(value: string);
    resetSpotMaxPrice(): void;
    get spotMaxPriceInput(): string;
}
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template_id AutoscalingGroup#launch_template_id}
    */
    readonly launchTemplateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template_name AutoscalingGroup#launch_template_name}
    */
    readonly launchTemplateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#version AutoscalingGroup#version}
    */
    readonly version?: string;
}
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification): any;
export declare class AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification | undefined;
    set internalValue(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification | undefined);
    private _launchTemplateId?;
    get launchTemplateId(): string;
    set launchTemplateId(value: string);
    resetLaunchTemplateId(): void;
    get launchTemplateIdInput(): string;
    private _launchTemplateName?;
    get launchTemplateName(): string;
    set launchTemplateName(value: string);
    resetLaunchTemplateName(): void;
    get launchTemplateNameInput(): string;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string;
}
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template_id AutoscalingGroup#launch_template_id}
    */
    readonly launchTemplateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template_name AutoscalingGroup#launch_template_name}
    */
    readonly launchTemplateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#version AutoscalingGroup#version}
    */
    readonly version?: string;
}
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification): any;
export declare class AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification | undefined;
    set internalValue(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification | undefined);
    private _launchTemplateId?;
    get launchTemplateId(): string;
    set launchTemplateId(value: string);
    resetLaunchTemplateId(): void;
    get launchTemplateIdInput(): string;
    private _launchTemplateName?;
    get launchTemplateName(): string;
    set launchTemplateName(value: string);
    resetLaunchTemplateName(): void;
    get launchTemplateNameInput(): string;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string;
}
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#instance_type AutoscalingGroup#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#weighted_capacity AutoscalingGroup#weighted_capacity}
    */
    readonly weightedCapacity?: string;
    /**
    * launch_template_specification block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template_specification AutoscalingGroup#launch_template_specification}
    */
    readonly launchTemplateSpecification?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification;
}
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride): any;
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplate {
    /**
    * launch_template_specification block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template_specification AutoscalingGroup#launch_template_specification}
    */
    readonly launchTemplateSpecification: AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification;
    /**
    * override block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#override AutoscalingGroup#override}
    */
    readonly override?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride[];
}
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplate): any;
export declare class AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AutoscalingGroupMixedInstancesPolicyLaunchTemplate | undefined;
    set internalValue(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplate | undefined);
    private _launchTemplateSpecification;
    get launchTemplateSpecification(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference;
    putLaunchTemplateSpecification(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification): void;
    get launchTemplateSpecificationInput(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification;
    private _override?;
    get override(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride[];
    set override(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride[]);
    resetOverride(): void;
    get overrideInput(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride[];
}
export interface AutoscalingGroupMixedInstancesPolicy {
    /**
    * instances_distribution block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#instances_distribution AutoscalingGroup#instances_distribution}
    */
    readonly instancesDistribution?: AutoscalingGroupMixedInstancesPolicyInstancesDistribution;
    /**
    * launch_template block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template AutoscalingGroup#launch_template}
    */
    readonly launchTemplate: AutoscalingGroupMixedInstancesPolicyLaunchTemplate;
}
export declare function autoscalingGroupMixedInstancesPolicyToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyOutputReference | AutoscalingGroupMixedInstancesPolicy): any;
export declare class AutoscalingGroupMixedInstancesPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AutoscalingGroupMixedInstancesPolicy | undefined;
    set internalValue(value: AutoscalingGroupMixedInstancesPolicy | undefined);
    private _instancesDistribution;
    get instancesDistribution(): AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference;
    putInstancesDistribution(value: AutoscalingGroupMixedInstancesPolicyInstancesDistribution): void;
    resetInstancesDistribution(): void;
    get instancesDistributionInput(): AutoscalingGroupMixedInstancesPolicyInstancesDistribution;
    private _launchTemplate;
    get launchTemplate(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference;
    putLaunchTemplate(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplate): void;
    get launchTemplateInput(): AutoscalingGroupMixedInstancesPolicyLaunchTemplate;
}
export interface AutoscalingGroupTag {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#key AutoscalingGroup#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#propagate_at_launch AutoscalingGroup#propagate_at_launch}
    */
    readonly propagateAtLaunch: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#value AutoscalingGroup#value}
    */
    readonly value: string;
}
export declare function autoscalingGroupTagToTerraform(struct?: AutoscalingGroupTag): any;
export interface AutoscalingGroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#delete AutoscalingGroup#delete}
    */
    readonly delete?: string;
}
export declare function autoscalingGroupTimeoutsToTerraform(struct?: AutoscalingGroupTimeoutsOutputReference | AutoscalingGroupTimeouts): any;
export declare class AutoscalingGroupTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AutoscalingGroupTimeouts | undefined;
    set internalValue(value: AutoscalingGroupTimeouts | undefined);
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
}
export interface AutoscalingGroupWarmPool {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#max_group_prepared_capacity AutoscalingGroup#max_group_prepared_capacity}
    */
    readonly maxGroupPreparedCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#min_size AutoscalingGroup#min_size}
    */
    readonly minSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#pool_state AutoscalingGroup#pool_state}
    */
    readonly poolState?: string;
}
export declare function autoscalingGroupWarmPoolToTerraform(struct?: AutoscalingGroupWarmPoolOutputReference | AutoscalingGroupWarmPool): any;
export declare class AutoscalingGroupWarmPoolOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AutoscalingGroupWarmPool | undefined;
    set internalValue(value: AutoscalingGroupWarmPool | undefined);
    private _maxGroupPreparedCapacity?;
    get maxGroupPreparedCapacity(): number;
    set maxGroupPreparedCapacity(value: number);
    resetMaxGroupPreparedCapacity(): void;
    get maxGroupPreparedCapacityInput(): number;
    private _minSize?;
    get minSize(): number;
    set minSize(value: number);
    resetMinSize(): void;
    get minSizeInput(): number;
    private _poolState?;
    get poolState(): string;
    set poolState(value: string);
    resetPoolState(): void;
    get poolStateInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html aws_autoscaling_group}
*/
export declare class AutoscalingGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html aws_autoscaling_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingGroupConfig
    */
    constructor(scope: Construct, id: string, config: AutoscalingGroupConfig);
    get arn(): string;
    private _availabilityZones?;
    get availabilityZones(): string[];
    set availabilityZones(value: string[]);
    resetAvailabilityZones(): void;
    get availabilityZonesInput(): string[];
    private _capacityRebalance?;
    get capacityRebalance(): boolean | cdktf.IResolvable;
    set capacityRebalance(value: boolean | cdktf.IResolvable);
    resetCapacityRebalance(): void;
    get capacityRebalanceInput(): boolean | cdktf.IResolvable;
    private _defaultCooldown?;
    get defaultCooldown(): number;
    set defaultCooldown(value: number);
    resetDefaultCooldown(): void;
    get defaultCooldownInput(): number;
    private _desiredCapacity?;
    get desiredCapacity(): number;
    set desiredCapacity(value: number);
    resetDesiredCapacity(): void;
    get desiredCapacityInput(): number;
    private _enabledMetrics?;
    get enabledMetrics(): string[];
    set enabledMetrics(value: string[]);
    resetEnabledMetrics(): void;
    get enabledMetricsInput(): string[];
    private _forceDelete?;
    get forceDelete(): boolean | cdktf.IResolvable;
    set forceDelete(value: boolean | cdktf.IResolvable);
    resetForceDelete(): void;
    get forceDeleteInput(): boolean | cdktf.IResolvable;
    private _forceDeleteWarmPool?;
    get forceDeleteWarmPool(): boolean | cdktf.IResolvable;
    set forceDeleteWarmPool(value: boolean | cdktf.IResolvable);
    resetForceDeleteWarmPool(): void;
    get forceDeleteWarmPoolInput(): boolean | cdktf.IResolvable;
    private _healthCheckGracePeriod?;
    get healthCheckGracePeriod(): number;
    set healthCheckGracePeriod(value: number);
    resetHealthCheckGracePeriod(): void;
    get healthCheckGracePeriodInput(): number;
    private _healthCheckType?;
    get healthCheckType(): string;
    set healthCheckType(value: string);
    resetHealthCheckType(): void;
    get healthCheckTypeInput(): string;
    get id(): string;
    private _launchConfiguration?;
    get launchConfiguration(): string;
    set launchConfiguration(value: string);
    resetLaunchConfiguration(): void;
    get launchConfigurationInput(): string;
    private _loadBalancers?;
    get loadBalancers(): string[];
    set loadBalancers(value: string[]);
    resetLoadBalancers(): void;
    get loadBalancersInput(): string[];
    private _maxInstanceLifetime?;
    get maxInstanceLifetime(): number;
    set maxInstanceLifetime(value: number);
    resetMaxInstanceLifetime(): void;
    get maxInstanceLifetimeInput(): number;
    private _maxSize?;
    get maxSize(): number;
    set maxSize(value: number);
    get maxSizeInput(): number;
    private _metricsGranularity?;
    get metricsGranularity(): string;
    set metricsGranularity(value: string);
    resetMetricsGranularity(): void;
    get metricsGranularityInput(): string;
    private _minElbCapacity?;
    get minElbCapacity(): number;
    set minElbCapacity(value: number);
    resetMinElbCapacity(): void;
    get minElbCapacityInput(): number;
    private _minSize?;
    get minSize(): number;
    set minSize(value: number);
    get minSizeInput(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string;
    private _placementGroup?;
    get placementGroup(): string;
    set placementGroup(value: string);
    resetPlacementGroup(): void;
    get placementGroupInput(): string;
    private _protectFromScaleIn?;
    get protectFromScaleIn(): boolean | cdktf.IResolvable;
    set protectFromScaleIn(value: boolean | cdktf.IResolvable);
    resetProtectFromScaleIn(): void;
    get protectFromScaleInInput(): boolean | cdktf.IResolvable;
    private _serviceLinkedRoleArn?;
    get serviceLinkedRoleArn(): string;
    set serviceLinkedRoleArn(value: string);
    resetServiceLinkedRoleArn(): void;
    get serviceLinkedRoleArnInput(): string;
    private _suspendedProcesses?;
    get suspendedProcesses(): string[];
    set suspendedProcesses(value: string[]);
    resetSuspendedProcesses(): void;
    get suspendedProcessesInput(): string[];
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
    private _targetGroupArns?;
    get targetGroupArns(): string[];
    set targetGroupArns(value: string[]);
    resetTargetGroupArns(): void;
    get targetGroupArnsInput(): string[];
    private _terminationPolicies?;
    get terminationPolicies(): string[];
    set terminationPolicies(value: string[]);
    resetTerminationPolicies(): void;
    get terminationPoliciesInput(): string[];
    private _vpcZoneIdentifier?;
    get vpcZoneIdentifier(): string[];
    set vpcZoneIdentifier(value: string[]);
    resetVpcZoneIdentifier(): void;
    get vpcZoneIdentifierInput(): string[];
    private _waitForCapacityTimeout?;
    get waitForCapacityTimeout(): string;
    set waitForCapacityTimeout(value: string);
    resetWaitForCapacityTimeout(): void;
    get waitForCapacityTimeoutInput(): string;
    private _waitForElbCapacity?;
    get waitForElbCapacity(): number;
    set waitForElbCapacity(value: number);
    resetWaitForElbCapacity(): void;
    get waitForElbCapacityInput(): number;
    private _initialLifecycleHook?;
    get initialLifecycleHook(): AutoscalingGroupInitialLifecycleHook[];
    set initialLifecycleHook(value: AutoscalingGroupInitialLifecycleHook[]);
    resetInitialLifecycleHook(): void;
    get initialLifecycleHookInput(): AutoscalingGroupInitialLifecycleHook[];
    private _instanceRefresh;
    get instanceRefresh(): AutoscalingGroupInstanceRefreshOutputReference;
    putInstanceRefresh(value: AutoscalingGroupInstanceRefresh): void;
    resetInstanceRefresh(): void;
    get instanceRefreshInput(): AutoscalingGroupInstanceRefresh;
    private _launchTemplate;
    get launchTemplate(): AutoscalingGroupLaunchTemplateOutputReference;
    putLaunchTemplate(value: AutoscalingGroupLaunchTemplate): void;
    resetLaunchTemplate(): void;
    get launchTemplateInput(): AutoscalingGroupLaunchTemplate;
    private _mixedInstancesPolicy;
    get mixedInstancesPolicy(): AutoscalingGroupMixedInstancesPolicyOutputReference;
    putMixedInstancesPolicy(value: AutoscalingGroupMixedInstancesPolicy): void;
    resetMixedInstancesPolicy(): void;
    get mixedInstancesPolicyInput(): AutoscalingGroupMixedInstancesPolicy;
    private _tag?;
    get tag(): AutoscalingGroupTag[];
    set tag(value: AutoscalingGroupTag[]);
    resetTag(): void;
    get tagInput(): AutoscalingGroupTag[];
    private _timeouts;
    get timeouts(): AutoscalingGroupTimeoutsOutputReference;
    putTimeouts(value: AutoscalingGroupTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): AutoscalingGroupTimeouts;
    private _warmPool;
    get warmPool(): AutoscalingGroupWarmPoolOutputReference;
    putWarmPool(value: AutoscalingGroupWarmPool): void;
    resetWarmPool(): void;
    get warmPoolInput(): AutoscalingGroupWarmPool;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=autoscaling-group.d.ts.map