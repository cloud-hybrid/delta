import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Transfer
*/
export interface TransferUserConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#home_directory TransferUser#home_directory}
    */
    readonly homeDirectory?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#home_directory_type TransferUser#home_directory_type}
    */
    readonly homeDirectoryType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#policy TransferUser#policy}
    */
    readonly policy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#role TransferUser#role}
    */
    readonly role: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#server_id TransferUser#server_id}
    */
    readonly serverId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#tags TransferUser#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#tags_all TransferUser#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#user_name TransferUser#user_name}
    */
    readonly userName: string;
    /**
    * home_directory_mappings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#home_directory_mappings TransferUser#home_directory_mappings}
    */
    readonly homeDirectoryMappings?: TransferUserHomeDirectoryMappings[];
    /**
    * posix_profile block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#posix_profile TransferUser#posix_profile}
    */
    readonly posixProfile?: TransferUserPosixProfile;
}
export interface TransferUserHomeDirectoryMappings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#entry TransferUser#entry}
    */
    readonly entry: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#target TransferUser#target}
    */
    readonly target: string;
}
export declare function transferUserHomeDirectoryMappingsToTerraform(struct?: TransferUserHomeDirectoryMappings): any;
export interface TransferUserPosixProfile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#gid TransferUser#gid}
    */
    readonly gid: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#secondary_gids TransferUser#secondary_gids}
    */
    readonly secondaryGids?: number[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#uid TransferUser#uid}
    */
    readonly uid: number;
}
export declare function transferUserPosixProfileToTerraform(struct?: TransferUserPosixProfileOutputReference | TransferUserPosixProfile): any;
export declare class TransferUserPosixProfileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): TransferUserPosixProfile | undefined;
    set internalValue(value: TransferUserPosixProfile | undefined);
    private _gid?;
    get gid(): number;
    set gid(value: number);
    get gidInput(): number;
    private _secondaryGids?;
    get secondaryGids(): number[];
    set secondaryGids(value: number[]);
    resetSecondaryGids(): void;
    get secondaryGidsInput(): number[];
    private _uid?;
    get uid(): number;
    set uid(value: number);
    get uidInput(): number;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html aws_transfer_user}
*/
export declare class TransferUser extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html aws_transfer_user} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TransferUserConfig
    */
    constructor(scope: Construct, id: string, config: TransferUserConfig);
    get arn(): string;
    private _homeDirectory?;
    get homeDirectory(): string;
    set homeDirectory(value: string);
    resetHomeDirectory(): void;
    get homeDirectoryInput(): string;
    private _homeDirectoryType?;
    get homeDirectoryType(): string;
    set homeDirectoryType(value: string);
    resetHomeDirectoryType(): void;
    get homeDirectoryTypeInput(): string;
    get id(): string;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    resetPolicy(): void;
    get policyInput(): string;
    private _role?;
    get role(): string;
    set role(value: string);
    get roleInput(): string;
    private _serverId?;
    get serverId(): string;
    set serverId(value: string);
    get serverIdInput(): string;
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
    private _userName?;
    get userName(): string;
    set userName(value: string);
    get userNameInput(): string;
    private _homeDirectoryMappings?;
    get homeDirectoryMappings(): TransferUserHomeDirectoryMappings[];
    set homeDirectoryMappings(value: TransferUserHomeDirectoryMappings[]);
    resetHomeDirectoryMappings(): void;
    get homeDirectoryMappingsInput(): TransferUserHomeDirectoryMappings[];
    private _posixProfile;
    get posixProfile(): TransferUserPosixProfileOutputReference;
    putPosixProfile(value: TransferUserPosixProfile): void;
    resetPosixProfile(): void;
    get posixProfileInput(): TransferUserPosixProfile;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=transfer-user.d.ts.map