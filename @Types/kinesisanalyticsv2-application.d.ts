import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Kinesis
*/
export interface Kinesisanalyticsv2ApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#description Kinesisanalyticsv2Application#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#force_stop Kinesisanalyticsv2Application#force_stop}
    */
    readonly forceStop?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#name Kinesisanalyticsv2Application#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#runtime_environment Kinesisanalyticsv2Application#runtime_environment}
    */
    readonly runtimeEnvironment: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#service_execution_role Kinesisanalyticsv2Application#service_execution_role}
    */
    readonly serviceExecutionRole: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#start_application Kinesisanalyticsv2Application#start_application}
    */
    readonly startApplication?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#tags Kinesisanalyticsv2Application#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#tags_all Kinesisanalyticsv2Application#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * application_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#application_configuration Kinesisanalyticsv2Application#application_configuration}
    */
    readonly applicationConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfiguration;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#cloudwatch_logging_options Kinesisanalyticsv2Application#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#bucket_arn Kinesisanalyticsv2Application#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#file_key Kinesisanalyticsv2Application#file_key}
    */
    readonly fileKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#object_version Kinesisanalyticsv2Application#object_version}
    */
    readonly objectVersion?: string;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation | undefined);
    private _bucketArn?;
    get bucketArn(): string;
    set bucketArn(value: string);
    get bucketArnInput(): string;
    private _fileKey?;
    get fileKey(): string;
    set fileKey(value: string);
    get fileKeyInput(): string;
    private _objectVersion?;
    get objectVersion(): string;
    set objectVersion(value: string);
    resetObjectVersion(): void;
    get objectVersionInput(): string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#text_content Kinesisanalyticsv2Application#text_content}
    */
    readonly textContent?: string;
    /**
    * s3_content_location block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#s3_content_location Kinesisanalyticsv2Application#s3_content_location}
    */
    readonly s3ContentLocation?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent | undefined);
    private _textContent?;
    get textContent(): string;
    set textContent(value: string);
    resetTextContent(): void;
    get textContentInput(): string;
    private _s3ContentLocation;
    get s3ContentLocation(): Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference;
    putS3ContentLocation(value: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation): void;
    resetS3ContentLocation(): void;
    get s3ContentLocationInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#code_content_type Kinesisanalyticsv2Application#code_content_type}
    */
    readonly codeContentType: string;
    /**
    * code_content block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#code_content Kinesisanalyticsv2Application#code_content}
    */
    readonly codeContent?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration | undefined);
    private _codeContentType?;
    get codeContentType(): string;
    set codeContentType(value: string);
    get codeContentTypeInput(): string;
    private _codeContent;
    get codeContent(): Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference;
    putCodeContent(value: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent): void;
    resetCodeContent(): void;
    get codeContentInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#snapshots_enabled Kinesisanalyticsv2Application#snapshots_enabled}
    */
    readonly snapshotsEnabled: boolean | cdktf.IResolvable;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration | undefined);
    private _snapshotsEnabled?;
    get snapshotsEnabled(): boolean | cdktf.IResolvable;
    set snapshotsEnabled(value: boolean | cdktf.IResolvable);
    get snapshotsEnabledInput(): boolean | cdktf.IResolvable;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#property_group_id Kinesisanalyticsv2Application#property_group_id}
    */
    readonly propertyGroupId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#property_map Kinesisanalyticsv2Application#property_map}
    */
    readonly propertyMap: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup): any;
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties {
    /**
    * property_group block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#property_group Kinesisanalyticsv2Application#property_group}
    */
    readonly propertyGroup: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup[];
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties | undefined);
    private _propertyGroup?;
    get propertyGroup(): Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup[];
    set propertyGroup(value: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup[]);
    get propertyGroupInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#checkpoint_interval Kinesisanalyticsv2Application#checkpoint_interval}
    */
    readonly checkpointInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#checkpointing_enabled Kinesisanalyticsv2Application#checkpointing_enabled}
    */
    readonly checkpointingEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#configuration_type Kinesisanalyticsv2Application#configuration_type}
    */
    readonly configurationType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#min_pause_between_checkpoints Kinesisanalyticsv2Application#min_pause_between_checkpoints}
    */
    readonly minPauseBetweenCheckpoints?: number;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration | undefined);
    private _checkpointInterval?;
    get checkpointInterval(): number;
    set checkpointInterval(value: number);
    resetCheckpointInterval(): void;
    get checkpointIntervalInput(): number;
    private _checkpointingEnabled?;
    get checkpointingEnabled(): boolean | cdktf.IResolvable;
    set checkpointingEnabled(value: boolean | cdktf.IResolvable);
    resetCheckpointingEnabled(): void;
    get checkpointingEnabledInput(): boolean | cdktf.IResolvable;
    private _configurationType?;
    get configurationType(): string;
    set configurationType(value: string);
    get configurationTypeInput(): string;
    private _minPauseBetweenCheckpoints?;
    get minPauseBetweenCheckpoints(): number;
    set minPauseBetweenCheckpoints(value: number);
    resetMinPauseBetweenCheckpoints(): void;
    get minPauseBetweenCheckpointsInput(): number;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#configuration_type Kinesisanalyticsv2Application#configuration_type}
    */
    readonly configurationType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#log_level Kinesisanalyticsv2Application#log_level}
    */
    readonly logLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#metrics_level Kinesisanalyticsv2Application#metrics_level}
    */
    readonly metricsLevel?: string;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration | undefined);
    private _configurationType?;
    get configurationType(): string;
    set configurationType(value: string);
    get configurationTypeInput(): string;
    private _logLevel?;
    get logLevel(): string;
    set logLevel(value: string);
    resetLogLevel(): void;
    get logLevelInput(): string;
    private _metricsLevel?;
    get metricsLevel(): string;
    set metricsLevel(value: string);
    resetMetricsLevel(): void;
    get metricsLevelInput(): string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#auto_scaling_enabled Kinesisanalyticsv2Application#auto_scaling_enabled}
    */
    readonly autoScalingEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#configuration_type Kinesisanalyticsv2Application#configuration_type}
    */
    readonly configurationType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#parallelism Kinesisanalyticsv2Application#parallelism}
    */
    readonly parallelism?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#parallelism_per_kpu Kinesisanalyticsv2Application#parallelism_per_kpu}
    */
    readonly parallelismPerKpu?: number;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration | undefined);
    private _autoScalingEnabled?;
    get autoScalingEnabled(): boolean | cdktf.IResolvable;
    set autoScalingEnabled(value: boolean | cdktf.IResolvable);
    resetAutoScalingEnabled(): void;
    get autoScalingEnabledInput(): boolean | cdktf.IResolvable;
    private _configurationType?;
    get configurationType(): string;
    set configurationType(value: string);
    get configurationTypeInput(): string;
    private _parallelism?;
    get parallelism(): number;
    set parallelism(value: number);
    resetParallelism(): void;
    get parallelismInput(): number;
    private _parallelismPerKpu?;
    get parallelismPerKpu(): number;
    set parallelismPerKpu(value: number);
    resetParallelismPerKpu(): void;
    get parallelismPerKpuInput(): number;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration {
    /**
    * checkpoint_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#checkpoint_configuration Kinesisanalyticsv2Application#checkpoint_configuration}
    */
    readonly checkpointConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration;
    /**
    * monitoring_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#monitoring_configuration Kinesisanalyticsv2Application#monitoring_configuration}
    */
    readonly monitoringConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration;
    /**
    * parallelism_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#parallelism_configuration Kinesisanalyticsv2Application#parallelism_configuration}
    */
    readonly parallelismConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration | undefined);
    private _checkpointConfiguration;
    get checkpointConfiguration(): Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference;
    putCheckpointConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration): void;
    resetCheckpointConfiguration(): void;
    get checkpointConfigurationInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration;
    private _monitoringConfiguration;
    get monitoringConfiguration(): Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference;
    putMonitoringConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration): void;
    resetMonitoringConfiguration(): void;
    get monitoringConfigurationInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration;
    private _parallelismConfiguration;
    get parallelismConfiguration(): Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference;
    putParallelismConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration): void;
    resetParallelismConfiguration(): void;
    get parallelismConfigurationInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#application_restore_type Kinesisanalyticsv2Application#application_restore_type}
    */
    readonly applicationRestoreType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#snapshot_name Kinesisanalyticsv2Application#snapshot_name}
    */
    readonly snapshotName?: string;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfiguration): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfiguration | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfiguration | undefined);
    private _applicationRestoreType?;
    get applicationRestoreType(): string;
    set applicationRestoreType(value: string);
    resetApplicationRestoreType(): void;
    get applicationRestoreTypeInput(): string;
    private _snapshotName?;
    get snapshotName(): string;
    set snapshotName(value: string);
    resetSnapshotName(): void;
    get snapshotNameInput(): string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#allow_non_restored_state Kinesisanalyticsv2Application#allow_non_restored_state}
    */
    readonly allowNonRestoredState?: boolean | cdktf.IResolvable;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfiguration): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfiguration | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfiguration | undefined);
    private _allowNonRestoredState?;
    get allowNonRestoredState(): boolean | cdktf.IResolvable;
    set allowNonRestoredState(value: boolean | cdktf.IResolvable);
    resetAllowNonRestoredState(): void;
    get allowNonRestoredStateInput(): boolean | cdktf.IResolvable;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfiguration {
    /**
    * application_restore_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#application_restore_configuration Kinesisanalyticsv2Application#application_restore_configuration}
    */
    readonly applicationRestoreConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfiguration;
    /**
    * flink_run_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#flink_run_configuration Kinesisanalyticsv2Application#flink_run_configuration}
    */
    readonly flinkRunConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfiguration;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfiguration): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfiguration | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfiguration | undefined);
    private _applicationRestoreConfiguration;
    get applicationRestoreConfiguration(): Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationOutputReference;
    putApplicationRestoreConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfiguration): void;
    resetApplicationRestoreConfiguration(): void;
    get applicationRestoreConfigurationInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfiguration;
    private _flinkRunConfiguration;
    get flinkRunConfiguration(): Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationOutputReference;
    putFlinkRunConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfiguration): void;
    resetFlinkRunConfiguration(): void;
    get flinkRunConfigurationInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfiguration;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#count Kinesisanalyticsv2Application#count}
    */
    readonly count?: number;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism | undefined);
    private _count?;
    get count(): number;
    set count(value: number);
    resetCount(): void;
    get countInput(): number;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#resource_arn Kinesisanalyticsv2Application#resource_arn}
    */
    readonly resourceArn: string;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor | undefined);
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration {
    /**
    * input_lambda_processor block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input_lambda_processor Kinesisanalyticsv2Application#input_lambda_processor}
    */
    readonly inputLambdaProcessor: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration | undefined);
    private _inputLambdaProcessor;
    get inputLambdaProcessor(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorOutputReference;
    putInputLambdaProcessor(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor): void;
    get inputLambdaProcessorInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#mapping Kinesisanalyticsv2Application#mapping}
    */
    readonly mapping?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#name Kinesisanalyticsv2Application#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#sql_type Kinesisanalyticsv2Application#sql_type}
    */
    readonly sqlType: string;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn): any;
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_column_delimiter Kinesisanalyticsv2Application#record_column_delimiter}
    */
    readonly recordColumnDelimiter: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_row_delimiter Kinesisanalyticsv2Application#record_row_delimiter}
    */
    readonly recordRowDelimiter: string;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParameters): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParameters | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParameters | undefined);
    private _recordColumnDelimiter?;
    get recordColumnDelimiter(): string;
    set recordColumnDelimiter(value: string);
    get recordColumnDelimiterInput(): string;
    private _recordRowDelimiter?;
    get recordRowDelimiter(): string;
    set recordRowDelimiter(value: string);
    get recordRowDelimiterInput(): string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_row_path Kinesisanalyticsv2Application#record_row_path}
    */
    readonly recordRowPath: string;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParameters): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParameters | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParameters | undefined);
    private _recordRowPath?;
    get recordRowPath(): string;
    set recordRowPath(value: string);
    get recordRowPathInput(): string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParameters {
    /**
    * csv_mapping_parameters block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#csv_mapping_parameters Kinesisanalyticsv2Application#csv_mapping_parameters}
    */
    readonly csvMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParameters;
    /**
    * json_mapping_parameters block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#json_mapping_parameters Kinesisanalyticsv2Application#json_mapping_parameters}
    */
    readonly jsonMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParameters;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParameters): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParameters | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParameters | undefined);
    private _csvMappingParameters;
    get csvMappingParameters(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference;
    putCsvMappingParameters(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParameters): void;
    resetCsvMappingParameters(): void;
    get csvMappingParametersInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParameters;
    private _jsonMappingParameters;
    get jsonMappingParameters(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference;
    putJsonMappingParameters(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParameters): void;
    resetJsonMappingParameters(): void;
    get jsonMappingParametersInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParameters;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_format_type Kinesisanalyticsv2Application#record_format_type}
    */
    readonly recordFormatType: string;
    /**
    * mapping_parameters block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#mapping_parameters Kinesisanalyticsv2Application#mapping_parameters}
    */
    readonly mappingParameters: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParameters;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat | undefined);
    private _recordFormatType?;
    get recordFormatType(): string;
    set recordFormatType(value: string);
    get recordFormatTypeInput(): string;
    private _mappingParameters;
    get mappingParameters(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersOutputReference;
    putMappingParameters(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParameters): void;
    get mappingParametersInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParameters;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_encoding Kinesisanalyticsv2Application#record_encoding}
    */
    readonly recordEncoding?: string;
    /**
    * record_column block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_column Kinesisanalyticsv2Application#record_column}
    */
    readonly recordColumn: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn[];
    /**
    * record_format block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_format Kinesisanalyticsv2Application#record_format}
    */
    readonly recordFormat: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema | undefined);
    private _recordEncoding?;
    get recordEncoding(): string;
    set recordEncoding(value: string);
    resetRecordEncoding(): void;
    get recordEncodingInput(): string;
    private _recordColumn?;
    get recordColumn(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn[];
    set recordColumn(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn[]);
    get recordColumnInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn[];
    private _recordFormat;
    get recordFormat(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatOutputReference;
    putRecordFormat(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat): void;
    get recordFormatInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input_starting_position Kinesisanalyticsv2Application#input_starting_position}
    */
    readonly inputStartingPosition?: string;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfiguration): any;
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#resource_arn Kinesisanalyticsv2Application#resource_arn}
    */
    readonly resourceArn: string;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput | undefined);
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#resource_arn Kinesisanalyticsv2Application#resource_arn}
    */
    readonly resourceArn: string;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput | undefined);
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInput {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#name_prefix Kinesisanalyticsv2Application#name_prefix}
    */
    readonly namePrefix: string;
    /**
    * input_parallelism block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input_parallelism Kinesisanalyticsv2Application#input_parallelism}
    */
    readonly inputParallelism?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism;
    /**
    * input_processing_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input_processing_configuration Kinesisanalyticsv2Application#input_processing_configuration}
    */
    readonly inputProcessingConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration;
    /**
    * input_schema block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input_schema Kinesisanalyticsv2Application#input_schema}
    */
    readonly inputSchema: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema;
    /**
    * input_starting_position_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input_starting_position_configuration Kinesisanalyticsv2Application#input_starting_position_configuration}
    */
    readonly inputStartingPositionConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfiguration[];
    /**
    * kinesis_firehose_input block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#kinesis_firehose_input Kinesisanalyticsv2Application#kinesis_firehose_input}
    */
    readonly kinesisFirehoseInput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput;
    /**
    * kinesis_streams_input block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#kinesis_streams_input Kinesisanalyticsv2Application#kinesis_streams_input}
    */
    readonly kinesisStreamsInput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInput): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInput | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInput | undefined);
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    get namePrefixInput(): string;
    private _inputParallelism;
    get inputParallelism(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismOutputReference;
    putInputParallelism(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism): void;
    resetInputParallelism(): void;
    get inputParallelismInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism;
    private _inputProcessingConfiguration;
    get inputProcessingConfiguration(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationOutputReference;
    putInputProcessingConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration): void;
    resetInputProcessingConfiguration(): void;
    get inputProcessingConfigurationInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration;
    private _inputSchema;
    get inputSchema(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaOutputReference;
    putInputSchema(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema): void;
    get inputSchemaInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema;
    private _inputStartingPositionConfiguration?;
    get inputStartingPositionConfiguration(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfiguration[];
    set inputStartingPositionConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfiguration[]);
    resetInputStartingPositionConfiguration(): void;
    get inputStartingPositionConfigurationInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfiguration[];
    private _kinesisFirehoseInput;
    get kinesisFirehoseInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputOutputReference;
    putKinesisFirehoseInput(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput): void;
    resetKinesisFirehoseInput(): void;
    get kinesisFirehoseInputInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput;
    private _kinesisStreamsInput;
    get kinesisStreamsInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputOutputReference;
    putKinesisStreamsInput(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput): void;
    resetKinesisStreamsInput(): void;
    get kinesisStreamsInputInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_format_type Kinesisanalyticsv2Application#record_format_type}
    */
    readonly recordFormatType: string;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema | undefined);
    private _recordFormatType?;
    get recordFormatType(): string;
    set recordFormatType(value: string);
    get recordFormatTypeInput(): string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#resource_arn Kinesisanalyticsv2Application#resource_arn}
    */
    readonly resourceArn: string;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput | undefined);
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutput {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#resource_arn Kinesisanalyticsv2Application#resource_arn}
    */
    readonly resourceArn: string;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutput): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutput | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutput | undefined);
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutput {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#resource_arn Kinesisanalyticsv2Application#resource_arn}
    */
    readonly resourceArn: string;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutput): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutput | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutput | undefined);
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutput {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#name Kinesisanalyticsv2Application#name}
    */
    readonly name: string;
    /**
    * destination_schema block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#destination_schema Kinesisanalyticsv2Application#destination_schema}
    */
    readonly destinationSchema: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema;
    /**
    * kinesis_firehose_output block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#kinesis_firehose_output Kinesisanalyticsv2Application#kinesis_firehose_output}
    */
    readonly kinesisFirehoseOutput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput;
    /**
    * kinesis_streams_output block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#kinesis_streams_output Kinesisanalyticsv2Application#kinesis_streams_output}
    */
    readonly kinesisStreamsOutput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutput;
    /**
    * lambda_output block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#lambda_output Kinesisanalyticsv2Application#lambda_output}
    */
    readonly lambdaOutput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutput;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutput): any;
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumn {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#mapping Kinesisanalyticsv2Application#mapping}
    */
    readonly mapping?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#name Kinesisanalyticsv2Application#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#sql_type Kinesisanalyticsv2Application#sql_type}
    */
    readonly sqlType: string;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumn): any;
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_column_delimiter Kinesisanalyticsv2Application#record_column_delimiter}
    */
    readonly recordColumnDelimiter: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_row_delimiter Kinesisanalyticsv2Application#record_row_delimiter}
    */
    readonly recordRowDelimiter: string;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParameters): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParameters | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParameters | undefined);
    private _recordColumnDelimiter?;
    get recordColumnDelimiter(): string;
    set recordColumnDelimiter(value: string);
    get recordColumnDelimiterInput(): string;
    private _recordRowDelimiter?;
    get recordRowDelimiter(): string;
    set recordRowDelimiter(value: string);
    get recordRowDelimiterInput(): string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_row_path Kinesisanalyticsv2Application#record_row_path}
    */
    readonly recordRowPath: string;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParameters): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParameters | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParameters | undefined);
    private _recordRowPath?;
    get recordRowPath(): string;
    set recordRowPath(value: string);
    get recordRowPathInput(): string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParameters {
    /**
    * csv_mapping_parameters block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#csv_mapping_parameters Kinesisanalyticsv2Application#csv_mapping_parameters}
    */
    readonly csvMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParameters;
    /**
    * json_mapping_parameters block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#json_mapping_parameters Kinesisanalyticsv2Application#json_mapping_parameters}
    */
    readonly jsonMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParameters;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParameters): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParameters | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParameters | undefined);
    private _csvMappingParameters;
    get csvMappingParameters(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference;
    putCsvMappingParameters(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParameters): void;
    resetCsvMappingParameters(): void;
    get csvMappingParametersInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParameters;
    private _jsonMappingParameters;
    get jsonMappingParameters(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference;
    putJsonMappingParameters(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParameters): void;
    resetJsonMappingParameters(): void;
    get jsonMappingParametersInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParameters;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormat {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_format_type Kinesisanalyticsv2Application#record_format_type}
    */
    readonly recordFormatType: string;
    /**
    * mapping_parameters block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#mapping_parameters Kinesisanalyticsv2Application#mapping_parameters}
    */
    readonly mappingParameters: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParameters;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormat): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormat | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormat | undefined);
    private _recordFormatType?;
    get recordFormatType(): string;
    set recordFormatType(value: string);
    get recordFormatTypeInput(): string;
    private _mappingParameters;
    get mappingParameters(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersOutputReference;
    putMappingParameters(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParameters): void;
    get mappingParametersInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParameters;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_encoding Kinesisanalyticsv2Application#record_encoding}
    */
    readonly recordEncoding?: string;
    /**
    * record_column block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_column Kinesisanalyticsv2Application#record_column}
    */
    readonly recordColumn: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumn[];
    /**
    * record_format block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_format Kinesisanalyticsv2Application#record_format}
    */
    readonly recordFormat: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormat;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema | undefined);
    private _recordEncoding?;
    get recordEncoding(): string;
    set recordEncoding(value: string);
    resetRecordEncoding(): void;
    get recordEncodingInput(): string;
    private _recordColumn?;
    get recordColumn(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumn[];
    set recordColumn(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumn[]);
    get recordColumnInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumn[];
    private _recordFormat;
    get recordFormat(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatOutputReference;
    putRecordFormat(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormat): void;
    get recordFormatInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormat;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#bucket_arn Kinesisanalyticsv2Application#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#file_key Kinesisanalyticsv2Application#file_key}
    */
    readonly fileKey: string;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource | undefined);
    private _bucketArn?;
    get bucketArn(): string;
    set bucketArn(value: string);
    get bucketArnInput(): string;
    private _fileKey?;
    get fileKey(): string;
    set fileKey(value: string);
    get fileKeyInput(): string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#table_name Kinesisanalyticsv2Application#table_name}
    */
    readonly tableName: string;
    /**
    * reference_schema block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#reference_schema Kinesisanalyticsv2Application#reference_schema}
    */
    readonly referenceSchema: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema;
    /**
    * s3_reference_data_source block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#s3_reference_data_source Kinesisanalyticsv2Application#s3_reference_data_source}
    */
    readonly s3ReferenceDataSource: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource | undefined);
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string;
    private _referenceSchema;
    get referenceSchema(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaOutputReference;
    putReferenceSchema(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema): void;
    get referenceSchemaInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema;
    private _s3ReferenceDataSource;
    get s3ReferenceDataSource(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceOutputReference;
    putS3ReferenceDataSource(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource): void;
    get s3ReferenceDataSourceInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration {
    /**
    * input block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input Kinesisanalyticsv2Application#input}
    */
    readonly input?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInput;
    /**
    * output block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#output Kinesisanalyticsv2Application#output}
    */
    readonly output?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutput[];
    /**
    * reference_data_source block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#reference_data_source Kinesisanalyticsv2Application#reference_data_source}
    */
    readonly referenceDataSource?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration | undefined);
    private _input;
    get input(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputOutputReference;
    putInput(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInput): void;
    resetInput(): void;
    get inputInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInput;
    private _output?;
    get output(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutput[];
    set output(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutput[]);
    resetOutput(): void;
    get outputInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutput[];
    private _referenceDataSource;
    get referenceDataSource(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceOutputReference;
    putReferenceDataSource(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource): void;
    resetReferenceDataSource(): void;
    get referenceDataSourceInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#security_group_ids Kinesisanalyticsv2Application#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#subnet_ids Kinesisanalyticsv2Application#subnet_ids}
    */
    readonly subnetIds: string[];
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfiguration): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfiguration | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfiguration | undefined);
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    get securityGroupIdsInput(): string[];
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfiguration {
    /**
    * application_code_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#application_code_configuration Kinesisanalyticsv2Application#application_code_configuration}
    */
    readonly applicationCodeConfiguration: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration;
    /**
    * application_snapshot_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#application_snapshot_configuration Kinesisanalyticsv2Application#application_snapshot_configuration}
    */
    readonly applicationSnapshotConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration;
    /**
    * environment_properties block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#environment_properties Kinesisanalyticsv2Application#environment_properties}
    */
    readonly environmentProperties?: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties;
    /**
    * flink_application_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#flink_application_configuration Kinesisanalyticsv2Application#flink_application_configuration}
    */
    readonly flinkApplicationConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration;
    /**
    * run_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#run_configuration Kinesisanalyticsv2Application#run_configuration}
    */
    readonly runConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfiguration;
    /**
    * sql_application_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#sql_application_configuration Kinesisanalyticsv2Application#sql_application_configuration}
    */
    readonly sqlApplicationConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration;
    /**
    * vpc_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#vpc_configuration Kinesisanalyticsv2Application#vpc_configuration}
    */
    readonly vpcConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfiguration;
}
export declare function kinesisanalyticsv2ApplicationApplicationConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference | Kinesisanalyticsv2ApplicationApplicationConfiguration): any;
export declare class Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfiguration | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfiguration | undefined);
    private _applicationCodeConfiguration;
    get applicationCodeConfiguration(): Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference;
    putApplicationCodeConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration): void;
    get applicationCodeConfigurationInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration;
    private _applicationSnapshotConfiguration;
    get applicationSnapshotConfiguration(): Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference;
    putApplicationSnapshotConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration): void;
    resetApplicationSnapshotConfiguration(): void;
    get applicationSnapshotConfigurationInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration;
    private _environmentProperties;
    get environmentProperties(): Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference;
    putEnvironmentProperties(value: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties): void;
    resetEnvironmentProperties(): void;
    get environmentPropertiesInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties;
    private _flinkApplicationConfiguration;
    get flinkApplicationConfiguration(): Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference;
    putFlinkApplicationConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration): void;
    resetFlinkApplicationConfiguration(): void;
    get flinkApplicationConfigurationInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration;
    private _runConfiguration;
    get runConfiguration(): Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationOutputReference;
    putRunConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfiguration): void;
    resetRunConfiguration(): void;
    get runConfigurationInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfiguration;
    private _sqlApplicationConfiguration;
    get sqlApplicationConfiguration(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference;
    putSqlApplicationConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration): void;
    resetSqlApplicationConfiguration(): void;
    get sqlApplicationConfigurationInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration;
    private _vpcConfiguration;
    get vpcConfiguration(): Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationOutputReference;
    putVpcConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfiguration): void;
    resetVpcConfiguration(): void;
    get vpcConfigurationInput(): Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfiguration;
}
export interface Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#log_stream_arn Kinesisanalyticsv2Application#log_stream_arn}
    */
    readonly logStreamArn: string;
}
export declare function kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsToTerraform(struct?: Kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsOutputReference | Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions): any;
export declare class Kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions | undefined;
    set internalValue(value: Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions | undefined);
    private _logStreamArn?;
    get logStreamArn(): string;
    set logStreamArn(value: string);
    get logStreamArnInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html aws_kinesisanalyticsv2_application}
