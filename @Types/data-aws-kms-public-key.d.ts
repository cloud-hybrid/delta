import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Key Management Service
*/
export interface DataAwsKmsPublicKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_public_key.html#grant_tokens DataAwsKmsPublicKey#grant_tokens}
    */
    readonly grantTokens?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_public_key.html#key_id DataAwsKmsPublicKey#key_id}
    */
    readonly keyId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/kms_public_key.html aws_kms_public_key}
*/
export declare class DataAwsKmsPublicKey extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kms_public_key.html aws_kms_public_key} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKmsPublicKeyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsKmsPublicKeyConfig);
    get arn(): string;
    get customerMasterKeySpec(): string;
    get encryptionAlgorithms(): string[];
    private _grantTokens?;
    get grantTokens(): string[];
    set grantTokens(value: string[]);
    resetGrantTokens(): void;
    get grantTokensInput(): string[];
    get id(): string;
    private _keyId?;
    get keyId(): string;
    set keyId(value: string);
    get keyIdInput(): string;
    get keyUsage(): string;
    get publicKey(): string;
    get signingAlgorithms(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-kms-public-key.d.ts.map