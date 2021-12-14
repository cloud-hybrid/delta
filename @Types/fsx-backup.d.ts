import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS File System FSx
*/
export interface FsxBackupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_backup.html#file_system_id FsxBackup#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_backup.html#tags FsxBackup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_backup.html#tags_all FsxBackup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_backup.html#timeouts FsxBackup#timeouts}
    */
    readonly timeouts?: FsxBackupTimeouts;
}
export interface FsxBackupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_backup.html#create FsxBackup#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_backup.html#delete FsxBackup#delete}
    */
    readonly delete?: string;
}
export declare function fsxBackupTimeoutsToTerraform(struct?: FsxBackupTimeoutsOutputReference | FsxBackupTimeouts): any;
export declare class FsxBackupTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): FsxBackupTimeouts | undefined;
    set internalValue(value: FsxBackupTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_backup.html aws_fsx_backup}
*/
export declare class FsxBackup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/fsx_backup.html aws_fsx_backup} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FsxBackupConfig
    */
    constructor(scope: Construct, id: string, config: FsxBackupConfig);
    get arn(): string;
    private _fileSystemId?;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    get fileSystemIdInput(): string;
    get id(): string;
    get kmsKeyId(): string;
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
    get type(): string;
    private _timeouts;
    get timeouts(): FsxBackupTimeoutsOutputReference;
    putTimeouts(value: FsxBackupTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): FsxBackupTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=fsx-backup.d.ts.map