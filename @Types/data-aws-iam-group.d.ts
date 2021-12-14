import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Identity and Access Management
*/
export interface DataAwsIamGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_group.html#group_name DataAwsIamGroup#group_name}
    */
    readonly groupName: string;
}
export declare class DataAwsIamGroupUsers extends cdktf.ComplexComputedList {
    get arn(): string;
    get path(): string;
    get userId(): string;
    get userName(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_group.html aws_iam_group}
*/
export declare class DataAwsIamGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_group.html aws_iam_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsIamGroupConfig);
    get arn(): string;
    get groupId(): string;
    private _groupName?;
    get groupName(): string;
    set groupName(value: string);
    get groupNameInput(): string;
    get id(): string;
    get path(): string;
    users(index: string): DataAwsIamGroupUsers;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-iam-group.d.ts.map