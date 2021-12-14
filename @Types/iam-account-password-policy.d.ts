import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Identity and Access Management
*/
export interface IamAccountPasswordPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html#allow_users_to_change_password IamAccountPasswordPolicy#allow_users_to_change_password}
    */
    readonly allowUsersToChangePassword?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html#hard_expiry IamAccountPasswordPolicy#hard_expiry}
    */
    readonly hardExpiry?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html#max_password_age IamAccountPasswordPolicy#max_password_age}
    */
    readonly maxPasswordAge?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html#minimum_password_length IamAccountPasswordPolicy#minimum_password_length}
    */
    readonly minimumPasswordLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html#password_reuse_prevention IamAccountPasswordPolicy#password_reuse_prevention}
    */
    readonly passwordReusePrevention?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html#require_lowercase_characters IamAccountPasswordPolicy#require_lowercase_characters}
    */
    readonly requireLowercaseCharacters?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html#require_numbers IamAccountPasswordPolicy#require_numbers}
    */
    readonly requireNumbers?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html#require_symbols IamAccountPasswordPolicy#require_symbols}
    */
    readonly requireSymbols?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html#require_uppercase_characters IamAccountPasswordPolicy#require_uppercase_characters}
    */
    readonly requireUppercaseCharacters?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html aws_iam_account_password_policy}
*/
export declare class IamAccountPasswordPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html aws_iam_account_password_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamAccountPasswordPolicyConfig = {}
    */
    constructor(scope: Construct, id: string, config?: IamAccountPasswordPolicyConfig);
    private _allowUsersToChangePassword?;
    get allowUsersToChangePassword(): boolean | cdktf.IResolvable;
    set allowUsersToChangePassword(value: boolean | cdktf.IResolvable);
    resetAllowUsersToChangePassword(): void;
    get allowUsersToChangePasswordInput(): boolean | cdktf.IResolvable;
    get expirePasswords(): any;
    private _hardExpiry?;
    get hardExpiry(): boolean | cdktf.IResolvable;
    set hardExpiry(value: boolean | cdktf.IResolvable);
    resetHardExpiry(): void;
    get hardExpiryInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _maxPasswordAge?;
    get maxPasswordAge(): number;
    set maxPasswordAge(value: number);
    resetMaxPasswordAge(): void;
    get maxPasswordAgeInput(): number;
    private _minimumPasswordLength?;
    get minimumPasswordLength(): number;
    set minimumPasswordLength(value: number);
    resetMinimumPasswordLength(): void;
    get minimumPasswordLengthInput(): number;
    private _passwordReusePrevention?;
    get passwordReusePrevention(): number;
    set passwordReusePrevention(value: number);
    resetPasswordReusePrevention(): void;
    get passwordReusePreventionInput(): number;
    private _requireLowercaseCharacters?;
    get requireLowercaseCharacters(): boolean | cdktf.IResolvable;
    set requireLowercaseCharacters(value: boolean | cdktf.IResolvable);
    resetRequireLowercaseCharacters(): void;
    get requireLowercaseCharactersInput(): boolean | cdktf.IResolvable;
    private _requireNumbers?;
    get requireNumbers(): boolean | cdktf.IResolvable;
    set requireNumbers(value: boolean | cdktf.IResolvable);
    resetRequireNumbers(): void;
    get requireNumbersInput(): boolean | cdktf.IResolvable;
    private _requireSymbols?;
    get requireSymbols(): boolean | cdktf.IResolvable;
    set requireSymbols(value: boolean | cdktf.IResolvable);
    resetRequireSymbols(): void;
    get requireSymbolsInput(): boolean | cdktf.IResolvable;
    private _requireUppercaseCharacters?;
    get requireUppercaseCharacters(): boolean | cdktf.IResolvable;
    set requireUppercaseCharacters(value: boolean | cdktf.IResolvable);
    resetRequireUppercaseCharacters(): void;
    get requireUppercaseCharactersInput(): boolean | cdktf.IResolvable;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=iam-account-password-policy.d.ts.map