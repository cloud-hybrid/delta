import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Backup
*/
export interface DataAwsBackupSelectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_selection.html#plan_id DataAwsBackupSelection#plan_id}
    */
    readonly planId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_selection.html#selection_id DataAwsBackupSelection#selection_id}
    */
    readonly selectionId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/backup_selection.html aws_backup_selection}
*/
export declare class DataAwsBackupSelection extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/backup_selection.html aws_backup_selection} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsBackupSelectionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsBackupSelectionConfig);
    get iamRoleArn(): string;
    get id(): string;
    get name(): string;
    private _planId?;
    get planId(): string;
    set planId(value: string);
    get planIdInput(): string;
    get resources(): string[];
    private _selectionId?;
    get selectionId(): string;
    set selectionId(value: string);
    get selectionIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-backup-selection.d.ts.map