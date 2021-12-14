import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface SpotInstanceRequestConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#ami SpotInstanceRequest#ami}
    */
    readonly ami?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#associate_public_ip_address SpotInstanceRequest#associate_public_ip_address}
    */
    readonly associatePublicIpAddress?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#availability_zone SpotInstanceRequest#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#block_duration_minutes SpotInstanceRequest#block_duration_minutes}
    */
    readonly blockDurationMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#cpu_core_count SpotInstanceRequest#cpu_core_count}
    */
    readonly cpuCoreCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#cpu_threads_per_core SpotInstanceRequest#cpu_threads_per_core}
    */
    readonly cpuThreadsPerCore?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#disable_api_termination SpotInstanceRequest#disable_api_termination}
    */
    readonly disableApiTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#ebs_optimized SpotInstanceRequest#ebs_optimized}
    */
    readonly ebsOptimized?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#get_password_data SpotInstanceRequest#get_password_data}
    */
    readonly fetchPasswordData?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#hibernation SpotInstanceRequest#hibernation}
    */
    readonly hibernation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#host_id SpotInstanceRequest#host_id}
    */
    readonly hostId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#iam_instance_profile SpotInstanceRequest#iam_instance_profile}
    */
    readonly iamInstanceProfile?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#instance_initiated_shutdown_behavior SpotInstanceRequest#instance_initiated_shutdown_behavior}
    */
    readonly instanceInitiatedShutdownBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#instance_interruption_behavior SpotInstanceRequest#instance_interruption_behavior}
    */
    readonly instanceInterruptionBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#instance_interruption_behaviour SpotInstanceRequest#instance_interruption_behaviour}
    */
    readonly instanceInterruptionBehaviour?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#instance_type SpotInstanceRequest#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#ipv6_address_count SpotInstanceRequest#ipv6_address_count}
    */
    readonly ipv6AddressCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#ipv6_addresses SpotInstanceRequest#ipv6_addresses}
    */
    readonly ipv6Addresses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#key_name SpotInstanceRequest#key_name}
    */
    readonly keyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#launch_group SpotInstanceRequest#launch_group}
    */
    readonly launchGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#monitoring SpotInstanceRequest#monitoring}
    */
    readonly monitoring?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#placement_group SpotInstanceRequest#placement_group}
    */
    readonly placementGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#placement_partition_number SpotInstanceRequest#placement_partition_number}
    */
    readonly placementPartitionNumber?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#private_ip SpotInstanceRequest#private_ip}
    */
    readonly privateIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#secondary_private_ips SpotInstanceRequest#secondary_private_ips}
    */
    readonly secondaryPrivateIps?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#security_groups SpotInstanceRequest#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#source_dest_check SpotInstanceRequest#source_dest_check}
    */
    readonly sourceDestCheck?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#spot_price SpotInstanceRequest#spot_price}
    */
    readonly spotPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#spot_type SpotInstanceRequest#spot_type}
    */
    readonly spotType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#subnet_id SpotInstanceRequest#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#tags SpotInstanceRequest#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#tags_all SpotInstanceRequest#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#tenancy SpotInstanceRequest#tenancy}
    */
    readonly tenancy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#user_data SpotInstanceRequest#user_data}
    */
    readonly userData?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#user_data_base64 SpotInstanceRequest#user_data_base64}
    */
    readonly userDataBase64?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#valid_from SpotInstanceRequest#valid_from}
    */
    readonly validFrom?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#valid_until SpotInstanceRequest#valid_until}
    */
    readonly validUntil?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#volume_tags SpotInstanceRequest#volume_tags}
    */
    readonly volumeTags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#vpc_security_group_ids SpotInstanceRequest#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#wait_for_fulfillment SpotInstanceRequest#wait_for_fulfillment}
    */
    readonly waitForFulfillment?: boolean | cdktf.IResolvable;
    /**
    * capacity_reservation_specification block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#capacity_reservation_specification SpotInstanceRequest#capacity_reservation_specification}
    */
    readonly capacityReservationSpecification?: SpotInstanceRequestCapacityReservationSpecification;
    /**
    * credit_specification block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#credit_specification SpotInstanceRequest#credit_specification}
    */
    readonly creditSpecification?: SpotInstanceRequestCreditSpecification;
    /**
    * ebs_block_device block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#ebs_block_device SpotInstanceRequest#ebs_block_device}
    */
    readonly ebsBlockDevice?: SpotInstanceRequestEbsBlockDevice[];
    /**
    * enclave_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#enclave_options SpotInstanceRequest#enclave_options}
    */
    readonly enclaveOptions?: SpotInstanceRequestEnclaveOptions;
    /**
    * ephemeral_block_device block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#ephemeral_block_device SpotInstanceRequest#ephemeral_block_device}
    */
    readonly ephemeralBlockDevice?: SpotInstanceRequestEphemeralBlockDevice[];
    /**
    * launch_template block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#launch_template SpotInstanceRequest#launch_template}
    */
    readonly launchTemplate?: SpotInstanceRequestLaunchTemplate;
    /**
    * metadata_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#metadata_options SpotInstanceRequest#metadata_options}
    */
    readonly metadataOptions?: SpotInstanceRequestMetadataOptions;
    /**
    * network_interface block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#network_interface SpotInstanceRequest#network_interface}
    */
    readonly networkInterface?: SpotInstanceRequestNetworkInterface[];
    /**
    * root_block_device block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#root_block_device SpotInstanceRequest#root_block_device}
    */
    readonly rootBlockDevice?: SpotInstanceRequestRootBlockDevice;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#timeouts SpotInstanceRequest#timeouts}
    */
    readonly timeouts?: SpotInstanceRequestTimeouts;
}
export interface SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#capacity_reservation_id SpotInstanceRequest#capacity_reservation_id}
    */
    readonly capacityReservationId?: string;
}
export declare function spotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct?: SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference | SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget): any;
export declare class SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget | undefined;
    set internalValue(value: SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget | undefined);
    private _capacityReservationId?;
    get capacityReservationId(): string;
    set capacityReservationId(value: string);
    resetCapacityReservationId(): void;
    get capacityReservationIdInput(): string;
}
export interface SpotInstanceRequestCapacityReservationSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#capacity_reservation_preference SpotInstanceRequest#capacity_reservation_preference}
    */
    readonly capacityReservationPreference?: string;
    /**
    * capacity_reservation_target block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#capacity_reservation_target SpotInstanceRequest#capacity_reservation_target}
    */
    readonly capacityReservationTarget?: SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget;
}
export declare function spotInstanceRequestCapacityReservationSpecificationToTerraform(struct?: SpotInstanceRequestCapacityReservationSpecificationOutputReference | SpotInstanceRequestCapacityReservationSpecification): any;
export declare class SpotInstanceRequestCapacityReservationSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SpotInstanceRequestCapacityReservationSpecification | undefined;
    set internalValue(value: SpotInstanceRequestCapacityReservationSpecification | undefined);
    private _capacityReservationPreference?;
    get capacityReservationPreference(): string;
    set capacityReservationPreference(value: string);
    resetCapacityReservationPreference(): void;
    get capacityReservationPreferenceInput(): string;
    private _capacityReservationTarget;
    get capacityReservationTarget(): SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference;
    putCapacityReservationTarget(value: SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget): void;
    resetCapacityReservationTarget(): void;
    get capacityReservationTargetInput(): SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget;
}
export interface SpotInstanceRequestCreditSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#cpu_credits SpotInstanceRequest#cpu_credits}
    */
    readonly cpuCredits?: string;
}
export declare function spotInstanceRequestCreditSpecificationToTerraform(struct?: SpotInstanceRequestCreditSpecificationOutputReference | SpotInstanceRequestCreditSpecification): any;
export declare class SpotInstanceRequestCreditSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SpotInstanceRequestCreditSpecification | undefined;
    set internalValue(value: SpotInstanceRequestCreditSpecification | undefined);
    private _cpuCredits?;
    get cpuCredits(): string;
    set cpuCredits(value: string);
    resetCpuCredits(): void;
    get cpuCreditsInput(): string;
}
export interface SpotInstanceRequestEbsBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#delete_on_termination SpotInstanceRequest#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#device_name SpotInstanceRequest#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#encrypted SpotInstanceRequest#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#iops SpotInstanceRequest#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#kms_key_id SpotInstanceRequest#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#snapshot_id SpotInstanceRequest#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#tags SpotInstanceRequest#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#throughput SpotInstanceRequest#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#volume_size SpotInstanceRequest#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#volume_type SpotInstanceRequest#volume_type}
    */
    readonly volumeType?: string;
}
export declare function spotInstanceRequestEbsBlockDeviceToTerraform(struct?: SpotInstanceRequestEbsBlockDevice): any;
export interface SpotInstanceRequestEnclaveOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#enabled SpotInstanceRequest#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function spotInstanceRequestEnclaveOptionsToTerraform(struct?: SpotInstanceRequestEnclaveOptionsOutputReference | SpotInstanceRequestEnclaveOptions): any;
export declare class SpotInstanceRequestEnclaveOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SpotInstanceRequestEnclaveOptions | undefined;
    set internalValue(value: SpotInstanceRequestEnclaveOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
}
export interface SpotInstanceRequestEphemeralBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#device_name SpotInstanceRequest#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#no_device SpotInstanceRequest#no_device}
    */
    readonly noDevice?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#virtual_name SpotInstanceRequest#virtual_name}
    */
    readonly virtualName?: string;
}
export declare function spotInstanceRequestEphemeralBlockDeviceToTerraform(struct?: SpotInstanceRequestEphemeralBlockDevice): any;
export interface SpotInstanceRequestLaunchTemplate {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#id SpotInstanceRequest#id}
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#name SpotInstanceRequest#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#version SpotInstanceRequest#version}
    */
    readonly version?: string;
}
export declare function spotInstanceRequestLaunchTemplateToTerraform(struct?: SpotInstanceRequestLaunchTemplateOutputReference | SpotInstanceRequestLaunchTemplate): any;
export declare class SpotInstanceRequestLaunchTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SpotInstanceRequestLaunchTemplate | undefined;
    set internalValue(value: SpotInstanceRequestLaunchTemplate | undefined);
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
export interface SpotInstanceRequestMetadataOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#http_endpoint SpotInstanceRequest#http_endpoint}
    */
    readonly httpEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#http_put_response_hop_limit SpotInstanceRequest#http_put_response_hop_limit}
    */
    readonly httpPutResponseHopLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#http_tokens SpotInstanceRequest#http_tokens}
    */
    readonly httpTokens?: string;
}
export declare function spotInstanceRequestMetadataOptionsToTerraform(struct?: SpotInstanceRequestMetadataOptionsOutputReference | SpotInstanceRequestMetadataOptions): any;
export declare class SpotInstanceRequestMetadataOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SpotInstanceRequestMetadataOptions | undefined;
    set internalValue(value: SpotInstanceRequestMetadataOptions | undefined);
    private _httpEndpoint?;
    get httpEndpoint(): string;
    set httpEndpoint(value: string);
    resetHttpEndpoint(): void;
    get httpEndpointInput(): string;
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
export interface SpotInstanceRequestNetworkInterface {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#delete_on_termination SpotInstanceRequest#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#device_index SpotInstanceRequest#device_index}
    */
    readonly deviceIndex: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#network_interface_id SpotInstanceRequest#network_interface_id}
    */
    readonly networkInterfaceId: string;
}
export declare function spotInstanceRequestNetworkInterfaceToTerraform(struct?: SpotInstanceRequestNetworkInterface): any;
export interface SpotInstanceRequestRootBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#delete_on_termination SpotInstanceRequest#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#encrypted SpotInstanceRequest#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#iops SpotInstanceRequest#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#kms_key_id SpotInstanceRequest#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#tags SpotInstanceRequest#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#throughput SpotInstanceRequest#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#volume_size SpotInstanceRequest#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#volume_type SpotInstanceRequest#volume_type}
    */
    readonly volumeType?: string;
}
export declare function spotInstanceRequestRootBlockDeviceToTerraform(struct?: SpotInstanceRequestRootBlockDeviceOutputReference | SpotInstanceRequestRootBlockDevice): any;
export declare class SpotInstanceRequestRootBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SpotInstanceRequestRootBlockDevice | undefined;
    set internalValue(value: SpotInstanceRequestRootBlockDevice | undefined);
    private _deleteOnTermination?;
    get deleteOnTermination(): boolean | cdktf.IResolvable;
    set deleteOnTermination(value: boolean | cdktf.IResolvable);
    resetDeleteOnTermination(): void;
    get deleteOnTerminationInput(): boolean | cdktf.IResolvable;
    private _encrypted?;
    get encrypted(): boolean | cdktf.IResolvable;
    set encrypted(value: boolean | cdktf.IResolvable);
    resetEncrypted(): void;
    get encryptedInput(): boolean | cdktf.IResolvable;
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
export interface SpotInstanceRequestTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#create SpotInstanceRequest#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#delete SpotInstanceRequest#delete}
    */
    readonly delete?: string;
}
export declare function spotInstanceRequestTimeoutsToTerraform(struct?: SpotInstanceRequestTimeoutsOutputReference | SpotInstanceRequestTimeouts): any;
export declare class SpotInstanceRequestTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SpotInstanceRequestTimeouts | undefined;
    set internalValue(value: SpotInstanceRequestTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html aws_spot_instance_request}
