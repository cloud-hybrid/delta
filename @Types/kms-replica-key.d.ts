import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Key Management Service
*/
export interface KmsReplicaKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_key.html#bypass_policy_lockout_safety_check KmsReplicaKey#bypass_policy_lockout_safety_check}
    */
    readonly bypassPolicyLockoutSafetyCheck?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_key.html#deletion_window_in_days KmsReplicaKey#deletion_window_in_days}
    */
    readonly deletionWindowInDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_key.html#description KmsReplicaKey#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_key.html#enabled KmsReplicaKey#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_key.html#policy KmsReplicaKey#policy}
    */
    readonly policy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_key.html#primary_key_arn KmsReplicaKey#primary_key_arn}
    */
    readonly primaryKeyArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_key.html#tags KmsReplicaKey#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_key.html#tags_all KmsReplicaKey#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_key.html aws_kms_replica_key}
*/
export declare class KmsReplicaKey extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_key.html aws_kms_replica_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KmsReplicaKeyConfig
    */
    constructor(scope: Construct, id: string, config: KmsReplicaKeyConfig);
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
    get id(): string;
    get keyId(): string;
    get keyRotationEnabled(): any;
    get keySpec(): string;
    get keyUsage(): string;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    resetPolicy(): void;
    get policyInput(): string;
    private _primaryKeyArn?;
    get primaryKeyArn(): string;
    set primaryKeyArn(value: string);
    get primaryKeyArnInput(): string;
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
//# sourceMappingURL=kms-replica-key.d.ts.map