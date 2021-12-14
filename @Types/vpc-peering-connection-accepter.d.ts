import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface VpcPeeringConnectionAccepterAConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#auto_accept VpcPeeringConnectionAccepterA#auto_accept}
    */
    readonly autoAccept?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#tags VpcPeeringConnectionAccepterA#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#tags_all VpcPeeringConnectionAccepterA#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#vpc_peering_connection_id VpcPeeringConnectionAccepterA#vpc_peering_connection_id}
    */
    readonly vpcPeeringConnectionId: string;
    /**
    * accepter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#accepter VpcPeeringConnectionAccepterA#accepter}
    */
    readonly accepter?: VpcPeeringConnectionAccepterAccepter;
    /**
    * requester block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#requester VpcPeeringConnectionAccepterA#requester}
    */
    readonly requester?: VpcPeeringConnectionAccepterRequester;
}
export interface VpcPeeringConnectionAccepterAccepter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#allow_classic_link_to_remote_vpc VpcPeeringConnectionAccepterA#allow_classic_link_to_remote_vpc}
    */
    readonly allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#allow_remote_vpc_dns_resolution VpcPeeringConnectionAccepterA#allow_remote_vpc_dns_resolution}
    */
    readonly allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#allow_vpc_to_remote_classic_link VpcPeeringConnectionAccepterA#allow_vpc_to_remote_classic_link}
    */
    readonly allowVpcToRemoteClassicLink?: boolean | cdktf.IResolvable;
}
export declare function vpcPeeringConnectionAccepterAccepterToTerraform(struct?: VpcPeeringConnectionAccepterAccepterOutputReference | VpcPeeringConnectionAccepterAccepter): any;
export declare class VpcPeeringConnectionAccepterAccepterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): VpcPeeringConnectionAccepterAccepter | undefined;
    set internalValue(value: VpcPeeringConnectionAccepterAccepter | undefined);
    private _allowClassicLinkToRemoteVpc?;
    get allowClassicLinkToRemoteVpc(): boolean | cdktf.IResolvable;
    set allowClassicLinkToRemoteVpc(value: boolean | cdktf.IResolvable);
    resetAllowClassicLinkToRemoteVpc(): void;
    get allowClassicLinkToRemoteVpcInput(): boolean | cdktf.IResolvable;
    private _allowRemoteVpcDnsResolution?;
    get allowRemoteVpcDnsResolution(): boolean | cdktf.IResolvable;
    set allowRemoteVpcDnsResolution(value: boolean | cdktf.IResolvable);
    resetAllowRemoteVpcDnsResolution(): void;
    get allowRemoteVpcDnsResolutionInput(): boolean | cdktf.IResolvable;
    private _allowVpcToRemoteClassicLink?;
    get allowVpcToRemoteClassicLink(): boolean | cdktf.IResolvable;
    set allowVpcToRemoteClassicLink(value: boolean | cdktf.IResolvable);
    resetAllowVpcToRemoteClassicLink(): void;
    get allowVpcToRemoteClassicLinkInput(): boolean | cdktf.IResolvable;
}
export interface VpcPeeringConnectionAccepterRequester {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#allow_classic_link_to_remote_vpc VpcPeeringConnectionAccepterA#allow_classic_link_to_remote_vpc}
    */
    readonly allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#allow_remote_vpc_dns_resolution VpcPeeringConnectionAccepterA#allow_remote_vpc_dns_resolution}
    */
    readonly allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#allow_vpc_to_remote_classic_link VpcPeeringConnectionAccepterA#allow_vpc_to_remote_classic_link}
    */
    readonly allowVpcToRemoteClassicLink?: boolean | cdktf.IResolvable;
}
export declare function vpcPeeringConnectionAccepterRequesterToTerraform(struct?: VpcPeeringConnectionAccepterRequesterOutputReference | VpcPeeringConnectionAccepterRequester): any;
export declare class VpcPeeringConnectionAccepterRequesterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): VpcPeeringConnectionAccepterRequester | undefined;
    set internalValue(value: VpcPeeringConnectionAccepterRequester | undefined);
    private _allowClassicLinkToRemoteVpc?;
    get allowClassicLinkToRemoteVpc(): boolean | cdktf.IResolvable;
    set allowClassicLinkToRemoteVpc(value: boolean | cdktf.IResolvable);
    resetAllowClassicLinkToRemoteVpc(): void;
    get allowClassicLinkToRemoteVpcInput(): boolean | cdktf.IResolvable;
    private _allowRemoteVpcDnsResolution?;
    get allowRemoteVpcDnsResolution(): boolean | cdktf.IResolvable;
    set allowRemoteVpcDnsResolution(value: boolean | cdktf.IResolvable);
    resetAllowRemoteVpcDnsResolution(): void;
    get allowRemoteVpcDnsResolutionInput(): boolean | cdktf.IResolvable;
    private _allowVpcToRemoteClassicLink?;
    get allowVpcToRemoteClassicLink(): boolean | cdktf.IResolvable;
    set allowVpcToRemoteClassicLink(value: boolean | cdktf.IResolvable);
    resetAllowVpcToRemoteClassicLink(): void;
    get allowVpcToRemoteClassicLinkInput(): boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html aws_vpc_peering_connection_accepter}
*/
export declare class VpcPeeringConnectionAccepterA extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html aws_vpc_peering_connection_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcPeeringConnectionAccepterAConfig
    */
    constructor(scope: Construct, id: string, config: VpcPeeringConnectionAccepterAConfig);
    get acceptStatus(): string;
    private _autoAccept?;
    get autoAccept(): boolean | cdktf.IResolvable;
    set autoAccept(value: boolean | cdktf.IResolvable);
    resetAutoAccept(): void;
    get autoAcceptInput(): boolean | cdktf.IResolvable;
    get id(): string;
    get peerOwnerId(): string;
    get peerRegion(): string;
    get peerVpcId(): string;
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
    private _vpcPeeringConnectionId?;
    get vpcPeeringConnectionId(): string;
    set vpcPeeringConnectionId(value: string);
    get vpcPeeringConnectionIdInput(): string;
    private _accepter;
    get accepter(): VpcPeeringConnectionAccepterAccepterOutputReference;
    putAccepter(value: VpcPeeringConnectionAccepterAccepter): void;
    resetAccepter(): void;
    get accepterInput(): VpcPeeringConnectionAccepterAccepter;
    private _requester;
    get requester(): VpcPeeringConnectionAccepterRequesterOutputReference;
    putRequester(value: VpcPeeringConnectionAccepterRequester): void;
    resetRequester(): void;
    get requesterInput(): VpcPeeringConnectionAccepterRequester;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=vpc-peering-connection-accepter.d.ts.map