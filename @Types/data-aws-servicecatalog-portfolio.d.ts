import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Service Catalog
*/
export interface DataAwsServicecatalogPortfolioConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio.html#accept_language DataAwsServicecatalogPortfolio#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio.html#id DataAwsServicecatalogPortfolio#id}
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio.html#tags DataAwsServicecatalogPortfolio#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio.html aws_servicecatalog_portfolio}
*/
export declare class DataAwsServicecatalogPortfolio extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio.html aws_servicecatalog_portfolio} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServicecatalogPortfolioConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsServicecatalogPortfolioConfig);
    private _acceptLanguage?;
    get acceptLanguage(): string;
    set acceptLanguage(value: string);
    resetAcceptLanguage(): void;
    get acceptLanguageInput(): string;
    get arn(): string;
    get createdTime(): string;
    get description(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get providerName(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-servicecatalog-portfolio.d.ts.map