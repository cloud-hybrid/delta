import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudWatch Event Bridge
*/
export interface CloudwatchEventTargetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#arn CloudwatchEventTarget#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#event_bus_name CloudwatchEventTarget#event_bus_name}
    */
    readonly eventBusName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#input CloudwatchEventTarget#input}
    */
    readonly input?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#input_path CloudwatchEventTarget#input_path}
    */
    readonly inputPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#role_arn CloudwatchEventTarget#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#rule CloudwatchEventTarget#rule}
    */
    readonly rule: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#target_id CloudwatchEventTarget#target_id}
    */
    readonly targetId?: string;
    /**
    * batch_target block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#batch_target CloudwatchEventTarget#batch_target}
    */
    readonly batchTarget?: CloudwatchEventTargetBatchTarget;
    /**
    * dead_letter_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#dead_letter_config CloudwatchEventTarget#dead_letter_config}
    */
    readonly deadLetterConfig?: CloudwatchEventTargetDeadLetterConfig;
    /**
    * ecs_target block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#ecs_target CloudwatchEventTarget#ecs_target}
    */
    readonly ecsTarget?: CloudwatchEventTargetEcsTarget;
    /**
    * http_target block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#http_target CloudwatchEventTarget#http_target}
    */
    readonly httpTarget?: CloudwatchEventTargetHttpTarget;
    /**
    * input_transformer block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#input_transformer CloudwatchEventTarget#input_transformer}
    */
    readonly inputTransformer?: CloudwatchEventTargetInputTransformer;
    /**
    * kinesis_target block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#kinesis_target CloudwatchEventTarget#kinesis_target}
    */
    readonly kinesisTarget?: CloudwatchEventTargetKinesisTarget;
    /**
    * redshift_target block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#redshift_target CloudwatchEventTarget#redshift_target}
    */
    readonly redshiftTarget?: CloudwatchEventTargetRedshiftTarget;
    /**
    * retry_policy block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#retry_policy CloudwatchEventTarget#retry_policy}
    */
    readonly retryPolicy?: CloudwatchEventTargetRetryPolicy;
    /**
    * run_command_targets block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#run_command_targets CloudwatchEventTarget#run_command_targets}
    */
    readonly runCommandTargets?: CloudwatchEventTargetRunCommandTargets[];
    /**
    * sqs_target block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#sqs_target CloudwatchEventTarget#sqs_target}
    */
    readonly sqsTarget?: CloudwatchEventTargetSqsTarget;
}
export interface CloudwatchEventTargetBatchTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#array_size CloudwatchEventTarget#array_size}
    */
    readonly arraySize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#job_attempts CloudwatchEventTarget#job_attempts}
    */
    readonly jobAttempts?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#job_definition CloudwatchEventTarget#job_definition}
    */
    readonly jobDefinition: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#job_name CloudwatchEventTarget#job_name}
    */
    readonly jobName: string;
}
export declare function cloudwatchEventTargetBatchTargetToTerraform(struct?: CloudwatchEventTargetBatchTargetOutputReference | CloudwatchEventTargetBatchTarget): any;
export declare class CloudwatchEventTargetBatchTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudwatchEventTargetBatchTarget | undefined;
    set internalValue(value: CloudwatchEventTargetBatchTarget | undefined);
    private _arraySize?;
    get arraySize(): number;
    set arraySize(value: number);
    resetArraySize(): void;
    get arraySizeInput(): number;
    private _jobAttempts?;
    get jobAttempts(): number;
    set jobAttempts(value: number);
    resetJobAttempts(): void;
    get jobAttemptsInput(): number;
    private _jobDefinition?;
    get jobDefinition(): string;
    set jobDefinition(value: string);
    get jobDefinitionInput(): string;
    private _jobName?;
    get jobName(): string;
    set jobName(value: string);
    get jobNameInput(): string;
}
export interface CloudwatchEventTargetDeadLetterConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#arn CloudwatchEventTarget#arn}
    */
    readonly arn?: string;
}
export declare function cloudwatchEventTargetDeadLetterConfigToTerraform(struct?: CloudwatchEventTargetDeadLetterConfigOutputReference | CloudwatchEventTargetDeadLetterConfig): any;
export declare class CloudwatchEventTargetDeadLetterConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudwatchEventTargetDeadLetterConfig | undefined;
    set internalValue(value: CloudwatchEventTargetDeadLetterConfig | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    resetArn(): void;
    get arnInput(): string;
}
export interface CloudwatchEventTargetEcsTargetNetworkConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#assign_public_ip CloudwatchEventTarget#assign_public_ip}
    */
    readonly assignPublicIp?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#security_groups CloudwatchEventTarget#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#subnets CloudwatchEventTarget#subnets}
    */
    readonly subnets: string[];
}
export declare function cloudwatchEventTargetEcsTargetNetworkConfigurationToTerraform(struct?: CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference | CloudwatchEventTargetEcsTargetNetworkConfiguration): any;
export declare class CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudwatchEventTargetEcsTargetNetworkConfiguration | undefined;
    set internalValue(value: CloudwatchEventTargetEcsTargetNetworkConfiguration | undefined);
    private _assignPublicIp?;
    get assignPublicIp(): boolean | cdktf.IResolvable;
    set assignPublicIp(value: boolean | cdktf.IResolvable);
    resetAssignPublicIp(): void;
    get assignPublicIpInput(): boolean | cdktf.IResolvable;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[];
    private _subnets?;
    get subnets(): string[];
    set subnets(value: string[]);
    get subnetsInput(): string[];
}
export interface CloudwatchEventTargetEcsTargetPlacementConstraint {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#expression CloudwatchEventTarget#expression}
    */
    readonly expression?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#type CloudwatchEventTarget#type}
    */
    readonly type: string;
}
export declare function cloudwatchEventTargetEcsTargetPlacementConstraintToTerraform(struct?: CloudwatchEventTargetEcsTargetPlacementConstraint): any;
export interface CloudwatchEventTargetEcsTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#enable_ecs_managed_tags CloudwatchEventTarget#enable_ecs_managed_tags}
    */
    readonly enableEcsManagedTags?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#enable_execute_command CloudwatchEventTarget#enable_execute_command}
    */
    readonly enableExecuteCommand?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#group CloudwatchEventTarget#group}
    */
    readonly group?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#launch_type CloudwatchEventTarget#launch_type}
    */
    readonly launchType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#platform_version CloudwatchEventTarget#platform_version}
    */
    readonly platformVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#propagate_tags CloudwatchEventTarget#propagate_tags}
    */
    readonly propagateTags?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#tags CloudwatchEventTarget#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#task_count CloudwatchEventTarget#task_count}
    */
    readonly taskCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#task_definition_arn CloudwatchEventTarget#task_definition_arn}
    */
    readonly taskDefinitionArn: string;
    /**
    * network_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#network_configuration CloudwatchEventTarget#network_configuration}
    */
    readonly networkConfiguration?: CloudwatchEventTargetEcsTargetNetworkConfiguration;
    /**
    * placement_constraint block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#placement_constraint CloudwatchEventTarget#placement_constraint}
    */
    readonly placementConstraint?: CloudwatchEventTargetEcsTargetPlacementConstraint[];
}
export declare function cloudwatchEventTargetEcsTargetToTerraform(struct?: CloudwatchEventTargetEcsTargetOutputReference | CloudwatchEventTargetEcsTarget): any;
export declare class CloudwatchEventTargetEcsTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudwatchEventTargetEcsTarget | undefined;
    set internalValue(value: CloudwatchEventTargetEcsTarget | undefined);
    private _enableEcsManagedTags?;
    get enableEcsManagedTags(): boolean | cdktf.IResolvable;
    set enableEcsManagedTags(value: boolean | cdktf.IResolvable);
    resetEnableEcsManagedTags(): void;
    get enableEcsManagedTagsInput(): boolean | cdktf.IResolvable;
    private _enableExecuteCommand?;
    get enableExecuteCommand(): boolean | cdktf.IResolvable;
    set enableExecuteCommand(value: boolean | cdktf.IResolvable);
    resetEnableExecuteCommand(): void;
    get enableExecuteCommandInput(): boolean | cdktf.IResolvable;
    private _group?;
    get group(): string;
    set group(value: string);
    resetGroup(): void;
    get groupInput(): string;
    private _launchType?;
    get launchType(): string;
    set launchType(value: string);
    resetLaunchType(): void;
    get launchTypeInput(): string;
    private _platformVersion?;
    get platformVersion(): string;
    set platformVersion(value: string);
    resetPlatformVersion(): void;
    get platformVersionInput(): string;
    private _propagateTags?;
    get propagateTags(): string;
    set propagateTags(value: string);
    resetPropagateTags(): void;
    get propagateTagsInput(): string;
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
    private _taskCount?;
    get taskCount(): number;
    set taskCount(value: number);
    resetTaskCount(): void;
    get taskCountInput(): number;
    private _taskDefinitionArn?;
    get taskDefinitionArn(): string;
    set taskDefinitionArn(value: string);
    get taskDefinitionArnInput(): string;
    private _networkConfiguration;
    get networkConfiguration(): CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference;
    putNetworkConfiguration(value: CloudwatchEventTargetEcsTargetNetworkConfiguration): void;
    resetNetworkConfiguration(): void;
    get networkConfigurationInput(): CloudwatchEventTargetEcsTargetNetworkConfiguration;
    private _placementConstraint?;
    get placementConstraint(): CloudwatchEventTargetEcsTargetPlacementConstraint[];
    set placementConstraint(value: CloudwatchEventTargetEcsTargetPlacementConstraint[]);
    resetPlacementConstraint(): void;
    get placementConstraintInput(): CloudwatchEventTargetEcsTargetPlacementConstraint[];
}
export interface CloudwatchEventTargetHttpTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#header_parameters CloudwatchEventTarget#header_parameters}
    */
    readonly headerParameters?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#path_parameter_values CloudwatchEventTarget#path_parameter_values}
    */
    readonly pathParameterValues?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#query_string_parameters CloudwatchEventTarget#query_string_parameters}
    */
    readonly queryStringParameters?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare function cloudwatchEventTargetHttpTargetToTerraform(struct?: CloudwatchEventTargetHttpTargetOutputReference | CloudwatchEventTargetHttpTarget): any;
export declare class CloudwatchEventTargetHttpTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudwatchEventTargetHttpTarget | undefined;
    set internalValue(value: CloudwatchEventTargetHttpTarget | undefined);
    private _headerParameters?;
    get headerParameters(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set headerParameters(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetHeaderParameters(): void;
    get headerParametersInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _pathParameterValues?;
    get pathParameterValues(): string[];
    set pathParameterValues(value: string[]);
    resetPathParameterValues(): void;
    get pathParameterValuesInput(): string[];
    private _queryStringParameters?;
    get queryStringParameters(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set queryStringParameters(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetQueryStringParameters(): void;
    get queryStringParametersInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
}
export interface CloudwatchEventTargetInputTransformer {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#input_paths CloudwatchEventTarget#input_paths}
    */
    readonly inputPaths?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#input_template CloudwatchEventTarget#input_template}
    */
    readonly inputTemplate: string;
}
export declare function cloudwatchEventTargetInputTransformerToTerraform(struct?: CloudwatchEventTargetInputTransformerOutputReference | CloudwatchEventTargetInputTransformer): any;
export declare class CloudwatchEventTargetInputTransformerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudwatchEventTargetInputTransformer | undefined;
    set internalValue(value: CloudwatchEventTargetInputTransformer | undefined);
    private _inputPaths?;
    get inputPaths(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set inputPaths(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetInputPaths(): void;
    get inputPathsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _inputTemplate?;
    get inputTemplate(): string;
    set inputTemplate(value: string);
    get inputTemplateInput(): string;
}
export interface CloudwatchEventTargetKinesisTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#partition_key_path CloudwatchEventTarget#partition_key_path}
    */
    readonly partitionKeyPath?: string;
}
export declare function cloudwatchEventTargetKinesisTargetToTerraform(struct?: CloudwatchEventTargetKinesisTargetOutputReference | CloudwatchEventTargetKinesisTarget): any;
export declare class CloudwatchEventTargetKinesisTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudwatchEventTargetKinesisTarget | undefined;
    set internalValue(value: CloudwatchEventTargetKinesisTarget | undefined);
    private _partitionKeyPath?;
    get partitionKeyPath(): string;
    set partitionKeyPath(value: string);
    resetPartitionKeyPath(): void;
    get partitionKeyPathInput(): string;
}
export interface CloudwatchEventTargetRedshiftTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#database CloudwatchEventTarget#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#db_user CloudwatchEventTarget#db_user}
    */
    readonly dbUser?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#secrets_manager_arn CloudwatchEventTarget#secrets_manager_arn}
    */
    readonly secretsManagerArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#sql CloudwatchEventTarget#sql}
    */
    readonly sql?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#statement_name CloudwatchEventTarget#statement_name}
    */
    readonly statementName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#with_event CloudwatchEventTarget#with_event}
    */
    readonly withEvent?: boolean | cdktf.IResolvable;
}
export declare function cloudwatchEventTargetRedshiftTargetToTerraform(struct?: CloudwatchEventTargetRedshiftTargetOutputReference | CloudwatchEventTargetRedshiftTarget): any;
export declare class CloudwatchEventTargetRedshiftTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudwatchEventTargetRedshiftTarget | undefined;
    set internalValue(value: CloudwatchEventTargetRedshiftTarget | undefined);
    private _database?;
    get database(): string;
    set database(value: string);
    get databaseInput(): string;
    private _dbUser?;
    get dbUser(): string;
    set dbUser(value: string);
    resetDbUser(): void;
    get dbUserInput(): string;
    private _secretsManagerArn?;
    get secretsManagerArn(): string;
    set secretsManagerArn(value: string);
    resetSecretsManagerArn(): void;
    get secretsManagerArnInput(): string;
    private _sql?;
    get sql(): string;
    set sql(value: string);
    resetSql(): void;
    get sqlInput(): string;
    private _statementName?;
    get statementName(): string;
    set statementName(value: string);
    resetStatementName(): void;
    get statementNameInput(): string;
    private _withEvent?;
    get withEvent(): boolean | cdktf.IResolvable;
    set withEvent(value: boolean | cdktf.IResolvable);
    resetWithEvent(): void;
    get withEventInput(): boolean | cdktf.IResolvable;
}
export interface CloudwatchEventTargetRetryPolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#maximum_event_age_in_seconds CloudwatchEventTarget#maximum_event_age_in_seconds}
    */
    readonly maximumEventAgeInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#maximum_retry_attempts CloudwatchEventTarget#maximum_retry_attempts}
    */
    readonly maximumRetryAttempts?: number;
}
export declare function cloudwatchEventTargetRetryPolicyToTerraform(struct?: CloudwatchEventTargetRetryPolicyOutputReference | CloudwatchEventTargetRetryPolicy): any;
export declare class CloudwatchEventTargetRetryPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudwatchEventTargetRetryPolicy | undefined;
    set internalValue(value: CloudwatchEventTargetRetryPolicy | undefined);
    private _maximumEventAgeInSeconds?;
    get maximumEventAgeInSeconds(): number;
    set maximumEventAgeInSeconds(value: number);
    resetMaximumEventAgeInSeconds(): void;
    get maximumEventAgeInSecondsInput(): number;
    private _maximumRetryAttempts?;
    get maximumRetryAttempts(): number;
    set maximumRetryAttempts(value: number);
    resetMaximumRetryAttempts(): void;
    get maximumRetryAttemptsInput(): number;
}
export interface CloudwatchEventTargetRunCommandTargets {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#key CloudwatchEventTarget#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#values CloudwatchEventTarget#values}
    */
    readonly values: string[];
}
export declare function cloudwatchEventTargetRunCommandTargetsToTerraform(struct?: CloudwatchEventTargetRunCommandTargets): any;
export interface CloudwatchEventTargetSqsTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#message_group_id CloudwatchEventTarget#message_group_id}
    */
    readonly messageGroupId?: string;
}
export declare function cloudwatchEventTargetSqsTargetToTerraform(struct?: CloudwatchEventTargetSqsTargetOutputReference | CloudwatchEventTargetSqsTarget): any;
export declare class CloudwatchEventTargetSqsTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudwatchEventTargetSqsTarget | undefined;
    set internalValue(value: CloudwatchEventTargetSqsTarget | undefined);
    private _messageGroupId?;
    get messageGroupId(): string;
    set messageGroupId(value: string);
    resetMessageGroupId(): void;
    get messageGroupIdInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html aws_cloudwatch_event_target}
