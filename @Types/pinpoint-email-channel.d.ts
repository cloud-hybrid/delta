import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Pinpoint
*/
export interface PinpointEmailChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel.html#application_id PinpointEmailChannel#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel.html#configuration_set PinpointEmailChannel#configuration_set}
    */
    readonly configurationSet?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel.html#enabled PinpointEmailChannel#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel.html#from_address PinpointEmailChannel#from_address}
    */
    readonly fromAddress: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel.html#identity PinpointEmailChannel#identity}
    */
    readonly identity: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel.html#role_arn PinpointEmailChannel#role_arn}
    */
    readonly roleArn?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel.html aws_pinpoint_email_channel}
*/
export declare class PinpointEmailChannel extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel.html aws_pinpoint_email_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PinpointEmailChannelConfig
    */
    constructor(scope: Construct, id: string, config: PinpointEmailChannelConfig);
    private _applicationId?;
    get applicationId(): string;
    set applicationId(value: string);
    get applicationIdInput(): string;
    private _configurationSet?;
    get configurationSet(): string;
    set configurationSet(value: string);
    resetConfigurationSet(): void;
    get configurationSetInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _fromAddress?;
    get fromAddress(): string;
    set fromAddress(value: string);
    get fromAddressInput(): string;
    get id(): string;
    private _identity?;
    get identity(): string;
    set identity(value: string);
    get identityInput(): string;
    get messagesPerSecond(): number;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=pinpoint-email-channel.d.ts.map