import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Organizations
*/
export interface OrganizationsAccountConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account.html#email OrganizationsAccount#email}
    */
    readonly email: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account.html#iam_user_access_to_billing OrganizationsAccount#iam_user_access_to_billing}
    */
    readonly iamUserAccessToBilling?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account.html#name OrganizationsAccount#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account.html#parent_id OrganizationsAccount#parent_id}
    */
    readonly parentId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account.html#role_name OrganizationsAccount#role_name}
    */
    readonly roleName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account.html#tags OrganizationsAccount#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account.html#tags_all OrganizationsAccount#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/organizations_account.html aws_organizations_account}
*/
export declare class OrganizationsAccount extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/organizations_account.html aws_organizations_account} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationsAccountConfig
    */
    constructor(scope: Construct, id: string, config: OrganizationsAccountConfig);
    get arn(): string;
    private _email?;
    get email(): string;
    set email(value: string);
    get emailInput(): string;
    private _iamUserAccessToBilling?;
    get iamUserAccessToBilling(): string;
    set iamUserAccessToBilling(value: string);
    resetIamUserAccessToBilling(): void;
    get iamUserAccessToBillingInput(): string;
    get id(): string;
    get joinedMethod(): string;
    get joinedTimestamp(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _parentId?;
    get parentId(): string;
    set parentId(value: string);
    resetParentId(): void;
    get parentIdInput(): string;
    private _roleName?;
    get roleName(): string;
    set roleName(value: string);
    resetRoleName(): void;
    get roleNameInput(): string;
    get status(): string;
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
//# sourceMappingURL=organizations-account.d.ts.map