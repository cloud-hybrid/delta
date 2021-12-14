import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Service Catalog
*/
export interface ServicecatalogPrincipalPortfolioAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_principal_portfolio_association.html#accept_language ServicecatalogPrincipalPortfolioAssociation#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_principal_portfolio_association.html#portfolio_id ServicecatalogPrincipalPortfolioAssociation#portfolio_id}
    */
    readonly portfolioId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_principal_portfolio_association.html#principal_arn ServicecatalogPrincipalPortfolioAssociation#principal_arn}
    */
    readonly principalArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_principal_portfolio_association.html#principal_type ServicecatalogPrincipalPortfolioAssociation#principal_type}
    */
    readonly principalType?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_principal_portfolio_association.html aws_servicecatalog_principal_portfolio_association}
*/
export declare class ServicecatalogPrincipalPortfolioAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_principal_portfolio_association.html aws_servicecatalog_principal_portfolio_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogPrincipalPortfolioAssociationConfig
    */
    constructor(scope: Construct, id: string, config: ServicecatalogPrincipalPortfolioAssociationConfig);
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
    private _principalArn?;
    get principalArn(): string;
    set principalArn(value: string);
    get principalArnInput(): string;
    private _principalType?;
    get principalType(): string;
    set principalType(value: string);
    resetPrincipalType(): void;
    get principalTypeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=servicecatalog-principal-portfolio-association.d.ts.map