import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Secrets Manager
*/
export interface DataAwsSecretsmanagerSecretConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret.html#name DataAwsSecretsmanagerSecret#name}
    */
    readonly name?: string;
}
export declare class DataAwsSecretsmanagerSecretRotationRules extends cdktf.ComplexComputedList {
    get automaticallyAfterDays(): number;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret.html aws_secretsmanager_secret}
*/
export declare class DataAwsSecretsmanagerSecret extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret.html aws_secretsmanager_secret} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSecretsmanagerSecretConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsSecretsmanagerSecretConfig);
    get arn(): string;
    get description(): string;
    get id(): string;
    get kmsKeyId(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    get policy(): string;
    get rotationEnabled(): any;
    get rotationLambdaArn(): string;
    rotationRules(index: string): DataAwsSecretsmanagerSecretRotationRules;
    tags(key: string): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-secretsmanager-secret.d.ts.map