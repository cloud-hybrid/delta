import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudWatch Event Bridge
*/
export interface CloudwatchEventRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html#description CloudwatchEventRule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html#event_bus_name CloudwatchEventRule#event_bus_name}
    */
    readonly eventBusName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html#event_pattern CloudwatchEventRule#event_pattern}
    */
    readonly eventPattern?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html#is_enabled CloudwatchEventRule#is_enabled}
    */
    readonly isEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html#name CloudwatchEventRule#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html#name_prefix CloudwatchEventRule#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html#role_arn CloudwatchEventRule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html#schedule_expression CloudwatchEventRule#schedule_expression}
    */
    readonly scheduleExpression?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html#tags CloudwatchEventRule#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html#tags_all CloudwatchEventRule#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html aws_cloudwatch_event_rule}
*/
export declare class CloudwatchEventRule extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html aws_cloudwatch_event_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventRuleConfig = {}
    */
    constructor(scope: Construct, id: string, config?: CloudwatchEventRuleConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _eventBusName?;
    get eventBusName(): string;
    set eventBusName(value: string);
    resetEventBusName(): void;
    get eventBusNameInput(): string;
    private _eventPattern?;
    get eventPattern(): string;
    set eventPattern(value: string);
    resetEventPattern(): void;
    get eventPatternInput(): string;
    get id(): string;
    private _isEnabled?;
    get isEnabled(): boolean | cdktf.IResolvable;
    set isEnabled(value: boolean | cdktf.IResolvable);
    resetIsEnabled(): void;
    get isEnabledInput(): boolean | cdktf.IResolvable;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string;
    private _scheduleExpression?;
    get scheduleExpression(): string;
    set scheduleExpression(value: string);
    resetScheduleExpression(): void;
    get scheduleExpressionInput(): string;
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
//# sourceMappingURL=cloudwatch-event-rule.d.ts.map