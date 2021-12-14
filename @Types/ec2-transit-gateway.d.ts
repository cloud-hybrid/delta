import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface Ec2TransitGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html#amazon_side_asn Ec2TransitGateway#amazon_side_asn}
    */
    readonly amazonSideAsn?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html#auto_accept_shared_attachments Ec2TransitGateway#auto_accept_shared_attachments}
    */
    readonly autoAcceptSharedAttachments?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html#default_route_table_association Ec2TransitGateway#default_route_table_association}
    */
    readonly defaultRouteTableAssociation?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html#default_route_table_propagation Ec2TransitGateway#default_route_table_propagation}
    */
    readonly defaultRouteTablePropagation?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html#description Ec2TransitGateway#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html#dns_support Ec2TransitGateway#dns_support}
    */
    readonly dnsSupport?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html#tags Ec2TransitGateway#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html#tags_all Ec2TransitGateway#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html#vpn_ecmp_support Ec2TransitGateway#vpn_ecmp_support}
    */
    readonly vpnEcmpSupport?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html aws_ec2_transit_gateway}
*/
export declare class Ec2TransitGateway extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html aws_ec2_transit_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayConfig = {}
    */
    constructor(scope: Construct, id: string, config?: Ec2TransitGatewayConfig);
    private _amazonSideAsn?;
    get amazonSideAsn(): number;
    set amazonSideAsn(value: number);
    resetAmazonSideAsn(): void;
    get amazonSideAsnInput(): number;
    get arn(): string;
    get associationDefaultRouteTableId(): string;
    private _autoAcceptSharedAttachments?;
    get autoAcceptSharedAttachments(): string;
    set autoAcceptSharedAttachments(value: string);
    resetAutoAcceptSharedAttachments(): void;
    get autoAcceptSharedAttachmentsInput(): string;
    private _defaultRouteTableAssociation?;
    get defaultRouteTableAssociation(): string;
    set defaultRouteTableAssociation(value: string);
    resetDefaultRouteTableAssociation(): void;
    get defaultRouteTableAssociationInput(): string;
    private _defaultRouteTablePropagation?;
    get defaultRouteTablePropagation(): string;
    set defaultRouteTablePropagation(value: string);
    resetDefaultRouteTablePropagation(): void;
    get defaultRouteTablePropagationInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _dnsSupport?;
    get dnsSupport(): string;
    set dnsSupport(value: string);
    resetDnsSupport(): void;
    get dnsSupportInput(): string;
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
    private _vpnEcmpSupport?;
    get vpnEcmpSupport(): string;
    set vpnEcmpSupport(value: string);
    resetVpnEcmpSupport(): void;
    get vpnEcmpSupportInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ec2-transit-gateway.d.ts.map