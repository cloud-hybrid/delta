import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2 Container Registry
*/
export interface EcrpublicRepositoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#force_destroy EcrpublicRepository#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#repository_name EcrpublicRepository#repository_name}
    */
    readonly repositoryName: string;
    /**
    * catalog_data block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#catalog_data EcrpublicRepository#catalog_data}
    */
    readonly catalogData?: EcrpublicRepositoryCatalogData;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#timeouts EcrpublicRepository#timeouts}
    */
    readonly timeouts?: EcrpublicRepositoryTimeouts;
}
export interface EcrpublicRepositoryCatalogData {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#about_text EcrpublicRepository#about_text}
    */
    readonly aboutText?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#architectures EcrpublicRepository#architectures}
    */
    readonly architectures?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#description EcrpublicRepository#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#logo_image_blob EcrpublicRepository#logo_image_blob}
    */
    readonly logoImageBlob?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#operating_systems EcrpublicRepository#operating_systems}
    */
    readonly operatingSystems?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#usage_text EcrpublicRepository#usage_text}
    */
    readonly usageText?: string;
}
export declare function ecrpublicRepositoryCatalogDataToTerraform(struct?: EcrpublicRepositoryCatalogDataOutputReference | EcrpublicRepositoryCatalogData): any;
export declare class EcrpublicRepositoryCatalogDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EcrpublicRepositoryCatalogData | undefined;
    set internalValue(value: EcrpublicRepositoryCatalogData | undefined);
    private _aboutText?;
    get aboutText(): string;
    set aboutText(value: string);
    resetAboutText(): void;
    get aboutTextInput(): string;
    private _architectures?;
    get architectures(): string[];
    set architectures(value: string[]);
    resetArchitectures(): void;
    get architecturesInput(): string[];
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _logoImageBlob?;
    get logoImageBlob(): string;
    set logoImageBlob(value: string);
    resetLogoImageBlob(): void;
    get logoImageBlobInput(): string;
    private _operatingSystems?;
    get operatingSystems(): string[];
    set operatingSystems(value: string[]);
    resetOperatingSystems(): void;
    get operatingSystemsInput(): string[];
    private _usageText?;
    get usageText(): string;
    set usageText(value: string);
    resetUsageText(): void;
    get usageTextInput(): string;
}
export interface EcrpublicRepositoryTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#delete EcrpublicRepository#delete}
    */
    readonly delete?: string;
}
export declare function ecrpublicRepositoryTimeoutsToTerraform(struct?: EcrpublicRepositoryTimeoutsOutputReference | EcrpublicRepositoryTimeouts): any;
export declare class EcrpublicRepositoryTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EcrpublicRepositoryTimeouts | undefined;
    set internalValue(value: EcrpublicRepositoryTimeouts | undefined);
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html aws_ecrpublic_repository}
*/
export declare class EcrpublicRepository extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html aws_ecrpublic_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcrpublicRepositoryConfig
    */
    constructor(scope: Construct, id: string, config: EcrpublicRepositoryConfig);
    get arn(): string;
    private _forceDestroy?;
    get forceDestroy(): boolean | cdktf.IResolvable;
    set forceDestroy(value: boolean | cdktf.IResolvable);
    resetForceDestroy(): void;
    get forceDestroyInput(): boolean | cdktf.IResolvable;
    get id(): string;
    get registryId(): string;
    private _repositoryName?;
    get repositoryName(): string;
    set repositoryName(value: string);
    get repositoryNameInput(): string;
    get repositoryUri(): string;
    private _catalogData;
    get catalogData(): EcrpublicRepositoryCatalogDataOutputReference;
    putCatalogData(value: EcrpublicRepositoryCatalogData): void;
    resetCatalogData(): void;
    get catalogDataInput(): EcrpublicRepositoryCatalogData;
    private _timeouts;
    get timeouts(): EcrpublicRepositoryTimeoutsOutputReference;
    putTimeouts(value: EcrpublicRepositoryTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): EcrpublicRepositoryTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ecrpublic-repository.d.ts.map