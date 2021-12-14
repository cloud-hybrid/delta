import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Organizations
*/
export interface OrganizationsDelegatedAdministratorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator.html#account_id OrganizationsDelegatedAdministrator#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator.html#service_principal OrganizationsDelegatedAdministrator#service_principal}
    */
    readonly servicePrincipal: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator.html aws_organizations_delegated_administrator}
*/
export declare class OrganizationsDelegatedAdministrator extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator.html aws_organizations_delegated_administrator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationsDelegatedAdministratorConfig
    */
    constructor(scope: Construct, id: string, config: OrganizationsDelegatedAdministratorConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    get arn(): string;
    get delegationEnabledDate(): string;
    get email(): string;
    get id(): string;
    get joinedMethod(): string;
    get joinedTimestamp(): string;
    get name(): string;
    private _servicePrincipal?;
    get servicePrincipal(): string;
    set servicePrincipal(value: string);
    get servicePrincipalInput(): string;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=organizations-delegated-administrator.d.ts.map