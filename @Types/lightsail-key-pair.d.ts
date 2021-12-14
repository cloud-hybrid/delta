import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Lightsail
*/
export interface LightsailKeyPairConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_key_pair.html#name LightsailKeyPair#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_key_pair.html#name_prefix LightsailKeyPair#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_key_pair.html#pgp_key LightsailKeyPair#pgp_key}
    */
    readonly pgpKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_key_pair.html#public_key LightsailKeyPair#public_key}
    */
    readonly publicKey?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_key_pair.html aws_lightsail_key_pair}
*/
export declare class LightsailKeyPair extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lightsail_key_pair.html aws_lightsail_key_pair} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LightsailKeyPairConfig = {}
    */
    constructor(scope: Construct, id: string, config?: LightsailKeyPairConfig);
    get arn(): string;
    get encryptedFingerprint(): string;
    get encryptedPrivateKey(): string;
    get fingerprint(): string;
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
    private _pgpKey?;
    get pgpKey(): string;
    set pgpKey(value: string);
    resetPgpKey(): void;
    get pgpKeyInput(): string;
    get privateKey(): string;
    private _publicKey?;
    get publicKey(): string;
    set publicKey(value: string);
    resetPublicKey(): void;
    get publicKeyInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=lightsail-key-pair.d.ts.map