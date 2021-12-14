import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Secrets Manager
*/
export interface SecretsmanagerSecretConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#description SecretsmanagerSecret#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#force_overwrite_replica_secret SecretsmanagerSecret#force_overwrite_replica_secret}
    */
    readonly forceOverwriteReplicaSecret?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#kms_key_id SecretsmanagerSecret#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#name SecretsmanagerSecret#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#name_prefix SecretsmanagerSecret#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#policy SecretsmanagerSecret#policy}
    */
    readonly policy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#recovery_window_in_days SecretsmanagerSecret#recovery_window_in_days}
    */
    readonly recoveryWindowInDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#rotation_lambda_arn SecretsmanagerSecret#rotation_lambda_arn}
    */
    readonly rotationLambdaArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#tags SecretsmanagerSecret#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#tags_all SecretsmanagerSecret#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * replica block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#replica SecretsmanagerSecret#replica}
    */
    readonly replica?: SecretsmanagerSecretReplica[];
    /**
    * rotation_rules block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#rotation_rules SecretsmanagerSecret#rotation_rules}
    */
    readonly rotationRules?: SecretsmanagerSecretRotationRules;
}
export interface SecretsmanagerSecretReplica {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#kms_key_id SecretsmanagerSecret#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#region SecretsmanagerSecret#region}
    */
    readonly region: string;
}
export declare function secretsmanagerSecretReplicaToTerraform(struct?: SecretsmanagerSecretReplica): any;
export interface SecretsmanagerSecretRotationRules {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#automatically_after_days SecretsmanagerSecret#automatically_after_days}
    */
    readonly automaticallyAfterDays: number;
}
export declare function secretsmanagerSecretRotationRulesToTerraform(struct?: SecretsmanagerSecretRotationRulesOutputReference | SecretsmanagerSecretRotationRules): any;
export declare class SecretsmanagerSecretRotationRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SecretsmanagerSecretRotationRules | undefined;
    set internalValue(value: SecretsmanagerSecretRotationRules | undefined);
    private _automaticallyAfterDays?;
    get automaticallyAfterDays(): number;
    set automaticallyAfterDays(value: number);
    get automaticallyAfterDaysInput(): number;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html aws_secretsmanager_secret}
*/
export declare class SecretsmanagerSecret extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html aws_secretsmanager_secret} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretsmanagerSecretConfig = {}
    */
    constructor(scope: Construct, id: string, config?: SecretsmanagerSecretConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _forceOverwriteReplicaSecret?;
    get forceOverwriteReplicaSecret(): boolean | cdktf.IResolvable;
    set forceOverwriteReplicaSecret(value: boolean | cdktf.IResolvable);
    resetForceOverwriteReplicaSecret(): void;
    get forceOverwriteReplicaSecretInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    resetPolicy(): void;
    get policyInput(): string;
    private _recoveryWindowInDays?;
    get recoveryWindowInDays(): number;
    set recoveryWindowInDays(value: number);
    resetRecoveryWindowInDays(): void;
    get recoveryWindowInDaysInput(): number;
    get rotationEnabled(): any;
    private _rotationLambdaArn?;
    get rotationLambdaArn(): string;
    set rotationLambdaArn(value: string);
    resetRotationLambdaArn(): void;
    get rotationLambdaArnInput(): string;
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
    private _replica?;
    get replica(): SecretsmanagerSecretReplica[];
    set replica(value: SecretsmanagerSecretReplica[]);
    resetReplica(): void;
    get replicaInput(): SecretsmanagerSecretReplica[];
    private _rotationRules;
    get rotationRules(): SecretsmanagerSecretRotationRulesOutputReference;
    putRotationRules(value: SecretsmanagerSecretRotationRules): void;
    resetRotationRules(): void;
    get rotationRulesInput(): SecretsmanagerSecretRotationRules;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=secretsmanager-secret.d.ts.map