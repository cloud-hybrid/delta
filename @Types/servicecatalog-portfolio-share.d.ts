import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Service Catalog
*/
export interface ServicecatalogPortfolioShareConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share.html#accept_language ServicecatalogPortfolioShare#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share.html#portfolio_id ServicecatalogPortfolioShare#portfolio_id}
    */
    readonly portfolioId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share.html#principal_id ServicecatalogPortfolioShare#principal_id}
    */
    readonly principalId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share.html#share_tag_options ServicecatalogPortfolioShare#share_tag_options}
    */
    readonly shareTagOptions?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share.html#type ServicecatalogPortfolioShare#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share.html#wait_for_acceptance ServicecatalogPortfolioShare#wait_for_acceptance}
    */
    readonly waitForAcceptance?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share.html aws_servicecatalog_portfolio_share}
*/
export declare class ServicecatalogPortfolioShare extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share.html aws_servicecatalog_portfolio_share} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogPortfolioShareConfig
    */
    constructor(scope: Construct, id: string, config: ServicecatalogPortfolioShareConfig);
    private _acceptLanguage?;
    get acceptLanguage(): string;
    set acceptLanguage(value: string);
    resetAcceptLanguage(): void;
    get acceptLanguageInput(): string;
    get accepted(): any;
    get id(): string;
    private _portfolioId?;
    get portfolioId(): string;
    set portfolioId(value: string);
    get portfolioIdInput(): string;
    private _principalId?;
    get principalId(): string;
    set principalId(value: string);
    get principalIdInput(): string;
    private _shareTagOptions?;
    get shareTagOptions(): boolean | cdktf.IResolvable;
    set shareTagOptions(value: boolean | cdktf.IResolvable);
    resetShareTagOptions(): void;
    get shareTagOptionsInput(): boolean | cdktf.IResolvable;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _waitForAcceptance?;
    get waitForAcceptance(): boolean | cdktf.IResolvable;
    set waitForAcceptance(value: boolean | cdktf.IResolvable);
    resetWaitForAcceptance(): void;
    get waitForAcceptanceInput(): boolean | cdktf.IResolvable;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=servicecatalog-portfolio-share.d.ts.map