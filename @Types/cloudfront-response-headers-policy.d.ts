import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudFront
*/
export interface CloudfrontResponseHeadersPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#comment CloudfrontResponseHeadersPolicy#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#etag CloudfrontResponseHeadersPolicy#etag}
    */
    readonly etag?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#name CloudfrontResponseHeadersPolicy#name}
    */
    readonly name: string;
    /**
    * cors_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#cors_config CloudfrontResponseHeadersPolicy#cors_config}
    */
    readonly corsConfig?: CloudfrontResponseHeadersPolicyCorsConfig;
    /**
    * custom_headers_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#custom_headers_config CloudfrontResponseHeadersPolicy#custom_headers_config}
    */
    readonly customHeadersConfig?: CloudfrontResponseHeadersPolicyCustomHeadersConfig;
    /**
    * security_headers_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#security_headers_config CloudfrontResponseHeadersPolicy#security_headers_config}
    */
    readonly securityHeadersConfig?: CloudfrontResponseHeadersPolicySecurityHeadersConfig;
}
export interface CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#items CloudfrontResponseHeadersPolicy#items}
    */
    readonly items?: string[];
}
export declare function cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToTerraform(struct?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference | CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders): any;
export declare class CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders | undefined;
    set internalValue(value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders | undefined);
    private _items?;
    get items(): string[];
    set items(value: string[]);
    resetItems(): void;
    get itemsInput(): string[];
}
export interface CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#items CloudfrontResponseHeadersPolicy#items}
    */
    readonly items?: string[];
}
export declare function cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToTerraform(struct?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference | CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods): any;
export declare class CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods | undefined;
    set internalValue(value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods | undefined);
    private _items?;
    get items(): string[];
    set items(value: string[]);
    resetItems(): void;
    get itemsInput(): string[];
}
export interface CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#items CloudfrontResponseHeadersPolicy#items}
    */
    readonly items?: string[];
}
export declare function cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToTerraform(struct?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference | CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins): any;
export declare class CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins | undefined;
    set internalValue(value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins | undefined);
    private _items?;
    get items(): string[];
    set items(value: string[]);
    resetItems(): void;
    get itemsInput(): string[];
}
export interface CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#items CloudfrontResponseHeadersPolicy#items}
    */
    readonly items?: string[];
}
export declare function cloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToTerraform(struct?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference | CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders): any;
export declare class CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders | undefined;
    set internalValue(value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders | undefined);
    private _items?;
    get items(): string[];
    set items(value: string[]);
    resetItems(): void;
    get itemsInput(): string[];
}
export interface CloudfrontResponseHeadersPolicyCorsConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#access_control_allow_credentials CloudfrontResponseHeadersPolicy#access_control_allow_credentials}
    */
    readonly accessControlAllowCredentials: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#access_control_max_age_sec CloudfrontResponseHeadersPolicy#access_control_max_age_sec}
    */
    readonly accessControlMaxAgeSec?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#origin_override CloudfrontResponseHeadersPolicy#origin_override}
    */
    readonly originOverride: boolean | cdktf.IResolvable;
    /**
    * access_control_allow_headers block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#access_control_allow_headers CloudfrontResponseHeadersPolicy#access_control_allow_headers}
    */
    readonly accessControlAllowHeaders: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders;
    /**
    * access_control_allow_methods block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#access_control_allow_methods CloudfrontResponseHeadersPolicy#access_control_allow_methods}
    */
    readonly accessControlAllowMethods: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods;
    /**
    * access_control_allow_origins block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#access_control_allow_origins CloudfrontResponseHeadersPolicy#access_control_allow_origins}
    */
    readonly accessControlAllowOrigins: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins;
    /**
    * access_control_expose_headers block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#access_control_expose_headers CloudfrontResponseHeadersPolicy#access_control_expose_headers}
    */
    readonly accessControlExposeHeaders?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders;
}
export declare function cloudfrontResponseHeadersPolicyCorsConfigToTerraform(struct?: CloudfrontResponseHeadersPolicyCorsConfigOutputReference | CloudfrontResponseHeadersPolicyCorsConfig): any;
export declare class CloudfrontResponseHeadersPolicyCorsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontResponseHeadersPolicyCorsConfig | undefined;
    set internalValue(value: CloudfrontResponseHeadersPolicyCorsConfig | undefined);
    private _accessControlAllowCredentials?;
    get accessControlAllowCredentials(): boolean | cdktf.IResolvable;
    set accessControlAllowCredentials(value: boolean | cdktf.IResolvable);
    get accessControlAllowCredentialsInput(): boolean | cdktf.IResolvable;
    private _accessControlMaxAgeSec?;
    get accessControlMaxAgeSec(): number;
    set accessControlMaxAgeSec(value: number);
    resetAccessControlMaxAgeSec(): void;
    get accessControlMaxAgeSecInput(): number;
    private _originOverride?;
    get originOverride(): boolean | cdktf.IResolvable;
    set originOverride(value: boolean | cdktf.IResolvable);
    get originOverrideInput(): boolean | cdktf.IResolvable;
    private _accessControlAllowHeaders;
    get accessControlAllowHeaders(): CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference;
    putAccessControlAllowHeaders(value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders): void;
    get accessControlAllowHeadersInput(): CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders;
    private _accessControlAllowMethods;
    get accessControlAllowMethods(): CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference;
    putAccessControlAllowMethods(value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods): void;
    get accessControlAllowMethodsInput(): CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods;
    private _accessControlAllowOrigins;
    get accessControlAllowOrigins(): CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference;
    putAccessControlAllowOrigins(value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins): void;
    get accessControlAllowOriginsInput(): CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins;
    private _accessControlExposeHeaders;
    get accessControlExposeHeaders(): CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference;
    putAccessControlExposeHeaders(value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders): void;
    resetAccessControlExposeHeaders(): void;
    get accessControlExposeHeadersInput(): CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders;
}
export interface CloudfrontResponseHeadersPolicyCustomHeadersConfigItems {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#header CloudfrontResponseHeadersPolicy#header}
    */
    readonly header: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#override CloudfrontResponseHeadersPolicy#override}
    */
    readonly override: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#value CloudfrontResponseHeadersPolicy#value}
    */
    readonly value: string;
}
export declare function cloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToTerraform(struct?: CloudfrontResponseHeadersPolicyCustomHeadersConfigItems): any;
export interface CloudfrontResponseHeadersPolicyCustomHeadersConfig {
    /**
    * items block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#items CloudfrontResponseHeadersPolicy#items}
    */
    readonly items?: CloudfrontResponseHeadersPolicyCustomHeadersConfigItems[];
}
export declare function cloudfrontResponseHeadersPolicyCustomHeadersConfigToTerraform(struct?: CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference | CloudfrontResponseHeadersPolicyCustomHeadersConfig): any;
export declare class CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontResponseHeadersPolicyCustomHeadersConfig | undefined;
    set internalValue(value: CloudfrontResponseHeadersPolicyCustomHeadersConfig | undefined);
    private _items?;
    get items(): CloudfrontResponseHeadersPolicyCustomHeadersConfigItems[];
    set items(value: CloudfrontResponseHeadersPolicyCustomHeadersConfigItems[]);
    resetItems(): void;
    get itemsInput(): CloudfrontResponseHeadersPolicyCustomHeadersConfigItems[];
}
export interface CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#content_security_policy CloudfrontResponseHeadersPolicy#content_security_policy}
    */
    readonly contentSecurityPolicy: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#override CloudfrontResponseHeadersPolicy#override}
    */
    readonly override: boolean | cdktf.IResolvable;
}
export declare function cloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy): any;
export declare class CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy | undefined;
    set internalValue(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy | undefined);
    private _contentSecurityPolicy?;
    get contentSecurityPolicy(): string;
    set contentSecurityPolicy(value: string);
    get contentSecurityPolicyInput(): string;
    private _override?;
    get override(): boolean | cdktf.IResolvable;
    set override(value: boolean | cdktf.IResolvable);
    get overrideInput(): boolean | cdktf.IResolvable;
}
export interface CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#override CloudfrontResponseHeadersPolicy#override}
    */
    readonly override: boolean | cdktf.IResolvable;
}
export declare function cloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions): any;
export declare class CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions | undefined;
    set internalValue(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions | undefined);
    private _override?;
    get override(): boolean | cdktf.IResolvable;
    set override(value: boolean | cdktf.IResolvable);
    get overrideInput(): boolean | cdktf.IResolvable;
}
export interface CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#frame_option CloudfrontResponseHeadersPolicy#frame_option}
    */
    readonly frameOption: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#override CloudfrontResponseHeadersPolicy#override}
    */
    readonly override: boolean | cdktf.IResolvable;
}
export declare function cloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions): any;
export declare class CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions | undefined;
    set internalValue(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions | undefined);
    private _frameOption?;
    get frameOption(): string;
    set frameOption(value: string);
    get frameOptionInput(): string;
    private _override?;
    get override(): boolean | cdktf.IResolvable;
    set override(value: boolean | cdktf.IResolvable);
    get overrideInput(): boolean | cdktf.IResolvable;
}
export interface CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#override CloudfrontResponseHeadersPolicy#override}
    */
    readonly override: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#referrer_policy CloudfrontResponseHeadersPolicy#referrer_policy}
    */
    readonly referrerPolicy: string;
}
export declare function cloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy): any;
export declare class CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy | undefined;
    set internalValue(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy | undefined);
    private _override?;
    get override(): boolean | cdktf.IResolvable;
    set override(value: boolean | cdktf.IResolvable);
    get overrideInput(): boolean | cdktf.IResolvable;
    private _referrerPolicy?;
    get referrerPolicy(): string;
    set referrerPolicy(value: string);
    get referrerPolicyInput(): string;
}
export interface CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#access_control_max_age_sec CloudfrontResponseHeadersPolicy#access_control_max_age_sec}
    */
    readonly accessControlMaxAgeSec: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#include_subdomains CloudfrontResponseHeadersPolicy#include_subdomains}
    */
    readonly includeSubdomains?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#override CloudfrontResponseHeadersPolicy#override}
    */
    readonly override: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#preload CloudfrontResponseHeadersPolicy#preload}
    */
    readonly preload?: boolean | cdktf.IResolvable;
}
export declare function cloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity): any;
export declare class CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity | undefined;
    set internalValue(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity | undefined);
    private _accessControlMaxAgeSec?;
    get accessControlMaxAgeSec(): number;
    set accessControlMaxAgeSec(value: number);
    get accessControlMaxAgeSecInput(): number;
    private _includeSubdomains?;
    get includeSubdomains(): boolean | cdktf.IResolvable;
    set includeSubdomains(value: boolean | cdktf.IResolvable);
    resetIncludeSubdomains(): void;
    get includeSubdomainsInput(): boolean | cdktf.IResolvable;
    private _override?;
    get override(): boolean | cdktf.IResolvable;
    set override(value: boolean | cdktf.IResolvable);
    get overrideInput(): boolean | cdktf.IResolvable;
    private _preload?;
    get preload(): boolean | cdktf.IResolvable;
    set preload(value: boolean | cdktf.IResolvable);
    resetPreload(): void;
    get preloadInput(): boolean | cdktf.IResolvable;
}
export interface CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#mode_block CloudfrontResponseHeadersPolicy#mode_block}
    */
    readonly modeBlock?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#override CloudfrontResponseHeadersPolicy#override}
    */
    readonly override: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#protection CloudfrontResponseHeadersPolicy#protection}
    */
    readonly protection: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#report_uri CloudfrontResponseHeadersPolicy#report_uri}
    */
    readonly reportUri?: string;
}
export declare function cloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection): any;
export declare class CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection | undefined;
    set internalValue(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection | undefined);
    private _modeBlock?;
    get modeBlock(): boolean | cdktf.IResolvable;
    set modeBlock(value: boolean | cdktf.IResolvable);
    resetModeBlock(): void;
    get modeBlockInput(): boolean | cdktf.IResolvable;
    private _override?;
    get override(): boolean | cdktf.IResolvable;
    set override(value: boolean | cdktf.IResolvable);
    get overrideInput(): boolean | cdktf.IResolvable;
    private _protection?;
    get protection(): boolean | cdktf.IResolvable;
    set protection(value: boolean | cdktf.IResolvable);
    get protectionInput(): boolean | cdktf.IResolvable;
    private _reportUri?;
    get reportUri(): string;
    set reportUri(value: string);
    resetReportUri(): void;
    get reportUriInput(): string;
}
export interface CloudfrontResponseHeadersPolicySecurityHeadersConfig {
    /**
    * content_security_policy block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#content_security_policy CloudfrontResponseHeadersPolicy#content_security_policy}
    */
    readonly contentSecurityPolicy?: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy;
    /**
    * content_type_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#content_type_options CloudfrontResponseHeadersPolicy#content_type_options}
    */
    readonly contentTypeOptions?: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions;
    /**
    * frame_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#frame_options CloudfrontResponseHeadersPolicy#frame_options}
    */
    readonly frameOptions?: CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions;
    /**
    * referrer_policy block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#referrer_policy CloudfrontResponseHeadersPolicy#referrer_policy}
    */
    readonly referrerPolicy?: CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy;
    /**
    * strict_transport_security block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#strict_transport_security CloudfrontResponseHeadersPolicy#strict_transport_security}
    */
    readonly strictTransportSecurity?: CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity;
    /**
    * xss_protection block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#xss_protection CloudfrontResponseHeadersPolicy#xss_protection}
    */
    readonly xssProtection?: CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection;
}
export declare function cloudfrontResponseHeadersPolicySecurityHeadersConfigToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfig): any;
export declare class CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontResponseHeadersPolicySecurityHeadersConfig | undefined;
    set internalValue(value: CloudfrontResponseHeadersPolicySecurityHeadersConfig | undefined);
    private _contentSecurityPolicy;
    get contentSecurityPolicy(): CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference;
    putContentSecurityPolicy(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy): void;
    resetContentSecurityPolicy(): void;
    get contentSecurityPolicyInput(): CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy;
    private _contentTypeOptions;
    get contentTypeOptions(): CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference;
    putContentTypeOptions(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions): void;
    resetContentTypeOptions(): void;
    get contentTypeOptionsInput(): CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions;
    private _frameOptions;
    get frameOptions(): CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference;
    putFrameOptions(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions): void;
    resetFrameOptions(): void;
    get frameOptionsInput(): CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions;
    private _referrerPolicy;
    get referrerPolicy(): CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference;
    putReferrerPolicy(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy): void;
    resetReferrerPolicy(): void;
    get referrerPolicyInput(): CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy;
    private _strictTransportSecurity;
    get strictTransportSecurity(): CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference;
    putStrictTransportSecurity(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity): void;
    resetStrictTransportSecurity(): void;
    get strictTransportSecurityInput(): CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity;
    private _xssProtection;
    get xssProtection(): CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference;
    putXssProtection(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection): void;
    resetXssProtection(): void;
    get xssProtectionInput(): CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html aws_cloudfront_response_headers_policy}
