import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AppStream
*/
export interface AppstreamImageBuilderConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#appstream_agent_version AppstreamImageBuilder#appstream_agent_version}
    */
    readonly appstreamAgentVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#description AppstreamImageBuilder#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#display_name AppstreamImageBuilder#display_name}
    */
    readonly displayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#enable_default_internet_access AppstreamImageBuilder#enable_default_internet_access}
    */
    readonly enableDefaultInternetAccess?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#iam_role_arn AppstreamImageBuilder#iam_role_arn}
    */
    readonly iamRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#image_arn AppstreamImageBuilder#image_arn}
    */
    readonly imageArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#image_name AppstreamImageBuilder#image_name}
    */
    readonly imageName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#instance_type AppstreamImageBuilder#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#name AppstreamImageBuilder#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#tags AppstreamImageBuilder#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#tags_all AppstreamImageBuilder#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * access_endpoint block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#access_endpoint AppstreamImageBuilder#access_endpoint}
    */
    readonly accessEndpoint?: AppstreamImageBuilderAccessEndpoint[];
    /**
    * domain_join_info block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#domain_join_info AppstreamImageBuilder#domain_join_info}
    */
    readonly domainJoinInfo?: AppstreamImageBuilderDomainJoinInfo;
    /**
    * vpc_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#vpc_config AppstreamImageBuilder#vpc_config}
    */
    readonly vpcConfig?: AppstreamImageBuilderVpcConfig;
}
export interface AppstreamImageBuilderAccessEndpoint {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#endpoint_type AppstreamImageBuilder#endpoint_type}
    */
    readonly endpointType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#vpce_id AppstreamImageBuilder#vpce_id}
    */
    readonly vpceId?: string;
}
export declare function appstreamImageBuilderAccessEndpointToTerraform(struct?: AppstreamImageBuilderAccessEndpoint): any;
export interface AppstreamImageBuilderDomainJoinInfo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#directory_name AppstreamImageBuilder#directory_name}
    */
    readonly directoryName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#organizational_unit_distinguished_name AppstreamImageBuilder#organizational_unit_distinguished_name}
    */
    readonly organizationalUnitDistinguishedName?: string;
}
export declare function appstreamImageBuilderDomainJoinInfoToTerraform(struct?: AppstreamImageBuilderDomainJoinInfoOutputReference | AppstreamImageBuilderDomainJoinInfo): any;
export declare class AppstreamImageBuilderDomainJoinInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppstreamImageBuilderDomainJoinInfo | undefined;
    set internalValue(value: AppstreamImageBuilderDomainJoinInfo | undefined);
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
export interface AppstreamImageBuilderVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#security_group_ids AppstreamImageBuilder#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#subnet_ids AppstreamImageBuilder#subnet_ids}
    */
    readonly subnetIds?: string[];
}
export declare function appstreamImageBuilderVpcConfigToTerraform(struct?: AppstreamImageBuilderVpcConfigOutputReference | AppstreamImageBuilderVpcConfig): any;
export declare class AppstreamImageBuilderVpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppstreamImageBuilderVpcConfig | undefined;
    set internalValue(value: AppstreamImageBuilderVpcConfig | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html aws_appstream_image_builder}
*/
export declare class AppstreamImageBuilder extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html aws_appstream_image_builder} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppstreamImageBuilderConfig
    */
    constructor(scope: Construct, id: string, config: AppstreamImageBuilderConfig);
    private _appstreamAgentVersion?;
    get appstreamAgentVersion(): string;
    set appstreamAgentVersion(value: string);
    resetAppstreamAgentVersion(): void;
    get appstreamAgentVersionInput(): string;
    get arn(): string;
    get createdTime(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
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
    private _iamRoleArn?;
    get iamRoleArn(): string;
    set iamRoleArn(value: string);
    resetIamRoleArn(): void;
    get iamRoleArnInput(): string;
    get id(): string;
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
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get state(): string;
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
    private _accessEndpoint?;
    get accessEndpoint(): AppstreamImageBuilderAccessEndpoint[];
    set accessEndpoint(value: AppstreamImageBuilderAccessEndpoint[]);
    resetAccessEndpoint(): void;
    get accessEndpointInput(): AppstreamImageBuilderAccessEndpoint[];
    private _domainJoinInfo;
    get domainJoinInfo(): AppstreamImageBuilderDomainJoinInfoOutputReference;
    putDomainJoinInfo(value: AppstreamImageBuilderDomainJoinInfo): void;
    resetDomainJoinInfo(): void;
    get domainJoinInfoInput(): AppstreamImageBuilderDomainJoinInfo;
    private _vpcConfig;
    get vpcConfig(): AppstreamImageBuilderVpcConfigOutputReference;
    putVpcConfig(value: AppstreamImageBuilderVpcConfig): void;
    resetVpcConfig(): void;
    get vpcConfigInput(): AppstreamImageBuilderVpcConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=appstream-image-builder.d.ts.map