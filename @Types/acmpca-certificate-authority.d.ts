import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* Amazon Certificate Manager
*/
export interface AcmpcaCertificateAuthorityConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#enabled AcmpcaCertificateAuthority#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#permanent_deletion_time_in_days AcmpcaCertificateAuthority#permanent_deletion_time_in_days}
    */
    readonly permanentDeletionTimeInDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#tags AcmpcaCertificateAuthority#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#tags_all AcmpcaCertificateAuthority#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#type AcmpcaCertificateAuthority#type}
    */
    readonly type?: string;
    /**
    * certificate_authority_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#certificate_authority_configuration AcmpcaCertificateAuthority#certificate_authority_configuration}
    */
    readonly certificateAuthorityConfiguration: AcmpcaCertificateAuthorityCertificateAuthorityConfiguration;
    /**
    * revocation_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#revocation_configuration AcmpcaCertificateAuthority#revocation_configuration}
    */
    readonly revocationConfiguration?: AcmpcaCertificateAuthorityRevocationConfiguration;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#timeouts AcmpcaCertificateAuthority#timeouts}
    */
    readonly timeouts?: AcmpcaCertificateAuthorityTimeouts;
}
export interface AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#common_name AcmpcaCertificateAuthority#common_name}
    */
    readonly commonName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#country AcmpcaCertificateAuthority#country}
    */
    readonly country?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#distinguished_name_qualifier AcmpcaCertificateAuthority#distinguished_name_qualifier}
    */
    readonly distinguishedNameQualifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#generation_qualifier AcmpcaCertificateAuthority#generation_qualifier}
    */
    readonly generationQualifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#given_name AcmpcaCertificateAuthority#given_name}
    */
    readonly givenName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#initials AcmpcaCertificateAuthority#initials}
    */
    readonly initials?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#locality AcmpcaCertificateAuthority#locality}
    */
    readonly locality?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#organization AcmpcaCertificateAuthority#organization}
    */
    readonly organization?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#organizational_unit AcmpcaCertificateAuthority#organizational_unit}
    */
    readonly organizationalUnit?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#pseudonym AcmpcaCertificateAuthority#pseudonym}
    */
    readonly pseudonym?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#state AcmpcaCertificateAuthority#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#surname AcmpcaCertificateAuthority#surname}
    */
    readonly surname?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#title AcmpcaCertificateAuthority#title}
    */
    readonly title?: string;
}
export declare function acmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectToTerraform(struct?: AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference | AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject): any;
export declare class AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject | undefined;
    set internalValue(value: AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject | undefined);
    private _commonName?;
    get commonName(): string;
    set commonName(value: string);
    resetCommonName(): void;
    get commonNameInput(): string;
    private _country?;
    get country(): string;
    set country(value: string);
    resetCountry(): void;
    get countryInput(): string;
    private _distinguishedNameQualifier?;
    get distinguishedNameQualifier(): string;
    set distinguishedNameQualifier(value: string);
    resetDistinguishedNameQualifier(): void;
    get distinguishedNameQualifierInput(): string;
    private _generationQualifier?;
    get generationQualifier(): string;
    set generationQualifier(value: string);
    resetGenerationQualifier(): void;
    get generationQualifierInput(): string;
    private _givenName?;
    get givenName(): string;
    set givenName(value: string);
    resetGivenName(): void;
    get givenNameInput(): string;
    private _initials?;
    get initials(): string;
    set initials(value: string);
    resetInitials(): void;
    get initialsInput(): string;
    private _locality?;
    get locality(): string;
    set locality(value: string);
    resetLocality(): void;
    get localityInput(): string;
    private _organization?;
    get organization(): string;
    set organization(value: string);
    resetOrganization(): void;
    get organizationInput(): string;
    private _organizationalUnit?;
    get organizationalUnit(): string;
    set organizationalUnit(value: string);
    resetOrganizationalUnit(): void;
    get organizationalUnitInput(): string;
    private _pseudonym?;
    get pseudonym(): string;
    set pseudonym(value: string);
    resetPseudonym(): void;
    get pseudonymInput(): string;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string;
    private _surname?;
    get surname(): string;
    set surname(value: string);
    resetSurname(): void;
    get surnameInput(): string;
    private _title?;
    get title(): string;
    set title(value: string);
    resetTitle(): void;
    get titleInput(): string;
}
export interface AcmpcaCertificateAuthorityCertificateAuthorityConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#key_algorithm AcmpcaCertificateAuthority#key_algorithm}
    */
    readonly keyAlgorithm: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#signing_algorithm AcmpcaCertificateAuthority#signing_algorithm}
    */
    readonly signingAlgorithm: string;
    /**
    * subject block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#subject AcmpcaCertificateAuthority#subject}
    */
    readonly subject: AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject;
}
export declare function acmpcaCertificateAuthorityCertificateAuthorityConfigurationToTerraform(struct?: AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference | AcmpcaCertificateAuthorityCertificateAuthorityConfiguration): any;
export declare class AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AcmpcaCertificateAuthorityCertificateAuthorityConfiguration | undefined;
    set internalValue(value: AcmpcaCertificateAuthorityCertificateAuthorityConfiguration | undefined);
    private _keyAlgorithm?;
    get keyAlgorithm(): string;
    set keyAlgorithm(value: string);
    get keyAlgorithmInput(): string;
    private _signingAlgorithm?;
    get signingAlgorithm(): string;
    set signingAlgorithm(value: string);
    get signingAlgorithmInput(): string;
    private _subject;
    get subject(): AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference;
    putSubject(value: AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject): void;
    get subjectInput(): AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject;
}
export interface AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#custom_cname AcmpcaCertificateAuthority#custom_cname}
    */
    readonly customCname?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#enabled AcmpcaCertificateAuthority#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#expiration_in_days AcmpcaCertificateAuthority#expiration_in_days}
    */
    readonly expirationInDays: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#s3_bucket_name AcmpcaCertificateAuthority#s3_bucket_name}
    */
    readonly s3BucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#s3_object_acl AcmpcaCertificateAuthority#s3_object_acl}
    */
    readonly s3ObjectAcl?: string;
}
export declare function acmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform(struct?: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference | AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration): any;
export declare class AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration | undefined;
    set internalValue(value: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration | undefined);
    private _customCname?;
    get customCname(): string;
    set customCname(value: string);
    resetCustomCname(): void;
    get customCnameInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _expirationInDays?;
    get expirationInDays(): number;
    set expirationInDays(value: number);
    get expirationInDaysInput(): number;
    private _s3BucketName?;
    get s3BucketName(): string;
    set s3BucketName(value: string);
    resetS3BucketName(): void;
    get s3BucketNameInput(): string;
    private _s3ObjectAcl?;
    get s3ObjectAcl(): string;
    set s3ObjectAcl(value: string);
    resetS3ObjectAcl(): void;
    get s3ObjectAclInput(): string;
}
export interface AcmpcaCertificateAuthorityRevocationConfiguration {
    /**
    * crl_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#crl_configuration AcmpcaCertificateAuthority#crl_configuration}
    */
    readonly crlConfiguration?: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration;
}
export declare function acmpcaCertificateAuthorityRevocationConfigurationToTerraform(struct?: AcmpcaCertificateAuthorityRevocationConfigurationOutputReference | AcmpcaCertificateAuthorityRevocationConfiguration): any;
export declare class AcmpcaCertificateAuthorityRevocationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AcmpcaCertificateAuthorityRevocationConfiguration | undefined;
    set internalValue(value: AcmpcaCertificateAuthorityRevocationConfiguration | undefined);
    private _crlConfiguration;
    get crlConfiguration(): AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference;
    putCrlConfiguration(value: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration): void;
    resetCrlConfiguration(): void;
    get crlConfigurationInput(): AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration;
}
export interface AcmpcaCertificateAuthorityTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#create AcmpcaCertificateAuthority#create}
    */
    readonly create?: string;
}
export declare function acmpcaCertificateAuthorityTimeoutsToTerraform(struct?: AcmpcaCertificateAuthorityTimeoutsOutputReference | AcmpcaCertificateAuthorityTimeouts): any;
export declare class AcmpcaCertificateAuthorityTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AcmpcaCertificateAuthorityTimeouts | undefined;
    set internalValue(value: AcmpcaCertificateAuthorityTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html aws_acmpca_certificate_authority}
