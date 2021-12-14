import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Organizations
*/
export interface DataAwsOrganizationsDelegatedAdministratorsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_delegated_administrators.html#service_principal DataAwsOrganizationsDelegatedAdministrators#service_principal}
    */
    readonly servicePrincipal?: string;
}
export declare class DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators extends cdktf.ComplexComputedList {
    get arn(): string;
    get delegationEnabledDate(): string;
    get email(): string;
    get id(): string;
    get joinedMethod(): string;
    get joinedTimestamp(): string;
    get name(): string;
    get status(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/organizations_delegated_administrators.html aws_organizations_delegated_administrators}
*/
export declare class DataAwsOrganizationsDelegatedAdministrators extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/organizations_delegated_administrators.html aws_organizations_delegated_administrators} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOrganizationsDelegatedAdministratorsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsOrganizationsDelegatedAdministratorsConfig);
    delegatedAdministrators(index: string): DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators;
    get id(): string;
    private _servicePrincipal?;
    get servicePrincipal(): string;
    set servicePrincipal(value: string);
    resetServicePrincipal(): void;
    get servicePrincipalInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-organizations-delegated-administrators.d.ts.map