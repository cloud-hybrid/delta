import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Secrets Manager
*/
export interface SecretsmanagerSecretVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version.html#secret_binary SecretsmanagerSecretVersion#secret_binary}
    */
    readonly secretBinary?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version.html#secret_id SecretsmanagerSecretVersion#secret_id}
    */
    readonly secretId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version.html#secret_string SecretsmanagerSecretVersion#secret_string}
    */
    readonly secretString?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version.html#version_stages SecretsmanagerSecretVersion#version_stages}
    */
    readonly versionStages?: string[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version.html aws_secretsmanager_secret_version}
*/
export declare class SecretsmanagerSecretVersion extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version.html aws_secretsmanager_secret_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretsmanagerSecretVersionConfig
    */
    constructor(scope: Construct, id: string, config: SecretsmanagerSecretVersionConfig);
    get arn(): string;
    get id(): string;
    private _secretBinary?;
    get secretBinary(): string;
    set secretBinary(value: string);
    resetSecretBinary(): void;
    get secretBinaryInput(): string;
    private _secretId?;
    get secretId(): string;
    set secretId(value: string);
    get secretIdInput(): string;
    private _secretString?;
    get secretString(): string;
    set secretString(value: string);
    resetSecretString(): void;
    get secretStringInput(): string;
    get versionId(): string;
    private _versionStages?;
    get versionStages(): string[];
    set versionStages(value: string[]);
    resetVersionStages(): void;
    get versionStagesInput(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=secretsmanager-secret-version.d.ts.map