*/
export declare class AcmpcaCertificateAuthority extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html aws_acmpca_certificate_authority} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AcmpcaCertificateAuthorityConfig
    */
    constructor(scope: Construct, id: string, config: AcmpcaCertificateAuthorityConfig);
    get arn(): string;
    get certificate(): string;
    get certificateChain(): string;
    get certificateSigningRequest(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    get id(): string;
    get notAfter(): string;
    get notBefore(): string;
    private _permanentDeletionTimeInDays?;
    get permanentDeletionTimeInDays(): number;
    set permanentDeletionTimeInDays(value: number);
    resetPermanentDeletionTimeInDays(): void;
    get permanentDeletionTimeInDaysInput(): number;
    get serial(): string;
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
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
    private _certificateAuthorityConfiguration;
    get certificateAuthorityConfiguration(): AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference;
    putCertificateAuthorityConfiguration(value: AcmpcaCertificateAuthorityCertificateAuthorityConfiguration): void;
    get certificateAuthorityConfigurationInput(): AcmpcaCertificateAuthorityCertificateAuthorityConfiguration;
    private _revocationConfiguration;
    get revocationConfiguration(): AcmpcaCertificateAuthorityRevocationConfigurationOutputReference;
    putRevocationConfiguration(value: AcmpcaCertificateAuthorityRevocationConfiguration): void;
    resetRevocationConfiguration(): void;
    get revocationConfigurationInput(): AcmpcaCertificateAuthorityRevocationConfiguration;
    private _timeouts;
    get timeouts(): AcmpcaCertificateAuthorityTimeoutsOutputReference;
    putTimeouts(value: AcmpcaCertificateAuthorityTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): AcmpcaCertificateAuthorityTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=acmpca-certificate-authority.d.ts.map