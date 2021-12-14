import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* Amazon Chime
*/
export interface ChimeVoiceConnectorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector.html#aws_region ChimeVoiceConnector#aws_region}
    */
    readonly awsRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector.html#name ChimeVoiceConnector#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector.html#require_encryption ChimeVoiceConnector#require_encryption}
    */
    readonly requireEncryption: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector.html aws_chime_voice_connector}
*/
export declare class ChimeVoiceConnector extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector.html aws_chime_voice_connector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimeVoiceConnectorConfig
    */
    constructor(scope: Construct, id: string, config: ChimeVoiceConnectorConfig);
    private _awsRegion?;
    get awsRegion(): string;
    set awsRegion(value: string);
    resetAwsRegion(): void;
    get awsRegionInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get outboundHostName(): string;
    private _requireEncryption?;
    get requireEncryption(): boolean | cdktf.IResolvable;
    set requireEncryption(value: boolean | cdktf.IResolvable);
    get requireEncryptionInput(): boolean | cdktf.IResolvable;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=chime-voice-connector.d.ts.map