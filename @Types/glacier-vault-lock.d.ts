import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Glacier
*/
export interface GlacierVaultLockConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock.html#complete_lock GlacierVaultLock#complete_lock}
    */
    readonly completeLock: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock.html#ignore_deletion_error GlacierVaultLock#ignore_deletion_error}
    */
    readonly ignoreDeletionError?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock.html#policy GlacierVaultLock#policy}
    */
    readonly policy: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock.html#vault_name GlacierVaultLock#vault_name}
    */
    readonly vaultName: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock.html aws_glacier_vault_lock}
*/
export declare class GlacierVaultLock extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock.html aws_glacier_vault_lock} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlacierVaultLockConfig
    */
    constructor(scope: Construct, id: string, config: GlacierVaultLockConfig);
    private _completeLock?;
    get completeLock(): boolean | cdktf.IResolvable;
    set completeLock(value: boolean | cdktf.IResolvable);
    get completeLockInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _ignoreDeletionError?;
    get ignoreDeletionError(): boolean | cdktf.IResolvable;
    set ignoreDeletionError(value: boolean | cdktf.IResolvable);
    resetIgnoreDeletionError(): void;
    get ignoreDeletionErrorInput(): boolean | cdktf.IResolvable;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string;
    private _vaultName?;
    get vaultName(): string;
    set vaultName(value: string);
    get vaultNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=glacier-vault-lock.d.ts.map