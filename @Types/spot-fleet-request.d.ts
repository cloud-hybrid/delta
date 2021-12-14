import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface SpotFleetRequestConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#allocation_strategy SpotFleetRequest#allocation_strategy}
    */
    readonly allocationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#excess_capacity_termination_policy SpotFleetRequest#excess_capacity_termination_policy}
    */
    readonly excessCapacityTerminationPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#fleet_type SpotFleetRequest#fleet_type}
    */
    readonly fleetType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#iam_fleet_role SpotFleetRequest#iam_fleet_role}
    */
    readonly iamFleetRole: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#instance_interruption_behaviour SpotFleetRequest#instance_interruption_behaviour}
    */
    readonly instanceInterruptionBehaviour?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#instance_pools_to_use_count SpotFleetRequest#instance_pools_to_use_count}
    */
    readonly instancePoolsToUseCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#load_balancers SpotFleetRequest#load_balancers}
    */
    readonly loadBalancers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#on_demand_allocation_strategy SpotFleetRequest#on_demand_allocation_strategy}
    */
    readonly onDemandAllocationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#on_demand_max_total_price SpotFleetRequest#on_demand_max_total_price}
    */
    readonly onDemandMaxTotalPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#on_demand_target_capacity SpotFleetRequest#on_demand_target_capacity}
    */
    readonly onDemandTargetCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#replace_unhealthy_instances SpotFleetRequest#replace_unhealthy_instances}
    */
    readonly replaceUnhealthyInstances?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#spot_price SpotFleetRequest#spot_price}
    */
    readonly spotPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#tags SpotFleetRequest#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#tags_all SpotFleetRequest#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#target_capacity SpotFleetRequest#target_capacity}
    */
    readonly targetCapacity: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#target_group_arns SpotFleetRequest#target_group_arns}
    */
    readonly targetGroupArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#terminate_instances_with_expiration SpotFleetRequest#terminate_instances_with_expiration}
    */
    readonly terminateInstancesWithExpiration?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#valid_from SpotFleetRequest#valid_from}
    */
    readonly validFrom?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#valid_until SpotFleetRequest#valid_until}
    */
    readonly validUntil?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#wait_for_fulfillment SpotFleetRequest#wait_for_fulfillment}
    */
    readonly waitForFulfillment?: boolean | cdktf.IResolvable;
    /**
    * launch_specification block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#launch_specification SpotFleetRequest#launch_specification}
    */
    readonly launchSpecification?: SpotFleetRequestLaunchSpecification[];
    /**
    * launch_template_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#launch_template_config SpotFleetRequest#launch_template_config}
    */
    readonly launchTemplateConfig?: SpotFleetRequestLaunchTemplateConfig[];
    /**
    * spot_maintenance_strategies block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#spot_maintenance_strategies SpotFleetRequest#spot_maintenance_strategies}
    */
    readonly spotMaintenanceStrategies?: SpotFleetRequestSpotMaintenanceStrategies;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#timeouts SpotFleetRequest#timeouts}
    */
    readonly timeouts?: SpotFleetRequestTimeouts;
}
export interface SpotFleetRequestLaunchSpecificationEbsBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#delete_on_termination SpotFleetRequest#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#device_name SpotFleetRequest#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#encrypted SpotFleetRequest#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#iops SpotFleetRequest#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#kms_key_id SpotFleetRequest#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#snapshot_id SpotFleetRequest#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#throughput SpotFleetRequest#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#volume_size SpotFleetRequest#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#volume_type SpotFleetRequest#volume_type}
    */
    readonly volumeType?: string;
}
export declare function spotFleetRequestLaunchSpecificationEbsBlockDeviceToTerraform(struct?: SpotFleetRequestLaunchSpecificationEbsBlockDevice): any;
export interface SpotFleetRequestLaunchSpecificationEphemeralBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#device_name SpotFleetRequest#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#virtual_name SpotFleetRequest#virtual_name}
    */
    readonly virtualName: string;
}
export declare function spotFleetRequestLaunchSpecificationEphemeralBlockDeviceToTerraform(struct?: SpotFleetRequestLaunchSpecificationEphemeralBlockDevice): any;
export interface SpotFleetRequestLaunchSpecificationRootBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#delete_on_termination SpotFleetRequest#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#encrypted SpotFleetRequest#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#iops SpotFleetRequest#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#kms_key_id SpotFleetRequest#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#throughput SpotFleetRequest#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#volume_size SpotFleetRequest#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#volume_type SpotFleetRequest#volume_type}
    */
    readonly volumeType?: string;
}
export declare function spotFleetRequestLaunchSpecificationRootBlockDeviceToTerraform(struct?: SpotFleetRequestLaunchSpecificationRootBlockDevice): any;
export interface SpotFleetRequestLaunchSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#ami SpotFleetRequest#ami}
    */
    readonly ami: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#associate_public_ip_address SpotFleetRequest#associate_public_ip_address}
    */
    readonly associatePublicIpAddress?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#availability_zone SpotFleetRequest#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#ebs_optimized SpotFleetRequest#ebs_optimized}
    */
    readonly ebsOptimized?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#iam_instance_profile SpotFleetRequest#iam_instance_profile}
    */
    readonly iamInstanceProfile?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#iam_instance_profile_arn SpotFleetRequest#iam_instance_profile_arn}
    */
    readonly iamInstanceProfileArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#instance_type SpotFleetRequest#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#key_name SpotFleetRequest#key_name}
    */
    readonly keyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#monitoring SpotFleetRequest#monitoring}
    */
    readonly monitoring?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#placement_group SpotFleetRequest#placement_group}
    */
    readonly placementGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#placement_tenancy SpotFleetRequest#placement_tenancy}
    */
    readonly placementTenancy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#spot_price SpotFleetRequest#spot_price}
    */
    readonly spotPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#subnet_id SpotFleetRequest#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#tags SpotFleetRequest#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#user_data SpotFleetRequest#user_data}
    */
    readonly userData?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#vpc_security_group_ids SpotFleetRequest#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#weighted_capacity SpotFleetRequest#weighted_capacity}
    */
    readonly weightedCapacity?: string;
    /**
    * ebs_block_device block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#ebs_block_device SpotFleetRequest#ebs_block_device}
    */
    readonly ebsBlockDevice?: SpotFleetRequestLaunchSpecificationEbsBlockDevice[];
    /**
    * ephemeral_block_device block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#ephemeral_block_device SpotFleetRequest#ephemeral_block_device}
    */
    readonly ephemeralBlockDevice?: SpotFleetRequestLaunchSpecificationEphemeralBlockDevice[];
    /**
    * root_block_device block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#root_block_device SpotFleetRequest#root_block_device}
    */
    readonly rootBlockDevice?: SpotFleetRequestLaunchSpecificationRootBlockDevice[];
}
export declare function spotFleetRequestLaunchSpecificationToTerraform(struct?: SpotFleetRequestLaunchSpecification): any;
export interface SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#id SpotFleetRequest#id}
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#name SpotFleetRequest#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#version SpotFleetRequest#version}
    */
    readonly version?: string;
}
export declare function spotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationToTerraform(struct?: SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference | SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification): any;
export declare class SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification | undefined;
    set internalValue(value: SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
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
export interface SpotFleetRequestLaunchTemplateConfigOverrides {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#availability_zone SpotFleetRequest#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#instance_type SpotFleetRequest#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#priority SpotFleetRequest#priority}
    */
    readonly priority?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#spot_price SpotFleetRequest#spot_price}
    */
    readonly spotPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#subnet_id SpotFleetRequest#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#weighted_capacity SpotFleetRequest#weighted_capacity}
    */
    readonly weightedCapacity?: number;
}
export declare function spotFleetRequestLaunchTemplateConfigOverridesToTerraform(struct?: SpotFleetRequestLaunchTemplateConfigOverrides): any;
export interface SpotFleetRequestLaunchTemplateConfig {
    /**
    * launch_template_specification block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#launch_template_specification SpotFleetRequest#launch_template_specification}
    */
    readonly launchTemplateSpecification: SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification;
    /**
    * overrides block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#overrides SpotFleetRequest#overrides}
    */
    readonly overrides?: SpotFleetRequestLaunchTemplateConfigOverrides[];
}
export declare function spotFleetRequestLaunchTemplateConfigToTerraform(struct?: SpotFleetRequestLaunchTemplateConfig): any;
export interface SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#replacement_strategy SpotFleetRequest#replacement_strategy}
    */
    readonly replacementStrategy?: string;
}
export declare function spotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceToTerraform(struct?: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference | SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance): any;
export declare class SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance | undefined;
    set internalValue(value: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance | undefined);
    private _replacementStrategy?;
    get replacementStrategy(): string;
    set replacementStrategy(value: string);
    resetReplacementStrategy(): void;
    get replacementStrategyInput(): string;
}
export interface SpotFleetRequestSpotMaintenanceStrategies {
    /**
    * capacity_rebalance block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#capacity_rebalance SpotFleetRequest#capacity_rebalance}
    */
    readonly capacityRebalance?: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance;
}
export declare function spotFleetRequestSpotMaintenanceStrategiesToTerraform(struct?: SpotFleetRequestSpotMaintenanceStrategiesOutputReference | SpotFleetRequestSpotMaintenanceStrategies): any;
export declare class SpotFleetRequestSpotMaintenanceStrategiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SpotFleetRequestSpotMaintenanceStrategies | undefined;
    set internalValue(value: SpotFleetRequestSpotMaintenanceStrategies | undefined);
    private _capacityRebalance;
    get capacityRebalance(): SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference;
    putCapacityRebalance(value: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance): void;
    resetCapacityRebalance(): void;
    get capacityRebalanceInput(): SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance;
}
export interface SpotFleetRequestTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#create SpotFleetRequest#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#delete SpotFleetRequest#delete}
    */
    readonly delete?: string;
}
export declare function spotFleetRequestTimeoutsToTerraform(struct?: SpotFleetRequestTimeoutsOutputReference | SpotFleetRequestTimeouts): any;
export declare class SpotFleetRequestTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SpotFleetRequestTimeouts | undefined;
    set internalValue(value: SpotFleetRequestTimeouts | undefined);
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
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html aws_spot_fleet_request}
*/
export declare class SpotFleetRequest extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html aws_spot_fleet_request} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SpotFleetRequestConfig
    */
    constructor(scope: Construct, id: string, config: SpotFleetRequestConfig);
    private _allocationStrategy?;
    get allocationStrategy(): string;
    set allocationStrategy(value: string);
    resetAllocationStrategy(): void;
    get allocationStrategyInput(): string;
    get clientToken(): string;
    private _excessCapacityTerminationPolicy?;
    get excessCapacityTerminationPolicy(): string;
    set excessCapacityTerminationPolicy(value: string);
    resetExcessCapacityTerminationPolicy(): void;
    get excessCapacityTerminationPolicyInput(): string;
    private _fleetType?;
    get fleetType(): string;
    set fleetType(value: string);
    resetFleetType(): void;
    get fleetTypeInput(): string;
    private _iamFleetRole?;
    get iamFleetRole(): string;
    set iamFleetRole(value: string);
    get iamFleetRoleInput(): string;
    get id(): string;
    private _instanceInterruptionBehaviour?;
    get instanceInterruptionBehaviour(): string;
    set instanceInterruptionBehaviour(value: string);
    resetInstanceInterruptionBehaviour(): void;
    get instanceInterruptionBehaviourInput(): string;
    private _instancePoolsToUseCount?;
    get instancePoolsToUseCount(): number;
    set instancePoolsToUseCount(value: number);
    resetInstancePoolsToUseCount(): void;
    get instancePoolsToUseCountInput(): number;
    private _loadBalancers?;
    get loadBalancers(): string[];
    set loadBalancers(value: string[]);
    resetLoadBalancers(): void;
    get loadBalancersInput(): string[];
    private _onDemandAllocationStrategy?;
    get onDemandAllocationStrategy(): string;
    set onDemandAllocationStrategy(value: string);
    resetOnDemandAllocationStrategy(): void;
    get onDemandAllocationStrategyInput(): string;
    private _onDemandMaxTotalPrice?;
    get onDemandMaxTotalPrice(): string;
    set onDemandMaxTotalPrice(value: string);
    resetOnDemandMaxTotalPrice(): void;
    get onDemandMaxTotalPriceInput(): string;
    private _onDemandTargetCapacity?;
    get onDemandTargetCapacity(): number;
    set onDemandTargetCapacity(value: number);
    resetOnDemandTargetCapacity(): void;
    get onDemandTargetCapacityInput(): number;
    private _replaceUnhealthyInstances?;
    get replaceUnhealthyInstances(): boolean | cdktf.IResolvable;
    set replaceUnhealthyInstances(value: boolean | cdktf.IResolvable);
    resetReplaceUnhealthyInstances(): void;
    get replaceUnhealthyInstancesInput(): boolean | cdktf.IResolvable;
    private _spotPrice?;
    get spotPrice(): string;
    set spotPrice(value: string);
    resetSpotPrice(): void;
    get spotPriceInput(): string;
    get spotRequestState(): string;
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
    private _targetCapacity?;
    get targetCapacity(): number;
    set targetCapacity(value: number);
    get targetCapacityInput(): number;
    private _targetGroupArns?;
    get targetGroupArns(): string[];
    set targetGroupArns(value: string[]);
    resetTargetGroupArns(): void;
    get targetGroupArnsInput(): string[];
    private _terminateInstancesWithExpiration?;
    get terminateInstancesWithExpiration(): boolean | cdktf.IResolvable;
    set terminateInstancesWithExpiration(value: boolean | cdktf.IResolvable);
    resetTerminateInstancesWithExpiration(): void;
    get terminateInstancesWithExpirationInput(): boolean | cdktf.IResolvable;
    private _validFrom?;
    get validFrom(): string;
    set validFrom(value: string);
    resetValidFrom(): void;
    get validFromInput(): string;
    private _validUntil?;
    get validUntil(): string;
    set validUntil(value: string);
    resetValidUntil(): void;
    get validUntilInput(): string;
    private _waitForFulfillment?;
    get waitForFulfillment(): boolean | cdktf.IResolvable;
    set waitForFulfillment(value: boolean | cdktf.IResolvable);
    resetWaitForFulfillment(): void;
    get waitForFulfillmentInput(): boolean | cdktf.IResolvable;
    private _launchSpecification?;
    get launchSpecification(): SpotFleetRequestLaunchSpecification[];
    set launchSpecification(value: SpotFleetRequestLaunchSpecification[]);
    resetLaunchSpecification(): void;
    get launchSpecificationInput(): SpotFleetRequestLaunchSpecification[];
    private _launchTemplateConfig?;
    get launchTemplateConfig(): SpotFleetRequestLaunchTemplateConfig[];
    set launchTemplateConfig(value: SpotFleetRequestLaunchTemplateConfig[]);
    resetLaunchTemplateConfig(): void;
    get launchTemplateConfigInput(): SpotFleetRequestLaunchTemplateConfig[];
    private _spotMaintenanceStrategies;
    get spotMaintenanceStrategies(): SpotFleetRequestSpotMaintenanceStrategiesOutputReference;
    putSpotMaintenanceStrategies(value: SpotFleetRequestSpotMaintenanceStrategies): void;
    resetSpotMaintenanceStrategies(): void;
    get spotMaintenanceStrategiesInput(): SpotFleetRequestSpotMaintenanceStrategies;
    private _timeouts;
    get timeouts(): SpotFleetRequestTimeoutsOutputReference;
    putTimeouts(value: SpotFleetRequestTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): SpotFleetRequestTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=spot-fleet-request.d.ts.map