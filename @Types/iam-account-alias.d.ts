import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Identity and Access Management
*/
export interface IamAccountAliasConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_alias.html#account_alias IamAccountAlias#account_alias}
    */
    readonly accountAlias: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_account_alias.html aws_iam_account_alias}
*/
export declare class IamAccountAlias extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_account_alias.html aws_iam_account_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamAccountAliasConfig
    */
    constructor(scope: Construct, id: string, config: IamAccountAliasConfig);
    private _accountAlias?;
    get accountAlias(): string;
    set accountAlias(value: string);
    get accountAliasInput(): string;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=iam-account-alias.d.ts.map