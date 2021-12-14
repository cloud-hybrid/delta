import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CodeCommit
*/
export interface CodecommitApprovalRuleTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template.html#content CodecommitApprovalRuleTemplate#content}
    */
    readonly content: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template.html#description CodecommitApprovalRuleTemplate#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template.html#name CodecommitApprovalRuleTemplate#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template.html aws_codecommit_approval_rule_template}
*/
export declare class CodecommitApprovalRuleTemplate extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template.html aws_codecommit_approval_rule_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodecommitApprovalRuleTemplateConfig
    */
    constructor(scope: Construct, id: string, config: CodecommitApprovalRuleTemplateConfig);
    get approvalRuleTemplateId(): string;
    private _content?;
    get content(): string;
    set content(value: string);
    get contentInput(): string;
    get creationDate(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    get lastModifiedDate(): string;
    get lastModifiedUser(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get ruleContentSha256(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=codecommit-approval-rule-template.d.ts.map