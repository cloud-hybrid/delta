import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EFS
*/
export interface EfsBackupPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_backup_policy.html#file_system_id EfsBackupPolicy#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * backup_policy block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_backup_policy.html#backup_policy EfsBackupPolicy#backup_policy}
    */
    readonly backupPolicy: EfsBackupPolicyBackupPolicy;
}
export interface EfsBackupPolicyBackupPolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_backup_policy.html#status EfsBackupPolicy#status}
    */
    readonly status: string;
}
export declare function efsBackupPolicyBackupPolicyToTerraform(struct?: EfsBackupPolicyBackupPolicyOutputReference | EfsBackupPolicyBackupPolicy): any;
export declare class EfsBackupPolicyBackupPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EfsBackupPolicyBackupPolicy | undefined;
    set internalValue(value: EfsBackupPolicyBackupPolicy | undefined);
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/efs_backup_policy.html aws_efs_backup_policy}
*/
export declare class EfsBackupPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/efs_backup_policy.html aws_efs_backup_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EfsBackupPolicyConfig
    */
    constructor(scope: Construct, id: string, config: EfsBackupPolicyConfig);
    private _fileSystemId?;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    get fileSystemIdInput(): string;
    get id(): string;
    private _backupPolicy;
    get backupPolicy(): EfsBackupPolicyBackupPolicyOutputReference;
    putBackupPolicy(value: EfsBackupPolicyBackupPolicy): void;
    get backupPolicyInput(): EfsBackupPolicyBackupPolicy;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=efs-backup-policy.d.ts.map