import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudWatch
*/
export interface CloudwatchLogMetricFilterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#log_group_name CloudwatchLogMetricFilter#log_group_name}
    */
    readonly logGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#name CloudwatchLogMetricFilter#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#pattern CloudwatchLogMetricFilter#pattern}
    */
    readonly pattern: string;
    /**
    * metric_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#metric_transformation CloudwatchLogMetricFilter#metric_transformation}
    */
    readonly metricTransformation: CloudwatchLogMetricFilterMetricTransformation;
}
export interface CloudwatchLogMetricFilterMetricTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#default_value CloudwatchLogMetricFilter#default_value}
    */
    readonly defaultValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#dimensions CloudwatchLogMetricFilter#dimensions}
    */
    readonly dimensions?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#name CloudwatchLogMetricFilter#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#namespace CloudwatchLogMetricFilter#namespace}
    */
    readonly namespace: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#unit CloudwatchLogMetricFilter#unit}
    */
    readonly unit?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#value CloudwatchLogMetricFilter#value}
    */
    readonly value: string;
}
export declare function cloudwatchLogMetricFilterMetricTransformationToTerraform(struct?: CloudwatchLogMetricFilterMetricTransformationOutputReference | CloudwatchLogMetricFilterMetricTransformation): any;
export declare class CloudwatchLogMetricFilterMetricTransformationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudwatchLogMetricFilterMetricTransformation | undefined;
    set internalValue(value: CloudwatchLogMetricFilterMetricTransformation | undefined);
    private _defaultValue?;
    get defaultValue(): string;
    set defaultValue(value: string);
    resetDefaultValue(): void;
    get defaultValueInput(): string;
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
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    get namespaceInput(): string;
    private _unit?;
    get unit(): string;
    set unit(value: string);
    resetUnit(): void;
    get unitInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html aws_cloudwatch_log_metric_filter}
*/
export declare class CloudwatchLogMetricFilter extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html aws_cloudwatch_log_metric_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchLogMetricFilterConfig
    */
    constructor(scope: Construct, id: string, config: CloudwatchLogMetricFilterConfig);
    get id(): string;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    get logGroupNameInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _pattern?;
    get pattern(): string;
    set pattern(value: string);
    get patternInput(): string;
    private _metricTransformation;
    get metricTransformation(): CloudwatchLogMetricFilterMetricTransformationOutputReference;
    putMetricTransformation(value: CloudwatchLogMetricFilterMetricTransformation): void;
    get metricTransformationInput(): CloudwatchLogMetricFilterMetricTransformation;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cloudwatch-log-metric-filter.d.ts.map