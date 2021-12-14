import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Macie 2
*/
export interface Macie2InvitationAccepterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_invitation_accepter.html#administrator_account_id Macie2InvitationAccepter#administrator_account_id}
    */
    readonly administratorAccountId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_invitation_accepter.html#timeouts Macie2InvitationAccepter#timeouts}
    */
    readonly timeouts?: Macie2InvitationAccepterTimeouts;
}
export interface Macie2InvitationAccepterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_invitation_accepter.html#create Macie2InvitationAccepter#create}
    */
    readonly create?: string;
}
export declare function macie2InvitationAccepterTimeoutsToTerraform(struct?: Macie2InvitationAccepterTimeoutsOutputReference | Macie2InvitationAccepterTimeouts): any;
export declare class Macie2InvitationAccepterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Macie2InvitationAccepterTimeouts | undefined;
    set internalValue(value: Macie2InvitationAccepterTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_invitation_accepter.html aws_macie2_invitation_accepter}
*/
export declare class Macie2InvitationAccepter extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_invitation_accepter.html aws_macie2_invitation_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Macie2InvitationAccepterConfig
    */
    constructor(scope: Construct, id: string, config: Macie2InvitationAccepterConfig);
    private _administratorAccountId?;
    get administratorAccountId(): string;
    set administratorAccountId(value: string);
    get administratorAccountIdInput(): string;
    get id(): string;
    get invitationId(): string;
    private _timeouts;
    get timeouts(): Macie2InvitationAccepterTimeoutsOutputReference;
    putTimeouts(value: Macie2InvitationAccepterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): Macie2InvitationAccepterTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=macie2-invitation-accepter.d.ts.map