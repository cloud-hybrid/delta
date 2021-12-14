import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudWatch
*/
export interface CloudwatchMetricStreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#firehose_arn CloudwatchMetricStream#firehose_arn}
    */
    readonly firehoseArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#name CloudwatchMetricStream#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#name_prefix CloudwatchMetricStream#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#output_format CloudwatchMetricStream#output_format}
    */
    readonly outputFormat: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#role_arn CloudwatchMetricStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#tags CloudwatchMetricStream#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#tags_all CloudwatchMetricStream#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * exclude_filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#exclude_filter CloudwatchMetricStream#exclude_filter}
    */
    readonly excludeFilter?: CloudwatchMetricStreamExcludeFilter[];
    /**
    * include_filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#include_filter CloudwatchMetricStream#include_filter}
    */
    readonly includeFilter?: CloudwatchMetricStreamIncludeFilter[];
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#timeouts CloudwatchMetricStream#timeouts}
    */
    readonly timeouts?: CloudwatchMetricStreamTimeouts;
}
export interface CloudwatchMetricStreamExcludeFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#namespace CloudwatchMetricStream#namespace}
    */
    readonly namespace: string;
}
export declare function cloudwatchMetricStreamExcludeFilterToTerraform(struct?: CloudwatchMetricStreamExcludeFilter): any;
export interface CloudwatchMetricStreamIncludeFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#namespace CloudwatchMetricStream#namespace}
    */
    readonly namespace: string;
}
export declare function cloudwatchMetricStreamIncludeFilterToTerraform(struct?: CloudwatchMetricStreamIncludeFilter): any;
export interface CloudwatchMetricStreamTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#create CloudwatchMetricStream#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#delete CloudwatchMetricStream#delete}
    */
    readonly delete?: string;
}
export declare function cloudwatchMetricStreamTimeoutsToTerraform(struct?: CloudwatchMetricStreamTimeoutsOutputReference | CloudwatchMetricStreamTimeouts): any;
export declare class CloudwatchMetricStreamTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudwatchMetricStreamTimeouts | undefined;
    set internalValue(value: CloudwatchMetricStreamTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html aws_cloudwatch_metric_stream}
*/
export declare class CloudwatchMetricStream extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html aws_cloudwatch_metric_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchMetricStreamConfig
    */
    constructor(scope: Construct, id: string, config: CloudwatchMetricStreamConfig);
    get arn(): string;
    get creationDate(): string;
    private _firehoseArn?;
    get firehoseArn(): string;
    set firehoseArn(value: string);
    get firehoseArnInput(): string;
    get id(): string;
    get lastUpdateDate(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string;
    private _outputFormat?;
    get outputFormat(): string;
    set outputFormat(value: string);
    get outputFormatInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    get state(): string;
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
    private _excludeFilter?;
    get excludeFilter(): CloudwatchMetricStreamExcludeFilter[];
    set excludeFilter(value: CloudwatchMetricStreamExcludeFilter[]);
    resetExcludeFilter(): void;
    get excludeFilterInput(): CloudwatchMetricStreamExcludeFilter[];
    private _includeFilter?;
    get includeFilter(): CloudwatchMetricStreamIncludeFilter[];
    set includeFilter(value: CloudwatchMetricStreamIncludeFilter[]);
    resetIncludeFilter(): void;
    get includeFilterInput(): CloudwatchMetricStreamIncludeFilter[];
    private _timeouts;
    get timeouts(): CloudwatchMetricStreamTimeoutsOutputReference;
    putTimeouts(value: CloudwatchMetricStreamTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): CloudwatchMetricStreamTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cloudwatch-metric-stream.d.ts.map