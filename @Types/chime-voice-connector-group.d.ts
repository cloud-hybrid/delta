import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* Amazon Chime
*/
export interface ChimeVoiceConnectorGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group.html#name ChimeVoiceConnectorGroup#name}
    */
    readonly name: string;
    /**
    * connector block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group.html#connector ChimeVoiceConnectorGroup#connector}
    */
    readonly connector?: ChimeVoiceConnectorGroupConnector[];
}
export interface ChimeVoiceConnectorGroupConnector {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group.html#priority ChimeVoiceConnectorGroup#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group.html#voice_connector_id ChimeVoiceConnectorGroup#voice_connector_id}
    */
    readonly voiceConnectorId: string;
}
export declare function chimeVoiceConnectorGroupConnectorToTerraform(struct?: ChimeVoiceConnectorGroupConnector): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group.html aws_chime_voice_connector_group}
*/
export declare class ChimeVoiceConnectorGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group.html aws_chime_voice_connector_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimeVoiceConnectorGroupConfig
    */
    constructor(scope: Construct, id: string, config: ChimeVoiceConnectorGroupConfig);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _connector?;
    get connector(): ChimeVoiceConnectorGroupConnector[];
    set connector(value: ChimeVoiceConnectorGroupConnector[]);
    resetConnector(): void;
    get connectorInput(): ChimeVoiceConnectorGroupConnector[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=chime-voice-connector-group.d.ts.map