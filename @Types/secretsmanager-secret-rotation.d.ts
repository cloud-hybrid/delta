import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Secrets Manager
*/
export interface SecretsmanagerSecretRotationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html#rotation_lambda_arn SecretsmanagerSecretRotation#rotation_lambda_arn}
    */
    readonly rotationLambdaArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html#secret_id SecretsmanagerSecretRotation#secret_id}
    */
    readonly secretId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html#tags SecretsmanagerSecretRotation#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * rotation_rules block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html#rotation_rules SecretsmanagerSecretRotation#rotation_rules}
    */
    readonly rotationRules: SecretsmanagerSecretRotationRotationRules;
}
export interface SecretsmanagerSecretRotationRotationRules {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html#automatically_after_days SecretsmanagerSecretRotation#automatically_after_days}
    */
    readonly automaticallyAfterDays: number;
}
export declare function secretsmanagerSecretRotationRotationRulesToTerraform(struct?: SecretsmanagerSecretRotationRotationRulesOutputReference | SecretsmanagerSecretRotationRotationRules): any;
export declare class SecretsmanagerSecretRotationRotationRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SecretsmanagerSecretRotationRotationRules | undefined;
    set internalValue(value: SecretsmanagerSecretRotationRotationRules | undefined);
    private _automaticallyAfterDays?;
    get automaticallyAfterDays(): number;
    set automaticallyAfterDays(value: number);
    get automaticallyAfterDaysInput(): number;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html aws_secretsmanager_secret_rotation}
*/
export declare class SecretsmanagerSecretRotation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html aws_secretsmanager_secret_rotation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretsmanagerSecretRotationConfig
    */
    constructor(scope: Construct, id: string, config: SecretsmanagerSecretRotationConfig);
    get id(): string;
    get rotationEnabled(): any;
    private _rotationLambdaArn?;
    get rotationLambdaArn(): string;
    set rotationLambdaArn(value: string);
    get rotationLambdaArnInput(): string;
    private _secretId?;
    get secretId(): string;
    set secretId(value: string);
    get secretIdInput(): string;
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
    private _rotationRules;
    get rotationRules(): SecretsmanagerSecretRotationRotationRulesOutputReference;
    putRotationRules(value: SecretsmanagerSecretRotationRotationRules): void;
    get rotationRulesInput(): SecretsmanagerSecretRotationRotationRules;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=secretsmanager-secret-rotation.d.ts.map