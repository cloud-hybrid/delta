import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CodeCommit
*/
export interface CodecommitApprovalRuleTemplateAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template_association.html#approval_rule_template_name CodecommitApprovalRuleTemplateAssociation#approval_rule_template_name}
    */
    readonly approvalRuleTemplateName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template_association.html#repository_name CodecommitApprovalRuleTemplateAssociation#repository_name}
    */
    readonly repositoryName: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template_association.html aws_codecommit_approval_rule_template_association}
*/
export declare class CodecommitApprovalRuleTemplateAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template_association.html aws_codecommit_approval_rule_template_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodecommitApprovalRuleTemplateAssociationConfig
    */
    constructor(scope: Construct, id: string, config: CodecommitApprovalRuleTemplateAssociationConfig);
    private _approvalRuleTemplateName?;
    get approvalRuleTemplateName(): string;
    set approvalRuleTemplateName(value: string);
    get approvalRuleTemplateNameInput(): string;
    get id(): string;
    private _repositoryName?;
    get repositoryName(): string;
    set repositoryName(value: string);
    get repositoryNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=codecommit-approval-rule-template-association.d.ts.map