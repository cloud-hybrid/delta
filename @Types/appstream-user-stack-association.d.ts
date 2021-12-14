import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AppStream
*/
export interface AppstreamUserStackAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_user_stack_association.html#authentication_type AppstreamUserStackAssociation#authentication_type}
    */
    readonly authenticationType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_user_stack_association.html#send_email_notification AppstreamUserStackAssociation#send_email_notification}
    */
    readonly sendEmailNotification?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_user_stack_association.html#stack_name AppstreamUserStackAssociation#stack_name}
    */
    readonly stackName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_user_stack_association.html#user_name AppstreamUserStackAssociation#user_name}
    */
    readonly userName: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appstream_user_stack_association.html aws_appstream_user_stack_association}
*/
export declare class AppstreamUserStackAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appstream_user_stack_association.html aws_appstream_user_stack_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppstreamUserStackAssociationConfig
    */
    constructor(scope: Construct, id: string, config: AppstreamUserStackAssociationConfig);
    private _authenticationType?;
    get authenticationType(): string;
    set authenticationType(value: string);
    get authenticationTypeInput(): string;
    get id(): string;
    private _sendEmailNotification?;
    get sendEmailNotification(): boolean | cdktf.IResolvable;
    set sendEmailNotification(value: boolean | cdktf.IResolvable);
    resetSendEmailNotification(): void;
    get sendEmailNotificationInput(): boolean | cdktf.IResolvable;
    private _stackName?;
    get stackName(): string;
    set stackName(value: string);
    get stackNameInput(): string;
    private _userName?;
    get userName(): string;
    set userName(value: string);
    get userNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=appstream-user-stack-association.d.ts.map