import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudFront
*/
export interface CloudfrontDistributionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#aliases CloudfrontDistribution#aliases}
    */
    readonly aliases?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#comment CloudfrontDistribution#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#default_root_object CloudfrontDistribution#default_root_object}
    */
    readonly defaultRootObject?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#enabled CloudfrontDistribution#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#http_version CloudfrontDistribution#http_version}
    */
    readonly httpVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#is_ipv6_enabled CloudfrontDistribution#is_ipv6_enabled}
    */
    readonly isIpv6Enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#price_class CloudfrontDistribution#price_class}
    */
    readonly priceClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#retain_on_delete CloudfrontDistribution#retain_on_delete}
    */
    readonly retainOnDelete?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#tags CloudfrontDistribution#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#tags_all CloudfrontDistribution#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#wait_for_deployment CloudfrontDistribution#wait_for_deployment}
    */
    readonly waitForDeployment?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#web_acl_id CloudfrontDistribution#web_acl_id}
    */
    readonly webAclId?: string;
    /**
    * custom_error_response block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#custom_error_response CloudfrontDistribution#custom_error_response}
    */
    readonly customErrorResponse?: CloudfrontDistributionCustomErrorResponse[];
    /**
    * default_cache_behavior block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#default_cache_behavior CloudfrontDistribution#default_cache_behavior}
    */
    readonly defaultCacheBehavior: CloudfrontDistributionDefaultCacheBehavior;
    /**
    * logging_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#logging_config CloudfrontDistribution#logging_config}
    */
    readonly loggingConfig?: CloudfrontDistributionLoggingConfig;
    /**
    * ordered_cache_behavior block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#ordered_cache_behavior CloudfrontDistribution#ordered_cache_behavior}
    */
    readonly orderedCacheBehavior?: CloudfrontDistributionOrderedCacheBehavior[];
    /**
    * origin block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin CloudfrontDistribution#origin}
    */
    readonly origin: CloudfrontDistributionOrigin[];
    /**
    * origin_group block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_group CloudfrontDistribution#origin_group}
    */
    readonly originGroup?: CloudfrontDistributionOriginGroup[];
    /**
    * restrictions block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#restrictions CloudfrontDistribution#restrictions}
    */
    readonly restrictions: CloudfrontDistributionRestrictions;
    /**
    * viewer_certificate block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#viewer_certificate CloudfrontDistribution#viewer_certificate}
    */
    readonly viewerCertificate: CloudfrontDistributionViewerCertificate;
}
export declare class CloudfrontDistributionTrustedKeyGroupsItems extends cdktf.ComplexComputedList {
    get keyGroupId(): string;
    get keyPairIds(): string[];
}
export declare class CloudfrontDistributionTrustedKeyGroups extends cdktf.ComplexComputedList {
    get enabled(): any;
    get items(): any;
}
export declare class CloudfrontDistributionTrustedSignersItems extends cdktf.ComplexComputedList {
    get awsAccountNumber(): string;
    get keyPairIds(): string[];
}
export declare class CloudfrontDistributionTrustedSigners extends cdktf.ComplexComputedList {
    get enabled(): any;
    get items(): any;
}
export interface CloudfrontDistributionCustomErrorResponse {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#error_caching_min_ttl CloudfrontDistribution#error_caching_min_ttl}
    */
    readonly errorCachingMinTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#error_code CloudfrontDistribution#error_code}
    */
    readonly errorCode: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#response_code CloudfrontDistribution#response_code}
    */
    readonly responseCode?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#response_page_path CloudfrontDistribution#response_page_path}
    */
    readonly responsePagePath?: string;
}
export declare function cloudfrontDistributionCustomErrorResponseToTerraform(struct?: CloudfrontDistributionCustomErrorResponse): any;
export interface CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#forward CloudfrontDistribution#forward}
    */
    readonly forward: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#whitelisted_names CloudfrontDistribution#whitelisted_names}
    */
    readonly whitelistedNames?: string[];
}
export declare function cloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesToTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference | CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies): any;
export declare class CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies | undefined;
    set internalValue(value: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies | undefined);
    private _forward?;
    get forward(): string;
    set forward(value: string);
    get forwardInput(): string;
    private _whitelistedNames?;
    get whitelistedNames(): string[];
    set whitelistedNames(value: string[]);
    resetWhitelistedNames(): void;
    get whitelistedNamesInput(): string[];
}
export interface CloudfrontDistributionDefaultCacheBehaviorForwardedValues {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#headers CloudfrontDistribution#headers}
    */
    readonly headers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#query_string CloudfrontDistribution#query_string}
    */
    readonly queryString: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}
    */
    readonly queryStringCacheKeys?: string[];
    /**
    * cookies block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#cookies CloudfrontDistribution#cookies}
    */
    readonly cookies: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies;
}
export declare function cloudfrontDistributionDefaultCacheBehaviorForwardedValuesToTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference | CloudfrontDistributionDefaultCacheBehaviorForwardedValues): any;
export declare class CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontDistributionDefaultCacheBehaviorForwardedValues | undefined;
    set internalValue(value: CloudfrontDistributionDefaultCacheBehaviorForwardedValues | undefined);
    private _headers?;
    get headers(): string[];
    set headers(value: string[]);
    resetHeaders(): void;
    get headersInput(): string[];
    private _queryString?;
    get queryString(): boolean | cdktf.IResolvable;
    set queryString(value: boolean | cdktf.IResolvable);
    get queryStringInput(): boolean | cdktf.IResolvable;
    private _queryStringCacheKeys?;
    get queryStringCacheKeys(): string[];
    set queryStringCacheKeys(value: string[]);
    resetQueryStringCacheKeys(): void;
    get queryStringCacheKeysInput(): string[];
    private _cookies;
    get cookies(): CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference;
    putCookies(value: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies): void;
    get cookiesInput(): CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies;
}
export interface CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#event_type CloudfrontDistribution#event_type}
    */
    readonly eventType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#function_arn CloudfrontDistribution#function_arn}
    */
    readonly functionArn: string;
}
export declare function cloudfrontDistributionDefaultCacheBehaviorFunctionAssociationToTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation): any;
export interface CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#event_type CloudfrontDistribution#event_type}
    */
    readonly eventType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#include_body CloudfrontDistribution#include_body}
    */
    readonly includeBody?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#lambda_arn CloudfrontDistribution#lambda_arn}
    */
    readonly lambdaArn: string;
}
export declare function cloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationToTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation): any;
export interface CloudfrontDistributionDefaultCacheBehavior {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#allowed_methods CloudfrontDistribution#allowed_methods}
    */
    readonly allowedMethods: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#cache_policy_id CloudfrontDistribution#cache_policy_id}
    */
    readonly cachePolicyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#cached_methods CloudfrontDistribution#cached_methods}
    */
    readonly cachedMethods: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#compress CloudfrontDistribution#compress}
    */
    readonly compress?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#default_ttl CloudfrontDistribution#default_ttl}
    */
    readonly defaultTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#field_level_encryption_id CloudfrontDistribution#field_level_encryption_id}
    */
    readonly fieldLevelEncryptionId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#max_ttl CloudfrontDistribution#max_ttl}
    */
    readonly maxTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#min_ttl CloudfrontDistribution#min_ttl}
    */
    readonly minTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_request_policy_id CloudfrontDistribution#origin_request_policy_id}
    */
    readonly originRequestPolicyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#realtime_log_config_arn CloudfrontDistribution#realtime_log_config_arn}
    */
    readonly realtimeLogConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#response_headers_policy_id CloudfrontDistribution#response_headers_policy_id}
    */
    readonly responseHeadersPolicyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#smooth_streaming CloudfrontDistribution#smooth_streaming}
    */
    readonly smoothStreaming?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#target_origin_id CloudfrontDistribution#target_origin_id}
    */
    readonly targetOriginId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#trusted_key_groups CloudfrontDistribution#trusted_key_groups}
    */
    readonly trustedKeyGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#trusted_signers CloudfrontDistribution#trusted_signers}
    */
    readonly trustedSigners?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#viewer_protocol_policy CloudfrontDistribution#viewer_protocol_policy}
    */
    readonly viewerProtocolPolicy: string;
    /**
    * forwarded_values block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#forwarded_values CloudfrontDistribution#forwarded_values}
    */
    readonly forwardedValues?: CloudfrontDistributionDefaultCacheBehaviorForwardedValues;
    /**
    * function_association block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#function_association CloudfrontDistribution#function_association}
    */
    readonly functionAssociation?: CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation[];
    /**
    * lambda_function_association block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#lambda_function_association CloudfrontDistribution#lambda_function_association}
    */
    readonly lambdaFunctionAssociation?: CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation[];
}
export declare function cloudfrontDistributionDefaultCacheBehaviorToTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorOutputReference | CloudfrontDistributionDefaultCacheBehavior): any;
export declare class CloudfrontDistributionDefaultCacheBehaviorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontDistributionDefaultCacheBehavior | undefined;
    set internalValue(value: CloudfrontDistributionDefaultCacheBehavior | undefined);
    private _allowedMethods?;
    get allowedMethods(): string[];
    set allowedMethods(value: string[]);
    get allowedMethodsInput(): string[];
    private _cachePolicyId?;
    get cachePolicyId(): string;
    set cachePolicyId(value: string);
    resetCachePolicyId(): void;
    get cachePolicyIdInput(): string;
    private _cachedMethods?;
    get cachedMethods(): string[];
    set cachedMethods(value: string[]);
    get cachedMethodsInput(): string[];
    private _compress?;
    get compress(): boolean | cdktf.IResolvable;
    set compress(value: boolean | cdktf.IResolvable);
    resetCompress(): void;
    get compressInput(): boolean | cdktf.IResolvable;
    private _defaultTtl?;
    get defaultTtl(): number;
    set defaultTtl(value: number);
    resetDefaultTtl(): void;
    get defaultTtlInput(): number;
    private _fieldLevelEncryptionId?;
    get fieldLevelEncryptionId(): string;
    set fieldLevelEncryptionId(value: string);
    resetFieldLevelEncryptionId(): void;
    get fieldLevelEncryptionIdInput(): string;
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
    private _originRequestPolicyId?;
    get originRequestPolicyId(): string;
    set originRequestPolicyId(value: string);
    resetOriginRequestPolicyId(): void;
    get originRequestPolicyIdInput(): string;
    private _realtimeLogConfigArn?;
    get realtimeLogConfigArn(): string;
    set realtimeLogConfigArn(value: string);
    resetRealtimeLogConfigArn(): void;
    get realtimeLogConfigArnInput(): string;
    private _responseHeadersPolicyId?;
    get responseHeadersPolicyId(): string;
    set responseHeadersPolicyId(value: string);
    resetResponseHeadersPolicyId(): void;
    get responseHeadersPolicyIdInput(): string;
    private _smoothStreaming?;
    get smoothStreaming(): boolean | cdktf.IResolvable;
    set smoothStreaming(value: boolean | cdktf.IResolvable);
    resetSmoothStreaming(): void;
    get smoothStreamingInput(): boolean | cdktf.IResolvable;
    private _targetOriginId?;
    get targetOriginId(): string;
    set targetOriginId(value: string);
    get targetOriginIdInput(): string;
    private _trustedKeyGroups?;
    get trustedKeyGroups(): string[];
    set trustedKeyGroups(value: string[]);
    resetTrustedKeyGroups(): void;
    get trustedKeyGroupsInput(): string[];
    private _trustedSigners?;
    get trustedSigners(): string[];
    set trustedSigners(value: string[]);
    resetTrustedSigners(): void;
    get trustedSignersInput(): string[];
    private _viewerProtocolPolicy?;
    get viewerProtocolPolicy(): string;
    set viewerProtocolPolicy(value: string);
    get viewerProtocolPolicyInput(): string;
    private _forwardedValues;
    get forwardedValues(): CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference;
    putForwardedValues(value: CloudfrontDistributionDefaultCacheBehaviorForwardedValues): void;
    resetForwardedValues(): void;
    get forwardedValuesInput(): CloudfrontDistributionDefaultCacheBehaviorForwardedValues;
    private _functionAssociation?;
    get functionAssociation(): CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation[];
    set functionAssociation(value: CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation[]);
    resetFunctionAssociation(): void;
    get functionAssociationInput(): CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation[];
    private _lambdaFunctionAssociation?;
    get lambdaFunctionAssociation(): CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation[];
    set lambdaFunctionAssociation(value: CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation[]);
    resetLambdaFunctionAssociation(): void;
    get lambdaFunctionAssociationInput(): CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation[];
}
export interface CloudfrontDistributionLoggingConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#bucket CloudfrontDistribution#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#include_cookies CloudfrontDistribution#include_cookies}
    */
    readonly includeCookies?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#prefix CloudfrontDistribution#prefix}
    */
    readonly prefix?: string;
}
export declare function cloudfrontDistributionLoggingConfigToTerraform(struct?: CloudfrontDistributionLoggingConfigOutputReference | CloudfrontDistributionLoggingConfig): any;
export declare class CloudfrontDistributionLoggingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontDistributionLoggingConfig | undefined;
    set internalValue(value: CloudfrontDistributionLoggingConfig | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    private _includeCookies?;
    get includeCookies(): boolean | cdktf.IResolvable;
    set includeCookies(value: boolean | cdktf.IResolvable);
    resetIncludeCookies(): void;
    get includeCookiesInput(): boolean | cdktf.IResolvable;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string;
}
export interface CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#forward CloudfrontDistribution#forward}
    */
    readonly forward: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#whitelisted_names CloudfrontDistribution#whitelisted_names}
    */
    readonly whitelistedNames?: string[];
}
export declare function cloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesToTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference | CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies): any;
export declare class CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies | undefined;
    set internalValue(value: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies | undefined);
    private _forward?;
    get forward(): string;
    set forward(value: string);
    get forwardInput(): string;
    private _whitelistedNames?;
    get whitelistedNames(): string[];
    set whitelistedNames(value: string[]);
    resetWhitelistedNames(): void;
    get whitelistedNamesInput(): string[];
}
export interface CloudfrontDistributionOrderedCacheBehaviorForwardedValues {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#headers CloudfrontDistribution#headers}
    */
    readonly headers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#query_string CloudfrontDistribution#query_string}
    */
    readonly queryString: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}
    */
    readonly queryStringCacheKeys?: string[];
    /**
    * cookies block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#cookies CloudfrontDistribution#cookies}
    */
    readonly cookies: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies;
}
export declare function cloudfrontDistributionOrderedCacheBehaviorForwardedValuesToTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference | CloudfrontDistributionOrderedCacheBehaviorForwardedValues): any;
export declare class CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontDistributionOrderedCacheBehaviorForwardedValues | undefined;
    set internalValue(value: CloudfrontDistributionOrderedCacheBehaviorForwardedValues | undefined);
    private _headers?;
    get headers(): string[];
    set headers(value: string[]);
    resetHeaders(): void;
    get headersInput(): string[];
    private _queryString?;
    get queryString(): boolean | cdktf.IResolvable;
    set queryString(value: boolean | cdktf.IResolvable);
    get queryStringInput(): boolean | cdktf.IResolvable;
    private _queryStringCacheKeys?;
    get queryStringCacheKeys(): string[];
    set queryStringCacheKeys(value: string[]);
    resetQueryStringCacheKeys(): void;
    get queryStringCacheKeysInput(): string[];
    private _cookies;
    get cookies(): CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference;
    putCookies(value: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies): void;
    get cookiesInput(): CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies;
}
export interface CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#event_type CloudfrontDistribution#event_type}
    */
    readonly eventType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#function_arn CloudfrontDistribution#function_arn}
    */
    readonly functionArn: string;
}
export declare function cloudfrontDistributionOrderedCacheBehaviorFunctionAssociationToTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation): any;
export interface CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#event_type CloudfrontDistribution#event_type}
    */
    readonly eventType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#include_body CloudfrontDistribution#include_body}
    */
    readonly includeBody?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#lambda_arn CloudfrontDistribution#lambda_arn}
    */
    readonly lambdaArn: string;
}
export declare function cloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationToTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation): any;
export interface CloudfrontDistributionOrderedCacheBehavior {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#allowed_methods CloudfrontDistribution#allowed_methods}
    */
    readonly allowedMethods: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#cache_policy_id CloudfrontDistribution#cache_policy_id}
    */
    readonly cachePolicyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#cached_methods CloudfrontDistribution#cached_methods}
    */
    readonly cachedMethods: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#compress CloudfrontDistribution#compress}
    */
    readonly compress?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#default_ttl CloudfrontDistribution#default_ttl}
    */
    readonly defaultTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#field_level_encryption_id CloudfrontDistribution#field_level_encryption_id}
    */
    readonly fieldLevelEncryptionId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#max_ttl CloudfrontDistribution#max_ttl}
    */
    readonly maxTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#min_ttl CloudfrontDistribution#min_ttl}
    */
    readonly minTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_request_policy_id CloudfrontDistribution#origin_request_policy_id}
    */
    readonly originRequestPolicyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#path_pattern CloudfrontDistribution#path_pattern}
    */
    readonly pathPattern: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#realtime_log_config_arn CloudfrontDistribution#realtime_log_config_arn}
    */
    readonly realtimeLogConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#response_headers_policy_id CloudfrontDistribution#response_headers_policy_id}
    */
    readonly responseHeadersPolicyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#smooth_streaming CloudfrontDistribution#smooth_streaming}
    */
    readonly smoothStreaming?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#target_origin_id CloudfrontDistribution#target_origin_id}
    */
    readonly targetOriginId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#trusted_key_groups CloudfrontDistribution#trusted_key_groups}
    */
    readonly trustedKeyGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#trusted_signers CloudfrontDistribution#trusted_signers}
    */
    readonly trustedSigners?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#viewer_protocol_policy CloudfrontDistribution#viewer_protocol_policy}
    */
    readonly viewerProtocolPolicy: string;
    /**
    * forwarded_values block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#forwarded_values CloudfrontDistribution#forwarded_values}
    */
    readonly forwardedValues?: CloudfrontDistributionOrderedCacheBehaviorForwardedValues;
    /**
    * function_association block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#function_association CloudfrontDistribution#function_association}
    */
    readonly functionAssociation?: CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation[];
    /**
    * lambda_function_association block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#lambda_function_association CloudfrontDistribution#lambda_function_association}
    */
    readonly lambdaFunctionAssociation?: CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation[];
}
export declare function cloudfrontDistributionOrderedCacheBehaviorToTerraform(struct?: CloudfrontDistributionOrderedCacheBehavior): any;
export interface CloudfrontDistributionOriginCustomHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#name CloudfrontDistribution#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#value CloudfrontDistribution#value}
    */
    readonly value: string;
}
export declare function cloudfrontDistributionOriginCustomHeaderToTerraform(struct?: CloudfrontDistributionOriginCustomHeader): any;
export interface CloudfrontDistributionOriginCustomOriginConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#http_port CloudfrontDistribution#http_port}
    */
    readonly httpPort: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#https_port CloudfrontDistribution#https_port}
    */
    readonly httpsPort: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_keepalive_timeout CloudfrontDistribution#origin_keepalive_timeout}
    */
    readonly originKeepaliveTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_protocol_policy CloudfrontDistribution#origin_protocol_policy}
    */
    readonly originProtocolPolicy: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_read_timeout CloudfrontDistribution#origin_read_timeout}
    */
    readonly originReadTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_ssl_protocols CloudfrontDistribution#origin_ssl_protocols}
    */
    readonly originSslProtocols: string[];
}
export declare function cloudfrontDistributionOriginCustomOriginConfigToTerraform(struct?: CloudfrontDistributionOriginCustomOriginConfigOutputReference | CloudfrontDistributionOriginCustomOriginConfig): any;
export declare class CloudfrontDistributionOriginCustomOriginConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontDistributionOriginCustomOriginConfig | undefined;
    set internalValue(value: CloudfrontDistributionOriginCustomOriginConfig | undefined);
    private _httpPort?;
    get httpPort(): number;
    set httpPort(value: number);
    get httpPortInput(): number;
    private _httpsPort?;
    get httpsPort(): number;
    set httpsPort(value: number);
    get httpsPortInput(): number;
    private _originKeepaliveTimeout?;
    get originKeepaliveTimeout(): number;
    set originKeepaliveTimeout(value: number);
    resetOriginKeepaliveTimeout(): void;
    get originKeepaliveTimeoutInput(): number;
    private _originProtocolPolicy?;
    get originProtocolPolicy(): string;
    set originProtocolPolicy(value: string);
    get originProtocolPolicyInput(): string;
    private _originReadTimeout?;
    get originReadTimeout(): number;
    set originReadTimeout(value: number);
    resetOriginReadTimeout(): void;
    get originReadTimeoutInput(): number;
    private _originSslProtocols?;
    get originSslProtocols(): string[];
    set originSslProtocols(value: string[]);
    get originSslProtocolsInput(): string[];
}
export interface CloudfrontDistributionOriginOriginShield {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#enabled CloudfrontDistribution#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_shield_region CloudfrontDistribution#origin_shield_region}
    */
    readonly originShieldRegion: string;
}
export declare function cloudfrontDistributionOriginOriginShieldToTerraform(struct?: CloudfrontDistributionOriginOriginShieldOutputReference | CloudfrontDistributionOriginOriginShield): any;
export declare class CloudfrontDistributionOriginOriginShieldOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontDistributionOriginOriginShield | undefined;
    set internalValue(value: CloudfrontDistributionOriginOriginShield | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable;
    private _originShieldRegion?;
    get originShieldRegion(): string;
    set originShieldRegion(value: string);
    get originShieldRegionInput(): string;
}
export interface CloudfrontDistributionOriginS3OriginConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_access_identity CloudfrontDistribution#origin_access_identity}
    */
    readonly originAccessIdentity: string;
}
export declare function cloudfrontDistributionOriginS3OriginConfigToTerraform(struct?: CloudfrontDistributionOriginS3OriginConfigOutputReference | CloudfrontDistributionOriginS3OriginConfig): any;
export declare class CloudfrontDistributionOriginS3OriginConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontDistributionOriginS3OriginConfig | undefined;
    set internalValue(value: CloudfrontDistributionOriginS3OriginConfig | undefined);
    private _originAccessIdentity?;
    get originAccessIdentity(): string;
    set originAccessIdentity(value: string);
    get originAccessIdentityInput(): string;
}
export interface CloudfrontDistributionOrigin {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#connection_attempts CloudfrontDistribution#connection_attempts}
    */
    readonly connectionAttempts?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#connection_timeout CloudfrontDistribution#connection_timeout}
    */
    readonly connectionTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#domain_name CloudfrontDistribution#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_id CloudfrontDistribution#origin_id}
    */
    readonly originId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_path CloudfrontDistribution#origin_path}
    */
    readonly originPath?: string;
    /**
    * custom_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#custom_header CloudfrontDistribution#custom_header}
    */
    readonly customHeader?: CloudfrontDistributionOriginCustomHeader[];
    /**
    * custom_origin_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#custom_origin_config CloudfrontDistribution#custom_origin_config}
    */
    readonly customOriginConfig?: CloudfrontDistributionOriginCustomOriginConfig;
    /**
    * origin_shield block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_shield CloudfrontDistribution#origin_shield}
    */
    readonly originShield?: CloudfrontDistributionOriginOriginShield;
    /**
    * s3_origin_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#s3_origin_config CloudfrontDistribution#s3_origin_config}
    */
    readonly s3OriginConfig?: CloudfrontDistributionOriginS3OriginConfig;
}
export declare function cloudfrontDistributionOriginToTerraform(struct?: CloudfrontDistributionOrigin): any;
export interface CloudfrontDistributionOriginGroupFailoverCriteria {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#status_codes CloudfrontDistribution#status_codes}
    */
    readonly statusCodes: number[];
}
export declare function cloudfrontDistributionOriginGroupFailoverCriteriaToTerraform(struct?: CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference | CloudfrontDistributionOriginGroupFailoverCriteria): any;
export declare class CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontDistributionOriginGroupFailoverCriteria | undefined;
    set internalValue(value: CloudfrontDistributionOriginGroupFailoverCriteria | undefined);
    private _statusCodes?;
    get statusCodes(): number[];
    set statusCodes(value: number[]);
    get statusCodesInput(): number[];
}
export interface CloudfrontDistributionOriginGroupMember {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_id CloudfrontDistribution#origin_id}
    */
    readonly originId: string;
}
export declare function cloudfrontDistributionOriginGroupMemberToTerraform(struct?: CloudfrontDistributionOriginGroupMember): any;
export interface CloudfrontDistributionOriginGroup {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_id CloudfrontDistribution#origin_id}
    */
    readonly originId: string;
    /**
    * failover_criteria block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#failover_criteria CloudfrontDistribution#failover_criteria}
    */
    readonly failoverCriteria: CloudfrontDistributionOriginGroupFailoverCriteria;
    /**
    * member block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#member CloudfrontDistribution#member}
    */
    readonly member: CloudfrontDistributionOriginGroupMember[];
}
export declare function cloudfrontDistributionOriginGroupToTerraform(struct?: CloudfrontDistributionOriginGroup): any;
export interface CloudfrontDistributionRestrictionsGeoRestriction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#locations CloudfrontDistribution#locations}
    */
    readonly locations?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#restriction_type CloudfrontDistribution#restriction_type}
    */
    readonly restrictionType: string;
}
export declare function cloudfrontDistributionRestrictionsGeoRestrictionToTerraform(struct?: CloudfrontDistributionRestrictionsGeoRestrictionOutputReference | CloudfrontDistributionRestrictionsGeoRestriction): any;
export declare class CloudfrontDistributionRestrictionsGeoRestrictionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontDistributionRestrictionsGeoRestriction | undefined;
    set internalValue(value: CloudfrontDistributionRestrictionsGeoRestriction | undefined);
    private _locations?;
    get locations(): string[];
    set locations(value: string[]);
    resetLocations(): void;
    get locationsInput(): string[];
    private _restrictionType?;
    get restrictionType(): string;
    set restrictionType(value: string);
    get restrictionTypeInput(): string;
}
export interface CloudfrontDistributionRestrictions {
    /**
    * geo_restriction block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#geo_restriction CloudfrontDistribution#geo_restriction}
    */
    readonly geoRestriction: CloudfrontDistributionRestrictionsGeoRestriction;
}
export declare function cloudfrontDistributionRestrictionsToTerraform(struct?: CloudfrontDistributionRestrictionsOutputReference | CloudfrontDistributionRestrictions): any;
export declare class CloudfrontDistributionRestrictionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontDistributionRestrictions | undefined;
    set internalValue(value: CloudfrontDistributionRestrictions | undefined);
    private _geoRestriction;
    get geoRestriction(): CloudfrontDistributionRestrictionsGeoRestrictionOutputReference;
    putGeoRestriction(value: CloudfrontDistributionRestrictionsGeoRestriction): void;
    get geoRestrictionInput(): CloudfrontDistributionRestrictionsGeoRestriction;
}
export interface CloudfrontDistributionViewerCertificate {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#acm_certificate_arn CloudfrontDistribution#acm_certificate_arn}
    */
    readonly acmCertificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#cloudfront_default_certificate CloudfrontDistribution#cloudfront_default_certificate}
    */
    readonly cloudfrontDefaultCertificate?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#iam_certificate_id CloudfrontDistribution#iam_certificate_id}
    */
    readonly iamCertificateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#minimum_protocol_version CloudfrontDistribution#minimum_protocol_version}
    */
    readonly minimumProtocolVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#ssl_support_method CloudfrontDistribution#ssl_support_method}
    */
    readonly sslSupportMethod?: string;
}
export declare function cloudfrontDistributionViewerCertificateToTerraform(struct?: CloudfrontDistributionViewerCertificateOutputReference | CloudfrontDistributionViewerCertificate): any;
export declare class CloudfrontDistributionViewerCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontDistributionViewerCertificate | undefined;
    set internalValue(value: CloudfrontDistributionViewerCertificate | undefined);
    private _acmCertificateArn?;
    get acmCertificateArn(): string;
    set acmCertificateArn(value: string);
    resetAcmCertificateArn(): void;
    get acmCertificateArnInput(): string;
    private _cloudfrontDefaultCertificate?;
    get cloudfrontDefaultCertificate(): boolean | cdktf.IResolvable;
    set cloudfrontDefaultCertificate(value: boolean | cdktf.IResolvable);
    resetCloudfrontDefaultCertificate(): void;
    get cloudfrontDefaultCertificateInput(): boolean | cdktf.IResolvable;
    private _iamCertificateId?;
    get iamCertificateId(): string;
    set iamCertificateId(value: string);
    resetIamCertificateId(): void;
    get iamCertificateIdInput(): string;
    private _minimumProtocolVersion?;
    get minimumProtocolVersion(): string;
    set minimumProtocolVersion(value: string);
    resetMinimumProtocolVersion(): void;
    get minimumProtocolVersionInput(): string;
    private _sslSupportMethod?;
    get sslSupportMethod(): string;
    set sslSupportMethod(value: string);
    resetSslSupportMethod(): void;
    get sslSupportMethodInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html aws_cloudfront_distribution}
