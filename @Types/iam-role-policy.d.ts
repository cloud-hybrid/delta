import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Identity and Access Management
*/
export interface IamRolePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role_policy.html#name IamRolePolicy#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role_policy.html#name_prefix IamRolePolicy#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role_policy.html#policy IamRolePolicy#policy}
    */
    readonly policy: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role_policy.html#role IamRolePolicy#role}
    */
    readonly role: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_role_policy.html aws_iam_role_policy}
*/
export declare class IamRolePolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_role_policy.html aws_iam_role_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamRolePolicyConfig
    */
    constructor(scope: Construct, id: string, config: IamRolePolicyConfig);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string;
    private _role?;
    get role(): string;
    set role(value: string);
    get roleInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=iam-role-policy.d.ts.map