*/
export declare class SpotInstanceRequest extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html aws_spot_instance_request} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SpotInstanceRequestConfig = {}
    */
    constructor(scope: Construct, id: string, config?: SpotInstanceRequestConfig);
    private _ami?;
    get ami(): string;
    set ami(value: string);
    resetAmi(): void;
    get amiInput(): string;
    get arn(): string;
    private _associatePublicIpAddress?;
    get associatePublicIpAddress(): boolean | cdktf.IResolvable;
    set associatePublicIpAddress(value: boolean | cdktf.IResolvable);
    resetAssociatePublicIpAddress(): void;
    get associatePublicIpAddressInput(): boolean | cdktf.IResolvable;
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string;
    private _blockDurationMinutes?;
    get blockDurationMinutes(): number;
    set blockDurationMinutes(value: number);
    resetBlockDurationMinutes(): void;
    get blockDurationMinutesInput(): number;
    private _cpuCoreCount?;
    get cpuCoreCount(): number;
    set cpuCoreCount(value: number);
    resetCpuCoreCount(): void;
    get cpuCoreCountInput(): number;
    private _cpuThreadsPerCore?;
    get cpuThreadsPerCore(): number;
    set cpuThreadsPerCore(value: number);
    resetCpuThreadsPerCore(): void;
    get cpuThreadsPerCoreInput(): number;
    private _disableApiTermination?;
    get disableApiTermination(): boolean | cdktf.IResolvable;
    set disableApiTermination(value: boolean | cdktf.IResolvable);
    resetDisableApiTermination(): void;
    get disableApiTerminationInput(): boolean | cdktf.IResolvable;
    private _ebsOptimized?;
    get ebsOptimized(): boolean | cdktf.IResolvable;
    set ebsOptimized(value: boolean | cdktf.IResolvable);
    resetEbsOptimized(): void;
    get ebsOptimizedInput(): boolean | cdktf.IResolvable;
    private _getPasswordData?;
    get fetchPasswordData(): boolean | cdktf.IResolvable;
    set fetchPasswordData(value: boolean | cdktf.IResolvable);
    resetFetchPasswordData(): void;
    get fetchPasswordDataInput(): boolean | cdktf.IResolvable;
    private _hibernation?;
    get hibernation(): boolean | cdktf.IResolvable;
    set hibernation(value: boolean | cdktf.IResolvable);
    resetHibernation(): void;
    get hibernationInput(): boolean | cdktf.IResolvable;
    private _hostId?;
    get hostId(): string;
    set hostId(value: string);
    resetHostId(): void;
    get hostIdInput(): string;
    private _iamInstanceProfile?;
    get iamInstanceProfile(): string;
    set iamInstanceProfile(value: string);
    resetIamInstanceProfile(): void;
    get iamInstanceProfileInput(): string;
    get id(): string;
    private _instanceInitiatedShutdownBehavior?;
    get instanceInitiatedShutdownBehavior(): string;
    set instanceInitiatedShutdownBehavior(value: string);
    resetInstanceInitiatedShutdownBehavior(): void;
    get instanceInitiatedShutdownBehaviorInput(): string;
    private _instanceInterruptionBehavior?;
    get instanceInterruptionBehavior(): string;
    set instanceInterruptionBehavior(value: string);
    resetInstanceInterruptionBehavior(): void;
    get instanceInterruptionBehaviorInput(): string;
    private _instanceInterruptionBehaviour?;
    get instanceInterruptionBehaviour(): string;
    set instanceInterruptionBehaviour(value: string);
    resetInstanceInterruptionBehaviour(): void;
    get instanceInterruptionBehaviourInput(): string;
    get instanceState(): string;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string;
    private _ipv6AddressCount?;
    get ipv6AddressCount(): number;
    set ipv6AddressCount(value: number);
    resetIpv6AddressCount(): void;
    get ipv6AddressCountInput(): number;
    private _ipv6Addresses?;
    get ipv6Addresses(): string[];
    set ipv6Addresses(value: string[]);
    resetIpv6Addresses(): void;
    get ipv6AddressesInput(): string[];
    private _keyName?;
    get keyName(): string;
    set keyName(value: string);
    resetKeyName(): void;
    get keyNameInput(): string;
    private _launchGroup?;
    get launchGroup(): string;
    set launchGroup(value: string);
    resetLaunchGroup(): void;
    get launchGroupInput(): string;
    private _monitoring?;
    get monitoring(): boolean | cdktf.IResolvable;
    set monitoring(value: boolean | cdktf.IResolvable);
    resetMonitoring(): void;
    get monitoringInput(): boolean | cdktf.IResolvable;
    get outpostArn(): string;
    get passwordData(): string;
    private _placementGroup?;
    get placementGroup(): string;
    set placementGroup(value: string);
    resetPlacementGroup(): void;
    get placementGroupInput(): string;
    private _placementPartitionNumber?;
    get placementPartitionNumber(): number;
    set placementPartitionNumber(value: number);
    resetPlacementPartitionNumber(): void;
    get placementPartitionNumberInput(): number;
    get primaryNetworkInterfaceId(): string;
    get privateDns(): string;
    private _privateIp?;
    get privateIp(): string;
    set privateIp(value: string);
    resetPrivateIp(): void;
    get privateIpInput(): string;
    get publicDns(): string;
    get publicIp(): string;
    private _secondaryPrivateIps?;
    get secondaryPrivateIps(): string[];
    set secondaryPrivateIps(value: string[]);
    resetSecondaryPrivateIps(): void;
    get secondaryPrivateIpsInput(): string[];
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[];
    private _sourceDestCheck?;
    get sourceDestCheck(): boolean | cdktf.IResolvable;
    set sourceDestCheck(value: boolean | cdktf.IResolvable);
    resetSourceDestCheck(): void;
    get sourceDestCheckInput(): boolean | cdktf.IResolvable;
    get spotBidStatus(): string;
    get spotInstanceId(): string;
    private _spotPrice?;
    get spotPrice(): string;
    set spotPrice(value: string);
    resetSpotPrice(): void;
    get spotPriceInput(): string;
    get spotRequestState(): string;
    private _spotType?;
    get spotType(): string;
    set spotType(value: string);
    resetSpotType(): void;
    get spotTypeInput(): string;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string;
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
    private _tenancy?;
    get tenancy(): string;
    set tenancy(value: string);
    resetTenancy(): void;
    get tenancyInput(): string;
    private _userData?;
    get userData(): string;
    set userData(value: string);
    resetUserData(): void;
    get userDataInput(): string;
    private _userDataBase64?;
    get userDataBase64(): string;
    set userDataBase64(value: string);
    resetUserDataBase64(): void;
    get userDataBase64Input(): string;
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
    private _volumeTags?;
    get volumeTags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set volumeTags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetVolumeTags(): void;
    get volumeTagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _vpcSecurityGroupIds?;
    get vpcSecurityGroupIds(): string[];
    set vpcSecurityGroupIds(value: string[]);
    resetVpcSecurityGroupIds(): void;
    get vpcSecurityGroupIdsInput(): string[];
    private _waitForFulfillment?;
    get waitForFulfillment(): boolean | cdktf.IResolvable;
    set waitForFulfillment(value: boolean | cdktf.IResolvable);
    resetWaitForFulfillment(): void;
    get waitForFulfillmentInput(): boolean | cdktf.IResolvable;
    private _capacityReservationSpecification;
    get capacityReservationSpecification(): SpotInstanceRequestCapacityReservationSpecificationOutputReference;
    putCapacityReservationSpecification(value: SpotInstanceRequestCapacityReservationSpecification): void;
    resetCapacityReservationSpecification(): void;
    get capacityReservationSpecificationInput(): SpotInstanceRequestCapacityReservationSpecification;
    private _creditSpecification;
    get creditSpecification(): SpotInstanceRequestCreditSpecificationOutputReference;
    putCreditSpecification(value: SpotInstanceRequestCreditSpecification): void;
    resetCreditSpecification(): void;
    get creditSpecificationInput(): SpotInstanceRequestCreditSpecification;
    private _ebsBlockDevice?;
    get ebsBlockDevice(): SpotInstanceRequestEbsBlockDevice[];
    set ebsBlockDevice(value: SpotInstanceRequestEbsBlockDevice[]);
    resetEbsBlockDevice(): void;
    get ebsBlockDeviceInput(): SpotInstanceRequestEbsBlockDevice[];
    private _enclaveOptions;
    get enclaveOptions(): SpotInstanceRequestEnclaveOptionsOutputReference;
    putEnclaveOptions(value: SpotInstanceRequestEnclaveOptions): void;
    resetEnclaveOptions(): void;
    get enclaveOptionsInput(): SpotInstanceRequestEnclaveOptions;
    private _ephemeralBlockDevice?;
    get ephemeralBlockDevice(): SpotInstanceRequestEphemeralBlockDevice[];
    set ephemeralBlockDevice(value: SpotInstanceRequestEphemeralBlockDevice[]);
    resetEphemeralBlockDevice(): void;
    get ephemeralBlockDeviceInput(): SpotInstanceRequestEphemeralBlockDevice[];
    private _launchTemplate;
    get launchTemplate(): SpotInstanceRequestLaunchTemplateOutputReference;
    putLaunchTemplate(value: SpotInstanceRequestLaunchTemplate): void;
    resetLaunchTemplate(): void;
    get launchTemplateInput(): SpotInstanceRequestLaunchTemplate;
    private _metadataOptions;
    get metadataOptions(): SpotInstanceRequestMetadataOptionsOutputReference;
    putMetadataOptions(value: SpotInstanceRequestMetadataOptions): void;
    resetMetadataOptions(): void;
    get metadataOptionsInput(): SpotInstanceRequestMetadataOptions;
    private _networkInterface?;
    get networkInterface(): SpotInstanceRequestNetworkInterface[];
    set networkInterface(value: SpotInstanceRequestNetworkInterface[]);
    resetNetworkInterface(): void;
    get networkInterfaceInput(): SpotInstanceRequestNetworkInterface[];
    private _rootBlockDevice;
    get rootBlockDevice(): SpotInstanceRequestRootBlockDeviceOutputReference;
    putRootBlockDevice(value: SpotInstanceRequestRootBlockDevice): void;
    resetRootBlockDevice(): void;
    get rootBlockDeviceInput(): SpotInstanceRequestRootBlockDevice;
    private _timeouts;
    get timeouts(): SpotInstanceRequestTimeoutsOutputReference;
    putTimeouts(value: SpotInstanceRequestTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): SpotInstanceRequestTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=spot-instance-request.d.ts.map