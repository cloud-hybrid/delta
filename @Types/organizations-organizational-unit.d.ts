import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Organizations
*/
export interface OrganizationsOrganizationalUnitConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit.html#name OrganizationsOrganizationalUnit#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit.html#parent_id OrganizationsOrganizationalUnit#parent_id}
    */
    readonly parentId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit.html#tags OrganizationsOrganizationalUnit#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit.html#tags_all OrganizationsOrganizationalUnit#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare class OrganizationsOrganizationalUnitAccounts extends cdktf.ComplexComputedList {
    get arn(): string;
    get email(): string;
    get id(): string;
    get name(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit.html aws_organizations_organizational_unit}
*/
export declare class OrganizationsOrganizationalUnit extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit.html aws_organizations_organizational_unit} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationsOrganizationalUnitConfig
    */
    constructor(scope: Construct, id: string, config: OrganizationsOrganizationalUnitConfig);
    accounts(index: string): OrganizationsOrganizationalUnitAccounts;
    get arn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _parentId?;
    get parentId(): string;
    set parentId(value: string);
    get parentIdInput(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tagsAll(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTagsAll(): void;
    get tagsAllInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=organizations-organizational-unit.d.ts.map