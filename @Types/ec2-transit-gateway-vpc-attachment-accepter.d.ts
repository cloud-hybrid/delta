import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface Ec2TransitGatewayVpcAttachmentAccepterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter.html#tags Ec2TransitGatewayVpcAttachmentAccepter#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter.html#tags_all Ec2TransitGatewayVpcAttachmentAccepter#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter.html#transit_gateway_attachment_id Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_attachment_id}
    */
    readonly transitGatewayAttachmentId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter.html#transit_gateway_default_route_table_association Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_default_route_table_association}
    */
    readonly transitGatewayDefaultRouteTableAssociation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter.html#transit_gateway_default_route_table_propagation Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_default_route_table_propagation}
    */
    readonly transitGatewayDefaultRouteTablePropagation?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter.html aws_ec2_transit_gateway_vpc_attachment_accepter}
*/
export declare class Ec2TransitGatewayVpcAttachmentAccepter extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter.html aws_ec2_transit_gateway_vpc_attachment_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayVpcAttachmentAccepterConfig
    */
    constructor(scope: Construct, id: string, config: Ec2TransitGatewayVpcAttachmentAccepterConfig);
    get applianceModeSupport(): string;
    get dnsSupport(): string;
    get id(): string;
    get ipv6Support(): string;
    get subnetIds(): string[];
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
    private _transitGatewayAttachmentId?;
    get transitGatewayAttachmentId(): string;
    set transitGatewayAttachmentId(value: string);
    get transitGatewayAttachmentIdInput(): string;
    private _transitGatewayDefaultRouteTableAssociation?;
    get transitGatewayDefaultRouteTableAssociation(): boolean | cdktf.IResolvable;
    set transitGatewayDefaultRouteTableAssociation(value: boolean | cdktf.IResolvable);
    resetTransitGatewayDefaultRouteTableAssociation(): void;
    get transitGatewayDefaultRouteTableAssociationInput(): boolean | cdktf.IResolvable;
    private _transitGatewayDefaultRouteTablePropagation?;
    get transitGatewayDefaultRouteTablePropagation(): boolean | cdktf.IResolvable;
    set transitGatewayDefaultRouteTablePropagation(value: boolean | cdktf.IResolvable);
    resetTransitGatewayDefaultRouteTablePropagation(): void;
    get transitGatewayDefaultRouteTablePropagationInput(): boolean | cdktf.IResolvable;
    get transitGatewayId(): string;
    get vpcId(): string;
    get vpcOwnerId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ec2-transit-gateway-vpc-attachment-accepter.d.ts.map