import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Identity and Access Management
*/
export interface DataAwsIamRolesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_roles.html#name_regex DataAwsIamRoles#name_regex}
    */
    readonly nameRegex?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_roles.html#path_prefix DataAwsIamRoles#path_prefix}
    */
    readonly pathPrefix?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_roles.html aws_iam_roles}
*/
export declare class DataAwsIamRoles extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_roles.html aws_iam_roles} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamRolesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsIamRolesConfig);
    get arns(): string[];
    get id(): string;
    private _nameRegex?;
    get nameRegex(): string;
    set nameRegex(value: string);
    resetNameRegex(): void;
    get nameRegexInput(): string;
    get names(): string[];
    private _pathPrefix?;
    get pathPrefix(): string;
    set pathPrefix(value: string);
    resetPathPrefix(): void;
    get pathPrefixInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-iam-roles.d.ts.map