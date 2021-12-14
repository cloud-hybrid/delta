import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface EbsSnapshotCopyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html#description EbsSnapshotCopy#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html#encrypted EbsSnapshotCopy#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html#kms_key_id EbsSnapshotCopy#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html#source_region EbsSnapshotCopy#source_region}
    */
    readonly sourceRegion: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html#source_snapshot_id EbsSnapshotCopy#source_snapshot_id}
    */
    readonly sourceSnapshotId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html#tags EbsSnapshotCopy#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html#tags_all EbsSnapshotCopy#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html aws_ebs_snapshot_copy}
*/
export declare class EbsSnapshotCopy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html aws_ebs_snapshot_copy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EbsSnapshotCopyConfig
    */
    constructor(scope: Construct, id: string, config: EbsSnapshotCopyConfig);
    get arn(): string;
    get dataEncryptionKeyId(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
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
    get ownerAlias(): string;
    get ownerId(): string;
    private _sourceRegion?;
    get sourceRegion(): string;
    set sourceRegion(value: string);
    get sourceRegionInput(): string;
    private _sourceSnapshotId?;
    get sourceSnapshotId(): string;
    set sourceSnapshotId(value: string);
    get sourceSnapshotIdInput(): string;
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
    get volumeId(): string;
    get volumeSize(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ebs-snapshot-copy.d.ts.map