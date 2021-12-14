import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* App Mesh
*/
export interface AppmeshVirtualNodeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#mesh_name AppmeshVirtualNode#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#mesh_owner AppmeshVirtualNode#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#name AppmeshVirtualNode#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tags AppmeshVirtualNode#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tags_all AppmeshVirtualNode#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * spec block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#spec AppmeshVirtualNode#spec}
    */
    readonly spec: AppmeshVirtualNodeSpec;
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}
    */
    readonly certificateChain: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#private_key AppmeshVirtualNode#private_key}
    */
    readonly privateKey: string;
}
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile): any;
export declare class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile | undefined);
    private _certificateChain?;
    get certificateChain(): string;
    set certificateChain(value: string);
    get certificateChainInput(): string;
    private _privateKey?;
    get privateKey(): string;
    set privateKey(value: string);
    get privateKeyInput(): string;
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}
    */
    readonly secretName: string;
}
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds): any;
export declare class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds | undefined);
    private _secretName?;
    get secretName(): string;
    set secretName(value: string);
    get secretNameInput(): string;
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate {
    /**
    * file block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
    */
    readonly file?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile;
    /**
    * sds block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
    */
    readonly sds?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds;
}
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate): any;
export declare class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate | undefined);
    private _file;
    get file(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileOutputReference;
    putFile(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile): void;
    resetFile(): void;
    get fileInput(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile;
    private _sds;
    get sds(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsOutputReference;
    putSds(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds): void;
    resetSds(): void;
    get sdsInput(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds;
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#exact AppmeshVirtualNode#exact}
    */
    readonly exact: string[];
}
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch): any;
export declare class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch | undefined);
    private _exact?;
    get exact(): string[];
    set exact(value: string[]);
    get exactInput(): string[];
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames {
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#match AppmeshVirtualNode#match}
    */
    readonly match: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch;
}
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames): any;
export declare class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames | undefined);
    private _match;
    get match(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference;
    putMatch(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch): void;
    get matchInput(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch;
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_authority_arns AppmeshVirtualNode#certificate_authority_arns}
    */
    readonly certificateAuthorityArns: string[];
}
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm): any;
export declare class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm | undefined);
    private _certificateAuthorityArns?;
    get certificateAuthorityArns(): string[];
    set certificateAuthorityArns(value: string[]);
    get certificateAuthorityArnsInput(): string[];
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}
    */
    readonly certificateChain: string;
}
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile): any;
export declare class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile | undefined);
    private _certificateChain?;
    get certificateChain(): string;
    set certificateChain(value: string);
    get certificateChainInput(): string;
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}
    */
    readonly secretName: string;
}
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds): any;
export declare class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds | undefined);
    private _secretName?;
    get secretName(): string;
    set secretName(value: string);
    get secretNameInput(): string;
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust {
    /**
    * acm block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#acm AppmeshVirtualNode#acm}
    */
    readonly acm?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm;
    /**
    * file block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
    */
    readonly file?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile;
    /**
    * sds block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
    */
    readonly sds?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds;
}
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust): any;
export declare class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust | undefined);
    private _acm;
    get acm(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmOutputReference;
    putAcm(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm): void;
    resetAcm(): void;
    get acmInput(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm;
    private _file;
    get file(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileOutputReference;
    putFile(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile): void;
    resetFile(): void;
    get fileInput(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile;
    private _sds;
    get sds(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsOutputReference;
    putSds(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds): void;
    resetSds(): void;
    get sdsInput(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds;
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation {
    /**
    * subject_alternative_names block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#subject_alternative_names AppmeshVirtualNode#subject_alternative_names}
    */
    readonly subjectAlternativeNames?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames;
    /**
    * trust block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#trust AppmeshVirtualNode#trust}
    */
    readonly trust: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust;
}
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation): any;
export declare class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation | undefined);
    private _subjectAlternativeNames;
    get subjectAlternativeNames(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesOutputReference;
    putSubjectAlternativeNames(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames): void;
    resetSubjectAlternativeNames(): void;
    get subjectAlternativeNamesInput(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames;
    private _trust;
    get trust(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustOutputReference;
    putTrust(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust): void;
    get trustInput(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust;
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#enforce AppmeshVirtualNode#enforce}
    */
    readonly enforce?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#ports AppmeshVirtualNode#ports}
    */
    readonly ports?: number[];
    /**
    * certificate block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate AppmeshVirtualNode#certificate}
    */
    readonly certificate?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate;
    /**
    * validation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#validation AppmeshVirtualNode#validation}
    */
    readonly validation: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation;
}
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls): any;
export declare class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls | undefined);
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
    get certificate(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateOutputReference;
    putCertificate(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate): void;
    resetCertificate(): void;
    get certificateInput(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate;
    private _validation;
    get validation(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationOutputReference;
    putValidation(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation): void;
    get validationInput(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation;
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy {
    /**
    * tls block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tls AppmeshVirtualNode#tls}
    */
    readonly tls?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls;
}
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy): any;
export declare class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy | undefined);
    private _tls;
    get tls(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsOutputReference;
    putTls(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls): void;
    resetTls(): void;
    get tlsInput(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls;
}
export interface AppmeshVirtualNodeSpecBackendVirtualService {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#virtual_service_name AppmeshVirtualNode#virtual_service_name}
    */
    readonly virtualServiceName: string;
    /**
    * client_policy block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#client_policy AppmeshVirtualNode#client_policy}
    */
    readonly clientPolicy?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy;
}
export declare function appmeshVirtualNodeSpecBackendVirtualServiceToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceOutputReference | AppmeshVirtualNodeSpecBackendVirtualService): any;
export declare class AppmeshVirtualNodeSpecBackendVirtualServiceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecBackendVirtualService | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualService | undefined);
    private _virtualServiceName?;
    get virtualServiceName(): string;
    set virtualServiceName(value: string);
    get virtualServiceNameInput(): string;
    private _clientPolicy;
    get clientPolicy(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyOutputReference;
    putClientPolicy(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy): void;
    resetClientPolicy(): void;
    get clientPolicyInput(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy;
}
export interface AppmeshVirtualNodeSpecBackend {
    /**
    * virtual_service block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#virtual_service AppmeshVirtualNode#virtual_service}
    */
    readonly virtualService: AppmeshVirtualNodeSpecBackendVirtualService;
}
export declare function appmeshVirtualNodeSpecBackendToTerraform(struct?: AppmeshVirtualNodeSpecBackend): any;
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}
    */
    readonly certificateChain: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#private_key AppmeshVirtualNode#private_key}
    */
    readonly privateKey: string;
}
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile): any;
export declare class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile | undefined);
    private _certificateChain?;
    get certificateChain(): string;
    set certificateChain(value: string);
    get certificateChainInput(): string;
    private _privateKey?;
    get privateKey(): string;
    set privateKey(value: string);
    get privateKeyInput(): string;
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}
    */
    readonly secretName: string;
}
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds): any;
export declare class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds | undefined);
    private _secretName?;
    get secretName(): string;
    set secretName(value: string);
    get secretNameInput(): string;
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate {
    /**
    * file block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
    */
    readonly file?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile;
    /**
    * sds block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
    */
    readonly sds?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds;
}
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate): any;
export declare class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate | undefined);
    private _file;
    get file(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference;
    putFile(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile): void;
    resetFile(): void;
    get fileInput(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile;
    private _sds;
    get sds(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference;
    putSds(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds): void;
    resetSds(): void;
    get sdsInput(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds;
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#exact AppmeshVirtualNode#exact}
    */
    readonly exact: string[];
}
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch): any;
export declare class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch | undefined);
    private _exact?;
    get exact(): string[];
    set exact(value: string[]);
    get exactInput(): string[];
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames {
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#match AppmeshVirtualNode#match}
    */
    readonly match: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch;
}
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames): any;
export declare class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | undefined);
    private _match;
    get match(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference;
    putMatch(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch): void;
    get matchInput(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch;
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_authority_arns AppmeshVirtualNode#certificate_authority_arns}
    */
    readonly certificateAuthorityArns: string[];
}
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm): any;
export declare class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm | undefined);
    private _certificateAuthorityArns?;
    get certificateAuthorityArns(): string[];
    set certificateAuthorityArns(value: string[]);
    get certificateAuthorityArnsInput(): string[];
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}
    */
    readonly certificateChain: string;
}
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile): any;
export declare class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile | undefined);
    private _certificateChain?;
    get certificateChain(): string;
    set certificateChain(value: string);
    get certificateChainInput(): string;
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}
    */
    readonly secretName: string;
}
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds): any;
export declare class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds | undefined);
    private _secretName?;
    get secretName(): string;
    set secretName(value: string);
    get secretNameInput(): string;
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust {
    /**
    * acm block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#acm AppmeshVirtualNode#acm}
    */
    readonly acm?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm;
    /**
    * file block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
    */
    readonly file?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile;
    /**
    * sds block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
    */
    readonly sds?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds;
}
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust): any;
export declare class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust | undefined);
    private _acm;
    get acm(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference;
    putAcm(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm): void;
    resetAcm(): void;
    get acmInput(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm;
    private _file;
    get file(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference;
    putFile(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile): void;
    resetFile(): void;
    get fileInput(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile;
    private _sds;
    get sds(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference;
    putSds(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds): void;
    resetSds(): void;
    get sdsInput(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds;
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation {
    /**
    * subject_alternative_names block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#subject_alternative_names AppmeshVirtualNode#subject_alternative_names}
    */
    readonly subjectAlternativeNames?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames;
    /**
    * trust block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#trust AppmeshVirtualNode#trust}
    */
    readonly trust: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust;
}
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation): any;
export declare class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation | undefined);
    private _subjectAlternativeNames;
    get subjectAlternativeNames(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference;
    putSubjectAlternativeNames(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames): void;
    resetSubjectAlternativeNames(): void;
    get subjectAlternativeNamesInput(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames;
    private _trust;
    get trust(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference;
    putTrust(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust): void;
    get trustInput(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust;
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#enforce AppmeshVirtualNode#enforce}
    */
    readonly enforce?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#ports AppmeshVirtualNode#ports}
    */
    readonly ports?: number[];
    /**
    * certificate block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate AppmeshVirtualNode#certificate}
    */
    readonly certificate?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate;
    /**
    * validation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#validation AppmeshVirtualNode#validation}
    */
    readonly validation: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation;
}
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls): any;
export declare class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls | undefined);
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
    get certificate(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateOutputReference;
    putCertificate(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate): void;
    resetCertificate(): void;
    get certificateInput(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate;
    private _validation;
    get validation(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationOutputReference;
    putValidation(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation): void;
    get validationInput(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation;
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicy {
    /**
    * tls block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tls AppmeshVirtualNode#tls}
    */
    readonly tls?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls;
}
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicy): any;
export declare class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicy | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicy | undefined);
    private _tls;
    get tls(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsOutputReference;
    putTls(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls): void;
    resetTls(): void;
    get tlsInput(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls;
}
export interface AppmeshVirtualNodeSpecBackendDefaults {
    /**
    * client_policy block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#client_policy AppmeshVirtualNode#client_policy}
    */
    readonly clientPolicy?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicy;
}
export declare function appmeshVirtualNodeSpecBackendDefaultsToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsOutputReference | AppmeshVirtualNodeSpecBackendDefaults): any;
export declare class AppmeshVirtualNodeSpecBackendDefaultsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecBackendDefaults | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendDefaults | undefined);
    private _clientPolicy;
    get clientPolicy(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyOutputReference;
    putClientPolicy(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicy): void;
    resetClientPolicy(): void;
    get clientPolicyInput(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicy;
}
export interface AppmeshVirtualNodeSpecListenerConnectionPoolGrpc {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_requests AppmeshVirtualNode#max_requests}
    */
    readonly maxRequests: number;
}
export declare function appmeshVirtualNodeSpecListenerConnectionPoolGrpcToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolGrpcOutputReference | AppmeshVirtualNodeSpecListenerConnectionPoolGrpc): any;
export declare class AppmeshVirtualNodeSpecListenerConnectionPoolGrpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerConnectionPoolGrpc | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerConnectionPoolGrpc | undefined);
    private _maxRequests?;
    get maxRequests(): number;
    set maxRequests(value: number);
    get maxRequestsInput(): number;
}
export interface AppmeshVirtualNodeSpecListenerConnectionPoolHttp {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_connections AppmeshVirtualNode#max_connections}
    */
    readonly maxConnections: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_pending_requests AppmeshVirtualNode#max_pending_requests}
    */
    readonly maxPendingRequests?: number;
}
export declare function appmeshVirtualNodeSpecListenerConnectionPoolHttpToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolHttpOutputReference | AppmeshVirtualNodeSpecListenerConnectionPoolHttp): any;
export declare class AppmeshVirtualNodeSpecListenerConnectionPoolHttpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerConnectionPoolHttp | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerConnectionPoolHttp | undefined);
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
export interface AppmeshVirtualNodeSpecListenerConnectionPoolHttp2 {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_requests AppmeshVirtualNode#max_requests}
    */
    readonly maxRequests: number;
}
export declare function appmeshVirtualNodeSpecListenerConnectionPoolHttp2ToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp2OutputReference | AppmeshVirtualNodeSpecListenerConnectionPoolHttp2): any;
export declare class AppmeshVirtualNodeSpecListenerConnectionPoolHttp2OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerConnectionPoolHttp2 | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerConnectionPoolHttp2 | undefined);
    private _maxRequests?;
    get maxRequests(): number;
    set maxRequests(value: number);
    get maxRequestsInput(): number;
}
export interface AppmeshVirtualNodeSpecListenerConnectionPoolTcp {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_connections AppmeshVirtualNode#max_connections}
    */
    readonly maxConnections: number;
}
export declare function appmeshVirtualNodeSpecListenerConnectionPoolTcpToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolTcpOutputReference | AppmeshVirtualNodeSpecListenerConnectionPoolTcp): any;
export declare class AppmeshVirtualNodeSpecListenerConnectionPoolTcpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerConnectionPoolTcp | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerConnectionPoolTcp | undefined);
    private _maxConnections?;
    get maxConnections(): number;
    set maxConnections(value: number);
    get maxConnectionsInput(): number;
}
export interface AppmeshVirtualNodeSpecListenerConnectionPool {
    /**
    * grpc block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#grpc AppmeshVirtualNode#grpc}
    */
    readonly grpc?: AppmeshVirtualNodeSpecListenerConnectionPoolGrpc;
    /**
    * http block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#http AppmeshVirtualNode#http}
    */
    readonly http?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp;
    /**
    * http2 block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#http2 AppmeshVirtualNode#http2}
    */
    readonly http2?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp2;
    /**
    * tcp block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tcp AppmeshVirtualNode#tcp}
    */
    readonly tcp?: AppmeshVirtualNodeSpecListenerConnectionPoolTcp;
}
export declare function appmeshVirtualNodeSpecListenerConnectionPoolToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolOutputReference | AppmeshVirtualNodeSpecListenerConnectionPool): any;
export declare class AppmeshVirtualNodeSpecListenerConnectionPoolOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerConnectionPool | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerConnectionPool | undefined);
    private _grpc;
    get grpc(): AppmeshVirtualNodeSpecListenerConnectionPoolGrpcOutputReference;
    putGrpc(value: AppmeshVirtualNodeSpecListenerConnectionPoolGrpc): void;
    resetGrpc(): void;
    get grpcInput(): AppmeshVirtualNodeSpecListenerConnectionPoolGrpc;
    private _http;
    get http(): AppmeshVirtualNodeSpecListenerConnectionPoolHttpOutputReference;
    putHttp(value: AppmeshVirtualNodeSpecListenerConnectionPoolHttp): void;
    resetHttp(): void;
    get httpInput(): AppmeshVirtualNodeSpecListenerConnectionPoolHttp;
    private _http2;
    get http2(): AppmeshVirtualNodeSpecListenerConnectionPoolHttp2OutputReference;
    putHttp2(value: AppmeshVirtualNodeSpecListenerConnectionPoolHttp2): void;
    resetHttp2(): void;
    get http2Input(): AppmeshVirtualNodeSpecListenerConnectionPoolHttp2;
    private _tcp;
    get tcp(): AppmeshVirtualNodeSpecListenerConnectionPoolTcpOutputReference;
    putTcp(value: AppmeshVirtualNodeSpecListenerConnectionPoolTcp): void;
    resetTcp(): void;
    get tcpInput(): AppmeshVirtualNodeSpecListenerConnectionPoolTcp;
}
export interface AppmeshVirtualNodeSpecListenerHealthCheck {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#healthy_threshold AppmeshVirtualNode#healthy_threshold}
    */
    readonly healthyThreshold: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#interval_millis AppmeshVirtualNode#interval_millis}
    */
    readonly intervalMillis: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#path AppmeshVirtualNode#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#port AppmeshVirtualNode#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#protocol AppmeshVirtualNode#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#timeout_millis AppmeshVirtualNode#timeout_millis}
    */
    readonly timeoutMillis: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unhealthy_threshold AppmeshVirtualNode#unhealthy_threshold}
    */
    readonly unhealthyThreshold: number;
}
export declare function appmeshVirtualNodeSpecListenerHealthCheckToTerraform(struct?: AppmeshVirtualNodeSpecListenerHealthCheckOutputReference | AppmeshVirtualNodeSpecListenerHealthCheck): any;
export declare class AppmeshVirtualNodeSpecListenerHealthCheckOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerHealthCheck | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerHealthCheck | undefined);
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
export interface AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
    */
    readonly value: number;
}
export declare function appmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationToTerraform(struct?: AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationOutputReference | AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration): any;
export declare class AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface AppmeshVirtualNodeSpecListenerOutlierDetectionInterval {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
    */
    readonly value: number;
}
export declare function appmeshVirtualNodeSpecListenerOutlierDetectionIntervalToTerraform(struct?: AppmeshVirtualNodeSpecListenerOutlierDetectionIntervalOutputReference | AppmeshVirtualNodeSpecListenerOutlierDetectionInterval): any;
export declare class AppmeshVirtualNodeSpecListenerOutlierDetectionIntervalOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerOutlierDetectionInterval | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerOutlierDetectionInterval | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface AppmeshVirtualNodeSpecListenerOutlierDetection {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_ejection_percent AppmeshVirtualNode#max_ejection_percent}
    */
    readonly maxEjectionPercent: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_server_errors AppmeshVirtualNode#max_server_errors}
    */
    readonly maxServerErrors: number;
    /**
    * base_ejection_duration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#base_ejection_duration AppmeshVirtualNode#base_ejection_duration}
    */
    readonly baseEjectionDuration: AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration;
    /**
    * interval block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#interval AppmeshVirtualNode#interval}
    */
    readonly interval: AppmeshVirtualNodeSpecListenerOutlierDetectionInterval;
}
export declare function appmeshVirtualNodeSpecListenerOutlierDetectionToTerraform(struct?: AppmeshVirtualNodeSpecListenerOutlierDetectionOutputReference | AppmeshVirtualNodeSpecListenerOutlierDetection): any;
export declare class AppmeshVirtualNodeSpecListenerOutlierDetectionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerOutlierDetection | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerOutlierDetection | undefined);
    private _maxEjectionPercent?;
    get maxEjectionPercent(): number;
    set maxEjectionPercent(value: number);
    get maxEjectionPercentInput(): number;
    private _maxServerErrors?;
    get maxServerErrors(): number;
    set maxServerErrors(value: number);
    get maxServerErrorsInput(): number;
    private _baseEjectionDuration;
    get baseEjectionDuration(): AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationOutputReference;
    putBaseEjectionDuration(value: AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration): void;
    get baseEjectionDurationInput(): AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration;
    private _interval;
    get interval(): AppmeshVirtualNodeSpecListenerOutlierDetectionIntervalOutputReference;
    putInterval(value: AppmeshVirtualNodeSpecListenerOutlierDetectionInterval): void;
    get intervalInput(): AppmeshVirtualNodeSpecListenerOutlierDetectionInterval;
}
export interface AppmeshVirtualNodeSpecListenerPortMapping {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#port AppmeshVirtualNode#port}
    */
    readonly port: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#protocol AppmeshVirtualNode#protocol}
    */
    readonly protocol: string;
}
export declare function appmeshVirtualNodeSpecListenerPortMappingToTerraform(struct?: AppmeshVirtualNodeSpecListenerPortMappingOutputReference | AppmeshVirtualNodeSpecListenerPortMapping): any;
export declare class AppmeshVirtualNodeSpecListenerPortMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerPortMapping | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerPortMapping | undefined);
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
    */
    readonly value: number;
}
export declare function appmeshVirtualNodeSpecListenerTimeoutGrpcIdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutGrpcIdleOutputReference | AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle): any;
export declare class AppmeshVirtualNodeSpecListenerTimeoutGrpcIdleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
    */
    readonly value: number;
}
export declare function appmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestOutputReference | AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest): any;
export declare class AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutGrpc {
    /**
    * idle block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#idle AppmeshVirtualNode#idle}
    */
    readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle;
    /**
    * per_request block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#per_request AppmeshVirtualNode#per_request}
    */
    readonly perRequest?: AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest;
}
export declare function appmeshVirtualNodeSpecListenerTimeoutGrpcToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutGrpcOutputReference | AppmeshVirtualNodeSpecListenerTimeoutGrpc): any;
export declare class AppmeshVirtualNodeSpecListenerTimeoutGrpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutGrpc | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutGrpc | undefined);
    private _idle;
    get idle(): AppmeshVirtualNodeSpecListenerTimeoutGrpcIdleOutputReference;
    putIdle(value: AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle): void;
    resetIdle(): void;
    get idleInput(): AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle;
    private _perRequest;
    get perRequest(): AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestOutputReference;
    putPerRequest(value: AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest): void;
    resetPerRequest(): void;
    get perRequestInput(): AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttpIdle {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
    */
    readonly value: number;
}
export declare function appmeshVirtualNodeSpecListenerTimeoutHttpIdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttpIdleOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttpIdle): any;
export declare class AppmeshVirtualNodeSpecListenerTimeoutHttpIdleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutHttpIdle | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutHttpIdle | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
    */
    readonly value: number;
}
export declare function appmeshVirtualNodeSpecListenerTimeoutHttpPerRequestToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequestOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest): any;
export declare class AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttp {
    /**
    * idle block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#idle AppmeshVirtualNode#idle}
    */
    readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutHttpIdle;
    /**
    * per_request block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#per_request AppmeshVirtualNode#per_request}
    */
    readonly perRequest?: AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest;
}
export declare function appmeshVirtualNodeSpecListenerTimeoutHttpToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttpOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttp): any;
export declare class AppmeshVirtualNodeSpecListenerTimeoutHttpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutHttp | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutHttp | undefined);
    private _idle;
    get idle(): AppmeshVirtualNodeSpecListenerTimeoutHttpIdleOutputReference;
    putIdle(value: AppmeshVirtualNodeSpecListenerTimeoutHttpIdle): void;
    resetIdle(): void;
    get idleInput(): AppmeshVirtualNodeSpecListenerTimeoutHttpIdle;
    private _perRequest;
    get perRequest(): AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequestOutputReference;
    putPerRequest(value: AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest): void;
    resetPerRequest(): void;
    get perRequestInput(): AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
    */
    readonly value: number;
}
export declare function appmeshVirtualNodeSpecListenerTimeoutHttp2IdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp2IdleOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle): any;
export declare class AppmeshVirtualNodeSpecListenerTimeoutHttp2IdleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
    */
    readonly value: number;
}
export declare function appmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest): any;
export declare class AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttp2 {
    /**
    * idle block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#idle AppmeshVirtualNode#idle}
    */
    readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle;
    /**
    * per_request block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#per_request AppmeshVirtualNode#per_request}
    */
    readonly perRequest?: AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest;
}
export declare function appmeshVirtualNodeSpecListenerTimeoutHttp2ToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp2OutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttp2): any;
export declare class AppmeshVirtualNodeSpecListenerTimeoutHttp2OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutHttp2 | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutHttp2 | undefined);
    private _idle;
    get idle(): AppmeshVirtualNodeSpecListenerTimeoutHttp2IdleOutputReference;
    putIdle(value: AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle): void;
    resetIdle(): void;
    get idleInput(): AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle;
    private _perRequest;
    get perRequest(): AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestOutputReference;
    putPerRequest(value: AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest): void;
    resetPerRequest(): void;
    get perRequestInput(): AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutTcpIdle {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
    */
    readonly value: number;
}
export declare function appmeshVirtualNodeSpecListenerTimeoutTcpIdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutTcpIdleOutputReference | AppmeshVirtualNodeSpecListenerTimeoutTcpIdle): any;
export declare class AppmeshVirtualNodeSpecListenerTimeoutTcpIdleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutTcpIdle | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutTcpIdle | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutTcp {
    /**
    * idle block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#idle AppmeshVirtualNode#idle}
    */
    readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutTcpIdle;
}
export declare function appmeshVirtualNodeSpecListenerTimeoutTcpToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutTcpOutputReference | AppmeshVirtualNodeSpecListenerTimeoutTcp): any;
export declare class AppmeshVirtualNodeSpecListenerTimeoutTcpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutTcp | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutTcp | undefined);
    private _idle;
    get idle(): AppmeshVirtualNodeSpecListenerTimeoutTcpIdleOutputReference;
    putIdle(value: AppmeshVirtualNodeSpecListenerTimeoutTcpIdle): void;
    resetIdle(): void;
    get idleInput(): AppmeshVirtualNodeSpecListenerTimeoutTcpIdle;
}
export interface AppmeshVirtualNodeSpecListenerTimeout {
    /**
    * grpc block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#grpc AppmeshVirtualNode#grpc}
    */
    readonly grpc?: AppmeshVirtualNodeSpecListenerTimeoutGrpc;
    /**
    * http block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#http AppmeshVirtualNode#http}
    */
    readonly http?: AppmeshVirtualNodeSpecListenerTimeoutHttp;
    /**
    * http2 block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#http2 AppmeshVirtualNode#http2}
    */
    readonly http2?: AppmeshVirtualNodeSpecListenerTimeoutHttp2;
    /**
    * tcp block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tcp AppmeshVirtualNode#tcp}
    */
    readonly tcp?: AppmeshVirtualNodeSpecListenerTimeoutTcp;
}
export declare function appmeshVirtualNodeSpecListenerTimeoutToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutOutputReference | AppmeshVirtualNodeSpecListenerTimeout): any;
export declare class AppmeshVirtualNodeSpecListenerTimeoutOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerTimeout | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTimeout | undefined);
    private _grpc;
    get grpc(): AppmeshVirtualNodeSpecListenerTimeoutGrpcOutputReference;
    putGrpc(value: AppmeshVirtualNodeSpecListenerTimeoutGrpc): void;
    resetGrpc(): void;
    get grpcInput(): AppmeshVirtualNodeSpecListenerTimeoutGrpc;
    private _http;
    get http(): AppmeshVirtualNodeSpecListenerTimeoutHttpOutputReference;
    putHttp(value: AppmeshVirtualNodeSpecListenerTimeoutHttp): void;
    resetHttp(): void;
    get httpInput(): AppmeshVirtualNodeSpecListenerTimeoutHttp;
    private _http2;
    get http2(): AppmeshVirtualNodeSpecListenerTimeoutHttp2OutputReference;
    putHttp2(value: AppmeshVirtualNodeSpecListenerTimeoutHttp2): void;
    resetHttp2(): void;
    get http2Input(): AppmeshVirtualNodeSpecListenerTimeoutHttp2;
    private _tcp;
    get tcp(): AppmeshVirtualNodeSpecListenerTimeoutTcpOutputReference;
    putTcp(value: AppmeshVirtualNodeSpecListenerTimeoutTcp): void;
    resetTcp(): void;
    get tcpInput(): AppmeshVirtualNodeSpecListenerTimeoutTcp;
}
export interface AppmeshVirtualNodeSpecListenerTlsCertificateAcm {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_arn AppmeshVirtualNode#certificate_arn}
    */
    readonly certificateArn: string;
}
export declare function appmeshVirtualNodeSpecListenerTlsCertificateAcmToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateAcmOutputReference | AppmeshVirtualNodeSpecListenerTlsCertificateAcm): any;
export declare class AppmeshVirtualNodeSpecListenerTlsCertificateAcmOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerTlsCertificateAcm | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTlsCertificateAcm | undefined);
    private _certificateArn?;
    get certificateArn(): string;
    set certificateArn(value: string);
    get certificateArnInput(): string;
}
export interface AppmeshVirtualNodeSpecListenerTlsCertificateFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}
    */
    readonly certificateChain: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#private_key AppmeshVirtualNode#private_key}
    */
    readonly privateKey: string;
}
export declare function appmeshVirtualNodeSpecListenerTlsCertificateFileToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateFileOutputReference | AppmeshVirtualNodeSpecListenerTlsCertificateFile): any;
export declare class AppmeshVirtualNodeSpecListenerTlsCertificateFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerTlsCertificateFile | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTlsCertificateFile | undefined);
    private _certificateChain?;
    get certificateChain(): string;
    set certificateChain(value: string);
    get certificateChainInput(): string;
    private _privateKey?;
    get privateKey(): string;
    set privateKey(value: string);
    get privateKeyInput(): string;
}
export interface AppmeshVirtualNodeSpecListenerTlsCertificateSds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}
    */
    readonly secretName: string;
}
export declare function appmeshVirtualNodeSpecListenerTlsCertificateSdsToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateSdsOutputReference | AppmeshVirtualNodeSpecListenerTlsCertificateSds): any;
export declare class AppmeshVirtualNodeSpecListenerTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerTlsCertificateSds | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTlsCertificateSds | undefined);
    private _secretName?;
    get secretName(): string;
    set secretName(value: string);
    get secretNameInput(): string;
}
export interface AppmeshVirtualNodeSpecListenerTlsCertificate {
    /**
    * acm block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#acm AppmeshVirtualNode#acm}
    */
    readonly acm?: AppmeshVirtualNodeSpecListenerTlsCertificateAcm;
    /**
    * file block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
    */
    readonly file?: AppmeshVirtualNodeSpecListenerTlsCertificateFile;
    /**
    * sds block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
    */
    readonly sds?: AppmeshVirtualNodeSpecListenerTlsCertificateSds;
}
export declare function appmeshVirtualNodeSpecListenerTlsCertificateToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateOutputReference | AppmeshVirtualNodeSpecListenerTlsCertificate): any;
export declare class AppmeshVirtualNodeSpecListenerTlsCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerTlsCertificate | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTlsCertificate | undefined);
    private _acm;
    get acm(): AppmeshVirtualNodeSpecListenerTlsCertificateAcmOutputReference;
    putAcm(value: AppmeshVirtualNodeSpecListenerTlsCertificateAcm): void;
    resetAcm(): void;
    get acmInput(): AppmeshVirtualNodeSpecListenerTlsCertificateAcm;
    private _file;
    get file(): AppmeshVirtualNodeSpecListenerTlsCertificateFileOutputReference;
    putFile(value: AppmeshVirtualNodeSpecListenerTlsCertificateFile): void;
    resetFile(): void;
    get fileInput(): AppmeshVirtualNodeSpecListenerTlsCertificateFile;
    private _sds;
    get sds(): AppmeshVirtualNodeSpecListenerTlsCertificateSdsOutputReference;
    putSds(value: AppmeshVirtualNodeSpecListenerTlsCertificateSds): void;
    resetSds(): void;
    get sdsInput(): AppmeshVirtualNodeSpecListenerTlsCertificateSds;
}
export interface AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#exact AppmeshVirtualNode#exact}
    */
    readonly exact: string[];
}
export declare function appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch): any;
export declare class AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch | undefined);
    private _exact?;
    get exact(): string[];
    set exact(value: string[]);
    get exactInput(): string[];
}
export interface AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames {
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#match AppmeshVirtualNode#match}
    */
    readonly match: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch;
}
export declare function appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames): any;
export declare class AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames | undefined);
    private _match;
    get match(): AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference;
    putMatch(value: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch): void;
    get matchInput(): AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch;
}
export interface AppmeshVirtualNodeSpecListenerTlsValidationTrustFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}
    */
    readonly certificateChain: string;
}
export declare function appmeshVirtualNodeSpecListenerTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationTrustFileOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationTrustFile): any;
export declare class AppmeshVirtualNodeSpecListenerTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerTlsValidationTrustFile | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTlsValidationTrustFile | undefined);
    private _certificateChain?;
    get certificateChain(): string;
    set certificateChain(value: string);
    get certificateChainInput(): string;
}
export interface AppmeshVirtualNodeSpecListenerTlsValidationTrustSds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}
    */
    readonly secretName: string;
}
export declare function appmeshVirtualNodeSpecListenerTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationTrustSdsOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationTrustSds): any;
export declare class AppmeshVirtualNodeSpecListenerTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerTlsValidationTrustSds | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTlsValidationTrustSds | undefined);
    private _secretName?;
    get secretName(): string;
    set secretName(value: string);
    get secretNameInput(): string;
}
export interface AppmeshVirtualNodeSpecListenerTlsValidationTrust {
    /**
    * file block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
    */
    readonly file?: AppmeshVirtualNodeSpecListenerTlsValidationTrustFile;
    /**
    * sds block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
    */
    readonly sds?: AppmeshVirtualNodeSpecListenerTlsValidationTrustSds;
}
export declare function appmeshVirtualNodeSpecListenerTlsValidationTrustToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationTrustOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationTrust): any;
export declare class AppmeshVirtualNodeSpecListenerTlsValidationTrustOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerTlsValidationTrust | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTlsValidationTrust | undefined);
    private _file;
    get file(): AppmeshVirtualNodeSpecListenerTlsValidationTrustFileOutputReference;
    putFile(value: AppmeshVirtualNodeSpecListenerTlsValidationTrustFile): void;
    resetFile(): void;
    get fileInput(): AppmeshVirtualNodeSpecListenerTlsValidationTrustFile;
    private _sds;
    get sds(): AppmeshVirtualNodeSpecListenerTlsValidationTrustSdsOutputReference;
    putSds(value: AppmeshVirtualNodeSpecListenerTlsValidationTrustSds): void;
    resetSds(): void;
    get sdsInput(): AppmeshVirtualNodeSpecListenerTlsValidationTrustSds;
}
export interface AppmeshVirtualNodeSpecListenerTlsValidation {
    /**
    * subject_alternative_names block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#subject_alternative_names AppmeshVirtualNode#subject_alternative_names}
    */
    readonly subjectAlternativeNames?: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames;
    /**
    * trust block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#trust AppmeshVirtualNode#trust}
    */
    readonly trust: AppmeshVirtualNodeSpecListenerTlsValidationTrust;
}
export declare function appmeshVirtualNodeSpecListenerTlsValidationToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationOutputReference | AppmeshVirtualNodeSpecListenerTlsValidation): any;
export declare class AppmeshVirtualNodeSpecListenerTlsValidationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerTlsValidation | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTlsValidation | undefined);
    private _subjectAlternativeNames;
    get subjectAlternativeNames(): AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesOutputReference;
    putSubjectAlternativeNames(value: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames): void;
    resetSubjectAlternativeNames(): void;
    get subjectAlternativeNamesInput(): AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames;
    private _trust;
    get trust(): AppmeshVirtualNodeSpecListenerTlsValidationTrustOutputReference;
    putTrust(value: AppmeshVirtualNodeSpecListenerTlsValidationTrust): void;
    get trustInput(): AppmeshVirtualNodeSpecListenerTlsValidationTrust;
}
export interface AppmeshVirtualNodeSpecListenerTls {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#mode AppmeshVirtualNode#mode}
    */
    readonly mode: string;
    /**
    * certificate block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate AppmeshVirtualNode#certificate}
    */
    readonly certificate: AppmeshVirtualNodeSpecListenerTlsCertificate;
    /**
    * validation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#validation AppmeshVirtualNode#validation}
    */
    readonly validation?: AppmeshVirtualNodeSpecListenerTlsValidation;
}
export declare function appmeshVirtualNodeSpecListenerTlsToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsOutputReference | AppmeshVirtualNodeSpecListenerTls): any;
export declare class AppmeshVirtualNodeSpecListenerTlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerTls | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTls | undefined);
    private _mode?;
    get mode(): string;
    set mode(value: string);
    get modeInput(): string;
    private _certificate;
    get certificate(): AppmeshVirtualNodeSpecListenerTlsCertificateOutputReference;
    putCertificate(value: AppmeshVirtualNodeSpecListenerTlsCertificate): void;
    get certificateInput(): AppmeshVirtualNodeSpecListenerTlsCertificate;
    private _validation;
    get validation(): AppmeshVirtualNodeSpecListenerTlsValidationOutputReference;
    putValidation(value: AppmeshVirtualNodeSpecListenerTlsValidation): void;
    resetValidation(): void;
    get validationInput(): AppmeshVirtualNodeSpecListenerTlsValidation;
}
export interface AppmeshVirtualNodeSpecListener {
    /**
    * connection_pool block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#connection_pool AppmeshVirtualNode#connection_pool}
    */
    readonly connectionPool?: AppmeshVirtualNodeSpecListenerConnectionPool;
    /**
    * health_check block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#health_check AppmeshVirtualNode#health_check}
    */
    readonly healthCheck?: AppmeshVirtualNodeSpecListenerHealthCheck;
    /**
    * outlier_detection block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#outlier_detection AppmeshVirtualNode#outlier_detection}
    */
    readonly outlierDetection?: AppmeshVirtualNodeSpecListenerOutlierDetection;
    /**
    * port_mapping block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#port_mapping AppmeshVirtualNode#port_mapping}
    */
    readonly portMapping: AppmeshVirtualNodeSpecListenerPortMapping;
    /**
    * timeout block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#timeout AppmeshVirtualNode#timeout}
    */
    readonly timeout?: AppmeshVirtualNodeSpecListenerTimeout;
    /**
    * tls block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tls AppmeshVirtualNode#tls}
    */
    readonly tls?: AppmeshVirtualNodeSpecListenerTls;
}
export declare function appmeshVirtualNodeSpecListenerToTerraform(struct?: AppmeshVirtualNodeSpecListenerOutputReference | AppmeshVirtualNodeSpecListener): any;
export declare class AppmeshVirtualNodeSpecListenerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListener | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListener | undefined);
    private _connectionPool;
    get connectionPool(): AppmeshVirtualNodeSpecListenerConnectionPoolOutputReference;
    putConnectionPool(value: AppmeshVirtualNodeSpecListenerConnectionPool): void;
    resetConnectionPool(): void;
    get connectionPoolInput(): AppmeshVirtualNodeSpecListenerConnectionPool;
    private _healthCheck;
    get healthCheck(): AppmeshVirtualNodeSpecListenerHealthCheckOutputReference;
    putHealthCheck(value: AppmeshVirtualNodeSpecListenerHealthCheck): void;
    resetHealthCheck(): void;
    get healthCheckInput(): AppmeshVirtualNodeSpecListenerHealthCheck;
    private _outlierDetection;
    get outlierDetection(): AppmeshVirtualNodeSpecListenerOutlierDetectionOutputReference;
    putOutlierDetection(value: AppmeshVirtualNodeSpecListenerOutlierDetection): void;
    resetOutlierDetection(): void;
    get outlierDetectionInput(): AppmeshVirtualNodeSpecListenerOutlierDetection;
    private _portMapping;
    get portMapping(): AppmeshVirtualNodeSpecListenerPortMappingOutputReference;
    putPortMapping(value: AppmeshVirtualNodeSpecListenerPortMapping): void;
    get portMappingInput(): AppmeshVirtualNodeSpecListenerPortMapping;
    private _timeout;
    get timeout(): AppmeshVirtualNodeSpecListenerTimeoutOutputReference;
    putTimeout(value: AppmeshVirtualNodeSpecListenerTimeout): void;
    resetTimeout(): void;
    get timeoutInput(): AppmeshVirtualNodeSpecListenerTimeout;
    private _tls;
    get tls(): AppmeshVirtualNodeSpecListenerTlsOutputReference;
    putTls(value: AppmeshVirtualNodeSpecListenerTls): void;
    resetTls(): void;
    get tlsInput(): AppmeshVirtualNodeSpecListenerTls;
}
export interface AppmeshVirtualNodeSpecLoggingAccessLogFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#path AppmeshVirtualNode#path}
    */
    readonly path: string;
}
export declare function appmeshVirtualNodeSpecLoggingAccessLogFileToTerraform(struct?: AppmeshVirtualNodeSpecLoggingAccessLogFileOutputReference | AppmeshVirtualNodeSpecLoggingAccessLogFile): any;
export declare class AppmeshVirtualNodeSpecLoggingAccessLogFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecLoggingAccessLogFile | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecLoggingAccessLogFile | undefined);
    private _path?;
    get path(): string;
    set path(value: string);
    get pathInput(): string;
}
export interface AppmeshVirtualNodeSpecLoggingAccessLog {
    /**
    * file block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
    */
    readonly file?: AppmeshVirtualNodeSpecLoggingAccessLogFile;
}
export declare function appmeshVirtualNodeSpecLoggingAccessLogToTerraform(struct?: AppmeshVirtualNodeSpecLoggingAccessLogOutputReference | AppmeshVirtualNodeSpecLoggingAccessLog): any;
export declare class AppmeshVirtualNodeSpecLoggingAccessLogOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecLoggingAccessLog | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecLoggingAccessLog | undefined);
    private _file;
    get file(): AppmeshVirtualNodeSpecLoggingAccessLogFileOutputReference;
    putFile(value: AppmeshVirtualNodeSpecLoggingAccessLogFile): void;
    resetFile(): void;
    get fileInput(): AppmeshVirtualNodeSpecLoggingAccessLogFile;
}
export interface AppmeshVirtualNodeSpecLogging {
    /**
    * access_log block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#access_log AppmeshVirtualNode#access_log}
    */
    readonly accessLog?: AppmeshVirtualNodeSpecLoggingAccessLog;
}
export declare function appmeshVirtualNodeSpecLoggingToTerraform(struct?: AppmeshVirtualNodeSpecLoggingOutputReference | AppmeshVirtualNodeSpecLogging): any;
export declare class AppmeshVirtualNodeSpecLoggingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecLogging | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecLogging | undefined);
    private _accessLog;
    get accessLog(): AppmeshVirtualNodeSpecLoggingAccessLogOutputReference;
    putAccessLog(value: AppmeshVirtualNodeSpecLoggingAccessLog): void;
    resetAccessLog(): void;
    get accessLogInput(): AppmeshVirtualNodeSpecLoggingAccessLog;
}
export interface AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#attributes AppmeshVirtualNode#attributes}
    */
    readonly attributes?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#namespace_name AppmeshVirtualNode#namespace_name}
    */
    readonly namespaceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#service_name AppmeshVirtualNode#service_name}
    */
    readonly serviceName: string;
}
export declare function appmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapToTerraform(struct?: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapOutputReference | AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap): any;
export declare class AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap | undefined);
    private _attributes?;
    get attributes(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set attributes(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetAttributes(): void;
    get attributesInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _namespaceName?;
    get namespaceName(): string;
    set namespaceName(value: string);
    get namespaceNameInput(): string;
    private _serviceName?;
    get serviceName(): string;
    set serviceName(value: string);
    get serviceNameInput(): string;
}
export interface AppmeshVirtualNodeSpecServiceDiscoveryDns {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#hostname AppmeshVirtualNode#hostname}
    */
    readonly hostname: string;
}
export declare function appmeshVirtualNodeSpecServiceDiscoveryDnsToTerraform(struct?: AppmeshVirtualNodeSpecServiceDiscoveryDnsOutputReference | AppmeshVirtualNodeSpecServiceDiscoveryDns): any;
export declare class AppmeshVirtualNodeSpecServiceDiscoveryDnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecServiceDiscoveryDns | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecServiceDiscoveryDns | undefined);
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    get hostnameInput(): string;
}
export interface AppmeshVirtualNodeSpecServiceDiscovery {
    /**
    * aws_cloud_map block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#aws_cloud_map AppmeshVirtualNode#aws_cloud_map}
    */
    readonly awsCloudMap?: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap;
    /**
    * dns block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#dns AppmeshVirtualNode#dns}
    */
    readonly dns?: AppmeshVirtualNodeSpecServiceDiscoveryDns;
}
export declare function appmeshVirtualNodeSpecServiceDiscoveryToTerraform(struct?: AppmeshVirtualNodeSpecServiceDiscoveryOutputReference | AppmeshVirtualNodeSpecServiceDiscovery): any;
export declare class AppmeshVirtualNodeSpecServiceDiscoveryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpecServiceDiscovery | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecServiceDiscovery | undefined);
    private _awsCloudMap;
    get awsCloudMap(): AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapOutputReference;
    putAwsCloudMap(value: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap): void;
    resetAwsCloudMap(): void;
    get awsCloudMapInput(): AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap;
    private _dns;
    get dns(): AppmeshVirtualNodeSpecServiceDiscoveryDnsOutputReference;
    putDns(value: AppmeshVirtualNodeSpecServiceDiscoveryDns): void;
    resetDns(): void;
    get dnsInput(): AppmeshVirtualNodeSpecServiceDiscoveryDns;
}
export interface AppmeshVirtualNodeSpec {
    /**
    * backend block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#backend AppmeshVirtualNode#backend}
    */
    readonly backend?: AppmeshVirtualNodeSpecBackend[];
    /**
    * backend_defaults block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#backend_defaults AppmeshVirtualNode#backend_defaults}
    */
    readonly backendDefaults?: AppmeshVirtualNodeSpecBackendDefaults;
    /**
    * listener block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#listener AppmeshVirtualNode#listener}
    */
    readonly listener?: AppmeshVirtualNodeSpecListener;
    /**
    * logging block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#logging AppmeshVirtualNode#logging}
    */
    readonly logging?: AppmeshVirtualNodeSpecLogging;
    /**
    * service_discovery block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#service_discovery AppmeshVirtualNode#service_discovery}
    */
    readonly serviceDiscovery?: AppmeshVirtualNodeSpecServiceDiscovery;
}
export declare function appmeshVirtualNodeSpecToTerraform(struct?: AppmeshVirtualNodeSpecOutputReference | AppmeshVirtualNodeSpec): any;
export declare class AppmeshVirtualNodeSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppmeshVirtualNodeSpec | undefined;
    set internalValue(value: AppmeshVirtualNodeSpec | undefined);
    private _backend?;
    get backend(): AppmeshVirtualNodeSpecBackend[];
    set backend(value: AppmeshVirtualNodeSpecBackend[]);
    resetBackend(): void;
    get backendInput(): AppmeshVirtualNodeSpecBackend[];
    private _backendDefaults;
    get backendDefaults(): AppmeshVirtualNodeSpecBackendDefaultsOutputReference;
    putBackendDefaults(value: AppmeshVirtualNodeSpecBackendDefaults): void;
    resetBackendDefaults(): void;
    get backendDefaultsInput(): AppmeshVirtualNodeSpecBackendDefaults;
    private _listener;
    get listener(): AppmeshVirtualNodeSpecListenerOutputReference;
    putListener(value: AppmeshVirtualNodeSpecListener): void;
    resetListener(): void;
    get listenerInput(): AppmeshVirtualNodeSpecListener;
    private _logging;
    get logging(): AppmeshVirtualNodeSpecLoggingOutputReference;
    putLogging(value: AppmeshVirtualNodeSpecLogging): void;
    resetLogging(): void;
    get loggingInput(): AppmeshVirtualNodeSpecLogging;
    private _serviceDiscovery;
    get serviceDiscovery(): AppmeshVirtualNodeSpecServiceDiscoveryOutputReference;
    putServiceDiscovery(value: AppmeshVirtualNodeSpecServiceDiscovery): void;
    resetServiceDiscovery(): void;
    get serviceDiscoveryInput(): AppmeshVirtualNodeSpecServiceDiscovery;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html aws_appmesh_virtual_node}
*/
export declare class AppmeshVirtualNode extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html aws_appmesh_virtual_node} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshVirtualNodeConfig
    */
    constructor(scope: Construct, id: string, config: AppmeshVirtualNodeConfig);
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
    get spec(): AppmeshVirtualNodeSpecOutputReference;
    putSpec(value: AppmeshVirtualNodeSpec): void;
    get specInput(): AppmeshVirtualNodeSpec;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=appmesh-virtual-node.d.ts.map