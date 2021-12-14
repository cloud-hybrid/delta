import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Storage Gateway
*/
export interface StoragegatewayGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#activation_key StoragegatewayGateway#activation_key}
    */
    readonly activationKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#average_download_rate_limit_in_bits_per_sec StoragegatewayGateway#average_download_rate_limit_in_bits_per_sec}
    */
    readonly averageDownloadRateLimitInBitsPerSec?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#average_upload_rate_limit_in_bits_per_sec StoragegatewayGateway#average_upload_rate_limit_in_bits_per_sec}
    */
    readonly averageUploadRateLimitInBitsPerSec?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#cloudwatch_log_group_arn StoragegatewayGateway#cloudwatch_log_group_arn}
    */
    readonly cloudwatchLogGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#gateway_ip_address StoragegatewayGateway#gateway_ip_address}
    */
    readonly gatewayIpAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#gateway_name StoragegatewayGateway#gateway_name}
    */
    readonly gatewayName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#gateway_timezone StoragegatewayGateway#gateway_timezone}
    */
    readonly gatewayTimezone: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#gateway_type StoragegatewayGateway#gateway_type}
    */
    readonly gatewayType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#gateway_vpc_endpoint StoragegatewayGateway#gateway_vpc_endpoint}
    */
    readonly gatewayVpcEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#medium_changer_type StoragegatewayGateway#medium_changer_type}
    */
    readonly mediumChangerType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#smb_file_share_visibility StoragegatewayGateway#smb_file_share_visibility}
    */
    readonly smbFileShareVisibility?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#smb_guest_password StoragegatewayGateway#smb_guest_password}
    */
    readonly smbGuestPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#smb_security_strategy StoragegatewayGateway#smb_security_strategy}
    */
    readonly smbSecurityStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#tags StoragegatewayGateway#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#tags_all StoragegatewayGateway#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#tape_drive_type StoragegatewayGateway#tape_drive_type}
    */
    readonly tapeDriveType?: string;
    /**
    * smb_active_directory_settings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#smb_active_directory_settings StoragegatewayGateway#smb_active_directory_settings}
    */
    readonly smbActiveDirectorySettings?: StoragegatewayGatewaySmbActiveDirectorySettings;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#timeouts StoragegatewayGateway#timeouts}
    */
    readonly timeouts?: StoragegatewayGatewayTimeouts;
}
export declare class StoragegatewayGatewayGatewayNetworkInterface extends cdktf.ComplexComputedList {
    get ipv4Address(): string;
}
export interface StoragegatewayGatewaySmbActiveDirectorySettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#domain_controllers StoragegatewayGateway#domain_controllers}
    */
    readonly domainControllers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#domain_name StoragegatewayGateway#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#organizational_unit StoragegatewayGateway#organizational_unit}
    */
    readonly organizationalUnit?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#password StoragegatewayGateway#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#timeout_in_seconds StoragegatewayGateway#timeout_in_seconds}
    */
    readonly timeoutInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#username StoragegatewayGateway#username}
    */
    readonly username: string;
}
export declare function storagegatewayGatewaySmbActiveDirectorySettingsToTerraform(struct?: StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference | StoragegatewayGatewaySmbActiveDirectorySettings): any;
export declare class StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): StoragegatewayGatewaySmbActiveDirectorySettings | undefined;
    set internalValue(value: StoragegatewayGatewaySmbActiveDirectorySettings | undefined);
    private _domainControllers?;
    get domainControllers(): string[];
    set domainControllers(value: string[]);
    resetDomainControllers(): void;
    get domainControllersInput(): string[];
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    private _organizationalUnit?;
    get organizationalUnit(): string;
    set organizationalUnit(value: string);
    resetOrganizationalUnit(): void;
    get organizationalUnitInput(): string;
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string;
    private _timeoutInSeconds?;
    get timeoutInSeconds(): number;
    set timeoutInSeconds(value: number);
    resetTimeoutInSeconds(): void;
    get timeoutInSecondsInput(): number;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string;
}
export interface StoragegatewayGatewayTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#create StoragegatewayGateway#create}
    */
    readonly create?: string;
}
export declare function storagegatewayGatewayTimeoutsToTerraform(struct?: StoragegatewayGatewayTimeoutsOutputReference | StoragegatewayGatewayTimeouts): any;
export declare class StoragegatewayGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): StoragegatewayGatewayTimeouts | undefined;
    set internalValue(value: StoragegatewayGatewayTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html aws_storagegateway_gateway}
