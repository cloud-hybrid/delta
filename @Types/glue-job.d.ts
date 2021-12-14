import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Glue
*/
export interface GlueJobConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#connections GlueJob#connections}
    */
    readonly connections?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#default_arguments GlueJob#default_arguments}
    */
    readonly defaultArguments?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#description GlueJob#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#glue_version GlueJob#glue_version}
    */
    readonly glueVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#max_capacity GlueJob#max_capacity}
    */
    readonly maxCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#max_retries GlueJob#max_retries}
    */
    readonly maxRetries?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#name GlueJob#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#non_overridable_arguments GlueJob#non_overridable_arguments}
    */
    readonly nonOverridableArguments?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#number_of_workers GlueJob#number_of_workers}
    */
    readonly numberOfWorkers?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#role_arn GlueJob#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#security_configuration GlueJob#security_configuration}
    */
    readonly securityConfiguration?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#tags GlueJob#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#tags_all GlueJob#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#timeout GlueJob#timeout}
    */
    readonly timeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#worker_type GlueJob#worker_type}
    */
    readonly workerType?: string;
    /**
    * command block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#command GlueJob#command}
    */
    readonly command: GlueJobCommand;
    /**
    * execution_property block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#execution_property GlueJob#execution_property}
    */
    readonly executionProperty?: GlueJobExecutionProperty;
    /**
    * notification_property block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#notification_property GlueJob#notification_property}
    */
    readonly notificationProperty?: GlueJobNotificationProperty;
}
export interface GlueJobCommand {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#name GlueJob#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#python_version GlueJob#python_version}
    */
    readonly pythonVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#script_location GlueJob#script_location}
    */
    readonly scriptLocation: string;
}
export declare function glueJobCommandToTerraform(struct?: GlueJobCommandOutputReference | GlueJobCommand): any;
export declare class GlueJobCommandOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlueJobCommand | undefined;
    set internalValue(value: GlueJobCommand | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _pythonVersion?;
    get pythonVersion(): string;
    set pythonVersion(value: string);
    resetPythonVersion(): void;
    get pythonVersionInput(): string;
    private _scriptLocation?;
    get scriptLocation(): string;
    set scriptLocation(value: string);
    get scriptLocationInput(): string;
}
export interface GlueJobExecutionProperty {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#max_concurrent_runs GlueJob#max_concurrent_runs}
    */
    readonly maxConcurrentRuns?: number;
}
export declare function glueJobExecutionPropertyToTerraform(struct?: GlueJobExecutionPropertyOutputReference | GlueJobExecutionProperty): any;
export declare class GlueJobExecutionPropertyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlueJobExecutionProperty | undefined;
    set internalValue(value: GlueJobExecutionProperty | undefined);
    private _maxConcurrentRuns?;
    get maxConcurrentRuns(): number;
    set maxConcurrentRuns(value: number);
    resetMaxConcurrentRuns(): void;
    get maxConcurrentRunsInput(): number;
}
export interface GlueJobNotificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#notify_delay_after GlueJob#notify_delay_after}
    */
    readonly notifyDelayAfter?: number;
}
export declare function glueJobNotificationPropertyToTerraform(struct?: GlueJobNotificationPropertyOutputReference | GlueJobNotificationProperty): any;
export declare class GlueJobNotificationPropertyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlueJobNotificationProperty | undefined;
    set internalValue(value: GlueJobNotificationProperty | undefined);
    private _notifyDelayAfter?;
    get notifyDelayAfter(): number;
    set notifyDelayAfter(value: number);
    resetNotifyDelayAfter(): void;
    get notifyDelayAfterInput(): number;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html aws_glue_job}
*/
export declare class GlueJob extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html aws_glue_job} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueJobConfig
    */
    constructor(scope: Construct, id: string, config: GlueJobConfig);
    get arn(): string;
    private _connections?;
    get connections(): string[];
    set connections(value: string[]);
    resetConnections(): void;
    get connectionsInput(): string[];
    private _defaultArguments?;
    get defaultArguments(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set defaultArguments(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetDefaultArguments(): void;
    get defaultArgumentsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _glueVersion?;
    get glueVersion(): string;
    set glueVersion(value: string);
    resetGlueVersion(): void;
    get glueVersionInput(): string;
    get id(): string;
    private _maxCapacity?;
    get maxCapacity(): number;
    set maxCapacity(value: number);
    resetMaxCapacity(): void;
    get maxCapacityInput(): number;
    private _maxRetries?;
    get maxRetries(): number;
    set maxRetries(value: number);
    resetMaxRetries(): void;
    get maxRetriesInput(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _nonOverridableArguments?;
    get nonOverridableArguments(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set nonOverridableArguments(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetNonOverridableArguments(): void;
    get nonOverridableArgumentsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _numberOfWorkers?;
    get numberOfWorkers(): number;
    set numberOfWorkers(value: number);
    resetNumberOfWorkers(): void;
    get numberOfWorkersInput(): number;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _securityConfiguration?;
    get securityConfiguration(): string;
    set securityConfiguration(value: string);
    resetSecurityConfiguration(): void;
    get securityConfigurationInput(): string;
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
    private _timeout?;
    get timeout(): number;
    set timeout(value: number);
    resetTimeout(): void;
    get timeoutInput(): number;
    private _workerType?;
    get workerType(): string;
    set workerType(value: string);
    resetWorkerType(): void;
    get workerTypeInput(): string;
    private _command;
    get command(): GlueJobCommandOutputReference;
    putCommand(value: GlueJobCommand): void;
    get commandInput(): GlueJobCommand;
    private _executionProperty;
    get executionProperty(): GlueJobExecutionPropertyOutputReference;
    putExecutionProperty(value: GlueJobExecutionProperty): void;
    resetExecutionProperty(): void;
    get executionPropertyInput(): GlueJobExecutionProperty;
    private _notificationProperty;
    get notificationProperty(): GlueJobNotificationPropertyOutputReference;
    putNotificationProperty(value: GlueJobNotificationProperty): void;
    resetNotificationProperty(): void;
    get notificationPropertyInput(): GlueJobNotificationProperty;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=glue-job.d.ts.map