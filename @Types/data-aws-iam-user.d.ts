import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Identity and Access Management
*/
export interface DataAwsIamUserConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_user.html#tags DataAwsIamUser#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_user.html#user_name DataAwsIamUser#user_name}
    */
    readonly userName: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_user.html aws_iam_user}
*/
export declare class DataAwsIamUser extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_user.html aws_iam_user} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamUserConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsIamUserConfig);
    get arn(): string;
    get id(): string;
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
    get userId(): string;
    private _userName?;
    get userName(): string;
    set userName(value: string);
    get userNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-iam-user.d.ts.map