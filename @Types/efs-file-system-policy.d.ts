import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EFS
*/
export interface EfsFileSystemPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system_policy.html#bypass_policy_lockout_safety_check EfsFileSystemPolicy#bypass_policy_lockout_safety_check}
    */
    readonly bypassPolicyLockoutSafetyCheck?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system_policy.html#file_system_id EfsFileSystemPolicy#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system_policy.html#policy EfsFileSystemPolicy#policy}
    */
    readonly policy: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system_policy.html aws_efs_file_system_policy}
*/
export declare class EfsFileSystemPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system_policy.html aws_efs_file_system_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EfsFileSystemPolicyConfig
    */
    constructor(scope: Construct, id: string, config: EfsFileSystemPolicyConfig);
    private _bypassPolicyLockoutSafetyCheck?;
    get bypassPolicyLockoutSafetyCheck(): boolean | cdktf.IResolvable;
    set bypassPolicyLockoutSafetyCheck(value: boolean | cdktf.IResolvable);
    resetBypassPolicyLockoutSafetyCheck(): void;
    get bypassPolicyLockoutSafetyCheckInput(): boolean | cdktf.IResolvable;
    private _fileSystemId?;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    get fileSystemIdInput(): string;
    get id(): string;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=efs-file-system-policy.d.ts.map