*/
export declare class CloudfrontResponseHeadersPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html aws_cloudfront_response_headers_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontResponseHeadersPolicyConfig
    */
    constructor(scope: Construct, id: string, config: CloudfrontResponseHeadersPolicyConfig);
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string;
    private _etag?;
    get etag(): string;
    set etag(value: string);
    resetEtag(): void;
    get etagInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _corsConfig;
    get corsConfig(): CloudfrontResponseHeadersPolicyCorsConfigOutputReference;
    putCorsConfig(value: CloudfrontResponseHeadersPolicyCorsConfig): void;
    resetCorsConfig(): void;
    get corsConfigInput(): CloudfrontResponseHeadersPolicyCorsConfig;
    private _customHeadersConfig;
    get customHeadersConfig(): CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference;
    putCustomHeadersConfig(value: CloudfrontResponseHeadersPolicyCustomHeadersConfig): void;
    resetCustomHeadersConfig(): void;
    get customHeadersConfigInput(): CloudfrontResponseHeadersPolicyCustomHeadersConfig;
    private _securityHeadersConfig;
    get securityHeadersConfig(): CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference;
    putSecurityHeadersConfig(value: CloudfrontResponseHeadersPolicySecurityHeadersConfig): void;
    resetSecurityHeadersConfig(): void;
    get securityHeadersConfigInput(): CloudfrontResponseHeadersPolicySecurityHeadersConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cloudfront-response-headers-policy.d.ts.map