import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudFront
*/
export interface DataAwsCloudfrontDistributionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_distribution.html#id DataAwsCloudfrontDistribution#id}
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_distribution.html#tags DataAwsCloudfrontDistribution#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_distribution.html aws_cloudfront_distribution}
*/
export declare class DataAwsCloudfrontDistribution extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_distribution.html aws_cloudfront_distribution} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudfrontDistributionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsCloudfrontDistributionConfig);
    get arn(): string;
    get domainName(): string;
    get enabled(): any;
    get etag(): string;
    get hostedZoneId(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get inProgressValidationBatches(): number;
    get lastModifiedTime(): string;
    get status(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-cloudfront-distribution.d.ts.map