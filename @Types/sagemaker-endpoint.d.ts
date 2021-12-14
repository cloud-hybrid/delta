import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS SageMaker
*/
export interface SagemakerEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#endpoint_config_name SagemakerEndpoint#endpoint_config_name}
    */
    readonly endpointConfigName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#name SagemakerEndpoint#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#tags SagemakerEndpoint#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#tags_all SagemakerEndpoint#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * deployment_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#deployment_config SagemakerEndpoint#deployment_config}
    */
    readonly deploymentConfig?: SagemakerEndpointDeploymentConfig;
}
export interface SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#alarm_name SagemakerEndpoint#alarm_name}
    */
    readonly alarmName: string;
}
export declare function sagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsToTerraform(struct?: SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms): any;
export interface SagemakerEndpointDeploymentConfigAutoRollbackConfiguration {
    /**
    * alarms block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#alarms SagemakerEndpoint#alarms}
    */
    readonly alarms?: SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms[];
}
export declare function sagemakerEndpointDeploymentConfigAutoRollbackConfigurationToTerraform(struct?: SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference | SagemakerEndpointDeploymentConfigAutoRollbackConfiguration): any;
export declare class SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerEndpointDeploymentConfigAutoRollbackConfiguration | undefined;
    set internalValue(value: SagemakerEndpointDeploymentConfigAutoRollbackConfiguration | undefined);
    private _alarms?;
    get alarms(): SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms[];
    set alarms(value: SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms[]);
    resetAlarms(): void;
    get alarmsInput(): SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms[];
}
export interface SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#type SagemakerEndpoint#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#value SagemakerEndpoint#value}
    */
    readonly value: number;
}
export declare function sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeToTerraform(struct?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference | SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize): any;
export declare class SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize | undefined;
    set internalValue(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#type SagemakerEndpoint#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#value SagemakerEndpoint#value}
    */
    readonly value: number;
}
export declare function sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeToTerraform(struct?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference | SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize): any;
export declare class SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize | undefined;
    set internalValue(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#type SagemakerEndpoint#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#wait_interval_in_seconds SagemakerEndpoint#wait_interval_in_seconds}
    */
    readonly waitIntervalInSeconds: number;
    /**
    * canary_size block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#canary_size SagemakerEndpoint#canary_size}
    */
    readonly canarySize?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize;
    /**
    * linear_step_size block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#linear_step_size SagemakerEndpoint#linear_step_size}
    */
    readonly linearStepSize?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize;
}
export declare function sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationToTerraform(struct?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference | SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration): any;
export declare class SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration | undefined;
    set internalValue(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _waitIntervalInSeconds?;
    get waitIntervalInSeconds(): number;
    set waitIntervalInSeconds(value: number);
    get waitIntervalInSecondsInput(): number;
    private _canarySize;
    get canarySize(): SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference;
    putCanarySize(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize): void;
    resetCanarySize(): void;
    get canarySizeInput(): SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize;
    private _linearStepSize;
    get linearStepSize(): SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference;
    putLinearStepSize(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize): void;
    resetLinearStepSize(): void;
    get linearStepSizeInput(): SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize;
}
export interface SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#maximum_execution_timeout_in_seconds SagemakerEndpoint#maximum_execution_timeout_in_seconds}
    */
    readonly maximumExecutionTimeoutInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#termination_wait_in_seconds SagemakerEndpoint#termination_wait_in_seconds}
    */
    readonly terminationWaitInSeconds?: number;
    /**
    * traffic_routing_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#traffic_routing_configuration SagemakerEndpoint#traffic_routing_configuration}
    */
    readonly trafficRoutingConfiguration: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration;
}
export declare function sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyToTerraform(struct?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference | SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy): any;
export declare class SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy | undefined;
    set internalValue(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy | undefined);
    private _maximumExecutionTimeoutInSeconds?;
    get maximumExecutionTimeoutInSeconds(): number;
    set maximumExecutionTimeoutInSeconds(value: number);
    resetMaximumExecutionTimeoutInSeconds(): void;
    get maximumExecutionTimeoutInSecondsInput(): number;
    private _terminationWaitInSeconds?;
    get terminationWaitInSeconds(): number;
    set terminationWaitInSeconds(value: number);
    resetTerminationWaitInSeconds(): void;
    get terminationWaitInSecondsInput(): number;
    private _trafficRoutingConfiguration;
    get trafficRoutingConfiguration(): SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference;
    putTrafficRoutingConfiguration(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration): void;
    get trafficRoutingConfigurationInput(): SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration;
}
export interface SagemakerEndpointDeploymentConfig {
    /**
    * auto_rollback_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#auto_rollback_configuration SagemakerEndpoint#auto_rollback_configuration}
    */
    readonly autoRollbackConfiguration?: SagemakerEndpointDeploymentConfigAutoRollbackConfiguration;
    /**
    * blue_green_update_policy block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#blue_green_update_policy SagemakerEndpoint#blue_green_update_policy}
    */
    readonly blueGreenUpdatePolicy: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy;
}
export declare function sagemakerEndpointDeploymentConfigToTerraform(struct?: SagemakerEndpointDeploymentConfigOutputReference | SagemakerEndpointDeploymentConfig): any;
export declare class SagemakerEndpointDeploymentConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerEndpointDeploymentConfig | undefined;
    set internalValue(value: SagemakerEndpointDeploymentConfig | undefined);
    private _autoRollbackConfiguration;
    get autoRollbackConfiguration(): SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference;
    putAutoRollbackConfiguration(value: SagemakerEndpointDeploymentConfigAutoRollbackConfiguration): void;
    resetAutoRollbackConfiguration(): void;
    get autoRollbackConfigurationInput(): SagemakerEndpointDeploymentConfigAutoRollbackConfiguration;
    private _blueGreenUpdatePolicy;
    get blueGreenUpdatePolicy(): SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference;
    putBlueGreenUpdatePolicy(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy): void;
    get blueGreenUpdatePolicyInput(): SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html aws_sagemaker_endpoint}
*/
export declare class SagemakerEndpoint extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html aws_sagemaker_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerEndpointConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerEndpointConfig);
    get arn(): string;
    private _endpointConfigName?;
    get endpointConfigName(): string;
    set endpointConfigName(value: string);
    get endpointConfigNameInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
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
    private _deploymentConfig;
    get deploymentConfig(): SagemakerEndpointDeploymentConfigOutputReference;
    putDeploymentConfig(value: SagemakerEndpointDeploymentConfig): void;
    resetDeploymentConfig(): void;
    get deploymentConfigInput(): SagemakerEndpointDeploymentConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=sagemaker-endpoint.d.ts.map