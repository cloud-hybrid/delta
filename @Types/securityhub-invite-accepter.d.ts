import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Security Hub
*/
export interface SecurityhubInviteAccepterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_invite_accepter.html#master_id SecurityhubInviteAccepter#master_id}
    */
    readonly masterId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/securityhub_invite_accepter.html aws_securityhub_invite_accepter}
*/
export declare class SecurityhubInviteAccepter extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/securityhub_invite_accepter.html aws_securityhub_invite_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecurityhubInviteAccepterConfig
    */
    constructor(scope: Construct, id: string, config: SecurityhubInviteAccepterConfig);
    get id(): string;
    get invitationId(): string;
    private _masterId?;
    get masterId(): string;
    set masterId(value: string);
    get masterIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=securityhub-invite-accepter.d.ts.map