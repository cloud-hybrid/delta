import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS SSO Admin
*/
export interface DataAwsSsoadminPermissionSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssoadmin_permission_set.html#instance_arn DataAwsSsoadminPermissionSet#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssoadmin_permission_set.html#name DataAwsSsoadminPermissionSet#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssoadmin_permission_set.html#tags DataAwsSsoadminPermissionSet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ssoadmin_permission_set.html aws_ssoadmin_permission_set}
*/
export declare class DataAwsSsoadminPermissionSet extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ssoadmin_permission_set.html aws_ssoadmin_permission_set} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSsoadminPermissionSetConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsSsoadminPermissionSetConfig);
    get arn(): string;
    get createdDate(): string;
    get description(): string;
    get id(): string;
    private _instanceArn?;
    get instanceArn(): string;
    set instanceArn(value: string);
    get instanceArnInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    get relayState(): string;
    get sessionDuration(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-ssoadmin-permission-set.d.ts.map