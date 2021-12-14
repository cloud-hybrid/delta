import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface Ec2TransitGatewayPeeringAttachmentAccepterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment_accepter.html#tags Ec2TransitGatewayPeeringAttachmentAccepter#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment_accepter.html#tags_all Ec2TransitGatewayPeeringAttachmentAccepter#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment_accepter.html#transit_gateway_attachment_id Ec2TransitGatewayPeeringAttachmentAccepter#transit_gateway_attachment_id}
    */
    readonly transitGatewayAttachmentId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment_accepter.html aws_ec2_transit_gateway_peering_attachment_accepter}
*/
export declare class Ec2TransitGatewayPeeringAttachmentAccepter extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment_accepter.html aws_ec2_transit_gateway_peering_attachment_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayPeeringAttachmentAccepterConfig
    */
    constructor(scope: Construct, id: string, config: Ec2TransitGatewayPeeringAttachmentAccepterConfig);
    get id(): string;
    get peerAccountId(): string;
    get peerRegion(): string;
    get peerTransitGatewayId(): string;
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
    get transitGatewayId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ec2-transit-gateway-peering-attachment-accepter.d.ts.map