import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Identity and Access Management
*/
export interface IamPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_policy_attachment.html#groups IamPolicyAttachment#groups}
    */
    readonly groups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_policy_attachment.html#name IamPolicyAttachment#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_policy_attachment.html#policy_arn IamPolicyAttachment#policy_arn}
    */
    readonly policyArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_policy_attachment.html#roles IamPolicyAttachment#roles}
    */
    readonly roles?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_policy_attachment.html#users IamPolicyAttachment#users}
    */
    readonly users?: string[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_policy_attachment.html aws_iam_policy_attachment}
*/
export declare class IamPolicyAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_policy_attachment.html aws_iam_policy_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamPolicyAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: IamPolicyAttachmentConfig);
    private _groups?;
    get groups(): string[];
    set groups(value: string[]);
    resetGroups(): void;
    get groupsInput(): string[];
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _policyArn?;
    get policyArn(): string;
    set policyArn(value: string);
    get policyArnInput(): string;
    private _roles?;
    get roles(): string[];
    set roles(value: string[]);
    resetRoles(): void;
    get rolesInput(): string[];
    private _users?;
    get users(): string[];
    set users(value: string[]);
    resetUsers(): void;
    get usersInput(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=iam-policy-attachment.d.ts.map