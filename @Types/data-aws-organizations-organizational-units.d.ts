import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Organizations
*/
export interface DataAwsOrganizationsOrganizationalUnitsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_units.html#parent_id DataAwsOrganizationsOrganizationalUnits#parent_id}
    */
    readonly parentId: string;
}
export declare class DataAwsOrganizationsOrganizationalUnitsChildren extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
    get name(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_units.html aws_organizations_organizational_units}
*/
export declare class DataAwsOrganizationsOrganizationalUnits extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_units.html aws_organizations_organizational_units} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOrganizationsOrganizationalUnitsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsOrganizationsOrganizationalUnitsConfig);
    children(index: string): DataAwsOrganizationsOrganizationalUnitsChildren;
    get id(): string;
    private _parentId?;
    get parentId(): string;
    set parentId(value: string);
    get parentIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-organizations-organizational-units.d.ts.map