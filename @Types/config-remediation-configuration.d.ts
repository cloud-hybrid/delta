import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Config
*/
export interface ConfigRemediationConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#automatic ConfigRemediationConfiguration#automatic}
    */
    readonly automatic?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#config_rule_name ConfigRemediationConfiguration#config_rule_name}
    */
    readonly configRuleName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#maximum_automatic_attempts ConfigRemediationConfiguration#maximum_automatic_attempts}
    */
    readonly maximumAutomaticAttempts?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#resource_type ConfigRemediationConfiguration#resource_type}
    */
    readonly resourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#retry_attempt_seconds ConfigRemediationConfiguration#retry_attempt_seconds}
    */
    readonly retryAttemptSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#target_id ConfigRemediationConfiguration#target_id}
    */
    readonly targetId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#target_type ConfigRemediationConfiguration#target_type}
    */
    readonly targetType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#target_version ConfigRemediationConfiguration#target_version}
    */
    readonly targetVersion?: string;
    /**
    * execution_controls block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#execution_controls ConfigRemediationConfiguration#execution_controls}
    */
    readonly executionControls?: ConfigRemediationConfigurationExecutionControls;
    /**
    * parameter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#parameter ConfigRemediationConfiguration#parameter}
    */
    readonly parameter?: ConfigRemediationConfigurationParameter[];
}
export interface ConfigRemediationConfigurationExecutionControlsSsmControls {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#concurrent_execution_rate_percentage ConfigRemediationConfiguration#concurrent_execution_rate_percentage}
    */
    readonly concurrentExecutionRatePercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#error_percentage ConfigRemediationConfiguration#error_percentage}
    */
    readonly errorPercentage?: number;
}
export declare function configRemediationConfigurationExecutionControlsSsmControlsToTerraform(struct?: ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference | ConfigRemediationConfigurationExecutionControlsSsmControls): any;
export declare class ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ConfigRemediationConfigurationExecutionControlsSsmControls | undefined;
    set internalValue(value: ConfigRemediationConfigurationExecutionControlsSsmControls | undefined);
    private _concurrentExecutionRatePercentage?;
    get concurrentExecutionRatePercentage(): number;
    set concurrentExecutionRatePercentage(value: number);
    resetConcurrentExecutionRatePercentage(): void;
    get concurrentExecutionRatePercentageInput(): number;
    private _errorPercentage?;
    get errorPercentage(): number;
    set errorPercentage(value: number);
    resetErrorPercentage(): void;
    get errorPercentageInput(): number;
}
export interface ConfigRemediationConfigurationExecutionControls {
    /**
    * ssm_controls block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#ssm_controls ConfigRemediationConfiguration#ssm_controls}
    */
    readonly ssmControls?: ConfigRemediationConfigurationExecutionControlsSsmControls;
}
export declare function configRemediationConfigurationExecutionControlsToTerraform(struct?: ConfigRemediationConfigurationExecutionControlsOutputReference | ConfigRemediationConfigurationExecutionControls): any;
export declare class ConfigRemediationConfigurationExecutionControlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ConfigRemediationConfigurationExecutionControls | undefined;
    set internalValue(value: ConfigRemediationConfigurationExecutionControls | undefined);
    private _ssmControls;
    get ssmControls(): ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference;
    putSsmControls(value: ConfigRemediationConfigurationExecutionControlsSsmControls): void;
    resetSsmControls(): void;
    get ssmControlsInput(): ConfigRemediationConfigurationExecutionControlsSsmControls;
}
export interface ConfigRemediationConfigurationParameter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#name ConfigRemediationConfiguration#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#resource_value ConfigRemediationConfiguration#resource_value}
    */
    readonly resourceValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#static_value ConfigRemediationConfiguration#static_value}
    */
    readonly staticValue?: string;
}
export declare function configRemediationConfigurationParameterToTerraform(struct?: ConfigRemediationConfigurationParameter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html aws_config_remediation_configuration}
*/
export declare class ConfigRemediationConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html aws_config_remediation_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigRemediationConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: ConfigRemediationConfigurationConfig);
    get arn(): string;
    private _automatic?;
    get automatic(): boolean | cdktf.IResolvable;
    set automatic(value: boolean | cdktf.IResolvable);
    resetAutomatic(): void;
    get automaticInput(): boolean | cdktf.IResolvable;
    private _configRuleName?;
    get configRuleName(): string;
    set configRuleName(value: string);
    get configRuleNameInput(): string;
    get id(): string;
    private _maximumAutomaticAttempts?;
    get maximumAutomaticAttempts(): number;
    set maximumAutomaticAttempts(value: number);
    resetMaximumAutomaticAttempts(): void;
    get maximumAutomaticAttemptsInput(): number;
    private _resourceType?;
    get resourceType(): string;
    set resourceType(value: string);
    resetResourceType(): void;
    get resourceTypeInput(): string;
    private _retryAttemptSeconds?;
    get retryAttemptSeconds(): number;
    set retryAttemptSeconds(value: number);
    resetRetryAttemptSeconds(): void;
    get retryAttemptSecondsInput(): number;
    private _targetId?;
    get targetId(): string;
    set targetId(value: string);
    get targetIdInput(): string;
    private _targetType?;
    get targetType(): string;
    set targetType(value: string);
    get targetTypeInput(): string;
    private _targetVersion?;
    get targetVersion(): string;
    set targetVersion(value: string);
    resetTargetVersion(): void;
    get targetVersionInput(): string;
    private _executionControls;
    get executionControls(): ConfigRemediationConfigurationExecutionControlsOutputReference;
    putExecutionControls(value: ConfigRemediationConfigurationExecutionControls): void;
    resetExecutionControls(): void;
    get executionControlsInput(): ConfigRemediationConfigurationExecutionControls;
    private _parameter?;
    get parameter(): ConfigRemediationConfigurationParameter[];
    set parameter(value: ConfigRemediationConfigurationParameter[]);
    resetParameter(): void;
    get parameterInput(): ConfigRemediationConfigurationParameter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=config-remediation-configuration.d.ts.map