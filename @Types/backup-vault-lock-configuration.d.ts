import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Backup
*/
export interface BackupVaultLockConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration.html#backup_vault_name BackupVaultLockConfiguration#backup_vault_name}
    */
    readonly backupVaultName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration.html#changeable_for_days BackupVaultLockConfiguration#changeable_for_days}
    */
    readonly changeableForDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration.html#max_retention_days BackupVaultLockConfiguration#max_retention_days}
    */
    readonly maxRetentionDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration.html#min_retention_days BackupVaultLockConfiguration#min_retention_days}
    */
    readonly minRetentionDays?: number;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration.html aws_backup_vault_lock_configuration}
*/
export declare class BackupVaultLockConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration.html aws_backup_vault_lock_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupVaultLockConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: BackupVaultLockConfigurationConfig);
    get backupVaultArn(): string;
    private _backupVaultName?;
    get backupVaultName(): string;
    set backupVaultName(value: string);
    get backupVaultNameInput(): string;
    private _changeableForDays?;
    get changeableForDays(): number;
    set changeableForDays(value: number);
    resetChangeableForDays(): void;
    get changeableForDaysInput(): number;
    get id(): string;
    private _maxRetentionDays?;
    get maxRetentionDays(): number;
    set maxRetentionDays(value: number);
    resetMaxRetentionDays(): void;
    get maxRetentionDaysInput(): number;
    private _minRetentionDays?;
    get minRetentionDays(): number;
    set minRetentionDays(value: number);
    resetMinRetentionDays(): void;
    get minRetentionDaysInput(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=backup-vault-lock-configuration.d.ts.map