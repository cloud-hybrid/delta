import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic MapReduce
*/
export interface EmrClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#additional_info EmrCluster#additional_info}
    */
    readonly additionalInfo?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#applications EmrCluster#applications}
    */
    readonly applications?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#autoscaling_role EmrCluster#autoscaling_role}
    */
    readonly autoscalingRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#configurations EmrCluster#configurations}
    */
    readonly configurations?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#configurations_json EmrCluster#configurations_json}
    */
    readonly configurationsJson?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#custom_ami_id EmrCluster#custom_ami_id}
    */
    readonly customAmiId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#ebs_root_volume_size EmrCluster#ebs_root_volume_size}
    */
    readonly ebsRootVolumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#keep_job_flow_alive_when_no_steps EmrCluster#keep_job_flow_alive_when_no_steps}
    */
    readonly keepJobFlowAliveWhenNoSteps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#log_encryption_kms_key_id EmrCluster#log_encryption_kms_key_id}
    */
    readonly logEncryptionKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#log_uri EmrCluster#log_uri}
    */
    readonly logUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#name EmrCluster#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#release_label EmrCluster#release_label}
    */
    readonly releaseLabel: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#scale_down_behavior EmrCluster#scale_down_behavior}
    */
    readonly scaleDownBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#security_configuration EmrCluster#security_configuration}
    */
    readonly securityConfiguration?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#service_role EmrCluster#service_role}
    */
    readonly serviceRole: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#step EmrCluster#step}
    */
    readonly step?: EmrClusterStep[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#step_concurrency_level EmrCluster#step_concurrency_level}
    */
    readonly stepConcurrencyLevel?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#tags EmrCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#tags_all EmrCluster#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#termination_protection EmrCluster#termination_protection}
    */
    readonly terminationProtection?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#visible_to_all_users EmrCluster#visible_to_all_users}
    */
    readonly visibleToAllUsers?: boolean | cdktf.IResolvable;
    /**
    * auto_termination_policy block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#auto_termination_policy EmrCluster#auto_termination_policy}
    */
    readonly autoTerminationPolicy?: EmrClusterAutoTerminationPolicy;
    /**
    * bootstrap_action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#bootstrap_action EmrCluster#bootstrap_action}
    */
    readonly bootstrapAction?: EmrClusterBootstrapAction[];
    /**
    * core_instance_fleet block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#core_instance_fleet EmrCluster#core_instance_fleet}
    */
    readonly coreInstanceFleet?: EmrClusterCoreInstanceFleet;
    /**
    * core_instance_group block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#core_instance_group EmrCluster#core_instance_group}
    */
    readonly coreInstanceGroup?: EmrClusterCoreInstanceGroup;
    /**
    * ec2_attributes block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#ec2_attributes EmrCluster#ec2_attributes}
    */
    readonly ec2Attributes?: EmrClusterEc2Attributes;
    /**
    * kerberos_attributes block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#kerberos_attributes EmrCluster#kerberos_attributes}
    */
    readonly kerberosAttributes?: EmrClusterKerberosAttributes;
    /**
    * master_instance_fleet block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#master_instance_fleet EmrCluster#master_instance_fleet}
    */
    readonly masterInstanceFleet?: EmrClusterMasterInstanceFleet;
    /**
    * master_instance_group block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#master_instance_group EmrCluster#master_instance_group}
    */
    readonly masterInstanceGroup?: EmrClusterMasterInstanceGroup;
}
export interface EmrClusterStepHadoopJarStep {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#args EmrCluster#args}
    */
    readonly args?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#jar EmrCluster#jar}
    */
    readonly jar?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#main_class EmrCluster#main_class}
    */
    readonly mainClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#properties EmrCluster#properties}
    */
    readonly properties?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare function emrClusterStepHadoopJarStepToTerraform(struct?: EmrClusterStepHadoopJarStep): any;
export interface EmrClusterStep {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#action_on_failure EmrCluster#action_on_failure}
    */
    readonly actionOnFailure?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#hadoop_jar_step EmrCluster#hadoop_jar_step}
    */
    readonly hadoopJarStep?: EmrClusterStepHadoopJarStep[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#name EmrCluster#name}
    */
    readonly name?: string;
}
export declare function emrClusterStepToTerraform(struct?: EmrClusterStep): any;
export interface EmrClusterAutoTerminationPolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#idle_timeout EmrCluster#idle_timeout}
    */
    readonly idleTimeout?: number;
}
export declare function emrClusterAutoTerminationPolicyToTerraform(struct?: EmrClusterAutoTerminationPolicyOutputReference | EmrClusterAutoTerminationPolicy): any;
export declare class EmrClusterAutoTerminationPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EmrClusterAutoTerminationPolicy | undefined;
    set internalValue(value: EmrClusterAutoTerminationPolicy | undefined);
    private _idleTimeout?;
    get idleTimeout(): number;
    set idleTimeout(value: number);
    resetIdleTimeout(): void;
    get idleTimeoutInput(): number;
}
export interface EmrClusterBootstrapAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#args EmrCluster#args}
    */
    readonly args?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#name EmrCluster#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#path EmrCluster#path}
    */
    readonly path: string;
}
export declare function emrClusterBootstrapActionToTerraform(struct?: EmrClusterBootstrapAction): any;
export interface EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#classification EmrCluster#classification}
    */
    readonly classification?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#properties EmrCluster#properties}
    */
    readonly properties?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare function emrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsToTerraform(struct?: EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations): any;
