import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* Amazon Chime
*/
export interface ChimeVoiceConnectorLoggingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging.html#enable_sip_logs ChimeVoiceConnectorLogging#enable_sip_logs}
    */
    readonly enableSipLogs?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging.html#voice_connector_id ChimeVoiceConnectorLogging#voice_connector_id}
    */
    readonly voiceConnectorId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging.html aws_chime_voice_connector_logging}
*/
export declare class ChimeVoiceConnectorLogging extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging.html aws_chime_voice_connector_logging} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimeVoiceConnectorLoggingConfig
    */
    constructor(scope: Construct, id: string, config: ChimeVoiceConnectorLoggingConfig);
    private _enableSipLogs?;
    get enableSipLogs(): boolean | cdktf.IResolvable;
    set enableSipLogs(value: boolean | cdktf.IResolvable);
    resetEnableSipLogs(): void;
    get enableSipLogsInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _voiceConnectorId?;
    get voiceConnectorId(): string;
    set voiceConnectorId(value: string);
    get voiceConnectorIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=chime-voice-connector-logging.d.ts.map