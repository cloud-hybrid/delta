import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Transfer
*/
export interface TransferServerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#certificate TransferServer#certificate}
    */
    readonly certificate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#directory_id TransferServer#directory_id}
    */
    readonly directoryId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#domain TransferServer#domain}
    */
    readonly domain?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#endpoint_type TransferServer#endpoint_type}
    */
    readonly endpointType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#force_destroy TransferServer#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#function TransferServer#function}
    */
    readonly function?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#host_key TransferServer#host_key}
    */
    readonly hostKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#identity_provider_type TransferServer#identity_provider_type}
    */
    readonly identityProviderType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#invocation_role TransferServer#invocation_role}
    */
    readonly invocationRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#logging_role TransferServer#logging_role}
    */
    readonly loggingRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#protocols TransferServer#protocols}
    */
    readonly protocols?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#security_policy_name TransferServer#security_policy_name}
    */
    readonly securityPolicyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#tags TransferServer#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#tags_all TransferServer#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#url TransferServer#url}
    */
    readonly url?: string;
    /**
    * endpoint_details block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#endpoint_details TransferServer#endpoint_details}
    */
    readonly endpointDetails?: TransferServerEndpointDetails;
}
export interface TransferServerEndpointDetails {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#address_allocation_ids TransferServer#address_allocation_ids}
    */
    readonly addressAllocationIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#security_group_ids TransferServer#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#subnet_ids TransferServer#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#vpc_endpoint_id TransferServer#vpc_endpoint_id}
    */
    readonly vpcEndpointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#vpc_id TransferServer#vpc_id}
    */
    readonly vpcId?: string;
}
export declare function transferServerEndpointDetailsToTerraform(struct?: TransferServerEndpointDetailsOutputReference | TransferServerEndpointDetails): any;
export declare class TransferServerEndpointDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): TransferServerEndpointDetails | undefined;
    set internalValue(value: TransferServerEndpointDetails | undefined);
    private _addressAllocationIds?;
    get addressAllocationIds(): string[];
    set addressAllocationIds(value: string[]);
    resetAddressAllocationIds(): void;
    get addressAllocationIdsInput(): string[];
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[];
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    resetSubnetIds(): void;
    get subnetIdsInput(): string[];
    private _vpcEndpointId?;
    get vpcEndpointId(): string;
    set vpcEndpointId(value: string);
    resetVpcEndpointId(): void;
    get vpcEndpointIdInput(): string;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html aws_transfer_server}
*/
export declare class TransferServer extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html aws_transfer_server} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TransferServerConfig = {}
    */
    constructor(scope: Construct, id: string, config?: TransferServerConfig);
    get arn(): string;
    private _certificate?;
    get certificate(): string;
    set certificate(value: string);
    resetCertificate(): void;
    get certificateInput(): string;
    private _directoryId?;
    get directoryId(): string;
    set directoryId(value: string);
    resetDirectoryId(): void;
    get directoryIdInput(): string;
    private _domain?;
    get domain(): string;
    set domain(value: string);
    resetDomain(): void;
    get domainInput(): string;
    get endpoint(): string;
    private _endpointType?;
    get endpointType(): string;
    set endpointType(value: string);
    resetEndpointType(): void;
    get endpointTypeInput(): string;
    private _forceDestroy?;
    get forceDestroy(): boolean | cdktf.IResolvable;
    set forceDestroy(value: boolean | cdktf.IResolvable);
    resetForceDestroy(): void;
    get forceDestroyInput(): boolean | cdktf.IResolvable;
    private _function?;
    get function(): string;
    set function(value: string);
    resetFunction(): void;
    get functionInput(): string;
    private _hostKey?;
    get hostKey(): string;
    set hostKey(value: string);
    resetHostKey(): void;
    get hostKeyInput(): string;
    get hostKeyFingerprint(): string;
    get id(): string;
    private _identityProviderType?;
    get identityProviderType(): string;
    set identityProviderType(value: string);
    resetIdentityProviderType(): void;
    get identityProviderTypeInput(): string;
    private _invocationRole?;
    get invocationRole(): string;
    set invocationRole(value: string);
    resetInvocationRole(): void;
    get invocationRoleInput(): string;
    private _loggingRole?;
    get loggingRole(): string;
    set loggingRole(value: string);
    resetLoggingRole(): void;
    get loggingRoleInput(): string;
    private _protocols?;
    get protocols(): string[];
    set protocols(value: string[]);
    resetProtocols(): void;
    get protocolsInput(): string[];
    private _securityPolicyName?;
    get securityPolicyName(): string;
    set securityPolicyName(value: string);
    resetSecurityPolicyName(): void;
    get securityPolicyNameInput(): string;
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
    private _url?;
    get url(): string;
    set url(value: string);
    resetUrl(): void;
    get urlInput(): string;
    private _endpointDetails;
    get endpointDetails(): TransferServerEndpointDetailsOutputReference;
    putEndpointDetails(value: TransferServerEndpointDetails): void;
    resetEndpointDetails(): void;
    get endpointDetailsInput(): TransferServerEndpointDetails;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=transfer-server.d.ts.map