export interface EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#iops EmrCluster#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#size EmrCluster#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#type EmrCluster#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#volumes_per_instance EmrCluster#volumes_per_instance}
    */
    readonly volumesPerInstance?: number;
}
export declare function emrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigToTerraform(struct?: EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig): any;
export interface EmrClusterCoreInstanceFleetInstanceTypeConfigs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#bid_price EmrCluster#bid_price}
    */
    readonly bidPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#bid_price_as_percentage_of_on_demand_price EmrCluster#bid_price_as_percentage_of_on_demand_price}
    */
    readonly bidPriceAsPercentageOfOnDemandPrice?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#instance_type EmrCluster#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#weighted_capacity EmrCluster#weighted_capacity}
    */
    readonly weightedCapacity?: number;
    /**
    * configurations block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#configurations EmrCluster#configurations}
    */
    readonly configurations?: EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations[];
    /**
    * ebs_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#ebs_config EmrCluster#ebs_config}
    */
    readonly ebsConfig?: EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig[];
}
export declare function emrClusterCoreInstanceFleetInstanceTypeConfigsToTerraform(struct?: EmrClusterCoreInstanceFleetInstanceTypeConfigs): any;
export interface EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#allocation_strategy EmrCluster#allocation_strategy}
    */
    readonly allocationStrategy: string;
}
export declare function emrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform(struct?: EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification): any;
export interface EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#allocation_strategy EmrCluster#allocation_strategy}
    */
    readonly allocationStrategy: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#block_duration_minutes EmrCluster#block_duration_minutes}
    */
    readonly blockDurationMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#timeout_action EmrCluster#timeout_action}
    */
    readonly timeoutAction: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#timeout_duration_minutes EmrCluster#timeout_duration_minutes}
    */
    readonly timeoutDurationMinutes: number;
}
export declare function emrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform(struct?: EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification): any;
export interface EmrClusterCoreInstanceFleetLaunchSpecifications {
    /**
    * on_demand_specification block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#on_demand_specification EmrCluster#on_demand_specification}
    */
    readonly onDemandSpecification?: EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification[];
    /**
    * spot_specification block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#spot_specification EmrCluster#spot_specification}
    */
    readonly spotSpecification?: EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification[];
}
export declare function emrClusterCoreInstanceFleetLaunchSpecificationsToTerraform(struct?: EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference | EmrClusterCoreInstanceFleetLaunchSpecifications): any;
export declare class EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EmrClusterCoreInstanceFleetLaunchSpecifications | undefined;
    set internalValue(value: EmrClusterCoreInstanceFleetLaunchSpecifications | undefined);
    private _onDemandSpecification?;
    get onDemandSpecification(): EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification[];
    set onDemandSpecification(value: EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification[]);
    resetOnDemandSpecification(): void;
    get onDemandSpecificationInput(): EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification[];
    private _spotSpecification?;
    get spotSpecification(): EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification[];
    set spotSpecification(value: EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification[]);
    resetSpotSpecification(): void;
    get spotSpecificationInput(): EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification[];
}
export interface EmrClusterCoreInstanceFleet {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#name EmrCluster#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#target_on_demand_capacity EmrCluster#target_on_demand_capacity}
    */
    readonly targetOnDemandCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#target_spot_capacity EmrCluster#target_spot_capacity}
    */
    readonly targetSpotCapacity?: number;
    /**
    * instance_type_configs block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#instance_type_configs EmrCluster#instance_type_configs}
    */
    readonly instanceTypeConfigs?: EmrClusterCoreInstanceFleetInstanceTypeConfigs[];
    /**
    * launch_specifications block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#launch_specifications EmrCluster#launch_specifications}
    */
    readonly launchSpecifications?: EmrClusterCoreInstanceFleetLaunchSpecifications;
}
export declare function emrClusterCoreInstanceFleetToTerraform(struct?: EmrClusterCoreInstanceFleetOutputReference | EmrClusterCoreInstanceFleet): any;
export declare class EmrClusterCoreInstanceFleetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EmrClusterCoreInstanceFleet | undefined;
    set internalValue(value: EmrClusterCoreInstanceFleet | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
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
    get instanceTypeConfigs(): EmrClusterCoreInstanceFleetInstanceTypeConfigs[];
    set instanceTypeConfigs(value: EmrClusterCoreInstanceFleetInstanceTypeConfigs[]);
    resetInstanceTypeConfigs(): void;
    get instanceTypeConfigsInput(): EmrClusterCoreInstanceFleetInstanceTypeConfigs[];
    private _launchSpecifications;
    get launchSpecifications(): EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference;
    putLaunchSpecifications(value: EmrClusterCoreInstanceFleetLaunchSpecifications): void;
    resetLaunchSpecifications(): void;
    get launchSpecificationsInput(): EmrClusterCoreInstanceFleetLaunchSpecifications;
}
export interface EmrClusterCoreInstanceGroupEbsConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#iops EmrCluster#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#size EmrCluster#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#type EmrCluster#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#volumes_per_instance EmrCluster#volumes_per_instance}
    */
    readonly volumesPerInstance?: number;
}
export declare function emrClusterCoreInstanceGroupEbsConfigToTerraform(struct?: EmrClusterCoreInstanceGroupEbsConfig): any;
export interface EmrClusterCoreInstanceGroup {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#autoscaling_policy EmrCluster#autoscaling_policy}
    */
    readonly autoscalingPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#bid_price EmrCluster#bid_price}
    */
    readonly bidPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#instance_count EmrCluster#instance_count}
    */
    readonly instanceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#instance_type EmrCluster#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#name EmrCluster#name}
    */
    readonly name?: string;
    /**
    * ebs_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#ebs_config EmrCluster#ebs_config}
    */
    readonly ebsConfig?: EmrClusterCoreInstanceGroupEbsConfig[];
}
export declare function emrClusterCoreInstanceGroupToTerraform(struct?: EmrClusterCoreInstanceGroupOutputReference | EmrClusterCoreInstanceGroup): any;
export declare class EmrClusterCoreInstanceGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EmrClusterCoreInstanceGroup | undefined;
    set internalValue(value: EmrClusterCoreInstanceGroup | undefined);
    private _autoscalingPolicy?;
    get autoscalingPolicy(): string;
    set autoscalingPolicy(value: string);
    resetAutoscalingPolicy(): void;
    get autoscalingPolicyInput(): string;
    private _bidPrice?;
    get bidPrice(): string;
    set bidPrice(value: string);
    resetBidPrice(): void;
    get bidPriceInput(): string;
    private _instanceCount?;
    get instanceCount(): number;
    set instanceCount(value: number);
    resetInstanceCount(): void;
    get instanceCountInput(): number;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _ebsConfig?;
    get ebsConfig(): EmrClusterCoreInstanceGroupEbsConfig[];
    set ebsConfig(value: EmrClusterCoreInstanceGroupEbsConfig[]);
    resetEbsConfig(): void;
    get ebsConfigInput(): EmrClusterCoreInstanceGroupEbsConfig[];
}
export interface EmrClusterEc2Attributes {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#additional_master_security_groups EmrCluster#additional_master_security_groups}
    */
    readonly additionalMasterSecurityGroups?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#additional_slave_security_groups EmrCluster#additional_slave_security_groups}
    */
    readonly additionalSlaveSecurityGroups?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#emr_managed_master_security_group EmrCluster#emr_managed_master_security_group}
    */
    readonly emrManagedMasterSecurityGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#emr_managed_slave_security_group EmrCluster#emr_managed_slave_security_group}
    */
    readonly emrManagedSlaveSecurityGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#instance_profile EmrCluster#instance_profile}
    */
    readonly instanceProfile: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#key_name EmrCluster#key_name}
    */
    readonly keyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#service_access_security_group EmrCluster#service_access_security_group}
    */
    readonly serviceAccessSecurityGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#subnet_id EmrCluster#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#subnet_ids EmrCluster#subnet_ids}
    */
    readonly subnetIds?: string[];
}
export declare function emrClusterEc2AttributesToTerraform(struct?: EmrClusterEc2AttributesOutputReference | EmrClusterEc2Attributes): any;
export declare class EmrClusterEc2AttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EmrClusterEc2Attributes | undefined;
    set internalValue(value: EmrClusterEc2Attributes | undefined);
    private _additionalMasterSecurityGroups?;
    get additionalMasterSecurityGroups(): string;
    set additionalMasterSecurityGroups(value: string);
    resetAdditionalMasterSecurityGroups(): void;
    get additionalMasterSecurityGroupsInput(): string;
    private _additionalSlaveSecurityGroups?;
    get additionalSlaveSecurityGroups(): string;
    set additionalSlaveSecurityGroups(value: string);
    resetAdditionalSlaveSecurityGroups(): void;
    get additionalSlaveSecurityGroupsInput(): string;
    private _emrManagedMasterSecurityGroup?;
    get emrManagedMasterSecurityGroup(): string;
    set emrManagedMasterSecurityGroup(value: string);
    resetEmrManagedMasterSecurityGroup(): void;
    get emrManagedMasterSecurityGroupInput(): string;
    private _emrManagedSlaveSecurityGroup?;
    get emrManagedSlaveSecurityGroup(): string;
    set emrManagedSlaveSecurityGroup(value: string);
    resetEmrManagedSlaveSecurityGroup(): void;
    get emrManagedSlaveSecurityGroupInput(): string;
    private _instanceProfile?;
    get instanceProfile(): string;
    set instanceProfile(value: string);
    get instanceProfileInput(): string;
    private _keyName?;
    get keyName(): string;
    set keyName(value: string);
    resetKeyName(): void;
    get keyNameInput(): string;
    private _serviceAccessSecurityGroup?;
    get serviceAccessSecurityGroup(): string;
    set serviceAccessSecurityGroup(value: string);
    resetServiceAccessSecurityGroup(): void;
    get serviceAccessSecurityGroupInput(): string;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    resetSubnetIds(): void;
    get subnetIdsInput(): string[];
}
export interface EmrClusterKerberosAttributes {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#ad_domain_join_password EmrCluster#ad_domain_join_password}
    */
    readonly adDomainJoinPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#ad_domain_join_user EmrCluster#ad_domain_join_user}
    */
    readonly adDomainJoinUser?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#cross_realm_trust_principal_password EmrCluster#cross_realm_trust_principal_password}
    */
    readonly crossRealmTrustPrincipalPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#kdc_admin_password EmrCluster#kdc_admin_password}
    */
    readonly kdcAdminPassword: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#realm EmrCluster#realm}
    */
    readonly realm: string;
}
export declare function emrClusterKerberosAttributesToTerraform(struct?: EmrClusterKerberosAttributesOutputReference | EmrClusterKerberosAttributes): any;
export declare class EmrClusterKerberosAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EmrClusterKerberosAttributes | undefined;
    set internalValue(value: EmrClusterKerberosAttributes | undefined);
    private _adDomainJoinPassword?;
    get adDomainJoinPassword(): string;
    set adDomainJoinPassword(value: string);
    resetAdDomainJoinPassword(): void;
    get adDomainJoinPasswordInput(): string;
    private _adDomainJoinUser?;
    get adDomainJoinUser(): string;
    set adDomainJoinUser(value: string);
    resetAdDomainJoinUser(): void;
    get adDomainJoinUserInput(): string;
    private _crossRealmTrustPrincipalPassword?;
    get crossRealmTrustPrincipalPassword(): string;
    set crossRealmTrustPrincipalPassword(value: string);
    resetCrossRealmTrustPrincipalPassword(): void;
    get crossRealmTrustPrincipalPasswordInput(): string;
    private _kdcAdminPassword?;
    get kdcAdminPassword(): string;
    set kdcAdminPassword(value: string);
    get kdcAdminPasswordInput(): string;
    private _realm?;
    get realm(): string;
    set realm(value: string);
    get realmInput(): string;
}
export interface EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#classification EmrCluster#classification}
    */
    readonly classification?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#properties EmrCluster#properties}
    */
    readonly properties?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare function emrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsToTerraform(struct?: EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations): any;
