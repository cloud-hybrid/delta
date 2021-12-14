import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EFS
*/
export interface EfsFileSystemConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#availability_zone_name EfsFileSystem#availability_zone_name}
    */
    readonly availabilityZoneName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#creation_token EfsFileSystem#creation_token}
    */
    readonly creationToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#encrypted EfsFileSystem#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#kms_key_id EfsFileSystem#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#performance_mode EfsFileSystem#performance_mode}
    */
    readonly performanceMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#provisioned_throughput_in_mibps EfsFileSystem#provisioned_throughput_in_mibps}
    */
    readonly provisionedThroughputInMibps?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#tags EfsFileSystem#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#tags_all EfsFileSystem#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#throughput_mode EfsFileSystem#throughput_mode}
    */
    readonly throughputMode?: string;
    /**
    * lifecycle_policy block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#lifecycle_policy EfsFileSystem#lifecycle_policy}
    */
    readonly lifecyclePolicy?: EfsFileSystemLifecyclePolicy[];
}
export declare class EfsFileSystemSizeInBytes extends cdktf.ComplexComputedList {
    get value(): number;
    get valueInIa(): number;
    get valueInStandard(): number;
}
export interface EfsFileSystemLifecyclePolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#transition_to_ia EfsFileSystem#transition_to_ia}
    */
    readonly transitionToIa?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#transition_to_primary_storage_class EfsFileSystem#transition_to_primary_storage_class}
    */
    readonly transitionToPrimaryStorageClass?: string;
}
export declare function efsFileSystemLifecyclePolicyToTerraform(struct?: EfsFileSystemLifecyclePolicy): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html aws_efs_file_system}
*/
export declare class EfsFileSystem extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html aws_efs_file_system} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EfsFileSystemConfig = {}
    */
    constructor(scope: Construct, id: string, config?: EfsFileSystemConfig);
    get arn(): string;
    get availabilityZoneId(): string;
    private _availabilityZoneName?;
    get availabilityZoneName(): string;
    set availabilityZoneName(value: string);
    resetAvailabilityZoneName(): void;
    get availabilityZoneNameInput(): string;
    private _creationToken?;
    get creationToken(): string;
    set creationToken(value: string);
    resetCreationToken(): void;
    get creationTokenInput(): string;
    get dnsName(): string;
    private _encrypted?;
    get encrypted(): boolean | cdktf.IResolvable;
    set encrypted(value: boolean | cdktf.IResolvable);
    resetEncrypted(): void;
    get encryptedInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string;
    get numberOfMountTargets(): number;
    get ownerId(): string;
    private _performanceMode?;
    get performanceMode(): string;
    set performanceMode(value: string);
    resetPerformanceMode(): void;
    get performanceModeInput(): string;
    private _provisionedThroughputInMibps?;
    get provisionedThroughputInMibps(): number;
    set provisionedThroughputInMibps(value: number);
    resetProvisionedThroughputInMibps(): void;
    get provisionedThroughputInMibpsInput(): number;
    sizeInBytes(index: string): EfsFileSystemSizeInBytes;
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
    private _throughputMode?;
    get throughputMode(): string;
    set throughputMode(value: string);
    resetThroughputMode(): void;
    get throughputModeInput(): string;
    private _lifecyclePolicy?;
    get lifecyclePolicy(): EfsFileSystemLifecyclePolicy[];
    set lifecyclePolicy(value: EfsFileSystemLifecyclePolicy[]);
    resetLifecyclePolicy(): void;
    get lifecyclePolicyInput(): EfsFileSystemLifecyclePolicy[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=efs-file-system.d.ts.map