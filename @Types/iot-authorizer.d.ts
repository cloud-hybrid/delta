import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS IoT
*/
export interface IotAuthorizerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_authorizer.html#authorizer_function_arn IotAuthorizer#authorizer_function_arn}
    */
    readonly authorizerFunctionArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_authorizer.html#name IotAuthorizer#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_authorizer.html#signing_disabled IotAuthorizer#signing_disabled}
    */
    readonly signingDisabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_authorizer.html#status IotAuthorizer#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_authorizer.html#token_key_name IotAuthorizer#token_key_name}
    */
    readonly tokenKeyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_authorizer.html#token_signing_public_keys IotAuthorizer#token_signing_public_keys}
    */
    readonly tokenSigningPublicKeys?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_authorizer.html aws_iot_authorizer}
*/
export declare class IotAuthorizer extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_authorizer.html aws_iot_authorizer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotAuthorizerConfig
    */
    constructor(scope: Construct, id: string, config: IotAuthorizerConfig);
    get arn(): string;
    private _authorizerFunctionArn?;
    get authorizerFunctionArn(): string;
    set authorizerFunctionArn(value: string);
    get authorizerFunctionArnInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _signingDisabled?;
    get signingDisabled(): boolean | cdktf.IResolvable;
    set signingDisabled(value: boolean | cdktf.IResolvable);
    resetSigningDisabled(): void;
    get signingDisabledInput(): boolean | cdktf.IResolvable;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string;
    private _tokenKeyName?;
    get tokenKeyName(): string;
    set tokenKeyName(value: string);
    resetTokenKeyName(): void;
    get tokenKeyNameInput(): string;
    private _tokenSigningPublicKeys?;
    get tokenSigningPublicKeys(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tokenSigningPublicKeys(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTokenSigningPublicKeys(): void;
    get tokenSigningPublicKeysInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=iot-authorizer.d.ts.map