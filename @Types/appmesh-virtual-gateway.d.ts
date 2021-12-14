import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* App Mesh
*/
export interface AppmeshVirtualGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#mesh_name AppmeshVirtualGateway#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#mesh_owner AppmeshVirtualGateway#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#name AppmeshVirtualGateway#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#tags AppmeshVirtualGateway#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#tags_all AppmeshVirtualGateway#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * spec block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#spec AppmeshVirtualGateway#spec}
    */
    readonly spec: AppmeshVirtualGatewaySpec;
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_chain AppmeshVirtualGateway#certificate_chain}
    */
    readonly certificateChain: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#private_key AppmeshVirtualGateway#private_key}
    */
    readonly privateKey: string;
}
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile): any;
export declare class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile | undefined);
    private _certificateChain?;
    get certificateChain(): string;
    set certificateChain(value: string);
    get certificateChainInput(): string;
    private _privateKey?;
    get privateKey(): string;
    set privateKey(value: string);
    get privateKeyInput(): string;
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#secret_name AppmeshVirtualGateway#secret_name}
    */
    readonly secretName: string;
}
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds): any;
export declare class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds | undefined);
    private _secretName?;
    get secretName(): string;
    set secretName(value: string);
    get secretNameInput(): string;
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate {
    /**
    * file block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#file AppmeshVirtualGateway#file}
    */
    readonly file?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile;
    /**
    * sds block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#sds AppmeshVirtualGateway#sds}
    */
    readonly sds?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds;
}
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate): any;
export declare class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate | undefined);
    private _file;
    get file(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference;
    putFile(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile): void;
    resetFile(): void;
    get fileInput(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile;
    private _sds;
    get sds(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference;
    putSds(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds): void;
    resetSds(): void;
    get sdsInput(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds;
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#exact AppmeshVirtualGateway#exact}
    */
    readonly exact: string[];
}
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch): any;
export declare class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch | undefined);
    private _exact?;
    get exact(): string[];
    set exact(value: string[]);
    get exactInput(): string[];
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames {
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#match AppmeshVirtualGateway#match}
    */
    readonly match: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch;
}
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames): any;
export declare class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | undefined);
    private _match;
    get match(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference;
    putMatch(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch): void;
    get matchInput(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch;
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_authority_arns AppmeshVirtualGateway#certificate_authority_arns}
    */
    readonly certificateAuthorityArns: string[];
}
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm): any;
export declare class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm | undefined);
    private _certificateAuthorityArns?;
    get certificateAuthorityArns(): string[];
    set certificateAuthorityArns(value: string[]);
    get certificateAuthorityArnsInput(): string[];
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_chain AppmeshVirtualGateway#certificate_chain}
    */
    readonly certificateChain: string;
}
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile): any;
export declare class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile | undefined);
    private _certificateChain?;
    get certificateChain(): string;
    set certificateChain(value: string);
    get certificateChainInput(): string;
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#secret_name AppmeshVirtualGateway#secret_name}
    */
    readonly secretName: string;
}
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds): any;
export declare class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds | undefined);
    private _secretName?;
    get secretName(): string;
    set secretName(value: string);
    get secretNameInput(): string;
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust {
    /**
    * acm block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#acm AppmeshVirtualGateway#acm}
    */
    readonly acm?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm;
    /**
    * file block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#file AppmeshVirtualGateway#file}
    */
    readonly file?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile;
    /**
    * sds block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#sds AppmeshVirtualGateway#sds}
    */
    readonly sds?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds;
}
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust): any;
export declare class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust | undefined);
    private _acm;
    get acm(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference;
    putAcm(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm): void;
    resetAcm(): void;
    get acmInput(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm;
    private _file;
    get file(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference;
    putFile(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile): void;
    resetFile(): void;
    get fileInput(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile;
    private _sds;
    get sds(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference;
    putSds(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds): void;
    resetSds(): void;
    get sdsInput(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds;
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation {
    /**
    * subject_alternative_names block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#subject_alternative_names AppmeshVirtualGateway#subject_alternative_names}
    */
    readonly subjectAlternativeNames?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames;
    /**
    * trust block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#trust AppmeshVirtualGateway#trust}
    */
    readonly trust: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust;
}
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation): any;
export declare class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation | undefined);
    private _subjectAlternativeNames;
    get subjectAlternativeNames(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference;
    putSubjectAlternativeNames(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames): void;
    resetSubjectAlternativeNames(): void;
    get subjectAlternativeNamesInput(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames;
    private _trust;
    get trust(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference;
    putTrust(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust): void;
    get trustInput(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust;
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#enforce AppmeshVirtualGateway#enforce}
    */
    readonly enforce?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#ports AppmeshVirtualGateway#ports}
    */
    readonly ports?: number[];
    /**
    * certificate block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate AppmeshVirtualGateway#certificate}
    */
    readonly certificate?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate;
    /**
    * validation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#validation AppmeshVirtualGateway#validation}
    */
    readonly validation: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation;
}
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls): any;
export declare class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls | undefined);
    private _enforce?;
    get enforce(): boolean | cdktf.IResolvable;
    set enforce(value: boolean | cdktf.IResolvable);
    resetEnforce(): void;
    get enforceInput(): boolean | cdktf.IResolvable;
    private _ports?;
    get ports(): number[];
    set ports(value: number[]);
    resetPorts(): void;
    get portsInput(): number[];
    private _certificate;
    get certificate(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference;
    putCertificate(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate): void;
    resetCertificate(): void;
    get certificateInput(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate;
    private _validation;
    get validation(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference;
    putValidation(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation): void;
    get validationInput(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation;
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy {
    /**
    * tls block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#tls AppmeshVirtualGateway#tls}
    */
    readonly tls?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls;
}
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy): any;
export declare class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy | undefined);
    private _tls;
    get tls(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference;
    putTls(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls): void;
    resetTls(): void;
    get tlsInput(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls;
}
export interface AppmeshVirtualGatewaySpecBackendDefaults {
    /**
    * client_policy block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#client_policy AppmeshVirtualGateway#client_policy}
    */
    readonly clientPolicy?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy;
}
export declare function appmeshVirtualGatewaySpecBackendDefaultsToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsOutputReference | AppmeshVirtualGatewaySpecBackendDefaults): any;
export declare class AppmeshVirtualGatewaySpecBackendDefaultsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecBackendDefaults | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecBackendDefaults | undefined);
    private _clientPolicy;
    get clientPolicy(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference;
    putClientPolicy(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy): void;
    resetClientPolicy(): void;
    get clientPolicyInput(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy;
}
export interface AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#max_requests AppmeshVirtualGateway#max_requests}
    */
    readonly maxRequests: number;
}
export declare function appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference | AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc): any;
export declare class AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc | undefined);
    private _maxRequests?;
    get maxRequests(): number;
    set maxRequests(value: number);
    get maxRequestsInput(): number;
}
export interface AppmeshVirtualGatewaySpecListenerConnectionPoolHttp {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#max_connections AppmeshVirtualGateway#max_connections}
    */
    readonly maxConnections: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#max_pending_requests AppmeshVirtualGateway#max_pending_requests}
    */
    readonly maxPendingRequests?: number;
}
export declare function appmeshVirtualGatewaySpecListenerConnectionPoolHttpToTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference | AppmeshVirtualGatewaySpecListenerConnectionPoolHttp): any;
export declare class AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecListenerConnectionPoolHttp | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp | undefined);
    private _maxConnections?;
    get maxConnections(): number;
    set maxConnections(value: number);
    get maxConnectionsInput(): number;
    private _maxPendingRequests?;
    get maxPendingRequests(): number;
    set maxPendingRequests(value: number);
    resetMaxPendingRequests(): void;
    get maxPendingRequestsInput(): number;
}
export interface AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#max_requests AppmeshVirtualGateway#max_requests}
    */
    readonly maxRequests: number;
}
export declare function appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference | AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2): any;
export declare class AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 | undefined);
    private _maxRequests?;
    get maxRequests(): number;
    set maxRequests(value: number);
    get maxRequestsInput(): number;
}
export interface AppmeshVirtualGatewaySpecListenerConnectionPool {
    /**
    * grpc block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#grpc AppmeshVirtualGateway#grpc}
    */
    readonly grpc?: AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc;
    /**
    * http block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#http AppmeshVirtualGateway#http}
    */
    readonly http?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp;
    /**
    * http2 block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#http2 AppmeshVirtualGateway#http2}
    */
    readonly http2?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2;
}
export declare function appmeshVirtualGatewaySpecListenerConnectionPoolToTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference | AppmeshVirtualGatewaySpecListenerConnectionPool): any;
export declare class AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecListenerConnectionPool | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerConnectionPool | undefined);
    private _grpc;
    get grpc(): AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference;
    putGrpc(value: AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc): void;
    resetGrpc(): void;
    get grpcInput(): AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc;
    private _http;
    get http(): AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference;
    putHttp(value: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp): void;
    resetHttp(): void;
    get httpInput(): AppmeshVirtualGatewaySpecListenerConnectionPoolHttp;
    private _http2;
    get http2(): AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference;
    putHttp2(value: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2): void;
    resetHttp2(): void;
    get http2Input(): AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2;
}
export interface AppmeshVirtualGatewaySpecListenerHealthCheck {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#healthy_threshold AppmeshVirtualGateway#healthy_threshold}
    */
    readonly healthyThreshold: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#interval_millis AppmeshVirtualGateway#interval_millis}
    */
    readonly intervalMillis: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#path AppmeshVirtualGateway#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#port AppmeshVirtualGateway#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#protocol AppmeshVirtualGateway#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#timeout_millis AppmeshVirtualGateway#timeout_millis}
    */
    readonly timeoutMillis: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#unhealthy_threshold AppmeshVirtualGateway#unhealthy_threshold}
    */
    readonly unhealthyThreshold: number;
}
export declare function appmeshVirtualGatewaySpecListenerHealthCheckToTerraform(struct?: AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference | AppmeshVirtualGatewaySpecListenerHealthCheck): any;
export declare class AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecListenerHealthCheck | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerHealthCheck | undefined);
    private _healthyThreshold?;
    get healthyThreshold(): number;
    set healthyThreshold(value: number);
    get healthyThresholdInput(): number;
    private _intervalMillis?;
    get intervalMillis(): number;
    set intervalMillis(value: number);
    get intervalMillisInput(): number;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string;
    private _timeoutMillis?;
    get timeoutMillis(): number;
    set timeoutMillis(value: number);
    get timeoutMillisInput(): number;
    private _unhealthyThreshold?;
    get unhealthyThreshold(): number;
    set unhealthyThreshold(value: number);
    get unhealthyThresholdInput(): number;
}
export interface AppmeshVirtualGatewaySpecListenerPortMapping {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#port AppmeshVirtualGateway#port}
    */
    readonly port: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#protocol AppmeshVirtualGateway#protocol}
    */
    readonly protocol: string;
}
export declare function appmeshVirtualGatewaySpecListenerPortMappingToTerraform(struct?: AppmeshVirtualGatewaySpecListenerPortMappingOutputReference | AppmeshVirtualGatewaySpecListenerPortMapping): any;
export declare class AppmeshVirtualGatewaySpecListenerPortMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecListenerPortMapping | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerPortMapping | undefined);
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string;
}
export interface AppmeshVirtualGatewaySpecListenerTlsCertificateAcm {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_arn AppmeshVirtualGateway#certificate_arn}
    */
    readonly certificateArn: string;
}
export declare function appmeshVirtualGatewaySpecListenerTlsCertificateAcmToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference | AppmeshVirtualGatewaySpecListenerTlsCertificateAcm): any;
export declare class AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecListenerTlsCertificateAcm | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerTlsCertificateAcm | undefined);
    private _certificateArn?;
    get certificateArn(): string;
    set certificateArn(value: string);
    get certificateArnInput(): string;
}
export interface AppmeshVirtualGatewaySpecListenerTlsCertificateFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_chain AppmeshVirtualGateway#certificate_chain}
    */
    readonly certificateChain: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#private_key AppmeshVirtualGateway#private_key}
    */
    readonly privateKey: string;
}
export declare function appmeshVirtualGatewaySpecListenerTlsCertificateFileToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference | AppmeshVirtualGatewaySpecListenerTlsCertificateFile): any;
export declare class AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecListenerTlsCertificateFile | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerTlsCertificateFile | undefined);
    private _certificateChain?;
    get certificateChain(): string;
    set certificateChain(value: string);
    get certificateChainInput(): string;
    private _privateKey?;
    get privateKey(): string;
    set privateKey(value: string);
    get privateKeyInput(): string;
}
export interface AppmeshVirtualGatewaySpecListenerTlsCertificateSds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#secret_name AppmeshVirtualGateway#secret_name}
    */
    readonly secretName: string;
}
export declare function appmeshVirtualGatewaySpecListenerTlsCertificateSdsToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference | AppmeshVirtualGatewaySpecListenerTlsCertificateSds): any;
export declare class AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecListenerTlsCertificateSds | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerTlsCertificateSds | undefined);
    private _secretName?;
    get secretName(): string;
    set secretName(value: string);
    get secretNameInput(): string;
}
export interface AppmeshVirtualGatewaySpecListenerTlsCertificate {
    /**
    * acm block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#acm AppmeshVirtualGateway#acm}
    */
    readonly acm?: AppmeshVirtualGatewaySpecListenerTlsCertificateAcm;
    /**
    * file block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#file AppmeshVirtualGateway#file}
    */
    readonly file?: AppmeshVirtualGatewaySpecListenerTlsCertificateFile;
    /**
    * sds block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#sds AppmeshVirtualGateway#sds}
    */
    readonly sds?: AppmeshVirtualGatewaySpecListenerTlsCertificateSds;
}
export declare function appmeshVirtualGatewaySpecListenerTlsCertificateToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference | AppmeshVirtualGatewaySpecListenerTlsCertificate): any;
export declare class AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecListenerTlsCertificate | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerTlsCertificate | undefined);
    private _acm;
    get acm(): AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference;
    putAcm(value: AppmeshVirtualGatewaySpecListenerTlsCertificateAcm): void;
    resetAcm(): void;
    get acmInput(): AppmeshVirtualGatewaySpecListenerTlsCertificateAcm;
    private _file;
    get file(): AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference;
    putFile(value: AppmeshVirtualGatewaySpecListenerTlsCertificateFile): void;
    resetFile(): void;
    get fileInput(): AppmeshVirtualGatewaySpecListenerTlsCertificateFile;
    private _sds;
    get sds(): AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference;
    putSds(value: AppmeshVirtualGatewaySpecListenerTlsCertificateSds): void;
    resetSds(): void;
    get sdsInput(): AppmeshVirtualGatewaySpecListenerTlsCertificateSds;
}
export interface AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#exact AppmeshVirtualGateway#exact}
    */
    readonly exact: string[];
}
export declare function appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference | AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch): any;
export declare class AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch | undefined);
    private _exact?;
    get exact(): string[];
    set exact(value: string[]);
    get exactInput(): string[];
}
export interface AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames {
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#match AppmeshVirtualGateway#match}
    */
    readonly match: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch;
}
export declare function appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference | AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames): any;
export declare class AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames | undefined);
    private _match;
    get match(): AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference;
    putMatch(value: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch): void;
    get matchInput(): AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch;
}
export interface AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_chain AppmeshVirtualGateway#certificate_chain}
    */
    readonly certificateChain: string;
}
export declare function appmeshVirtualGatewaySpecListenerTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference | AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile): any;
export declare class AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile | undefined);
    private _certificateChain?;
    get certificateChain(): string;
    set certificateChain(value: string);
    get certificateChainInput(): string;
}
export interface AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#secret_name AppmeshVirtualGateway#secret_name}
    */
    readonly secretName: string;
}
export declare function appmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference | AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds): any;
export declare class AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds | undefined);
    private _secretName?;
    get secretName(): string;
    set secretName(value: string);
    get secretNameInput(): string;
}
export interface AppmeshVirtualGatewaySpecListenerTlsValidationTrust {
    /**
    * file block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#file AppmeshVirtualGateway#file}
    */
    readonly file?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile;
    /**
    * sds block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#sds AppmeshVirtualGateway#sds}
    */
    readonly sds?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds;
}
export declare function appmeshVirtualGatewaySpecListenerTlsValidationTrustToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference | AppmeshVirtualGatewaySpecListenerTlsValidationTrust): any;
export declare class AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecListenerTlsValidationTrust | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerTlsValidationTrust | undefined);
    private _file;
    get file(): AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference;
    putFile(value: AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile): void;
    resetFile(): void;
    get fileInput(): AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile;
    private _sds;
    get sds(): AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference;
    putSds(value: AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds): void;
    resetSds(): void;
    get sdsInput(): AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds;
}
export interface AppmeshVirtualGatewaySpecListenerTlsValidation {
    /**
    * subject_alternative_names block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#subject_alternative_names AppmeshVirtualGateway#subject_alternative_names}
    */
    readonly subjectAlternativeNames?: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames;
    /**
    * trust block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#trust AppmeshVirtualGateway#trust}
    */
    readonly trust: AppmeshVirtualGatewaySpecListenerTlsValidationTrust;
}
export declare function appmeshVirtualGatewaySpecListenerTlsValidationToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference | AppmeshVirtualGatewaySpecListenerTlsValidation): any;
export declare class AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecListenerTlsValidation | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerTlsValidation | undefined);
    private _subjectAlternativeNames;
    get subjectAlternativeNames(): AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference;
    putSubjectAlternativeNames(value: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames): void;
    resetSubjectAlternativeNames(): void;
    get subjectAlternativeNamesInput(): AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames;
    private _trust;
    get trust(): AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference;
    putTrust(value: AppmeshVirtualGatewaySpecListenerTlsValidationTrust): void;
    get trustInput(): AppmeshVirtualGatewaySpecListenerTlsValidationTrust;
}
export interface AppmeshVirtualGatewaySpecListenerTls {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#mode AppmeshVirtualGateway#mode}
    */
    readonly mode: string;
    /**
    * certificate block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate AppmeshVirtualGateway#certificate}
    */
    readonly certificate: AppmeshVirtualGatewaySpecListenerTlsCertificate;
    /**
    * validation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#validation AppmeshVirtualGateway#validation}
    */
    readonly validation?: AppmeshVirtualGatewaySpecListenerTlsValidation;
}
export declare function appmeshVirtualGatewaySpecListenerTlsToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsOutputReference | AppmeshVirtualGatewaySpecListenerTls): any;
export declare class AppmeshVirtualGatewaySpecListenerTlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecListenerTls | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerTls | undefined);
    private _mode?;
    get mode(): string;
    set mode(value: string);
    get modeInput(): string;
    private _certificate;
    get certificate(): AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference;
    putCertificate(value: AppmeshVirtualGatewaySpecListenerTlsCertificate): void;
    get certificateInput(): AppmeshVirtualGatewaySpecListenerTlsCertificate;
    private _validation;
    get validation(): AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference;
    putValidation(value: AppmeshVirtualGatewaySpecListenerTlsValidation): void;
    resetValidation(): void;
    get validationInput(): AppmeshVirtualGatewaySpecListenerTlsValidation;
}
export interface AppmeshVirtualGatewaySpecListener {
    /**
    * connection_pool block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#connection_pool AppmeshVirtualGateway#connection_pool}
    */
    readonly connectionPool?: AppmeshVirtualGatewaySpecListenerConnectionPool;
    /**
    * health_check block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#health_check AppmeshVirtualGateway#health_check}
    */
    readonly healthCheck?: AppmeshVirtualGatewaySpecListenerHealthCheck;
    /**
    * port_mapping block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#port_mapping AppmeshVirtualGateway#port_mapping}
    */
    readonly portMapping: AppmeshVirtualGatewaySpecListenerPortMapping;
    /**
    * tls block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#tls AppmeshVirtualGateway#tls}
    */
    readonly tls?: AppmeshVirtualGatewaySpecListenerTls;
}
export declare function appmeshVirtualGatewaySpecListenerToTerraform(struct?: AppmeshVirtualGatewaySpecListenerOutputReference | AppmeshVirtualGatewaySpecListener): any;
export declare class AppmeshVirtualGatewaySpecListenerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecListener | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListener | undefined);
    private _connectionPool;
    get connectionPool(): AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference;
    putConnectionPool(value: AppmeshVirtualGatewaySpecListenerConnectionPool): void;
    resetConnectionPool(): void;
    get connectionPoolInput(): AppmeshVirtualGatewaySpecListenerConnectionPool;
    private _healthCheck;
    get healthCheck(): AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference;
    putHealthCheck(value: AppmeshVirtualGatewaySpecListenerHealthCheck): void;
    resetHealthCheck(): void;
    get healthCheckInput(): AppmeshVirtualGatewaySpecListenerHealthCheck;
    private _portMapping;
    get portMapping(): AppmeshVirtualGatewaySpecListenerPortMappingOutputReference;
    putPortMapping(value: AppmeshVirtualGatewaySpecListenerPortMapping): void;
    get portMappingInput(): AppmeshVirtualGatewaySpecListenerPortMapping;
    private _tls;
    get tls(): AppmeshVirtualGatewaySpecListenerTlsOutputReference;
    putTls(value: AppmeshVirtualGatewaySpecListenerTls): void;
    resetTls(): void;
    get tlsInput(): AppmeshVirtualGatewaySpecListenerTls;
}
export interface AppmeshVirtualGatewaySpecLoggingAccessLogFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#path AppmeshVirtualGateway#path}
    */
    readonly path: string;
}
export declare function appmeshVirtualGatewaySpecLoggingAccessLogFileToTerraform(struct?: AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference | AppmeshVirtualGatewaySpecLoggingAccessLogFile): any;
export declare class AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecLoggingAccessLogFile | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecLoggingAccessLogFile | undefined);
    private _path?;
    get path(): string;
    set path(value: string);
    get pathInput(): string;
}
export interface AppmeshVirtualGatewaySpecLoggingAccessLog {
    /**
    * file block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#file AppmeshVirtualGateway#file}
    */
    readonly file?: AppmeshVirtualGatewaySpecLoggingAccessLogFile;
}
export declare function appmeshVirtualGatewaySpecLoggingAccessLogToTerraform(struct?: AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference | AppmeshVirtualGatewaySpecLoggingAccessLog): any;
export declare class AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecLoggingAccessLog | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecLoggingAccessLog | undefined);
    private _file;
    get file(): AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference;
    putFile(value: AppmeshVirtualGatewaySpecLoggingAccessLogFile): void;
    resetFile(): void;
    get fileInput(): AppmeshVirtualGatewaySpecLoggingAccessLogFile;
}
export interface AppmeshVirtualGatewaySpecLogging {
    /**
    * access_log block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#access_log AppmeshVirtualGateway#access_log}
    */
    readonly accessLog?: AppmeshVirtualGatewaySpecLoggingAccessLog;
}
export declare function appmeshVirtualGatewaySpecLoggingToTerraform(struct?: AppmeshVirtualGatewaySpecLoggingOutputReference | AppmeshVirtualGatewaySpecLogging): any;
export declare class AppmeshVirtualGatewaySpecLoggingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecLogging | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecLogging | undefined);
    private _accessLog;
    get accessLog(): AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference;
    putAccessLog(value: AppmeshVirtualGatewaySpecLoggingAccessLog): void;
    resetAccessLog(): void;
    get accessLogInput(): AppmeshVirtualGatewaySpecLoggingAccessLog;
}
export interface AppmeshVirtualGatewaySpec {
    /**
    * backend_defaults block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#backend_defaults AppmeshVirtualGateway#backend_defaults}
    */
    readonly backendDefaults?: AppmeshVirtualGatewaySpecBackendDefaults;
    /**
    * listener block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#listener AppmeshVirtualGateway#listener}
    */
    readonly listener: AppmeshVirtualGatewaySpecListener;
    /**
    * logging block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#logging AppmeshVirtualGateway#logging}
    */
    readonly logging?: AppmeshVirtualGatewaySpecLogging;
}
export declare function appmeshVirtualGatewaySpecToTerraform(struct?: AppmeshVirtualGatewaySpecOutputReference | AppmeshVirtualGatewaySpec): any;
export declare class AppmeshVirtualGatewaySpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualGatewaySpec | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpec | undefined);
    private _backendDefaults;
    get backendDefaults(): AppmeshVirtualGatewaySpecBackendDefaultsOutputReference;
    putBackendDefaults(value: AppmeshVirtualGatewaySpecBackendDefaults): void;
    resetBackendDefaults(): void;
    get backendDefaultsInput(): AppmeshVirtualGatewaySpecBackendDefaults;
    private _listener;
    get listener(): AppmeshVirtualGatewaySpecListenerOutputReference;
    putListener(value: AppmeshVirtualGatewaySpecListener): void;
    get listenerInput(): AppmeshVirtualGatewaySpecListener;
    private _logging;
    get logging(): AppmeshVirtualGatewaySpecLoggingOutputReference;
    putLogging(value: AppmeshVirtualGatewaySpecLogging): void;
    resetLogging(): void;
    get loggingInput(): AppmeshVirtualGatewaySpecLogging;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html aws_appmesh_virtual_gateway}
*/
export declare class AppmeshVirtualGateway extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html aws_appmesh_virtual_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshVirtualGatewayConfig
    */
    constructor(scope: Construct, id: string, config: AppmeshVirtualGatewayConfig);
    get arn(): string;
    get createdDate(): string;
    get id(): string;
    get lastUpdatedDate(): string;
    private _meshName?;
    get meshName(): string;
    set meshName(value: string);
    get meshNameInput(): string;
    private _meshOwner?;
    get meshOwner(): string;
    set meshOwner(value: string);
    resetMeshOwner(): void;
    get meshOwnerInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get resourceOwner(): string;
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
    private _spec;
    get spec(): AppmeshVirtualGatewaySpecOutputReference;
    putSpec(value: AppmeshVirtualGatewaySpec): void;
    get specInput(): AppmeshVirtualGatewaySpec;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=appmesh-virtual-gateway.d.ts.map