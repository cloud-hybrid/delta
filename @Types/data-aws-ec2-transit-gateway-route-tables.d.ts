import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface DataAwsEc2TransitGatewayRouteTablesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_tables.html#tags DataAwsEc2TransitGatewayRouteTables#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_tables.html#filter DataAwsEc2TransitGatewayRouteTables#filter}
    */
    readonly filter?: DataAwsEc2TransitGatewayRouteTablesFilter[];
}
export interface DataAwsEc2TransitGatewayRouteTablesFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_tables.html#name DataAwsEc2TransitGatewayRouteTables#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_tables.html#values DataAwsEc2TransitGatewayRouteTables#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2TransitGatewayRouteTablesFilterToTerraform(struct?: DataAwsEc2TransitGatewayRouteTablesFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_tables.html aws_ec2_transit_gateway_route_tables}
*/
export declare class DataAwsEc2TransitGatewayRouteTables extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_tables.html aws_ec2_transit_gateway_route_tables} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2TransitGatewayRouteTablesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2TransitGatewayRouteTablesConfig);
    get id(): string;
    get ids(): string[];
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
    get filter(): DataAwsEc2TransitGatewayRouteTablesFilter[];
    set filter(value: DataAwsEc2TransitGatewayRouteTablesFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEc2TransitGatewayRouteTablesFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-ec2-transit-gateway-route-tables.d.ts.map