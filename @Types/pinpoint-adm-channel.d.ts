import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Pinpoint
*/
export interface PinpointAdmChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_adm_channel.html#application_id PinpointAdmChannel#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_adm_channel.html#client_id PinpointAdmChannel#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_adm_channel.html#client_secret PinpointAdmChannel#client_secret}
    */
    readonly clientSecret: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_adm_channel.html#enabled PinpointAdmChannel#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_adm_channel.html aws_pinpoint_adm_channel}
*/
export declare class PinpointAdmChannel extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_adm_channel.html aws_pinpoint_adm_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PinpointAdmChannelConfig
    */
    constructor(scope: Construct, id: string, config: PinpointAdmChannelConfig);
    private _applicationId?;
    get applicationId(): string;
    set applicationId(value: string);
    get applicationIdInput(): string;
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    get clientIdInput(): string;
    private _clientSecret?;
    get clientSecret(): string;
    set clientSecret(value: string);
    get clientSecretInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=pinpoint-adm-channel.d.ts.map