*/
export declare class StoragegatewayGateway extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html aws_storagegateway_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewayGatewayConfig
    */
    constructor(scope: Construct, id: string, config: StoragegatewayGatewayConfig);
    private _activationKey?;
    get activationKey(): string;
    set activationKey(value: string);
    resetActivationKey(): void;
    get activationKeyInput(): string;
    get arn(): string;
    private _averageDownloadRateLimitInBitsPerSec?;
    get averageDownloadRateLimitInBitsPerSec(): number;
    set averageDownloadRateLimitInBitsPerSec(value: number);
    resetAverageDownloadRateLimitInBitsPerSec(): void;
    get averageDownloadRateLimitInBitsPerSecInput(): number;
    private _averageUploadRateLimitInBitsPerSec?;
    get averageUploadRateLimitInBitsPerSec(): number;
    set averageUploadRateLimitInBitsPerSec(value: number);
    resetAverageUploadRateLimitInBitsPerSec(): void;
    get averageUploadRateLimitInBitsPerSecInput(): number;
    private _cloudwatchLogGroupArn?;
    get cloudwatchLogGroupArn(): string;
    set cloudwatchLogGroupArn(value: string);
    resetCloudwatchLogGroupArn(): void;
    get cloudwatchLogGroupArnInput(): string;
    get ec2InstanceId(): string;
    get endpointType(): string;
    get gatewayId(): string;
    private _gatewayIpAddress?;
    get gatewayIpAddress(): string;
    set gatewayIpAddress(value: string);
    resetGatewayIpAddress(): void;
    get gatewayIpAddressInput(): string;
    private _gatewayName?;
    get gatewayName(): string;
    set gatewayName(value: string);
    get gatewayNameInput(): string;
    gatewayNetworkInterface(index: string): StoragegatewayGatewayGatewayNetworkInterface;
    private _gatewayTimezone?;
    get gatewayTimezone(): string;
    set gatewayTimezone(value: string);
    get gatewayTimezoneInput(): string;
    private _gatewayType?;
    get gatewayType(): string;
    set gatewayType(value: string);
    resetGatewayType(): void;
    get gatewayTypeInput(): string;
    private _gatewayVpcEndpoint?;
    get gatewayVpcEndpoint(): string;
    set gatewayVpcEndpoint(value: string);
    resetGatewayVpcEndpoint(): void;
    get gatewayVpcEndpointInput(): string;
    get hostEnvironment(): string;
    get id(): string;
    private _mediumChangerType?;
    get mediumChangerType(): string;
    set mediumChangerType(value: string);
    resetMediumChangerType(): void;
    get mediumChangerTypeInput(): string;
    private _smbFileShareVisibility?;
    get smbFileShareVisibility(): boolean | cdktf.IResolvable;
    set smbFileShareVisibility(value: boolean | cdktf.IResolvable);
    resetSmbFileShareVisibility(): void;
    get smbFileShareVisibilityInput(): boolean | cdktf.IResolvable;
    private _smbGuestPassword?;
    get smbGuestPassword(): string;
    set smbGuestPassword(value: string);
    resetSmbGuestPassword(): void;
    get smbGuestPasswordInput(): string;
    private _smbSecurityStrategy?;
    get smbSecurityStrategy(): string;
    set smbSecurityStrategy(value: string);
    resetSmbSecurityStrategy(): void;
    get smbSecurityStrategyInput(): string;
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
    private _tapeDriveType?;
    get tapeDriveType(): string;
    set tapeDriveType(value: string);
    resetTapeDriveType(): void;
    get tapeDriveTypeInput(): string;
    private _smbActiveDirectorySettings;
    get smbActiveDirectorySettings(): StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference;
    putSmbActiveDirectorySettings(value: StoragegatewayGatewaySmbActiveDirectorySettings): void;
    resetSmbActiveDirectorySettings(): void;
    get smbActiveDirectorySettingsInput(): StoragegatewayGatewaySmbActiveDirectorySettings;
    private _timeouts;
    get timeouts(): StoragegatewayGatewayTimeoutsOutputReference;
    putTimeouts(value: StoragegatewayGatewayTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): StoragegatewayGatewayTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=storagegateway-gateway.d.ts.map