import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Storage Gateway
*/
export interface StoragegatewayNfsFileShareConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#audit_destination_arn StoragegatewayNfsFileShare#audit_destination_arn}
    */
    readonly auditDestinationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#client_list StoragegatewayNfsFileShare#client_list}
    */
    readonly clientList: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#default_storage_class StoragegatewayNfsFileShare#default_storage_class}
    */
    readonly defaultStorageClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#file_share_name StoragegatewayNfsFileShare#file_share_name}
    */
    readonly fileShareName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#gateway_arn StoragegatewayNfsFileShare#gateway_arn}
    */
    readonly gatewayArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#guess_mime_type_enabled StoragegatewayNfsFileShare#guess_mime_type_enabled}
    */
    readonly guessMimeTypeEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#kms_encrypted StoragegatewayNfsFileShare#kms_encrypted}
    */
    readonly kmsEncrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#kms_key_arn StoragegatewayNfsFileShare#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#location_arn StoragegatewayNfsFileShare#location_arn}
    */
    readonly locationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#notification_policy StoragegatewayNfsFileShare#notification_policy}
    */
    readonly notificationPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#object_acl StoragegatewayNfsFileShare#object_acl}
    */
    readonly objectAcl?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#read_only StoragegatewayNfsFileShare#read_only}
    */
    readonly readOnly?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#requester_pays StoragegatewayNfsFileShare#requester_pays}
    */
    readonly requesterPays?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#role_arn StoragegatewayNfsFileShare#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#squash StoragegatewayNfsFileShare#squash}
    */
    readonly squash?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#tags StoragegatewayNfsFileShare#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#tags_all StoragegatewayNfsFileShare#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * cache_attributes block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#cache_attributes StoragegatewayNfsFileShare#cache_attributes}
    */
    readonly cacheAttributes?: StoragegatewayNfsFileShareCacheAttributes;
    /**
    * nfs_file_share_defaults block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#nfs_file_share_defaults StoragegatewayNfsFileShare#nfs_file_share_defaults}
    */
    readonly nfsFileShareDefaults?: StoragegatewayNfsFileShareNfsFileShareDefaults;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#timeouts StoragegatewayNfsFileShare#timeouts}
    */
    readonly timeouts?: StoragegatewayNfsFileShareTimeouts;
}
export interface StoragegatewayNfsFileShareCacheAttributes {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#cache_stale_timeout_in_seconds StoragegatewayNfsFileShare#cache_stale_timeout_in_seconds}
    */
    readonly cacheStaleTimeoutInSeconds?: number;
}
export declare function storagegatewayNfsFileShareCacheAttributesToTerraform(struct?: StoragegatewayNfsFileShareCacheAttributesOutputReference | StoragegatewayNfsFileShareCacheAttributes): any;
export declare class StoragegatewayNfsFileShareCacheAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): StoragegatewayNfsFileShareCacheAttributes | undefined;
    set internalValue(value: StoragegatewayNfsFileShareCacheAttributes | undefined);
    private _cacheStaleTimeoutInSeconds?;
    get cacheStaleTimeoutInSeconds(): number;
    set cacheStaleTimeoutInSeconds(value: number);
    resetCacheStaleTimeoutInSeconds(): void;
    get cacheStaleTimeoutInSecondsInput(): number;
}
export interface StoragegatewayNfsFileShareNfsFileShareDefaults {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#directory_mode StoragegatewayNfsFileShare#directory_mode}
    */
    readonly directoryMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#file_mode StoragegatewayNfsFileShare#file_mode}
    */
    readonly fileMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#group_id StoragegatewayNfsFileShare#group_id}
    */
    readonly groupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#owner_id StoragegatewayNfsFileShare#owner_id}
    */
    readonly ownerId?: string;
}
export declare function storagegatewayNfsFileShareNfsFileShareDefaultsToTerraform(struct?: StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference | StoragegatewayNfsFileShareNfsFileShareDefaults): any;
export declare class StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): StoragegatewayNfsFileShareNfsFileShareDefaults | undefined;
    set internalValue(value: StoragegatewayNfsFileShareNfsFileShareDefaults | undefined);
    private _directoryMode?;
    get directoryMode(): string;
    set directoryMode(value: string);
    resetDirectoryMode(): void;
    get directoryModeInput(): string;
    private _fileMode?;
    get fileMode(): string;
    set fileMode(value: string);
    resetFileMode(): void;
    get fileModeInput(): string;
    private _groupId?;
    get groupId(): string;
    set groupId(value: string);
    resetGroupId(): void;
    get groupIdInput(): string;
    private _ownerId?;
    get ownerId(): string;
    set ownerId(value: string);
    resetOwnerId(): void;
    get ownerIdInput(): string;
}
export interface StoragegatewayNfsFileShareTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#create StoragegatewayNfsFileShare#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#delete StoragegatewayNfsFileShare#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#update StoragegatewayNfsFileShare#update}
    */
    readonly update?: string;
}
export declare function storagegatewayNfsFileShareTimeoutsToTerraform(struct?: StoragegatewayNfsFileShareTimeoutsOutputReference | StoragegatewayNfsFileShareTimeouts): any;
export declare class StoragegatewayNfsFileShareTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): StoragegatewayNfsFileShareTimeouts | undefined;
    set internalValue(value: StoragegatewayNfsFileShareTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html aws_storagegateway_nfs_file_share}