*/
export declare class CloudfrontDistribution extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html aws_cloudfront_distribution} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontDistributionConfig
    */
    constructor(scope: Construct, id: string, config: CloudfrontDistributionConfig);
    private _aliases?;
    get aliases(): string[];
    set aliases(value: string[]);
    resetAliases(): void;
    get aliasesInput(): string[];
    get arn(): string;
    get callerReference(): string;
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string;
    private _defaultRootObject?;
    get defaultRootObject(): string;
    set defaultRootObject(value: string);
    resetDefaultRootObject(): void;
    get defaultRootObjectInput(): string;
    get domainName(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable;
    get etag(): string;
    get hostedZoneId(): string;
    private _httpVersion?;
    get httpVersion(): string;
    set httpVersion(value: string);
    resetHttpVersion(): void;
    get httpVersionInput(): string;
    get id(): string;
    get inProgressValidationBatches(): number;
    private _isIpv6Enabled?;
    get isIpv6Enabled(): boolean | cdktf.IResolvable;
    set isIpv6Enabled(value: boolean | cdktf.IResolvable);
    resetIsIpv6Enabled(): void;
    get isIpv6EnabledInput(): boolean | cdktf.IResolvable;
    get lastModifiedTime(): string;
    private _priceClass?;
    get priceClass(): string;
    set priceClass(value: string);
    resetPriceClass(): void;
    get priceClassInput(): string;
    private _retainOnDelete?;
    get retainOnDelete(): boolean | cdktf.IResolvable;
    set retainOnDelete(value: boolean | cdktf.IResolvable);
    resetRetainOnDelete(): void;
    get retainOnDeleteInput(): boolean | cdktf.IResolvable;
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
    trustedKeyGroups(index: string): CloudfrontDistributionTrustedKeyGroups;
    trustedSigners(index: string): CloudfrontDistributionTrustedSigners;
    private _waitForDeployment?;
    get waitForDeployment(): boolean | cdktf.IResolvable;
    set waitForDeployment(value: boolean | cdktf.IResolvable);
    resetWaitForDeployment(): void;
    get waitForDeploymentInput(): boolean | cdktf.IResolvable;
    private _webAclId?;
    get webAclId(): string;
    set webAclId(value: string);
    resetWebAclId(): void;
    get webAclIdInput(): string;
    private _customErrorResponse?;
    get customErrorResponse(): CloudfrontDistributionCustomErrorResponse[];
    set customErrorResponse(value: CloudfrontDistributionCustomErrorResponse[]);
    resetCustomErrorResponse(): void;
    get customErrorResponseInput(): CloudfrontDistributionCustomErrorResponse[];
    private _defaultCacheBehavior;
    get defaultCacheBehavior(): CloudfrontDistributionDefaultCacheBehaviorOutputReference;
    putDefaultCacheBehavior(value: CloudfrontDistributionDefaultCacheBehavior): void;
    get defaultCacheBehaviorInput(): CloudfrontDistributionDefaultCacheBehavior;
    private _loggingConfig;
    get loggingConfig(): CloudfrontDistributionLoggingConfigOutputReference;
    putLoggingConfig(value: CloudfrontDistributionLoggingConfig): void;
    resetLoggingConfig(): void;
    get loggingConfigInput(): CloudfrontDistributionLoggingConfig;
    private _orderedCacheBehavior?;
    get orderedCacheBehavior(): CloudfrontDistributionOrderedCacheBehavior[];
    set orderedCacheBehavior(value: CloudfrontDistributionOrderedCacheBehavior[]);
    resetOrderedCacheBehavior(): void;
    get orderedCacheBehaviorInput(): CloudfrontDistributionOrderedCacheBehavior[];
    private _origin?;
    get origin(): CloudfrontDistributionOrigin[];
    set origin(value: CloudfrontDistributionOrigin[]);
    get originInput(): CloudfrontDistributionOrigin[];
    private _originGroup?;
    get originGroup(): CloudfrontDistributionOriginGroup[];
    set originGroup(value: CloudfrontDistributionOriginGroup[]);
    resetOriginGroup(): void;
    get originGroupInput(): CloudfrontDistributionOriginGroup[];
    private _restrictions;
    get restrictions(): CloudfrontDistributionRestrictionsOutputReference;
    putRestrictions(value: CloudfrontDistributionRestrictions): void;
    get restrictionsInput(): CloudfrontDistributionRestrictions;
    private _viewerCertificate;
    get viewerCertificate(): CloudfrontDistributionViewerCertificateOutputReference;
    putViewerCertificate(value: CloudfrontDistributionViewerCertificate): void;
    get viewerCertificateInput(): CloudfrontDistributionViewerCertificate;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cloudfront-distribution.d.ts.map