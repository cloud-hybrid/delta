import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface Ec2TransitGatewayVpcAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html#appliance_mode_support Ec2TransitGatewayVpcAttachment#appliance_mode_support}
    */
    readonly applianceModeSupport?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html#dns_support Ec2TransitGatewayVpcAttachment#dns_support}
    */
    readonly dnsSupport?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html#ipv6_support Ec2TransitGatewayVpcAttachment#ipv6_support}
    */
    readonly ipv6Support?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html#subnet_ids Ec2TransitGatewayVpcAttachment#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html#tags Ec2TransitGatewayVpcAttachment#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html#tags_all Ec2TransitGatewayVpcAttachment#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html#transit_gateway_default_route_table_association Ec2TransitGatewayVpcAttachment#transit_gateway_default_route_table_association}
    */
    readonly transitGatewayDefaultRouteTableAssociation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html#transit_gateway_default_route_table_propagation Ec2TransitGatewayVpcAttachment#transit_gateway_default_route_table_propagation}
    */
    readonly transitGatewayDefaultRouteTablePropagation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html#transit_gateway_id Ec2TransitGatewayVpcAttachment#transit_gateway_id}
    */
    readonly transitGatewayId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html#vpc_id Ec2TransitGatewayVpcAttachment#vpc_id}
    */
    readonly vpcId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html aws_ec2_transit_gateway_vpc_attachment}
*/
export declare class Ec2TransitGatewayVpcAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html aws_ec2_transit_gateway_vpc_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayVpcAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: Ec2TransitGatewayVpcAttachmentConfig);
    private _applianceModeSupport?;
    get applianceModeSupport(): string;
    set applianceModeSupport(value: string);
    resetApplianceModeSupport(): void;
    get applianceModeSupportInput(): string;
    private _dnsSupport?;
    get dnsSupport(): string;
    set dnsSupport(value: string);
    resetDnsSupport(): void;
    get dnsSupportInput(): string;
    get id(): string;
    private _ipv6Support?;
    get ipv6Support(): string;
    set ipv6Support(value: string);
    resetIpv6Support(): void;
    get ipv6SupportInput(): string;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[];
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
    private _transitGatewayId?;
    get transitGatewayId(): string;
    set transitGatewayId(value: string);
    get transitGatewayIdInput(): string;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    get vpcOwnerId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ec2-transit-gateway-vpc-attachment.d.ts.map