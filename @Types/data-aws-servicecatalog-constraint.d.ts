import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Service Catalog
*/
export interface DataAwsServicecatalogConstraintConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_constraint.html#accept_language DataAwsServicecatalogConstraint#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_constraint.html#description DataAwsServicecatalogConstraint#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_constraint.html#id DataAwsServicecatalogConstraint#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_constraint.html aws_servicecatalog_constraint}
*/
export declare class DataAwsServicecatalogConstraint extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_constraint.html aws_servicecatalog_constraint} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServicecatalogConstraintConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsServicecatalogConstraintConfig);
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
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get owner(): string;
    get parameters(): string;
    get portfolioId(): string;
    get productId(): string;
    get status(): string;
    get type(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-servicecatalog-constraint.d.ts.map