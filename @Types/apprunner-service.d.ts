import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* App Runner
*/
export interface ApprunnerServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#auto_scaling_configuration_arn ApprunnerService#auto_scaling_configuration_arn}
    */
    readonly autoScalingConfigurationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#service_name ApprunnerService#service_name}
    */
    readonly serviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#tags ApprunnerService#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#tags_all ApprunnerService#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * encryption_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#encryption_configuration ApprunnerService#encryption_configuration}
    */
    readonly encryptionConfiguration?: ApprunnerServiceEncryptionConfiguration;
    /**
    * health_check_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#health_check_configuration ApprunnerService#health_check_configuration}
    */
    readonly healthCheckConfiguration?: ApprunnerServiceHealthCheckConfiguration;
    /**
    * instance_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#instance_configuration ApprunnerService#instance_configuration}
    */
    readonly instanceConfiguration?: ApprunnerServiceInstanceConfiguration;
    /**
    * source_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#source_configuration ApprunnerService#source_configuration}
    */
    readonly sourceConfiguration: ApprunnerServiceSourceConfiguration;
}
export interface ApprunnerServiceEncryptionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#kms_key ApprunnerService#kms_key}
    */
    readonly kmsKey: string;
}
export declare function apprunnerServiceEncryptionConfigurationToTerraform(struct?: ApprunnerServiceEncryptionConfigurationOutputReference | ApprunnerServiceEncryptionConfiguration): any;
export declare class ApprunnerServiceEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ApprunnerServiceEncryptionConfiguration | undefined;
    set internalValue(value: ApprunnerServiceEncryptionConfiguration | undefined);
    private _kmsKey?;
    get kmsKey(): string;
    set kmsKey(value: string);
    get kmsKeyInput(): string;
}
export interface ApprunnerServiceHealthCheckConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#healthy_threshold ApprunnerService#healthy_threshold}
    */
    readonly healthyThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#interval ApprunnerService#interval}
    */
    readonly interval?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#path ApprunnerService#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#protocol ApprunnerService#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#timeout ApprunnerService#timeout}
    */
    readonly timeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#unhealthy_threshold ApprunnerService#unhealthy_threshold}
    */
    readonly unhealthyThreshold?: number;
}
export declare function apprunnerServiceHealthCheckConfigurationToTerraform(struct?: ApprunnerServiceHealthCheckConfigurationOutputReference | ApprunnerServiceHealthCheckConfiguration): any;
export declare class ApprunnerServiceHealthCheckConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ApprunnerServiceHealthCheckConfiguration | undefined;
    set internalValue(value: ApprunnerServiceHealthCheckConfiguration | undefined);
    private _healthyThreshold?;
    get healthyThreshold(): number;
    set healthyThreshold(value: number);
    resetHealthyThreshold(): void;
    get healthyThresholdInput(): number;
    private _interval?;
    get interval(): number;
    set interval(value: number);
    resetInterval(): void;
    get intervalInput(): number;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    resetProtocol(): void;
    get protocolInput(): string;
    private _timeout?;
    get timeout(): number;
    set timeout(value: number);
    resetTimeout(): void;
    get timeoutInput(): number;
    private _unhealthyThreshold?;
    get unhealthyThreshold(): number;
    set unhealthyThreshold(value: number);
    resetUnhealthyThreshold(): void;
    get unhealthyThresholdInput(): number;
}
export interface ApprunnerServiceInstanceConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#cpu ApprunnerService#cpu}
    */
    readonly cpu?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#instance_role_arn ApprunnerService#instance_role_arn}
    */
    readonly instanceRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#memory ApprunnerService#memory}
    */
    readonly memory?: string;
}
export declare function apprunnerServiceInstanceConfigurationToTerraform(struct?: ApprunnerServiceInstanceConfigurationOutputReference | ApprunnerServiceInstanceConfiguration): any;
export declare class ApprunnerServiceInstanceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ApprunnerServiceInstanceConfiguration | undefined;
    set internalValue(value: ApprunnerServiceInstanceConfiguration | undefined);
    private _cpu?;
    get cpu(): string;
    set cpu(value: string);
    resetCpu(): void;
    get cpuInput(): string;
    private _instanceRoleArn?;
    get instanceRoleArn(): string;
    set instanceRoleArn(value: string);
    resetInstanceRoleArn(): void;
    get instanceRoleArnInput(): string;
    private _memory?;
    get memory(): string;
    set memory(value: string);
    resetMemory(): void;
    get memoryInput(): string;
}
export interface ApprunnerServiceSourceConfigurationAuthenticationConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#access_role_arn ApprunnerService#access_role_arn}
    */
    readonly accessRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#connection_arn ApprunnerService#connection_arn}
    */
    readonly connectionArn?: string;
}
export declare function apprunnerServiceSourceConfigurationAuthenticationConfigurationToTerraform(struct?: ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference | ApprunnerServiceSourceConfigurationAuthenticationConfiguration): any;
export declare class ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ApprunnerServiceSourceConfigurationAuthenticationConfiguration | undefined;
    set internalValue(value: ApprunnerServiceSourceConfigurationAuthenticationConfiguration | undefined);
    private _accessRoleArn?;
    get accessRoleArn(): string;
    set accessRoleArn(value: string);
    resetAccessRoleArn(): void;
    get accessRoleArnInput(): string;
    private _connectionArn?;
    get connectionArn(): string;
    set connectionArn(value: string);
    resetConnectionArn(): void;
    get connectionArnInput(): string;
}
export interface ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#build_command ApprunnerService#build_command}
    */
    readonly buildCommand?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#port ApprunnerService#port}
    */
    readonly port?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#runtime ApprunnerService#runtime}
    */
    readonly runtime: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#runtime_environment_variables ApprunnerService#runtime_environment_variables}
    */
    readonly runtimeEnvironmentVariables?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#start_command ApprunnerService#start_command}
    */
    readonly startCommand?: string;
}
export declare function apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference | ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues): any;
export declare class ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues | undefined;
    set internalValue(value: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues | undefined);
    private _buildCommand?;
    get buildCommand(): string;
    set buildCommand(value: string);
    resetBuildCommand(): void;
    get buildCommandInput(): string;
    private _port?;
    get port(): string;
    set port(value: string);
    resetPort(): void;
    get portInput(): string;
    private _runtime?;
    get runtime(): string;
    set runtime(value: string);
    get runtimeInput(): string;
    private _runtimeEnvironmentVariables?;
    get runtimeEnvironmentVariables(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set runtimeEnvironmentVariables(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetRuntimeEnvironmentVariables(): void;
    get runtimeEnvironmentVariablesInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _startCommand?;
    get startCommand(): string;
    set startCommand(value: string);
    resetStartCommand(): void;
    get startCommandInput(): string;
}
export interface ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#configuration_source ApprunnerService#configuration_source}
    */
    readonly configurationSource: string;
    /**
    * code_configuration_values block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#code_configuration_values ApprunnerService#code_configuration_values}
    */
    readonly codeConfigurationValues?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues;
}
export declare function apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference | ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration): any;
export declare class ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration | undefined;
    set internalValue(value: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration | undefined);
    private _configurationSource?;
    get configurationSource(): string;
    set configurationSource(value: string);
    get configurationSourceInput(): string;
    private _codeConfigurationValues;
    get codeConfigurationValues(): ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference;
    putCodeConfigurationValues(value: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues): void;
    resetCodeConfigurationValues(): void;
    get codeConfigurationValuesInput(): ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues;
}
export interface ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#type ApprunnerService#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#value ApprunnerService#value}
    */
    readonly value: string;
}
export declare function apprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference | ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion): any;
export declare class ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion | undefined;
    set internalValue(value: ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
}
export interface ApprunnerServiceSourceConfigurationCodeRepository {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#repository_url ApprunnerService#repository_url}
    */
    readonly repositoryUrl: string;
    /**
    * code_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#code_configuration ApprunnerService#code_configuration}
    */
    readonly codeConfiguration?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration;
    /**
    * source_code_version block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#source_code_version ApprunnerService#source_code_version}
    */
    readonly sourceCodeVersion: ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion;
}
export declare function apprunnerServiceSourceConfigurationCodeRepositoryToTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference | ApprunnerServiceSourceConfigurationCodeRepository): any;
export declare class ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ApprunnerServiceSourceConfigurationCodeRepository | undefined;
    set internalValue(value: ApprunnerServiceSourceConfigurationCodeRepository | undefined);
    private _repositoryUrl?;
    get repositoryUrl(): string;
    set repositoryUrl(value: string);
    get repositoryUrlInput(): string;
    private _codeConfiguration;
    get codeConfiguration(): ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference;
    putCodeConfiguration(value: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration): void;
    resetCodeConfiguration(): void;
    get codeConfigurationInput(): ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration;
    private _sourceCodeVersion;
    get sourceCodeVersion(): ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference;
    putSourceCodeVersion(value: ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion): void;
    get sourceCodeVersionInput(): ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion;
}
export interface ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#port ApprunnerService#port}
    */
    readonly port?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#runtime_environment_variables ApprunnerService#runtime_environment_variables}
    */
    readonly runtimeEnvironmentVariables?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#start_command ApprunnerService#start_command}
    */
    readonly startCommand?: string;
}
export declare function apprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToTerraform(struct?: ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference | ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration): any;
export declare class ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration | undefined;
    set internalValue(value: ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration | undefined);
    private _port?;
    get port(): string;
    set port(value: string);
    resetPort(): void;
    get portInput(): string;
    private _runtimeEnvironmentVariables?;
    get runtimeEnvironmentVariables(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set runtimeEnvironmentVariables(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetRuntimeEnvironmentVariables(): void;
    get runtimeEnvironmentVariablesInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _startCommand?;
    get startCommand(): string;
    set startCommand(value: string);
    resetStartCommand(): void;
    get startCommandInput(): string;
}
export interface ApprunnerServiceSourceConfigurationImageRepository {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#image_identifier ApprunnerService#image_identifier}
    */
    readonly imageIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#image_repository_type ApprunnerService#image_repository_type}
    */
    readonly imageRepositoryType: string;
    /**
    * image_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#image_configuration ApprunnerService#image_configuration}
    */
    readonly imageConfiguration?: ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration;
}
export declare function apprunnerServiceSourceConfigurationImageRepositoryToTerraform(struct?: ApprunnerServiceSourceConfigurationImageRepositoryOutputReference | ApprunnerServiceSourceConfigurationImageRepository): any;
export declare class ApprunnerServiceSourceConfigurationImageRepositoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ApprunnerServiceSourceConfigurationImageRepository | undefined;
    set internalValue(value: ApprunnerServiceSourceConfigurationImageRepository | undefined);
    private _imageIdentifier?;
    get imageIdentifier(): string;
    set imageIdentifier(value: string);
    get imageIdentifierInput(): string;
    private _imageRepositoryType?;
    get imageRepositoryType(): string;
    set imageRepositoryType(value: string);
    get imageRepositoryTypeInput(): string;
    private _imageConfiguration;
    get imageConfiguration(): ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference;
    putImageConfiguration(value: ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration): void;
    resetImageConfiguration(): void;
    get imageConfigurationInput(): ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration;
}
export interface ApprunnerServiceSourceConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#auto_deployments_enabled ApprunnerService#auto_deployments_enabled}
    */
    readonly autoDeploymentsEnabled?: boolean | cdktf.IResolvable;
    /**
    * authentication_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#authentication_configuration ApprunnerService#authentication_configuration}
    */
    readonly authenticationConfiguration?: ApprunnerServiceSourceConfigurationAuthenticationConfiguration;
    /**
    * code_repository block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#code_repository ApprunnerService#code_repository}
    */
    readonly codeRepository?: ApprunnerServiceSourceConfigurationCodeRepository;
    /**
    * image_repository block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#image_repository ApprunnerService#image_repository}
    */
    readonly imageRepository?: ApprunnerServiceSourceConfigurationImageRepository;
}
export declare function apprunnerServiceSourceConfigurationToTerraform(struct?: ApprunnerServiceSourceConfigurationOutputReference | ApprunnerServiceSourceConfiguration): any;
export declare class ApprunnerServiceSourceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ApprunnerServiceSourceConfiguration | undefined;
    set internalValue(value: ApprunnerServiceSourceConfiguration | undefined);
    private _autoDeploymentsEnabled?;
    get autoDeploymentsEnabled(): boolean | cdktf.IResolvable;
    set autoDeploymentsEnabled(value: boolean | cdktf.IResolvable);
    resetAutoDeploymentsEnabled(): void;
    get autoDeploymentsEnabledInput(): boolean | cdktf.IResolvable;
    private _authenticationConfiguration;
    get authenticationConfiguration(): ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference;
    putAuthenticationConfiguration(value: ApprunnerServiceSourceConfigurationAuthenticationConfiguration): void;
    resetAuthenticationConfiguration(): void;
    get authenticationConfigurationInput(): ApprunnerServiceSourceConfigurationAuthenticationConfiguration;
    private _codeRepository;
    get codeRepository(): ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference;
    putCodeRepository(value: ApprunnerServiceSourceConfigurationCodeRepository): void;
    resetCodeRepository(): void;
    get codeRepositoryInput(): ApprunnerServiceSourceConfigurationCodeRepository;
    private _imageRepository;
    get imageRepository(): ApprunnerServiceSourceConfigurationImageRepositoryOutputReference;
    putImageRepository(value: ApprunnerServiceSourceConfigurationImageRepository): void;
    resetImageRepository(): void;
    get imageRepositoryInput(): ApprunnerServiceSourceConfigurationImageRepository;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html aws_apprunner_service}
