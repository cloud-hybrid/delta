import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2 Container Service
*/
export interface EcsAccountSettingDefaultConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_account_setting_default.html#name EcsAccountSettingDefault#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_account_setting_default.html#value EcsAccountSettingDefault#value}
    */
    readonly value: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_account_setting_default.html aws_ecs_account_setting_default}
*/
export declare class EcsAccountSettingDefault extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_account_setting_default.html aws_ecs_account_setting_default} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsAccountSettingDefaultConfig
    */
    constructor(scope: Construct, id: string, config: EcsAccountSettingDefaultConfig);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get principalArn(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ecs-account-setting-default.d.ts.map