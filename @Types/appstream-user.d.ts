import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AppStream
*/
export interface AppstreamUserConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_user.html#authentication_type AppstreamUser#authentication_type}
    */
    readonly authenticationType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_user.html#enabled AppstreamUser#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_user.html#first_name AppstreamUser#first_name}
    */
    readonly firstName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_user.html#last_name AppstreamUser#last_name}
    */
    readonly lastName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_user.html#send_email_notification AppstreamUser#send_email_notification}
    */
    readonly sendEmailNotification?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_user.html#user_name AppstreamUser#user_name}
    */
    readonly userName: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appstream_user.html aws_appstream_user}
*/
export declare class AppstreamUser extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appstream_user.html aws_appstream_user} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppstreamUserConfig
    */
    constructor(scope: Construct, id: string, config: AppstreamUserConfig);
    get arn(): string;
    private _authenticationType?;
    get authenticationType(): string;
    set authenticationType(value: string);
    get authenticationTypeInput(): string;
    get createdTime(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _firstName?;
    get firstName(): string;
    set firstName(value: string);
    resetFirstName(): void;
    get firstNameInput(): string;
    get id(): string;
    private _lastName?;
    get lastName(): string;
    set lastName(value: string);
    resetLastName(): void;
    get lastNameInput(): string;
    private _sendEmailNotification?;
    get sendEmailNotification(): boolean | cdktf.IResolvable;
    set sendEmailNotification(value: boolean | cdktf.IResolvable);
    resetSendEmailNotification(): void;
    get sendEmailNotificationInput(): boolean | cdktf.IResolvable;
    private _userName?;
    get userName(): string;
    set userName(value: string);
    get userNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=appstream-user.d.ts.map