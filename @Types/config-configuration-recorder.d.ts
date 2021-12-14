import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Config
*/
export interface ConfigConfigurationRecorderConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html#name ConfigConfigurationRecorder#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html#role_arn ConfigConfigurationRecorder#role_arn}
    */
    readonly roleArn: string;
    /**
    * recording_group block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html#recording_group ConfigConfigurationRecorder#recording_group}
    */
    readonly recordingGroup?: ConfigConfigurationRecorderRecordingGroup;
}
export interface ConfigConfigurationRecorderRecordingGroup {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html#all_supported ConfigConfigurationRecorder#all_supported}
    */
    readonly allSupported?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html#include_global_resource_types ConfigConfigurationRecorder#include_global_resource_types}
    */
    readonly includeGlobalResourceTypes?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html#resource_types ConfigConfigurationRecorder#resource_types}
    */
    readonly resourceTypes?: string[];
}
export declare function configConfigurationRecorderRecordingGroupToTerraform(struct?: ConfigConfigurationRecorderRecordingGroupOutputReference | ConfigConfigurationRecorderRecordingGroup): any;
export declare class ConfigConfigurationRecorderRecordingGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ConfigConfigurationRecorderRecordingGroup | undefined;
    set internalValue(value: ConfigConfigurationRecorderRecordingGroup | undefined);
    private _allSupported?;
    get allSupported(): boolean | cdktf.IResolvable;
    set allSupported(value: boolean | cdktf.IResolvable);
    resetAllSupported(): void;
    get allSupportedInput(): boolean | cdktf.IResolvable;
    private _includeGlobalResourceTypes?;
    get includeGlobalResourceTypes(): boolean | cdktf.IResolvable;
    set includeGlobalResourceTypes(value: boolean | cdktf.IResolvable);
    resetIncludeGlobalResourceTypes(): void;
    get includeGlobalResourceTypesInput(): boolean | cdktf.IResolvable;
    private _resourceTypes?;
    get resourceTypes(): string[];
    set resourceTypes(value: string[]);
    resetResourceTypes(): void;
    get resourceTypesInput(): string[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html aws_config_configuration_recorder}
*/
export declare class ConfigConfigurationRecorder extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html aws_config_configuration_recorder} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigConfigurationRecorderConfig
    */
    constructor(scope: Construct, id: string, config: ConfigConfigurationRecorderConfig);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _recordingGroup;
    get recordingGroup(): ConfigConfigurationRecorderRecordingGroupOutputReference;
    putRecordingGroup(value: ConfigConfigurationRecorderRecordingGroup): void;
    resetRecordingGroup(): void;
    get recordingGroupInput(): ConfigConfigurationRecorderRecordingGroup;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=config-configuration-recorder.d.ts.map