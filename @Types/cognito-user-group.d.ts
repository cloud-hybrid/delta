import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Cognito
*/
export interface CognitoUserGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_group.html#description CognitoUserGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_group.html#name CognitoUserGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_group.html#precedence CognitoUserGroup#precedence}
    */
    readonly precedence?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_group.html#role_arn CognitoUserGroup#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_group.html#user_pool_id CognitoUserGroup#user_pool_id}
    */
    readonly userPoolId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_group.html aws_cognito_user_group}
*/
export declare class CognitoUserGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_group.html aws_cognito_user_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoUserGroupConfig
    */
    constructor(scope: Construct, id: string, config: CognitoUserGroupConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _precedence?;
    get precedence(): number;
    set precedence(value: number);
    resetPrecedence(): void;
    get precedenceInput(): number;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string;
    private _userPoolId?;
    get userPoolId(): string;
    set userPoolId(value: string);
    get userPoolIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cognito-user-group.d.ts.map