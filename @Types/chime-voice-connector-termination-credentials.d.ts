import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* Amazon Chime
*/
export interface ChimeVoiceConnectorTerminationCredentialsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials.html#voice_connector_id ChimeVoiceConnectorTerminationCredentials#voice_connector_id}
    */
    readonly voiceConnectorId: string;
    /**
    * credentials block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials.html#credentials ChimeVoiceConnectorTerminationCredentials#credentials}
    */
    readonly credentials: ChimeVoiceConnectorTerminationCredentialsCredentials[];
}
export interface ChimeVoiceConnectorTerminationCredentialsCredentials {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials.html#password ChimeVoiceConnectorTerminationCredentials#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials.html#username ChimeVoiceConnectorTerminationCredentials#username}
    */
    readonly username: string;
}
export declare function chimeVoiceConnectorTerminationCredentialsCredentialsToTerraform(struct?: ChimeVoiceConnectorTerminationCredentialsCredentials): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials.html aws_chime_voice_connector_termination_credentials}
*/
export declare class ChimeVoiceConnectorTerminationCredentials extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials.html aws_chime_voice_connector_termination_credentials} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimeVoiceConnectorTerminationCredentialsConfig
    */
    constructor(scope: Construct, id: string, config: ChimeVoiceConnectorTerminationCredentialsConfig);
    get id(): string;
    private _voiceConnectorId?;
    get voiceConnectorId(): string;
    set voiceConnectorId(value: string);
    get voiceConnectorIdInput(): string;
    private _credentials?;
    get credentials(): ChimeVoiceConnectorTerminationCredentialsCredentials[];
    set credentials(value: ChimeVoiceConnectorTerminationCredentialsCredentials[]);
    get credentialsInput(): ChimeVoiceConnectorTerminationCredentialsCredentials[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=chime-voice-connector-termination-credentials.d.ts.map