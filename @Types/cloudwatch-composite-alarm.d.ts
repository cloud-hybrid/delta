import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudWatch
*/
export interface CloudwatchCompositeAlarmConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html#actions_enabled CloudwatchCompositeAlarm#actions_enabled}
    */
    readonly actionsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html#alarm_actions CloudwatchCompositeAlarm#alarm_actions}
    */
    readonly alarmActions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html#alarm_description CloudwatchCompositeAlarm#alarm_description}
    */
    readonly alarmDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html#alarm_name CloudwatchCompositeAlarm#alarm_name}
    */
    readonly alarmName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html#alarm_rule CloudwatchCompositeAlarm#alarm_rule}
    */
    readonly alarmRule: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html#insufficient_data_actions CloudwatchCompositeAlarm#insufficient_data_actions}
    */
    readonly insufficientDataActions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html#ok_actions CloudwatchCompositeAlarm#ok_actions}
    */
    readonly okActions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html#tags CloudwatchCompositeAlarm#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html#tags_all CloudwatchCompositeAlarm#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html aws_cloudwatch_composite_alarm}
*/
export declare class CloudwatchCompositeAlarm extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html aws_cloudwatch_composite_alarm} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchCompositeAlarmConfig
    */
    constructor(scope: Construct, id: string, config: CloudwatchCompositeAlarmConfig);
    private _actionsEnabled?;
    get actionsEnabled(): boolean | cdktf.IResolvable;
    set actionsEnabled(value: boolean | cdktf.IResolvable);
    resetActionsEnabled(): void;
    get actionsEnabledInput(): boolean | cdktf.IResolvable;
    private _alarmActions?;
    get alarmActions(): string[];
    set alarmActions(value: string[]);
    resetAlarmActions(): void;
    get alarmActionsInput(): string[];
    private _alarmDescription?;
    get alarmDescription(): string;
    set alarmDescription(value: string);
    resetAlarmDescription(): void;
    get alarmDescriptionInput(): string;
    private _alarmName?;
    get alarmName(): string;
    set alarmName(value: string);
    get alarmNameInput(): string;
    private _alarmRule?;
    get alarmRule(): string;
    set alarmRule(value: string);
    get alarmRuleInput(): string;
    get arn(): string;
    get id(): string;
    private _insufficientDataActions?;
    get insufficientDataActions(): string[];
    set insufficientDataActions(value: string[]);
    resetInsufficientDataActions(): void;
    get insufficientDataActionsInput(): string[];
    private _okActions?;
    get okActions(): string[];
    set okActions(value: string[]);
    resetOkActions(): void;
    get okActionsInput(): string[];
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cloudwatch-composite-alarm.d.ts.map