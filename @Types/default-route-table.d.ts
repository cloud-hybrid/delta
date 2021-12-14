import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface DefaultRouteTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#default_route_table_id DefaultRouteTable#default_route_table_id}
    */
    readonly defaultRouteTableId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#propagating_vgws DefaultRouteTable#propagating_vgws}
    */
    readonly propagatingVgws?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#route DefaultRouteTable#route}
    */
    readonly route?: DefaultRouteTableRoute[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#tags DefaultRouteTable#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#tags_all DefaultRouteTable#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#timeouts DefaultRouteTable#timeouts}
    */
    readonly timeouts?: DefaultRouteTableTimeouts;
}
export interface DefaultRouteTableRoute {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#cidr_block DefaultRouteTable#cidr_block}
    */
    readonly cidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#destination_prefix_list_id DefaultRouteTable#destination_prefix_list_id}
    */
    readonly destinationPrefixListId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#egress_only_gateway_id DefaultRouteTable#egress_only_gateway_id}
    */
    readonly egressOnlyGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#gateway_id DefaultRouteTable#gateway_id}
    */
    readonly gatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#instance_id DefaultRouteTable#instance_id}
    */
    readonly instanceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#ipv6_cidr_block DefaultRouteTable#ipv6_cidr_block}
    */
    readonly ipv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#nat_gateway_id DefaultRouteTable#nat_gateway_id}
    */
    readonly natGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#network_interface_id DefaultRouteTable#network_interface_id}
    */
    readonly networkInterfaceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#transit_gateway_id DefaultRouteTable#transit_gateway_id}
    */
    readonly transitGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#vpc_endpoint_id DefaultRouteTable#vpc_endpoint_id}
    */
    readonly vpcEndpointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#vpc_peering_connection_id DefaultRouteTable#vpc_peering_connection_id}
    */
    readonly vpcPeeringConnectionId?: string;
}
export declare function defaultRouteTableRouteToTerraform(struct?: DefaultRouteTableRoute): any;
export interface DefaultRouteTableTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#create DefaultRouteTable#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#update DefaultRouteTable#update}
    */
    readonly update?: string;
}
export declare function defaultRouteTableTimeoutsToTerraform(struct?: DefaultRouteTableTimeoutsOutputReference | DefaultRouteTableTimeouts): any;
export declare class DefaultRouteTableTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DefaultRouteTableTimeouts | undefined;
    set internalValue(value: DefaultRouteTableTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html aws_default_route_table}
*/
export declare class DefaultRouteTable extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html aws_default_route_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DefaultRouteTableConfig
    */
    constructor(scope: Construct, id: string, config: DefaultRouteTableConfig);
    get arn(): string;
    private _defaultRouteTableId?;
    get defaultRouteTableId(): string;
    set defaultRouteTableId(value: string);
    get defaultRouteTableIdInput(): string;
    get id(): string;
    get ownerId(): string;
    private _propagatingVgws?;
    get propagatingVgws(): string[];
    set propagatingVgws(value: string[]);
    resetPropagatingVgws(): void;
    get propagatingVgwsInput(): string[];
    private _route?;
    get route(): DefaultRouteTableRoute[];
    set route(value: DefaultRouteTableRoute[]);
    resetRoute(): void;
    get routeInput(): DefaultRouteTableRoute[];
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
    get vpcId(): string;
    private _timeouts;
    get timeouts(): DefaultRouteTableTimeoutsOutputReference;
    putTimeouts(value: DefaultRouteTableTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): DefaultRouteTableTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=default-route-table.d.ts.map