import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Managed Workloads for Apache Airflow
*/
export interface MwaaEnvironmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#airflow_configuration_options MwaaEnvironment#airflow_configuration_options}
    */
    readonly airflowConfigurationOptions?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#airflow_version MwaaEnvironment#airflow_version}
    */
    readonly airflowVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#dag_s3_path MwaaEnvironment#dag_s3_path}
    */
    readonly dagS3Path: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#environment_class MwaaEnvironment#environment_class}
    */
    readonly environmentClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#execution_role_arn MwaaEnvironment#execution_role_arn}
    */
    readonly executionRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#kms_key MwaaEnvironment#kms_key}
    */
    readonly kmsKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#max_workers MwaaEnvironment#max_workers}
    */
    readonly maxWorkers?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#min_workers MwaaEnvironment#min_workers}
    */
    readonly minWorkers?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#name MwaaEnvironment#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#plugins_s3_object_version MwaaEnvironment#plugins_s3_object_version}
    */
    readonly pluginsS3ObjectVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#plugins_s3_path MwaaEnvironment#plugins_s3_path}
    */
    readonly pluginsS3Path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#requirements_s3_object_version MwaaEnvironment#requirements_s3_object_version}
    */
    readonly requirementsS3ObjectVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#requirements_s3_path MwaaEnvironment#requirements_s3_path}
    */
    readonly requirementsS3Path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#source_bucket_arn MwaaEnvironment#source_bucket_arn}
    */
    readonly sourceBucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#tags MwaaEnvironment#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#tags_all MwaaEnvironment#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#webserver_access_mode MwaaEnvironment#webserver_access_mode}
    */
    readonly webserverAccessMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#weekly_maintenance_window_start MwaaEnvironment#weekly_maintenance_window_start}
    */
    readonly weeklyMaintenanceWindowStart?: string;
    /**
    * logging_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#logging_configuration MwaaEnvironment#logging_configuration}
    */
    readonly loggingConfiguration?: MwaaEnvironmentLoggingConfiguration;
    /**
    * network_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#network_configuration MwaaEnvironment#network_configuration}
    */
    readonly networkConfiguration: MwaaEnvironmentNetworkConfiguration;
}
export declare class MwaaEnvironmentLastUpdatedError extends cdktf.ComplexComputedList {
    get errorCode(): string;
    get errorMessage(): string;
}
export declare class MwaaEnvironmentLastUpdated extends cdktf.ComplexComputedList {
    get createdAt(): string;
    get error(): any;
    get status(): string;
}
export interface MwaaEnvironmentLoggingConfigurationDagProcessingLogs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#enabled MwaaEnvironment#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#log_level MwaaEnvironment#log_level}
    */
    readonly logLevel?: string;
}
export declare function mwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference | MwaaEnvironmentLoggingConfigurationDagProcessingLogs): any;
export declare class MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): MwaaEnvironmentLoggingConfigurationDagProcessingLogs | undefined;
    set internalValue(value: MwaaEnvironmentLoggingConfigurationDagProcessingLogs | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _logLevel?;
    get logLevel(): string;
    set logLevel(value: string);
    resetLogLevel(): void;
    get logLevelInput(): string;
}
export interface MwaaEnvironmentLoggingConfigurationSchedulerLogs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#enabled MwaaEnvironment#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#log_level MwaaEnvironment#log_level}
    */
    readonly logLevel?: string;
}
export declare function mwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference | MwaaEnvironmentLoggingConfigurationSchedulerLogs): any;
export declare class MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): MwaaEnvironmentLoggingConfigurationSchedulerLogs | undefined;
    set internalValue(value: MwaaEnvironmentLoggingConfigurationSchedulerLogs | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _logLevel?;
    get logLevel(): string;
    set logLevel(value: string);
    resetLogLevel(): void;
    get logLevelInput(): string;
}
export interface MwaaEnvironmentLoggingConfigurationTaskLogs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#enabled MwaaEnvironment#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#log_level MwaaEnvironment#log_level}
    */
    readonly logLevel?: string;
}
export declare function mwaaEnvironmentLoggingConfigurationTaskLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference | MwaaEnvironmentLoggingConfigurationTaskLogs): any;
export declare class MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): MwaaEnvironmentLoggingConfigurationTaskLogs | undefined;
    set internalValue(value: MwaaEnvironmentLoggingConfigurationTaskLogs | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _logLevel?;
    get logLevel(): string;
    set logLevel(value: string);
    resetLogLevel(): void;
    get logLevelInput(): string;
}
export interface MwaaEnvironmentLoggingConfigurationWebserverLogs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#enabled MwaaEnvironment#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#log_level MwaaEnvironment#log_level}
    */
    readonly logLevel?: string;
}
export declare function mwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference | MwaaEnvironmentLoggingConfigurationWebserverLogs): any;
export declare class MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): MwaaEnvironmentLoggingConfigurationWebserverLogs | undefined;
    set internalValue(value: MwaaEnvironmentLoggingConfigurationWebserverLogs | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _logLevel?;
    get logLevel(): string;
    set logLevel(value: string);
    resetLogLevel(): void;
    get logLevelInput(): string;
}
export interface MwaaEnvironmentLoggingConfigurationWorkerLogs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#enabled MwaaEnvironment#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#log_level MwaaEnvironment#log_level}
    */
    readonly logLevel?: string;
}
export declare function mwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference | MwaaEnvironmentLoggingConfigurationWorkerLogs): any;
export declare class MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): MwaaEnvironmentLoggingConfigurationWorkerLogs | undefined;
    set internalValue(value: MwaaEnvironmentLoggingConfigurationWorkerLogs | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _logLevel?;
    get logLevel(): string;
    set logLevel(value: string);
    resetLogLevel(): void;
    get logLevelInput(): string;
}
export interface MwaaEnvironmentLoggingConfiguration {
    /**
    * dag_processing_logs block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#dag_processing_logs MwaaEnvironment#dag_processing_logs}
    */
    readonly dagProcessingLogs?: MwaaEnvironmentLoggingConfigurationDagProcessingLogs;
    /**
    * scheduler_logs block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#scheduler_logs MwaaEnvironment#scheduler_logs}
    */
    readonly schedulerLogs?: MwaaEnvironmentLoggingConfigurationSchedulerLogs;
    /**
    * task_logs block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#task_logs MwaaEnvironment#task_logs}
    */
    readonly taskLogs?: MwaaEnvironmentLoggingConfigurationTaskLogs;
    /**
    * webserver_logs block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#webserver_logs MwaaEnvironment#webserver_logs}
    */
    readonly webserverLogs?: MwaaEnvironmentLoggingConfigurationWebserverLogs;
    /**
    * worker_logs block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#worker_logs MwaaEnvironment#worker_logs}
    */
    readonly workerLogs?: MwaaEnvironmentLoggingConfigurationWorkerLogs;
}
export declare function mwaaEnvironmentLoggingConfigurationToTerraform(struct?: MwaaEnvironmentLoggingConfigurationOutputReference | MwaaEnvironmentLoggingConfiguration): any;
export declare class MwaaEnvironmentLoggingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): MwaaEnvironmentLoggingConfiguration | undefined;
    set internalValue(value: MwaaEnvironmentLoggingConfiguration | undefined);
    private _dagProcessingLogs;
    get dagProcessingLogs(): MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference;
    putDagProcessingLogs(value: MwaaEnvironmentLoggingConfigurationDagProcessingLogs): void;
    resetDagProcessingLogs(): void;
    get dagProcessingLogsInput(): MwaaEnvironmentLoggingConfigurationDagProcessingLogs;
    private _schedulerLogs;
    get schedulerLogs(): MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference;
    putSchedulerLogs(value: MwaaEnvironmentLoggingConfigurationSchedulerLogs): void;
    resetSchedulerLogs(): void;
    get schedulerLogsInput(): MwaaEnvironmentLoggingConfigurationSchedulerLogs;
    private _taskLogs;
    get taskLogs(): MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference;
    putTaskLogs(value: MwaaEnvironmentLoggingConfigurationTaskLogs): void;
    resetTaskLogs(): void;
    get taskLogsInput(): MwaaEnvironmentLoggingConfigurationTaskLogs;
    private _webserverLogs;
    get webserverLogs(): MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference;
    putWebserverLogs(value: MwaaEnvironmentLoggingConfigurationWebserverLogs): void;
    resetWebserverLogs(): void;
    get webserverLogsInput(): MwaaEnvironmentLoggingConfigurationWebserverLogs;
    private _workerLogs;
    get workerLogs(): MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference;
    putWorkerLogs(value: MwaaEnvironmentLoggingConfigurationWorkerLogs): void;
    resetWorkerLogs(): void;
    get workerLogsInput(): MwaaEnvironmentLoggingConfigurationWorkerLogs;
}
export interface MwaaEnvironmentNetworkConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#security_group_ids MwaaEnvironment#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#subnet_ids MwaaEnvironment#subnet_ids}
    */
    readonly subnetIds: string[];
}
export declare function mwaaEnvironmentNetworkConfigurationToTerraform(struct?: MwaaEnvironmentNetworkConfigurationOutputReference | MwaaEnvironmentNetworkConfiguration): any;
export declare class MwaaEnvironmentNetworkConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): MwaaEnvironmentNetworkConfiguration | undefined;
    set internalValue(value: MwaaEnvironmentNetworkConfiguration | undefined);
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    get securityGroupIdsInput(): string[];
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html aws_mwaa_environment}
*/
export declare class MwaaEnvironment extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html aws_mwaa_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MwaaEnvironmentConfig
    */
    constructor(scope: Construct, id: string, config: MwaaEnvironmentConfig);
    private _airflowConfigurationOptions?;
    get airflowConfigurationOptions(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set airflowConfigurationOptions(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetAirflowConfigurationOptions(): void;
    get airflowConfigurationOptionsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _airflowVersion?;
    get airflowVersion(): string;
    set airflowVersion(value: string);
    resetAirflowVersion(): void;
    get airflowVersionInput(): string;
    get arn(): string;
    get createdAt(): string;
    private _dagS3Path?;
    get dagS3Path(): string;
    set dagS3Path(value: string);
    get dagS3PathInput(): string;
    private _environmentClass?;
    get environmentClass(): string;
    set environmentClass(value: string);
    resetEnvironmentClass(): void;
    get environmentClassInput(): string;
    private _executionRoleArn?;
    get executionRoleArn(): string;
    set executionRoleArn(value: string);
    get executionRoleArnInput(): string;
    get id(): string;
    private _kmsKey?;
    get kmsKey(): string;
    set kmsKey(value: string);
    resetKmsKey(): void;
    get kmsKeyInput(): string;
    lastUpdated(index: string): MwaaEnvironmentLastUpdated;
    private _maxWorkers?;
    get maxWorkers(): number;
    set maxWorkers(value: number);
    resetMaxWorkers(): void;
    get maxWorkersInput(): number;
    private _minWorkers?;
    get minWorkers(): number;
    set minWorkers(value: number);
    resetMinWorkers(): void;
    get minWorkersInput(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _pluginsS3ObjectVersion?;
    get pluginsS3ObjectVersion(): string;
    set pluginsS3ObjectVersion(value: string);
    resetPluginsS3ObjectVersion(): void;
    get pluginsS3ObjectVersionInput(): string;
    private _pluginsS3Path?;
    get pluginsS3Path(): string;
    set pluginsS3Path(value: string);
    resetPluginsS3Path(): void;
    get pluginsS3PathInput(): string;
    private _requirementsS3ObjectVersion?;
    get requirementsS3ObjectVersion(): string;
    set requirementsS3ObjectVersion(value: string);
    resetRequirementsS3ObjectVersion(): void;
    get requirementsS3ObjectVersionInput(): string;
    private _requirementsS3Path?;
    get requirementsS3Path(): string;
    set requirementsS3Path(value: string);
    resetRequirementsS3Path(): void;
    get requirementsS3PathInput(): string;
    get serviceRoleArn(): string;
    private _sourceBucketArn?;
    get sourceBucketArn(): string;
    set sourceBucketArn(value: string);
    get sourceBucketArnInput(): string;
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
    private _webserverAccessMode?;
    get webserverAccessMode(): string;
    set webserverAccessMode(value: string);
    resetWebserverAccessMode(): void;
    get webserverAccessModeInput(): string;
    get webserverUrl(): string;
    private _weeklyMaintenanceWindowStart?;
    get weeklyMaintenanceWindowStart(): string;
    set weeklyMaintenanceWindowStart(value: string);
    resetWeeklyMaintenanceWindowStart(): void;
    get weeklyMaintenanceWindowStartInput(): string;
    private _loggingConfiguration;
    get loggingConfiguration(): MwaaEnvironmentLoggingConfigurationOutputReference;
    putLoggingConfiguration(value: MwaaEnvironmentLoggingConfiguration): void;
    resetLoggingConfiguration(): void;
    get loggingConfigurationInput(): MwaaEnvironmentLoggingConfiguration;
    private _networkConfiguration;
    get networkConfiguration(): MwaaEnvironmentNetworkConfigurationOutputReference;
    putNetworkConfiguration(value: MwaaEnvironmentNetworkConfiguration): void;
    get networkConfigurationInput(): MwaaEnvironmentNetworkConfiguration;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=mwaa-environment.d.ts.map