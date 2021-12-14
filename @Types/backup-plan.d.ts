import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Backup
*/
export interface BackupPlanConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#name BackupPlan#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#tags BackupPlan#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#tags_all BackupPlan#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * advanced_backup_setting block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#advanced_backup_setting BackupPlan#advanced_backup_setting}
    */
    readonly advancedBackupSetting?: BackupPlanAdvancedBackupSetting[];
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#rule BackupPlan#rule}
    */
    readonly rule: BackupPlanRule[];
}
export interface BackupPlanAdvancedBackupSetting {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#backup_options BackupPlan#backup_options}
    */
    readonly backupOptions: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#resource_type BackupPlan#resource_type}
    */
    readonly resourceType: string;
}
export declare function backupPlanAdvancedBackupSettingToTerraform(struct?: BackupPlanAdvancedBackupSetting): any;
export interface BackupPlanRuleCopyActionLifecycle {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#cold_storage_after BackupPlan#cold_storage_after}
    */
    readonly coldStorageAfter?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#delete_after BackupPlan#delete_after}
    */
    readonly deleteAfter?: number;
}
export declare function backupPlanRuleCopyActionLifecycleToTerraform(struct?: BackupPlanRuleCopyActionLifecycleOutputReference | BackupPlanRuleCopyActionLifecycle): any;
export declare class BackupPlanRuleCopyActionLifecycleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): BackupPlanRuleCopyActionLifecycle | undefined;
    set internalValue(value: BackupPlanRuleCopyActionLifecycle | undefined);
    private _coldStorageAfter?;
    get coldStorageAfter(): number;
    set coldStorageAfter(value: number);
    resetColdStorageAfter(): void;
    get coldStorageAfterInput(): number;
    private _deleteAfter?;
    get deleteAfter(): number;
    set deleteAfter(value: number);
    resetDeleteAfter(): void;
    get deleteAfterInput(): number;
}
export interface BackupPlanRuleCopyAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#destination_vault_arn BackupPlan#destination_vault_arn}
    */
    readonly destinationVaultArn: string;
    /**
    * lifecycle block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#lifecycle BackupPlan#lifecycle}
    */
    readonly lifecycle?: BackupPlanRuleCopyActionLifecycle;
}
export declare function backupPlanRuleCopyActionToTerraform(struct?: BackupPlanRuleCopyAction): any;
export interface BackupPlanRuleLifecycle {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#cold_storage_after BackupPlan#cold_storage_after}
    */
    readonly coldStorageAfter?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#delete_after BackupPlan#delete_after}
    */
    readonly deleteAfter?: number;
}
export declare function backupPlanRuleLifecycleToTerraform(struct?: BackupPlanRuleLifecycleOutputReference | BackupPlanRuleLifecycle): any;
export declare class BackupPlanRuleLifecycleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): BackupPlanRuleLifecycle | undefined;
    set internalValue(value: BackupPlanRuleLifecycle | undefined);
    private _coldStorageAfter?;
    get coldStorageAfter(): number;
    set coldStorageAfter(value: number);
    resetColdStorageAfter(): void;
    get coldStorageAfterInput(): number;
    private _deleteAfter?;
    get deleteAfter(): number;
    set deleteAfter(value: number);
    resetDeleteAfter(): void;
    get deleteAfterInput(): number;
}
export interface BackupPlanRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#completion_window BackupPlan#completion_window}
    */
    readonly completionWindow?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#enable_continuous_backup BackupPlan#enable_continuous_backup}
    */
    readonly enableContinuousBackup?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#recovery_point_tags BackupPlan#recovery_point_tags}
    */
    readonly recoveryPointTags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#rule_name BackupPlan#rule_name}
    */
    readonly ruleName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#schedule BackupPlan#schedule}
    */
    readonly schedule?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#start_window BackupPlan#start_window}
    */
    readonly startWindow?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#target_vault_name BackupPlan#target_vault_name}
    */
    readonly targetVaultName: string;
    /**
    * copy_action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#copy_action BackupPlan#copy_action}
    */
    readonly copyAction?: BackupPlanRuleCopyAction[];
    /**
    * lifecycle block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#lifecycle BackupPlan#lifecycle}
    */
    readonly lifecycle?: BackupPlanRuleLifecycle;
}
export declare function backupPlanRuleToTerraform(struct?: BackupPlanRule): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html aws_backup_plan}
*/
export declare class BackupPlan extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html aws_backup_plan} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupPlanConfig
    */
    constructor(scope: Construct, id: string, config: BackupPlanConfig);
    get arn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
    get version(): string;
    private _advancedBackupSetting?;
    get advancedBackupSetting(): BackupPlanAdvancedBackupSetting[];
    set advancedBackupSetting(value: BackupPlanAdvancedBackupSetting[]);
    resetAdvancedBackupSetting(): void;
    get advancedBackupSettingInput(): BackupPlanAdvancedBackupSetting[];
    private _rule?;
    get rule(): BackupPlanRule[];
    set rule(value: BackupPlanRule[]);
    get ruleInput(): BackupPlanRule[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=backup-plan.d.ts.map