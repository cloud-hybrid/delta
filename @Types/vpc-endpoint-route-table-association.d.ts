import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface VpcEndpointRouteTableAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_route_table_association.html#route_table_id VpcEndpointRouteTableAssociation#route_table_id}
    */
    readonly routeTableId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_route_table_association.html#vpc_endpoint_id VpcEndpointRouteTableAssociation#vpc_endpoint_id}
    */
    readonly vpcEndpointId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_route_table_association.html aws_vpc_endpoint_route_table_association}
*/
export declare class VpcEndpointRouteTableAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_route_table_association.html aws_vpc_endpoint_route_table_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcEndpointRouteTableAssociationConfig
    */
    constructor(scope: Construct, id: string, config: VpcEndpointRouteTableAssociationConfig);
    get id(): string;
    private _routeTableId?;
    get routeTableId(): string;
    set routeTableId(value: string);
    get routeTableIdInput(): string;
    private _vpcEndpointId?;
    get vpcEndpointId(): string;
    set vpcEndpointId(value: string);
    get vpcEndpointIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=vpc-endpoint-route-table-association.d.ts.map