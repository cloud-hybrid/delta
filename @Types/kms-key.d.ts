import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Key Management Service
*/
export interface KmsKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html#bypass_policy_lockout_safety_check KmsKey#bypass_policy_lockout_safety_check}
    */
    readonly bypassPolicyLockoutSafetyCheck?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html#customer_master_key_spec KmsKey#customer_master_key_spec}
    */
    readonly customerMasterKeySpec?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html#deletion_window_in_days KmsKey#deletion_window_in_days}
    */
    readonly deletionWindowInDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html#description KmsKey#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html#enable_key_rotation KmsKey#enable_key_rotation}
    */
    readonly enableKeyRotation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html#is_enabled KmsKey#is_enabled}
    */
    readonly isEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html#key_usage KmsKey#key_usage}
    */
    readonly keyUsage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html#multi_region KmsKey#multi_region}
    */
    readonly multiRegion?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html#policy KmsKey#policy}
    */
    readonly policy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html#tags KmsKey#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html#tags_all KmsKey#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html aws_kms_key}
*/
export declare class KmsKey extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html aws_kms_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KmsKeyConfig = {}
    */
    constructor(scope: Construct, id: string, config?: KmsKeyConfig);
    get arn(): string;
    private _bypassPolicyLockoutSafetyCheck?;
    get bypassPolicyLockoutSafetyCheck(): boolean | cdktf.IResolvable;
    set bypassPolicyLockoutSafetyCheck(value: boolean | cdktf.IResolvable);
    resetBypassPolicyLockoutSafetyCheck(): void;
    get bypassPolicyLockoutSafetyCheckInput(): boolean | cdktf.IResolvable;
    private _customerMasterKeySpec?;
    get customerMasterKeySpec(): string;
    set customerMasterKeySpec(value: string);
    resetCustomerMasterKeySpec(): void;
    get customerMasterKeySpecInput(): string;
    private _deletionWindowInDays?;
    get deletionWindowInDays(): number;
    set deletionWindowInDays(value: number);
    resetDeletionWindowInDays(): void;
    get deletionWindowInDaysInput(): number;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _enableKeyRotation?;
    get enableKeyRotation(): boolean | cdktf.IResolvable;
    set enableKeyRotation(value: boolean | cdktf.IResolvable);
    resetEnableKeyRotation(): void;
    get enableKeyRotationInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _isEnabled?;
    get isEnabled(): boolean | cdktf.IResolvable;
    set isEnabled(value: boolean | cdktf.IResolvable);
    resetIsEnabled(): void;
    get isEnabledInput(): boolean | cdktf.IResolvable;
    get keyId(): string;
    private _keyUsage?;
    get keyUsage(): string;
    set keyUsage(value: string);
    resetKeyUsage(): void;
    get keyUsageInput(): string;
    private _multiRegion?;
    get multiRegion(): boolean | cdktf.IResolvable;
    set multiRegion(value: boolean | cdktf.IResolvable);
    resetMultiRegion(): void;
    get multiRegionInput(): boolean | cdktf.IResolvable;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    resetPolicy(): void;
    get policyInput(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=kms-key.d.ts.map