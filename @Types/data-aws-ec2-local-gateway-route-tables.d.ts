import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface DataAwsEc2LocalGatewayRouteTablesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_tables.html#tags DataAwsEc2LocalGatewayRouteTables#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_tables.html#filter DataAwsEc2LocalGatewayRouteTables#filter}
    */
    readonly filter?: DataAwsEc2LocalGatewayRouteTablesFilter[];
}
export interface DataAwsEc2LocalGatewayRouteTablesFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_tables.html#name DataAwsEc2LocalGatewayRouteTables#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_tables.html#values DataAwsEc2LocalGatewayRouteTables#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2LocalGatewayRouteTablesFilterToTerraform(struct?: DataAwsEc2LocalGatewayRouteTablesFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_tables.html aws_ec2_local_gateway_route_tables}
*/
export declare class DataAwsEc2LocalGatewayRouteTables extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_tables.html aws_ec2_local_gateway_route_tables} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2LocalGatewayRouteTablesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2LocalGatewayRouteTablesConfig);
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
    get filter(): DataAwsEc2LocalGatewayRouteTablesFilter[];
    set filter(value: DataAwsEc2LocalGatewayRouteTablesFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEc2LocalGatewayRouteTablesFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-ec2-local-gateway-route-tables.d.ts.map