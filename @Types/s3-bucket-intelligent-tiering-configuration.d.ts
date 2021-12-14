import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Simple Storage Service
*/
export interface S3BucketIntelligentTieringConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html#bucket S3BucketIntelligentTieringConfiguration#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html#name S3BucketIntelligentTieringConfiguration#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html#status S3BucketIntelligentTieringConfiguration#status}
    */
    readonly status?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html#filter S3BucketIntelligentTieringConfiguration#filter}
    */
    readonly filter?: S3BucketIntelligentTieringConfigurationFilter;
    /**
    * tiering block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html#tiering S3BucketIntelligentTieringConfiguration#tiering}
    */
    readonly tiering: S3BucketIntelligentTieringConfigurationTiering[];
}
export interface S3BucketIntelligentTieringConfigurationFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html#prefix S3BucketIntelligentTieringConfiguration#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html#tags S3BucketIntelligentTieringConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare function s3BucketIntelligentTieringConfigurationFilterToTerraform(struct?: S3BucketIntelligentTieringConfigurationFilterOutputReference | S3BucketIntelligentTieringConfigurationFilter): any;
export declare class S3BucketIntelligentTieringConfigurationFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketIntelligentTieringConfigurationFilter | undefined;
    set internalValue(value: S3BucketIntelligentTieringConfigurationFilter | undefined);
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
export interface S3BucketIntelligentTieringConfigurationTiering {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html#access_tier S3BucketIntelligentTieringConfiguration#access_tier}
    */
    readonly accessTier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html#days S3BucketIntelligentTieringConfiguration#days}
    */
    readonly days: number;
}
export declare function s3BucketIntelligentTieringConfigurationTieringToTerraform(struct?: S3BucketIntelligentTieringConfigurationTiering): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html aws_s3_bucket_intelligent_tiering_configuration}
*/
export declare class S3BucketIntelligentTieringConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html aws_s3_bucket_intelligent_tiering_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketIntelligentTieringConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: S3BucketIntelligentTieringConfigurationConfig);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string;
    private _filter;
    get filter(): S3BucketIntelligentTieringConfigurationFilterOutputReference;
    putFilter(value: S3BucketIntelligentTieringConfigurationFilter): void;
    resetFilter(): void;
    get filterInput(): S3BucketIntelligentTieringConfigurationFilter;
    private _tiering?;
    get tiering(): S3BucketIntelligentTieringConfigurationTiering[];
    set tiering(value: S3BucketIntelligentTieringConfigurationTiering[]);
    get tieringInput(): S3BucketIntelligentTieringConfigurationTiering[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=s3-bucket-intelligent-tiering-configuration.d.ts.map