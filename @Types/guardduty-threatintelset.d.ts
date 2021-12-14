import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS GuardDuty
*/
export interface GuarddutyThreatintelsetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_threatintelset.html#activate GuarddutyThreatintelset#activate}
    */
    readonly activate: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_threatintelset.html#detector_id GuarddutyThreatintelset#detector_id}
    */
    readonly detectorId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_threatintelset.html#format GuarddutyThreatintelset#format}
    */
    readonly format: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_threatintelset.html#location GuarddutyThreatintelset#location}
    */
    readonly location: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_threatintelset.html#name GuarddutyThreatintelset#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_threatintelset.html#tags GuarddutyThreatintelset#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_threatintelset.html#tags_all GuarddutyThreatintelset#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_threatintelset.html aws_guardduty_threatintelset}
*/
export declare class GuarddutyThreatintelset extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_threatintelset.html aws_guardduty_threatintelset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyThreatintelsetConfig
    */
    constructor(scope: Construct, id: string, config: GuarddutyThreatintelsetConfig);
    private _activate?;
    get activate(): boolean | cdktf.IResolvable;
    set activate(value: boolean | cdktf.IResolvable);
    get activateInput(): boolean | cdktf.IResolvable;
    get arn(): string;
    private _detectorId?;
    get detectorId(): string;
    set detectorId(value: string);
    get detectorIdInput(): string;
    private _format?;
    get format(): string;
    set format(value: string);
    get formatInput(): string;
    get id(): string;
    private _location?;
    get location(): string;
    set location(value: string);
    get locationInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
//# sourceMappingURL=guardduty-threatintelset.d.ts.map