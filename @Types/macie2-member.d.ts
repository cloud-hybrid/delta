import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Macie 2
*/
export interface Macie2MemberConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#account_id Macie2Member#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#email Macie2Member#email}
    */
    readonly email: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#invitation_disable_email_notification Macie2Member#invitation_disable_email_notification}
    */
    readonly invitationDisableEmailNotification?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#invitation_message Macie2Member#invitation_message}
    */
    readonly invitationMessage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#invite Macie2Member#invite}
    */
    readonly invite?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#status Macie2Member#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#tags Macie2Member#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#tags_all Macie2Member#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#timeouts Macie2Member#timeouts}
    */
    readonly timeouts?: Macie2MemberTimeouts;
}
export interface Macie2MemberTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#create Macie2Member#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#update Macie2Member#update}
    */
    readonly update?: string;
}
export declare function macie2MemberTimeoutsToTerraform(struct?: Macie2MemberTimeoutsOutputReference | Macie2MemberTimeouts): any;
export declare class Macie2MemberTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Macie2MemberTimeouts | undefined;
    set internalValue(value: Macie2MemberTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html aws_macie2_member}
*/
export declare class Macie2Member extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html aws_macie2_member} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Macie2MemberConfig
    */
    constructor(scope: Construct, id: string, config: Macie2MemberConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    get administratorAccountId(): string;
    get arn(): string;
    private _email?;
    get email(): string;
    set email(value: string);
    get emailInput(): string;
    get id(): string;
    private _invitationDisableEmailNotification?;
    get invitationDisableEmailNotification(): string;
    set invitationDisableEmailNotification(value: string);
    resetInvitationDisableEmailNotification(): void;
    get invitationDisableEmailNotificationInput(): string;
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
    get invitedAt(): string;
    get masterAccountId(): string;
    get relationshipStatus(): string;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tagsAll(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTagsAll(): void;
    get tagsAllInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    get updatedAt(): string;
    private _timeouts;
    get timeouts(): Macie2MemberTimeoutsOutputReference;
    putTimeouts(value: Macie2MemberTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): Macie2MemberTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=macie2-member.d.ts.map