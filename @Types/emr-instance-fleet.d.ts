import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic MapReduce
*/
export interface EmrInstanceFleetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#cluster_id EmrInstanceFleet#cluster_id}
    */
    readonly clusterId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#name EmrInstanceFleet#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#target_on_demand_capacity EmrInstanceFleet#target_on_demand_capacity}
    */
    readonly targetOnDemandCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#target_spot_capacity EmrInstanceFleet#target_spot_capacity}
    */
    readonly targetSpotCapacity?: number;
    /**
    * instance_type_configs block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#instance_type_configs EmrInstanceFleet#instance_type_configs}
    */
    readonly instanceTypeConfigs?: EmrInstanceFleetInstanceTypeConfigs[];
    /**
    * launch_specifications block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#launch_specifications EmrInstanceFleet#launch_specifications}
    */
    readonly launchSpecifications?: EmrInstanceFleetLaunchSpecifications;
}
export interface EmrInstanceFleetInstanceTypeConfigsConfigurations {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#classification EmrInstanceFleet#classification}
    */
    readonly classification?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#properties EmrInstanceFleet#properties}
    */
    readonly properties?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare function emrInstanceFleetInstanceTypeConfigsConfigurationsToTerraform(struct?: EmrInstanceFleetInstanceTypeConfigsConfigurations): any;
export interface EmrInstanceFleetInstanceTypeConfigsEbsConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#iops EmrInstanceFleet#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#size EmrInstanceFleet#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#type EmrInstanceFleet#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#volumes_per_instance EmrInstanceFleet#volumes_per_instance}
    */
    readonly volumesPerInstance?: number;
}
export declare function emrInstanceFleetInstanceTypeConfigsEbsConfigToTerraform(struct?: EmrInstanceFleetInstanceTypeConfigsEbsConfig): any;
export interface EmrInstanceFleetInstanceTypeConfigs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#bid_price EmrInstanceFleet#bid_price}
    */
    readonly bidPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#bid_price_as_percentage_of_on_demand_price EmrInstanceFleet#bid_price_as_percentage_of_on_demand_price}
    */
    readonly bidPriceAsPercentageOfOnDemandPrice?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#instance_type EmrInstanceFleet#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#weighted_capacity EmrInstanceFleet#weighted_capacity}
    */
    readonly weightedCapacity?: number;
    /**
    * configurations block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#configurations EmrInstanceFleet#configurations}
    */
    readonly configurations?: EmrInstanceFleetInstanceTypeConfigsConfigurations[];
    /**
    * ebs_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#ebs_config EmrInstanceFleet#ebs_config}
    */
    readonly ebsConfig?: EmrInstanceFleetInstanceTypeConfigsEbsConfig[];
}
export declare function emrInstanceFleetInstanceTypeConfigsToTerraform(struct?: EmrInstanceFleetInstanceTypeConfigs): any;
export interface EmrInstanceFleetLaunchSpecificationsOnDemandSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#allocation_strategy EmrInstanceFleet#allocation_strategy}
    */
    readonly allocationStrategy: string;
}
export declare function emrInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform(struct?: EmrInstanceFleetLaunchSpecificationsOnDemandSpecification): any;
export interface EmrInstanceFleetLaunchSpecificationsSpotSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#allocation_strategy EmrInstanceFleet#allocation_strategy}
    */
    readonly allocationStrategy: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#block_duration_minutes EmrInstanceFleet#block_duration_minutes}
    */
    readonly blockDurationMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#timeout_action EmrInstanceFleet#timeout_action}
    */
    readonly timeoutAction: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#timeout_duration_minutes EmrInstanceFleet#timeout_duration_minutes}
    */
    readonly timeoutDurationMinutes: number;
}
export declare function emrInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform(struct?: EmrInstanceFleetLaunchSpecificationsSpotSpecification): any;
export interface EmrInstanceFleetLaunchSpecifications {
    /**
    * on_demand_specification block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#on_demand_specification EmrInstanceFleet#on_demand_specification}
    */
    readonly onDemandSpecification?: EmrInstanceFleetLaunchSpecificationsOnDemandSpecification[];
    /**
    * spot_specification block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#spot_specification EmrInstanceFleet#spot_specification}
    */
    readonly spotSpecification?: EmrInstanceFleetLaunchSpecificationsSpotSpecification[];
}
export declare function emrInstanceFleetLaunchSpecificationsToTerraform(struct?: EmrInstanceFleetLaunchSpecificationsOutputReference | EmrInstanceFleetLaunchSpecifications): any;
export declare class EmrInstanceFleetLaunchSpecificationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EmrInstanceFleetLaunchSpecifications | undefined;
    set internalValue(value: EmrInstanceFleetLaunchSpecifications | undefined);
    private _onDemandSpecification?;
    get onDemandSpecification(): EmrInstanceFleetLaunchSpecificationsOnDemandSpecification[];
    set onDemandSpecification(value: EmrInstanceFleetLaunchSpecificationsOnDemandSpecification[]);
    resetOnDemandSpecification(): void;
    get onDemandSpecificationInput(): EmrInstanceFleetLaunchSpecificationsOnDemandSpecification[];
    private _spotSpecification?;
    get spotSpecification(): EmrInstanceFleetLaunchSpecificationsSpotSpecification[];
    set spotSpecification(value: EmrInstanceFleetLaunchSpecificationsSpotSpecification[]);
    resetSpotSpecification(): void;
    get spotSpecificationInput(): EmrInstanceFleetLaunchSpecificationsSpotSpecification[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html aws_emr_instance_fleet}
*/
export declare class EmrInstanceFleet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html aws_emr_instance_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmrInstanceFleetConfig
    */
    constructor(scope: Construct, id: string, config: EmrInstanceFleetConfig);
    private _clusterId?;
    get clusterId(): string;
    set clusterId(value: string);
    get clusterIdInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    get provisionedOnDemandCapacity(): number;
    get provisionedSpotCapacity(): number;
    private _targetOnDemandCapacity?;
    get targetOnDemandCapacity(): number;
    set targetOnDemandCapacity(value: number);
    resetTargetOnDemandCapacity(): void;
    get targetOnDemandCapacityInput(): number;
    private _targetSpotCapacity?;
    get targetSpotCapacity(): number;
    set targetSpotCapacity(value: number);
    resetTargetSpotCapacity(): void;
    get targetSpotCapacityInput(): number;
    private _instanceTypeConfigs?;
    get instanceTypeConfigs(): EmrInstanceFleetInstanceTypeConfigs[];
    set instanceTypeConfigs(value: EmrInstanceFleetInstanceTypeConfigs[]);
    resetInstanceTypeConfigs(): void;
    get instanceTypeConfigsInput(): EmrInstanceFleetInstanceTypeConfigs[];
    private _launchSpecifications;
    get launchSpecifications(): EmrInstanceFleetLaunchSpecificationsOutputReference;
    putLaunchSpecifications(value: EmrInstanceFleetLaunchSpecifications): void;
    resetLaunchSpecifications(): void;
    get launchSpecificationsInput(): EmrInstanceFleetLaunchSpecifications;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=emr-instance-fleet.d.ts.map