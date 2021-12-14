import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface DataAwsEc2TransitGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway.html#tags DataAwsEc2TransitGateway#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway.html#filter DataAwsEc2TransitGateway#filter}
    */
    readonly filter?: DataAwsEc2TransitGatewayFilter[];
}
export interface DataAwsEc2TransitGatewayFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway.html#name DataAwsEc2TransitGateway#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway.html#values DataAwsEc2TransitGateway#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2TransitGatewayFilterToTerraform(struct?: DataAwsEc2TransitGatewayFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway.html aws_ec2_transit_gateway}
*/
export declare class DataAwsEc2TransitGateway extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway.html aws_ec2_transit_gateway} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2TransitGatewayConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2TransitGatewayConfig);
    get amazonSideAsn(): number;
    get arn(): string;
    get associationDefaultRouteTableId(): string;
    get autoAcceptSharedAttachments(): string;
    get defaultRouteTableAssociation(): string;
    get defaultRouteTablePropagation(): string;
    get description(): string;
    get dnsSupport(): string;
    get id(): string;
    get ownerId(): string;
    get propagationDefaultRouteTableId(): string;
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
    get vpnEcmpSupport(): string;
    private _filter?;
    get filter(): DataAwsEc2TransitGatewayFilter[];
    set filter(value: DataAwsEc2TransitGatewayFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEc2TransitGatewayFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-ec2-transit-gateway.d.ts.map