import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Shield Protection
*/
export interface ShieldProtectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection.html#name ShieldProtection#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection.html#resource_arn ShieldProtection#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection.html#tags ShieldProtection#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection.html#tags_all ShieldProtection#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/shield_protection.html aws_shield_protection}
*/
export declare class ShieldProtection extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/shield_protection.html aws_shield_protection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ShieldProtectionConfig
    */
    constructor(scope: Construct, id: string, config: ShieldProtectionConfig);
    get arn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string;
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tagsAll(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTagsAll(): void;
    get tagsAllInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=shield-protection.d.ts.map