import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Service Catalog
*/
export interface ServicecatalogConstraintConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_constraint.html#accept_language ServicecatalogConstraint#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_constraint.html#description ServicecatalogConstraint#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_constraint.html#parameters ServicecatalogConstraint#parameters}
    */
    readonly parameters: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_constraint.html#portfolio_id ServicecatalogConstraint#portfolio_id}
    */
    readonly portfolioId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_constraint.html#product_id ServicecatalogConstraint#product_id}
    */
    readonly productId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_constraint.html#type ServicecatalogConstraint#type}
    */
    readonly type: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_constraint.html aws_servicecatalog_constraint}
*/
export declare class ServicecatalogConstraint extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_constraint.html aws_servicecatalog_constraint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogConstraintConfig
    */
    constructor(scope: Construct, id: string, config: ServicecatalogConstraintConfig);
    private _acceptLanguage?;
    get acceptLanguage(): string;
    set acceptLanguage(value: string);
    resetAcceptLanguage(): void;
    get acceptLanguageInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    get owner(): string;
    private _parameters?;
    get parameters(): string;
    set parameters(value: string);
    get parametersInput(): string;
    private _portfolioId?;
    get portfolioId(): string;
    set portfolioId(value: string);
    get portfolioIdInput(): string;
    private _productId?;
    get productId(): string;
    set productId(value: string);
    get productIdInput(): string;
    get status(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=servicecatalog-constraint.d.ts.map