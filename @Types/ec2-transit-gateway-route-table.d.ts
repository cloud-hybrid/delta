import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface Ec2TransitGatewayRouteTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table.html#tags Ec2TransitGatewayRouteTable#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table.html#tags_all Ec2TransitGatewayRouteTable#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table.html#transit_gateway_id Ec2TransitGatewayRouteTable#transit_gateway_id}
    */
    readonly transitGatewayId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table.html aws_ec2_transit_gateway_route_table}
*/
export declare class Ec2TransitGatewayRouteTable extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table.html aws_ec2_transit_gateway_route_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayRouteTableConfig
    */
    constructor(scope: Construct, id: string, config: Ec2TransitGatewayRouteTableConfig);
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tagsAll(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTagsAll(): void;
    get tagsAllInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _transitGatewayId?;
    get transitGatewayId(): string;
    set transitGatewayId(value: string);
    get transitGatewayIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ec2-transit-gateway-route-table.d.ts.map