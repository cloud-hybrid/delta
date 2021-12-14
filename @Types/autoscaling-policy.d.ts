import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Auto Scaling
*/
export interface AutoscalingPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#adjustment_type AutoscalingPolicy#adjustment_type}
    */
    readonly adjustmentType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#autoscaling_group_name AutoscalingPolicy#autoscaling_group_name}
    */
    readonly autoscalingGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#cooldown AutoscalingPolicy#cooldown}
    */
    readonly cooldown?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#estimated_instance_warmup AutoscalingPolicy#estimated_instance_warmup}
    */
    readonly estimatedInstanceWarmup?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#metric_aggregation_type AutoscalingPolicy#metric_aggregation_type}
    */
    readonly metricAggregationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#min_adjustment_magnitude AutoscalingPolicy#min_adjustment_magnitude}
    */
    readonly minAdjustmentMagnitude?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#name AutoscalingPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#policy_type AutoscalingPolicy#policy_type}
    */
    readonly policyType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#scaling_adjustment AutoscalingPolicy#scaling_adjustment}
    */
    readonly scalingAdjustment?: number;
    /**
    * predictive_scaling_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#predictive_scaling_configuration AutoscalingPolicy#predictive_scaling_configuration}
    */
    readonly predictiveScalingConfiguration?: AutoscalingPolicyPredictiveScalingConfiguration;
    /**
    * step_adjustment block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#step_adjustment AutoscalingPolicy#step_adjustment}
    */
    readonly stepAdjustment?: AutoscalingPolicyStepAdjustment[];
    /**
    * target_tracking_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#target_tracking_configuration AutoscalingPolicy#target_tracking_configuration}
    */
    readonly targetTrackingConfiguration?: AutoscalingPolicyTargetTrackingConfiguration;
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#predefined_metric_type AutoscalingPolicy#predefined_metric_type}
    */
    readonly predefinedMetricType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#resource_label AutoscalingPolicy#resource_label}
    */
    readonly resourceLabel: string;
}
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification): any;
export declare class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification | undefined;
    set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification | undefined);
    private _predefinedMetricType?;
    get predefinedMetricType(): string;
    set predefinedMetricType(value: string);
    get predefinedMetricTypeInput(): string;
    private _resourceLabel?;
    get resourceLabel(): string;
    set resourceLabel(value: string);
    get resourceLabelInput(): string;
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#predefined_metric_type AutoscalingPolicy#predefined_metric_type}
    */
    readonly predefinedMetricType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#resource_label AutoscalingPolicy#resource_label}
    */
    readonly resourceLabel: string;
}
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification): any;
export declare class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification | undefined;
    set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification | undefined);
    private _predefinedMetricType?;
    get predefinedMetricType(): string;
    set predefinedMetricType(value: string);
    get predefinedMetricTypeInput(): string;
    private _resourceLabel?;
    get resourceLabel(): string;
    set resourceLabel(value: string);
    get resourceLabelInput(): string;
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#predefined_metric_type AutoscalingPolicy#predefined_metric_type}
    */
    readonly predefinedMetricType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#resource_label AutoscalingPolicy#resource_label}
    */
    readonly resourceLabel: string;
}
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification): any;
export declare class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification | undefined;
    set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification | undefined);
    private _predefinedMetricType?;
    get predefinedMetricType(): string;
    set predefinedMetricType(value: string);
    get predefinedMetricTypeInput(): string;
    private _resourceLabel?;
    get resourceLabel(): string;
    set resourceLabel(value: string);
    get resourceLabelInput(): string;
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#target_value AutoscalingPolicy#target_value}
    */
    readonly targetValue: number;
    /**
    * predefined_load_metric_specification block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#predefined_load_metric_specification AutoscalingPolicy#predefined_load_metric_specification}
    */
    readonly predefinedLoadMetricSpecification?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification;
    /**
    * predefined_metric_pair_specification block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#predefined_metric_pair_specification AutoscalingPolicy#predefined_metric_pair_specification}
    */
    readonly predefinedMetricPairSpecification?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification;
    /**
    * predefined_scaling_metric_specification block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#predefined_scaling_metric_specification AutoscalingPolicy#predefined_scaling_metric_specification}
    */
    readonly predefinedScalingMetricSpecification?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification;
}
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification): any;
export declare class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification | undefined;
    set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification | undefined);
    private _targetValue?;
    get targetValue(): number;
    set targetValue(value: number);
    get targetValueInput(): number;
    private _predefinedLoadMetricSpecification;
    get predefinedLoadMetricSpecification(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference;
    putPredefinedLoadMetricSpecification(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification): void;
    resetPredefinedLoadMetricSpecification(): void;
    get predefinedLoadMetricSpecificationInput(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification;
    private _predefinedMetricPairSpecification;
    get predefinedMetricPairSpecification(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference;
    putPredefinedMetricPairSpecification(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification): void;
    resetPredefinedMetricPairSpecification(): void;
    get predefinedMetricPairSpecificationInput(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification;
    private _predefinedScalingMetricSpecification;
    get predefinedScalingMetricSpecification(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference;
    putPredefinedScalingMetricSpecification(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification): void;
    resetPredefinedScalingMetricSpecification(): void;
    get predefinedScalingMetricSpecificationInput(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification;
}
export interface AutoscalingPolicyPredictiveScalingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#max_capacity_breach_behavior AutoscalingPolicy#max_capacity_breach_behavior}
    */
    readonly maxCapacityBreachBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#max_capacity_buffer AutoscalingPolicy#max_capacity_buffer}
    */
    readonly maxCapacityBuffer?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#mode AutoscalingPolicy#mode}
    */
    readonly mode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#scheduling_buffer_time AutoscalingPolicy#scheduling_buffer_time}
    */
    readonly schedulingBufferTime?: string;
    /**
    * metric_specification block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#metric_specification AutoscalingPolicy#metric_specification}
    */
    readonly metricSpecification: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification;
}
export declare function autoscalingPolicyPredictiveScalingConfigurationToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationOutputReference | AutoscalingPolicyPredictiveScalingConfiguration): any;
export declare class AutoscalingPolicyPredictiveScalingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AutoscalingPolicyPredictiveScalingConfiguration | undefined;
    set internalValue(value: AutoscalingPolicyPredictiveScalingConfiguration | undefined);
    private _maxCapacityBreachBehavior?;
    get maxCapacityBreachBehavior(): string;
    set maxCapacityBreachBehavior(value: string);
    resetMaxCapacityBreachBehavior(): void;
    get maxCapacityBreachBehaviorInput(): string;
    private _maxCapacityBuffer?;
    get maxCapacityBuffer(): string;
    set maxCapacityBuffer(value: string);
    resetMaxCapacityBuffer(): void;
    get maxCapacityBufferInput(): string;
    private _mode?;
    get mode(): string;
    set mode(value: string);
    resetMode(): void;
    get modeInput(): string;
    private _schedulingBufferTime?;
    get schedulingBufferTime(): string;
    set schedulingBufferTime(value: string);
    resetSchedulingBufferTime(): void;
    get schedulingBufferTimeInput(): string;
    private _metricSpecification;
    get metricSpecification(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference;
    putMetricSpecification(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification): void;
    get metricSpecificationInput(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification;
}
export interface AutoscalingPolicyStepAdjustment {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#metric_interval_lower_bound AutoscalingPolicy#metric_interval_lower_bound}
    */
    readonly metricIntervalLowerBound?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#metric_interval_upper_bound AutoscalingPolicy#metric_interval_upper_bound}
    */
    readonly metricIntervalUpperBound?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#scaling_adjustment AutoscalingPolicy#scaling_adjustment}
    */
    readonly scalingAdjustment: number;
}
export declare function autoscalingPolicyStepAdjustmentToTerraform(struct?: AutoscalingPolicyStepAdjustment): any;
export interface AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#name AutoscalingPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#value AutoscalingPolicy#value}
    */
    readonly value: string;
}
export declare function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension): any;
export interface AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#metric_name AutoscalingPolicy#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#namespace AutoscalingPolicy#namespace}
    */
    readonly namespace: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#statistic AutoscalingPolicy#statistic}
    */
    readonly statistic: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#unit AutoscalingPolicy#unit}
    */
    readonly unit?: string;
    /**
    * metric_dimension block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#metric_dimension AutoscalingPolicy#metric_dimension}
    */
    readonly metricDimension?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension[];
}
export declare function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference | AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification): any;
export declare class AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification | undefined;
    set internalValue(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification | undefined);
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
    private _metricDimension?;
    get metricDimension(): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension[];
    set metricDimension(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension[]);
    resetMetricDimension(): void;
    get metricDimensionInput(): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension[];
}
export interface AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#predefined_metric_type AutoscalingPolicy#predefined_metric_type}
    */
    readonly predefinedMetricType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#resource_label AutoscalingPolicy#resource_label}
    */
    readonly resourceLabel?: string;
}
export declare function autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference | AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification): any;
export declare class AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification | undefined;
    set internalValue(value: AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification | undefined);
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
export interface AutoscalingPolicyTargetTrackingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#disable_scale_in AutoscalingPolicy#disable_scale_in}
    */
    readonly disableScaleIn?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#target_value AutoscalingPolicy#target_value}
    */
    readonly targetValue: number;
    /**
    * customized_metric_specification block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#customized_metric_specification AutoscalingPolicy#customized_metric_specification}
    */
    readonly customizedMetricSpecification?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification;
    /**
    * predefined_metric_specification block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#predefined_metric_specification AutoscalingPolicy#predefined_metric_specification}
    */
    readonly predefinedMetricSpecification?: AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification;
}
export declare function autoscalingPolicyTargetTrackingConfigurationToTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationOutputReference | AutoscalingPolicyTargetTrackingConfiguration): any;
export declare class AutoscalingPolicyTargetTrackingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AutoscalingPolicyTargetTrackingConfiguration | undefined;
    set internalValue(value: AutoscalingPolicyTargetTrackingConfiguration | undefined);
    private _disableScaleIn?;
    get disableScaleIn(): boolean | cdktf.IResolvable;
    set disableScaleIn(value: boolean | cdktf.IResolvable);
    resetDisableScaleIn(): void;
    get disableScaleInInput(): boolean | cdktf.IResolvable;
    private _targetValue?;
    get targetValue(): number;
    set targetValue(value: number);
    get targetValueInput(): number;
    private _customizedMetricSpecification;
    get customizedMetricSpecification(): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference;
    putCustomizedMetricSpecification(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification): void;
    resetCustomizedMetricSpecification(): void;
    get customizedMetricSpecificationInput(): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification;
    private _predefinedMetricSpecification;
    get predefinedMetricSpecification(): AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference;
    putPredefinedMetricSpecification(value: AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification): void;
    resetPredefinedMetricSpecification(): void;
    get predefinedMetricSpecificationInput(): AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html aws_autoscaling_policy}
