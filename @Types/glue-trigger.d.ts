import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Glue
*/
export interface GlueTriggerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#description GlueTrigger#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#enabled GlueTrigger#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#name GlueTrigger#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#schedule GlueTrigger#schedule}
    */
    readonly schedule?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#tags GlueTrigger#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#tags_all GlueTrigger#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#type GlueTrigger#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#workflow_name GlueTrigger#workflow_name}
    */
    readonly workflowName?: string;
    /**
    * actions block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#actions GlueTrigger#actions}
    */
    readonly actions: GlueTriggerActions[];
    /**
    * predicate block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#predicate GlueTrigger#predicate}
    */
    readonly predicate?: GlueTriggerPredicate;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#timeouts GlueTrigger#timeouts}
    */
    readonly timeouts?: GlueTriggerTimeouts;
}
export interface GlueTriggerActionsNotificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#notify_delay_after GlueTrigger#notify_delay_after}
    */
    readonly notifyDelayAfter?: number;
}
export declare function glueTriggerActionsNotificationPropertyToTerraform(struct?: GlueTriggerActionsNotificationPropertyOutputReference | GlueTriggerActionsNotificationProperty): any;
export declare class GlueTriggerActionsNotificationPropertyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlueTriggerActionsNotificationProperty | undefined;
    set internalValue(value: GlueTriggerActionsNotificationProperty | undefined);
    private _notifyDelayAfter?;
    get notifyDelayAfter(): number;
    set notifyDelayAfter(value: number);
    resetNotifyDelayAfter(): void;
    get notifyDelayAfterInput(): number;
}
export interface GlueTriggerActions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#arguments GlueTrigger#arguments}
    */
    readonly arguments?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#crawler_name GlueTrigger#crawler_name}
    */
    readonly crawlerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#job_name GlueTrigger#job_name}
    */
    readonly jobName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#security_configuration GlueTrigger#security_configuration}
    */
    readonly securityConfiguration?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#timeout GlueTrigger#timeout}
    */
    readonly timeout?: number;
    /**
    * notification_property block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#notification_property GlueTrigger#notification_property}
    */
    readonly notificationProperty?: GlueTriggerActionsNotificationProperty;
}
export declare function glueTriggerActionsToTerraform(struct?: GlueTriggerActions): any;
export interface GlueTriggerPredicateConditions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#crawl_state GlueTrigger#crawl_state}
    */
    readonly crawlState?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#crawler_name GlueTrigger#crawler_name}
    */
    readonly crawlerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#job_name GlueTrigger#job_name}
    */
    readonly jobName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#logical_operator GlueTrigger#logical_operator}
    */
    readonly logicalOperator?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#state GlueTrigger#state}
    */
    readonly state?: string;
}
export declare function glueTriggerPredicateConditionsToTerraform(struct?: GlueTriggerPredicateConditions): any;
export interface GlueTriggerPredicate {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#logical GlueTrigger#logical}
    */
    readonly logical?: string;
    /**
    * conditions block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#conditions GlueTrigger#conditions}
    */
    readonly conditions: GlueTriggerPredicateConditions[];
}
export declare function glueTriggerPredicateToTerraform(struct?: GlueTriggerPredicateOutputReference | GlueTriggerPredicate): any;
export declare class GlueTriggerPredicateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlueTriggerPredicate | undefined;
    set internalValue(value: GlueTriggerPredicate | undefined);
    private _logical?;
    get logical(): string;
    set logical(value: string);
    resetLogical(): void;
    get logicalInput(): string;
    private _conditions?;
    get conditions(): GlueTriggerPredicateConditions[];
    set conditions(value: GlueTriggerPredicateConditions[]);
    get conditionsInput(): GlueTriggerPredicateConditions[];
}
export interface GlueTriggerTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#create GlueTrigger#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#delete GlueTrigger#delete}
    */
    readonly delete?: string;
}
export declare function glueTriggerTimeoutsToTerraform(struct?: GlueTriggerTimeoutsOutputReference | GlueTriggerTimeouts): any;
export declare class GlueTriggerTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlueTriggerTimeouts | undefined;
    set internalValue(value: GlueTriggerTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html aws_glue_trigger}
*/
export declare class GlueTrigger extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html aws_glue_trigger} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueTriggerConfig
    */
    constructor(scope: Construct, id: string, config: GlueTriggerConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _schedule?;
    get schedule(): string;
    set schedule(value: string);
    resetSchedule(): void;
    get scheduleInput(): string;
    get state(): string;
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
    get typeInput(): string;
    private _workflowName?;
    get workflowName(): string;
    set workflowName(value: string);
    resetWorkflowName(): void;
    get workflowNameInput(): string;
    private _actions?;
    get actions(): GlueTriggerActions[];
    set actions(value: GlueTriggerActions[]);
    get actionsInput(): GlueTriggerActions[];
    private _predicate;
    get predicate(): GlueTriggerPredicateOutputReference;
    putPredicate(value: GlueTriggerPredicate): void;
    resetPredicate(): void;
    get predicateInput(): GlueTriggerPredicate;
    private _timeouts;
    get timeouts(): GlueTriggerTimeoutsOutputReference;
    putTimeouts(value: GlueTriggerTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): GlueTriggerTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=glue-trigger.d.ts.map