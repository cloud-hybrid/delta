import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface DataAwsCustomerGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/customer_gateway.html#tags DataAwsCustomerGateway#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/customer_gateway.html#filter DataAwsCustomerGateway#filter}
    */
    readonly filter?: DataAwsCustomerGatewayFilter[];
}
export interface DataAwsCustomerGatewayFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/customer_gateway.html#name DataAwsCustomerGateway#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/customer_gateway.html#values DataAwsCustomerGateway#values}
    */
    readonly values: string[];
}
export declare function dataAwsCustomerGatewayFilterToTerraform(struct?: DataAwsCustomerGatewayFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/customer_gateway.html aws_customer_gateway}
*/
export declare class DataAwsCustomerGateway extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/customer_gateway.html aws_customer_gateway} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCustomerGatewayConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsCustomerGatewayConfig);
    get arn(): string;
    get bgpAsn(): number;
    get deviceName(): string;
    get id(): string;
    get ipAddress(): string;
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
    private _filter?;
    get filter(): DataAwsCustomerGatewayFilter[];
    set filter(value: DataAwsCustomerGatewayFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsCustomerGatewayFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-customer-gateway.d.ts.map