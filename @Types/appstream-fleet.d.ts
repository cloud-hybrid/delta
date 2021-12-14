import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AppStream
*/
export interface AppstreamFleetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#description AppstreamFleet#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#disconnect_timeout_in_seconds AppstreamFleet#disconnect_timeout_in_seconds}
    */
    readonly disconnectTimeoutInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#display_name AppstreamFleet#display_name}
    */
    readonly displayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#enable_default_internet_access AppstreamFleet#enable_default_internet_access}
    */
    readonly enableDefaultInternetAccess?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#fleet_type AppstreamFleet#fleet_type}
    */
    readonly fleetType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#iam_role_arn AppstreamFleet#iam_role_arn}
    */
    readonly iamRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#idle_disconnect_timeout_in_seconds AppstreamFleet#idle_disconnect_timeout_in_seconds}
    */
    readonly idleDisconnectTimeoutInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#image_arn AppstreamFleet#image_arn}
    */
    readonly imageArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#image_name AppstreamFleet#image_name}
    */
    readonly imageName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#instance_type AppstreamFleet#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#max_user_duration_in_seconds AppstreamFleet#max_user_duration_in_seconds}
    */
    readonly maxUserDurationInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#name AppstreamFleet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#stream_view AppstreamFleet#stream_view}
    */
    readonly streamView?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#tags AppstreamFleet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#tags_all AppstreamFleet#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * compute_capacity block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#compute_capacity AppstreamFleet#compute_capacity}
    */
    readonly computeCapacity: AppstreamFleetComputeCapacity;
    /**
    * domain_join_info block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#domain_join_info AppstreamFleet#domain_join_info}
    */
    readonly domainJoinInfo?: AppstreamFleetDomainJoinInfo;
    /**
    * vpc_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#vpc_config AppstreamFleet#vpc_config}
    */
    readonly vpcConfig?: AppstreamFleetVpcConfig;
}
export interface AppstreamFleetComputeCapacity {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#desired_instances AppstreamFleet#desired_instances}
    */
    readonly desiredInstances: number;
}
export declare function appstreamFleetComputeCapacityToTerraform(struct?: AppstreamFleetComputeCapacityOutputReference | AppstreamFleetComputeCapacity): any;
export declare class AppstreamFleetComputeCapacityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppstreamFleetComputeCapacity | undefined;
    set internalValue(value: AppstreamFleetComputeCapacity | undefined);
    private _desiredInstances?;
    get desiredInstances(): number;
    set desiredInstances(value: number);
    get desiredInstancesInput(): number;
}
export interface AppstreamFleetDomainJoinInfo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#directory_name AppstreamFleet#directory_name}
    */
    readonly directoryName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#organizational_unit_distinguished_name AppstreamFleet#organizational_unit_distinguished_name}
    */
    readonly organizationalUnitDistinguishedName?: string;
}
export declare function appstreamFleetDomainJoinInfoToTerraform(struct?: AppstreamFleetDomainJoinInfoOutputReference | AppstreamFleetDomainJoinInfo): any;
export declare class AppstreamFleetDomainJoinInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppstreamFleetDomainJoinInfo | undefined;
    set internalValue(value: AppstreamFleetDomainJoinInfo | undefined);
    private _directoryName?;
    get directoryName(): string;
    set directoryName(value: string);
    resetDirectoryName(): void;
    get directoryNameInput(): string;
    private _organizationalUnitDistinguishedName?;
    get organizationalUnitDistinguishedName(): string;
    set organizationalUnitDistinguishedName(value: string);
    resetOrganizationalUnitDistinguishedName(): void;
    get organizationalUnitDistinguishedNameInput(): string;
}
export interface AppstreamFleetVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#security_group_ids AppstreamFleet#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#subnet_ids AppstreamFleet#subnet_ids}
    */
    readonly subnetIds?: string[];
}
export declare function appstreamFleetVpcConfigToTerraform(struct?: AppstreamFleetVpcConfigOutputReference | AppstreamFleetVpcConfig): any;
export declare class AppstreamFleetVpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppstreamFleetVpcConfig | undefined;
    set internalValue(value: AppstreamFleetVpcConfig | undefined);
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
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html aws_appstream_fleet}
*/
export declare class AppstreamFleet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html aws_appstream_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppstreamFleetConfig
    */
    constructor(scope: Construct, id: string, config: AppstreamFleetConfig);
    get arn(): string;
    get createdTime(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _disconnectTimeoutInSeconds?;
    get disconnectTimeoutInSeconds(): number;
    set disconnectTimeoutInSeconds(value: number);
    resetDisconnectTimeoutInSeconds(): void;
    get disconnectTimeoutInSecondsInput(): number;
    private _displayName?;
    get displayName(): string;
    set displayName(value: string);
    resetDisplayName(): void;
    get displayNameInput(): string;
    private _enableDefaultInternetAccess?;
    get enableDefaultInternetAccess(): boolean | cdktf.IResolvable;
    set enableDefaultInternetAccess(value: boolean | cdktf.IResolvable);
    resetEnableDefaultInternetAccess(): void;
    get enableDefaultInternetAccessInput(): boolean | cdktf.IResolvable;
    private _fleetType?;
    get fleetType(): string;
    set fleetType(value: string);
    resetFleetType(): void;
    get fleetTypeInput(): string;
    private _iamRoleArn?;
    get iamRoleArn(): string;
    set iamRoleArn(value: string);
    resetIamRoleArn(): void;
    get iamRoleArnInput(): string;
    get id(): string;
    private _idleDisconnectTimeoutInSeconds?;
    get idleDisconnectTimeoutInSeconds(): number;
    set idleDisconnectTimeoutInSeconds(value: number);
    resetIdleDisconnectTimeoutInSeconds(): void;
    get idleDisconnectTimeoutInSecondsInput(): number;
    private _imageArn?;
    get imageArn(): string;
    set imageArn(value: string);
    resetImageArn(): void;
    get imageArnInput(): string;
    private _imageName?;
    get imageName(): string;
    set imageName(value: string);
    resetImageName(): void;
    get imageNameInput(): string;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string;
    private _maxUserDurationInSeconds?;
    get maxUserDurationInSeconds(): number;
    set maxUserDurationInSeconds(value: number);
    resetMaxUserDurationInSeconds(): void;
    get maxUserDurationInSecondsInput(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get state(): string;
    private _streamView?;
    get streamView(): string;
    set streamView(value: string);
    resetStreamView(): void;
    get streamViewInput(): string;
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
    private _computeCapacity;
    get computeCapacity(): AppstreamFleetComputeCapacityOutputReference;
    putComputeCapacity(value: AppstreamFleetComputeCapacity): void;
    get computeCapacityInput(): AppstreamFleetComputeCapacity;
    private _domainJoinInfo;
    get domainJoinInfo(): AppstreamFleetDomainJoinInfoOutputReference;
    putDomainJoinInfo(value: AppstreamFleetDomainJoinInfo): void;
    resetDomainJoinInfo(): void;
    get domainJoinInfoInput(): AppstreamFleetDomainJoinInfo;
    private _vpcConfig;
    get vpcConfig(): AppstreamFleetVpcConfigOutputReference;
    putVpcConfig(value: AppstreamFleetVpcConfig): void;
    resetVpcConfig(): void;
    get vpcConfigInput(): AppstreamFleetVpcConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=appstream-fleet.d.ts.map