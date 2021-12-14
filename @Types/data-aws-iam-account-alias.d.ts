import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Identity and Access Management
*/
export interface DataAwsIamAccountAliasConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_account_alias.html aws_iam_account_alias}
*/
export declare class DataAwsIamAccountAlias extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_account_alias.html aws_iam_account_alias} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamAccountAliasConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsIamAccountAliasConfig);
    get accountAlias(): string;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-iam-account-alias.d.ts.map