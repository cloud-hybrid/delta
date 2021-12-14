import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Storage Gateway
*/
export interface StoragegatewaySmbFileShareConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#access_based_enumeration StoragegatewaySmbFileShare#access_based_enumeration}
    */
    readonly accessBasedEnumeration?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#admin_user_list StoragegatewaySmbFileShare#admin_user_list}
    */
    readonly adminUserList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#audit_destination_arn StoragegatewaySmbFileShare#audit_destination_arn}
    */
    readonly auditDestinationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#authentication StoragegatewaySmbFileShare#authentication}
    */
    readonly authentication?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#bucket_region StoragegatewaySmbFileShare#bucket_region}
    */
    readonly bucketRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#case_sensitivity StoragegatewaySmbFileShare#case_sensitivity}
    */
    readonly caseSensitivity?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#default_storage_class StoragegatewaySmbFileShare#default_storage_class}
    */
    readonly defaultStorageClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#file_share_name StoragegatewaySmbFileShare#file_share_name}
    */
    readonly fileShareName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#gateway_arn StoragegatewaySmbFileShare#gateway_arn}
    */
    readonly gatewayArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#guess_mime_type_enabled StoragegatewaySmbFileShare#guess_mime_type_enabled}
    */
    readonly guessMimeTypeEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#invalid_user_list StoragegatewaySmbFileShare#invalid_user_list}
    */
    readonly invalidUserList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#kms_encrypted StoragegatewaySmbFileShare#kms_encrypted}
    */
    readonly kmsEncrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#kms_key_arn StoragegatewaySmbFileShare#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#location_arn StoragegatewaySmbFileShare#location_arn}
    */
    readonly locationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#notification_policy StoragegatewaySmbFileShare#notification_policy}
    */
    readonly notificationPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#object_acl StoragegatewaySmbFileShare#object_acl}
    */
    readonly objectAcl?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#oplocks_enabled StoragegatewaySmbFileShare#oplocks_enabled}
    */
    readonly oplocksEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#read_only StoragegatewaySmbFileShare#read_only}
    */
    readonly readOnly?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#requester_pays StoragegatewaySmbFileShare#requester_pays}
    */
    readonly requesterPays?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#role_arn StoragegatewaySmbFileShare#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#smb_acl_enabled StoragegatewaySmbFileShare#smb_acl_enabled}
    */
    readonly smbAclEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#tags StoragegatewaySmbFileShare#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#tags_all StoragegatewaySmbFileShare#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#valid_user_list StoragegatewaySmbFileShare#valid_user_list}
    */
    readonly validUserList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#vpc_endpoint_dns_name StoragegatewaySmbFileShare#vpc_endpoint_dns_name}
    */
    readonly vpcEndpointDnsName?: string;
    /**
    * cache_attributes block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#cache_attributes StoragegatewaySmbFileShare#cache_attributes}
    */
    readonly cacheAttributes?: StoragegatewaySmbFileShareCacheAttributes;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#timeouts StoragegatewaySmbFileShare#timeouts}
    */
    readonly timeouts?: StoragegatewaySmbFileShareTimeouts;
}
export interface StoragegatewaySmbFileShareCacheAttributes {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#cache_stale_timeout_in_seconds StoragegatewaySmbFileShare#cache_stale_timeout_in_seconds}
    */
    readonly cacheStaleTimeoutInSeconds?: number;
}
export declare function storagegatewaySmbFileShareCacheAttributesToTerraform(struct?: StoragegatewaySmbFileShareCacheAttributesOutputReference | StoragegatewaySmbFileShareCacheAttributes): any;
export declare class StoragegatewaySmbFileShareCacheAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): StoragegatewaySmbFileShareCacheAttributes | undefined;
    set internalValue(value: StoragegatewaySmbFileShareCacheAttributes | undefined);
    private _cacheStaleTimeoutInSeconds?;
    get cacheStaleTimeoutInSeconds(): number;
    set cacheStaleTimeoutInSeconds(value: number);
    resetCacheStaleTimeoutInSeconds(): void;
    get cacheStaleTimeoutInSecondsInput(): number;
}
export interface StoragegatewaySmbFileShareTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#create StoragegatewaySmbFileShare#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#delete StoragegatewaySmbFileShare#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#update StoragegatewaySmbFileShare#update}
    */
    readonly update?: string;
}
export declare function storagegatewaySmbFileShareTimeoutsToTerraform(struct?: StoragegatewaySmbFileShareTimeoutsOutputReference | StoragegatewaySmbFileShareTimeouts): any;
export declare class StoragegatewaySmbFileShareTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): StoragegatewaySmbFileShareTimeouts | undefined;
    set internalValue(value: StoragegatewaySmbFileShareTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html aws_storagegateway_smb_file_share}