*/
export declare class ApprunnerService extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html aws_apprunner_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApprunnerServiceConfig
    */
    constructor(scope: Construct, id: string, config: ApprunnerServiceConfig);
    get arn(): string;
    private _autoScalingConfigurationArn?;
    get autoScalingConfigurationArn(): string;
    set autoScalingConfigurationArn(value: string);
    resetAutoScalingConfigurationArn(): void;
    get autoScalingConfigurationArnInput(): string;
    get id(): string;
    get serviceId(): string;
    private _serviceName?;
    get serviceName(): string;
    set serviceName(value: string);
    get serviceNameInput(): string;
    get serviceUrl(): string;
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
    private _encryptionConfiguration;
    get encryptionConfiguration(): ApprunnerServiceEncryptionConfigurationOutputReference;
    putEncryptionConfiguration(value: ApprunnerServiceEncryptionConfiguration): void;
    resetEncryptionConfiguration(): void;
    get encryptionConfigurationInput(): ApprunnerServiceEncryptionConfiguration;
    private _healthCheckConfiguration;
    get healthCheckConfiguration(): ApprunnerServiceHealthCheckConfigurationOutputReference;
    putHealthCheckConfiguration(value: ApprunnerServiceHealthCheckConfiguration): void;
    resetHealthCheckConfiguration(): void;
    get healthCheckConfigurationInput(): ApprunnerServiceHealthCheckConfiguration;
    private _instanceConfiguration;
    get instanceConfiguration(): ApprunnerServiceInstanceConfigurationOutputReference;
    putInstanceConfiguration(value: ApprunnerServiceInstanceConfiguration): void;
    resetInstanceConfiguration(): void;
    get instanceConfigurationInput(): ApprunnerServiceInstanceConfiguration;
    private _sourceConfiguration;
    get sourceConfiguration(): ApprunnerServiceSourceConfigurationOutputReference;
    putSourceConfiguration(value: ApprunnerServiceSourceConfiguration): void;
    get sourceConfigurationInput(): ApprunnerServiceSourceConfiguration;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=apprunner-service.d.ts.map