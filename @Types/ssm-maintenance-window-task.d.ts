import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Systems Manager
*/
export interface SsmMaintenanceWindowTaskConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#description SsmMaintenanceWindowTask#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#max_concurrency SsmMaintenanceWindowTask#max_concurrency}
    */
    readonly maxConcurrency: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#max_errors SsmMaintenanceWindowTask#max_errors}
    */
    readonly maxErrors: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#name SsmMaintenanceWindowTask#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#priority SsmMaintenanceWindowTask#priority}
    */
    readonly priority?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#service_role_arn SsmMaintenanceWindowTask#service_role_arn}
    */
    readonly serviceRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#task_arn SsmMaintenanceWindowTask#task_arn}
    */
    readonly taskArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#task_type SsmMaintenanceWindowTask#task_type}
    */
    readonly taskType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#window_id SsmMaintenanceWindowTask#window_id}
    */
    readonly windowId: string;
    /**
    * targets block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#targets SsmMaintenanceWindowTask#targets}
    */
    readonly targets?: SsmMaintenanceWindowTaskTargets[];
    /**
    * task_invocation_parameters block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#task_invocation_parameters SsmMaintenanceWindowTask#task_invocation_parameters}
    */
    readonly taskInvocationParameters?: SsmMaintenanceWindowTaskTaskInvocationParameters;
}
export interface SsmMaintenanceWindowTaskTargets {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#key SsmMaintenanceWindowTask#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#values SsmMaintenanceWindowTask#values}
    */
    readonly values: string[];
}
export declare function ssmMaintenanceWindowTaskTargetsToTerraform(struct?: SsmMaintenanceWindowTaskTargets): any;
export interface SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#name SsmMaintenanceWindowTask#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#values SsmMaintenanceWindowTask#values}
    */
    readonly values: string[];
}
export declare function ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter): any;
export interface SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#document_version SsmMaintenanceWindowTask#document_version}
    */
    readonly documentVersion?: string;
    /**
    * parameter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#parameter SsmMaintenanceWindowTask#parameter}
    */
    readonly parameter?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter[];
}
export declare function ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters): any;
export declare class SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters | undefined;
    set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters | undefined);
    private _documentVersion?;
    get documentVersion(): string;
    set documentVersion(value: string);
    resetDocumentVersion(): void;
    get documentVersionInput(): string;
    private _parameter?;
    get parameter(): SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter[];
    set parameter(value: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter[]);
    resetParameter(): void;
    get parameterInput(): SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter[];
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#client_context SsmMaintenanceWindowTask#client_context}
    */
    readonly clientContext?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#payload SsmMaintenanceWindowTask#payload}
    */
    readonly payload?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#qualifier SsmMaintenanceWindowTask#qualifier}
    */
    readonly qualifier?: string;
}
export declare function ssmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters): any;
export declare class SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters | undefined;
    set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters | undefined);
    private _clientContext?;
    get clientContext(): string;
    set clientContext(value: string);
    resetClientContext(): void;
    get clientContextInput(): string;
    private _payload?;
    get payload(): string;
    set payload(value: string);
    resetPayload(): void;
    get payloadInput(): string;
    private _qualifier?;
    get qualifier(): string;
    set qualifier(value: string);
    resetQualifier(): void;
    get qualifierInput(): string;
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#cloudwatch_log_group_name SsmMaintenanceWindowTask#cloudwatch_log_group_name}
    */
    readonly cloudwatchLogGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#cloudwatch_output_enabled SsmMaintenanceWindowTask#cloudwatch_output_enabled}
    */
    readonly cloudwatchOutputEnabled?: boolean | cdktf.IResolvable;
}
export declare function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig): any;
export declare class SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig | undefined;
    set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig | undefined);
    private _cloudwatchLogGroupName?;
    get cloudwatchLogGroupName(): string;
    set cloudwatchLogGroupName(value: string);
    resetCloudwatchLogGroupName(): void;
    get cloudwatchLogGroupNameInput(): string;
    private _cloudwatchOutputEnabled?;
    get cloudwatchOutputEnabled(): boolean | cdktf.IResolvable;
    set cloudwatchOutputEnabled(value: boolean | cdktf.IResolvable);
    resetCloudwatchOutputEnabled(): void;
    get cloudwatchOutputEnabledInput(): boolean | cdktf.IResolvable;
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#notification_arn SsmMaintenanceWindowTask#notification_arn}
    */
    readonly notificationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#notification_events SsmMaintenanceWindowTask#notification_events}
    */
    readonly notificationEvents?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#notification_type SsmMaintenanceWindowTask#notification_type}
    */
    readonly notificationType?: string;
}
export declare function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig): any;
export declare class SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig | undefined;
    set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig | undefined);
    private _notificationArn?;
    get notificationArn(): string;
    set notificationArn(value: string);
    resetNotificationArn(): void;
    get notificationArnInput(): string;
    private _notificationEvents?;
    get notificationEvents(): string[];
    set notificationEvents(value: string[]);
    resetNotificationEvents(): void;
    get notificationEventsInput(): string[];
    private _notificationType?;
    get notificationType(): string;
    set notificationType(value: string);
    resetNotificationType(): void;
    get notificationTypeInput(): string;
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#name SsmMaintenanceWindowTask#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#values SsmMaintenanceWindowTask#values}
    */
    readonly values: string[];
}
export declare function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter): any;
export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#comment SsmMaintenanceWindowTask#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#document_hash SsmMaintenanceWindowTask#document_hash}
    */
    readonly documentHash?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#document_hash_type SsmMaintenanceWindowTask#document_hash_type}
    */
    readonly documentHashType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#document_version SsmMaintenanceWindowTask#document_version}
    */
    readonly documentVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#output_s3_bucket SsmMaintenanceWindowTask#output_s3_bucket}
    */
    readonly outputS3Bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#output_s3_key_prefix SsmMaintenanceWindowTask#output_s3_key_prefix}
    */
    readonly outputS3KeyPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#service_role_arn SsmMaintenanceWindowTask#service_role_arn}
    */
    readonly serviceRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#timeout_seconds SsmMaintenanceWindowTask#timeout_seconds}
    */
    readonly timeoutSeconds?: number;
    /**
    * cloudwatch_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#cloudwatch_config SsmMaintenanceWindowTask#cloudwatch_config}
    */
    readonly cloudwatchConfig?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig;
    /**
    * notification_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#notification_config SsmMaintenanceWindowTask#notification_config}
    */
    readonly notificationConfig?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig;
    /**
    * parameter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#parameter SsmMaintenanceWindowTask#parameter}
    */
    readonly parameter?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter[];
}
export declare function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters): any;
export declare class SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters | undefined;
    set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters | undefined);
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string;
    private _documentHash?;
    get documentHash(): string;
    set documentHash(value: string);
    resetDocumentHash(): void;
    get documentHashInput(): string;
    private _documentHashType?;
    get documentHashType(): string;
    set documentHashType(value: string);
    resetDocumentHashType(): void;
    get documentHashTypeInput(): string;
    private _documentVersion?;
    get documentVersion(): string;
    set documentVersion(value: string);
    resetDocumentVersion(): void;
    get documentVersionInput(): string;
    private _outputS3Bucket?;
    get outputS3Bucket(): string;
    set outputS3Bucket(value: string);
    resetOutputS3Bucket(): void;
    get outputS3BucketInput(): string;
    private _outputS3KeyPrefix?;
    get outputS3KeyPrefix(): string;
    set outputS3KeyPrefix(value: string);
    resetOutputS3KeyPrefix(): void;
    get outputS3KeyPrefixInput(): string;
    private _serviceRoleArn?;
    get serviceRoleArn(): string;
    set serviceRoleArn(value: string);
    resetServiceRoleArn(): void;
    get serviceRoleArnInput(): string;
    private _timeoutSeconds?;
    get timeoutSeconds(): number;
    set timeoutSeconds(value: number);
    resetTimeoutSeconds(): void;
    get timeoutSecondsInput(): number;
    private _cloudwatchConfig;
    get cloudwatchConfig(): SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference;
    putCloudwatchConfig(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig): void;
    resetCloudwatchConfig(): void;
    get cloudwatchConfigInput(): SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig;
    private _notificationConfig;
    get notificationConfig(): SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference;
    putNotificationConfig(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig): void;
    resetNotificationConfig(): void;
    get notificationConfigInput(): SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig;
    private _parameter?;
    get parameter(): SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter[];
    set parameter(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter[]);
    resetParameter(): void;
    get parameterInput(): SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter[];
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#input SsmMaintenanceWindowTask#input}
    */
    readonly input?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#name SsmMaintenanceWindowTask#name}
    */
    readonly name?: string;
}
export declare function ssmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters): any;
export declare class SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters | undefined;
    set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters | undefined);
    private _input?;
    get input(): string;
    set input(value: string);
    resetInput(): void;
    get inputInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
}
export interface SsmMaintenanceWindowTaskTaskInvocationParameters {
    /**
    * automation_parameters block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#automation_parameters SsmMaintenanceWindowTask#automation_parameters}
    */
    readonly automationParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters;
    /**
    * lambda_parameters block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#lambda_parameters SsmMaintenanceWindowTask#lambda_parameters}
    */
    readonly lambdaParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters;
    /**
    * run_command_parameters block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#run_command_parameters SsmMaintenanceWindowTask#run_command_parameters}
    */
    readonly runCommandParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters;
    /**
    * step_functions_parameters block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#step_functions_parameters SsmMaintenanceWindowTask#step_functions_parameters}
    */
    readonly stepFunctionsParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters;
}
export declare function ssmMaintenanceWindowTaskTaskInvocationParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference | SsmMaintenanceWindowTaskTaskInvocationParameters): any;
export declare class SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParameters | undefined;
    set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParameters | undefined);
    private _automationParameters;
    get automationParameters(): SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference;
    putAutomationParameters(value: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters): void;
    resetAutomationParameters(): void;
    get automationParametersInput(): SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters;
    private _lambdaParameters;
    get lambdaParameters(): SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference;
    putLambdaParameters(value: SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters): void;
    resetLambdaParameters(): void;
    get lambdaParametersInput(): SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters;
    private _runCommandParameters;
    get runCommandParameters(): SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference;
    putRunCommandParameters(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters): void;
    resetRunCommandParameters(): void;
    get runCommandParametersInput(): SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters;
    private _stepFunctionsParameters;
    get stepFunctionsParameters(): SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference;
    putStepFunctionsParameters(value: SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters): void;
    resetStepFunctionsParameters(): void;
    get stepFunctionsParametersInput(): SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html aws_ssm_maintenance_window_task}
