import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface AmiLaunchPermissionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission.html#account_id AmiLaunchPermission#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission.html#image_id AmiLaunchPermission#image_id}
    */
    readonly imageId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission.html aws_ami_launch_permission}
*/
export declare class AmiLaunchPermission extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission.html aws_ami_launch_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmiLaunchPermissionConfig
    */
    constructor(scope: Construct, id: string, config: AmiLaunchPermissionConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    get id(): string;
    private _imageId?;
    get imageId(): string;
    set imageId(value: string);
    get imageIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ami-launch-permission.d.ts.map