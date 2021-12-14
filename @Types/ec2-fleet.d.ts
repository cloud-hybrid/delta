import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface Ec2FleetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#excess_capacity_termination_policy Ec2Fleet#excess_capacity_termination_policy}
    */
    readonly excessCapacityTerminationPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#replace_unhealthy_instances Ec2Fleet#replace_unhealthy_instances}
    */
    readonly replaceUnhealthyInstances?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#tags Ec2Fleet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#tags_all Ec2Fleet#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#terminate_instances Ec2Fleet#terminate_instances}
    */
    readonly terminateInstances?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#terminate_instances_with_expiration Ec2Fleet#terminate_instances_with_expiration}
    */
    readonly terminateInstancesWithExpiration?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#type Ec2Fleet#type}
    */
    readonly type?: string;
    /**
    * launch_template_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#launch_template_config Ec2Fleet#launch_template_config}
    */
    readonly launchTemplateConfig: Ec2FleetLaunchTemplateConfig;
    /**
    * on_demand_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#on_demand_options Ec2Fleet#on_demand_options}
    */
    readonly onDemandOptions?: Ec2FleetOnDemandOptions;
    /**
    * spot_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#spot_options Ec2Fleet#spot_options}
    */
    readonly spotOptions?: Ec2FleetSpotOptions;
    /**
    * target_capacity_specification block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#target_capacity_specification Ec2Fleet#target_capacity_specification}
    */
    readonly targetCapacitySpecification: Ec2FleetTargetCapacitySpecification;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#timeouts Ec2Fleet#timeouts}
    */
    readonly timeouts?: Ec2FleetTimeouts;
}
export interface Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#launch_template_id Ec2Fleet#launch_template_id}
    */
    readonly launchTemplateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#launch_template_name Ec2Fleet#launch_template_name}
    */
    readonly launchTemplateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#version Ec2Fleet#version}
    */
    readonly version: string;
}
export declare function ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationToTerraform(struct?: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference | Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification): any;
export declare class Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification | undefined;
    set internalValue(value: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification | undefined);
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
    get versionInput(): string;
}
export interface Ec2FleetLaunchTemplateConfigOverride {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#availability_zone Ec2Fleet#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#instance_type Ec2Fleet#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#max_price Ec2Fleet#max_price}
    */
    readonly maxPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#priority Ec2Fleet#priority}
    */
    readonly priority?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#subnet_id Ec2Fleet#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#weighted_capacity Ec2Fleet#weighted_capacity}
    */
    readonly weightedCapacity?: number;
}
export declare function ec2FleetLaunchTemplateConfigOverrideToTerraform(struct?: Ec2FleetLaunchTemplateConfigOverride): any;
export interface Ec2FleetLaunchTemplateConfig {
    /**
    * launch_template_specification block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#launch_template_specification Ec2Fleet#launch_template_specification}
    */
    readonly launchTemplateSpecification: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification;
    /**
    * override block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#override Ec2Fleet#override}
    */
    readonly override?: Ec2FleetLaunchTemplateConfigOverride[];
}
export declare function ec2FleetLaunchTemplateConfigToTerraform(struct?: Ec2FleetLaunchTemplateConfigOutputReference | Ec2FleetLaunchTemplateConfig): any;
export declare class Ec2FleetLaunchTemplateConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Ec2FleetLaunchTemplateConfig | undefined;
    set internalValue(value: Ec2FleetLaunchTemplateConfig | undefined);
    private _launchTemplateSpecification;
    get launchTemplateSpecification(): Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference;
    putLaunchTemplateSpecification(value: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification): void;
    get launchTemplateSpecificationInput(): Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification;
    private _override?;
    get override(): Ec2FleetLaunchTemplateConfigOverride[];
    set override(value: Ec2FleetLaunchTemplateConfigOverride[]);
    resetOverride(): void;
    get overrideInput(): Ec2FleetLaunchTemplateConfigOverride[];
}
export interface Ec2FleetOnDemandOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#allocation_strategy Ec2Fleet#allocation_strategy}
    */
    readonly allocationStrategy?: string;
}
export declare function ec2FleetOnDemandOptionsToTerraform(struct?: Ec2FleetOnDemandOptionsOutputReference | Ec2FleetOnDemandOptions): any;
export declare class Ec2FleetOnDemandOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Ec2FleetOnDemandOptions | undefined;
    set internalValue(value: Ec2FleetOnDemandOptions | undefined);
    private _allocationStrategy?;
    get allocationStrategy(): string;
    set allocationStrategy(value: string);
    resetAllocationStrategy(): void;
    get allocationStrategyInput(): string;
}
export interface Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#replacement_strategy Ec2Fleet#replacement_strategy}
    */
    readonly replacementStrategy?: string;
}
export declare function ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceToTerraform(struct?: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference | Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance): any;
export declare class Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance | undefined;
    set internalValue(value: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance | undefined);
    private _replacementStrategy?;
    get replacementStrategy(): string;
    set replacementStrategy(value: string);
    resetReplacementStrategy(): void;
    get replacementStrategyInput(): string;
}
export interface Ec2FleetSpotOptionsMaintenanceStrategies {
    /**
    * capacity_rebalance block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#capacity_rebalance Ec2Fleet#capacity_rebalance}
    */
    readonly capacityRebalance?: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance;
}
export declare function ec2FleetSpotOptionsMaintenanceStrategiesToTerraform(struct?: Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference | Ec2FleetSpotOptionsMaintenanceStrategies): any;
export declare class Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Ec2FleetSpotOptionsMaintenanceStrategies | undefined;
    set internalValue(value: Ec2FleetSpotOptionsMaintenanceStrategies | undefined);
    private _capacityRebalance;
    get capacityRebalance(): Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference;
    putCapacityRebalance(value: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance): void;
    resetCapacityRebalance(): void;
    get capacityRebalanceInput(): Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance;
}
export interface Ec2FleetSpotOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#allocation_strategy Ec2Fleet#allocation_strategy}
    */
    readonly allocationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#instance_interruption_behavior Ec2Fleet#instance_interruption_behavior}
    */
    readonly instanceInterruptionBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#instance_pools_to_use_count Ec2Fleet#instance_pools_to_use_count}
    */
    readonly instancePoolsToUseCount?: number;
    /**
    * maintenance_strategies block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#maintenance_strategies Ec2Fleet#maintenance_strategies}
    */
    readonly maintenanceStrategies?: Ec2FleetSpotOptionsMaintenanceStrategies;
}
export declare function ec2FleetSpotOptionsToTerraform(struct?: Ec2FleetSpotOptionsOutputReference | Ec2FleetSpotOptions): any;
export declare class Ec2FleetSpotOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Ec2FleetSpotOptions | undefined;
    set internalValue(value: Ec2FleetSpotOptions | undefined);
    private _allocationStrategy?;
    get allocationStrategy(): string;
    set allocationStrategy(value: string);
    resetAllocationStrategy(): void;
    get allocationStrategyInput(): string;
    private _instanceInterruptionBehavior?;
    get instanceInterruptionBehavior(): string;
    set instanceInterruptionBehavior(value: string);
    resetInstanceInterruptionBehavior(): void;
    get instanceInterruptionBehaviorInput(): string;
    private _instancePoolsToUseCount?;
    get instancePoolsToUseCount(): number;
    set instancePoolsToUseCount(value: number);
    resetInstancePoolsToUseCount(): void;
    get instancePoolsToUseCountInput(): number;
    private _maintenanceStrategies;
    get maintenanceStrategies(): Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference;
    putMaintenanceStrategies(value: Ec2FleetSpotOptionsMaintenanceStrategies): void;
    resetMaintenanceStrategies(): void;
    get maintenanceStrategiesInput(): Ec2FleetSpotOptionsMaintenanceStrategies;
}
export interface Ec2FleetTargetCapacitySpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#default_target_capacity_type Ec2Fleet#default_target_capacity_type}
    */
    readonly defaultTargetCapacityType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#on_demand_target_capacity Ec2Fleet#on_demand_target_capacity}
    */
    readonly onDemandTargetCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#spot_target_capacity Ec2Fleet#spot_target_capacity}
    */
    readonly spotTargetCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#total_target_capacity Ec2Fleet#total_target_capacity}
    */
    readonly totalTargetCapacity: number;
}
export declare function ec2FleetTargetCapacitySpecificationToTerraform(struct?: Ec2FleetTargetCapacitySpecificationOutputReference | Ec2FleetTargetCapacitySpecification): any;
export declare class Ec2FleetTargetCapacitySpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Ec2FleetTargetCapacitySpecification | undefined;
    set internalValue(value: Ec2FleetTargetCapacitySpecification | undefined);
    private _defaultTargetCapacityType?;
    get defaultTargetCapacityType(): string;
    set defaultTargetCapacityType(value: string);
    get defaultTargetCapacityTypeInput(): string;
    private _onDemandTargetCapacity?;
    get onDemandTargetCapacity(): number;
    set onDemandTargetCapacity(value: number);
    resetOnDemandTargetCapacity(): void;
    get onDemandTargetCapacityInput(): number;
    private _spotTargetCapacity?;
    get spotTargetCapacity(): number;
    set spotTargetCapacity(value: number);
    resetSpotTargetCapacity(): void;
    get spotTargetCapacityInput(): number;
    private _totalTargetCapacity?;
    get totalTargetCapacity(): number;
    set totalTargetCapacity(value: number);
    get totalTargetCapacityInput(): number;
}
export interface Ec2FleetTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#create Ec2Fleet#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#delete Ec2Fleet#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#update Ec2Fleet#update}
    */
    readonly update?: string;
}
export declare function ec2FleetTimeoutsToTerraform(struct?: Ec2FleetTimeoutsOutputReference | Ec2FleetTimeouts): any;
export declare class Ec2FleetTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Ec2FleetTimeouts | undefined;
    set internalValue(value: Ec2FleetTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html aws_ec2_fleet}
