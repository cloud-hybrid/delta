import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Key Management Service
*/
export interface KmsAliasConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_alias.html#name KmsAlias#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_alias.html#name_prefix KmsAlias#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_alias.html#target_key_id KmsAlias#target_key_id}
    */
    readonly targetKeyId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_alias.html aws_kms_alias}
*/
export declare class KmsAlias extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kms_alias.html aws_kms_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KmsAliasConfig
    */
    constructor(scope: Construct, id: string, config: KmsAliasConfig);
    get arn(): string;
    get id(): string;
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
    get targetKeyArn(): string;
    private _targetKeyId?;
    get targetKeyId(): string;
    set targetKeyId(value: string);
    get targetKeyIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=kms-alias.d.ts.map