*/
export declare class SsmMaintenanceWindowTask extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html aws_ssm_maintenance_window_task} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmMaintenanceWindowTaskConfig
    */
    constructor(scope: Construct, id: string, config: SsmMaintenanceWindowTaskConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _maxConcurrency?;
    get maxConcurrency(): string;
    set maxConcurrency(value: string);
    get maxConcurrencyInput(): string;
    private _maxErrors?;
    get maxErrors(): string;
    set maxErrors(value: string);
    get maxErrorsInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    resetPriority(): void;
    get priorityInput(): number;
    private _serviceRoleArn?;
    get serviceRoleArn(): string;
    set serviceRoleArn(value: string);
    resetServiceRoleArn(): void;
    get serviceRoleArnInput(): string;
    private _taskArn?;
    get taskArn(): string;
    set taskArn(value: string);
    get taskArnInput(): string;
    private _taskType?;
    get taskType(): string;
    set taskType(value: string);
    get taskTypeInput(): string;
    private _windowId?;
    get windowId(): string;
    set windowId(value: string);
    get windowIdInput(): string;
    private _targets?;
    get targets(): SsmMaintenanceWindowTaskTargets[];
    set targets(value: SsmMaintenanceWindowTaskTargets[]);
    resetTargets(): void;
    get targetsInput(): SsmMaintenanceWindowTaskTargets[];
    private _taskInvocationParameters;
    get taskInvocationParameters(): SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference;
    putTaskInvocationParameters(value: SsmMaintenanceWindowTaskTaskInvocationParameters): void;
    resetTaskInvocationParameters(): void;
    get taskInvocationParametersInput(): SsmMaintenanceWindowTaskTaskInvocationParameters;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ssm-maintenance-window-task.d.ts.map