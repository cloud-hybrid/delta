import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Key Management Service
*/
export interface KmsGrantConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant.html#grant_creation_tokens KmsGrant#grant_creation_tokens}
    */
    readonly grantCreationTokens?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant.html#grantee_principal KmsGrant#grantee_principal}
    */
    readonly granteePrincipal: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant.html#key_id KmsGrant#key_id}
    */
    readonly keyId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant.html#name KmsGrant#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant.html#operations KmsGrant#operations}
    */
    readonly operations: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant.html#retire_on_delete KmsGrant#retire_on_delete}
    */
    readonly retireOnDelete?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant.html#retiring_principal KmsGrant#retiring_principal}
    */
    readonly retiringPrincipal?: string;
    /**
    * constraints block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant.html#constraints KmsGrant#constraints}
    */
    readonly constraints?: KmsGrantConstraints[];
}
export interface KmsGrantConstraints {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant.html#encryption_context_equals KmsGrant#encryption_context_equals}
    */
    readonly encryptionContextEquals?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant.html#encryption_context_subset KmsGrant#encryption_context_subset}
    */
    readonly encryptionContextSubset?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare function kmsGrantConstraintsToTerraform(struct?: KmsGrantConstraints): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_grant.html aws_kms_grant}
*/
export declare class KmsGrant extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kms_grant.html aws_kms_grant} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KmsGrantConfig
    */
    constructor(scope: Construct, id: string, config: KmsGrantConfig);
    private _grantCreationTokens?;
    get grantCreationTokens(): string[];
    set grantCreationTokens(value: string[]);
    resetGrantCreationTokens(): void;
    get grantCreationTokensInput(): string[];
    get grantId(): string;
    get grantToken(): string;
    private _granteePrincipal?;
    get granteePrincipal(): string;
    set granteePrincipal(value: string);
    get granteePrincipalInput(): string;
    get id(): string;
    private _keyId?;
    get keyId(): string;
    set keyId(value: string);
    get keyIdInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _operations?;
    get operations(): string[];
    set operations(value: string[]);
    get operationsInput(): string[];
    private _retireOnDelete?;
    get retireOnDelete(): boolean | cdktf.IResolvable;
    set retireOnDelete(value: boolean | cdktf.IResolvable);
    resetRetireOnDelete(): void;
    get retireOnDeleteInput(): boolean | cdktf.IResolvable;
    private _retiringPrincipal?;
    get retiringPrincipal(): string;
    set retiringPrincipal(value: string);
    resetRetiringPrincipal(): void;
    get retiringPrincipalInput(): string;
    private _constraints?;
    get constraints(): KmsGrantConstraints[];
    set constraints(value: KmsGrantConstraints[]);
    resetConstraints(): void;
    get constraintsInput(): KmsGrantConstraints[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=kms-grant.d.ts.map