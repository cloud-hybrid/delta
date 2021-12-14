import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Pinpoint
*/
export interface PinpointApnsChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel.html#application_id PinpointApnsChannel#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel.html#bundle_id PinpointApnsChannel#bundle_id}
    */
    readonly bundleId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel.html#certificate PinpointApnsChannel#certificate}
    */
    readonly certificate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel.html#default_authentication_method PinpointApnsChannel#default_authentication_method}
    */
    readonly defaultAuthenticationMethod?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel.html#enabled PinpointApnsChannel#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel.html#private_key PinpointApnsChannel#private_key}
    */
    readonly privateKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel.html#team_id PinpointApnsChannel#team_id}
    */
    readonly teamId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel.html#token_key PinpointApnsChannel#token_key}
    */
    readonly tokenKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel.html#token_key_id PinpointApnsChannel#token_key_id}
    */
    readonly tokenKeyId?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel.html aws_pinpoint_apns_channel}
*/
export declare class PinpointApnsChannel extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel.html aws_pinpoint_apns_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PinpointApnsChannelConfig
    */
    constructor(scope: Construct, id: string, config: PinpointApnsChannelConfig);
    private _applicationId?;
    get applicationId(): string;
    set applicationId(value: string);
    get applicationIdInput(): string;
    private _bundleId?;
    get bundleId(): string;
    set bundleId(value: string);
    resetBundleId(): void;
    get bundleIdInput(): string;
    private _certificate?;
    get certificate(): string;
    set certificate(value: string);
    resetCertificate(): void;
    get certificateInput(): string;
    private _defaultAuthenticationMethod?;
    get defaultAuthenticationMethod(): string;
    set defaultAuthenticationMethod(value: string);
    resetDefaultAuthenticationMethod(): void;
    get defaultAuthenticationMethodInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _privateKey?;
    get privateKey(): string;
    set privateKey(value: string);
    resetPrivateKey(): void;
    get privateKeyInput(): string;
    private _teamId?;
    get teamId(): string;
    set teamId(value: string);
    resetTeamId(): void;
    get teamIdInput(): string;
    private _tokenKey?;
    get tokenKey(): string;
    set tokenKey(value: string);
    resetTokenKey(): void;
    get tokenKeyInput(): string;
    private _tokenKeyId?;
    get tokenKeyId(): string;
    set tokenKeyId(value: string);
    resetTokenKeyId(): void;
    get tokenKeyIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=pinpoint-apns-channel.d.ts.map