*/
export declare class AutoscalingPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html aws_autoscaling_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingPolicyConfig
    */
    constructor(scope: Construct, id: string, config: AutoscalingPolicyConfig);
    private _adjustmentType?;
    get adjustmentType(): string;
    set adjustmentType(value: string);
    resetAdjustmentType(): void;
    get adjustmentTypeInput(): string;
    get arn(): string;
    private _autoscalingGroupName?;
    get autoscalingGroupName(): string;
    set autoscalingGroupName(value: string);
    get autoscalingGroupNameInput(): string;
    private _cooldown?;
    get cooldown(): number;
    set cooldown(value: number);
    resetCooldown(): void;
    get cooldownInput(): number;
    private _estimatedInstanceWarmup?;
    get estimatedInstanceWarmup(): number;
    set estimatedInstanceWarmup(value: number);
    resetEstimatedInstanceWarmup(): void;
    get estimatedInstanceWarmupInput(): number;
    get id(): string;
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
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _policyType?;
    get policyType(): string;
    set policyType(value: string);
    resetPolicyType(): void;
    get policyTypeInput(): string;
    private _scalingAdjustment?;
    get scalingAdjustment(): number;
    set scalingAdjustment(value: number);
    resetScalingAdjustment(): void;
    get scalingAdjustmentInput(): number;
    private _predictiveScalingConfiguration;
    get predictiveScalingConfiguration(): AutoscalingPolicyPredictiveScalingConfigurationOutputReference;
    putPredictiveScalingConfiguration(value: AutoscalingPolicyPredictiveScalingConfiguration): void;
    resetPredictiveScalingConfiguration(): void;
    get predictiveScalingConfigurationInput(): AutoscalingPolicyPredictiveScalingConfiguration;
    private _stepAdjustment?;
    get stepAdjustment(): AutoscalingPolicyStepAdjustment[];
    set stepAdjustment(value: AutoscalingPolicyStepAdjustment[]);
    resetStepAdjustment(): void;
    get stepAdjustmentInput(): AutoscalingPolicyStepAdjustment[];
    private _targetTrackingConfiguration;
    get targetTrackingConfiguration(): AutoscalingPolicyTargetTrackingConfigurationOutputReference;
    putTargetTrackingConfiguration(value: AutoscalingPolicyTargetTrackingConfiguration): void;
    resetTargetTrackingConfiguration(): void;
    get targetTrackingConfigurationInput(): AutoscalingPolicyTargetTrackingConfiguration;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=autoscaling-policy.d.ts.map