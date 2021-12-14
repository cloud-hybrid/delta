import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface Ec2LocalGatewayRouteTableVpcAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association.html#local_gateway_route_table_id Ec2LocalGatewayRouteTableVpcAssociation#local_gateway_route_table_id}
    */
    readonly localGatewayRouteTableId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association.html#tags Ec2LocalGatewayRouteTableVpcAssociation#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association.html#tags_all Ec2LocalGatewayRouteTableVpcAssociation#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association.html#vpc_id Ec2LocalGatewayRouteTableVpcAssociation#vpc_id}
    */
    readonly vpcId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association.html aws_ec2_local_gateway_route_table_vpc_association}
*/
export declare class Ec2LocalGatewayRouteTableVpcAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association.html aws_ec2_local_gateway_route_table_vpc_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2LocalGatewayRouteTableVpcAssociationConfig
    */
    constructor(scope: Construct, id: string, config: Ec2LocalGatewayRouteTableVpcAssociationConfig);
    get id(): string;
    get localGatewayId(): string;
    private _localGatewayRouteTableId?;
    get localGatewayRouteTableId(): string;
    set localGatewayRouteTableId(value: string);
    get localGatewayRouteTableIdInput(): string;
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
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ec2-local-gateway-route-table-vpc-association.d.ts.map