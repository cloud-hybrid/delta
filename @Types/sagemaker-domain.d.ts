import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS SageMaker
*/
export interface SagemakerDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#app_network_access_type SagemakerDomain#app_network_access_type}
    */
    readonly appNetworkAccessType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#auth_mode SagemakerDomain#auth_mode}
    */
    readonly authMode: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#domain_name SagemakerDomain#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#kms_key_id SagemakerDomain#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#subnet_ids SagemakerDomain#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#tags SagemakerDomain#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#tags_all SagemakerDomain#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#vpc_id SagemakerDomain#vpc_id}
    */
    readonly vpcId: string;
    /**
    * default_user_settings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#default_user_settings SagemakerDomain#default_user_settings}
    */
    readonly defaultUserSettings: SagemakerDomainDefaultUserSettings;
    /**
    * retention_policy block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#retention_policy SagemakerDomain#retention_policy}
    */
    readonly retentionPolicy?: SagemakerDomainRetentionPolicy;
}
export interface SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#instance_type SagemakerDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
}
export declare function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec): any;
export declare class SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined);
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string;
    private _sagemakerImageArn?;
    get sagemakerImageArn(): string;
    set sagemakerImageArn(value: string);
    resetSagemakerImageArn(): void;
    get sagemakerImageArnInput(): string;
}
export interface SagemakerDomainDefaultUserSettingsJupyterServerAppSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
    /**
    * default_resource_spec block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#default_resource_spec SagemakerDomain#default_resource_spec}
    */
    readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec;
}
export declare function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsJupyterServerAppSettings): any;
export declare class SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerDomainDefaultUserSettingsJupyterServerAppSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings | undefined);
    private _lifecycleConfigArns?;
    get lifecycleConfigArns(): string[];
    set lifecycleConfigArns(value: string[]);
    resetLifecycleConfigArns(): void;
    get lifecycleConfigArnsInput(): string[];
    private _defaultResourceSpec;
    get defaultResourceSpec(): SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference;
    putDefaultResourceSpec(value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec): void;
    resetDefaultResourceSpec(): void;
    get defaultResourceSpecInput(): SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec;
}
export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#app_image_config_name SagemakerDomain#app_image_config_name}
    */
    readonly appImageConfigName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#image_name SagemakerDomain#image_name}
    */
    readonly imageName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#image_version_number SagemakerDomain#image_version_number}
    */
    readonly imageVersionNumber?: number;
}
export declare function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage): any;
export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#instance_type SagemakerDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
}
export declare function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): any;
export declare class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined);
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string;
    private _sagemakerImageArn?;
    get sagemakerImageArn(): string;
    set sagemakerImageArn(value: string);
    resetSagemakerImageArn(): void;
    get sagemakerImageArnInput(): string;
}
export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
    /**
    * custom_image block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#custom_image SagemakerDomain#custom_image}
    */
    readonly customImage?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage[];
    /**
    * default_resource_spec block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#default_resource_spec SagemakerDomain#default_resource_spec}
    */
    readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;
}
export declare function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings): any;
export declare class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings | undefined);
    private _lifecycleConfigArns?;
    get lifecycleConfigArns(): string[];
    set lifecycleConfigArns(value: string[]);
    resetLifecycleConfigArns(): void;
    get lifecycleConfigArnsInput(): string[];
    private _customImage?;
    get customImage(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage[];
    set customImage(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage[]);
    resetCustomImage(): void;
    get customImageInput(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage[];
    private _defaultResourceSpec;
    get defaultResourceSpec(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference;
    putDefaultResourceSpec(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): void;
    resetDefaultResourceSpec(): void;
    get defaultResourceSpecInput(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;
}
export interface SagemakerDomainDefaultUserSettingsSharingSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#notebook_output_option SagemakerDomain#notebook_output_option}
    */
    readonly notebookOutputOption?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#s3_kms_key_id SagemakerDomain#s3_kms_key_id}
    */
    readonly s3KmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#s3_output_path SagemakerDomain#s3_output_path}
    */
    readonly s3OutputPath?: string;
}
export declare function sagemakerDomainDefaultUserSettingsSharingSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference | SagemakerDomainDefaultUserSettingsSharingSettings): any;
export declare class SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerDomainDefaultUserSettingsSharingSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsSharingSettings | undefined);
    private _notebookOutputOption?;
    get notebookOutputOption(): string;
    set notebookOutputOption(value: string);
    resetNotebookOutputOption(): void;
    get notebookOutputOptionInput(): string;
    private _s3KmsKeyId?;
    get s3KmsKeyId(): string;
    set s3KmsKeyId(value: string);
    resetS3KmsKeyId(): void;
    get s3KmsKeyIdInput(): string;
    private _s3OutputPath?;
    get s3OutputPath(): string;
    set s3OutputPath(value: string);
    resetS3OutputPath(): void;
    get s3OutputPathInput(): string;
}
export interface SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#instance_type SagemakerDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
}
export declare function sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec): any;
export declare class SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec | undefined);
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string;
    private _sagemakerImageArn?;
    get sagemakerImageArn(): string;
    set sagemakerImageArn(value: string);
    resetSagemakerImageArn(): void;
    get sagemakerImageArnInput(): string;
}
export interface SagemakerDomainDefaultUserSettingsTensorBoardAppSettings {
    /**
    * default_resource_spec block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#default_resource_spec SagemakerDomain#default_resource_spec}
    */
    readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec;
}
export declare function sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsTensorBoardAppSettings): any;
export declare class SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerDomainDefaultUserSettingsTensorBoardAppSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsTensorBoardAppSettings | undefined);
    private _defaultResourceSpec;
    get defaultResourceSpec(): SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference;
    putDefaultResourceSpec(value: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec): void;
    resetDefaultResourceSpec(): void;
    get defaultResourceSpecInput(): SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec;
}
export interface SagemakerDomainDefaultUserSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#execution_role SagemakerDomain#execution_role}
    */
    readonly executionRole: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#security_groups SagemakerDomain#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * jupyter_server_app_settings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#jupyter_server_app_settings SagemakerDomain#jupyter_server_app_settings}
    */
    readonly jupyterServerAppSettings?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings;
    /**
    * kernel_gateway_app_settings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#kernel_gateway_app_settings SagemakerDomain#kernel_gateway_app_settings}
    */
    readonly kernelGatewayAppSettings?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings;
    /**
    * sharing_settings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#sharing_settings SagemakerDomain#sharing_settings}
    */
    readonly sharingSettings?: SagemakerDomainDefaultUserSettingsSharingSettings;
    /**
    * tensor_board_app_settings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#tensor_board_app_settings SagemakerDomain#tensor_board_app_settings}
    */
    readonly tensorBoardAppSettings?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettings;
}
export declare function sagemakerDomainDefaultUserSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsOutputReference | SagemakerDomainDefaultUserSettings): any;
export declare class SagemakerDomainDefaultUserSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerDomainDefaultUserSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettings | undefined);
    private _executionRole?;
    get executionRole(): string;
    set executionRole(value: string);
    get executionRoleInput(): string;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[];
    private _jupyterServerAppSettings;
    get jupyterServerAppSettings(): SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference;
    putJupyterServerAppSettings(value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings): void;
    resetJupyterServerAppSettings(): void;
    get jupyterServerAppSettingsInput(): SagemakerDomainDefaultUserSettingsJupyterServerAppSettings;
    private _kernelGatewayAppSettings;
    get kernelGatewayAppSettings(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference;
    putKernelGatewayAppSettings(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings): void;
    resetKernelGatewayAppSettings(): void;
    get kernelGatewayAppSettingsInput(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings;
    private _sharingSettings;
    get sharingSettings(): SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference;
    putSharingSettings(value: SagemakerDomainDefaultUserSettingsSharingSettings): void;
    resetSharingSettings(): void;
    get sharingSettingsInput(): SagemakerDomainDefaultUserSettingsSharingSettings;
    private _tensorBoardAppSettings;
    get tensorBoardAppSettings(): SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference;
    putTensorBoardAppSettings(value: SagemakerDomainDefaultUserSettingsTensorBoardAppSettings): void;
    resetTensorBoardAppSettings(): void;
    get tensorBoardAppSettingsInput(): SagemakerDomainDefaultUserSettingsTensorBoardAppSettings;
}
export interface SagemakerDomainRetentionPolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#home_efs_file_system SagemakerDomain#home_efs_file_system}
    */
    readonly homeEfsFileSystem?: string;
}
export declare function sagemakerDomainRetentionPolicyToTerraform(struct?: SagemakerDomainRetentionPolicyOutputReference | SagemakerDomainRetentionPolicy): any;
export declare class SagemakerDomainRetentionPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerDomainRetentionPolicy | undefined;
    set internalValue(value: SagemakerDomainRetentionPolicy | undefined);
    private _homeEfsFileSystem?;
    get homeEfsFileSystem(): string;
    set homeEfsFileSystem(value: string);
    resetHomeEfsFileSystem(): void;
    get homeEfsFileSystemInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html aws_sagemaker_domain}
*/
export declare class SagemakerDomain extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html aws_sagemaker_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerDomainConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerDomainConfig);
    private _appNetworkAccessType?;
    get appNetworkAccessType(): string;
    set appNetworkAccessType(value: string);
    resetAppNetworkAccessType(): void;
    get appNetworkAccessTypeInput(): string;
    get arn(): string;
    private _authMode?;
    get authMode(): string;
    set authMode(value: string);
    get authModeInput(): string;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    get homeEfsFileSystemId(): string;
    get id(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string;
    get singleSignOnManagedApplicationInstanceId(): string;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[];
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
    get url(): string;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    private _defaultUserSettings;
    get defaultUserSettings(): SagemakerDomainDefaultUserSettingsOutputReference;
    putDefaultUserSettings(value: SagemakerDomainDefaultUserSettings): void;
    get defaultUserSettingsInput(): SagemakerDomainDefaultUserSettings;
    private _retentionPolicy;
    get retentionPolicy(): SagemakerDomainRetentionPolicyOutputReference;
    putRetentionPolicy(value: SagemakerDomainRetentionPolicy): void;
    resetRetentionPolicy(): void;
    get retentionPolicyInput(): SagemakerDomainRetentionPolicy;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=sagemaker-domain.d.ts.map