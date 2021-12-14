import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS OpsWorks
*/
export interface OpsworksPermissionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission.html#allow_ssh OpsworksPermission#allow_ssh}
    */
    readonly allowSsh?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission.html#allow_sudo OpsworksPermission#allow_sudo}
    */
    readonly allowSudo?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission.html#level OpsworksPermission#level}
    */
    readonly level?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission.html#stack_id OpsworksPermission#stack_id}
    */
    readonly stackId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission.html#user_arn OpsworksPermission#user_arn}
    */
    readonly userArn: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission.html aws_opsworks_permission}
*/
export declare class OpsworksPermission extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission.html aws_opsworks_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksPermissionConfig
    */
    constructor(scope: Construct, id: string, config: OpsworksPermissionConfig);
    private _allowSsh?;
    get allowSsh(): boolean | cdktf.IResolvable;
    set allowSsh(value: boolean | cdktf.IResolvable);
    resetAllowSsh(): void;
    get allowSshInput(): boolean | cdktf.IResolvable;
    private _allowSudo?;
    get allowSudo(): boolean | cdktf.IResolvable;
    set allowSudo(value: boolean | cdktf.IResolvable);
    resetAllowSudo(): void;
    get allowSudoInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _level?;
    get level(): string;
    set level(value: string);
    resetLevel(): void;
    get levelInput(): string;
    private _stackId?;
    get stackId(): string;
    set stackId(value: string);
    resetStackId(): void;
    get stackIdInput(): string;
    private _userArn?;
    get userArn(): string;
    set userArn(value: string);
    get userArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=opsworks-permission.d.ts.map