import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS OpsWorks
*/
export interface OpsworksUserProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_user_profile.html#allow_self_management OpsworksUserProfile#allow_self_management}
    */
    readonly allowSelfManagement?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_user_profile.html#ssh_public_key OpsworksUserProfile#ssh_public_key}
    */
    readonly sshPublicKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_user_profile.html#ssh_username OpsworksUserProfile#ssh_username}
    */
    readonly sshUsername: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_user_profile.html#user_arn OpsworksUserProfile#user_arn}
    */
    readonly userArn: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_user_profile.html aws_opsworks_user_profile}
*/
export declare class OpsworksUserProfile extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_user_profile.html aws_opsworks_user_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksUserProfileConfig
    */
    constructor(scope: Construct, id: string, config: OpsworksUserProfileConfig);
    private _allowSelfManagement?;
    get allowSelfManagement(): boolean | cdktf.IResolvable;
    set allowSelfManagement(value: boolean | cdktf.IResolvable);
    resetAllowSelfManagement(): void;
    get allowSelfManagementInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _sshPublicKey?;
    get sshPublicKey(): string;
    set sshPublicKey(value: string);
    resetSshPublicKey(): void;
    get sshPublicKeyInput(): string;
    private _sshUsername?;
    get sshUsername(): string;
    set sshUsername(value: string);
    get sshUsernameInput(): string;
    private _userArn?;
    get userArn(): string;
    set userArn(value: string);
    get userArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=opsworks-user-profile.d.ts.map