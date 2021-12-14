import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Service Catalog
*/
export interface ServicecatalogProductConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#accept_language ServicecatalogProduct#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#description ServicecatalogProduct#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#distributor ServicecatalogProduct#distributor}
    */
    readonly distributor?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#name ServicecatalogProduct#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#owner ServicecatalogProduct#owner}
    */
    readonly owner: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#support_description ServicecatalogProduct#support_description}
    */
    readonly supportDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#support_email ServicecatalogProduct#support_email}
    */
    readonly supportEmail?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#support_url ServicecatalogProduct#support_url}
    */
    readonly supportUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#tags ServicecatalogProduct#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#tags_all ServicecatalogProduct#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#type ServicecatalogProduct#type}
    */
    readonly type: string;
    /**
    * provisioning_artifact_parameters block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#provisioning_artifact_parameters ServicecatalogProduct#provisioning_artifact_parameters}
    */
    readonly provisioningArtifactParameters: ServicecatalogProductProvisioningArtifactParameters;
}
export interface ServicecatalogProductProvisioningArtifactParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#description ServicecatalogProduct#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#disable_template_validation ServicecatalogProduct#disable_template_validation}
    */
    readonly disableTemplateValidation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#name ServicecatalogProduct#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#template_physical_id ServicecatalogProduct#template_physical_id}
    */
    readonly templatePhysicalId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#template_url ServicecatalogProduct#template_url}
    */
    readonly templateUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#type ServicecatalogProduct#type}
    */
    readonly type?: string;
}
export declare function servicecatalogProductProvisioningArtifactParametersToTerraform(struct?: ServicecatalogProductProvisioningArtifactParametersOutputReference | ServicecatalogProductProvisioningArtifactParameters): any;
export declare class ServicecatalogProductProvisioningArtifactParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ServicecatalogProductProvisioningArtifactParameters | undefined;
    set internalValue(value: ServicecatalogProductProvisioningArtifactParameters | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _disableTemplateValidation?;
    get disableTemplateValidation(): boolean | cdktf.IResolvable;
    set disableTemplateValidation(value: boolean | cdktf.IResolvable);
    resetDisableTemplateValidation(): void;
    get disableTemplateValidationInput(): boolean | cdktf.IResolvable;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _templatePhysicalId?;
    get templatePhysicalId(): string;
    set templatePhysicalId(value: string);
    resetTemplatePhysicalId(): void;
    get templatePhysicalIdInput(): string;
    private _templateUrl?;
    get templateUrl(): string;
    set templateUrl(value: string);
    resetTemplateUrl(): void;
    get templateUrlInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html aws_servicecatalog_product}
*/
export declare class ServicecatalogProduct extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html aws_servicecatalog_product} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogProductConfig
    */
    constructor(scope: Construct, id: string, config: ServicecatalogProductConfig);
    private _acceptLanguage?;
    get acceptLanguage(): string;
    set acceptLanguage(value: string);
    resetAcceptLanguage(): void;
    get acceptLanguageInput(): string;
    get arn(): string;
    get createdTime(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _distributor?;
    get distributor(): string;
    set distributor(value: string);
    resetDistributor(): void;
    get distributorInput(): string;
    get hasDefaultPath(): any;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _owner?;
    get owner(): string;
    set owner(value: string);
    get ownerInput(): string;
    get status(): string;
    private _supportDescription?;
    get supportDescription(): string;
    set supportDescription(value: string);
    resetSupportDescription(): void;
    get supportDescriptionInput(): string;
    private _supportEmail?;
    get supportEmail(): string;
    set supportEmail(value: string);
    resetSupportEmail(): void;
    get supportEmailInput(): string;
    private _supportUrl?;
    get supportUrl(): string;
    set supportUrl(value: string);
    resetSupportUrl(): void;
    get supportUrlInput(): string;
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
    get typeInput(): string;
    private _provisioningArtifactParameters;
    get provisioningArtifactParameters(): ServicecatalogProductProvisioningArtifactParametersOutputReference;
    putProvisioningArtifactParameters(value: ServicecatalogProductProvisioningArtifactParameters): void;
    get provisioningArtifactParametersInput(): ServicecatalogProductProvisioningArtifactParameters;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=servicecatalog-product.d.ts.map