*/
export declare class Kinesisanalyticsv2Application extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html aws_kinesisanalyticsv2_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Kinesisanalyticsv2ApplicationConfig
    */
    constructor(scope: Construct, id: string, config: Kinesisanalyticsv2ApplicationConfig);
    get arn(): string;
    get createTimestamp(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _forceStop?;
    get forceStop(): boolean | cdktf.IResolvable;
    set forceStop(value: boolean | cdktf.IResolvable);
    resetForceStop(): void;
    get forceStopInput(): boolean | cdktf.IResolvable;
    get id(): string;
    get lastUpdateTimestamp(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _runtimeEnvironment?;
    get runtimeEnvironment(): string;
    set runtimeEnvironment(value: string);
    get runtimeEnvironmentInput(): string;
    private _serviceExecutionRole?;
    get serviceExecutionRole(): string;
    set serviceExecutionRole(value: string);
    get serviceExecutionRoleInput(): string;
    private _startApplication?;
    get startApplication(): boolean | cdktf.IResolvable;
    set startApplication(value: boolean | cdktf.IResolvable);
    resetStartApplication(): void;
    get startApplicationInput(): boolean | cdktf.IResolvable;
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
    get versionId(): number;
    private _applicationConfiguration;
    get applicationConfiguration(): Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference;
    putApplicationConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfiguration): void;
    resetApplicationConfiguration(): void;
    get applicationConfigurationInput(): Kinesisanalyticsv2ApplicationApplicationConfiguration;
    private _cloudwatchLoggingOptions;
    get cloudwatchLoggingOptions(): Kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsOutputReference;
    putCloudwatchLoggingOptions(value: Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions): void;
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=kinesisanalyticsv2-application.d.ts.map