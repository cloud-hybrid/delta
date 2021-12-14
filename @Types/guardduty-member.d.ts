import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS GuardDuty
*/
export interface GuarddutyMemberConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#account_id GuarddutyMember#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#detector_id GuarddutyMember#detector_id}
    */
    readonly detectorId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#disable_email_notification GuarddutyMember#disable_email_notification}
    */
    readonly disableEmailNotification?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#email GuarddutyMember#email}
    */
    readonly email: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#invitation_message GuarddutyMember#invitation_message}
    */
    readonly invitationMessage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#invite GuarddutyMember#invite}
    */
    readonly invite?: boolean | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#timeouts GuarddutyMember#timeouts}
    */
    readonly timeouts?: GuarddutyMemberTimeouts;
}
export interface GuarddutyMemberTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#create GuarddutyMember#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#update GuarddutyMember#update}
    */
    readonly update?: string;
}
export declare function guarddutyMemberTimeoutsToTerraform(struct?: GuarddutyMemberTimeoutsOutputReference | GuarddutyMemberTimeouts): any;
export declare class GuarddutyMemberTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GuarddutyMemberTimeouts | undefined;
    set internalValue(value: GuarddutyMemberTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html aws_guardduty_member}
*/
export declare class GuarddutyMember extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html aws_guardduty_member} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyMemberConfig
    */
    constructor(scope: Construct, id: string, config: GuarddutyMemberConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    private _detectorId?;
    get detectorId(): string;
    set detectorId(value: string);
    get detectorIdInput(): string;
    private _disableEmailNotification?;
    get disableEmailNotification(): boolean | cdktf.IResolvable;
    set disableEmailNotification(value: boolean | cdktf.IResolvable);
    resetDisableEmailNotification(): void;
    get disableEmailNotificationInput(): boolean | cdktf.IResolvable;
    private _email?;
    get email(): string;
    set email(value: string);
    get emailInput(): string;
    get id(): string;
    private _invitationMessage?;
    get invitationMessage(): string;
    set invitationMessage(value: string);
    resetInvitationMessage(): void;
    get invitationMessageInput(): string;
    private _invite?;
    get invite(): boolean | cdktf.IResolvable;
    set invite(value: boolean | cdktf.IResolvable);
    resetInvite(): void;
    get inviteInput(): boolean | cdktf.IResolvable;
    get relationshipStatus(): string;
    private _timeouts;
    get timeouts(): GuarddutyMemberTimeoutsOutputReference;
    putTimeouts(value: GuarddutyMemberTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): GuarddutyMemberTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=guardduty-member.d.ts.map