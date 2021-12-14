import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudFront
*/
export interface CloudfrontCachePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#comment CloudfrontCachePolicy#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#default_ttl CloudfrontCachePolicy#default_ttl}
    */
    readonly defaultTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#max_ttl CloudfrontCachePolicy#max_ttl}
    */
    readonly maxTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#min_ttl CloudfrontCachePolicy#min_ttl}
    */
    readonly minTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#name CloudfrontCachePolicy#name}
    */
    readonly name: string;
    /**
    * parameters_in_cache_key_and_forwarded_to_origin block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#parameters_in_cache_key_and_forwarded_to_origin CloudfrontCachePolicy#parameters_in_cache_key_and_forwarded_to_origin}
    */
    readonly parametersInCacheKeyAndForwardedToOrigin: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin;
}
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#items CloudfrontCachePolicy#items}
    */
    readonly items?: string[];
}
export declare function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies): any;
export declare class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies | undefined;
    set internalValue(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies | undefined);
    private _items?;
    get items(): string[];
    set items(value: string[]);
    resetItems(): void;
    get itemsInput(): string[];
}
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#cookie_behavior CloudfrontCachePolicy#cookie_behavior}
    */
    readonly cookieBehavior: string;
    /**
    * cookies block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#cookies CloudfrontCachePolicy#cookies}
    */
    readonly cookies?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies;
}
export declare function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig): any;
export declare class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig | undefined;
    set internalValue(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig | undefined);
    private _cookieBehavior?;
    get cookieBehavior(): string;
    set cookieBehavior(value: string);
    get cookieBehaviorInput(): string;
    private _cookies;
    get cookies(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference;
    putCookies(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies): void;
    resetCookies(): void;
    get cookiesInput(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies;
}
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#items CloudfrontCachePolicy#items}
    */
    readonly items?: string[];
}
export declare function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders): any;
export declare class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders | undefined;
    set internalValue(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders | undefined);
    private _items?;
    get items(): string[];
    set items(value: string[]);
    resetItems(): void;
    get itemsInput(): string[];
}
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#header_behavior CloudfrontCachePolicy#header_behavior}
    */
    readonly headerBehavior?: string;
    /**
    * headers block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#headers CloudfrontCachePolicy#headers}
    */
    readonly headers?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders;
}
export declare function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig): any;
export declare class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig | undefined;
    set internalValue(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig | undefined);
    private _headerBehavior?;
    get headerBehavior(): string;
    set headerBehavior(value: string);
    resetHeaderBehavior(): void;
    get headerBehaviorInput(): string;
    private _headers;
    get headers(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference;
    putHeaders(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders): void;
    resetHeaders(): void;
    get headersInput(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders;
}
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#items CloudfrontCachePolicy#items}
    */
    readonly items?: string[];
}
export declare function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings): any;
export declare class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings | undefined;
    set internalValue(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings | undefined);
    private _items?;
    get items(): string[];
    set items(value: string[]);
    resetItems(): void;
    get itemsInput(): string[];
}
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#query_string_behavior CloudfrontCachePolicy#query_string_behavior}
    */
    readonly queryStringBehavior: string;
    /**
    * query_strings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#query_strings CloudfrontCachePolicy#query_strings}
    */
    readonly queryStrings?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings;
}
export declare function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig): any;
export declare class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig | undefined;
    set internalValue(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig | undefined);
    private _queryStringBehavior?;
    get queryStringBehavior(): string;
    set queryStringBehavior(value: string);
    get queryStringBehaviorInput(): string;
    private _queryStrings;
    get queryStrings(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference;
    putQueryStrings(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings): void;
    resetQueryStrings(): void;
    get queryStringsInput(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings;
}
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#enable_accept_encoding_brotli CloudfrontCachePolicy#enable_accept_encoding_brotli}
    */
    readonly enableAcceptEncodingBrotli?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#enable_accept_encoding_gzip CloudfrontCachePolicy#enable_accept_encoding_gzip}
    */
    readonly enableAcceptEncodingGzip?: boolean | cdktf.IResolvable;
    /**
    * cookies_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#cookies_config CloudfrontCachePolicy#cookies_config}
    */
    readonly cookiesConfig: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig;
    /**
    * headers_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#headers_config CloudfrontCachePolicy#headers_config}
    */
    readonly headersConfig: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig;
    /**
    * query_strings_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#query_strings_config CloudfrontCachePolicy#query_strings_config}
    */
    readonly queryStringsConfig: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig;
}
export declare function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin): any;
export declare class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin | undefined;
    set internalValue(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin | undefined);
    private _enableAcceptEncodingBrotli?;
    get enableAcceptEncodingBrotli(): boolean | cdktf.IResolvable;
    set enableAcceptEncodingBrotli(value: boolean | cdktf.IResolvable);
    resetEnableAcceptEncodingBrotli(): void;
    get enableAcceptEncodingBrotliInput(): boolean | cdktf.IResolvable;
    private _enableAcceptEncodingGzip?;
    get enableAcceptEncodingGzip(): boolean | cdktf.IResolvable;
    set enableAcceptEncodingGzip(value: boolean | cdktf.IResolvable);
    resetEnableAcceptEncodingGzip(): void;
    get enableAcceptEncodingGzipInput(): boolean | cdktf.IResolvable;
    private _cookiesConfig;
    get cookiesConfig(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference;
    putCookiesConfig(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig): void;
    get cookiesConfigInput(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig;
    private _headersConfig;
    get headersConfig(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference;
    putHeadersConfig(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig): void;
    get headersConfigInput(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig;
    private _queryStringsConfig;
    get queryStringsConfig(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference;
    putQueryStringsConfig(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig): void;
    get queryStringsConfigInput(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html aws_cloudfront_cache_policy}
*/
export declare class CloudfrontCachePolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html aws_cloudfront_cache_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontCachePolicyConfig
    */
    constructor(scope: Construct, id: string, config: CloudfrontCachePolicyConfig);
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string;
    private _defaultTtl?;
    get defaultTtl(): number;
    set defaultTtl(value: number);
    resetDefaultTtl(): void;
    get defaultTtlInput(): number;
    get etag(): string;
    get id(): string;
    private _maxTtl?;
    get maxTtl(): number;
    set maxTtl(value: number);
    resetMaxTtl(): void;
    get maxTtlInput(): number;
    private _minTtl?;
    get minTtl(): number;
    set minTtl(value: number);
    resetMinTtl(): void;
    get minTtlInput(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _parametersInCacheKeyAndForwardedToOrigin;
    get parametersInCacheKeyAndForwardedToOrigin(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference;
    putParametersInCacheKeyAndForwardedToOrigin(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin): void;
    get parametersInCacheKeyAndForwardedToOriginInput(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cloudfront-cache-policy.d.ts.map