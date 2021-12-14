import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Key Management Service
*/
export interface KmsExternalKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html#bypass_policy_lockout_safety_check KmsExternalKey#bypass_policy_lockout_safety_check}
    */
    readonly bypassPolicyLockoutSafetyCheck?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html#deletion_window_in_days KmsExternalKey#deletion_window_in_days}
    */
    readonly deletionWindowInDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html#description KmsExternalKey#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html#enabled KmsExternalKey#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html#key_material_base64 KmsExternalKey#key_material_base64}
    */
    readonly keyMaterialBase64?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html#multi_region KmsExternalKey#multi_region}
    */
    readonly multiRegion?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html#policy KmsExternalKey#policy}
    */
    readonly policy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html#tags KmsExternalKey#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html#tags_all KmsExternalKey#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html#valid_to KmsExternalKey#valid_to}
    */
    readonly validTo?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html aws_kms_external_key}
*/
export declare class KmsExternalKey extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html aws_kms_external_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KmsExternalKeyConfig = {}
    */
    constructor(scope: Construct, id: string, config?: KmsExternalKeyConfig);
    get arn(): string;
    private _bypassPolicyLockoutSafetyCheck?;
    get bypassPolicyLockoutSafetyCheck(): boolean | cdktf.IResolvable;
    set bypassPolicyLockoutSafetyCheck(value: boolean | cdktf.IResolvable);
    resetBypassPolicyLockoutSafetyCheck(): void;
    get bypassPolicyLockoutSafetyCheckInput(): boolean | cdktf.IResolvable;
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
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    get expirationModel(): string;
    get id(): string;
    private _keyMaterialBase64?;
    get keyMaterialBase64(): string;
    set keyMaterialBase64(value: string);
    resetKeyMaterialBase64(): void;
    get keyMaterialBase64Input(): string;
    get keyState(): string;
    get keyUsage(): string;
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
    private _validTo?;
    get validTo(): string;
    set validTo(value: string);
    resetValidTo(): void;
    get validToInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=kms-external-key.d.ts.map