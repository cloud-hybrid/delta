import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Simple Email Service
*/
export interface SesEmailIdentityConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_email_identity.html#email SesEmailIdentity#email}
    */
    readonly email: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_email_identity.html aws_ses_email_identity}
*/
export declare class SesEmailIdentity extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_email_identity.html aws_ses_email_identity} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesEmailIdentityConfig
    */
    constructor(scope: Construct, id: string, config: SesEmailIdentityConfig);
    get arn(): string;
    private _email?;
    get email(): string;
    set email(value: string);
    get emailInput(): string;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ses-email-identity.d.ts.map