import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2 Container Service
*/
export interface EcsClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#capacity_providers EcsCluster#capacity_providers}
    */
    readonly capacityProviders?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#name EcsCluster#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#tags EcsCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#tags_all EcsCluster#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#configuration EcsCluster#configuration}
    */
    readonly configuration?: EcsClusterConfiguration;
    /**
    * default_capacity_provider_strategy block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#default_capacity_provider_strategy EcsCluster#default_capacity_provider_strategy}
    */
    readonly defaultCapacityProviderStrategy?: EcsClusterDefaultCapacityProviderStrategy[];
    /**
    * setting block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#setting EcsCluster#setting}
    */
    readonly setting?: EcsClusterSetting[];
}
export interface EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#cloud_watch_encryption_enabled EcsCluster#cloud_watch_encryption_enabled}
    */
    readonly cloudWatchEncryptionEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#cloud_watch_log_group_name EcsCluster#cloud_watch_log_group_name}
    */
    readonly cloudWatchLogGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#s3_bucket_encryption_enabled EcsCluster#s3_bucket_encryption_enabled}
    */
    readonly s3BucketEncryptionEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#s3_bucket_name EcsCluster#s3_bucket_name}
    */
    readonly s3BucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#s3_key_prefix EcsCluster#s3_key_prefix}
    */
    readonly s3KeyPrefix?: string;
}
export declare function ecsClusterConfigurationExecuteCommandConfigurationLogConfigurationToTerraform(struct?: EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference | EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration): any;
export declare class EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration | undefined;
    set internalValue(value: EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration | undefined);
    private _cloudWatchEncryptionEnabled?;
    get cloudWatchEncryptionEnabled(): boolean | cdktf.IResolvable;
    set cloudWatchEncryptionEnabled(value: boolean | cdktf.IResolvable);
    resetCloudWatchEncryptionEnabled(): void;
    get cloudWatchEncryptionEnabledInput(): boolean | cdktf.IResolvable;
    private _cloudWatchLogGroupName?;
    get cloudWatchLogGroupName(): string;
    set cloudWatchLogGroupName(value: string);
    resetCloudWatchLogGroupName(): void;
    get cloudWatchLogGroupNameInput(): string;
    private _s3BucketEncryptionEnabled?;
    get s3BucketEncryptionEnabled(): boolean | cdktf.IResolvable;
    set s3BucketEncryptionEnabled(value: boolean | cdktf.IResolvable);
    resetS3BucketEncryptionEnabled(): void;
    get s3BucketEncryptionEnabledInput(): boolean | cdktf.IResolvable;
    private _s3BucketName?;
    get s3BucketName(): string;
    set s3BucketName(value: string);
    resetS3BucketName(): void;
    get s3BucketNameInput(): string;
    private _s3KeyPrefix?;
    get s3KeyPrefix(): string;
    set s3KeyPrefix(value: string);
    resetS3KeyPrefix(): void;
    get s3KeyPrefixInput(): string;
}
export interface EcsClusterConfigurationExecuteCommandConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#kms_key_id EcsCluster#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#logging EcsCluster#logging}
    */
    readonly logging?: string;
    /**
    * log_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#log_configuration EcsCluster#log_configuration}
    */
    readonly logConfiguration?: EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration;
}
export declare function ecsClusterConfigurationExecuteCommandConfigurationToTerraform(struct?: EcsClusterConfigurationExecuteCommandConfigurationOutputReference | EcsClusterConfigurationExecuteCommandConfiguration): any;
export declare class EcsClusterConfigurationExecuteCommandConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EcsClusterConfigurationExecuteCommandConfiguration | undefined;
    set internalValue(value: EcsClusterConfigurationExecuteCommandConfiguration | undefined);
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string;
    private _logging?;
    get logging(): string;
    set logging(value: string);
    resetLogging(): void;
    get loggingInput(): string;
    private _logConfiguration;
    get logConfiguration(): EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference;
    putLogConfiguration(value: EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration): void;
    resetLogConfiguration(): void;
    get logConfigurationInput(): EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration;
}
export interface EcsClusterConfiguration {
    /**
    * execute_command_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#execute_command_configuration EcsCluster#execute_command_configuration}
    */
    readonly executeCommandConfiguration?: EcsClusterConfigurationExecuteCommandConfiguration;
}
export declare function ecsClusterConfigurationToTerraform(struct?: EcsClusterConfigurationOutputReference | EcsClusterConfiguration): any;
export declare class EcsClusterConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EcsClusterConfiguration | undefined;
    set internalValue(value: EcsClusterConfiguration | undefined);
    private _executeCommandConfiguration;
    get executeCommandConfiguration(): EcsClusterConfigurationExecuteCommandConfigurationOutputReference;
    putExecuteCommandConfiguration(value: EcsClusterConfigurationExecuteCommandConfiguration): void;
    resetExecuteCommandConfiguration(): void;
    get executeCommandConfigurationInput(): EcsClusterConfigurationExecuteCommandConfiguration;
}
export interface EcsClusterDefaultCapacityProviderStrategy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#base EcsCluster#base}
    */
    readonly base?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#capacity_provider EcsCluster#capacity_provider}
    */
    readonly capacityProvider: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#weight EcsCluster#weight}
    */
    readonly weight?: number;
}
export declare function ecsClusterDefaultCapacityProviderStrategyToTerraform(struct?: EcsClusterDefaultCapacityProviderStrategy): any;
export interface EcsClusterSetting {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#name EcsCluster#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#value EcsCluster#value}
    */
    readonly value: string;
}
export declare function ecsClusterSettingToTerraform(struct?: EcsClusterSetting): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html aws_ecs_cluster}
*/
export declare class EcsCluster extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html aws_ecs_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsClusterConfig
    */
    constructor(scope: Construct, id: string, config: EcsClusterConfig);
    get arn(): string;
    private _capacityProviders?;
    get capacityProviders(): string[];
    set capacityProviders(value: string[]);
    resetCapacityProviders(): void;
    get capacityProvidersInput(): string[];
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
    private _configuration;
    get configuration(): EcsClusterConfigurationOutputReference;
    putConfiguration(value: EcsClusterConfiguration): void;
    resetConfiguration(): void;
    get configurationInput(): EcsClusterConfiguration;
    private _defaultCapacityProviderStrategy?;
    get defaultCapacityProviderStrategy(): EcsClusterDefaultCapacityProviderStrategy[];
    set defaultCapacityProviderStrategy(value: EcsClusterDefaultCapacityProviderStrategy[]);
    resetDefaultCapacityProviderStrategy(): void;
    get defaultCapacityProviderStrategyInput(): EcsClusterDefaultCapacityProviderStrategy[];
    private _setting?;
    get setting(): EcsClusterSetting[];
    set setting(value: EcsClusterSetting[]);
    resetSetting(): void;
    get settingInput(): EcsClusterSetting[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ecs-cluster.d.ts.map