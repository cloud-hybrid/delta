import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface Ec2TransitGatewayPeeringAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment.html#peer_account_id Ec2TransitGatewayPeeringAttachment#peer_account_id}
    */
    readonly peerAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment.html#peer_region Ec2TransitGatewayPeeringAttachment#peer_region}
    */
    readonly peerRegion: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment.html#peer_transit_gateway_id Ec2TransitGatewayPeeringAttachment#peer_transit_gateway_id}
    */
    readonly peerTransitGatewayId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment.html#tags Ec2TransitGatewayPeeringAttachment#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment.html#tags_all Ec2TransitGatewayPeeringAttachment#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment.html#transit_gateway_id Ec2TransitGatewayPeeringAttachment#transit_gateway_id}
    */
    readonly transitGatewayId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment.html aws_ec2_transit_gateway_peering_attachment}
*/
export declare class Ec2TransitGatewayPeeringAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment.html aws_ec2_transit_gateway_peering_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayPeeringAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: Ec2TransitGatewayPeeringAttachmentConfig);
    get id(): string;
    private _peerAccountId?;
    get peerAccountId(): string;
    set peerAccountId(value: string);
    resetPeerAccountId(): void;
    get peerAccountIdInput(): string;
    private _peerRegion?;
    get peerRegion(): string;
    set peerRegion(value: string);
    get peerRegionInput(): string;
    private _peerTransitGatewayId?;
    get peerTransitGatewayId(): string;
    set peerTransitGatewayId(value: string);
    get peerTransitGatewayIdInput(): string;
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
//# sourceMappingURL=ec2-transit-gateway-peering-attachment.d.ts.map