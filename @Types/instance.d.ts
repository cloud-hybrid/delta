import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface InstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#ami Instance#ami}
    */
    readonly ami?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#associate_public_ip_address Instance#associate_public_ip_address}
    */
    readonly associatePublicIpAddress?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#availability_zone Instance#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#cpu_core_count Instance#cpu_core_count}
    */
    readonly cpuCoreCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#cpu_threads_per_core Instance#cpu_threads_per_core}
    */
    readonly cpuThreadsPerCore?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#disable_api_termination Instance#disable_api_termination}
    */
    readonly disableApiTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#ebs_optimized Instance#ebs_optimized}
    */
    readonly ebsOptimized?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#get_password_data Instance#get_password_data}
    */
    readonly fetchPasswordData?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#hibernation Instance#hibernation}
    */
    readonly hibernation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#host_id Instance#host_id}
    */
    readonly hostId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#iam_instance_profile Instance#iam_instance_profile}
    */
    readonly iamInstanceProfile?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#instance_initiated_shutdown_behavior Instance#instance_initiated_shutdown_behavior}
    */
    readonly instanceInitiatedShutdownBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#instance_type Instance#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#ipv6_address_count Instance#ipv6_address_count}
    */
    readonly ipv6AddressCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#ipv6_addresses Instance#ipv6_addresses}
    */
    readonly ipv6Addresses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#key_name Instance#key_name}
    */
    readonly keyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#monitoring Instance#monitoring}
    */
    readonly monitoring?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#placement_group Instance#placement_group}
    */
    readonly placementGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#placement_partition_number Instance#placement_partition_number}
    */
    readonly placementPartitionNumber?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#private_ip Instance#private_ip}
    */
    readonly privateIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#secondary_private_ips Instance#secondary_private_ips}
    */
    readonly secondaryPrivateIps?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#security_groups Instance#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#source_dest_check Instance#source_dest_check}
    */
    readonly sourceDestCheck?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#subnet_id Instance#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#tags Instance#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#tags_all Instance#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#tenancy Instance#tenancy}
    */
    readonly tenancy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#user_data Instance#user_data}
    */
    readonly userData?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#user_data_base64 Instance#user_data_base64}
    */
    readonly userDataBase64?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#volume_tags Instance#volume_tags}
    */
    readonly volumeTags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#vpc_security_group_ids Instance#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * capacity_reservation_specification block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#capacity_reservation_specification Instance#capacity_reservation_specification}
    */
    readonly capacityReservationSpecification?: InstanceCapacityReservationSpecification;
    /**
    * credit_specification block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#credit_specification Instance#credit_specification}
    */
    readonly creditSpecification?: InstanceCreditSpecification;
    /**
    * ebs_block_device block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#ebs_block_device Instance#ebs_block_device}
    */
    readonly ebsBlockDevice?: InstanceEbsBlockDevice[];
    /**
    * enclave_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#enclave_options Instance#enclave_options}
    */
    readonly enclaveOptions?: InstanceEnclaveOptions;
    /**
    * ephemeral_block_device block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#ephemeral_block_device Instance#ephemeral_block_device}
    */
    readonly ephemeralBlockDevice?: InstanceEphemeralBlockDevice[];
    /**
    * launch_template block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#launch_template Instance#launch_template}
    */
    readonly launchTemplate?: InstanceLaunchTemplate;
    /**
    * metadata_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#metadata_options Instance#metadata_options}
    */
    readonly metadataOptions?: InstanceMetadataOptions;
    /**
    * network_interface block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#network_interface Instance#network_interface}
    */
    readonly networkInterface?: InstanceNetworkInterface[];
    /**
    * root_block_device block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#root_block_device Instance#root_block_device}
    */
    readonly rootBlockDevice?: InstanceRootBlockDevice;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#timeouts Instance#timeouts}
    */
    readonly timeouts?: InstanceTimeouts;
}
export interface InstanceCapacityReservationSpecificationCapacityReservationTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#capacity_reservation_id Instance#capacity_reservation_id}
    */
    readonly capacityReservationId?: string;
}
export declare function instanceCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct?: InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference | InstanceCapacityReservationSpecificationCapacityReservationTarget): any;
export declare class InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): InstanceCapacityReservationSpecificationCapacityReservationTarget | undefined;
    set internalValue(value: InstanceCapacityReservationSpecificationCapacityReservationTarget | undefined);
    private _capacityReservationId?;
    get capacityReservationId(): string;
    set capacityReservationId(value: string);
    resetCapacityReservationId(): void;
    get capacityReservationIdInput(): string;
}
export interface InstanceCapacityReservationSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#capacity_reservation_preference Instance#capacity_reservation_preference}
    */
    readonly capacityReservationPreference?: string;
    /**
    * capacity_reservation_target block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#capacity_reservation_target Instance#capacity_reservation_target}
    */
    readonly capacityReservationTarget?: InstanceCapacityReservationSpecificationCapacityReservationTarget;
}
export declare function instanceCapacityReservationSpecificationToTerraform(struct?: InstanceCapacityReservationSpecificationOutputReference | InstanceCapacityReservationSpecification): any;
export declare class InstanceCapacityReservationSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): InstanceCapacityReservationSpecification | undefined;
    set internalValue(value: InstanceCapacityReservationSpecification | undefined);
    private _capacityReservationPreference?;
    get capacityReservationPreference(): string;
    set capacityReservationPreference(value: string);
    resetCapacityReservationPreference(): void;
    get capacityReservationPreferenceInput(): string;
    private _capacityReservationTarget;
    get capacityReservationTarget(): InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference;
    putCapacityReservationTarget(value: InstanceCapacityReservationSpecificationCapacityReservationTarget): void;
    resetCapacityReservationTarget(): void;
    get capacityReservationTargetInput(): InstanceCapacityReservationSpecificationCapacityReservationTarget;
}
export interface InstanceCreditSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#cpu_credits Instance#cpu_credits}
    */
    readonly cpuCredits?: string;
}
export declare function instanceCreditSpecificationToTerraform(struct?: InstanceCreditSpecificationOutputReference | InstanceCreditSpecification): any;
export declare class InstanceCreditSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): InstanceCreditSpecification | undefined;
    set internalValue(value: InstanceCreditSpecification | undefined);
    private _cpuCredits?;
    get cpuCredits(): string;
    set cpuCredits(value: string);
    resetCpuCredits(): void;
    get cpuCreditsInput(): string;
}
export interface InstanceEbsBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#delete_on_termination Instance#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#device_name Instance#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#encrypted Instance#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#iops Instance#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#kms_key_id Instance#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#snapshot_id Instance#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#tags Instance#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#throughput Instance#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#volume_size Instance#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#volume_type Instance#volume_type}
    */
    readonly volumeType?: string;
}
export declare function instanceEbsBlockDeviceToTerraform(struct?: InstanceEbsBlockDevice): any;
export interface InstanceEnclaveOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#enabled Instance#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function instanceEnclaveOptionsToTerraform(struct?: InstanceEnclaveOptionsOutputReference | InstanceEnclaveOptions): any;
export declare class InstanceEnclaveOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): InstanceEnclaveOptions | undefined;
    set internalValue(value: InstanceEnclaveOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
}
export interface InstanceEphemeralBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#device_name Instance#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#no_device Instance#no_device}
    */
    readonly noDevice?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#virtual_name Instance#virtual_name}
    */
    readonly virtualName?: string;
}
export declare function instanceEphemeralBlockDeviceToTerraform(struct?: InstanceEphemeralBlockDevice): any;
export interface InstanceLaunchTemplate {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#id Instance#id}
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#name Instance#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#version Instance#version}
    */
    readonly version?: string;
}
export declare function instanceLaunchTemplateToTerraform(struct?: InstanceLaunchTemplateOutputReference | InstanceLaunchTemplate): any;
export declare class InstanceLaunchTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): InstanceLaunchTemplate | undefined;
    set internalValue(value: InstanceLaunchTemplate | undefined);
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
export interface InstanceMetadataOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#http_endpoint Instance#http_endpoint}
    */
    readonly httpEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#http_put_response_hop_limit Instance#http_put_response_hop_limit}
    */
    readonly httpPutResponseHopLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#http_tokens Instance#http_tokens}
    */
    readonly httpTokens?: string;
}
export declare function instanceMetadataOptionsToTerraform(struct?: InstanceMetadataOptionsOutputReference | InstanceMetadataOptions): any;
export declare class InstanceMetadataOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): InstanceMetadataOptions | undefined;
    set internalValue(value: InstanceMetadataOptions | undefined);
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
export interface InstanceNetworkInterface {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#delete_on_termination Instance#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#device_index Instance#device_index}
    */
    readonly deviceIndex: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#network_interface_id Instance#network_interface_id}
    */
    readonly networkInterfaceId: string;
}
export declare function instanceNetworkInterfaceToTerraform(struct?: InstanceNetworkInterface): any;
export interface InstanceRootBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#delete_on_termination Instance#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#encrypted Instance#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#iops Instance#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#kms_key_id Instance#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#tags Instance#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#throughput Instance#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#volume_size Instance#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#volume_type Instance#volume_type}
    */
    readonly volumeType?: string;
}
export declare function instanceRootBlockDeviceToTerraform(struct?: InstanceRootBlockDeviceOutputReference | InstanceRootBlockDevice): any;
export declare class InstanceRootBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): InstanceRootBlockDevice | undefined;
    set internalValue(value: InstanceRootBlockDevice | undefined);
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
export interface InstanceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#create Instance#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#delete Instance#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#update Instance#update}
    */
    readonly update?: string;
}
export declare function instanceTimeoutsToTerraform(struct?: InstanceTimeoutsOutputReference | InstanceTimeouts): any;
export declare class InstanceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): InstanceTimeouts | undefined;
    set internalValue(value: InstanceTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/instance.html aws_instance}
