import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface VpcPeeringConnectionOptionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#vpc_peering_connection_id VpcPeeringConnectionOptions#vpc_peering_connection_id}
    */
    readonly vpcPeeringConnectionId: string;
    /**
    * accepter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#accepter VpcPeeringConnectionOptions#accepter}
    */
    readonly accepter?: VpcPeeringConnectionOptionsAccepter;
    /**
    * requester block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#requester VpcPeeringConnectionOptions#requester}
    */
    readonly requester?: VpcPeeringConnectionOptionsRequester;
}
export interface VpcPeeringConnectionOptionsAccepter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#allow_classic_link_to_remote_vpc VpcPeeringConnectionOptions#allow_classic_link_to_remote_vpc}
    */
    readonly allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#allow_remote_vpc_dns_resolution VpcPeeringConnectionOptions#allow_remote_vpc_dns_resolution}
    */
    readonly allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#allow_vpc_to_remote_classic_link VpcPeeringConnectionOptions#allow_vpc_to_remote_classic_link}
    */
    readonly allowVpcToRemoteClassicLink?: boolean | cdktf.IResolvable;
}
export declare function vpcPeeringConnectionOptionsAccepterToTerraform(struct?: VpcPeeringConnectionOptionsAccepterOutputReference | VpcPeeringConnectionOptionsAccepter): any;
export declare class VpcPeeringConnectionOptionsAccepterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): VpcPeeringConnectionOptionsAccepter | undefined;
    set internalValue(value: VpcPeeringConnectionOptionsAccepter | undefined);
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
export interface VpcPeeringConnectionOptionsRequester {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#allow_classic_link_to_remote_vpc VpcPeeringConnectionOptions#allow_classic_link_to_remote_vpc}
    */
    readonly allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#allow_remote_vpc_dns_resolution VpcPeeringConnectionOptions#allow_remote_vpc_dns_resolution}
    */
    readonly allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#allow_vpc_to_remote_classic_link VpcPeeringConnectionOptions#allow_vpc_to_remote_classic_link}
    */
    readonly allowVpcToRemoteClassicLink?: boolean | cdktf.IResolvable;
}
export declare function vpcPeeringConnectionOptionsRequesterToTerraform(struct?: VpcPeeringConnectionOptionsRequesterOutputReference | VpcPeeringConnectionOptionsRequester): any;
export declare class VpcPeeringConnectionOptionsRequesterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): VpcPeeringConnectionOptionsRequester | undefined;
    set internalValue(value: VpcPeeringConnectionOptionsRequester | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html aws_vpc_peering_connection_options}
*/
export declare class VpcPeeringConnectionOptions extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html aws_vpc_peering_connection_options} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcPeeringConnectionOptionsConfig
    */
    constructor(scope: Construct, id: string, config: VpcPeeringConnectionOptionsConfig);
    get id(): string;
    private _vpcPeeringConnectionId?;
    get vpcPeeringConnectionId(): string;
    set vpcPeeringConnectionId(value: string);
    get vpcPeeringConnectionIdInput(): string;
    private _accepter;
    get accepter(): VpcPeeringConnectionOptionsAccepterOutputReference;
    putAccepter(value: VpcPeeringConnectionOptionsAccepter): void;
    resetAccepter(): void;
    get accepterInput(): VpcPeeringConnectionOptionsAccepter;
    private _requester;
    get requester(): VpcPeeringConnectionOptionsRequesterOutputReference;
    putRequester(value: VpcPeeringConnectionOptionsRequester): void;
    resetRequester(): void;
    get requesterInput(): VpcPeeringConnectionOptionsRequester;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=vpc-peering-connection-options.d.ts.map