export interface EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#iops EmrCluster#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#size EmrCluster#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#type EmrCluster#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#volumes_per_instance EmrCluster#volumes_per_instance}
    */
    readonly volumesPerInstance?: number;
}
export declare function emrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigToTerraform(struct?: EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig): any;
export interface EmrClusterMasterInstanceFleetInstanceTypeConfigs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#bid_price EmrCluster#bid_price}
    */
    readonly bidPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#bid_price_as_percentage_of_on_demand_price EmrCluster#bid_price_as_percentage_of_on_demand_price}
    */
    readonly bidPriceAsPercentageOfOnDemandPrice?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#instance_type EmrCluster#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#weighted_capacity EmrCluster#weighted_capacity}
    */
    readonly weightedCapacity?: number;
    /**
    * configurations block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#configurations EmrCluster#configurations}
    */
    readonly configurations?: EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations[];
    /**
    * ebs_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#ebs_config EmrCluster#ebs_config}
    */
    readonly ebsConfig?: EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig[];
}
export declare function emrClusterMasterInstanceFleetInstanceTypeConfigsToTerraform(struct?: EmrClusterMasterInstanceFleetInstanceTypeConfigs): any;
export interface EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#allocation_strategy EmrCluster#allocation_strategy}
    */
    readonly allocationStrategy: string;
}
export declare function emrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform(struct?: EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification): any;
export interface EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#allocation_strategy EmrCluster#allocation_strategy}
    */
    readonly allocationStrategy: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#block_duration_minutes EmrCluster#block_duration_minutes}
    */
    readonly blockDurationMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#timeout_action EmrCluster#timeout_action}
    */
    readonly timeoutAction: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#timeout_duration_minutes EmrCluster#timeout_duration_minutes}
    */
    readonly timeoutDurationMinutes: number;
}
export declare function emrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform(struct?: EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification): any;
export interface EmrClusterMasterInstanceFleetLaunchSpecifications {
    /**
    * on_demand_specification block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#on_demand_specification EmrCluster#on_demand_specification}
    */
    readonly onDemandSpecification?: EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification[];
    /**
    * spot_specification block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#spot_specification EmrCluster#spot_specification}
    */
    readonly spotSpecification?: EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification[];
}
export declare function emrClusterMasterInstanceFleetLaunchSpecificationsToTerraform(struct?: EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference | EmrClusterMasterInstanceFleetLaunchSpecifications): any;
export declare class EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EmrClusterMasterInstanceFleetLaunchSpecifications | undefined;
    set internalValue(value: EmrClusterMasterInstanceFleetLaunchSpecifications | undefined);
    private _onDemandSpecification?;
    get onDemandSpecification(): EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification[];
    set onDemandSpecification(value: EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification[]);
    resetOnDemandSpecification(): void;
    get onDemandSpecificationInput(): EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification[];
    private _spotSpecification?;
    get spotSpecification(): EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification[];
    set spotSpecification(value: EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification[]);
    resetSpotSpecification(): void;
    get spotSpecificationInput(): EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification[];
}
export interface EmrClusterMasterInstanceFleet {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#name EmrCluster#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#target_on_demand_capacity EmrCluster#target_on_demand_capacity}
    */
    readonly targetOnDemandCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#target_spot_capacity EmrCluster#target_spot_capacity}
    */
    readonly targetSpotCapacity?: number;
    /**
    * instance_type_configs block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#instance_type_configs EmrCluster#instance_type_configs}
    */
    readonly instanceTypeConfigs?: EmrClusterMasterInstanceFleetInstanceTypeConfigs[];
    /**
    * launch_specifications block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#launch_specifications EmrCluster#launch_specifications}
    */
    readonly launchSpecifications?: EmrClusterMasterInstanceFleetLaunchSpecifications;
}
export declare function emrClusterMasterInstanceFleetToTerraform(struct?: EmrClusterMasterInstanceFleetOutputReference | EmrClusterMasterInstanceFleet): any;
export declare class EmrClusterMasterInstanceFleetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EmrClusterMasterInstanceFleet | undefined;
    set internalValue(value: EmrClusterMasterInstanceFleet | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
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
    get instanceTypeConfigs(): EmrClusterMasterInstanceFleetInstanceTypeConfigs[];
    set instanceTypeConfigs(value: EmrClusterMasterInstanceFleetInstanceTypeConfigs[]);
    resetInstanceTypeConfigs(): void;
    get instanceTypeConfigsInput(): EmrClusterMasterInstanceFleetInstanceTypeConfigs[];
    private _launchSpecifications;
    get launchSpecifications(): EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference;
    putLaunchSpecifications(value: EmrClusterMasterInstanceFleetLaunchSpecifications): void;
    resetLaunchSpecifications(): void;
    get launchSpecificationsInput(): EmrClusterMasterInstanceFleetLaunchSpecifications;
}
export interface EmrClusterMasterInstanceGroupEbsConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#iops EmrCluster#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#size EmrCluster#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#type EmrCluster#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#volumes_per_instance EmrCluster#volumes_per_instance}
    */
    readonly volumesPerInstance?: number;
}
export declare function emrClusterMasterInstanceGroupEbsConfigToTerraform(struct?: EmrClusterMasterInstanceGroupEbsConfig): any;
export interface EmrClusterMasterInstanceGroup {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#bid_price EmrCluster#bid_price}
    */
    readonly bidPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#instance_count EmrCluster#instance_count}
    */
    readonly instanceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#instance_type EmrCluster#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#name EmrCluster#name}
    */
    readonly name?: string;
    /**
    * ebs_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#ebs_config EmrCluster#ebs_config}
    */
    readonly ebsConfig?: EmrClusterMasterInstanceGroupEbsConfig[];
}
export declare function emrClusterMasterInstanceGroupToTerraform(struct?: EmrClusterMasterInstanceGroupOutputReference | EmrClusterMasterInstanceGroup): any;
export declare class EmrClusterMasterInstanceGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EmrClusterMasterInstanceGroup | undefined;
    set internalValue(value: EmrClusterMasterInstanceGroup | undefined);
    private _bidPrice?;
    get bidPrice(): string;
    set bidPrice(value: string);
    resetBidPrice(): void;
    get bidPriceInput(): string;
    private _instanceCount?;
    get instanceCount(): number;
    set instanceCount(value: number);
    resetInstanceCount(): void;
    get instanceCountInput(): number;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _ebsConfig?;
    get ebsConfig(): EmrClusterMasterInstanceGroupEbsConfig[];
    set ebsConfig(value: EmrClusterMasterInstanceGroupEbsConfig[]);
    resetEbsConfig(): void;
    get ebsConfigInput(): EmrClusterMasterInstanceGroupEbsConfig[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html aws_emr_cluster}
