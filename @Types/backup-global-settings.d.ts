import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Backup
*/
export interface BackupGlobalSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_global_settings.html#global_settings BackupGlobalSettings#global_settings}
    */
    readonly globalSettings: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_global_settings.html aws_backup_global_settings}
*/
export declare class BackupGlobalSettings extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/backup_global_settings.html aws_backup_global_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupGlobalSettingsConfig
    */
    constructor(scope: Construct, id: string, config: BackupGlobalSettingsConfig);
    private _globalSettings?;
    get globalSettings(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set globalSettings(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    get globalSettingsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=backup-global-settings.d.ts.map