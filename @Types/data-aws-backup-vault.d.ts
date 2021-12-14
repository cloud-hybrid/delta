import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Backup
*/
export interface DataAwsBackupVaultConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_vault.html#name DataAwsBackupVault#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_vault.html#tags DataAwsBackupVault#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/backup_vault.html aws_backup_vault}
*/
export declare class DataAwsBackupVault extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/backup_vault.html aws_backup_vault} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsBackupVaultConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsBackupVaultConfig);
    get arn(): string;
    get id(): string;
    get kmsKeyArn(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get recoveryPoints(): number;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-backup-vault.d.ts.map