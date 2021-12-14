import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Pinpoint
*/
export interface PinpointAppConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#name PinpointApp#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#name_prefix PinpointApp#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#tags PinpointApp#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#tags_all PinpointApp#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * campaign_hook block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#campaign_hook PinpointApp#campaign_hook}
    */
    readonly campaignHook?: PinpointAppCampaignHook;
    /**
    * limits block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#limits PinpointApp#limits}
    */
    readonly limits?: PinpointAppLimits;
    /**
    * quiet_time block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#quiet_time PinpointApp#quiet_time}
    */
    readonly quietTime?: PinpointAppQuietTime;
}
export interface PinpointAppCampaignHook {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#lambda_function_name PinpointApp#lambda_function_name}
    */
    readonly lambdaFunctionName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#mode PinpointApp#mode}
    */
    readonly mode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#web_url PinpointApp#web_url}
    */
    readonly webUrl?: string;
}
export declare function pinpointAppCampaignHookToTerraform(struct?: PinpointAppCampaignHookOutputReference | PinpointAppCampaignHook): any;
export declare class PinpointAppCampaignHookOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): PinpointAppCampaignHook | undefined;
    set internalValue(value: PinpointAppCampaignHook | undefined);
    private _lambdaFunctionName?;
    get lambdaFunctionName(): string;
    set lambdaFunctionName(value: string);
    resetLambdaFunctionName(): void;
    get lambdaFunctionNameInput(): string;
    private _mode?;
    get mode(): string;
    set mode(value: string);
    resetMode(): void;
    get modeInput(): string;
    private _webUrl?;
    get webUrl(): string;
    set webUrl(value: string);
    resetWebUrl(): void;
    get webUrlInput(): string;
}
export interface PinpointAppLimits {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#daily PinpointApp#daily}
    */
    readonly daily?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#maximum_duration PinpointApp#maximum_duration}
    */
    readonly maximumDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#messages_per_second PinpointApp#messages_per_second}
    */
    readonly messagesPerSecond?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#total PinpointApp#total}
    */
    readonly total?: number;
}
export declare function pinpointAppLimitsToTerraform(struct?: PinpointAppLimitsOutputReference | PinpointAppLimits): any;
export declare class PinpointAppLimitsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): PinpointAppLimits | undefined;
    set internalValue(value: PinpointAppLimits | undefined);
    private _daily?;
    get daily(): number;
    set daily(value: number);
    resetDaily(): void;
    get dailyInput(): number;
    private _maximumDuration?;
    get maximumDuration(): number;
    set maximumDuration(value: number);
    resetMaximumDuration(): void;
    get maximumDurationInput(): number;
    private _messagesPerSecond?;
    get messagesPerSecond(): number;
    set messagesPerSecond(value: number);
    resetMessagesPerSecond(): void;
    get messagesPerSecondInput(): number;
    private _total?;
    get total(): number;
    set total(value: number);
    resetTotal(): void;
    get totalInput(): number;
}
export interface PinpointAppQuietTime {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#end PinpointApp#end}
    */
    readonly end?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#start PinpointApp#start}
    */
    readonly start?: string;
}
export declare function pinpointAppQuietTimeToTerraform(struct?: PinpointAppQuietTimeOutputReference | PinpointAppQuietTime): any;
export declare class PinpointAppQuietTimeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): PinpointAppQuietTime | undefined;
    set internalValue(value: PinpointAppQuietTime | undefined);
    private _end?;
    get end(): string;
    set end(value: string);
    resetEnd(): void;
    get endInput(): string;
    private _start?;
    get start(): string;
    set start(value: string);
    resetStart(): void;
    get startInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html aws_pinpoint_app}
*/
export declare class PinpointApp extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html aws_pinpoint_app} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PinpointAppConfig = {}
    */
    constructor(scope: Construct, id: string, config?: PinpointAppConfig);
    get applicationId(): string;
    get arn(): string;
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
    private _campaignHook;
    get campaignHook(): PinpointAppCampaignHookOutputReference;
    putCampaignHook(value: PinpointAppCampaignHook): void;
    resetCampaignHook(): void;
    get campaignHookInput(): PinpointAppCampaignHook;
    private _limits;
    get limits(): PinpointAppLimitsOutputReference;
    putLimits(value: PinpointAppLimits): void;
    resetLimits(): void;
    get limitsInput(): PinpointAppLimits;
    private _quietTime;
    get quietTime(): PinpointAppQuietTimeOutputReference;
    putQuietTime(value: PinpointAppQuietTime): void;
    resetQuietTime(): void;
    get quietTimeInput(): PinpointAppQuietTime;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=pinpoint-app.d.ts.map