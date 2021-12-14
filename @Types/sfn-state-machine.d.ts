import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Step Functions
*/
export interface SfnStateMachineConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#definition SfnStateMachine#definition}
    */
    readonly definition: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#name SfnStateMachine#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#role_arn SfnStateMachine#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#tags SfnStateMachine#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#tags_all SfnStateMachine#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#type SfnStateMachine#type}
    */
    readonly type?: string;
    /**
    * logging_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#logging_configuration SfnStateMachine#logging_configuration}
    */
    readonly loggingConfiguration?: SfnStateMachineLoggingConfiguration;
    /**
    * tracing_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#tracing_configuration SfnStateMachine#tracing_configuration}
    */
    readonly tracingConfiguration?: SfnStateMachineTracingConfiguration;
}
export interface SfnStateMachineLoggingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#include_execution_data SfnStateMachine#include_execution_data}
    */
    readonly includeExecutionData?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#level SfnStateMachine#level}
    */
    readonly level?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#log_destination SfnStateMachine#log_destination}
    */
    readonly logDestination?: string;
}
export declare function sfnStateMachineLoggingConfigurationToTerraform(struct?: SfnStateMachineLoggingConfigurationOutputReference | SfnStateMachineLoggingConfiguration): any;
export declare class SfnStateMachineLoggingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SfnStateMachineLoggingConfiguration | undefined;
    set internalValue(value: SfnStateMachineLoggingConfiguration | undefined);
    private _includeExecutionData?;
    get includeExecutionData(): boolean | cdktf.IResolvable;
    set includeExecutionData(value: boolean | cdktf.IResolvable);
    resetIncludeExecutionData(): void;
    get includeExecutionDataInput(): boolean | cdktf.IResolvable;
    private _level?;
    get level(): string;
    set level(value: string);
    resetLevel(): void;
    get levelInput(): string;
    private _logDestination?;
    get logDestination(): string;
    set logDestination(value: string);
    resetLogDestination(): void;
    get logDestinationInput(): string;
}
export interface SfnStateMachineTracingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#enabled SfnStateMachine#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function sfnStateMachineTracingConfigurationToTerraform(struct?: SfnStateMachineTracingConfigurationOutputReference | SfnStateMachineTracingConfiguration): any;
export declare class SfnStateMachineTracingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SfnStateMachineTracingConfiguration | undefined;
    set internalValue(value: SfnStateMachineTracingConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html aws_sfn_state_machine}
*/
export declare class SfnStateMachine extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html aws_sfn_state_machine} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SfnStateMachineConfig
    */
    constructor(scope: Construct, id: string, config: SfnStateMachineConfig);
    get arn(): string;
    get creationDate(): string;
    private _definition?;
    get definition(): string;
    set definition(value: string);
    get definitionInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
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
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
    private _loggingConfiguration;
    get loggingConfiguration(): SfnStateMachineLoggingConfigurationOutputReference;
    putLoggingConfiguration(value: SfnStateMachineLoggingConfiguration): void;
    resetLoggingConfiguration(): void;
    get loggingConfigurationInput(): SfnStateMachineLoggingConfiguration;
    private _tracingConfiguration;
    get tracingConfiguration(): SfnStateMachineTracingConfigurationOutputReference;
    putTracingConfiguration(value: SfnStateMachineTracingConfiguration): void;
    resetTracingConfiguration(): void;
    get tracingConfigurationInput(): SfnStateMachineTracingConfiguration;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=sfn-state-machine.d.ts.map