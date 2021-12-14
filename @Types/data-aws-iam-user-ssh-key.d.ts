import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Identity and Access Management
*/
export interface DataAwsIamUserSshKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_user_ssh_key.html#encoding DataAwsIamUserSshKey#encoding}
    */
    readonly encoding: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_user_ssh_key.html#ssh_public_key_id DataAwsIamUserSshKey#ssh_public_key_id}
    */
    readonly sshPublicKeyId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_user_ssh_key.html#username DataAwsIamUserSshKey#username}
    */
    readonly username: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_user_ssh_key.html aws_iam_user_ssh_key}
*/
export declare class DataAwsIamUserSshKey extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_user_ssh_key.html aws_iam_user_ssh_key} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamUserSshKeyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsIamUserSshKeyConfig);
    private _encoding?;
    get encoding(): string;
    set encoding(value: string);
    get encodingInput(): string;
    get fingerprint(): string;
    get id(): string;
    get publicKey(): string;
    private _sshPublicKeyId?;
    get sshPublicKeyId(): string;
    set sshPublicKeyId(value: string);
    get sshPublicKeyIdInput(): string;
    get status(): string;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-iam-user-ssh-key.d.ts.map