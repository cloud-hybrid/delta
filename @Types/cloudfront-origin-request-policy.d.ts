import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudFront
*/
export interface CloudfrontOriginRequestPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#comment CloudfrontOriginRequestPolicy#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#name CloudfrontOriginRequestPolicy#name}
    */
    readonly name: string;
    /**
    * cookies_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#cookies_config CloudfrontOriginRequestPolicy#cookies_config}
    */
    readonly cookiesConfig: CloudfrontOriginRequestPolicyCookiesConfig;
    /**
    * headers_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#headers_config CloudfrontOriginRequestPolicy#headers_config}
    */
    readonly headersConfig: CloudfrontOriginRequestPolicyHeadersConfig;
    /**
    * query_strings_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#query_strings_config CloudfrontOriginRequestPolicy#query_strings_config}
    */
    readonly queryStringsConfig: CloudfrontOriginRequestPolicyQueryStringsConfig;
}
export interface CloudfrontOriginRequestPolicyCookiesConfigCookies {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#items CloudfrontOriginRequestPolicy#items}
    */
    readonly items?: string[];
}
export declare function cloudfrontOriginRequestPolicyCookiesConfigCookiesToTerraform(struct?: CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference | CloudfrontOriginRequestPolicyCookiesConfigCookies): any;
export declare class CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontOriginRequestPolicyCookiesConfigCookies | undefined;
    set internalValue(value: CloudfrontOriginRequestPolicyCookiesConfigCookies | undefined);
    private _items?;
    get items(): string[];
    set items(value: string[]);
    resetItems(): void;
    get itemsInput(): string[];
}
export interface CloudfrontOriginRequestPolicyCookiesConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#cookie_behavior CloudfrontOriginRequestPolicy#cookie_behavior}
    */
    readonly cookieBehavior: string;
    /**
    * cookies block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#cookies CloudfrontOriginRequestPolicy#cookies}
    */
    readonly cookies?: CloudfrontOriginRequestPolicyCookiesConfigCookies;
}
export declare function cloudfrontOriginRequestPolicyCookiesConfigToTerraform(struct?: CloudfrontOriginRequestPolicyCookiesConfigOutputReference | CloudfrontOriginRequestPolicyCookiesConfig): any;
export declare class CloudfrontOriginRequestPolicyCookiesConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontOriginRequestPolicyCookiesConfig | undefined;
    set internalValue(value: CloudfrontOriginRequestPolicyCookiesConfig | undefined);
    private _cookieBehavior?;
    get cookieBehavior(): string;
    set cookieBehavior(value: string);
    get cookieBehaviorInput(): string;
    private _cookies;
    get cookies(): CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference;
    putCookies(value: CloudfrontOriginRequestPolicyCookiesConfigCookies): void;
    resetCookies(): void;
    get cookiesInput(): CloudfrontOriginRequestPolicyCookiesConfigCookies;
}
export interface CloudfrontOriginRequestPolicyHeadersConfigHeaders {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#items CloudfrontOriginRequestPolicy#items}
    */
    readonly items?: string[];
}
export declare function cloudfrontOriginRequestPolicyHeadersConfigHeadersToTerraform(struct?: CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference | CloudfrontOriginRequestPolicyHeadersConfigHeaders): any;
export declare class CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontOriginRequestPolicyHeadersConfigHeaders | undefined;
    set internalValue(value: CloudfrontOriginRequestPolicyHeadersConfigHeaders | undefined);
    private _items?;
    get items(): string[];
    set items(value: string[]);
    resetItems(): void;
    get itemsInput(): string[];
}
export interface CloudfrontOriginRequestPolicyHeadersConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#header_behavior CloudfrontOriginRequestPolicy#header_behavior}
    */
    readonly headerBehavior?: string;
    /**
    * headers block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#headers CloudfrontOriginRequestPolicy#headers}
    */
    readonly headers?: CloudfrontOriginRequestPolicyHeadersConfigHeaders;
}
export declare function cloudfrontOriginRequestPolicyHeadersConfigToTerraform(struct?: CloudfrontOriginRequestPolicyHeadersConfigOutputReference | CloudfrontOriginRequestPolicyHeadersConfig): any;
export declare class CloudfrontOriginRequestPolicyHeadersConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontOriginRequestPolicyHeadersConfig | undefined;
    set internalValue(value: CloudfrontOriginRequestPolicyHeadersConfig | undefined);
    private _headerBehavior?;
    get headerBehavior(): string;
    set headerBehavior(value: string);
    resetHeaderBehavior(): void;
    get headerBehaviorInput(): string;
    private _headers;
    get headers(): CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference;
    putHeaders(value: CloudfrontOriginRequestPolicyHeadersConfigHeaders): void;
    resetHeaders(): void;
    get headersInput(): CloudfrontOriginRequestPolicyHeadersConfigHeaders;
}
export interface CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#items CloudfrontOriginRequestPolicy#items}
    */
    readonly items?: string[];
}
export declare function cloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsToTerraform(struct?: CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference | CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings): any;
export declare class CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings | undefined;
    set internalValue(value: CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings | undefined);
    private _items?;
    get items(): string[];
    set items(value: string[]);
    resetItems(): void;
    get itemsInput(): string[];
}
export interface CloudfrontOriginRequestPolicyQueryStringsConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#query_string_behavior CloudfrontOriginRequestPolicy#query_string_behavior}
    */
    readonly queryStringBehavior: string;
    /**
    * query_strings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#query_strings CloudfrontOriginRequestPolicy#query_strings}
    */
    readonly queryStrings?: CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings;
}
export declare function cloudfrontOriginRequestPolicyQueryStringsConfigToTerraform(struct?: CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference | CloudfrontOriginRequestPolicyQueryStringsConfig): any;
export declare class CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontOriginRequestPolicyQueryStringsConfig | undefined;
    set internalValue(value: CloudfrontOriginRequestPolicyQueryStringsConfig | undefined);
    private _queryStringBehavior?;
    get queryStringBehavior(): string;
    set queryStringBehavior(value: string);
    get queryStringBehaviorInput(): string;
    private _queryStrings;
    get queryStrings(): CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference;
    putQueryStrings(value: CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings): void;
    resetQueryStrings(): void;
    get queryStringsInput(): CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html aws_cloudfront_origin_request_policy}
*/
export declare class CloudfrontOriginRequestPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html aws_cloudfront_origin_request_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontOriginRequestPolicyConfig
    */
    constructor(scope: Construct, id: string, config: CloudfrontOriginRequestPolicyConfig);
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string;
    get etag(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _cookiesConfig;
    get cookiesConfig(): CloudfrontOriginRequestPolicyCookiesConfigOutputReference;
    putCookiesConfig(value: CloudfrontOriginRequestPolicyCookiesConfig): void;
    get cookiesConfigInput(): CloudfrontOriginRequestPolicyCookiesConfig;
    private _headersConfig;
    get headersConfig(): CloudfrontOriginRequestPolicyHeadersConfigOutputReference;
    putHeadersConfig(value: CloudfrontOriginRequestPolicyHeadersConfig): void;
    get headersConfigInput(): CloudfrontOriginRequestPolicyHeadersConfig;
    private _queryStringsConfig;
    get queryStringsConfig(): CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference;
    putQueryStringsConfig(value: CloudfrontOriginRequestPolicyQueryStringsConfig): void;
    get queryStringsConfigInput(): CloudfrontOriginRequestPolicyQueryStringsConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cloudfront-origin-request-policy.d.ts.map