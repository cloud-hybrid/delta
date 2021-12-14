import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Config
*/
export interface ConfigConfigurationRecorderStatusConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder_status.html#is_enabled ConfigConfigurationRecorderStatus#is_enabled}
    */
    readonly isEnabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder_status.html#name ConfigConfigurationRecorderStatus#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder_status.html aws_config_configuration_recorder_status}
*/
export declare class ConfigConfigurationRecorderStatus extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder_status.html aws_config_configuration_recorder_status} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigConfigurationRecorderStatusConfig
    */
    constructor(scope: Construct, id: string, config: ConfigConfigurationRecorderStatusConfig);
    get id(): string;
    private _isEnabled?;
    get isEnabled(): boolean | cdktf.IResolvable;
    set isEnabled(value: boolean | cdktf.IResolvable);
    get isEnabledInput(): boolean | cdktf.IResolvable;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=config-configuration-recorder-status.d.ts.map