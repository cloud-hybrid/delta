import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Quantum Ledger Database
*/
export interface QldbLedgerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/qldb_ledger.html#deletion_protection QldbLedger#deletion_protection}
    */
    readonly deletionProtection?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/qldb_ledger.html#name QldbLedger#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/qldb_ledger.html#permissions_mode QldbLedger#permissions_mode}
    */
    readonly permissionsMode: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/qldb_ledger.html#tags QldbLedger#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/qldb_ledger.html#tags_all QldbLedger#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/qldb_ledger.html aws_qldb_ledger}
*/
export declare class QldbLedger extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/qldb_ledger.html aws_qldb_ledger} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QldbLedgerConfig
    */
    constructor(scope: Construct, id: string, config: QldbLedgerConfig);
    get arn(): string;
    private _deletionProtection?;
    get deletionProtection(): boolean | cdktf.IResolvable;
    set deletionProtection(value: boolean | cdktf.IResolvable);
    resetDeletionProtection(): void;
    get deletionProtectionInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _permissionsMode?;
    get permissionsMode(): string;
    set permissionsMode(value: string);
    get permissionsModeInput(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=qldb-ledger.d.ts.map