import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudWatch
*/
export interface CloudwatchMetricAlarmConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#actions_enabled CloudwatchMetricAlarm#actions_enabled}
    */
    readonly actionsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#alarm_actions CloudwatchMetricAlarm#alarm_actions}
    */
    readonly alarmActions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#alarm_description CloudwatchMetricAlarm#alarm_description}
    */
    readonly alarmDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#alarm_name CloudwatchMetricAlarm#alarm_name}
    */
    readonly alarmName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#comparison_operator CloudwatchMetricAlarm#comparison_operator}
    */
    readonly comparisonOperator: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#datapoints_to_alarm CloudwatchMetricAlarm#datapoints_to_alarm}
    */
    readonly datapointsToAlarm?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#dimensions CloudwatchMetricAlarm#dimensions}
    */
    readonly dimensions?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#evaluate_low_sample_count_percentiles CloudwatchMetricAlarm#evaluate_low_sample_count_percentiles}
    */
    readonly evaluateLowSampleCountPercentiles?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#evaluation_periods CloudwatchMetricAlarm#evaluation_periods}
    */
    readonly evaluationPeriods: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#extended_statistic CloudwatchMetricAlarm#extended_statistic}
    */
    readonly extendedStatistic?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#insufficient_data_actions CloudwatchMetricAlarm#insufficient_data_actions}
    */
    readonly insufficientDataActions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#metric_name CloudwatchMetricAlarm#metric_name}
    */
    readonly metricName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#namespace CloudwatchMetricAlarm#namespace}
    */
    readonly namespace?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#ok_actions CloudwatchMetricAlarm#ok_actions}
    */
    readonly okActions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#period CloudwatchMetricAlarm#period}
    */
    readonly period?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#statistic CloudwatchMetricAlarm#statistic}
    */
    readonly statistic?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#tags CloudwatchMetricAlarm#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#tags_all CloudwatchMetricAlarm#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#threshold CloudwatchMetricAlarm#threshold}
    */
    readonly threshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#threshold_metric_id CloudwatchMetricAlarm#threshold_metric_id}
    */
    readonly thresholdMetricId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#treat_missing_data CloudwatchMetricAlarm#treat_missing_data}
    */
    readonly treatMissingData?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#unit CloudwatchMetricAlarm#unit}
    */
    readonly unit?: string;
    /**
    * metric_query block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#metric_query CloudwatchMetricAlarm#metric_query}
    */
    readonly metricQuery?: CloudwatchMetricAlarmMetricQuery[];
}
export interface CloudwatchMetricAlarmMetricQueryMetric {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#dimensions CloudwatchMetricAlarm#dimensions}
    */
    readonly dimensions?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#metric_name CloudwatchMetricAlarm#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#namespace CloudwatchMetricAlarm#namespace}
    */
    readonly namespace?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#period CloudwatchMetricAlarm#period}
    */
    readonly period: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#stat CloudwatchMetricAlarm#stat}
    */
    readonly stat: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#unit CloudwatchMetricAlarm#unit}
    */
    readonly unit?: string;
}
export declare function cloudwatchMetricAlarmMetricQueryMetricToTerraform(struct?: CloudwatchMetricAlarmMetricQueryMetricOutputReference | CloudwatchMetricAlarmMetricQueryMetric): any;
export declare class CloudwatchMetricAlarmMetricQueryMetricOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudwatchMetricAlarmMetricQueryMetric | undefined;
    set internalValue(value: CloudwatchMetricAlarmMetricQueryMetric | undefined);
    private _dimensions?;
    get dimensions(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set dimensions(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetDimensions(): void;
    get dimensionsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _metricName?;
    get metricName(): string;
    set metricName(value: string);
    get metricNameInput(): string;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    resetNamespace(): void;
    get namespaceInput(): string;
    private _period?;
    get period(): number;
    set period(value: number);
    get periodInput(): number;
    private _stat?;
    get stat(): string;
    set stat(value: string);
    get statInput(): string;
    private _unit?;
    get unit(): string;
    set unit(value: string);
    resetUnit(): void;
    get unitInput(): string;
}
export interface CloudwatchMetricAlarmMetricQuery {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#account_id CloudwatchMetricAlarm#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#expression CloudwatchMetricAlarm#expression}
    */
    readonly expression?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#id CloudwatchMetricAlarm#id}
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#label CloudwatchMetricAlarm#label}
    */
    readonly label?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#return_data CloudwatchMetricAlarm#return_data}
    */
    readonly returnData?: boolean | cdktf.IResolvable;
    /**
    * metric block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#metric CloudwatchMetricAlarm#metric}
    */
    readonly metric?: CloudwatchMetricAlarmMetricQueryMetric;
}
export declare function cloudwatchMetricAlarmMetricQueryToTerraform(struct?: CloudwatchMetricAlarmMetricQuery): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html aws_cloudwatch_metric_alarm}
*/
export declare class CloudwatchMetricAlarm extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html aws_cloudwatch_metric_alarm} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchMetricAlarmConfig
    */
    constructor(scope: Construct, id: string, config: CloudwatchMetricAlarmConfig);
    private _actionsEnabled?;
    get actionsEnabled(): boolean | cdktf.IResolvable;
    set actionsEnabled(value: boolean | cdktf.IResolvable);
    resetActionsEnabled(): void;
    get actionsEnabledInput(): boolean | cdktf.IResolvable;
    private _alarmActions?;
    get alarmActions(): string[];
    set alarmActions(value: string[]);
    resetAlarmActions(): void;
    get alarmActionsInput(): string[];
    private _alarmDescription?;
    get alarmDescription(): string;
    set alarmDescription(value: string);
    resetAlarmDescription(): void;
    get alarmDescriptionInput(): string;
    private _alarmName?;
    get alarmName(): string;
    set alarmName(value: string);
    get alarmNameInput(): string;
    get arn(): string;
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _datapointsToAlarm?;
    get datapointsToAlarm(): number;
    set datapointsToAlarm(value: number);
    resetDatapointsToAlarm(): void;
    get datapointsToAlarmInput(): number;
    private _dimensions?;
    get dimensions(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set dimensions(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetDimensions(): void;
    get dimensionsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _evaluateLowSampleCountPercentiles?;
    get evaluateLowSampleCountPercentiles(): string;
    set evaluateLowSampleCountPercentiles(value: string);
    resetEvaluateLowSampleCountPercentiles(): void;
    get evaluateLowSampleCountPercentilesInput(): string;
    private _evaluationPeriods?;
    get evaluationPeriods(): number;
    set evaluationPeriods(value: number);
    get evaluationPeriodsInput(): number;
    private _extendedStatistic?;
    get extendedStatistic(): string;
    set extendedStatistic(value: string);
    resetExtendedStatistic(): void;
    get extendedStatisticInput(): string;
    get id(): string;
    private _insufficientDataActions?;
    get insufficientDataActions(): string[];
    set insufficientDataActions(value: string[]);
    resetInsufficientDataActions(): void;
    get insufficientDataActionsInput(): string[];
    private _metricName?;
    get metricName(): string;
    set metricName(value: string);
    resetMetricName(): void;
    get metricNameInput(): string;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    resetNamespace(): void;
    get namespaceInput(): string;
    private _okActions?;
    get okActions(): string[];
    set okActions(value: string[]);
    resetOkActions(): void;
    get okActionsInput(): string[];
    private _period?;
    get period(): number;
    set period(value: number);
    resetPeriod(): void;
    get periodInput(): number;
    private _statistic?;
    get statistic(): string;
    set statistic(value: string);
    resetStatistic(): void;
    get statisticInput(): string;
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
    private _threshold?;
    get threshold(): number;
    set threshold(value: number);
    resetThreshold(): void;
    get thresholdInput(): number;
    private _thresholdMetricId?;
    get thresholdMetricId(): string;
    set thresholdMetricId(value: string);
    resetThresholdMetricId(): void;
    get thresholdMetricIdInput(): string;
    private _treatMissingData?;
    get treatMissingData(): string;
    set treatMissingData(value: string);
    resetTreatMissingData(): void;
    get treatMissingDataInput(): string;
    private _unit?;
    get unit(): string;
    set unit(value: string);
    resetUnit(): void;
    get unitInput(): string;
    private _metricQuery?;
    get metricQuery(): CloudwatchMetricAlarmMetricQuery[];
    set metricQuery(value: CloudwatchMetricAlarmMetricQuery[]);
    resetMetricQuery(): void;
    get metricQueryInput(): CloudwatchMetricAlarmMetricQuery[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cloudwatch-metric-alarm.d.ts.map