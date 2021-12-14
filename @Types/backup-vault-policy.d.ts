import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Backup
*/
export interface BackupVaultPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_policy.html#backup_vault_name BackupVaultPolicy#backup_vault_name}
    */
    readonly backupVaultName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_policy.html#policy BackupVaultPolicy#policy}
    */
    readonly policy: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_policy.html aws_backup_vault_policy}
*/
export declare class BackupVaultPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_policy.html aws_backup_vault_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupVaultPolicyConfig
    */
    constructor(scope: Construct, id: string, config: BackupVaultPolicyConfig);
    get backupVaultArn(): string;
    private _backupVaultName?;
    get backupVaultName(): string;
    set backupVaultName(value: string);
    get backupVaultNameInput(): string;
    get id(): string;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=backup-vault-policy.d.ts.map