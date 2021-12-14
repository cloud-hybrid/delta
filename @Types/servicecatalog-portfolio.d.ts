import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Service Catalog
*/
export interface ServicecatalogPortfolioConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio.html#description ServicecatalogPortfolio#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio.html#name ServicecatalogPortfolio#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio.html#provider_name ServicecatalogPortfolio#provider_name}
    */
    readonly providerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio.html#tags ServicecatalogPortfolio#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio.html#tags_all ServicecatalogPortfolio#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio.html#timeouts ServicecatalogPortfolio#timeouts}
    */
    readonly timeouts?: ServicecatalogPortfolioTimeouts;
}
export interface ServicecatalogPortfolioTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio.html#create ServicecatalogPortfolio#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio.html#delete ServicecatalogPortfolio#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio.html#update ServicecatalogPortfolio#update}
    */
    readonly update?: string;
}
export declare function servicecatalogPortfolioTimeoutsToTerraform(struct?: ServicecatalogPortfolioTimeoutsOutputReference | ServicecatalogPortfolioTimeouts): any;
export declare class ServicecatalogPortfolioTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ServicecatalogPortfolioTimeouts | undefined;
    set internalValue(value: ServicecatalogPortfolioTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio.html aws_servicecatalog_portfolio}
*/
export declare class ServicecatalogPortfolio extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio.html aws_servicecatalog_portfolio} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogPortfolioConfig
    */
    constructor(scope: Construct, id: string, config: ServicecatalogPortfolioConfig);
    get arn(): string;
    get createdTime(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _providerName?;
    get providerName(): string;
    set providerName(value: string);
    get providerNameInput(): string;
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
    private _timeouts;
    get timeouts(): ServicecatalogPortfolioTimeoutsOutputReference;
    putTimeouts(value: ServicecatalogPortfolioTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): ServicecatalogPortfolioTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=servicecatalog-portfolio.d.ts.map