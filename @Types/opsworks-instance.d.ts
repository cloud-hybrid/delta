import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS OpsWorks
*/
export interface OpsworksInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#agent_version OpsworksInstance#agent_version}
    */
    readonly agentVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#ami_id OpsworksInstance#ami_id}
    */
    readonly amiId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#architecture OpsworksInstance#architecture}
    */
    readonly architecture?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#auto_scaling_type OpsworksInstance#auto_scaling_type}
    */
    readonly autoScalingType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#availability_zone OpsworksInstance#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#created_at OpsworksInstance#created_at}
    */
    readonly createdAt?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#delete_ebs OpsworksInstance#delete_ebs}
    */
    readonly deleteEbs?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#delete_eip OpsworksInstance#delete_eip}
    */
    readonly deleteEip?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#ebs_optimized OpsworksInstance#ebs_optimized}
    */
    readonly ebsOptimized?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#ecs_cluster_arn OpsworksInstance#ecs_cluster_arn}
    */
    readonly ecsClusterArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#elastic_ip OpsworksInstance#elastic_ip}
    */
    readonly elasticIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#hostname OpsworksInstance#hostname}
    */
    readonly hostname?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#infrastructure_class OpsworksInstance#infrastructure_class}
    */
    readonly infrastructureClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#install_updates_on_boot OpsworksInstance#install_updates_on_boot}
    */
    readonly installUpdatesOnBoot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#instance_profile_arn OpsworksInstance#instance_profile_arn}
    */
    readonly instanceProfileArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#instance_type OpsworksInstance#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#last_service_error_id OpsworksInstance#last_service_error_id}
    */
    readonly lastServiceErrorId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#layer_ids OpsworksInstance#layer_ids}
    */
    readonly layerIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#os OpsworksInstance#os}
    */
    readonly os?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#platform OpsworksInstance#platform}
    */
    readonly platform?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#private_dns OpsworksInstance#private_dns}
    */
    readonly privateDns?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#private_ip OpsworksInstance#private_ip}
    */
    readonly privateIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#public_dns OpsworksInstance#public_dns}
    */
    readonly publicDns?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#public_ip OpsworksInstance#public_ip}
    */
    readonly publicIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#registered_by OpsworksInstance#registered_by}
    */
    readonly registeredBy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#reported_agent_version OpsworksInstance#reported_agent_version}
    */
    readonly reportedAgentVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#reported_os_family OpsworksInstance#reported_os_family}
    */
    readonly reportedOsFamily?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#reported_os_name OpsworksInstance#reported_os_name}
    */
    readonly reportedOsName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#reported_os_version OpsworksInstance#reported_os_version}
    */
    readonly reportedOsVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#root_device_type OpsworksInstance#root_device_type}
    */
    readonly rootDeviceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#root_device_volume_id OpsworksInstance#root_device_volume_id}
    */
    readonly rootDeviceVolumeId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#security_group_ids OpsworksInstance#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#ssh_host_dsa_key_fingerprint OpsworksInstance#ssh_host_dsa_key_fingerprint}
    */
    readonly sshHostDsaKeyFingerprint?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#ssh_host_rsa_key_fingerprint OpsworksInstance#ssh_host_rsa_key_fingerprint}
    */
    readonly sshHostRsaKeyFingerprint?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#ssh_key_name OpsworksInstance#ssh_key_name}
    */
    readonly sshKeyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#stack_id OpsworksInstance#stack_id}
    */
    readonly stackId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#state OpsworksInstance#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#status OpsworksInstance#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#subnet_id OpsworksInstance#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#tenancy OpsworksInstance#tenancy}
    */
    readonly tenancy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#virtualization_type OpsworksInstance#virtualization_type}
    */
    readonly virtualizationType?: string;
    /**
    * ebs_block_device block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#ebs_block_device OpsworksInstance#ebs_block_device}
    */
    readonly ebsBlockDevice?: OpsworksInstanceEbsBlockDevice[];
    /**
    * ephemeral_block_device block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#ephemeral_block_device OpsworksInstance#ephemeral_block_device}
    */
    readonly ephemeralBlockDevice?: OpsworksInstanceEphemeralBlockDevice[];
    /**
    * root_block_device block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#root_block_device OpsworksInstance#root_block_device}
    */
    readonly rootBlockDevice?: OpsworksInstanceRootBlockDevice[];
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#timeouts OpsworksInstance#timeouts}
    */
    readonly timeouts?: OpsworksInstanceTimeouts;
}
export interface OpsworksInstanceEbsBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#delete_on_termination OpsworksInstance#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#device_name OpsworksInstance#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#iops OpsworksInstance#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#snapshot_id OpsworksInstance#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#volume_size OpsworksInstance#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#volume_type OpsworksInstance#volume_type}
    */
    readonly volumeType?: string;
}
export declare function opsworksInstanceEbsBlockDeviceToTerraform(struct?: OpsworksInstanceEbsBlockDevice): any;
export interface OpsworksInstanceEphemeralBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#device_name OpsworksInstance#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#virtual_name OpsworksInstance#virtual_name}
    */
    readonly virtualName: string;
}
export declare function opsworksInstanceEphemeralBlockDeviceToTerraform(struct?: OpsworksInstanceEphemeralBlockDevice): any;
export interface OpsworksInstanceRootBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#delete_on_termination OpsworksInstance#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#iops OpsworksInstance#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#volume_size OpsworksInstance#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#volume_type OpsworksInstance#volume_type}
    */
    readonly volumeType?: string;
}
export declare function opsworksInstanceRootBlockDeviceToTerraform(struct?: OpsworksInstanceRootBlockDevice): any;
export interface OpsworksInstanceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#create OpsworksInstance#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#delete OpsworksInstance#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#update OpsworksInstance#update}
    */
    readonly update?: string;
}
export declare function opsworksInstanceTimeoutsToTerraform(struct?: OpsworksInstanceTimeoutsOutputReference | OpsworksInstanceTimeouts): any;
export declare class OpsworksInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): OpsworksInstanceTimeouts | undefined;
    set internalValue(value: OpsworksInstanceTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html aws_opsworks_instance}
