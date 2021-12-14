import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Service Catalog
*/
export interface DataAwsServicecatalogProductConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_product.html#accept_language DataAwsServicecatalogProduct#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_product.html#id DataAwsServicecatalogProduct#id}
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_product.html#tags DataAwsServicecatalogProduct#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_product.html aws_servicecatalog_product}
*/
export declare class DataAwsServicecatalogProduct extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_product.html aws_servicecatalog_product} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServicecatalogProductConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsServicecatalogProductConfig);
    private _acceptLanguage?;
    get acceptLanguage(): string;
    set acceptLanguage(value: string);
    resetAcceptLanguage(): void;
    get acceptLanguageInput(): string;
    get arn(): string;
    get createdTime(): string;
    get description(): string;
    get distributor(): string;
    get hasDefaultPath(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get owner(): string;
    get status(): string;
    get supportDescription(): string;
    get supportEmail(): string;
    get supportUrl(): string;
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
    get type(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-servicecatalog-product.d.ts.map