import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Secrets Manager
*/
export interface SecretsmanagerSecretPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_policy.html#block_public_policy SecretsmanagerSecretPolicy#block_public_policy}
    */
    readonly blockPublicPolicy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_policy.html#policy SecretsmanagerSecretPolicy#policy}
    */
    readonly policy: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_policy.html#secret_arn SecretsmanagerSecretPolicy#secret_arn}
    */
    readonly secretArn: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_policy.html aws_secretsmanager_secret_policy}
*/
export declare class SecretsmanagerSecretPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_policy.html aws_secretsmanager_secret_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretsmanagerSecretPolicyConfig
    */
    constructor(scope: Construct, id: string, config: SecretsmanagerSecretPolicyConfig);
    private _blockPublicPolicy?;
    get blockPublicPolicy(): boolean | cdktf.IResolvable;
    set blockPublicPolicy(value: boolean | cdktf.IResolvable);
    resetBlockPublicPolicy(): void;
    get blockPublicPolicyInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string;
    private _secretArn?;
    get secretArn(): string;
    set secretArn(value: string);
    get secretArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=secretsmanager-secret-policy.d.ts.map