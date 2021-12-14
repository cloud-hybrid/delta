import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface VpcPeeringConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#auto_accept VpcPeeringConnection#auto_accept}
    */
    readonly autoAccept?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#peer_owner_id VpcPeeringConnection#peer_owner_id}
    */
    readonly peerOwnerId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#peer_region VpcPeeringConnection#peer_region}
    */
    readonly peerRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#peer_vpc_id VpcPeeringConnection#peer_vpc_id}
    */
    readonly peerVpcId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#tags VpcPeeringConnection#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#tags_all VpcPeeringConnection#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#vpc_id VpcPeeringConnection#vpc_id}
    */
    readonly vpcId: string;
    /**
    * accepter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#accepter VpcPeeringConnection#accepter}
    */
    readonly accepter?: VpcPeeringConnectionAccepter;
    /**
    * requester block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#requester VpcPeeringConnection#requester}
    */
    readonly requester?: VpcPeeringConnectionRequester;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#timeouts VpcPeeringConnection#timeouts}
    */
    readonly timeouts?: VpcPeeringConnectionTimeouts;
}
export interface VpcPeeringConnectionAccepter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#allow_classic_link_to_remote_vpc VpcPeeringConnection#allow_classic_link_to_remote_vpc}
    */
    readonly allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#allow_remote_vpc_dns_resolution VpcPeeringConnection#allow_remote_vpc_dns_resolution}
    */
    readonly allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#allow_vpc_to_remote_classic_link VpcPeeringConnection#allow_vpc_to_remote_classic_link}
    */
    readonly allowVpcToRemoteClassicLink?: boolean | cdktf.IResolvable;
}
export declare function vpcPeeringConnectionAccepterToTerraform(struct?: VpcPeeringConnectionAccepterOutputReference | VpcPeeringConnectionAccepter): any;
export declare class VpcPeeringConnectionAccepterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): VpcPeeringConnectionAccepter | undefined;
    set internalValue(value: VpcPeeringConnectionAccepter | undefined);
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
export interface VpcPeeringConnectionRequester {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#allow_classic_link_to_remote_vpc VpcPeeringConnection#allow_classic_link_to_remote_vpc}
    */
    readonly allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#allow_remote_vpc_dns_resolution VpcPeeringConnection#allow_remote_vpc_dns_resolution}
    */
    readonly allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#allow_vpc_to_remote_classic_link VpcPeeringConnection#allow_vpc_to_remote_classic_link}
    */
    readonly allowVpcToRemoteClassicLink?: boolean | cdktf.IResolvable;
}
export declare function vpcPeeringConnectionRequesterToTerraform(struct?: VpcPeeringConnectionRequesterOutputReference | VpcPeeringConnectionRequester): any;
export declare class VpcPeeringConnectionRequesterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): VpcPeeringConnectionRequester | undefined;
    set internalValue(value: VpcPeeringConnectionRequester | undefined);
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
export interface VpcPeeringConnectionTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#create VpcPeeringConnection#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#delete VpcPeeringConnection#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#update VpcPeeringConnection#update}
    */
    readonly update?: string;
}
export declare function vpcPeeringConnectionTimeoutsToTerraform(struct?: VpcPeeringConnectionTimeoutsOutputReference | VpcPeeringConnectionTimeouts): any;
export declare class VpcPeeringConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): VpcPeeringConnectionTimeouts | undefined;
    set internalValue(value: VpcPeeringConnectionTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html aws_vpc_peering_connection}
*/
export declare class VpcPeeringConnection extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html aws_vpc_peering_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcPeeringConnectionConfig
    */
    constructor(scope: Construct, id: string, config: VpcPeeringConnectionConfig);
    get acceptStatus(): string;
    private _autoAccept?;
    get autoAccept(): boolean | cdktf.IResolvable;
    set autoAccept(value: boolean | cdktf.IResolvable);
    resetAutoAccept(): void;
    get autoAcceptInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _peerOwnerId?;
    get peerOwnerId(): string;
    set peerOwnerId(value: string);
    resetPeerOwnerId(): void;
    get peerOwnerIdInput(): string;
    private _peerRegion?;
    get peerRegion(): string;
    set peerRegion(value: string);
    resetPeerRegion(): void;
    get peerRegionInput(): string;
    private _peerVpcId?;
    get peerVpcId(): string;
    set peerVpcId(value: string);
    get peerVpcIdInput(): string;
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
    private _accepter;
    get accepter(): VpcPeeringConnectionAccepterOutputReference;
    putAccepter(value: VpcPeeringConnectionAccepter): void;
    resetAccepter(): void;
    get accepterInput(): VpcPeeringConnectionAccepter;
    private _requester;
    get requester(): VpcPeeringConnectionRequesterOutputReference;
    putRequester(value: VpcPeeringConnectionRequester): void;
    resetRequester(): void;
    get requesterInput(): VpcPeeringConnectionRequester;
    private _timeouts;
    get timeouts(): VpcPeeringConnectionTimeoutsOutputReference;
    putTimeouts(value: VpcPeeringConnectionTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): VpcPeeringConnectionTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=vpc-peering-connection.d.ts.map