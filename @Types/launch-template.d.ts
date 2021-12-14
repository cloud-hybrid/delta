import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface LaunchTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#default_version LaunchTemplate#default_version}
    */
    readonly defaultVersion?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#description LaunchTemplate#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#disable_api_termination LaunchTemplate#disable_api_termination}
    */
    readonly disableApiTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#ebs_optimized LaunchTemplate#ebs_optimized}
    */
    readonly ebsOptimized?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#image_id LaunchTemplate#image_id}
    */
    readonly imageId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#instance_initiated_shutdown_behavior LaunchTemplate#instance_initiated_shutdown_behavior}
    */
    readonly instanceInitiatedShutdownBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#instance_type LaunchTemplate#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#kernel_id LaunchTemplate#kernel_id}
    */
    readonly kernelId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#key_name LaunchTemplate#key_name}
    */
    readonly keyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#name LaunchTemplate#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#name_prefix LaunchTemplate#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#ram_disk_id LaunchTemplate#ram_disk_id}
    */
    readonly ramDiskId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#security_group_names LaunchTemplate#security_group_names}
    */
    readonly securityGroupNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#tags LaunchTemplate#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#tags_all LaunchTemplate#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#update_default_version LaunchTemplate#update_default_version}
    */
    readonly updateDefaultVersion?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#user_data LaunchTemplate#user_data}
    */
    readonly userData?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#vpc_security_group_ids LaunchTemplate#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * block_device_mappings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#block_device_mappings LaunchTemplate#block_device_mappings}
    */
    readonly blockDeviceMappings?: LaunchTemplateBlockDeviceMappings[];
    /**
    * capacity_reservation_specification block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#capacity_reservation_specification LaunchTemplate#capacity_reservation_specification}
    */
    readonly capacityReservationSpecification?: LaunchTemplateCapacityReservationSpecification;
    /**
    * cpu_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#cpu_options LaunchTemplate#cpu_options}
    */
    readonly cpuOptions?: LaunchTemplateCpuOptions;
    /**
    * credit_specification block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#credit_specification LaunchTemplate#credit_specification}
    */
    readonly creditSpecification?: LaunchTemplateCreditSpecification;
    /**
    * elastic_gpu_specifications block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#elastic_gpu_specifications LaunchTemplate#elastic_gpu_specifications}
    */
    readonly elasticGpuSpecifications?: LaunchTemplateElasticGpuSpecifications[];
    /**
    * elastic_inference_accelerator block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#elastic_inference_accelerator LaunchTemplate#elastic_inference_accelerator}
    */
    readonly elasticInferenceAccelerator?: LaunchTemplateElasticInferenceAccelerator;
    /**
    * enclave_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#enclave_options LaunchTemplate#enclave_options}
    */
    readonly enclaveOptions?: LaunchTemplateEnclaveOptions;
    /**
    * hibernation_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#hibernation_options LaunchTemplate#hibernation_options}
    */
    readonly hibernationOptions?: LaunchTemplateHibernationOptions;
    /**
    * iam_instance_profile block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#iam_instance_profile LaunchTemplate#iam_instance_profile}
    */
    readonly iamInstanceProfile?: LaunchTemplateIamInstanceProfile;
    /**
    * instance_market_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#instance_market_options LaunchTemplate#instance_market_options}
    */
    readonly instanceMarketOptions?: LaunchTemplateInstanceMarketOptions;
    /**
    * license_specification block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#license_specification LaunchTemplate#license_specification}
    */
    readonly licenseSpecification?: LaunchTemplateLicenseSpecification[];
    /**
    * metadata_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#metadata_options LaunchTemplate#metadata_options}
    */
    readonly metadataOptions?: LaunchTemplateMetadataOptions;
    /**
    * monitoring block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#monitoring LaunchTemplate#monitoring}
    */
    readonly monitoring?: LaunchTemplateMonitoring;
    /**
    * network_interfaces block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#network_interfaces LaunchTemplate#network_interfaces}
    */
    readonly networkInterfaces?: LaunchTemplateNetworkInterfaces[];
    /**
    * placement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#placement LaunchTemplate#placement}
    */
    readonly placement?: LaunchTemplatePlacement;
    /**
    * tag_specifications block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#tag_specifications LaunchTemplate#tag_specifications}
    */
    readonly tagSpecifications?: LaunchTemplateTagSpecifications[];
}
export interface LaunchTemplateBlockDeviceMappingsEbs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#delete_on_termination LaunchTemplate#delete_on_termination}
    */
    readonly deleteOnTermination?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#encrypted LaunchTemplate#encrypted}
    */
    readonly encrypted?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#iops LaunchTemplate#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#kms_key_id LaunchTemplate#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#snapshot_id LaunchTemplate#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#throughput LaunchTemplate#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#volume_size LaunchTemplate#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#volume_type LaunchTemplate#volume_type}
    */
    readonly volumeType?: string;
}
export declare function launchTemplateBlockDeviceMappingsEbsToTerraform(struct?: LaunchTemplateBlockDeviceMappingsEbsOutputReference | LaunchTemplateBlockDeviceMappingsEbs): any;
export declare class LaunchTemplateBlockDeviceMappingsEbsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LaunchTemplateBlockDeviceMappingsEbs | undefined;
    set internalValue(value: LaunchTemplateBlockDeviceMappingsEbs | undefined);
    private _deleteOnTermination?;
    get deleteOnTermination(): string;
    set deleteOnTermination(value: string);
    resetDeleteOnTermination(): void;
    get deleteOnTerminationInput(): string;
    private _encrypted?;
    get encrypted(): string;
    set encrypted(value: string);
    resetEncrypted(): void;
    get encryptedInput(): string;
    private _iops?;
    get iops(): number;
    set iops(value: number);
    resetIops(): void;
    get iopsInput(): number;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string;
    private _snapshotId?;
    get snapshotId(): string;
    set snapshotId(value: string);
    resetSnapshotId(): void;
    get snapshotIdInput(): string;
    private _throughput?;
    get throughput(): number;
    set throughput(value: number);
    resetThroughput(): void;
    get throughputInput(): number;
    private _volumeSize?;
    get volumeSize(): number;
    set volumeSize(value: number);
    resetVolumeSize(): void;
    get volumeSizeInput(): number;
    private _volumeType?;
    get volumeType(): string;
    set volumeType(value: string);
    resetVolumeType(): void;
    get volumeTypeInput(): string;
}
export interface LaunchTemplateBlockDeviceMappings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#device_name LaunchTemplate#device_name}
    */
    readonly deviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#no_device LaunchTemplate#no_device}
    */
    readonly noDevice?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#virtual_name LaunchTemplate#virtual_name}
    */
    readonly virtualName?: string;
    /**
    * ebs block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#ebs LaunchTemplate#ebs}
    */
    readonly ebs?: LaunchTemplateBlockDeviceMappingsEbs;
}
export declare function launchTemplateBlockDeviceMappingsToTerraform(struct?: LaunchTemplateBlockDeviceMappings): any;
export interface LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#capacity_reservation_id LaunchTemplate#capacity_reservation_id}
    */
    readonly capacityReservationId?: string;
}
export declare function launchTemplateCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct?: LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference | LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget): any;
export declare class LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget | undefined;
    set internalValue(value: LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget | undefined);
    private _capacityReservationId?;
    get capacityReservationId(): string;
    set capacityReservationId(value: string);
    resetCapacityReservationId(): void;
    get capacityReservationIdInput(): string;
}
export interface LaunchTemplateCapacityReservationSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#capacity_reservation_preference LaunchTemplate#capacity_reservation_preference}
    */
    readonly capacityReservationPreference?: string;
    /**
    * capacity_reservation_target block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#capacity_reservation_target LaunchTemplate#capacity_reservation_target}
    */
    readonly capacityReservationTarget?: LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget;
}
export declare function launchTemplateCapacityReservationSpecificationToTerraform(struct?: LaunchTemplateCapacityReservationSpecificationOutputReference | LaunchTemplateCapacityReservationSpecification): any;
export declare class LaunchTemplateCapacityReservationSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LaunchTemplateCapacityReservationSpecification | undefined;
    set internalValue(value: LaunchTemplateCapacityReservationSpecification | undefined);
    private _capacityReservationPreference?;
    get capacityReservationPreference(): string;
    set capacityReservationPreference(value: string);
    resetCapacityReservationPreference(): void;
    get capacityReservationPreferenceInput(): string;
    private _capacityReservationTarget;
    get capacityReservationTarget(): LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference;
    putCapacityReservationTarget(value: LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget): void;
    resetCapacityReservationTarget(): void;
    get capacityReservationTargetInput(): LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget;
}
export interface LaunchTemplateCpuOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#core_count LaunchTemplate#core_count}
    */
    readonly coreCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#threads_per_core LaunchTemplate#threads_per_core}
    */
    readonly threadsPerCore?: number;
}
export declare function launchTemplateCpuOptionsToTerraform(struct?: LaunchTemplateCpuOptionsOutputReference | LaunchTemplateCpuOptions): any;
export declare class LaunchTemplateCpuOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LaunchTemplateCpuOptions | undefined;
    set internalValue(value: LaunchTemplateCpuOptions | undefined);
    private _coreCount?;
    get coreCount(): number;
    set coreCount(value: number);
    resetCoreCount(): void;
    get coreCountInput(): number;
    private _threadsPerCore?;
    get threadsPerCore(): number;
    set threadsPerCore(value: number);
    resetThreadsPerCore(): void;
    get threadsPerCoreInput(): number;
}
export interface LaunchTemplateCreditSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#cpu_credits LaunchTemplate#cpu_credits}
    */
    readonly cpuCredits?: string;
}
export declare function launchTemplateCreditSpecificationToTerraform(struct?: LaunchTemplateCreditSpecificationOutputReference | LaunchTemplateCreditSpecification): any;
export declare class LaunchTemplateCreditSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LaunchTemplateCreditSpecification | undefined;
    set internalValue(value: LaunchTemplateCreditSpecification | undefined);
    private _cpuCredits?;
    get cpuCredits(): string;
    set cpuCredits(value: string);
    resetCpuCredits(): void;
    get cpuCreditsInput(): string;
}
export interface LaunchTemplateElasticGpuSpecifications {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#type LaunchTemplate#type}
    */
    readonly type: string;
}
export declare function launchTemplateElasticGpuSpecificationsToTerraform(struct?: LaunchTemplateElasticGpuSpecifications): any;
export interface LaunchTemplateElasticInferenceAccelerator {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#type LaunchTemplate#type}
    */
    readonly type: string;
}
export declare function launchTemplateElasticInferenceAcceleratorToTerraform(struct?: LaunchTemplateElasticInferenceAcceleratorOutputReference | LaunchTemplateElasticInferenceAccelerator): any;
export declare class LaunchTemplateElasticInferenceAcceleratorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LaunchTemplateElasticInferenceAccelerator | undefined;
    set internalValue(value: LaunchTemplateElasticInferenceAccelerator | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
export interface LaunchTemplateEnclaveOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#enabled LaunchTemplate#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function launchTemplateEnclaveOptionsToTerraform(struct?: LaunchTemplateEnclaveOptionsOutputReference | LaunchTemplateEnclaveOptions): any;
export declare class LaunchTemplateEnclaveOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LaunchTemplateEnclaveOptions | undefined;
    set internalValue(value: LaunchTemplateEnclaveOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
}
export interface LaunchTemplateHibernationOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#configured LaunchTemplate#configured}
    */
    readonly configured: boolean | cdktf.IResolvable;
}
export declare function launchTemplateHibernationOptionsToTerraform(struct?: LaunchTemplateHibernationOptionsOutputReference | LaunchTemplateHibernationOptions): any;
export declare class LaunchTemplateHibernationOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LaunchTemplateHibernationOptions | undefined;
    set internalValue(value: LaunchTemplateHibernationOptions | undefined);
    private _configured?;
    get configured(): boolean | cdktf.IResolvable;
    set configured(value: boolean | cdktf.IResolvable);
    get configuredInput(): boolean | cdktf.IResolvable;
}
export interface LaunchTemplateIamInstanceProfile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#arn LaunchTemplate#arn}
    */
    readonly arn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#name LaunchTemplate#name}
    */
    readonly name?: string;
}
export declare function launchTemplateIamInstanceProfileToTerraform(struct?: LaunchTemplateIamInstanceProfileOutputReference | LaunchTemplateIamInstanceProfile): any;
export declare class LaunchTemplateIamInstanceProfileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LaunchTemplateIamInstanceProfile | undefined;
    set internalValue(value: LaunchTemplateIamInstanceProfile | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    resetArn(): void;
    get arnInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
}
export interface LaunchTemplateInstanceMarketOptionsSpotOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#block_duration_minutes LaunchTemplate#block_duration_minutes}
    */
    readonly blockDurationMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#instance_interruption_behavior LaunchTemplate#instance_interruption_behavior}
    */
    readonly instanceInterruptionBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#max_price LaunchTemplate#max_price}
    */
    readonly maxPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#spot_instance_type LaunchTemplate#spot_instance_type}
    */
    readonly spotInstanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#valid_until LaunchTemplate#valid_until}
    */
    readonly validUntil?: string;
}
export declare function launchTemplateInstanceMarketOptionsSpotOptionsToTerraform(struct?: LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference | LaunchTemplateInstanceMarketOptionsSpotOptions): any;
export declare class LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LaunchTemplateInstanceMarketOptionsSpotOptions | undefined;
    set internalValue(value: LaunchTemplateInstanceMarketOptionsSpotOptions | undefined);
    private _blockDurationMinutes?;
    get blockDurationMinutes(): number;
    set blockDurationMinutes(value: number);
    resetBlockDurationMinutes(): void;
    get blockDurationMinutesInput(): number;
    private _instanceInterruptionBehavior?;
    get instanceInterruptionBehavior(): string;
    set instanceInterruptionBehavior(value: string);
    resetInstanceInterruptionBehavior(): void;
    get instanceInterruptionBehaviorInput(): string;
    private _maxPrice?;
    get maxPrice(): string;
    set maxPrice(value: string);
    resetMaxPrice(): void;
    get maxPriceInput(): string;
    private _spotInstanceType?;
    get spotInstanceType(): string;
    set spotInstanceType(value: string);
    resetSpotInstanceType(): void;
    get spotInstanceTypeInput(): string;
    private _validUntil?;
    get validUntil(): string;
    set validUntil(value: string);
    resetValidUntil(): void;
    get validUntilInput(): string;
}
export interface LaunchTemplateInstanceMarketOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#market_type LaunchTemplate#market_type}
    */
    readonly marketType?: string;
    /**
    * spot_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#spot_options LaunchTemplate#spot_options}
    */
    readonly spotOptions?: LaunchTemplateInstanceMarketOptionsSpotOptions;
}
export declare function launchTemplateInstanceMarketOptionsToTerraform(struct?: LaunchTemplateInstanceMarketOptionsOutputReference | LaunchTemplateInstanceMarketOptions): any;
export declare class LaunchTemplateInstanceMarketOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LaunchTemplateInstanceMarketOptions | undefined;
    set internalValue(value: LaunchTemplateInstanceMarketOptions | undefined);
    private _marketType?;
    get marketType(): string;
    set marketType(value: string);
    resetMarketType(): void;
    get marketTypeInput(): string;
    private _spotOptions;
    get spotOptions(): LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference;
    putSpotOptions(value: LaunchTemplateInstanceMarketOptionsSpotOptions): void;
    resetSpotOptions(): void;
    get spotOptionsInput(): LaunchTemplateInstanceMarketOptionsSpotOptions;
}
export interface LaunchTemplateLicenseSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#license_configuration_arn LaunchTemplate#license_configuration_arn}
    */
    readonly licenseConfigurationArn: string;
}
export declare function launchTemplateLicenseSpecificationToTerraform(struct?: LaunchTemplateLicenseSpecification): any;
export interface LaunchTemplateMetadataOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#http_endpoint LaunchTemplate#http_endpoint}
    */
    readonly httpEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#http_protocol_ipv6 LaunchTemplate#http_protocol_ipv6}
    */
    readonly httpProtocolIpv6?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#http_put_response_hop_limit LaunchTemplate#http_put_response_hop_limit}
    */
    readonly httpPutResponseHopLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#http_tokens LaunchTemplate#http_tokens}
    */
    readonly httpTokens?: string;
}
export declare function launchTemplateMetadataOptionsToTerraform(struct?: LaunchTemplateMetadataOptionsOutputReference | LaunchTemplateMetadataOptions): any;
export declare class LaunchTemplateMetadataOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LaunchTemplateMetadataOptions | undefined;
    set internalValue(value: LaunchTemplateMetadataOptions | undefined);
    private _httpEndpoint?;
    get httpEndpoint(): string;
    set httpEndpoint(value: string);
    resetHttpEndpoint(): void;
    get httpEndpointInput(): string;
    private _httpProtocolIpv6?;
    get httpProtocolIpv6(): string;
    set httpProtocolIpv6(value: string);
    resetHttpProtocolIpv6(): void;
    get httpProtocolIpv6Input(): string;
    private _httpPutResponseHopLimit?;
    get httpPutResponseHopLimit(): number;
    set httpPutResponseHopLimit(value: number);
    resetHttpPutResponseHopLimit(): void;
    get httpPutResponseHopLimitInput(): number;
    private _httpTokens?;
    get httpTokens(): string;
    set httpTokens(value: string);
    resetHttpTokens(): void;
    get httpTokensInput(): string;
}
export interface LaunchTemplateMonitoring {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#enabled LaunchTemplate#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function launchTemplateMonitoringToTerraform(struct?: LaunchTemplateMonitoringOutputReference | LaunchTemplateMonitoring): any;
export declare class LaunchTemplateMonitoringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LaunchTemplateMonitoring | undefined;
    set internalValue(value: LaunchTemplateMonitoring | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
}
export interface LaunchTemplateNetworkInterfaces {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#associate_carrier_ip_address LaunchTemplate#associate_carrier_ip_address}
    */
    readonly associateCarrierIpAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#associate_public_ip_address LaunchTemplate#associate_public_ip_address}
    */
    readonly associatePublicIpAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#delete_on_termination LaunchTemplate#delete_on_termination}
    */
    readonly deleteOnTermination?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#description LaunchTemplate#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#device_index LaunchTemplate#device_index}
    */
    readonly deviceIndex?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#interface_type LaunchTemplate#interface_type}
    */
    readonly interfaceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#ipv4_address_count LaunchTemplate#ipv4_address_count}
    */
    readonly ipv4AddressCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#ipv4_addresses LaunchTemplate#ipv4_addresses}
    */
    readonly ipv4Addresses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#ipv6_address_count LaunchTemplate#ipv6_address_count}
    */
    readonly ipv6AddressCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#ipv6_addresses LaunchTemplate#ipv6_addresses}
    */
    readonly ipv6Addresses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#network_card_index LaunchTemplate#network_card_index}
    */
    readonly networkCardIndex?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#network_interface_id LaunchTemplate#network_interface_id}
    */
    readonly networkInterfaceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#private_ip_address LaunchTemplate#private_ip_address}
    */
    readonly privateIpAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#security_groups LaunchTemplate#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#subnet_id LaunchTemplate#subnet_id}
    */
    readonly subnetId?: string;
}
export declare function launchTemplateNetworkInterfacesToTerraform(struct?: LaunchTemplateNetworkInterfaces): any;
export interface LaunchTemplatePlacement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#affinity LaunchTemplate#affinity}
    */
    readonly affinity?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#availability_zone LaunchTemplate#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#group_name LaunchTemplate#group_name}
    */
    readonly groupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#host_id LaunchTemplate#host_id}
    */
    readonly hostId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#host_resource_group_arn LaunchTemplate#host_resource_group_arn}
    */
    readonly hostResourceGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#partition_number LaunchTemplate#partition_number}
    */
    readonly partitionNumber?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#spread_domain LaunchTemplate#spread_domain}
    */
    readonly spreadDomain?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#tenancy LaunchTemplate#tenancy}
    */
    readonly tenancy?: string;
}
export declare function launchTemplatePlacementToTerraform(struct?: LaunchTemplatePlacementOutputReference | LaunchTemplatePlacement): any;
export declare class LaunchTemplatePlacementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LaunchTemplatePlacement | undefined;
    set internalValue(value: LaunchTemplatePlacement | undefined);
    private _affinity?;
    get affinity(): string;
    set affinity(value: string);
    resetAffinity(): void;
    get affinityInput(): string;
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string;
    private _groupName?;
    get groupName(): string;
    set groupName(value: string);
    resetGroupName(): void;
    get groupNameInput(): string;
    private _hostId?;
    get hostId(): string;
    set hostId(value: string);
    resetHostId(): void;
    get hostIdInput(): string;
    private _hostResourceGroupArn?;
    get hostResourceGroupArn(): string;
    set hostResourceGroupArn(value: string);
    resetHostResourceGroupArn(): void;
    get hostResourceGroupArnInput(): string;
    private _partitionNumber?;
    get partitionNumber(): number;
    set partitionNumber(value: number);
    resetPartitionNumber(): void;
    get partitionNumberInput(): number;
    private _spreadDomain?;
    get spreadDomain(): string;
    set spreadDomain(value: string);
    resetSpreadDomain(): void;
    get spreadDomainInput(): string;
    private _tenancy?;
    get tenancy(): string;
    set tenancy(value: string);
    resetTenancy(): void;
    get tenancyInput(): string;
}
export interface LaunchTemplateTagSpecifications {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#resource_type LaunchTemplate#resource_type}
    */
    readonly resourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#tags LaunchTemplate#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare function launchTemplateTagSpecificationsToTerraform(struct?: LaunchTemplateTagSpecifications): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html aws_launch_template}
*/
export declare class LaunchTemplate extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html aws_launch_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LaunchTemplateConfig = {}
    */
    constructor(scope: Construct, id: string, config?: LaunchTemplateConfig);
    get arn(): string;
    private _defaultVersion?;
    get defaultVersion(): number;
    set defaultVersion(value: number);
    resetDefaultVersion(): void;
    get defaultVersionInput(): number;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _disableApiTermination?;
    get disableApiTermination(): boolean | cdktf.IResolvable;
    set disableApiTermination(value: boolean | cdktf.IResolvable);
    resetDisableApiTermination(): void;
    get disableApiTerminationInput(): boolean | cdktf.IResolvable;
    private _ebsOptimized?;
    get ebsOptimized(): string;
    set ebsOptimized(value: string);
    resetEbsOptimized(): void;
    get ebsOptimizedInput(): string;
    get id(): string;
    private _imageId?;
    get imageId(): string;
    set imageId(value: string);
    resetImageId(): void;
    get imageIdInput(): string;
    private _instanceInitiatedShutdownBehavior?;
    get instanceInitiatedShutdownBehavior(): string;
    set instanceInitiatedShutdownBehavior(value: string);
    resetInstanceInitiatedShutdownBehavior(): void;
    get instanceInitiatedShutdownBehaviorInput(): string;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string;
    private _kernelId?;
    get kernelId(): string;
    set kernelId(value: string);
    resetKernelId(): void;
    get kernelIdInput(): string;
    private _keyName?;
    get keyName(): string;
    set keyName(value: string);
    resetKeyName(): void;
    get keyNameInput(): string;
    get latestVersion(): number;
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
    private _ramDiskId?;
    get ramDiskId(): string;
    set ramDiskId(value: string);
    resetRamDiskId(): void;
    get ramDiskIdInput(): string;
    private _securityGroupNames?;
    get securityGroupNames(): string[];
    set securityGroupNames(value: string[]);
    resetSecurityGroupNames(): void;
    get securityGroupNamesInput(): string[];
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
    private _updateDefaultVersion?;
    get updateDefaultVersion(): boolean | cdktf.IResolvable;
    set updateDefaultVersion(value: boolean | cdktf.IResolvable);
    resetUpdateDefaultVersion(): void;
    get updateDefaultVersionInput(): boolean | cdktf.IResolvable;
    private _userData?;
    get userData(): string;
    set userData(value: string);
    resetUserData(): void;
    get userDataInput(): string;
    private _vpcSecurityGroupIds?;
    get vpcSecurityGroupIds(): string[];
    set vpcSecurityGroupIds(value: string[]);
    resetVpcSecurityGroupIds(): void;
    get vpcSecurityGroupIdsInput(): string[];
    private _blockDeviceMappings?;
    get blockDeviceMappings(): LaunchTemplateBlockDeviceMappings[];
    set blockDeviceMappings(value: LaunchTemplateBlockDeviceMappings[]);
    resetBlockDeviceMappings(): void;
    get blockDeviceMappingsInput(): LaunchTemplateBlockDeviceMappings[];
    private _capacityReservationSpecification;
    get capacityReservationSpecification(): LaunchTemplateCapacityReservationSpecificationOutputReference;
    putCapacityReservationSpecification(value: LaunchTemplateCapacityReservationSpecification): void;
    resetCapacityReservationSpecification(): void;
    get capacityReservationSpecificationInput(): LaunchTemplateCapacityReservationSpecification;
    private _cpuOptions;
    get cpuOptions(): LaunchTemplateCpuOptionsOutputReference;
    putCpuOptions(value: LaunchTemplateCpuOptions): void;
    resetCpuOptions(): void;
    get cpuOptionsInput(): LaunchTemplateCpuOptions;
    private _creditSpecification;
    get creditSpecification(): LaunchTemplateCreditSpecificationOutputReference;
    putCreditSpecification(value: LaunchTemplateCreditSpecification): void;
    resetCreditSpecification(): void;
    get creditSpecificationInput(): LaunchTemplateCreditSpecification;
    private _elasticGpuSpecifications?;
    get elasticGpuSpecifications(): LaunchTemplateElasticGpuSpecifications[];
    set elasticGpuSpecifications(value: LaunchTemplateElasticGpuSpecifications[]);
    resetElasticGpuSpecifications(): void;
    get elasticGpuSpecificationsInput(): LaunchTemplateElasticGpuSpecifications[];
    private _elasticInferenceAccelerator;
    get elasticInferenceAccelerator(): LaunchTemplateElasticInferenceAcceleratorOutputReference;
    putElasticInferenceAccelerator(value: LaunchTemplateElasticInferenceAccelerator): void;
    resetElasticInferenceAccelerator(): void;
    get elasticInferenceAcceleratorInput(): LaunchTemplateElasticInferenceAccelerator;
    private _enclaveOptions;
    get enclaveOptions(): LaunchTemplateEnclaveOptionsOutputReference;
    putEnclaveOptions(value: LaunchTemplateEnclaveOptions): void;
    resetEnclaveOptions(): void;
    get enclaveOptionsInput(): LaunchTemplateEnclaveOptions;
    private _hibernationOptions;
    get hibernationOptions(): LaunchTemplateHibernationOptionsOutputReference;
    putHibernationOptions(value: LaunchTemplateHibernationOptions): void;
    resetHibernationOptions(): void;
    get hibernationOptionsInput(): LaunchTemplateHibernationOptions;
    private _iamInstanceProfile;
    get iamInstanceProfile(): LaunchTemplateIamInstanceProfileOutputReference;
    putIamInstanceProfile(value: LaunchTemplateIamInstanceProfile): void;
    resetIamInstanceProfile(): void;
    get iamInstanceProfileInput(): LaunchTemplateIamInstanceProfile;
    private _instanceMarketOptions;
    get instanceMarketOptions(): LaunchTemplateInstanceMarketOptionsOutputReference;
    putInstanceMarketOptions(value: LaunchTemplateInstanceMarketOptions): void;
    resetInstanceMarketOptions(): void;
    get instanceMarketOptionsInput(): LaunchTemplateInstanceMarketOptions;
    private _licenseSpecification?;
    get licenseSpecification(): LaunchTemplateLicenseSpecification[];
    set licenseSpecification(value: LaunchTemplateLicenseSpecification[]);
    resetLicenseSpecification(): void;
    get licenseSpecificationInput(): LaunchTemplateLicenseSpecification[];
    private _metadataOptions;
    get metadataOptions(): LaunchTemplateMetadataOptionsOutputReference;
    putMetadataOptions(value: LaunchTemplateMetadataOptions): void;
    resetMetadataOptions(): void;
    get metadataOptionsInput(): LaunchTemplateMetadataOptions;
    private _monitoring;
    get monitoring(): LaunchTemplateMonitoringOutputReference;
    putMonitoring(value: LaunchTemplateMonitoring): void;
    resetMonitoring(): void;
    get monitoringInput(): LaunchTemplateMonitoring;
    private _networkInterfaces?;
    get networkInterfaces(): LaunchTemplateNetworkInterfaces[];
    set networkInterfaces(value: LaunchTemplateNetworkInterfaces[]);
    resetNetworkInterfaces(): void;
    get networkInterfacesInput(): LaunchTemplateNetworkInterfaces[];
    private _placement;
    get placement(): LaunchTemplatePlacementOutputReference;
    putPlacement(value: LaunchTemplatePlacement): void;
    resetPlacement(): void;
    get placementInput(): LaunchTemplatePlacement;
    private _tagSpecifications?;
    get tagSpecifications(): LaunchTemplateTagSpecifications[];
    set tagSpecifications(value: LaunchTemplateTagSpecifications[]);
    resetTagSpecifications(): void;
    get tagSpecificationsInput(): LaunchTemplateTagSpecifications[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=launch-template.d.ts.map