*/
export declare class StoragegatewayNfsFileShare extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html aws_storagegateway_nfs_file_share} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewayNfsFileShareConfig
    */
    constructor(scope: Construct, id: string, config: StoragegatewayNfsFileShareConfig);
    get arn(): string;
    private _auditDestinationArn?;
    get auditDestinationArn(): string;
    set auditDestinationArn(value: string);
    resetAuditDestinationArn(): void;
    get auditDestinationArnInput(): string;
    private _clientList?;
    get clientList(): string[];
    set clientList(value: string[]);
    get clientListInput(): string[];
    private _defaultStorageClass?;
    get defaultStorageClass(): string;
    set defaultStorageClass(value: string);
    resetDefaultStorageClass(): void;
    get defaultStorageClassInput(): string;
    private _fileShareName?;
    get fileShareName(): string;
    set fileShareName(value: string);
    resetFileShareName(): void;
    get fileShareNameInput(): string;
    get fileshareId(): string;
    private _gatewayArn?;
    get gatewayArn(): string;
    set gatewayArn(value: string);
    get gatewayArnInput(): string;
    private _guessMimeTypeEnabled?;
    get guessMimeTypeEnabled(): boolean | cdktf.IResolvable;
    set guessMimeTypeEnabled(value: boolean | cdktf.IResolvable);
    resetGuessMimeTypeEnabled(): void;
    get guessMimeTypeEnabledInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _kmsEncrypted?;
    get kmsEncrypted(): boolean | cdktf.IResolvable;
    set kmsEncrypted(value: boolean | cdktf.IResolvable);
    resetKmsEncrypted(): void;
    get kmsEncryptedInput(): boolean | cdktf.IResolvable;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string;
    private _locationArn?;
    get locationArn(): string;
    set locationArn(value: string);
    get locationArnInput(): string;
    private _notificationPolicy?;
    get notificationPolicy(): string;
    set notificationPolicy(value: string);
    resetNotificationPolicy(): void;
    get notificationPolicyInput(): string;
    private _objectAcl?;
    get objectAcl(): string;
    set objectAcl(value: string);
    resetObjectAcl(): void;
    get objectAclInput(): string;
    get path(): string;
    private _readOnly?;
    get readOnly(): boolean | cdktf.IResolvable;
    set readOnly(value: boolean | cdktf.IResolvable);
    resetReadOnly(): void;
    get readOnlyInput(): boolean | cdktf.IResolvable;
    private _requesterPays?;
    get requesterPays(): boolean | cdktf.IResolvable;
    set requesterPays(value: boolean | cdktf.IResolvable);
    resetRequesterPays(): void;
    get requesterPaysInput(): boolean | cdktf.IResolvable;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _squash?;
    get squash(): string;
    set squash(value: string);
    resetSquash(): void;
    get squashInput(): string;
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
    private _cacheAttributes;
    get cacheAttributes(): StoragegatewayNfsFileShareCacheAttributesOutputReference;
    putCacheAttributes(value: StoragegatewayNfsFileShareCacheAttributes): void;
    resetCacheAttributes(): void;
    get cacheAttributesInput(): StoragegatewayNfsFileShareCacheAttributes;
    private _nfsFileShareDefaults;
    get nfsFileShareDefaults(): StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference;
    putNfsFileShareDefaults(value: StoragegatewayNfsFileShareNfsFileShareDefaults): void;
    resetNfsFileShareDefaults(): void;
    get nfsFileShareDefaultsInput(): StoragegatewayNfsFileShareNfsFileShareDefaults;
    private _timeouts;
    get timeouts(): StoragegatewayNfsFileShareTimeoutsOutputReference;
    putTimeouts(value: StoragegatewayNfsFileShareTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): StoragegatewayNfsFileShareTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=storagegateway-nfs-file-share.d.ts.map