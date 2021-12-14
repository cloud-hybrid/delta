import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Transfer
*/
export interface TransferAccessConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html#external_id TransferAccess#external_id}
    */
    readonly externalId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html#home_directory TransferAccess#home_directory}
    */
    readonly homeDirectory?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html#home_directory_type TransferAccess#home_directory_type}
    */
    readonly homeDirectoryType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html#policy TransferAccess#policy}
    */
    readonly policy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html#role TransferAccess#role}
    */
    readonly role?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html#server_id TransferAccess#server_id}
    */
    readonly serverId: string;
    /**
    * home_directory_mappings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html#home_directory_mappings TransferAccess#home_directory_mappings}
    */
    readonly homeDirectoryMappings?: TransferAccessHomeDirectoryMappings[];
    /**
    * posix_profile block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html#posix_profile TransferAccess#posix_profile}
    */
    readonly posixProfile?: TransferAccessPosixProfile;
}
export interface TransferAccessHomeDirectoryMappings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html#entry TransferAccess#entry}
    */
    readonly entry: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html#target TransferAccess#target}
    */
    readonly target: string;
}
export declare function transferAccessHomeDirectoryMappingsToTerraform(struct?: TransferAccessHomeDirectoryMappings): any;
export interface TransferAccessPosixProfile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html#gid TransferAccess#gid}
    */
    readonly gid: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html#secondary_gids TransferAccess#secondary_gids}
    */
    readonly secondaryGids?: number[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html#uid TransferAccess#uid}
    */
    readonly uid: number;
}
export declare function transferAccessPosixProfileToTerraform(struct?: TransferAccessPosixProfileOutputReference | TransferAccessPosixProfile): any;
export declare class TransferAccessPosixProfileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): TransferAccessPosixProfile | undefined;
    set internalValue(value: TransferAccessPosixProfile | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html aws_transfer_access}
*/
export declare class TransferAccess extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html aws_transfer_access} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TransferAccessConfig
    */
    constructor(scope: Construct, id: string, config: TransferAccessConfig);
    private _externalId?;
    get externalId(): string;
    set externalId(value: string);
    get externalIdInput(): string;
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
    resetRole(): void;
    get roleInput(): string;
    private _serverId?;
    get serverId(): string;
    set serverId(value: string);
    get serverIdInput(): string;
    private _homeDirectoryMappings?;
    get homeDirectoryMappings(): TransferAccessHomeDirectoryMappings[];
    set homeDirectoryMappings(value: TransferAccessHomeDirectoryMappings[]);
    resetHomeDirectoryMappings(): void;
    get homeDirectoryMappingsInput(): TransferAccessHomeDirectoryMappings[];
    private _posixProfile;
    get posixProfile(): TransferAccessPosixProfileOutputReference;
    putPosixProfile(value: TransferAccessPosixProfile): void;
    resetPosixProfile(): void;
    get posixProfileInput(): TransferAccessPosixProfile;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=transfer-access.d.ts.map