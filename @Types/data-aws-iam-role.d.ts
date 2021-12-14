import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Identity and Access Management
*/
export interface DataAwsIamRoleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_role.html#name DataAwsIamRole#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_role.html#tags DataAwsIamRole#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_role.html aws_iam_role}
*/
export declare class DataAwsIamRole extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_role.html aws_iam_role} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamRoleConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsIamRoleConfig);
    get arn(): string;
    get assumeRolePolicy(): string;
    get createDate(): string;
    get description(): string;
    get id(): string;
    get maxSessionDuration(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get path(): string;
    get permissionsBoundary(): string;
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
    get uniqueId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-iam-role.d.ts.map