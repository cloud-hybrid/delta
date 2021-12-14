import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudFront
*/
export interface DataAwsCloudfrontCachePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_cache_policy.html#id DataAwsCloudfrontCachePolicy#id}
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_cache_policy.html#name DataAwsCloudfrontCachePolicy#name}
    */
    readonly name?: string;
}
export declare class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies extends cdktf.ComplexComputedList {
    get items(): string[];
}
export declare class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig extends cdktf.ComplexComputedList {
    get cookieBehavior(): string;
    get cookies(): any;
}
export declare class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders extends cdktf.ComplexComputedList {
    get items(): string[];
}
export declare class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig extends cdktf.ComplexComputedList {
    get headerBehavior(): string;
    get headers(): any;
}
export declare class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings extends cdktf.ComplexComputedList {
    get items(): string[];
}
export declare class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig extends cdktf.ComplexComputedList {
    get queryStringBehavior(): string;
    get queryStrings(): any;
}
export declare class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin extends cdktf.ComplexComputedList {
    get cookiesConfig(): any;
    get enableAcceptEncodingBrotli(): any;
    get enableAcceptEncodingGzip(): any;
    get headersConfig(): any;
    get queryStringsConfig(): any;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_cache_policy.html aws_cloudfront_cache_policy}
*/
export declare class DataAwsCloudfrontCachePolicy extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_cache_policy.html aws_cloudfront_cache_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudfrontCachePolicyConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsCloudfrontCachePolicyConfig);
    get comment(): string;
    get defaultTtl(): number;
    get etag(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get maxTtl(): number;
    get minTtl(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    parametersInCacheKeyAndForwardedToOrigin(index: string): DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-cloudfront-cache-policy.d.ts.map