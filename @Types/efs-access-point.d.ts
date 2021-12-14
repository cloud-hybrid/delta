import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EFS
*/
export interface EfsAccessPointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#file_system_id EfsAccessPoint#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#tags EfsAccessPoint#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#tags_all EfsAccessPoint#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * posix_user block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#posix_user EfsAccessPoint#posix_user}
    */
    readonly posixUser?: EfsAccessPointPosixUser;
    /**
    * root_directory block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#root_directory EfsAccessPoint#root_directory}
    */
    readonly rootDirectory?: EfsAccessPointRootDirectory;
}
export interface EfsAccessPointPosixUser {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#gid EfsAccessPoint#gid}
    */
    readonly gid: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#secondary_gids EfsAccessPoint#secondary_gids}
    */
    readonly secondaryGids?: number[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#uid EfsAccessPoint#uid}
    */
    readonly uid: number;
}
export declare function efsAccessPointPosixUserToTerraform(struct?: EfsAccessPointPosixUserOutputReference | EfsAccessPointPosixUser): any;
export declare class EfsAccessPointPosixUserOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EfsAccessPointPosixUser | undefined;
    set internalValue(value: EfsAccessPointPosixUser | undefined);
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
export interface EfsAccessPointRootDirectoryCreationInfo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#owner_gid EfsAccessPoint#owner_gid}
    */
    readonly ownerGid: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#owner_uid EfsAccessPoint#owner_uid}
    */
    readonly ownerUid: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#permissions EfsAccessPoint#permissions}
    */
    readonly permissions: string;
}
export declare function efsAccessPointRootDirectoryCreationInfoToTerraform(struct?: EfsAccessPointRootDirectoryCreationInfoOutputReference | EfsAccessPointRootDirectoryCreationInfo): any;
export declare class EfsAccessPointRootDirectoryCreationInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EfsAccessPointRootDirectoryCreationInfo | undefined;
    set internalValue(value: EfsAccessPointRootDirectoryCreationInfo | undefined);
    private _ownerGid?;
    get ownerGid(): number;
    set ownerGid(value: number);
    get ownerGidInput(): number;
    private _ownerUid?;
    get ownerUid(): number;
    set ownerUid(value: number);
    get ownerUidInput(): number;
    private _permissions?;
    get permissions(): string;
    set permissions(value: string);
    get permissionsInput(): string;
}
export interface EfsAccessPointRootDirectory {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#path EfsAccessPoint#path}
    */
    readonly path?: string;
    /**
    * creation_info block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#creation_info EfsAccessPoint#creation_info}
    */
    readonly creationInfo?: EfsAccessPointRootDirectoryCreationInfo;
}
export declare function efsAccessPointRootDirectoryToTerraform(struct?: EfsAccessPointRootDirectoryOutputReference | EfsAccessPointRootDirectory): any;
export declare class EfsAccessPointRootDirectoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EfsAccessPointRootDirectory | undefined;
    set internalValue(value: EfsAccessPointRootDirectory | undefined);
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string;
    private _creationInfo;
    get creationInfo(): EfsAccessPointRootDirectoryCreationInfoOutputReference;
    putCreationInfo(value: EfsAccessPointRootDirectoryCreationInfo): void;
    resetCreationInfo(): void;
    get creationInfoInput(): EfsAccessPointRootDirectoryCreationInfo;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html aws_efs_access_point}
*/
export declare class EfsAccessPoint extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html aws_efs_access_point} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EfsAccessPointConfig
    */
    constructor(scope: Construct, id: string, config: EfsAccessPointConfig);
    get arn(): string;
    get fileSystemArn(): string;
    private _fileSystemId?;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    get fileSystemIdInput(): string;
    get id(): string;
    get ownerId(): string;
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
    private _posixUser;
    get posixUser(): EfsAccessPointPosixUserOutputReference;
    putPosixUser(value: EfsAccessPointPosixUser): void;
    resetPosixUser(): void;
    get posixUserInput(): EfsAccessPointPosixUser;
    private _rootDirectory;
    get rootDirectory(): EfsAccessPointRootDirectoryOutputReference;
    putRootDirectory(value: EfsAccessPointRootDirectory): void;
    resetRootDirectory(): void;
    get rootDirectoryInput(): EfsAccessPointRootDirectory;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=efs-access-point.d.ts.map