*/
export declare class Instance extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/instance.html aws_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options InstanceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: InstanceConfig);
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
    private _capacityReservationSpecification;
    get capacityReservationSpecification(): InstanceCapacityReservationSpecificationOutputReference;
    putCapacityReservationSpecification(value: InstanceCapacityReservationSpecification): void;
    resetCapacityReservationSpecification(): void;
    get capacityReservationSpecificationInput(): InstanceCapacityReservationSpecification;
    private _creditSpecification;
    get creditSpecification(): InstanceCreditSpecificationOutputReference;
    putCreditSpecification(value: InstanceCreditSpecification): void;
    resetCreditSpecification(): void;
    get creditSpecificationInput(): InstanceCreditSpecification;
    private _ebsBlockDevice?;
    get ebsBlockDevice(): InstanceEbsBlockDevice[];
    set ebsBlockDevice(value: InstanceEbsBlockDevice[]);
    resetEbsBlockDevice(): void;
    get ebsBlockDeviceInput(): InstanceEbsBlockDevice[];
    private _enclaveOptions;
    get enclaveOptions(): InstanceEnclaveOptionsOutputReference;
    putEnclaveOptions(value: InstanceEnclaveOptions): void;
    resetEnclaveOptions(): void;
    get enclaveOptionsInput(): InstanceEnclaveOptions;
    private _ephemeralBlockDevice?;
    get ephemeralBlockDevice(): InstanceEphemeralBlockDevice[];
    set ephemeralBlockDevice(value: InstanceEphemeralBlockDevice[]);
    resetEphemeralBlockDevice(): void;
    get ephemeralBlockDeviceInput(): InstanceEphemeralBlockDevice[];
    private _launchTemplate;
    get launchTemplate(): InstanceLaunchTemplateOutputReference;
    putLaunchTemplate(value: InstanceLaunchTemplate): void;
    resetLaunchTemplate(): void;
    get launchTemplateInput(): InstanceLaunchTemplate;
    private _metadataOptions;
    get metadataOptions(): InstanceMetadataOptionsOutputReference;
    putMetadataOptions(value: InstanceMetadataOptions): void;
    resetMetadataOptions(): void;
    get metadataOptionsInput(): InstanceMetadataOptions;
    private _networkInterface?;
    get networkInterface(): InstanceNetworkInterface[];
    set networkInterface(value: InstanceNetworkInterface[]);
    resetNetworkInterface(): void;
    get networkInterfaceInput(): InstanceNetworkInterface[];
    private _rootBlockDevice;
    get rootBlockDevice(): InstanceRootBlockDeviceOutputReference;
    putRootBlockDevice(value: InstanceRootBlockDevice): void;
    resetRootBlockDevice(): void;
    get rootBlockDeviceInput(): InstanceRootBlockDevice;
    private _timeouts;
    get timeouts(): InstanceTimeoutsOutputReference;
    putTimeouts(value: InstanceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): InstanceTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=instance.d.ts.map