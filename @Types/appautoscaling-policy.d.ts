import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS AppAutoScaling
*/
export interface AppautoscalingPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#name AppautoscalingPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#policy_type AppautoscalingPolicy#policy_type}
    */
    readonly policyType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#resource_id AppautoscalingPolicy#resource_id}
    */
    readonly resourceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#scalable_dimension AppautoscalingPolicy#scalable_dimension}
    */
    readonly scalableDimension: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#service_namespace AppautoscalingPolicy#service_namespace}
    */
    readonly serviceNamespace: string;
    /**
    * step_scaling_policy_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#step_scaling_policy_configuration AppautoscalingPolicy#step_scaling_policy_configuration}
    */
    readonly stepScalingPolicyConfiguration?: AppautoscalingPolicyStepScalingPolicyConfiguration;
    /**
    * target_tracking_scaling_policy_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#target_tracking_scaling_policy_configuration AppautoscalingPolicy#target_tracking_scaling_policy_configuration}
    */
    readonly targetTrackingScalingPolicyConfiguration?: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration;
}
export interface AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#metric_interval_lower_bound AppautoscalingPolicy#metric_interval_lower_bound}
    */
    readonly metricIntervalLowerBound?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#metric_interval_upper_bound AppautoscalingPolicy#metric_interval_upper_bound}
    */
    readonly metricIntervalUpperBound?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#scaling_adjustment AppautoscalingPolicy#scaling_adjustment}
    */
    readonly scalingAdjustment: number;
}
export declare function appautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentToTerraform(struct?: AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment): any;
export interface AppautoscalingPolicyStepScalingPolicyConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#adjustment_type AppautoscalingPolicy#adjustment_type}
    */
    readonly adjustmentType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#cooldown AppautoscalingPolicy#cooldown}
    */
    readonly cooldown?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#metric_aggregation_type AppautoscalingPolicy#metric_aggregation_type}
    */
    readonly metricAggregationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#min_adjustment_magnitude AppautoscalingPolicy#min_adjustment_magnitude}
    */
    readonly minAdjustmentMagnitude?: number;
    /**
    * step_adjustment block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#step_adjustment AppautoscalingPolicy#step_adjustment}
    */
    readonly stepAdjustment?: AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment[];
}
export declare function appautoscalingPolicyStepScalingPolicyConfigurationToTerraform(struct?: AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference | AppautoscalingPolicyStepScalingPolicyConfiguration): any;
export declare class AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppautoscalingPolicyStepScalingPolicyConfiguration | undefined;
    set internalValue(value: AppautoscalingPolicyStepScalingPolicyConfiguration | undefined);
    private _adjustmentType?;
    get adjustmentType(): string;
    set adjustmentType(value: string);
    resetAdjustmentType(): void;
    get adjustmentTypeInput(): string;
    private _cooldown?;
    get cooldown(): number;
    set cooldown(value: number);
    resetCooldown(): void;
    get cooldownInput(): number;
    private _metricAggregationType?;
    get metricAggregationType(): string;
    set metricAggregationType(value: string);
    resetMetricAggregationType(): void;
    get metricAggregationTypeInput(): string;
    private _minAdjustmentMagnitude?;
    get minAdjustmentMagnitude(): number;
    set minAdjustmentMagnitude(value: number);
    resetMinAdjustmentMagnitude(): void;
    get minAdjustmentMagnitudeInput(): number;
    private _stepAdjustment?;
    get stepAdjustment(): AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment[];
    set stepAdjustment(value: AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment[]);
    resetStepAdjustment(): void;
    get stepAdjustmentInput(): AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment[];
}
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#name AppautoscalingPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#value AppautoscalingPolicy#value}
    */
    readonly value: string;
}
export declare function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsToTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions): any;
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#metric_name AppautoscalingPolicy#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#namespace AppautoscalingPolicy#namespace}
    */
    readonly namespace: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#statistic AppautoscalingPolicy#statistic}
    */
    readonly statistic: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#unit AppautoscalingPolicy#unit}
    */
    readonly unit?: string;
    /**
    * dimensions block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#dimensions AppautoscalingPolicy#dimensions}
    */
    readonly dimensions?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions[];
}
export declare function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationToTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference | AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification): any;
export declare class AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification | undefined;
    set internalValue(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification | undefined);
    private _metricName?;
    get metricName(): string;
    set metricName(value: string);
    get metricNameInput(): string;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    get namespaceInput(): string;
    private _statistic?;
    get statistic(): string;
    set statistic(value: string);
    get statisticInput(): string;
    private _unit?;
    get unit(): string;
    set unit(value: string);
    resetUnit(): void;
    get unitInput(): string;
    private _dimensions?;
    get dimensions(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions[];
    set dimensions(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions[]);
    resetDimensions(): void;
    get dimensionsInput(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions[];
}
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#predefined_metric_type AppautoscalingPolicy#predefined_metric_type}
    */
    readonly predefinedMetricType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#resource_label AppautoscalingPolicy#resource_label}
    */
    readonly resourceLabel?: string;
}
export declare function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationToTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference | AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification): any;
export declare class AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification | undefined;
    set internalValue(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification | undefined);
    private _predefinedMetricType?;
    get predefinedMetricType(): string;
    set predefinedMetricType(value: string);
    get predefinedMetricTypeInput(): string;
    private _resourceLabel?;
    get resourceLabel(): string;
    set resourceLabel(value: string);
    resetResourceLabel(): void;
    get resourceLabelInput(): string;
}
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#disable_scale_in AppautoscalingPolicy#disable_scale_in}
    */
    readonly disableScaleIn?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#scale_in_cooldown AppautoscalingPolicy#scale_in_cooldown}
    */
    readonly scaleInCooldown?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#scale_out_cooldown AppautoscalingPolicy#scale_out_cooldown}
    */
    readonly scaleOutCooldown?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#target_value AppautoscalingPolicy#target_value}
    */
    readonly targetValue: number;
    /**
    * customized_metric_specification block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#customized_metric_specification AppautoscalingPolicy#customized_metric_specification}
    */
    readonly customizedMetricSpecification?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification;
    /**
    * predefined_metric_specification block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#predefined_metric_specification AppautoscalingPolicy#predefined_metric_specification}
    */
    readonly predefinedMetricSpecification?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification;
}
export declare function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationToTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference | AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration): any;
export declare class AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration | undefined;
    set internalValue(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration | undefined);
    private _disableScaleIn?;
    get disableScaleIn(): boolean | cdktf.IResolvable;
    set disableScaleIn(value: boolean | cdktf.IResolvable);
    resetDisableScaleIn(): void;
    get disableScaleInInput(): boolean | cdktf.IResolvable;
    private _scaleInCooldown?;
    get scaleInCooldown(): number;
    set scaleInCooldown(value: number);
    resetScaleInCooldown(): void;
    get scaleInCooldownInput(): number;
    private _scaleOutCooldown?;
    get scaleOutCooldown(): number;
    set scaleOutCooldown(value: number);
    resetScaleOutCooldown(): void;
    get scaleOutCooldownInput(): number;
    private _targetValue?;
    get targetValue(): number;
    set targetValue(value: number);
    get targetValueInput(): number;
    private _customizedMetricSpecification;
    get customizedMetricSpecification(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference;
    putCustomizedMetricSpecification(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification): void;
    resetCustomizedMetricSpecification(): void;
    get customizedMetricSpecificationInput(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification;
    private _predefinedMetricSpecification;
    get predefinedMetricSpecification(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference;
    putPredefinedMetricSpecification(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification): void;
    resetPredefinedMetricSpecification(): void;
    get predefinedMetricSpecificationInput(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html aws_appautoscaling_policy}
*/
export declare class AppautoscalingPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html aws_appautoscaling_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppautoscalingPolicyConfig
    */
    constructor(scope: Construct, id: string, config: AppautoscalingPolicyConfig);
    get arn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _policyType?;
    get policyType(): string;
    set policyType(value: string);
    resetPolicyType(): void;
    get policyTypeInput(): string;
    private _resourceId?;
    get resourceId(): string;
    set resourceId(value: string);
    get resourceIdInput(): string;
    private _scalableDimension?;
    get scalableDimension(): string;
    set scalableDimension(value: string);
    get scalableDimensionInput(): string;
    private _serviceNamespace?;
    get serviceNamespace(): string;
    set serviceNamespace(value: string);
    get serviceNamespaceInput(): string;
    private _stepScalingPolicyConfiguration;
    get stepScalingPolicyConfiguration(): AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference;
    putStepScalingPolicyConfiguration(value: AppautoscalingPolicyStepScalingPolicyConfiguration): void;
    resetStepScalingPolicyConfiguration(): void;
    get stepScalingPolicyConfigurationInput(): AppautoscalingPolicyStepScalingPolicyConfiguration;
    private _targetTrackingScalingPolicyConfiguration;
    get targetTrackingScalingPolicyConfiguration(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference;
    putTargetTrackingScalingPolicyConfiguration(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration): void;
    resetTargetTrackingScalingPolicyConfiguration(): void;
    get targetTrackingScalingPolicyConfigurationInput(): AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=appautoscaling-policy.d.ts.map