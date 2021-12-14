import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS SageMaker
*/
export interface SagemakerAppImageConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#app_image_config_name SagemakerAppImageConfig#app_image_config_name}
    */
    readonly appImageConfigName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#tags SagemakerAppImageConfig#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#tags_all SagemakerAppImageConfig#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * kernel_gateway_image_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#kernel_gateway_image_config SagemakerAppImageConfig#kernel_gateway_image_config}
    */
    readonly kernelGatewayImageConfig?: SagemakerAppImageConfigKernelGatewayImageConfig;
}
export interface SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#default_gid SagemakerAppImageConfig#default_gid}
    */
    readonly defaultGid?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#default_uid SagemakerAppImageConfig#default_uid}
    */
    readonly defaultUid?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#mount_path SagemakerAppImageConfig#mount_path}
    */
    readonly mountPath?: string;
}
export declare function sagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigToTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference | SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig): any;
export declare class SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig | undefined;
    set internalValue(value: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig | undefined);
    private _defaultGid?;
    get defaultGid(): number;
    set defaultGid(value: number);
    resetDefaultGid(): void;
    get defaultGidInput(): number;
    private _defaultUid?;
    get defaultUid(): number;
    set defaultUid(value: number);
    resetDefaultUid(): void;
    get defaultUidInput(): number;
    private _mountPath?;
    get mountPath(): string;
    set mountPath(value: string);
    resetMountPath(): void;
    get mountPathInput(): string;
}
export interface SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#display_name SagemakerAppImageConfig#display_name}
    */
    readonly displayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#name SagemakerAppImageConfig#name}
    */
    readonly name: string;
}
export declare function sagemakerAppImageConfigKernelGatewayImageConfigKernelSpecToTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference | SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec): any;
export declare class SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec | undefined;
    set internalValue(value: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec | undefined);
    private _displayName?;
    get displayName(): string;
    set displayName(value: string);
    resetDisplayName(): void;
    get displayNameInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface SagemakerAppImageConfigKernelGatewayImageConfig {
    /**
    * file_system_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#file_system_config SagemakerAppImageConfig#file_system_config}
    */
    readonly fileSystemConfig?: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig;
    /**
    * kernel_spec block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#kernel_spec SagemakerAppImageConfig#kernel_spec}
    */
    readonly kernelSpec: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec;
}
export declare function sagemakerAppImageConfigKernelGatewayImageConfigToTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigOutputReference | SagemakerAppImageConfigKernelGatewayImageConfig): any;
export declare class SagemakerAppImageConfigKernelGatewayImageConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerAppImageConfigKernelGatewayImageConfig | undefined;
    set internalValue(value: SagemakerAppImageConfigKernelGatewayImageConfig | undefined);
    private _fileSystemConfig;
    get fileSystemConfig(): SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference;
    putFileSystemConfig(value: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig): void;
    resetFileSystemConfig(): void;
    get fileSystemConfigInput(): SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig;
    private _kernelSpec;
    get kernelSpec(): SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference;
    putKernelSpec(value: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec): void;
    get kernelSpecInput(): SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html aws_sagemaker_app_image_config}
*/
export declare class SagemakerAppImageConfig extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html aws_sagemaker_app_image_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerAppImageConfigConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerAppImageConfigConfig);
    private _appImageConfigName?;
    get appImageConfigName(): string;
    set appImageConfigName(value: string);
    get appImageConfigNameInput(): string;
    get arn(): string;
    get id(): string;
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
    private _kernelGatewayImageConfig;
    get kernelGatewayImageConfig(): SagemakerAppImageConfigKernelGatewayImageConfigOutputReference;
    putKernelGatewayImageConfig(value: SagemakerAppImageConfigKernelGatewayImageConfig): void;
    resetKernelGatewayImageConfig(): void;
    get kernelGatewayImageConfigInput(): SagemakerAppImageConfigKernelGatewayImageConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=sagemaker-app-image-config.d.ts.map