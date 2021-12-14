import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Identity and Access Management
*/
export interface DataAwsIamSessionContextConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_session_context.html#arn DataAwsIamSessionContext#arn}
    */
    readonly arn: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_session_context.html aws_iam_session_context}
*/
export declare class DataAwsIamSessionContext extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_session_context.html aws_iam_session_context} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamSessionContextConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsIamSessionContextConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    get id(): string;
    get issuerArn(): string;
    get issuerId(): string;
    get issuerName(): string;
    get sessionName(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-iam-session-context.d.ts.map