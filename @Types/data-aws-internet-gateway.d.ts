import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface DataAwsInternetGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/internet_gateway.html#internet_gateway_id DataAwsInternetGateway#internet_gateway_id}
    */
    readonly internetGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/internet_gateway.html#tags DataAwsInternetGateway#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/internet_gateway.html#filter DataAwsInternetGateway#filter}
    */
    readonly filter?: DataAwsInternetGatewayFilter[];
}
export declare class DataAwsInternetGatewayAttachments extends cdktf.ComplexComputedList {
    get state(): string;
    get vpcId(): string;
}
export interface DataAwsInternetGatewayFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/internet_gateway.html#name DataAwsInternetGateway#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/internet_gateway.html#values DataAwsInternetGateway#values}
    */
    readonly values: string[];
}
export declare function dataAwsInternetGatewayFilterToTerraform(struct?: DataAwsInternetGatewayFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/internet_gateway.html aws_internet_gateway}
*/
export declare class DataAwsInternetGateway extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/internet_gateway.html aws_internet_gateway} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsInternetGatewayConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsInternetGatewayConfig);
    get arn(): string;
    attachments(index: string): DataAwsInternetGatewayAttachments;
    get id(): string;
    private _internetGatewayId?;
    get internetGatewayId(): string;
    set internetGatewayId(value: string);
    resetInternetGatewayId(): void;
    get internetGatewayIdInput(): string;
    get ownerId(): string;
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
    private _filter?;
    get filter(): DataAwsInternetGatewayFilter[];
    set filter(value: DataAwsInternetGatewayFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsInternetGatewayFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-internet-gateway.d.ts.map