*/
export declare class Ec2Fleet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html aws_ec2_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2FleetConfig
    */
    constructor(scope: Construct, id: string, config: Ec2FleetConfig);
    private _excessCapacityTerminationPolicy?;
    get excessCapacityTerminationPolicy(): string;
    set excessCapacityTerminationPolicy(value: string);
    resetExcessCapacityTerminationPolicy(): void;
    get excessCapacityTerminationPolicyInput(): string;
    get id(): string;
    private _replaceUnhealthyInstances?;
    get replaceUnhealthyInstances(): boolean | cdktf.IResolvable;
    set replaceUnhealthyInstances(value: boolean | cdktf.IResolvable);
    resetReplaceUnhealthyInstances(): void;
    get replaceUnhealthyInstancesInput(): boolean | cdktf.IResolvable;
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
    private _terminateInstances?;
    get terminateInstances(): boolean | cdktf.IResolvable;
    set terminateInstances(value: boolean | cdktf.IResolvable);
    resetTerminateInstances(): void;
    get terminateInstancesInput(): boolean | cdktf.IResolvable;
    private _terminateInstancesWithExpiration?;
    get terminateInstancesWithExpiration(): boolean | cdktf.IResolvable;
    set terminateInstancesWithExpiration(value: boolean | cdktf.IResolvable);
    resetTerminateInstancesWithExpiration(): void;
    get terminateInstancesWithExpirationInput(): boolean | cdktf.IResolvable;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
    private _launchTemplateConfig;
    get launchTemplateConfig(): Ec2FleetLaunchTemplateConfigOutputReference;
    putLaunchTemplateConfig(value: Ec2FleetLaunchTemplateConfig): void;
    get launchTemplateConfigInput(): Ec2FleetLaunchTemplateConfig;
    private _onDemandOptions;
    get onDemandOptions(): Ec2FleetOnDemandOptionsOutputReference;
    putOnDemandOptions(value: Ec2FleetOnDemandOptions): void;
    resetOnDemandOptions(): void;
    get onDemandOptionsInput(): Ec2FleetOnDemandOptions;
    private _spotOptions;
    get spotOptions(): Ec2FleetSpotOptionsOutputReference;
    putSpotOptions(value: Ec2FleetSpotOptions): void;
    resetSpotOptions(): void;
    get spotOptionsInput(): Ec2FleetSpotOptions;
    private _targetCapacitySpecification;
    get targetCapacitySpecification(): Ec2FleetTargetCapacitySpecificationOutputReference;
    putTargetCapacitySpecification(value: Ec2FleetTargetCapacitySpecification): void;
    get targetCapacitySpecificationInput(): Ec2FleetTargetCapacitySpecification;
    private _timeouts;
    get timeouts(): Ec2FleetTimeoutsOutputReference;
    putTimeouts(value: Ec2FleetTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): Ec2FleetTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ec2-fleet.d.ts.map