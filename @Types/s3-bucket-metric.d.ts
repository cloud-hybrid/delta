import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Simple Storage Service
*/
export interface S3BucketMetricConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_metric.html#bucket S3BucketMetric#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_metric.html#name S3BucketMetric#name}
    */
    readonly name: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_metric.html#filter S3BucketMetric#filter}
    */
    readonly filter?: S3BucketMetricFilter;
}
export interface S3BucketMetricFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_metric.html#prefix S3BucketMetric#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_metric.html#tags S3BucketMetric#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare function s3BucketMetricFilterToTerraform(struct?: S3BucketMetricFilterOutputReference | S3BucketMetricFilter): any;
export declare class S3BucketMetricFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketMetricFilter | undefined;
    set internalValue(value: S3BucketMetricFilter | undefined);
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string;
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
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_metric.html aws_s3_bucket_metric}
*/
export declare class S3BucketMetric extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_metric.html aws_s3_bucket_metric} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketMetricConfig
    */
    constructor(scope: Construct, id: string, config: S3BucketMetricConfig);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _filter;
    get filter(): S3BucketMetricFilterOutputReference;
    putFilter(value: S3BucketMetricFilter): void;
    resetFilter(): void;
    get filterInput(): S3BucketMetricFilter;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=s3-bucket-metric.d.ts.map