*/
export declare class OpsworksInstance extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html aws_opsworks_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksInstanceConfig
    */
    constructor(scope: Construct, id: string, config: OpsworksInstanceConfig);
    private _agentVersion?;
    get agentVersion(): string;
    set agentVersion(value: string);
    resetAgentVersion(): void;
    get agentVersionInput(): string;
    private _amiId?;
    get amiId(): string;
    set amiId(value: string);
    resetAmiId(): void;
    get amiIdInput(): string;
    private _architecture?;
    get architecture(): string;
    set architecture(value: string);
    resetArchitecture(): void;
    get architectureInput(): string;
    private _autoScalingType?;
    get autoScalingType(): string;
    set autoScalingType(value: string);
    resetAutoScalingType(): void;
    get autoScalingTypeInput(): string;
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string;
    private _createdAt?;
    get createdAt(): string;
    set createdAt(value: string);
    resetCreatedAt(): void;
    get createdAtInput(): string;
    private _deleteEbs?;
    get deleteEbs(): boolean | cdktf.IResolvable;
    set deleteEbs(value: boolean | cdktf.IResolvable);
    resetDeleteEbs(): void;
    get deleteEbsInput(): boolean | cdktf.IResolvable;
    private _deleteEip?;
    get deleteEip(): boolean | cdktf.IResolvable;
    set deleteEip(value: boolean | cdktf.IResolvable);
    resetDeleteEip(): void;
    get deleteEipInput(): boolean | cdktf.IResolvable;
    private _ebsOptimized?;
    get ebsOptimized(): boolean | cdktf.IResolvable;
    set ebsOptimized(value: boolean | cdktf.IResolvable);
    resetEbsOptimized(): void;
    get ebsOptimizedInput(): boolean | cdktf.IResolvable;
    get ec2InstanceId(): string;
    private _ecsClusterArn?;
    get ecsClusterArn(): string;
    set ecsClusterArn(value: string);
    resetEcsClusterArn(): void;
    get ecsClusterArnInput(): string;
    private _elasticIp?;
    get elasticIp(): string;
    set elasticIp(value: string);
    resetElasticIp(): void;
    get elasticIpInput(): string;
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    resetHostname(): void;
    get hostnameInput(): string;
    get id(): string;
    private _infrastructureClass?;
    get infrastructureClass(): string;
    set infrastructureClass(value: string);
    resetInfrastructureClass(): void;
    get infrastructureClassInput(): string;
    private _installUpdatesOnBoot?;
    get installUpdatesOnBoot(): boolean | cdktf.IResolvable;
    set installUpdatesOnBoot(value: boolean | cdktf.IResolvable);
    resetInstallUpdatesOnBoot(): void;
    get installUpdatesOnBootInput(): boolean | cdktf.IResolvable;
    private _instanceProfileArn?;
    get instanceProfileArn(): string;
    set instanceProfileArn(value: string);
    resetInstanceProfileArn(): void;
    get instanceProfileArnInput(): string;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string;
    private _lastServiceErrorId?;
    get lastServiceErrorId(): string;
    set lastServiceErrorId(value: string);
    resetLastServiceErrorId(): void;
    get lastServiceErrorIdInput(): string;
    private _layerIds?;
    get layerIds(): string[];
    set layerIds(value: string[]);
    get layerIdsInput(): string[];
    private _os?;
    get os(): string;
    set os(value: string);
    resetOs(): void;
    get osInput(): string;
    private _platform?;
    get platform(): string;
    set platform(value: string);
    resetPlatform(): void;
    get platformInput(): string;
    private _privateDns?;
    get privateDns(): string;
    set privateDns(value: string);
    resetPrivateDns(): void;
    get privateDnsInput(): string;
    private _privateIp?;
    get privateIp(): string;
    set privateIp(value: string);
    resetPrivateIp(): void;
    get privateIpInput(): string;
    private _publicDns?;
    get publicDns(): string;
    set publicDns(value: string);
    resetPublicDns(): void;
    get publicDnsInput(): string;
    private _publicIp?;
    get publicIp(): string;
    set publicIp(value: string);
    resetPublicIp(): void;
    get publicIpInput(): string;
    private _registeredBy?;
    get registeredBy(): string;
    set registeredBy(value: string);
    resetRegisteredBy(): void;
    get registeredByInput(): string;
    private _reportedAgentVersion?;
    get reportedAgentVersion(): string;
    set reportedAgentVersion(value: string);
    resetReportedAgentVersion(): void;
    get reportedAgentVersionInput(): string;
    private _reportedOsFamily?;
    get reportedOsFamily(): string;
    set reportedOsFamily(value: string);
    resetReportedOsFamily(): void;
    get reportedOsFamilyInput(): string;
    private _reportedOsName?;
    get reportedOsName(): string;
    set reportedOsName(value: string);
    resetReportedOsName(): void;
    get reportedOsNameInput(): string;
    private _reportedOsVersion?;
    get reportedOsVersion(): string;
    set reportedOsVersion(value: string);
    resetReportedOsVersion(): void;
    get reportedOsVersionInput(): string;
    private _rootDeviceType?;
    get rootDeviceType(): string;
    set rootDeviceType(value: string);
    resetRootDeviceType(): void;
    get rootDeviceTypeInput(): string;
    private _rootDeviceVolumeId?;
    get rootDeviceVolumeId(): string;
    set rootDeviceVolumeId(value: string);
    resetRootDeviceVolumeId(): void;
    get rootDeviceVolumeIdInput(): string;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[];
    private _sshHostDsaKeyFingerprint?;
    get sshHostDsaKeyFingerprint(): string;
    set sshHostDsaKeyFingerprint(value: string);
    resetSshHostDsaKeyFingerprint(): void;
    get sshHostDsaKeyFingerprintInput(): string;
    private _sshHostRsaKeyFingerprint?;
    get sshHostRsaKeyFingerprint(): string;
    set sshHostRsaKeyFingerprint(value: string);
    resetSshHostRsaKeyFingerprint(): void;
    get sshHostRsaKeyFingerprintInput(): string;
    private _sshKeyName?;
    get sshKeyName(): string;
    set sshKeyName(value: string);
    resetSshKeyName(): void;
    get sshKeyNameInput(): string;
    private _stackId?;
    get stackId(): string;
    set stackId(value: string);
    get stackIdInput(): string;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string;
    private _tenancy?;
    get tenancy(): string;
    set tenancy(value: string);
    resetTenancy(): void;
    get tenancyInput(): string;
    private _virtualizationType?;
    get virtualizationType(): string;
    set virtualizationType(value: string);
    resetVirtualizationType(): void;
    get virtualizationTypeInput(): string;
    private _ebsBlockDevice?;
    get ebsBlockDevice(): OpsworksInstanceEbsBlockDevice[];
    set ebsBlockDevice(value: OpsworksInstanceEbsBlockDevice[]);
    resetEbsBlockDevice(): void;
    get ebsBlockDeviceInput(): OpsworksInstanceEbsBlockDevice[];
    private _ephemeralBlockDevice?;
    get ephemeralBlockDevice(): OpsworksInstanceEphemeralBlockDevice[];
    set ephemeralBlockDevice(value: OpsworksInstanceEphemeralBlockDevice[]);
    resetEphemeralBlockDevice(): void;
    get ephemeralBlockDeviceInput(): OpsworksInstanceEphemeralBlockDevice[];
    private _rootBlockDevice?;
    get rootBlockDevice(): OpsworksInstanceRootBlockDevice[];
    set rootBlockDevice(value: OpsworksInstanceRootBlockDevice[]);
    resetRootBlockDevice(): void;
    get rootBlockDeviceInput(): OpsworksInstanceRootBlockDevice[];
    private _timeouts;
    get timeouts(): OpsworksInstanceTimeoutsOutputReference;
    putTimeouts(value: OpsworksInstanceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): OpsworksInstanceTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=opsworks-instance.d.ts.map