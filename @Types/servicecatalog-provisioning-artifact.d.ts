import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Service Catalog
*/
export interface ServicecatalogProvisioningArtifactConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact.html#accept_language ServicecatalogProvisioningArtifact#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact.html#active ServicecatalogProvisioningArtifact#active}
    */
    readonly active?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact.html#description ServicecatalogProvisioningArtifact#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact.html#disable_template_validation ServicecatalogProvisioningArtifact#disable_template_validation}
    */
    readonly disableTemplateValidation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact.html#guidance ServicecatalogProvisioningArtifact#guidance}
    */
    readonly guidance?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact.html#name ServicecatalogProvisioningArtifact#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact.html#product_id ServicecatalogProvisioningArtifact#product_id}
    */
    readonly productId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact.html#template_physical_id ServicecatalogProvisioningArtifact#template_physical_id}
    */
    readonly templatePhysicalId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact.html#template_url ServicecatalogProvisioningArtifact#template_url}
    */
    readonly templateUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact.html#type ServicecatalogProvisioningArtifact#type}
    */
    readonly type?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact.html aws_servicecatalog_provisioning_artifact}
*/
export declare class ServicecatalogProvisioningArtifact extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact.html aws_servicecatalog_provisioning_artifact} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogProvisioningArtifactConfig
    */
    constructor(scope: Construct, id: string, config: ServicecatalogProvisioningArtifactConfig);
    private _acceptLanguage?;
    get acceptLanguage(): string;
    set acceptLanguage(value: string);
    resetAcceptLanguage(): void;
    get acceptLanguageInput(): string;
    private _active?;
    get active(): boolean | cdktf.IResolvable;
    set active(value: boolean | cdktf.IResolvable);
    resetActive(): void;
    get activeInput(): boolean | cdktf.IResolvable;
    get createdTime(): string;
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
    private _guidance?;
    get guidance(): string;
    set guidance(value: string);
    resetGuidance(): void;
    get guidanceInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _productId?;
    get productId(): string;
    set productId(value: string);
    get productIdInput(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=servicecatalog-provisioning-artifact.d.ts.map