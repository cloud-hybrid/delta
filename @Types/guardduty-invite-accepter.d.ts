import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS GuardDuty
*/
export interface GuarddutyInviteAccepterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_invite_accepter.html#detector_id GuarddutyInviteAccepter#detector_id}
    */
    readonly detectorId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_invite_accepter.html#master_account_id GuarddutyInviteAccepter#master_account_id}
    */
    readonly masterAccountId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_invite_accepter.html#timeouts GuarddutyInviteAccepter#timeouts}
    */
    readonly timeouts?: GuarddutyInviteAccepterTimeouts;
}
export interface GuarddutyInviteAccepterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_invite_accepter.html#create GuarddutyInviteAccepter#create}
    */
    readonly create?: string;
}
export declare function guarddutyInviteAccepterTimeoutsToTerraform(struct?: GuarddutyInviteAccepterTimeoutsOutputReference | GuarddutyInviteAccepterTimeouts): any;
export declare class GuarddutyInviteAccepterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GuarddutyInviteAccepterTimeouts | undefined;
    set internalValue(value: GuarddutyInviteAccepterTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_invite_accepter.html aws_guardduty_invite_accepter}
*/
export declare class GuarddutyInviteAccepter extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_invite_accepter.html aws_guardduty_invite_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyInviteAccepterConfig
    */
    constructor(scope: Construct, id: string, config: GuarddutyInviteAccepterConfig);
    private _detectorId?;
    get detectorId(): string;
    set detectorId(value: string);
    get detectorIdInput(): string;
    get id(): string;
    private _masterAccountId?;
    get masterAccountId(): string;
    set masterAccountId(value: string);
    get masterAccountIdInput(): string;
    private _timeouts;
    get timeouts(): GuarddutyInviteAccepterTimeoutsOutputReference;
    putTimeouts(value: GuarddutyInviteAccepterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): GuarddutyInviteAccepterTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=guardduty-invite-accepter.d.ts.map