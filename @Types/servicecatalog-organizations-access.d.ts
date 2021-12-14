import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Service Catalog
*/
export interface ServicecatalogOrganizationsAccessConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_organizations_access.html#enabled ServicecatalogOrganizationsAccess#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_organizations_access.html aws_servicecatalog_organizations_access}
*/
export declare class ServicecatalogOrganizationsAccess extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_organizations_access.html aws_servicecatalog_organizations_access} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogOrganizationsAccessConfig
    */
    constructor(scope: Construct, id: string, config: ServicecatalogOrganizationsAccessConfig);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=servicecatalog-organizations-access.d.ts.map