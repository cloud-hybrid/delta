import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Service Catalog
*/
export interface DataAwsServicecatalogPortfolioConstraintsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints.html#accept_language DataAwsServicecatalogPortfolioConstraints#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints.html#portfolio_id DataAwsServicecatalogPortfolioConstraints#portfolio_id}
    */
    readonly portfolioId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints.html#product_id DataAwsServicecatalogPortfolioConstraints#product_id}
    */
    readonly productId?: string;
}
export declare class DataAwsServicecatalogPortfolioConstraintsDetails extends cdktf.ComplexComputedList {
    get constraintId(): string;
    get description(): string;
    get owner(): string;
    get portfolioId(): string;
    get productId(): string;
    get type(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints.html aws_servicecatalog_portfolio_constraints}
*/
export declare class DataAwsServicecatalogPortfolioConstraints extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints.html aws_servicecatalog_portfolio_constraints} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServicecatalogPortfolioConstraintsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsServicecatalogPortfolioConstraintsConfig);
    private _acceptLanguage?;
    get acceptLanguage(): string;
    set acceptLanguage(value: string);
    resetAcceptLanguage(): void;
    get acceptLanguageInput(): string;
    details(index: string): DataAwsServicecatalogPortfolioConstraintsDetails;
    get id(): string;
    private _portfolioId?;
    get portfolioId(): string;
    set portfolioId(value: string);
    get portfolioIdInput(): string;
    private _productId?;
    get productId(): string;
    set productId(value: string);
    resetProductId(): void;
    get productIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-servicecatalog-portfolio-constraints.d.ts.map