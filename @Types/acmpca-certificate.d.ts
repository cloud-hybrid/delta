import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* Amazon Certificate Manager
*/
export interface AcmpcaCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate.html#certificate_authority_arn AcmpcaCertificate#certificate_authority_arn}
    */
    readonly certificateAuthorityArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate.html#certificate_signing_request AcmpcaCertificate#certificate_signing_request}
    */
    readonly certificateSigningRequest: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate.html#signing_algorithm AcmpcaCertificate#signing_algorithm}
    */
    readonly signingAlgorithm: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate.html#template_arn AcmpcaCertificate#template_arn}
    */
    readonly templateArn?: string;
    /**
    * validity block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate.html#validity AcmpcaCertificate#validity}
    */
    readonly validity: AcmpcaCertificateValidity;
}
export interface AcmpcaCertificateValidity {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate.html#type AcmpcaCertificate#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate.html#value AcmpcaCertificate#value}
    */
    readonly value: string;
}
export declare function acmpcaCertificateValidityToTerraform(struct?: AcmpcaCertificateValidityOutputReference | AcmpcaCertificateValidity): any;
export declare class AcmpcaCertificateValidityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AcmpcaCertificateValidity | undefined;
    set internalValue(value: AcmpcaCertificateValidity | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate.html aws_acmpca_certificate}
*/
export declare class AcmpcaCertificate extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate.html aws_acmpca_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AcmpcaCertificateConfig
    */
    constructor(scope: Construct, id: string, config: AcmpcaCertificateConfig);
    get arn(): string;
    get certificate(): string;
    private _certificateAuthorityArn?;
    get certificateAuthorityArn(): string;
    set certificateAuthorityArn(value: string);
    get certificateAuthorityArnInput(): string;
    get certificateChain(): string;
    private _certificateSigningRequest?;
    get certificateSigningRequest(): string;
    set certificateSigningRequest(value: string);
    get certificateSigningRequestInput(): string;
    get id(): string;
    private _signingAlgorithm?;
    get signingAlgorithm(): string;
    set signingAlgorithm(value: string);
    get signingAlgorithmInput(): string;
    private _templateArn?;
    get templateArn(): string;
    set templateArn(value: string);
    resetTemplateArn(): void;
    get templateArnInput(): string;
    private _validity;
    get validity(): AcmpcaCertificateValidityOutputReference;
    putValidity(value: AcmpcaCertificateValidity): void;
    get validityInput(): AcmpcaCertificateValidity;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=acmpca-certificate.d.ts.map