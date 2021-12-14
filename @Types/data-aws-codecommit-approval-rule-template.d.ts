import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CodeCommit
*/
export interface DataAwsCodecommitApprovalRuleTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codecommit_approval_rule_template.html#name DataAwsCodecommitApprovalRuleTemplate#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/codecommit_approval_rule_template.html aws_codecommit_approval_rule_template}
*/
export declare class DataAwsCodecommitApprovalRuleTemplate extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/codecommit_approval_rule_template.html aws_codecommit_approval_rule_template} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCodecommitApprovalRuleTemplateConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsCodecommitApprovalRuleTemplateConfig);
    get approvalRuleTemplateId(): string;
    get content(): string;
    get creationDate(): string;
    get description(): string;
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
//# sourceMappingURL=data-aws-codecommit-approval-rule-template.d.ts.map