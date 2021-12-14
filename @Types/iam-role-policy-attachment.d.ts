import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Identity and Access Management
*/
export interface IamRolePolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role_policy_attachment.html#policy_arn IamRolePolicyAttachment#policy_arn}
    */
    readonly policyArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role_policy_attachment.html#role IamRolePolicyAttachment#role}
    */
    readonly role: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_role_policy_attachment.html aws_iam_role_policy_attachment}
*/
export declare class IamRolePolicyAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_role_policy_attachment.html aws_iam_role_policy_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamRolePolicyAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: IamRolePolicyAttachmentConfig);
    get id(): string;
    private _policyArn?;
    get policyArn(): string;
    set policyArn(value: string);
    get policyArnInput(): string;
    private _role?;
    get role(): string;
    set role(value: string);
    get roleInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=iam-role-policy-attachment.d.ts.map