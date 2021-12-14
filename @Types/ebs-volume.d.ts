import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface EbsVolumeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_volume.html#availability_zone EbsVolume#availability_zone}
    */
    readonly availabilityZone: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_volume.html#encrypted EbsVolume#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_volume.html#iops EbsVolume#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_volume.html#kms_key_id EbsVolume#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_volume.html#multi_attach_enabled EbsVolume#multi_attach_enabled}
    */
    readonly multiAttachEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_volume.html#outpost_arn EbsVolume#outpost_arn}
    */
    readonly outpostArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_volume.html#size EbsVolume#size}
    */
    readonly size?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_volume.html#snapshot_id EbsVolume#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_volume.html#tags EbsVolume#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_volume.html#tags_all EbsVolume#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_volume.html#throughput EbsVolume#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_volume.html#type EbsVolume#type}
    */
    readonly type?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_volume.html aws_ebs_volume}
*/
export declare class EbsVolume extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ebs_volume.html aws_ebs_volume} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EbsVolumeConfig
    */
    constructor(scope: Construct, id: string, config: EbsVolumeConfig);
    get arn(): string;
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    get availabilityZoneInput(): string;
    private _encrypted?;
    get encrypted(): boolean | cdktf.IResolvable;
    set encrypted(value: boolean | cdktf.IResolvable);
    resetEncrypted(): void;
    get encryptedInput(): boolean | cdktf.IResolvable;
    get id(): string;
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
    private _multiAttachEnabled?;
    get multiAttachEnabled(): boolean | cdktf.IResolvable;
    set multiAttachEnabled(value: boolean | cdktf.IResolvable);
    resetMultiAttachEnabled(): void;
    get multiAttachEnabledInput(): boolean | cdktf.IResolvable;
    private _outpostArn?;
    get outpostArn(): string;
    set outpostArn(value: string);
    resetOutpostArn(): void;
    get outpostArnInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    resetSize(): void;
    get sizeInput(): number;
    private _snapshotId?;
    get snapshotId(): string;
    set snapshotId(value: string);
    resetSnapshotId(): void;
    get snapshotIdInput(): string;
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
    private _throughput?;
    get throughput(): number;
    set throughput(value: number);
    resetThroughput(): void;
    get throughputInput(): number;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ebs-volume.d.ts.map