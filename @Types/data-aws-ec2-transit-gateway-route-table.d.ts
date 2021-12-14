import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface DataAwsEc2TransitGatewayRouteTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_table.html#tags DataAwsEc2TransitGatewayRouteTable#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_table.html#filter DataAwsEc2TransitGatewayRouteTable#filter}
    */
    readonly filter?: DataAwsEc2TransitGatewayRouteTableFilter[];
}
export interface DataAwsEc2TransitGatewayRouteTableFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_table.html#name DataAwsEc2TransitGatewayRouteTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_table.html#values DataAwsEc2TransitGatewayRouteTable#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2TransitGatewayRouteTableFilterToTerraform(struct?: DataAwsEc2TransitGatewayRouteTableFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_table.html aws_ec2_transit_gateway_route_table}
*/
export declare class DataAwsEc2TransitGatewayRouteTable extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_table.html aws_ec2_transit_gateway_route_table} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2TransitGatewayRouteTableConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2TransitGatewayRouteTableConfig);
    get arn(): string;
    get defaultAssociationRouteTable(): any;
    get defaultPropagationRouteTable(): any;
    get id(): string;
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
    get transitGatewayId(): string;
    private _filter?;
    get filter(): DataAwsEc2TransitGatewayRouteTableFilter[];
    set filter(value: DataAwsEc2TransitGatewayRouteTableFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEc2TransitGatewayRouteTableFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-ec2-transit-gateway-route-table.d.ts.map