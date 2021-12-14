import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface Ec2ClientVpnEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#client_cidr_block Ec2ClientVpnEndpoint#client_cidr_block}
    */
    readonly clientCidrBlock: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#description Ec2ClientVpnEndpoint#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#dns_servers Ec2ClientVpnEndpoint#dns_servers}
    */
    readonly dnsServers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#self_service_portal Ec2ClientVpnEndpoint#self_service_portal}
    */
    readonly selfServicePortal?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#server_certificate_arn Ec2ClientVpnEndpoint#server_certificate_arn}
    */
    readonly serverCertificateArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#split_tunnel Ec2ClientVpnEndpoint#split_tunnel}
    */
    readonly splitTunnel?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#tags Ec2ClientVpnEndpoint#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#tags_all Ec2ClientVpnEndpoint#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#transport_protocol Ec2ClientVpnEndpoint#transport_protocol}
    */
    readonly transportProtocol?: string;
    /**
    * authentication_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#authentication_options Ec2ClientVpnEndpoint#authentication_options}
    */
    readonly authenticationOptions: Ec2ClientVpnEndpointAuthenticationOptions[];
    /**
    * connection_log_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#connection_log_options Ec2ClientVpnEndpoint#connection_log_options}
    */
    readonly connectionLogOptions: Ec2ClientVpnEndpointConnectionLogOptions;
}
export interface Ec2ClientVpnEndpointAuthenticationOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#active_directory_id Ec2ClientVpnEndpoint#active_directory_id}
    */
    readonly activeDirectoryId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#root_certificate_chain_arn Ec2ClientVpnEndpoint#root_certificate_chain_arn}
    */
    readonly rootCertificateChainArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#saml_provider_arn Ec2ClientVpnEndpoint#saml_provider_arn}
    */
    readonly samlProviderArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#self_service_saml_provider_arn Ec2ClientVpnEndpoint#self_service_saml_provider_arn}
    */
    readonly selfServiceSamlProviderArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#type Ec2ClientVpnEndpoint#type}
    */
    readonly type: string;
}
export declare function ec2ClientVpnEndpointAuthenticationOptionsToTerraform(struct?: Ec2ClientVpnEndpointAuthenticationOptions): any;
export interface Ec2ClientVpnEndpointConnectionLogOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#cloudwatch_log_group Ec2ClientVpnEndpoint#cloudwatch_log_group}
    */
    readonly cloudwatchLogGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#cloudwatch_log_stream Ec2ClientVpnEndpoint#cloudwatch_log_stream}
    */
    readonly cloudwatchLogStream?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#enabled Ec2ClientVpnEndpoint#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
}
export declare function ec2ClientVpnEndpointConnectionLogOptionsToTerraform(struct?: Ec2ClientVpnEndpointConnectionLogOptionsOutputReference | Ec2ClientVpnEndpointConnectionLogOptions): any;
export declare class Ec2ClientVpnEndpointConnectionLogOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Ec2ClientVpnEndpointConnectionLogOptions | undefined;
    set internalValue(value: Ec2ClientVpnEndpointConnectionLogOptions | undefined);
    private _cloudwatchLogGroup?;
    get cloudwatchLogGroup(): string;
    set cloudwatchLogGroup(value: string);
    resetCloudwatchLogGroup(): void;
    get cloudwatchLogGroupInput(): string;
    private _cloudwatchLogStream?;
    get cloudwatchLogStream(): string;
    set cloudwatchLogStream(value: string);
    resetCloudwatchLogStream(): void;
    get cloudwatchLogStreamInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html aws_ec2_client_vpn_endpoint}
*/
export declare class Ec2ClientVpnEndpoint extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html aws_ec2_client_vpn_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2ClientVpnEndpointConfig
    */
    constructor(scope: Construct, id: string, config: Ec2ClientVpnEndpointConfig);
    get arn(): string;
    private _clientCidrBlock?;
    get clientCidrBlock(): string;
    set clientCidrBlock(value: string);
    get clientCidrBlockInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get dnsName(): string;
    private _dnsServers?;
    get dnsServers(): string[];
    set dnsServers(value: string[]);
    resetDnsServers(): void;
    get dnsServersInput(): string[];
    get id(): string;
    private _selfServicePortal?;
    get selfServicePortal(): string;
    set selfServicePortal(value: string);
    resetSelfServicePortal(): void;
    get selfServicePortalInput(): string;
    private _serverCertificateArn?;
    get serverCertificateArn(): string;
    set serverCertificateArn(value: string);
    get serverCertificateArnInput(): string;
    private _splitTunnel?;
    get splitTunnel(): boolean | cdktf.IResolvable;
    set splitTunnel(value: boolean | cdktf.IResolvable);
    resetSplitTunnel(): void;
    get splitTunnelInput(): boolean | cdktf.IResolvable;
    get status(): string;
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
    private _transportProtocol?;
    get transportProtocol(): string;
    set transportProtocol(value: string);
    resetTransportProtocol(): void;
    get transportProtocolInput(): string;
    private _authenticationOptions?;
    get authenticationOptions(): Ec2ClientVpnEndpointAuthenticationOptions[];
    set authenticationOptions(value: Ec2ClientVpnEndpointAuthenticationOptions[]);
    get authenticationOptionsInput(): Ec2ClientVpnEndpointAuthenticationOptions[];
    private _connectionLogOptions;
    get connectionLogOptions(): Ec2ClientVpnEndpointConnectionLogOptionsOutputReference;
    putConnectionLogOptions(value: Ec2ClientVpnEndpointConnectionLogOptions): void;
    get connectionLogOptionsInput(): Ec2ClientVpnEndpointConnectionLogOptions;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ec2-client-vpn-endpoint.d.ts.map