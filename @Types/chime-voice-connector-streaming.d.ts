import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* Amazon Chime
*/
export interface ChimeVoiceConnectorStreamingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_streaming.html#data_retention ChimeVoiceConnectorStreaming#data_retention}
    */
    readonly dataRetention: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_streaming.html#disabled ChimeVoiceConnectorStreaming#disabled}
    */
    readonly disabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_streaming.html#streaming_notification_targets ChimeVoiceConnectorStreaming#streaming_notification_targets}
    */
    readonly streamingNotificationTargets?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_streaming.html#voice_connector_id ChimeVoiceConnectorStreaming#voice_connector_id}
    */
    readonly voiceConnectorId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_streaming.html aws_chime_voice_connector_streaming}
*/
export declare class ChimeVoiceConnectorStreaming extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_streaming.html aws_chime_voice_connector_streaming} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimeVoiceConnectorStreamingConfig
    */
    constructor(scope: Construct, id: string, config: ChimeVoiceConnectorStreamingConfig);
    private _dataRetention?;
    get dataRetention(): number;
    set dataRetention(value: number);
    get dataRetentionInput(): number;
    private _disabled?;
    get disabled(): boolean | cdktf.IResolvable;
    set disabled(value: boolean | cdktf.IResolvable);
    resetDisabled(): void;
    get disabledInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _streamingNotificationTargets?;
    get streamingNotificationTargets(): string[];
    set streamingNotificationTargets(value: string[]);
    resetStreamingNotificationTargets(): void;
    get streamingNotificationTargetsInput(): string[];
    private _voiceConnectorId?;
    get voiceConnectorId(): string;
    set voiceConnectorId(value: string);
    get voiceConnectorIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=chime-voice-connector-streaming.d.ts.map