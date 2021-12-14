import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* Amazon Chime
*/
export interface ChimeVoiceConnectorTerminationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination.html#calling_regions ChimeVoiceConnectorTermination#calling_regions}
    */
    readonly callingRegions: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination.html#cidr_allow_list ChimeVoiceConnectorTermination#cidr_allow_list}
    */
    readonly cidrAllowList: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination.html#cps_limit ChimeVoiceConnectorTermination#cps_limit}
    */
    readonly cpsLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination.html#default_phone_number ChimeVoiceConnectorTermination#default_phone_number}
    */
    readonly defaultPhoneNumber?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination.html#disabled ChimeVoiceConnectorTermination#disabled}
    */
    readonly disabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination.html#voice_connector_id ChimeVoiceConnectorTermination#voice_connector_id}
    */
    readonly voiceConnectorId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination.html aws_chime_voice_connector_termination}
*/
export declare class ChimeVoiceConnectorTermination extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination.html aws_chime_voice_connector_termination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimeVoiceConnectorTerminationConfig
    */
    constructor(scope: Construct, id: string, config: ChimeVoiceConnectorTerminationConfig);
    private _callingRegions?;
    get callingRegions(): string[];
    set callingRegions(value: string[]);
    get callingRegionsInput(): string[];
    private _cidrAllowList?;
    get cidrAllowList(): string[];
    set cidrAllowList(value: string[]);
    get cidrAllowListInput(): string[];
    private _cpsLimit?;
    get cpsLimit(): number;
    set cpsLimit(value: number);
    resetCpsLimit(): void;
    get cpsLimitInput(): number;
    private _defaultPhoneNumber?;
    get defaultPhoneNumber(): string;
    set defaultPhoneNumber(value: string);
    resetDefaultPhoneNumber(): void;
    get defaultPhoneNumberInput(): string;
    private _disabled?;
    get disabled(): boolean | cdktf.IResolvable;
    set disabled(value: boolean | cdktf.IResolvable);
    resetDisabled(): void;
    get disabledInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _voiceConnectorId?;
    get voiceConnectorId(): string;
    set voiceConnectorId(value: string);
    get voiceConnectorIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=chime-voice-connector-termination.d.ts.map