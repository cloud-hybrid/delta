import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* Amazon Chime
*/
export interface ChimeVoiceConnectorOriginationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html#disabled ChimeVoiceConnectorOrigination#disabled}
    */
    readonly disabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html#voice_connector_id ChimeVoiceConnectorOrigination#voice_connector_id}
    */
    readonly voiceConnectorId: string;
    /**
    * route block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html#route ChimeVoiceConnectorOrigination#route}
    */
    readonly route: ChimeVoiceConnectorOriginationRoute[];
}
export interface ChimeVoiceConnectorOriginationRoute {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html#host ChimeVoiceConnectorOrigination#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html#port ChimeVoiceConnectorOrigination#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html#priority ChimeVoiceConnectorOrigination#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html#protocol ChimeVoiceConnectorOrigination#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html#weight ChimeVoiceConnectorOrigination#weight}
    */
    readonly weight: number;
}
export declare function chimeVoiceConnectorOriginationRouteToTerraform(struct?: ChimeVoiceConnectorOriginationRoute): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html aws_chime_voice_connector_origination}
*/
export declare class ChimeVoiceConnectorOrigination extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html aws_chime_voice_connector_origination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimeVoiceConnectorOriginationConfig
    */
    constructor(scope: Construct, id: string, config: ChimeVoiceConnectorOriginationConfig);
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
    private _route?;
    get route(): ChimeVoiceConnectorOriginationRoute[];
    set route(value: ChimeVoiceConnectorOriginationRoute[]);
    get routeInput(): ChimeVoiceConnectorOriginationRoute[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=chime-voice-connector-origination.d.ts.map