*/
export declare class CloudwatchEventTarget extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html aws_cloudwatch_event_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventTargetConfig
    */
    constructor(scope: Construct, id: string, config: CloudwatchEventTargetConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _eventBusName?;
    get eventBusName(): string;
    set eventBusName(value: string);
    resetEventBusName(): void;
    get eventBusNameInput(): string;
    get id(): string;
    private _input?;
    get input(): string;
    set input(value: string);
    resetInput(): void;
    get inputInput(): string;
    private _inputPath?;
    get inputPath(): string;
    set inputPath(value: string);
    resetInputPath(): void;
    get inputPathInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string;
    private _rule?;
    get rule(): string;
    set rule(value: string);
    get ruleInput(): string;
    private _targetId?;
    get targetId(): string;
    set targetId(value: string);
    resetTargetId(): void;
    get targetIdInput(): string;
    private _batchTarget;
    get batchTarget(): CloudwatchEventTargetBatchTargetOutputReference;
    putBatchTarget(value: CloudwatchEventTargetBatchTarget): void;
    resetBatchTarget(): void;
    get batchTargetInput(): CloudwatchEventTargetBatchTarget;
    private _deadLetterConfig;
    get deadLetterConfig(): CloudwatchEventTargetDeadLetterConfigOutputReference;
    putDeadLetterConfig(value: CloudwatchEventTargetDeadLetterConfig): void;
    resetDeadLetterConfig(): void;
    get deadLetterConfigInput(): CloudwatchEventTargetDeadLetterConfig;
    private _ecsTarget;
    get ecsTarget(): CloudwatchEventTargetEcsTargetOutputReference;
    putEcsTarget(value: CloudwatchEventTargetEcsTarget): void;
    resetEcsTarget(): void;
    get ecsTargetInput(): CloudwatchEventTargetEcsTarget;
    private _httpTarget;
    get httpTarget(): CloudwatchEventTargetHttpTargetOutputReference;
    putHttpTarget(value: CloudwatchEventTargetHttpTarget): void;
    resetHttpTarget(): void;
    get httpTargetInput(): CloudwatchEventTargetHttpTarget;
    private _inputTransformer;
    get inputTransformer(): CloudwatchEventTargetInputTransformerOutputReference;
    putInputTransformer(value: CloudwatchEventTargetInputTransformer): void;
    resetInputTransformer(): void;
    get inputTransformerInput(): CloudwatchEventTargetInputTransformer;
    private _kinesisTarget;
    get kinesisTarget(): CloudwatchEventTargetKinesisTargetOutputReference;
    putKinesisTarget(value: CloudwatchEventTargetKinesisTarget): void;
    resetKinesisTarget(): void;
    get kinesisTargetInput(): CloudwatchEventTargetKinesisTarget;
    private _redshiftTarget;
    get redshiftTarget(): CloudwatchEventTargetRedshiftTargetOutputReference;
    putRedshiftTarget(value: CloudwatchEventTargetRedshiftTarget): void;
    resetRedshiftTarget(): void;
    get redshiftTargetInput(): CloudwatchEventTargetRedshiftTarget;
    private _retryPolicy;
    get retryPolicy(): CloudwatchEventTargetRetryPolicyOutputReference;
    putRetryPolicy(value: CloudwatchEventTargetRetryPolicy): void;
    resetRetryPolicy(): void;
    get retryPolicyInput(): CloudwatchEventTargetRetryPolicy;
    private _runCommandTargets?;
    get runCommandTargets(): CloudwatchEventTargetRunCommandTargets[];
    set runCommandTargets(value: CloudwatchEventTargetRunCommandTargets[]);
    resetRunCommandTargets(): void;
    get runCommandTargetsInput(): CloudwatchEventTargetRunCommandTargets[];
    private _sqsTarget;
    get sqsTarget(): CloudwatchEventTargetSqsTargetOutputReference;
    putSqsTarget(value: CloudwatchEventTargetSqsTarget): void;
    resetSqsTarget(): void;
    get sqsTargetInput(): CloudwatchEventTargetSqsTarget;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cloudwatch-event-target.d.ts.map