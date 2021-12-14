import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Identity and Access Management
*/
export interface IamGroupPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_group_policy_attachment.html#group IamGroupPolicyAttachment#group}
    */
    readonly group: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_group_policy_attachment.html#policy_arn IamGroupPolicyAttachment#policy_arn}
    */
    readonly policyArn: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_group_policy_attachment.html aws_iam_group_policy_attachment}
*/
export declare class IamGroupPolicyAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_group_policy_attachment.html aws_iam_group_policy_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamGroupPolicyAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: IamGroupPolicyAttachmentConfig);
    private _group?;
    get group(): string;
    set group(value: string);
    get groupInput(): string;
    get id(): string;
    private _policyArn?;
    get policyArn(): string;
    set policyArn(value: string);
    get policyArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=iam-group-policy-attachment.d.ts.map