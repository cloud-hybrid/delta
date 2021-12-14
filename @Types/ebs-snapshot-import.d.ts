import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface EbsSnapshotImportConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#description EbsSnapshotImport#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#encrypted EbsSnapshotImport#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#kms_key_id EbsSnapshotImport#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#role_name EbsSnapshotImport#role_name}
    */
    readonly roleName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#tags EbsSnapshotImport#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#tags_all EbsSnapshotImport#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * client_data block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#client_data EbsSnapshotImport#client_data}
    */
    readonly clientData?: EbsSnapshotImportClientData;
    /**
    * disk_container block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#disk_container EbsSnapshotImport#disk_container}
    */
    readonly diskContainer: EbsSnapshotImportDiskContainer;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#timeouts EbsSnapshotImport#timeouts}
    */
    readonly timeouts?: EbsSnapshotImportTimeouts;
}
export interface EbsSnapshotImportClientData {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#comment EbsSnapshotImport#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#upload_end EbsSnapshotImport#upload_end}
    */
    readonly uploadEnd?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#upload_size EbsSnapshotImport#upload_size}
    */
    readonly uploadSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#upload_start EbsSnapshotImport#upload_start}
    */
    readonly uploadStart?: string;
}
export declare function ebsSnapshotImportClientDataToTerraform(struct?: EbsSnapshotImportClientDataOutputReference | EbsSnapshotImportClientData): any;
export declare class EbsSnapshotImportClientDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EbsSnapshotImportClientData | undefined;
    set internalValue(value: EbsSnapshotImportClientData | undefined);
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string;
    private _uploadEnd?;
    get uploadEnd(): string;
    set uploadEnd(value: string);
    resetUploadEnd(): void;
    get uploadEndInput(): string;
    private _uploadSize?;
    get uploadSize(): number;
    set uploadSize(value: number);
    resetUploadSize(): void;
    get uploadSizeInput(): number;
    private _uploadStart?;
    get uploadStart(): string;
    set uploadStart(value: string);
    resetUploadStart(): void;
    get uploadStartInput(): string;
}
export interface EbsSnapshotImportDiskContainerUserBucket {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#s3_bucket EbsSnapshotImport#s3_bucket}
    */
    readonly s3Bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#s3_key EbsSnapshotImport#s3_key}
    */
    readonly s3Key: string;
}
export declare function ebsSnapshotImportDiskContainerUserBucketToTerraform(struct?: EbsSnapshotImportDiskContainerUserBucketOutputReference | EbsSnapshotImportDiskContainerUserBucket): any;
export declare class EbsSnapshotImportDiskContainerUserBucketOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EbsSnapshotImportDiskContainerUserBucket | undefined;
    set internalValue(value: EbsSnapshotImportDiskContainerUserBucket | undefined);
    private _s3Bucket?;
    get s3Bucket(): string;
    set s3Bucket(value: string);
    get s3BucketInput(): string;
    private _s3Key?;
    get s3Key(): string;
    set s3Key(value: string);
    get s3KeyInput(): string;
}
export interface EbsSnapshotImportDiskContainer {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#description EbsSnapshotImport#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#format EbsSnapshotImport#format}
    */
    readonly format: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#url EbsSnapshotImport#url}
    */
    readonly url?: string;
    /**
    * user_bucket block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#user_bucket EbsSnapshotImport#user_bucket}
    */
    readonly userBucket?: EbsSnapshotImportDiskContainerUserBucket;
}
export declare function ebsSnapshotImportDiskContainerToTerraform(struct?: EbsSnapshotImportDiskContainerOutputReference | EbsSnapshotImportDiskContainer): any;
export declare class EbsSnapshotImportDiskContainerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EbsSnapshotImportDiskContainer | undefined;
    set internalValue(value: EbsSnapshotImportDiskContainer | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _format?;
    get format(): string;
    set format(value: string);
    get formatInput(): string;
    private _url?;
    get url(): string;
    set url(value: string);
    resetUrl(): void;
    get urlInput(): string;
    private _userBucket;
    get userBucket(): EbsSnapshotImportDiskContainerUserBucketOutputReference;
    putUserBucket(value: EbsSnapshotImportDiskContainerUserBucket): void;
    resetUserBucket(): void;
    get userBucketInput(): EbsSnapshotImportDiskContainerUserBucket;
}
export interface EbsSnapshotImportTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#create EbsSnapshotImport#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#delete EbsSnapshotImport#delete}
    */
    readonly delete?: string;
}
export declare function ebsSnapshotImportTimeoutsToTerraform(struct?: EbsSnapshotImportTimeoutsOutputReference | EbsSnapshotImportTimeouts): any;
export declare class EbsSnapshotImportTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EbsSnapshotImportTimeouts | undefined;
    set internalValue(value: EbsSnapshotImportTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html aws_ebs_snapshot_import}
*/
export declare class EbsSnapshotImport extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html aws_ebs_snapshot_import} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EbsSnapshotImportConfig
    */
    constructor(scope: Construct, id: string, config: EbsSnapshotImportConfig);
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
    private _roleName?;
    get roleName(): string;
    set roleName(value: string);
    resetRoleName(): void;
    get roleNameInput(): string;
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
    get volumeSize(): number;
    private _clientData;
    get clientData(): EbsSnapshotImportClientDataOutputReference;
    putClientData(value: EbsSnapshotImportClientData): void;
    resetClientData(): void;
    get clientDataInput(): EbsSnapshotImportClientData;
    private _diskContainer;
    get diskContainer(): EbsSnapshotImportDiskContainerOutputReference;
    putDiskContainer(value: EbsSnapshotImportDiskContainer): void;
    get diskContainerInput(): EbsSnapshotImportDiskContainer;
    private _timeouts;
    get timeouts(): EbsSnapshotImportTimeoutsOutputReference;
    putTimeouts(value: EbsSnapshotImportTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): EbsSnapshotImportTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ebs-snapshot-import.d.ts.map