import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS SageMaker
*/
export interface SagemakerUserProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#domain_id SagemakerUserProfile#domain_id}
    */
    readonly domainId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#single_sign_on_user_identifier SagemakerUserProfile#single_sign_on_user_identifier}
    */
    readonly singleSignOnUserIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#single_sign_on_user_value SagemakerUserProfile#single_sign_on_user_value}
    */
    readonly singleSignOnUserValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#tags SagemakerUserProfile#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#tags_all SagemakerUserProfile#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#user_profile_name SagemakerUserProfile#user_profile_name}
    */
    readonly userProfileName: string;
    /**
    * user_settings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#user_settings SagemakerUserProfile#user_settings}
    */
    readonly userSettings?: SagemakerUserProfileUserSettings;
}
export interface SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#instance_type SagemakerUserProfile#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
}
export declare function sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec): any;
export declare class SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined);
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
export interface SagemakerUserProfileUserSettingsJupyterServerAppSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
    /**
    * default_resource_spec block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#default_resource_spec SagemakerUserProfile#default_resource_spec}
    */
    readonly defaultResourceSpec: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec;
}
export declare function sagemakerUserProfileUserSettingsJupyterServerAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference | SagemakerUserProfileUserSettingsJupyterServerAppSettings): any;
export declare class SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerUserProfileUserSettingsJupyterServerAppSettings | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsJupyterServerAppSettings | undefined);
    private _lifecycleConfigArns?;
    get lifecycleConfigArns(): string[];
    set lifecycleConfigArns(value: string[]);
    resetLifecycleConfigArns(): void;
    get lifecycleConfigArnsInput(): string[];
    private _defaultResourceSpec;
    get defaultResourceSpec(): SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference;
    putDefaultResourceSpec(value: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec): void;
    get defaultResourceSpecInput(): SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec;
}
export interface SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#app_image_config_name SagemakerUserProfile#app_image_config_name}
    */
    readonly appImageConfigName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#image_name SagemakerUserProfile#image_name}
    */
    readonly imageName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#image_version_number SagemakerUserProfile#image_version_number}
    */
    readonly imageVersionNumber?: number;
}
export declare function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageToTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage): any;
export interface SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#instance_type SagemakerUserProfile#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
}
export declare function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): any;
export declare class SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined);
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
export interface SagemakerUserProfileUserSettingsKernelGatewayAppSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
    /**
    * custom_image block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#custom_image SagemakerUserProfile#custom_image}
    */
    readonly customImage?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage[];
    /**
    * default_resource_spec block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#default_resource_spec SagemakerUserProfile#default_resource_spec}
    */
    readonly defaultResourceSpec: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;
}
export declare function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference | SagemakerUserProfileUserSettingsKernelGatewayAppSettings): any;
export declare class SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerUserProfileUserSettingsKernelGatewayAppSettings | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettings | undefined);
    private _lifecycleConfigArns?;
    get lifecycleConfigArns(): string[];
    set lifecycleConfigArns(value: string[]);
    resetLifecycleConfigArns(): void;
    get lifecycleConfigArnsInput(): string[];
    private _customImage?;
    get customImage(): SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage[];
    set customImage(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage[]);
    resetCustomImage(): void;
    get customImageInput(): SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage[];
    private _defaultResourceSpec;
    get defaultResourceSpec(): SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference;
    putDefaultResourceSpec(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): void;
    get defaultResourceSpecInput(): SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;
}
export interface SagemakerUserProfileUserSettingsSharingSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#notebook_output_option SagemakerUserProfile#notebook_output_option}
    */
    readonly notebookOutputOption?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#s3_kms_key_id SagemakerUserProfile#s3_kms_key_id}
    */
    readonly s3KmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#s3_output_path SagemakerUserProfile#s3_output_path}
    */
    readonly s3OutputPath?: string;
}
export declare function sagemakerUserProfileUserSettingsSharingSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsSharingSettingsOutputReference | SagemakerUserProfileUserSettingsSharingSettings): any;
export declare class SagemakerUserProfileUserSettingsSharingSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerUserProfileUserSettingsSharingSettings | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsSharingSettings | undefined);
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
export interface SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#instance_type SagemakerUserProfile#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
}
export declare function sagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec): any;
export declare class SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec | undefined);
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
export interface SagemakerUserProfileUserSettingsTensorBoardAppSettings {
    /**
    * default_resource_spec block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#default_resource_spec SagemakerUserProfile#default_resource_spec}
    */
    readonly defaultResourceSpec: SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec;
}
export declare function sagemakerUserProfileUserSettingsTensorBoardAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference | SagemakerUserProfileUserSettingsTensorBoardAppSettings): any;
export declare class SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerUserProfileUserSettingsTensorBoardAppSettings | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsTensorBoardAppSettings | undefined);
    private _defaultResourceSpec;
    get defaultResourceSpec(): SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference;
    putDefaultResourceSpec(value: SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec): void;
    get defaultResourceSpecInput(): SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec;
}
export interface SagemakerUserProfileUserSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#execution_role SagemakerUserProfile#execution_role}
    */
    readonly executionRole: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#security_groups SagemakerUserProfile#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * jupyter_server_app_settings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#jupyter_server_app_settings SagemakerUserProfile#jupyter_server_app_settings}
    */
    readonly jupyterServerAppSettings?: SagemakerUserProfileUserSettingsJupyterServerAppSettings;
    /**
    * kernel_gateway_app_settings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#kernel_gateway_app_settings SagemakerUserProfile#kernel_gateway_app_settings}
    */
    readonly kernelGatewayAppSettings?: SagemakerUserProfileUserSettingsKernelGatewayAppSettings;
    /**
    * sharing_settings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#sharing_settings SagemakerUserProfile#sharing_settings}
    */
    readonly sharingSettings?: SagemakerUserProfileUserSettingsSharingSettings;
    /**
    * tensor_board_app_settings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#tensor_board_app_settings SagemakerUserProfile#tensor_board_app_settings}
    */
    readonly tensorBoardAppSettings?: SagemakerUserProfileUserSettingsTensorBoardAppSettings;
}
export declare function sagemakerUserProfileUserSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsOutputReference | SagemakerUserProfileUserSettings): any;
export declare class SagemakerUserProfileUserSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerUserProfileUserSettings | undefined;
    set internalValue(value: SagemakerUserProfileUserSettings | undefined);
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
    get jupyterServerAppSettings(): SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference;
    putJupyterServerAppSettings(value: SagemakerUserProfileUserSettingsJupyterServerAppSettings): void;
    resetJupyterServerAppSettings(): void;
    get jupyterServerAppSettingsInput(): SagemakerUserProfileUserSettingsJupyterServerAppSettings;
    private _kernelGatewayAppSettings;
    get kernelGatewayAppSettings(): SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference;
    putKernelGatewayAppSettings(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettings): void;
    resetKernelGatewayAppSettings(): void;
    get kernelGatewayAppSettingsInput(): SagemakerUserProfileUserSettingsKernelGatewayAppSettings;
    private _sharingSettings;
    get sharingSettings(): SagemakerUserProfileUserSettingsSharingSettingsOutputReference;
    putSharingSettings(value: SagemakerUserProfileUserSettingsSharingSettings): void;
    resetSharingSettings(): void;
    get sharingSettingsInput(): SagemakerUserProfileUserSettingsSharingSettings;
    private _tensorBoardAppSettings;
    get tensorBoardAppSettings(): SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference;
    putTensorBoardAppSettings(value: SagemakerUserProfileUserSettingsTensorBoardAppSettings): void;
    resetTensorBoardAppSettings(): void;
    get tensorBoardAppSettingsInput(): SagemakerUserProfileUserSettingsTensorBoardAppSettings;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html aws_sagemaker_user_profile}
*/
export declare class SagemakerUserProfile extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html aws_sagemaker_user_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerUserProfileConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerUserProfileConfig);
    get arn(): string;
    private _domainId?;
    get domainId(): string;
    set domainId(value: string);
    get domainIdInput(): string;
    get homeEfsFileSystemUid(): string;
    get id(): string;
    private _singleSignOnUserIdentifier?;
    get singleSignOnUserIdentifier(): string;
    set singleSignOnUserIdentifier(value: string);
    resetSingleSignOnUserIdentifier(): void;
    get singleSignOnUserIdentifierInput(): string;
    private _singleSignOnUserValue?;
    get singleSignOnUserValue(): string;
    set singleSignOnUserValue(value: string);
    resetSingleSignOnUserValue(): void;
    get singleSignOnUserValueInput(): string;
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
    private _userProfileName?;
    get userProfileName(): string;
    set userProfileName(value: string);
    get userProfileNameInput(): string;
    private _userSettings;
    get userSettings(): SagemakerUserProfileUserSettingsOutputReference;
    putUserSettings(value: SagemakerUserProfileUserSettings): void;
    resetUserSettings(): void;
    get userSettingsInput(): SagemakerUserProfileUserSettings;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=sagemaker-user-profile.d.ts.map