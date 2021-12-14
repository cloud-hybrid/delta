import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Database Migration Service
*/
export interface DmsEventSubscriptionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#enabled DmsEventSubscription#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#event_categories DmsEventSubscription#event_categories}
    */
    readonly eventCategories: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#name DmsEventSubscription#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#sns_topic_arn DmsEventSubscription#sns_topic_arn}
    */
    readonly snsTopicArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#source_ids DmsEventSubscription#source_ids}
    */
    readonly sourceIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#source_type DmsEventSubscription#source_type}
    */
    readonly sourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#tags DmsEventSubscription#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#tags_all DmsEventSubscription#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#timeouts DmsEventSubscription#timeouts}
    */
    readonly timeouts?: DmsEventSubscriptionTimeouts;
}
export interface DmsEventSubscriptionTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#create DmsEventSubscription#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#delete DmsEventSubscription#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#update DmsEventSubscription#update}
    */
    readonly update?: string;
}
export declare function dmsEventSubscriptionTimeoutsToTerraform(struct?: DmsEventSubscriptionTimeoutsOutputReference | DmsEventSubscriptionTimeouts): any;
export declare class DmsEventSubscriptionTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DmsEventSubscriptionTimeouts | undefined;
    set internalValue(value: DmsEventSubscriptionTimeouts | undefined);
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
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html aws_dms_event_subscription}
*/
export declare class DmsEventSubscription extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html aws_dms_event_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DmsEventSubscriptionConfig
    */
    constructor(scope: Construct, id: string, config: DmsEventSubscriptionConfig);
    get arn(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _eventCategories?;
    get eventCategories(): string[];
    set eventCategories(value: string[]);
    get eventCategoriesInput(): string[];
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _snsTopicArn?;
    get snsTopicArn(): string;
    set snsTopicArn(value: string);
    get snsTopicArnInput(): string;
    private _sourceIds?;
    get sourceIds(): string[];
    set sourceIds(value: string[]);
    resetSourceIds(): void;
    get sourceIdsInput(): string[];
    private _sourceType?;
    get sourceType(): string;
    set sourceType(value: string);
    resetSourceType(): void;
    get sourceTypeInput(): string;
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
    private _timeouts;
    get timeouts(): DmsEventSubscriptionTimeoutsOutputReference;
    putTimeouts(value: DmsEventSubscriptionTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): DmsEventSubscriptionTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=dms-event-subscription.d.ts.map