*/
export declare class StoragegatewaySmbFileShare extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html aws_storagegateway_smb_file_share} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewaySmbFileShareConfig
    */
    constructor(scope: Construct, id: string, config: StoragegatewaySmbFileShareConfig);
    private _accessBasedEnumeration?;
    get accessBasedEnumeration(): boolean | cdktf.IResolvable;
    set accessBasedEnumeration(value: boolean | cdktf.IResolvable);
    resetAccessBasedEnumeration(): void;
    get accessBasedEnumerationInput(): boolean | cdktf.IResolvable;
    private _adminUserList?;
    get adminUserList(): string[];
    set adminUserList(value: string[]);
    resetAdminUserList(): void;
    get adminUserListInput(): string[];
    get arn(): string;
    private _auditDestinationArn?;
    get auditDestinationArn(): string;
    set auditDestinationArn(value: string);
    resetAuditDestinationArn(): void;
    get auditDestinationArnInput(): string;
    private _authentication?;
    get authentication(): string;
    set authentication(value: string);
    resetAuthentication(): void;
    get authenticationInput(): string;
    private _bucketRegion?;
    get bucketRegion(): string;
    set bucketRegion(value: string);
    resetBucketRegion(): void;
    get bucketRegionInput(): string;
    private _caseSensitivity?;
    get caseSensitivity(): string;
    set caseSensitivity(value: string);
    resetCaseSensitivity(): void;
    get caseSensitivityInput(): string;
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
    private _invalidUserList?;
    get invalidUserList(): string[];
    set invalidUserList(value: string[]);
    resetInvalidUserList(): void;
    get invalidUserListInput(): string[];
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
    private _oplocksEnabled?;
    get oplocksEnabled(): boolean | cdktf.IResolvable;
    set oplocksEnabled(value: boolean | cdktf.IResolvable);
    resetOplocksEnabled(): void;
    get oplocksEnabledInput(): boolean | cdktf.IResolvable;
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
    private _smbAclEnabled?;
    get smbAclEnabled(): boolean | cdktf.IResolvable;
    set smbAclEnabled(value: boolean | cdktf.IResolvable);
    resetSmbAclEnabled(): void;
    get smbAclEnabledInput(): boolean | cdktf.IResolvable;
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
    private _validUserList?;
    get validUserList(): string[];
    set validUserList(value: string[]);
    resetValidUserList(): void;
    get validUserListInput(): string[];
    private _vpcEndpointDnsName?;
    get vpcEndpointDnsName(): string;
    set vpcEndpointDnsName(value: string);
    resetVpcEndpointDnsName(): void;
    get vpcEndpointDnsNameInput(): string;
    private _cacheAttributes;
    get cacheAttributes(): StoragegatewaySmbFileShareCacheAttributesOutputReference;
    putCacheAttributes(value: StoragegatewaySmbFileShareCacheAttributes): void;
    resetCacheAttributes(): void;
    get cacheAttributesInput(): StoragegatewaySmbFileShareCacheAttributes;
    private _timeouts;
    get timeouts(): StoragegatewaySmbFileShareTimeoutsOutputReference;
    putTimeouts(value: StoragegatewaySmbFileShareTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): StoragegatewaySmbFileShareTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=storagegateway-smb-file-share.d.ts.map