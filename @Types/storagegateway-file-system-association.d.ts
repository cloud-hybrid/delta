import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Storage Gateway
*/
export interface StoragegatewayFileSystemAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html#audit_destination_arn StoragegatewayFileSystemAssociation#audit_destination_arn}
    */
    readonly auditDestinationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html#gateway_arn StoragegatewayFileSystemAssociation#gateway_arn}
    */
    readonly gatewayArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html#location_arn StoragegatewayFileSystemAssociation#location_arn}
    */
    readonly locationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html#password StoragegatewayFileSystemAssociation#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html#tags StoragegatewayFileSystemAssociation#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html#tags_all StoragegatewayFileSystemAssociation#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html#username StoragegatewayFileSystemAssociation#username}
    */
    readonly username: string;
    /**
    * cache_attributes block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html#cache_attributes StoragegatewayFileSystemAssociation#cache_attributes}
    */
    readonly cacheAttributes?: StoragegatewayFileSystemAssociationCacheAttributes;
}
export interface StoragegatewayFileSystemAssociationCacheAttributes {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html#cache_stale_timeout_in_seconds StoragegatewayFileSystemAssociation#cache_stale_timeout_in_seconds}
    */
    readonly cacheStaleTimeoutInSeconds?: number;
}
export declare function storagegatewayFileSystemAssociationCacheAttributesToTerraform(struct?: StoragegatewayFileSystemAssociationCacheAttributesOutputReference | StoragegatewayFileSystemAssociationCacheAttributes): any;
export declare class StoragegatewayFileSystemAssociationCacheAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): StoragegatewayFileSystemAssociationCacheAttributes | undefined;
    set internalValue(value: StoragegatewayFileSystemAssociationCacheAttributes | undefined);
    private _cacheStaleTimeoutInSeconds?;
    get cacheStaleTimeoutInSeconds(): number;
    set cacheStaleTimeoutInSeconds(value: number);
    resetCacheStaleTimeoutInSeconds(): void;
    get cacheStaleTimeoutInSecondsInput(): number;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html aws_storagegateway_file_system_association}
*/
export declare class StoragegatewayFileSystemAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html aws_storagegateway_file_system_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewayFileSystemAssociationConfig
    */
    constructor(scope: Construct, id: string, config: StoragegatewayFileSystemAssociationConfig);
    get arn(): string;
    private _auditDestinationArn?;
    get auditDestinationArn(): string;
    set auditDestinationArn(value: string);
    resetAuditDestinationArn(): void;
    get auditDestinationArnInput(): string;
    private _gatewayArn?;
    get gatewayArn(): string;
    set gatewayArn(value: string);
    get gatewayArnInput(): string;
    get id(): string;
    private _locationArn?;
    get locationArn(): string;
    set locationArn(value: string);
    get locationArnInput(): string;
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string;
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
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string;
    private _cacheAttributes;
    get cacheAttributes(): StoragegatewayFileSystemAssociationCacheAttributesOutputReference;
    putCacheAttributes(value: StoragegatewayFileSystemAssociationCacheAttributes): void;
    resetCacheAttributes(): void;
    get cacheAttributesInput(): StoragegatewayFileSystemAssociationCacheAttributes;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=storagegateway-file-system-association.d.ts.map