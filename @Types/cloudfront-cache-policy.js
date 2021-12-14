// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        items: cdktf.listMapper(cdktf.stringToTerraform)(struct.items),
    };
}
export class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._items) {
            hasAnyValues = true;
            internalValueResult.items = this._items;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._items = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._items = value.items;
        }
    }
    // items - computed: false, optional: true, required: false
    _items;
    get items() {
        return this.getListAttribute('items');
    }
    set items(value) {
        this._items = value;
    }
    resetItems() {
        this._items = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get itemsInput() {
        return this._items;
    }
}
export function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cookie_behavior: cdktf.stringToTerraform(struct.cookieBehavior),
        cookies: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToTerraform(struct.cookies),
    };
}
export class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._cookieBehavior) {
            hasAnyValues = true;
            internalValueResult.cookieBehavior = this._cookieBehavior;
        }
        if (this._cookies?.internalValue) {
            hasAnyValues = true;
            internalValueResult.cookies = this._cookies?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._cookieBehavior = undefined;
            this._cookies.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._cookieBehavior = value.cookieBehavior;
            this._cookies.internalValue = value.cookies;
        }
    }
    // cookie_behavior - computed: false, optional: false, required: true
    _cookieBehavior;
    get cookieBehavior() {
        return this.getStringAttribute('cookie_behavior');
    }
    set cookieBehavior(value) {
        this._cookieBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get cookieBehaviorInput() {
        return this._cookieBehavior;
    }
    // cookies - computed: false, optional: true, required: false
    _cookies = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference(this, "cookies", true);
    get cookies() {
        return this._cookies;
    }
    putCookies(value) {
        this._cookies.internalValue = value;
    }
    resetCookies() {
        this._cookies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cookiesInput() {
        return this._cookies.internalValue;
    }
}
export function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        items: cdktf.listMapper(cdktf.stringToTerraform)(struct.items),
    };
}
export class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._items) {
            hasAnyValues = true;
            internalValueResult.items = this._items;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._items = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._items = value.items;
        }
    }
    // items - computed: false, optional: true, required: false
    _items;
    get items() {
        return this.getListAttribute('items');
    }
    set items(value) {
        this._items = value;
    }
    resetItems() {
        this._items = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get itemsInput() {
        return this._items;
    }
}
export function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        header_behavior: cdktf.stringToTerraform(struct.headerBehavior),
        headers: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToTerraform(struct.headers),
    };
}
export class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._headerBehavior) {
            hasAnyValues = true;
            internalValueResult.headerBehavior = this._headerBehavior;
        }
        if (this._headers?.internalValue) {
            hasAnyValues = true;
            internalValueResult.headers = this._headers?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._headerBehavior = undefined;
            this._headers.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._headerBehavior = value.headerBehavior;
            this._headers.internalValue = value.headers;
        }
    }
    // header_behavior - computed: false, optional: true, required: false
    _headerBehavior;
    get headerBehavior() {
        return this.getStringAttribute('header_behavior');
    }
    set headerBehavior(value) {
        this._headerBehavior = value;
    }
    resetHeaderBehavior() {
        this._headerBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get headerBehaviorInput() {
        return this._headerBehavior;
    }
    // headers - computed: false, optional: true, required: false
    _headers = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference(this, "headers", true);
    get headers() {
        return this._headers;
    }
    putHeaders(value) {
        this._headers.internalValue = value;
    }
    resetHeaders() {
        this._headers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get headersInput() {
        return this._headers.internalValue;
    }
}
export function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        items: cdktf.listMapper(cdktf.stringToTerraform)(struct.items),
    };
}
export class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._items) {
            hasAnyValues = true;
            internalValueResult.items = this._items;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._items = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._items = value.items;
        }
    }
    // items - computed: false, optional: true, required: false
    _items;
    get items() {
        return this.getListAttribute('items');
    }
    set items(value) {
        this._items = value;
    }
    resetItems() {
        this._items = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get itemsInput() {
        return this._items;
    }
}
export function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        query_string_behavior: cdktf.stringToTerraform(struct.queryStringBehavior),
        query_strings: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToTerraform(struct.queryStrings),
    };
}
export class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._queryStringBehavior) {
            hasAnyValues = true;
            internalValueResult.queryStringBehavior = this._queryStringBehavior;
        }
        if (this._queryStrings?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryStrings = this._queryStrings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._queryStringBehavior = undefined;
            this._queryStrings.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._queryStringBehavior = value.queryStringBehavior;
            this._queryStrings.internalValue = value.queryStrings;
        }
    }
    // query_string_behavior - computed: false, optional: false, required: true
    _queryStringBehavior;
    get queryStringBehavior() {
        return this.getStringAttribute('query_string_behavior');
    }
    set queryStringBehavior(value) {
        this._queryStringBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringBehaviorInput() {
        return this._queryStringBehavior;
    }
    // query_strings - computed: false, optional: true, required: false
    _queryStrings = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference(this, "query_strings", true);
    get queryStrings() {
        return this._queryStrings;
    }
    putQueryStrings(value) {
        this._queryStrings.internalValue = value;
    }
    resetQueryStrings() {
        this._queryStrings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringsInput() {
        return this._queryStrings.internalValue;
    }
}
export function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enable_accept_encoding_brotli: cdktf.booleanToTerraform(struct.enableAcceptEncodingBrotli),
        enable_accept_encoding_gzip: cdktf.booleanToTerraform(struct.enableAcceptEncodingGzip),
        cookies_config: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform(struct.cookiesConfig),
        headers_config: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform(struct.headersConfig),
        query_strings_config: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform(struct.queryStringsConfig),
    };
}
export class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._enableAcceptEncodingBrotli) {
            hasAnyValues = true;
            internalValueResult.enableAcceptEncodingBrotli = this._enableAcceptEncodingBrotli;
        }
        if (this._enableAcceptEncodingGzip) {
            hasAnyValues = true;
            internalValueResult.enableAcceptEncodingGzip = this._enableAcceptEncodingGzip;
        }
        if (this._cookiesConfig?.internalValue) {
            hasAnyValues = true;
            internalValueResult.cookiesConfig = this._cookiesConfig?.internalValue;
        }
        if (this._headersConfig?.internalValue) {
            hasAnyValues = true;
            internalValueResult.headersConfig = this._headersConfig?.internalValue;
        }
        if (this._queryStringsConfig?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryStringsConfig = this._queryStringsConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enableAcceptEncodingBrotli = undefined;
            this._enableAcceptEncodingGzip = undefined;
            this._cookiesConfig.internalValue = undefined;
            this._headersConfig.internalValue = undefined;
            this._queryStringsConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enableAcceptEncodingBrotli = value.enableAcceptEncodingBrotli;
            this._enableAcceptEncodingGzip = value.enableAcceptEncodingGzip;
            this._cookiesConfig.internalValue = value.cookiesConfig;
            this._headersConfig.internalValue = value.headersConfig;
            this._queryStringsConfig.internalValue = value.queryStringsConfig;
        }
    }
    // enable_accept_encoding_brotli - computed: false, optional: true, required: false
    _enableAcceptEncodingBrotli;
    get enableAcceptEncodingBrotli() {
        return this.getBooleanAttribute('enable_accept_encoding_brotli');
    }
    set enableAcceptEncodingBrotli(value) {
        this._enableAcceptEncodingBrotli = value;
    }
    resetEnableAcceptEncodingBrotli() {
        this._enableAcceptEncodingBrotli = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableAcceptEncodingBrotliInput() {
        return this._enableAcceptEncodingBrotli;
    }
    // enable_accept_encoding_gzip - computed: false, optional: true, required: false
    _enableAcceptEncodingGzip;
    get enableAcceptEncodingGzip() {
        return this.getBooleanAttribute('enable_accept_encoding_gzip');
    }
    set enableAcceptEncodingGzip(value) {
        this._enableAcceptEncodingGzip = value;
    }
    resetEnableAcceptEncodingGzip() {
        this._enableAcceptEncodingGzip = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableAcceptEncodingGzipInput() {
        return this._enableAcceptEncodingGzip;
    }
    // cookies_config - computed: false, optional: false, required: true
    _cookiesConfig = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference(this, "cookies_config", true);
    get cookiesConfig() {
        return this._cookiesConfig;
    }
    putCookiesConfig(value) {
        this._cookiesConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get cookiesConfigInput() {
        return this._cookiesConfig.internalValue;
    }
    // headers_config - computed: false, optional: false, required: true
    _headersConfig = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference(this, "headers_config", true);
    get headersConfig() {
        return this._headersConfig;
    }
    putHeadersConfig(value) {
        this._headersConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get headersConfigInput() {
        return this._headersConfig.internalValue;
    }
    // query_strings_config - computed: false, optional: false, required: true
    _queryStringsConfig = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference(this, "query_strings_config", true);
    get queryStringsConfig() {
        return this._queryStringsConfig;
    }
    putQueryStringsConfig(value) {
        this._queryStringsConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringsConfigInput() {
        return this._queryStringsConfig.internalValue;
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html aws_cloudfront_cache_policy}
*/
export class CloudfrontCachePolicy extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_cloudfront_cache_policy";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html aws_cloudfront_cache_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontCachePolicyConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_cloudfront_cache_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._comment = config.comment;
        this._defaultTtl = config.defaultTtl;
        this._maxTtl = config.maxTtl;
        this._minTtl = config.minTtl;
        this._name = config.name;
        this._parametersInCacheKeyAndForwardedToOrigin.internalValue = config.parametersInCacheKeyAndForwardedToOrigin;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // comment - computed: false, optional: true, required: false
    _comment;
    get comment() {
        return this.getStringAttribute('comment');
    }
    set comment(value) {
        this._comment = value;
    }
    resetComment() {
        this._comment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get commentInput() {
        return this._comment;
    }
    // default_ttl - computed: false, optional: true, required: false
    _defaultTtl;
    get defaultTtl() {
        return this.getNumberAttribute('default_ttl');
    }
    set defaultTtl(value) {
        this._defaultTtl = value;
    }
    resetDefaultTtl() {
        this._defaultTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultTtlInput() {
        return this._defaultTtl;
    }
    // etag - computed: true, optional: false, required: false
    get etag() {
        return this.getStringAttribute('etag');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // max_ttl - computed: false, optional: true, required: false
    _maxTtl;
    get maxTtl() {
        return this.getNumberAttribute('max_ttl');
    }
    set maxTtl(value) {
        this._maxTtl = value;
    }
    resetMaxTtl() {
        this._maxTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxTtlInput() {
        return this._maxTtl;
    }
    // min_ttl - computed: false, optional: true, required: false
    _minTtl;
    get minTtl() {
        return this.getNumberAttribute('min_ttl');
    }
    set minTtl(value) {
        this._minTtl = value;
    }
    resetMinTtl() {
        this._minTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minTtlInput() {
        return this._minTtl;
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // parameters_in_cache_key_and_forwarded_to_origin - computed: false, optional: false, required: true
    _parametersInCacheKeyAndForwardedToOrigin = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference(this, "parameters_in_cache_key_and_forwarded_to_origin", true);
    get parametersInCacheKeyAndForwardedToOrigin() {
        return this._parametersInCacheKeyAndForwardedToOrigin;
    }
    putParametersInCacheKeyAndForwardedToOrigin(value) {
        this._parametersInCacheKeyAndForwardedToOrigin.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get parametersInCacheKeyAndForwardedToOriginInput() {
        return this._parametersInCacheKeyAndForwardedToOrigin.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            comment: cdktf.stringToTerraform(this._comment),
            default_ttl: cdktf.numberToTerraform(this._defaultTtl),
            max_ttl: cdktf.numberToTerraform(this._maxTtl),
            min_ttl: cdktf.numberToTerraform(this._minTtl),
            name: cdktf.stringToTerraform(this._name),
            parameters_in_cache_key_and_forwarded_to_origin: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginToTerraform(this._parametersInCacheKeyAndForwardedToOrigin.internalValue),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRmcm9udC1jYWNoZS1wb2xpY3kuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImNsb3VkZnJvbnQtY2FjaGUtcG9saWN5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQXdDL0IsTUFBTSxVQUFVLDRGQUE0RixDQUFDLE1BQTZMO0lBQ3hTLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsS0FBSyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUNoRSxDQUFBO0FBQ0gsQ0FBQztBQUVELE1BQU0sT0FBTyxnR0FBaUcsU0FBUSxLQUFLLENBQUMsYUFBYTtJQUMvSCxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBRTlCOzs7O01BSUU7SUFDRixZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDekM7UUFDRCxPQUFPLFlB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