import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS File System FSx
*/
export interface FsxOntapFileSystemConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#automatic_backup_retention_days FsxOntapFileSystem#automatic_backup_retention_days}
    */
    readonly automaticBackupRetentionDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#daily_automatic_backup_start_time FsxOntapFileSystem#daily_automatic_backup_start_time}
    */
    readonly dailyAutomaticBackupStartTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#deployment_type FsxOntapFileSystem#deployment_type}
    */
    readonly deploymentType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#endpoint_ip_address_range FsxOntapFileSystem#endpoint_ip_address_range}
    */
    readonly endpointIpAddressRange?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#fsx_admin_password FsxOntapFileSystem#fsx_admin_password}
    */
    readonly fsxAdminPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#kms_key_id FsxOntapFileSystem#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#preferred_subnet_id FsxOntapFileSystem#preferred_subnet_id}
    */
    readonly preferredSubnetId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#route_table_ids FsxOntapFileSystem#route_table_ids}
    */
    readonly routeTableIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#security_group_ids FsxOntapFileSystem#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#storage_capacity FsxOntapFileSystem#storage_capacity}
    */
    readonly storageCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#storage_type FsxOntapFileSystem#storage_type}
    */
    readonly storageType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#subnet_ids FsxOntapFileSystem#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#tags FsxOntapFileSystem#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#tags_all FsxOntapFileSystem#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#throughput_capacity FsxOntapFileSystem#throughput_capacity}
    */
    readonly throughputCapacity: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#weekly_maintenance_start_time FsxOntapFileSystem#weekly_maintenance_start_time}
    */
    readonly weeklyMaintenanceStartTime?: string;
    /**
    * disk_iops_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#disk_iops_configuration FsxOntapFileSystem#disk_iops_configuration}
    */
    readonly diskIopsConfiguration?: FsxOntapFileSystemDiskIopsConfiguration;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#timeouts FsxOntapFileSystem#timeouts}
    */
    readonly timeouts?: FsxOntapFileSystemTimeouts;
}
export declare class FsxOntapFileSystemEndpointsIntercluster extends cdktf.ComplexComputedList {
    get dnsName(): string;
    get ipAddresses(): string[];
}
export declare class FsxOntapFileSystemEndpointsManagement extends cdktf.ComplexComputedList {
    get dnsName(): string;
    get ipAddresses(): string[];
}
export declare class FsxOntapFileSystemEndpoints extends cdktf.ComplexComputedList {
    get intercluster(): any;
    get management(): any;
}
export interface FsxOntapFileSystemDiskIopsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#iops FsxOntapFileSystem#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#mode FsxOntapFileSystem#mode}
    */
    readonly mode?: string;
}
export declare function fsxOntapFileSystemDiskIopsConfigurationToTerraform(struct?: FsxOntapFileSystemDiskIopsConfigurationOutputReference | FsxOntapFileSystemDiskIopsConfiguration): any;
export declare class FsxOntapFileSystemDiskIopsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): FsxOntapFileSystemDiskIopsConfiguration | undefined;
    set internalValue(value: FsxOntapFileSystemDiskIopsConfiguration | undefined);
    private _iops?;
    get iops(): number;
    set iops(value: number);
    resetIops(): void;
    get iopsInput(): number;
    private _mode?;
    get mode(): string;
    set mode(value: string);
    resetMode(): void;
    get modeInput(): string;
}
export interface FsxOntapFileSystemTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#create FsxOntapFileSystem#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#delete FsxOntapFileSystem#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#update FsxOntapFileSystem#update}
    */
    readonly update?: string;
}
export declare function fsxOntapFileSystemTimeoutsToTerraform(struct?: FsxOntapFileSystemTimeoutsOutputReference | FsxOntapFileSystemTimeouts): any;
export declare class FsxOntapFileSystemTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): FsxOntapFileSystemTimeouts | undefined;
    set internalValue(value: FsxOntapFileSystemTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html aws_fsx_ontap_file_system}
*/
export declare class FsxOntapFileSystem extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html aws_fsx_ontap_file_system} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FsxOntapFileSystemConfig
    */
    constructor(scope: Construct, id: string, config: FsxOntapFileSystemConfig);
    get arn(): string;
    private _automaticBackupRetentionDays?;
    get automaticBackupRetentionDays(): number;
    set automaticBackupRetentionDays(value: number);
    resetAutomaticBackupRetentionDays(): void;
    get automaticBackupRetentionDaysInput(): number;
    private _dailyAutomaticBackupStartTime?;
    get dailyAutomaticBackupStartTime(): string;
    set dailyAutomaticBackupStartTime(value: string);
    resetDailyAutomaticBackupStartTime(): void;
    get dailyAutomaticBackupStartTimeInput(): string;
    private _deploymentType?;
    get deploymentType(): string;
    set deploymentType(value: string);
    get deploymentTypeInput(): string;
    get dnsName(): string;
    private _endpointIpAddressRange?;
    get endpointIpAddressRange(): string;
    set endpointIpAddressRange(value: string);
    resetEndpointIpAddressRange(): void;
    get endpointIpAddressRangeInput(): string;
    endpoints(index: string): FsxOntapFileSystemEndpoints;
    private _fsxAdminPassword?;
    get fsxAdminPassword(): string;
    set fsxAdminPassword(value: string);
    resetFsxAdminPassword(): void;
    get fsxAdminPasswordInput(): string;
    get id(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string;
    get networkInterfaceIds(): string[];
    get ownerId(): string;
    private _preferredSubnetId?;
    get preferredSubnetId(): string;
    set preferredSubnetId(value: string);
    get preferredSubnetIdInput(): string;
    private _routeTableIds?;
    get routeTableIds(): string[];
    set routeTableIds(value: string[]);
    resetRouteTableIds(): void;
    get routeTableIdsInput(): string[];
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[];
    private _storageCapacity?;
    get storageCapacity(): number;
    set storageCapacity(value: number);
    resetStorageCapacity(): void;
    get storageCapacityInput(): number;
    private _storageType?;
    get storageType(): string;
    set storageType(value: string);
    resetStorageType(): void;
    get storageTypeInput(): string;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[];
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
    private _throughputCapacity?;
    get throughputCapacity(): number;
    set throughputCapacity(value: number);
    get throughputCapacityInput(): number;
    get vpcId(): string;
    private _weeklyMaintenanceStartTime?;
    get weeklyMaintenanceStartTime(): string;
    set weeklyMaintenanceStartTime(value: string);
    resetWeeklyMaintenanceStartTime(): void;
    get weeklyMaintenanceStartTimeInput(): string;
    private _diskIopsConfiguration;
    get diskIopsConfiguration(): FsxOntapFileSystemDiskIopsConfigurationOutputReference;
    putDiskIopsConfiguration(value: FsxOntapFileSystemDiskIopsConfiguration): void;
    resetDiskIopsConfiguration(): void;
    get diskIopsConfigurationInput(): FsxOntapFileSystemDiskIopsConfiguration;
    private _timeouts;
    get timeouts(): FsxOntapFileSystemTimeoutsOutputReference;
    putTimeouts(value: FsxOntapFileSystemTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): FsxOntapFileSystemTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=fsx-ontap-file-system.d.ts.map