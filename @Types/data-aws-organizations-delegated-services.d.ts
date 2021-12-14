import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Organizations
*/
export interface DataAwsOrganizationsDelegatedServicesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_delegated_services.html#account_id DataAwsOrganizationsDelegatedServices#account_id}
    */
    readonly accountId: string;
}
export declare class DataAwsOrganizationsDelegatedServicesDelegatedServices extends cdktf.ComplexComputedList {
    get delegationEnabledDate(): string;
    get servicePrincipal(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/organizations_delegated_services.html aws_organizations_delegated_services}
*/
export declare class DataAwsOrganizationsDelegatedServices extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/organizations_delegated_services.html aws_organizations_delegated_services} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOrganizationsDelegatedServicesConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsOrganizationsDelegatedServicesConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    delegatedServices(index: string): DataAwsOrganizationsDelegatedServicesDelegatedServices;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-organizations-delegated-services.d.ts.map