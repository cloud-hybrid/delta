import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Pricing
*/
export interface DataAwsPricingProductConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/pricing_product.html#service_code DataAwsPricingProduct#service_code}
    */
    readonly serviceCode: string;
    /**
    * filters block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/pricing_product.html#filters DataAwsPricingProduct#filters}
    */
    readonly filters: DataAwsPricingProductFilters[];
}
export interface DataAwsPricingProductFilters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/pricing_product.html#field DataAwsPricingProduct#field}
    */
    readonly field: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/pricing_product.html#value DataAwsPricingProduct#value}
    */
    readonly value: string;
}
export declare function dataAwsPricingProductFiltersToTerraform(struct?: DataAwsPricingProductFilters): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/pricing_product.html aws_pricing_product}
*/
export declare class DataAwsPricingProduct extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/pricing_product.html aws_pricing_product} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsPricingProductConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsPricingProductConfig);
    get id(): string;
    get result(): string;
    private _serviceCode?;
    get serviceCode(): string;
    set serviceCode(value: string);
    get serviceCodeInput(): string;
    private _filters?;
    get filters(): DataAwsPricingProductFilters[];
    set filters(value: DataAwsPricingProductFilters[]);
    get filtersInput(): DataAwsPricingProductFilters[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-pricing-product.d.ts.map