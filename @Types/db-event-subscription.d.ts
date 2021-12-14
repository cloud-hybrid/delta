import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Relational Database Service
*/
export interface DbEventSubscriptionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#enabled DbEventSubscription#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#event_categories DbEventSubscription#event_categories}
    */
    readonly eventCategories?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#name DbEventSubscription#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#name_prefix DbEventSubscription#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#sns_topic DbEventSubscription#sns_topic}
    */
    readonly snsTopic: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#source_ids DbEventSubscription#source_ids}
    */
    readonly sourceIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#source_type DbEventSubscription#source_type}
    */
    readonly sourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#tags DbEventSubscription#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#tags_all DbEventSubscription#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#timeouts DbEventSubscription#timeouts}
    */
    readonly timeouts?: DbEventSubscriptionTimeouts;
}
export interface DbEventSubscriptionTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#create DbEventSubscription#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#delete DbEventSubscription#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#update DbEventSubscription#update}
    */
    readonly update?: string;
}
export declare function dbEventSubscriptionTimeoutsToTerraform(struct?: DbEventSubscriptionTimeoutsOutputReference | DbEventSubscriptionTimeouts): any;
export declare class DbEventSubscriptionTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DbEventSubscriptionTimeouts | undefined;
    set internalValue(value: DbEventSubscriptionTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html aws_db_event_subscription}
*/
export declare class DbEventSubscription extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html aws_db_event_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbEventSubscriptionConfig
    */
    constructor(scope: Construct, id: string, config: DbEventSubscriptionConfig);
    get arn(): string;
    get customerAwsId(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _eventCategories?;
    get eventCategories(): string[];
    set eventCategories(value: string[]);
    resetEventCategories(): void;
    get eventCategoriesInput(): string[];
    get id(): string;
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
    private _snsTopic?;
    get snsTopic(): string;
    set snsTopic(value: string);
    get snsTopicInput(): string;
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
    get timeouts(): DbEventSubscriptionTimeoutsOutputReference;
    putTimeouts(value: DbEventSubscriptionTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): DbEventSubscriptionTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=db-event-subscription.d.ts.map