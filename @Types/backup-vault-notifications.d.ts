import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Backup
*/
export interface BackupVaultNotificationsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_notifications.html#backup_vault_events BackupVaultNotifications#backup_vault_events}
    */
    readonly backupVaultEvents: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_notifications.html#backup_vault_name BackupVaultNotifications#backup_vault_name}
    */
    readonly backupVaultName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_notifications.html#sns_topic_arn BackupVaultNotifications#sns_topic_arn}
    */
    readonly snsTopicArn: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_notifications.html aws_backup_vault_notifications}
*/
export declare class BackupVaultNotifications extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_notifications.html aws_backup_vault_notifications} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupVaultNotificationsConfig
    */
    constructor(scope: Construct, id: string, config: BackupVaultNotificationsConfig);
    get backupVaultArn(): string;
    private _backupVaultEvents?;
    get backupVaultEvents(): string[];
    set backupVaultEvents(value: string[]);
    get backupVaultEventsInput(): string[];
    private _backupVaultName?;
    get backupVaultName(): string;
    set backupVaultName(value: string);
    get backupVaultNameInput(): string;
    get id(): string;
    private _snsTopicArn?;
    get snsTopicArn(): string;
    set snsTopicArn(value: string);
    get snsTopicArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=backup-vault-notifications.d.ts.map