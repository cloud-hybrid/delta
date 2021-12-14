import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface RouteTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#propagating_vgws RouteTable#propagating_vgws}
    */
    readonly propagatingVgws?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#route RouteTable#route}
    */
    readonly route?: RouteTableRoute[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#tags RouteTable#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#tags_all RouteTable#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#vpc_id RouteTable#vpc_id}
    */
    readonly vpcId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#timeouts RouteTable#timeouts}
    */
    readonly timeouts?: RouteTableTimeouts;
}
export interface RouteTableRoute {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#carrier_gateway_id RouteTable#carrier_gateway_id}
    */
    readonly carrierGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#cidr_block RouteTable#cidr_block}
    */
    readonly cidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#destination_prefix_list_id RouteTable#destination_prefix_list_id}
    */
    readonly destinationPrefixListId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#egress_only_gateway_id RouteTable#egress_only_gateway_id}
    */
    readonly egressOnlyGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#gateway_id RouteTable#gateway_id}
    */
    readonly gatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#instance_id RouteTable#instance_id}
    */
    readonly instanceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#ipv6_cidr_block RouteTable#ipv6_cidr_block}
    */
    readonly ipv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#local_gateway_id RouteTable#local_gateway_id}
    */
    readonly localGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#nat_gateway_id RouteTable#nat_gateway_id}
    */
    readonly natGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#network_interface_id RouteTable#network_interface_id}
    */
    readonly networkInterfaceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#transit_gateway_id RouteTable#transit_gateway_id}
    */
    readonly transitGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#vpc_endpoint_id RouteTable#vpc_endpoint_id}
    */
    readonly vpcEndpointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#vpc_peering_connection_id RouteTable#vpc_peering_connection_id}
    */
    readonly vpcPeeringConnectionId?: string;
}
export declare function routeTableRouteToTerraform(struct?: RouteTableRoute): any;
export interface RouteTableTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#create RouteTable#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#delete RouteTable#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#update RouteTable#update}
    */
    readonly update?: string;
}
export declare function routeTableTimeoutsToTerraform(struct?: RouteTableTimeoutsOutputReference | RouteTableTimeouts): any;
export declare class RouteTableTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): RouteTableTimeouts | undefined;
    set internalValue(value: RouteTableTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route_table.html aws_route_table}
*/
export declare class RouteTable extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route_table.html aws_route_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RouteTableConfig
    */
    constructor(scope: Construct, id: string, config: RouteTableConfig);
    get arn(): string;
    get id(): string;
    get ownerId(): string;
    private _propagatingVgws?;
    get propagatingVgws(): string[];
    set propagatingVgws(value: string[]);
    resetPropagatingVgws(): void;
    get propagatingVgwsInput(): string[];
    private _route?;
    get route(): RouteTableRoute[];
    set route(value: RouteTableRoute[]);
    resetRoute(): void;
    get routeInput(): RouteTableRoute[];
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
    private _timeouts;
    get timeouts(): RouteTableTimeoutsOutputReference;
    putTimeouts(value: RouteTableTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): RouteTableTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=route-table.d.ts.map