import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AccountAlternateContactConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/account_alternate_contact.html#account_id AccountAlternateContact#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/account_alternate_contact.html#alternate_contact_type AccountAlternateContact#alternate_contact_type}
    */
    readonly alternateContactType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/account_alternate_contact.html#email_address AccountAlternateContact#email_address}
    */
    readonly emailAddress: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/account_alternate_contact.html#name AccountAlternateContact#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/account_alternate_contact.html#phone_number AccountAlternateContact#phone_number}
    */
    readonly phoneNumber: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/account_alternate_contact.html#title AccountAlternateContact#title}
    */
    readonly title: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/account_alternate_contact.html aws_account_alternate_contact}
*/
export declare class AccountAlternateContact extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/account_alternate_contact.html aws_account_alternate_contact} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AccountAlternateContactConfig
    */
    constructor(scope: Construct, id: string, config: AccountAlternateContactConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _alternateContactType?;
    get alternateContactType(): string;
    set alternateContactType(value: string);
    get alternateContactTypeInput(): string;
    private _emailAddress?;
    get emailAddress(): string;
    set emailAddress(value: string);
    get emailAddressInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _phoneNumber?;
    get phoneNumber(): string;
    set phoneNumber(value: string);
    get phoneNumberInput(): string;
    private _title?;
    get title(): string;
    set title(value: string);
    get titleInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=account-alternate-contact.d.ts.map