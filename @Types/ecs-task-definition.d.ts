import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2 Container Service
*/
export interface EcsTaskDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#container_definitions EcsTaskDefinition#container_definitions}
    */
    readonly containerDefinitions: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#cpu EcsTaskDefinition#cpu}
    */
    readonly cpu?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#execution_role_arn EcsTaskDefinition#execution_role_arn}
    */
    readonly executionRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#family EcsTaskDefinition#family}
    */
    readonly family: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#ipc_mode EcsTaskDefinition#ipc_mode}
    */
    readonly ipcMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#memory EcsTaskDefinition#memory}
    */
    readonly memory?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#network_mode EcsTaskDefinition#network_mode}
    */
    readonly networkMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#pid_mode EcsTaskDefinition#pid_mode}
    */
    readonly pidMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#requires_compatibilities EcsTaskDefinition#requires_compatibilities}
    */
    readonly requiresCompatibilities?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#tags EcsTaskDefinition#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#tags_all EcsTaskDefinition#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#task_role_arn EcsTaskDefinition#task_role_arn}
    */
    readonly taskRoleArn?: string;
    /**
    * ephemeral_storage block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#ephemeral_storage EcsTaskDefinition#ephemeral_storage}
    */
    readonly ephemeralStorage?: EcsTaskDefinitionEphemeralStorage;
    /**
    * inference_accelerator block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#inference_accelerator EcsTaskDefinition#inference_accelerator}
    */
    readonly inferenceAccelerator?: EcsTaskDefinitionInferenceAccelerator[];
    /**
    * placement_constraints block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#placement_constraints EcsTaskDefinition#placement_constraints}
    */
    readonly placementConstraints?: EcsTaskDefinitionPlacementConstraints[];
    /**
    * proxy_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#proxy_configuration EcsTaskDefinition#proxy_configuration}
    */
    readonly proxyConfiguration?: EcsTaskDefinitionProxyConfiguration;
    /**
    * runtime_platform block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#runtime_platform EcsTaskDefinition#runtime_platform}
    */
    readonly runtimePlatform?: EcsTaskDefinitionRuntimePlatform;
    /**
    * volume block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#volume EcsTaskDefinition#volume}
    */
    readonly volume?: EcsTaskDefinitionVolume[];
}
export interface EcsTaskDefinitionEphemeralStorage {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#size_in_gib EcsTaskDefinition#size_in_gib}
    */
    readonly sizeInGib: number;
}
export declare function ecsTaskDefinitionEphemeralStorageToTerraform(struct?: EcsTaskDefinitionEphemeralStorageOutputReference | EcsTaskDefinitionEphemeralStorage): any;
export declare class EcsTaskDefinitionEphemeralStorageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EcsTaskDefinitionEphemeralStorage | undefined;
    set internalValue(value: EcsTaskDefinitionEphemeralStorage | undefined);
    private _sizeInGib?;
    get sizeInGib(): number;
    set sizeInGib(value: number);
    get sizeInGibInput(): number;
}
export interface EcsTaskDefinitionInferenceAccelerator {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#device_name EcsTaskDefinition#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#device_type EcsTaskDefinition#device_type}
    */
    readonly deviceType: string;
}
export declare function ecsTaskDefinitionInferenceAcceleratorToTerraform(struct?: EcsTaskDefinitionInferenceAccelerator): any;
export interface EcsTaskDefinitionPlacementConstraints {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#expression EcsTaskDefinition#expression}
    */
    readonly expression?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#type EcsTaskDefinition#type}
    */
    readonly type: string;
}
export declare function ecsTaskDefinitionPlacementConstraintsToTerraform(struct?: EcsTaskDefinitionPlacementConstraints): any;
export interface EcsTaskDefinitionProxyConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#container_name EcsTaskDefinition#container_name}
    */
    readonly containerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#properties EcsTaskDefinition#properties}
    */
    readonly properties?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#type EcsTaskDefinition#type}
    */
    readonly type?: string;
}
export declare function ecsTaskDefinitionProxyConfigurationToTerraform(struct?: EcsTaskDefinitionProxyConfigurationOutputReference | EcsTaskDefinitionProxyConfiguration): any;
export declare class EcsTaskDefinitionProxyConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EcsTaskDefinitionProxyConfiguration | undefined;
    set internalValue(value: EcsTaskDefinitionProxyConfiguration | undefined);
    private _containerName?;
    get containerName(): string;
    set containerName(value: string);
    get containerNameInput(): string;
    private _properties?;
    get properties(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set properties(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetProperties(): void;
    get propertiesInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
}
export interface EcsTaskDefinitionRuntimePlatform {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#cpu_architecture EcsTaskDefinition#cpu_architecture}
    */
    readonly cpuArchitecture?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#operating_system_family EcsTaskDefinition#operating_system_family}
    */
    readonly operatingSystemFamily?: string;
}
export declare function ecsTaskDefinitionRuntimePlatformToTerraform(struct?: EcsTaskDefinitionRuntimePlatformOutputReference | EcsTaskDefinitionRuntimePlatform): any;
export declare class EcsTaskDefinitionRuntimePlatformOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EcsTaskDefinitionRuntimePlatform | undefined;
    set internalValue(value: EcsTaskDefinitionRuntimePlatform | undefined);
    private _cpuArchitecture?;
    get cpuArchitecture(): string;
    set cpuArchitecture(value: string);
    resetCpuArchitecture(): void;
    get cpuArchitectureInput(): string;
    private _operatingSystemFamily?;
    get operatingSystemFamily(): string;
    set operatingSystemFamily(value: string);
    resetOperatingSystemFamily(): void;
    get operatingSystemFamilyInput(): string;
}
export interface EcsTaskDefinitionVolumeDockerVolumeConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#autoprovision EcsTaskDefinition#autoprovision}
    */
    readonly autoprovision?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#driver EcsTaskDefinition#driver}
    */
    readonly driver?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#driver_opts EcsTaskDefinition#driver_opts}
    */
    readonly driverOpts?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#labels EcsTaskDefinition#labels}
    */
    readonly labels?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#scope EcsTaskDefinition#scope}
    */
    readonly scope?: string;
}
export declare function ecsTaskDefinitionVolumeDockerVolumeConfigurationToTerraform(struct?: EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference | EcsTaskDefinitionVolumeDockerVolumeConfiguration): any;
export declare class EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EcsTaskDefinitionVolumeDockerVolumeConfiguration | undefined;
    set internalValue(value: EcsTaskDefinitionVolumeDockerVolumeConfiguration | undefined);
    private _autoprovision?;
    get autoprovision(): boolean | cdktf.IResolvable;
    set autoprovision(value: boolean | cdktf.IResolvable);
    resetAutoprovision(): void;
    get autoprovisionInput(): boolean | cdktf.IResolvable;
    private _driver?;
    get driver(): string;
    set driver(value: string);
    resetDriver(): void;
    get driverInput(): string;
    private _driverOpts?;
    get driverOpts(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set driverOpts(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetDriverOpts(): void;
    get driverOptsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _labels?;
    get labels(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set labels(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetLabels(): void;
    get labelsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _scope?;
    get scope(): string;
    set scope(value: string);
    resetScope(): void;
    get scopeInput(): string;
}
export interface EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#access_point_id EcsTaskDefinition#access_point_id}
    */
    readonly accessPointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#iam EcsTaskDefinition#iam}
    */
    readonly iam?: string;
}
export declare function ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToTerraform(struct?: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference | EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig): any;
export declare class EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig | undefined;
    set internalValue(value: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig | undefined);
    private _accessPointId?;
    get accessPointId(): string;
    set accessPointId(value: string);
    resetAccessPointId(): void;
    get accessPointIdInput(): string;
    private _iam?;
    get iam(): string;
    set iam(value: string);
    resetIam(): void;
    get iamInput(): string;
}
export interface EcsTaskDefinitionVolumeEfsVolumeConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#file_system_id EcsTaskDefinition#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#root_directory EcsTaskDefinition#root_directory}
    */
    readonly rootDirectory?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#transit_encryption EcsTaskDefinition#transit_encryption}
    */
    readonly transitEncryption?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#transit_encryption_port EcsTaskDefinition#transit_encryption_port}
    */
    readonly transitEncryptionPort?: number;
    /**
    * authorization_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#authorization_config EcsTaskDefinition#authorization_config}
    */
    readonly authorizationConfig?: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig;
}
export declare function ecsTaskDefinitionVolumeEfsVolumeConfigurationToTerraform(struct?: EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference | EcsTaskDefinitionVolumeEfsVolumeConfiguration): any;
export declare class EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EcsTaskDefinitionVolumeEfsVolumeConfiguration | undefined;
    set internalValue(value: EcsTaskDefinitionVolumeEfsVolumeConfiguration | undefined);
    private _fileSystemId?;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    get fileSystemIdInput(): string;
    private _rootDirectory?;
    get rootDirectory(): string;
    set rootDirectory(value: string);
    resetRootDirectory(): void;
    get rootDirectoryInput(): string;
    private _transitEncryption?;
    get transitEncryption(): string;
    set transitEncryption(value: string);
    resetTransitEncryption(): void;
    get transitEncryptionInput(): string;
    private _transitEncryptionPort?;
    get transitEncryptionPort(): number;
    set transitEncryptionPort(value: number);
    resetTransitEncryptionPort(): void;
    get transitEncryptionPortInput(): number;
    private _authorizationConfig;
    get authorizationConfig(): EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference;
    putAuthorizationConfig(value: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig): void;
    resetAuthorizationConfig(): void;
    get authorizationConfigInput(): EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig;
}
export interface EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#credentials_parameter EcsTaskDefinition#credentials_parameter}
    */
    readonly credentialsParameter: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#domain EcsTaskDefinition#domain}
    */
    readonly domain: string;
}
export declare function ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToTerraform(struct?: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference | EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig): any;
export declare class EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig | undefined;
    set internalValue(value: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig | undefined);
    private _credentialsParameter?;
    get credentialsParameter(): string;
    set credentialsParameter(value: string);
    get credentialsParameterInput(): string;
    private _domain?;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string;
}
export interface EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#file_system_id EcsTaskDefinition#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#root_directory EcsTaskDefinition#root_directory}
    */
    readonly rootDirectory: string;
    /**
    * authorization_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#authorization_config EcsTaskDefinition#authorization_config}
    */
    readonly authorizationConfig: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig;
}
export declare function ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToTerraform(struct?: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference | EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration): any;
export declare class EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration | undefined;
    set internalValue(value: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration | undefined);
    private _fileSystemId?;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    get fileSystemIdInput(): string;
    private _rootDirectory?;
    get rootDirectory(): string;
    set rootDirectory(value: string);
    get rootDirectoryInput(): string;
    private _authorizationConfig;
    get authorizationConfig(): EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference;
    putAuthorizationConfig(value: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig): void;
    get authorizationConfigInput(): EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig;
}
export interface EcsTaskDefinitionVolume {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#host_path EcsTaskDefinition#host_path}
    */
    readonly hostPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#name EcsTaskDefinition#name}
    */
    readonly name: string;
    /**
    * docker_volume_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#docker_volume_configuration EcsTaskDefinition#docker_volume_configuration}
    */
    readonly dockerVolumeConfiguration?: EcsTaskDefinitionVolumeDockerVolumeConfiguration;
    /**
    * efs_volume_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#efs_volume_configuration EcsTaskDefinition#efs_volume_configuration}
    */
    readonly efsVolumeConfiguration?: EcsTaskDefinitionVolumeEfsVolumeConfiguration;
    /**
    * fsx_windows_file_server_volume_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#fsx_windows_file_server_volume_configuration EcsTaskDefinition#fsx_windows_file_server_volume_configuration}
    */
    readonly fsxWindowsFileServerVolumeConfiguration?: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration;
}
export declare function ecsTaskDefinitionVolumeToTerraform(struct?: EcsTaskDefinitionVolume): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html aws_ecs_task_definition}
*/
export declare class EcsTaskDefinition extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html aws_ecs_task_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsTaskDefinitionConfig
    */
    constructor(scope: Construct, id: string, config: EcsTaskDefinitionConfig);
    get arn(): string;
    private _containerDefinitions?;
    get containerDefinitions(): string;
    set containerDefinitions(value: string);
    get containerDefinitionsInput(): string;
    private _cpu?;
    get cpu(): string;
    set cpu(value: string);
    resetCpu(): void;
    get cpuInput(): string;
    private _executionRoleArn?;
    get executionRoleArn(): string;
    set executionRoleArn(value: string);
    resetExecutionRoleArn(): void;
    get executionRoleArnInput(): string;
    private _family?;
    get family(): string;
    set family(value: string);
    get familyInput(): string;
    get id(): string;
    private _ipcMode?;
    get ipcMode(): string;
    set ipcMode(value: string);
    resetIpcMode(): void;
    get ipcModeInput(): string;
    private _memory?;
    get memory(): string;
    set memory(value: string);
    resetMemory(): void;
    get memoryInput(): string;
    private _networkMode?;
    get networkMode(): string;
    set networkMode(value: string);
    resetNetworkMode(): void;
    get networkModeInput(): string;
    private _pidMode?;
    get pidMode(): string;
    set pidMode(value: string);
    resetPidMode(): void;
    get pidModeInput(): string;
    private _requiresCompatibilities?;
    get requiresCompatibilities(): string[];
    set requiresCompatibilities(value: string[]);
    resetRequiresCompatibilities(): void;
    get requiresCompatibilitiesInput(): string[];
    get revision(): number;
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
    private _taskRoleArn?;
    get taskRoleArn(): string;
    set taskRoleArn(value: string);
    resetTaskRoleArn(): void;
    get taskRoleArnInput(): string;
    private _ephemeralStorage;
    get ephemeralStorage(): EcsTaskDefinitionEphemeralStorageOutputReference;
    putEphemeralStorage(value: EcsTaskDefinitionEphemeralStorage): void;
    resetEphemeralStorage(): void;
    get ephemeralStorageInput(): EcsTaskDefinitionEphemeralStorage;
    private _inferenceAccelerator?;
    get inferenceAccelerator(): EcsTaskDefinitionInferenceAccelerator[];
    set inferenceAccelerator(value: EcsTaskDefinitionInferenceAccelerator[]);
    resetInferenceAccelerator(): void;
    get inferenceAcceleratorInput(): EcsTaskDefinitionInferenceAccelerator[];
    private _placementConstraints?;
    get placementConstraints(): EcsTaskDefinitionPlacementConstraints[];
    set placementConstraints(value: EcsTaskDefinitionPlacementConstraints[]);
    resetPlacementConstraints(): void;
    get placementConstraintsInput(): EcsTaskDefinitionPlacementConstraints[];
    private _proxyConfiguration;
    get proxyConfiguration(): EcsTaskDefinitionProxyConfigurationOutputReference;
    putProxyConfiguration(value: EcsTaskDefinitionProxyConfiguration): void;
    resetProxyConfiguration(): void;
    get proxyConfigurationInput(): EcsTaskDefinitionProxyConfiguration;
    private _runtimePlatform;
    get runtimePlatform(): EcsTaskDefinitionRuntimePlatformOutputReference;
    putRuntimePlatform(value: EcsTaskDefinitionRuntimePlatform): void;
    resetRuntimePlatform(): void;
    get runtimePlatformInput(): EcsTaskDefinitionRuntimePlatform;
    private _volume?;
    get volume(): EcsTaskDefinitionVolume[];
    set volume(value: EcsTaskDefinitionVolume[]);
    resetVolume(): void;
    get volumeInput(): EcsTaskDefinitionVolume[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ecs-task-definition.d.ts.map