import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Macie 2
*/
export interface Macie2OrganizationAdminAccountConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_organization_admin_account.html#admin_account_id Macie2OrganizationAdminAccount#admin_account_id}
    */
    readonly adminAccountId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_organization_admin_account.html aws_macie2_organization_admin_account}
*/
export declare class Macie2OrganizationAdminAccount extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_organization_admin_account.html aws_macie2_organization_admin_account} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Macie2OrganizationAdminAccountConfig
    */
    constructor(scope: Construct, id: string, config: Macie2OrganizationAdminAccountConfig);
    private _adminAccountId?;
    get adminAccountId(): string;
    set adminAccountId(value: string);
    get adminAccountIdInput(): string;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=macie2-organization-admin-account.d.ts.map