*/
export declare class EmrCluster extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html aws_emr_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmrClusterConfig
    */
    constructor(scope: Construct, id: string, config: EmrClusterConfig);
    private _additionalInfo?;
    get additionalInfo(): string;
    set additionalInfo(value: string);
    resetAdditionalInfo(): void;
    get additionalInfoInput(): string;
    private _applications?;
    get applications(): string[];
    set applications(value: string[]);
    resetApplications(): void;
    get applicationsInput(): string[];
    get arn(): string;
    private _autoscalingRole?;
    get autoscalingRole(): string;
    set autoscalingRole(value: string);
    resetAutoscalingRole(): void;
    get autoscalingRoleInput(): string;
    get clusterState(): string;
    private _configurations?;
    get configurations(): string;
    set configurations(value: string);
    resetConfigurations(): void;
    get configurationsInput(): string;
    private _configurationsJson?;
    get configurationsJson(): string;
    set configurationsJson(value: string);
    resetConfigurationsJson(): void;
    get configurationsJsonInput(): string;
    private _customAmiId?;
    get customAmiId(): string;
    set customAmiId(value: string);
    resetCustomAmiId(): void;
    get customAmiIdInput(): string;
    private _ebsRootVolumeSize?;
    get ebsRootVolumeSize(): number;
    set ebsRootVolumeSize(value: number);
    resetEbsRootVolumeSize(): void;
    get ebsRootVolumeSizeInput(): number;
    get id(): string;
    private _keepJobFlowAliveWhenNoSteps?;
    get keepJobFlowAliveWhenNoSteps(): boolean | cdktf.IResolvable;
    set keepJobFlowAliveWhenNoSteps(value: boolean | cdktf.IResolvable);
    resetKeepJobFlowAliveWhenNoSteps(): void;
    get keepJobFlowAliveWhenNoStepsInput(): boolean | cdktf.IResolvable;
    private _logEncryptionKmsKeyId?;
    get logEncryptionKmsKeyId(): string;
    set logEncryptionKmsKeyId(value: string);
    resetLogEncryptionKmsKeyId(): void;
    get logEncryptionKmsKeyIdInput(): string;
    private _logUri?;
    get logUri(): string;
    set logUri(value: string);
    resetLogUri(): void;
    get logUriInput(): string;
    get masterPublicDns(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _releaseLabel?;
    get releaseLabel(): string;
    set releaseLabel(value: string);
    get releaseLabelInput(): string;
    private _scaleDownBehavior?;
    get scaleDownBehavior(): string;
    set scaleDownBehavior(value: string);
    resetScaleDownBehavior(): void;
    get scaleDownBehaviorInput(): string;
    private _securityConfiguration?;
    get securityConfiguration(): string;
    set securityConfiguration(value: string);
    resetSecurityConfiguration(): void;
    get securityConfigurationInput(): string;
    private _serviceRole?;
    get serviceRole(): string;
    set serviceRole(value: string);
    get serviceRoleInput(): string;
    private _step?;
    get step(): EmrClusterStep[];
    set step(value: EmrClusterStep[]);
    resetStep(): void;
    get stepInput(): EmrClusterStep[];
    private _stepConcurrencyLevel?;
    get stepConcurrencyLevel(): number;
    set stepConcurrencyLevel(value: number);
    resetStepConcurrencyLevel(): void;
    get stepConcurrencyLevelInput(): number;
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
    private _terminationProtection?;
    get terminationProtection(): boolean | cdktf.IResolvable;
    set terminationProtection(value: boolean | cdktf.IResolvable);
    resetTerminationProtection(): void;
    get terminationProtectionInput(): boolean | cdktf.IResolvable;
    private _visibleToAllUsers?;
    get visibleToAllUsers(): boolean | cdktf.IResolvable;
    set visibleToAllUsers(value: boolean | cdktf.IResolvable);
    resetVisibleToAllUsers(): void;
    get visibleToAllUsersInput(): boolean | cdktf.IResolvable;
    private _autoTerminationPolicy;
    get autoTerminationPolicy(): EmrClusterAutoTerminationPolicyOutputReference;
    putAutoTerminationPolicy(value: EmrClusterAutoTerminationPolicy): void;
    resetAutoTerminationPolicy(): void;
    get autoTerminationPolicyInput(): EmrClusterAutoTerminationPolicy;
    private _bootstrapAction?;
    get bootstrapAction(): EmrClusterBootstrapAction[];
    set bootstrapAction(value: EmrClusterBootstrapAction[]);
    resetBootstrapAction(): void;
    get bootstrapActionInput(): EmrClusterBootstrapAction[];
    private _coreInstanceFleet;
    get coreInstanceFleet(): EmrClusterCoreInstanceFleetOutputReference;
    putCoreInstanceFleet(value: EmrClusterCoreInstanceFleet): void;
    resetCoreInstanceFleet(): void;
    get coreInstanceFleetInput(): EmrClusterCoreInstanceFleet;
    private _coreInstanceGroup;
    get coreInstanceGroup(): EmrClusterCoreInstanceGroupOutputReference;
    putCoreInstanceGroup(value: EmrClusterCoreInstanceGroup): void;
    resetCoreInstanceGroup(): void;
    get coreInstanceGroupInput(): EmrClusterCoreInstanceGroup;
    private _ec2Attributes;
    get ec2Attributes(): EmrClusterEc2AttributesOutputReference;
    putEc2Attributes(value: EmrClusterEc2Attributes): void;
    resetEc2Attributes(): void;
    get ec2AttributesInput(): EmrClusterEc2Attributes;
    private _kerberosAttributes;
    get kerberosAttributes(): EmrClusterKerberosAttributesOutputReference;
    putKerberosAttributes(value: EmrClusterKerberosAttributes): void;
    resetKerberosAttributes(): void;
    get kerberosAttributesInput(): EmrClusterKerberosAttributes;
    private _masterInstanceFleet;
    get masterInstanceFleet(): EmrClusterMasterInstanceFleetOutputReference;
    putMasterInstanceFleet(value: EmrClusterMasterInstanceFleet): void;
    resetMasterInstanceFleet(): void;
    get masterInstanceFleetInput(): EmrClusterMasterInstanceFleet;
    private _masterInstanceGroup;
    get masterInstanceGroup(): EmrClusterMasterInstanceGroupOutputReference;
    putMasterInstanceGroup(value: EmrClusterMasterInstanceGroup): void;
    resetMasterInstanceGroup(): void;
    get masterInstanceGroupInput(): EmrClusterMasterInstanceGroup;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=emr-cluster.d.ts.map