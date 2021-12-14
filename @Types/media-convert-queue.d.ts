import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS MediaConvert
*/
export interface MediaConvertQueueConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html#description MediaConvertQueue#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html#name MediaConvertQueue#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html#pricing_plan MediaConvertQueue#pricing_plan}
    */
    readonly pricingPlan?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html#status MediaConvertQueue#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html#tags MediaConvertQueue#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html#tags_all MediaConvertQueue#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * reservation_plan_settings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html#reservation_plan_settings MediaConvertQueue#reservation_plan_settings}
    */
    readonly reservationPlanSettings?: MediaConvertQueueReservationPlanSettings;
}
export interface MediaConvertQueueReservationPlanSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html#commitment MediaConvertQueue#commitment}
    */
    readonly commitment: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html#renewal_type MediaConvertQueue#renewal_type}
    */
    readonly renewalType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html#reserved_slots MediaConvertQueue#reserved_slots}
    */
    readonly reservedSlots: number;
}
export declare function mediaConvertQueueReservationPlanSettingsToTerraform(struct?: MediaConvertQueueReservationPlanSettingsOutputReference | MediaConvertQueueReservationPlanSettings): any;
export declare class MediaConvertQueueReservationPlanSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): MediaConvertQueueReservationPlanSettings | undefined;
    set internalValue(value: MediaConvertQueueReservationPlanSettings | undefined);
    private _commitment?;
    get commitment(): string;
    set commitment(value: string);
    get commitmentInput(): string;
    private _renewalType?;
    get renewalType(): string;
    set renewalType(value: string);
    get renewalTypeInput(): string;
    private _reservedSlots?;
    get reservedSlots(): number;
    set reservedSlots(value: number);
    get reservedSlotsInput(): number;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html aws_media_convert_queue}
*/
export declare class MediaConvertQueue extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html aws_media_convert_queue} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MediaConvertQueueConfig
    */
    constructor(scope: Construct, id: string, config: MediaConvertQueueConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _pricingPlan?;
    get pricingPlan(): string;
    set pricingPlan(value: string);
    resetPricingPlan(): void;
    get pricingPlanInput(): string;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string;
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
    private _reservationPlanSettings;
    get reservationPlanSettings(): MediaConvertQueueReservationPlanSettingsOutputReference;
    putReservationPlanSettings(value: MediaConvertQueueReservationPlanSettings): void;
    resetReservationPlanSettings(): void;
    get reservationPlanSettingsInput(): MediaConvertQueueReservationPlanSettings;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=media-convert-queue.d.ts.map