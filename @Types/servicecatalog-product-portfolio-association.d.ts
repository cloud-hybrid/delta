import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Service Catalog
*/
export interface ServicecatalogProductPortfolioAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association.html#accept_language ServicecatalogProductPortfolioAssociation#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association.html#portfolio_id ServicecatalogProductPortfolioAssociation#portfolio_id}
    */
    readonly portfolioId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association.html#product_id ServicecatalogProductPortfolioAssociation#product_id}
    */
    readonly productId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association.html#source_portfolio_id ServicecatalogProductPortfolioAssociation#source_portfolio_id}
    */
    readonly sourcePortfolioId?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association.html aws_servicecatalog_product_portfolio_association}
*/
export declare class ServicecatalogProductPortfolioAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association.html aws_servicecatalog_product_portfolio_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogProductPortfolioAssociationConfig
    */
    constructor(scope: Construct, id: string, config: ServicecatalogProductPortfolioAssociationConfig);
    private _acceptLanguage?;
    get acceptLanguage(): string;
    set acceptLanguage(value: string);
    resetAcceptLanguage(): void;
    get acceptLanguageInput(): string;
    get id(): string;
    private _portfolioId?;
    get portfolioId(): string;
    set portfolioId(value: string);
    get portfolioIdInput(): string;
    private _productId?;
    get productId(): string;
    set productId(value: string);
    get productIdInput(): string;
    private _sourcePortfolioId?;
    get sourcePortfolioId(): string;
    set sourcePortfolioId(value: string);
    resetSourcePortfolioId(): void;
    get sourcePortfolioIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=servicecatalog-product-portfolio-association.d.ts.map