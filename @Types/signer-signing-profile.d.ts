import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Signer
*/
export interface SignerSigningProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html#name SignerSigningProfile#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html#name_prefix SignerSigningProfile#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html#platform_id SignerSigningProfile#platform_id}
    */
    readonly platformId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html#tags SignerSigningProfile#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html#tags_all SignerSigningProfile#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * signature_validity_period block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html#signature_validity_period SignerSigningProfile#signature_validity_period}
    */
    readonly signatureValidityPeriod?: SignerSigningProfileSignatureValidityPeriod;
}
export declare class SignerSigningProfileRevocationRecord extends cdktf.ComplexComputedList {
    get revocationEffectiveFrom(): string;
    get revokedAt(): string;
    get revokedBy(): string;
}
export interface SignerSigningProfileSignatureValidityPeriod {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html#type SignerSigningProfile#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html#value SignerSigningProfile#value}
    */
    readonly value: number;
}
export declare function signerSigningProfileSignatureValidityPeriodToTerraform(struct?: SignerSigningProfileSignatureValidityPeriodOutputReference | SignerSigningProfileSignatureValidityPeriod): any;
export declare class SignerSigningProfileSignatureValidityPeriodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SignerSigningProfileSignatureValidityPeriod | undefined;
    set internalValue(value: SignerSigningProfileSignatureValidityPeriod | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html aws_signer_signing_profile}
*/
export declare class SignerSigningProfile extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html aws_signer_signing_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SignerSigningProfileConfig
    */
    constructor(scope: Construct, id: string, config: SignerSigningProfileConfig);
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
    get platformDisplayName(): string;
    private _platformId?;
    get platformId(): string;
    set platformId(value: string);
    get platformIdInput(): string;
    revocationRecord(index: string): SignerSigningProfileRevocationRecord;
    get status(): string;
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
    get version(): string;
    get versionArn(): string;
    private _signatureValidityPeriod;
    get signatureValidityPeriod(): SignerSigningProfileSignatureValidityPeriodOutputReference;
    putSignatureValidityPeriod(value: SignerSigningProfileSignatureValidityPeriod): void;
    resetSignatureValidityPeriod(): void;
    get signatureValidityPeriodInput(): SignerSigningProfileSignatureValidityPeriod;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=signer-signing-profile.d.ts.map