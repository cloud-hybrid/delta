// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class CloudfrontDistributionTrustedKeyGroupsItems extends cdktf.ComplexComputedList {
    // key_group_id - computed: true, optional: false, required: false
    get keyGroupId() {
        return this.getStringAttribute('key_group_id');
    }
    // key_pair_ids - computed: true, optional: false, required: false
    get keyPairIds() {
        return this.getListAttribute('key_pair_ids');
    }
}
export class CloudfrontDistributionTrustedKeyGroups extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // items - computed: true, optional: false, required: false
    get items() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('items');
    }
}
export class CloudfrontDistributionTrustedSignersItems extends cdktf.ComplexComputedList {
    // aws_account_number - computed: true, optional: false, required: false
    get awsAccountNumber() {
        return this.getStringAttribute('aws_account_number');
    }
    // key_pair_ids - computed: true, optional: false, required: false
    get keyPairIds() {
        return this.getListAttribute('key_pair_ids');
    }
}
export class CloudfrontDistributionTrustedSigners extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // items - computed: true, optional: false, required: false
    get items() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('items');
    }
}
export function cloudfrontDistributionCustomErrorResponseToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        error_caching_min_ttl: cdktf.numberToTerraform(struct.errorCachingMinTtl),
        error_code: cdktf.numberToTerraform(struct.errorCode),
        response_code: cdktf.numberToTerraform(struct.responseCode),
        response_page_path: cdktf.stringToTerraform(struct.responsePagePath),
    };
}
export function cloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        forward: cdktf.stringToTerraform(struct.forward),
        whitelisted_names: cdktf.listMapper(cdktf.stringToTerraform)(struct.whitelistedNames),
    };
}
export class CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference extends cdktf.ComplexObject {
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
        if (this._forward) {
            hasAnyValues = true;
            internalValueResult.forward = this._forward;
        }
        if (this._whitelistedNames) {
            hasAnyValues = true;
            internalValueResult.whitelistedNames = this._whitelistedNames;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._forward = undefined;
            this._whitelistedNames = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._forward = value.forward;
            this._whitelistedNames = value.whitelistedNames;
        }
    }
    // forward - computed: false, optional: false, required: true
    _forward;
    get forward() {
        return this.getStringAttribute('forward');
    }
    set forward(value) {
        this._forward = value;
    }
    // Temporarily expose input value. Use with caution.
    get forwardInput() {
        return this._forward;
    }
    // whitelisted_names - computed: true, optional: true, required: false
    _whitelistedNames;
    get whitelistedNames() {
        return this.getListAttribute('whitelisted_names');
    }
    set whitelistedNames(value) {
        this._whitelistedNames = value;
    }
    resetWhitelistedNames() {
        this._whitelistedNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get whitelistedNamesInput() {
        return this._whitelistedNames;
    }
}
export function cloudfrontDistributionDefaultCacheBehaviorForwardedValuesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        headers: cdktf.listMapper(cdktf.stringToTerraform)(struct.headers),
        query_string: cdktf.booleanToTerraform(struct.queryString),
        query_string_cache_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct.queryStringCacheKeys),
        cookies: cloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesToTerraform(struct.cookies),
    };
}
export class CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference extends cdktf.ComplexObject {
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
        if (this._headers) {
            hasAnyValues = true;
            internalValueResult.headers = this._headers;
        }
        if (this._queryString) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString;
        }
        if (this._queryStringCacheKeys) {
            hasAnyValues = true;
            internalValueResult.queryStringCacheKeys = this._queryStringCacheKeys;
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
            this._headers = undefined;
            this._queryString = undefined;
            this._queryStringCacheKeys = undefined;
            this._cookies.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._headers = value.headers;
            this._queryString = value.queryString;
            this._queryStringCacheKeys = value.queryStringCacheKeys;
            this._cookies.internalValue = value.cookies;
        }
    }
    // headers - computed: true, optional: true, required: false
    _headers;
    get headers() {
        return this.getListAttribute('headers');
    }
    set headers(value) {
        this._headers = value;
    }
    resetHeaders() {
        this._headers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get headersInput() {
        return this._headers;
    }
    // query_string - computed: false, optional: false, required: true
    _queryString;
    get queryString() {
        return this.getBooleanAttribute('query_string');
    }
    set queryString(value) {
        this._queryString = value;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString;
    }
    // query_string_cache_keys - computed: true, optional: true, required: false
    _queryStringCacheKeys;
    get queryStringCacheKeys() {
        return this.getListAttribute('query_string_cache_keys');
    }
    set queryStringCacheKeys(value) {
        this._queryStringCacheKeys = value;
    }
    resetQueryStringCacheKeys() {
        this._queryStringCacheKeys = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringCacheKeysInput() {
        return this._queryStringCacheKeys;
    }
    // cookies - computed: false, optional: false, required: true
    _cookies = new CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference(this, "cookies", true);
    get cookies() {
        return this._cookies;
    }
    putCookies(value) {
        this._cookies.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get cookiesInput() {
        return this._cookies.internalValue;
    }
}
export function cloudfrontDistributionDefaultCacheBehaviorFunctionAssociationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        event_type: cdktf.stringToTerraform(struct.eventType),
        function_arn: cdktf.stringToTerraform(struct.functionArn),
    };
}
export function cloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        event_type: cdktf.stringToTerraform(struct.eventType),
        include_body: cdktf.booleanToTerraform(struct.includeBody),
        lambda_arn: cdktf.stringToTerraform(struct.lambdaArn),
    };
}
export function cloudfrontDistributionDefaultCacheBehaviorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct.allowedMethods),
        cache_policy_id: cdktf.stringToTerraform(struct.cachePolicyId),
        cached_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct.cachedMethods),
        compress: cdktf.booleanToTerraform(struct.compress),
        default_ttl: cdktf.numberToTerraform(struct.defaultTtl),
        field_level_encryption_id: cdktf.stringToTerraform(struct.fieldLevelEncryptionId),
        max_ttl: cdktf.numberToTerraform(struct.maxTtl),
        min_ttl: cdktf.numberToTerraform(struct.minTtl),
        origin_request_policy_id: cdktf.stringToTerraform(struct.originRequestPolicyId),
        realtime_log_config_arn: cdktf.stringToTerraform(struct.realtimeLogConfigArn),
        response_headers_policy_id: cdktf.stringToTerraform(struct.responseHeadersPolicyId),
        smooth_streaming: cdktf.booleanToTerraform(struct.smoothStreaming),
        target_origin_id: cdktf.stringToTerraform(struct.targetOriginId),
        trusted_key_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.trustedKeyGroups),
        trusted_signers: cdktf.listMapper(cdktf.stringToTerraform)(struct.trustedSigners),
        viewer_protocol_policy: cdktf.stringToTerraform(struct.viewerProtocolPolicy),
        forwarded_values: cloudfrontDistributionDefaultCacheBehaviorForwardedValuesToTerraform(struct.forwardedValues),
        function_association: cdktf.listMapper(cloudfrontDistributionDefaultCacheBehaviorFunctionAssociationToTerraform)(struct.functionAssociation),
        lambda_function_association: cdktf.listMapper(cloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationToTerraform)(struct.lambdaFunctionAssociation),
    };
}
export class CloudfrontDistributionDefaultCacheBehaviorOutputReference extends cdktf.ComplexObject {
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
        if (this._allowedMethods) {
            hasAnyValues = true;
            internalValueResult.allowedMethods = this._allowedMethods;
        }
        if (this._cachePolicyId) {
            hasAnyValues = true;
            internalValueResult.cachePolicyId = this._cachePolicyId;
        }
        if (this._cachedMethods) {
            hasAnyValues = true;
            internalValueResult.cachedMethods = this._cachedMethods;
        }
        if (this._compress) {
            hasAnyValues = true;
            internalValueResult.compress = this._compress;
        }
        if (this._defaultTtl) {
            hasAnyValues = true;
            internalValueResult.defaultTtl = this._defaultTtl;
        }
        if (this._fieldLevelEncryptionId) {
            hasAnyValues = true;
            internalValueResult.fieldLevelEncryptionId = this._fieldLevelEncryptionId;
        }
        if (this._maxTtl) {
            hasAnyValues = true;
            internalValueResult.maxTtl = this._maxTtl;
        }
        if (this._minTtl) {
            hasAnyValues = true;
            internalValueResult.minTtl = this._minTtl;
        }
        if (this._originRequestPolicyId) {
            hasAnyValues = true;
            internalValueResult.originRequestPolicyId = this._originRequestPolicyId;
        }
        if (this._realtimeLogConfigArn) {
            hasAnyValues = true;
            internalValueResult.realtimeLogConfigArn = this._realtimeLogConfigArn;
        }
        if (this._responseHeadersPolicyId) {
            hasAnyValues = true;
            internalValueResult.responseHeadersPolicyId = this._responseHeadersPolicyId;
        }
        if (this._smoothStreaming) {
            hasAnyValues = true;
            internalValueResult.smoothStreaming = this._smoothStreaming;
        }
        if (this._targetOriginId) {
            hasAnyValues = true;
            internalValueResult.targetOriginId = this._targetOriginId;
        }
        if (this._trustedKeyGroups) {
            hasAnyValues = true;
            internalValueResult.trustedKeyGroups = this._trustedKeyGroups;
        }
        if (this._trustedSigners) {
            hasAnyValues = true;
            internalValueResult.trustedSigners = this._trustedSigners;
        }
        if (this._viewerProtocolPolicy) {
            hasAnyValues = true;
            internalValueResult.viewerProtocolPolicy = this._viewerProtocolPolicy;
        }
        if (this._forwardedValues?.internalValue) {
            hasAnyValues = true;
            internalValueResult.forwardedValues = this._forwardedValues?.internalValue;
        }
        if (this._functionAssociation) {
            hasAnyValues = true;
            internalValueResult.functionAssociation = this._functionAssociation;
        }
        if (this._lambdaFunctionAssociation) {
            hasAnyValues = true;
            internalValueResult.lambdaFunctionAssociation = this._lambdaFunctionAssociation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allowedMethods = undefined;
            this._cachePolicyId = undefined;
            this._cachedMethods = undefined;
            this._compress = undefined;
            this._defaultTtl = undefined;
            this._fieldLevelEncryptionId = undefined;
            this._maxTtl = undefined;
            this._minTtl = undefined;
            this._originRequestPolicyId = undefined;
            this._realtimeLogConfigArn = undefined;
            this._responseHeadersPolicyId = undefined;
            this._smoothStreaming = undefined;
            this._targetOriginId = undefined;
            this._trustedKeyGroups = undefined;
            this._trustedSigners = undefined;
            this._viewerProtocolPolicy = undefined;
            this._forwardedValues.internalValue = undefined;
            this._functionAssociation = undefined;
            this._lambdaFunctionAssociation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allowedMethods = value.allowedMethods;
            this._cachePolicyId = value.cachePolicyId;
            this._cachedMethods = value.cachedMethods;
            this._compress = value.compress;
            this._defaultTtl = value.defaultTtl;
            this._fieldLevelEncryptionId = value.fieldLevelEncryptionId;
            this._maxTtl = value.maxTtl;
            this._minTtl = value.minTtl;
            this._originRequestPolicyId = value.originRequestPolicyId;
            this._realtimeLogConfigArn = value.realtimeLogConfigArn;
            this._responseHeadersPolicyId = value.responseHeadersPolicyId;
            this._smoothStreaming = value.smoothStreaming;
            this._targetOriginId = value.targetOriginId;
            this._trustedKeyGroups = value.trustedKeyGroups;
            this._trustedSigners = value.trustedSigners;
            this._viewerProtocolPolicy = value.viewerProtocolPolicy;
            this._forwardedValues.internalValue = value.forwardedValues;
            this._functionAssociation = value.functionAssociation;
            this._lambdaFunctionAssociation = value.lambdaFunctionAssociation;
        }
    }
    // allowed_methods - computed: false, optional: false, required: true
    _allowedMethods;
    get allowedMethods() {
        return this.getListAttribute('allowed_methods');
    }
    set allowedMethods(value) {
        this._allowedMethods = value;
    }
    // Temporarily expose input value. Use with caution.
    get allowedMethodsInput() {
        return this._allowedMethods;
    }
    // cache_policy_id - computed: false, optional: true, required: false
    _cachePolicyId;
    get cachePolicyId() {
        return this.getStringAttribute('cache_policy_id');
    }
    set cachePolicyId(value) {
        this._cachePolicyId = value;
    }
    resetCachePolicyId() {
        this._cachePolicyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cachePolicyIdInput() {
        return this._cachePolicyId;
    }
    // cached_methods - computed: false, optional: false, required: true
    _cachedMethods;
    get cachedMethods() {
        return this.getListAttribute('cached_methods');
    }
    set cachedMethods(value) {
        this._cachedMethods = value;
    }
    // Temporarily expose input value. Use with caution.
    get cachedMethodsInput() {
        return this._cachedMethods;
    }
    // compress - computed: false, optional: true, required: false
    _compress;
    get compress() {
        return this.getBooleanAttribute('compress');
    }
    set compress(value) {
        this._compress = value;
    }
    resetCompress() {
        this._compress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get compressInput() {
        return this._compress;
    }
    // default_ttl - computed: true, optional: true, required: false
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
    // field_level_encryption_id - computed: false, optional: true, required: false
    _fieldLevelEncryptionId;
    get fieldLevelEncryptionId() {
        return this.getStringAttribute('field_level_encryption_id');
    }
    set fieldLevelEncryptionId(value) {
        this._fieldLevelEncryptionId = value;
    }
    resetFieldLevelEncryptionId() {
        this._fieldLevelEncryptionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldLevelEncryptionIdInput() {
        return this._fieldLevelEncryptionId;
    }
    // max_ttl - computed: true, optional: true, required: false
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
    // origin_request_policy_id - computed: false, optional: true, required: false
    _originRequestPolicyId;
    get originRequestPolicyId() {
        return this.getStringAttribute('origin_request_policy_id');
    }
    set originRequestPolicyId(value) {
        this._originRequestPolicyId = value;
    }
    resetOriginRequestPolicyId() {
        this._originRequestPolicyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get originRequestPolicyIdInput() {
        return this._originRequestPolicyId;
    }
    // realtime_log_config_arn - computed: false, optional: true, required: false
    _realtimeLogConfigArn;
    get realtimeLogConfigArn() {
        return this.getStringAttribute('realtime_log_config_arn');
    }
    set realtimeLogConfigArn(value) {
        this._realtimeLogConfigArn = value;
    }
    resetRealtimeLogConfigArn() {
        this._realtimeLogConfigArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get realtimeLogConfigArnInput() {
        return this._realtimeLogConfigArn;
    }
    // response_headers_policy_id - computed: false, optional: true, required: false
    _responseHeadersPolicyId;
    get responseHeadersPolicyId() {
        return this.getStringAttribute('response_headers_policy_id');
    }
    set responseHeadersPolicyId(value) {
        this._responseHeadersPolicyId = value;
    }
    resetResponseHeadersPolicyId() {
        this._responseHeadersPolicyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get responseHeadersPolicyIdInput() {
        return this._responseHeadersPolicyId;
    }
    // smooth_streaming - computed: false, optional: true, required: false
    _smoothStreaming;
    get smoothStreaming() {
        return this.getBooleanAttribute('smooth_streaming');
    }
    set smoothStreaming(value) {
        this._smoothStreaming = value;
    }
    resetSmoothStreaming() {
        this._smoothStreaming = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get smoothStreamingInput() {
        return this._smoothStreaming;
    }
    // target_origin_id - computed: false, optional: false, required: true
    _targetOriginId;
    get targetOriginId() {
        return this.getStringAttribute('target_origin_id');
    }
    set targetOriginId(value) {
        this._targetOriginId = value;
    }
    // Temporarily expose input value. Use with caution.
    get targetOriginIdInput() {
        return this._targetOriginId;
    }
    // trusted_key_groups - computed: true, optional: true, required: false
    _trustedKeyGroups;
    get trustedKeyGroups() {
        return this.getListAttribute('trusted_key_groups');
    }
    set trustedKeyGroups(value) {
        this._trustedKeyGroups = value;
    }
    resetTrustedKeyGroups() {
        this._trustedKeyGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get trustedKeyGroupsInput() {
        return this._trustedKeyGroups;
    }
    // trusted_signers - computed: true, optional: true, required: false
    _trustedSigners;
    get trustedSigners() {
        return this.getListAttribute('trusted_signers');
    }
    set trustedSigners(value) {
        this._trustedSigners = value;
    }
    resetTrustedSigners() {
        this._trustedSigners = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get trustedSignersInput() {
        return this._trustedSigners;
    }
    // viewer_protocol_policy - computed: false, optional: false, required: true
    _viewerProtocolPolicy;
    get viewerProtocolPolicy() {
        return this.getStringAttribute('viewer_protocol_policy');
    }
    set viewerProtocolPolicy(value) {
        this._viewerProtocolPolicy = value;
    }
    // Temporarily expose input value. Use with caution.
    get viewerProtocolPolicyInput() {
        return this._viewerProtocolPolicy;
    }
    // forwarded_values - computed: false, optional: true, required: false
    _forwardedValues = new CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference(this, "forwarded_values", true);
    get forwardedValues() {
        return this._forwardedValues;
    }
    putForwardedValues(value) {
        this._forwardedValues.internalValue = value;
    }
    resetForwardedValues() {
        this._forwardedValues.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forwardedValuesInput() {
        return this._forwardedValues.internalValue;
    }
    // function_association - computed: false, optional: true, required: false
    _functionAssociation;
    get functionAssociation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('function_association');
    }
    set functionAssociation(value) {
        this._functionAssociation = value;
    }
    resetFunctionAssociation() {
        this._functionAssociation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get functionAssociationInput() {
        return this._functionAssociation;
    }
    // lambda_function_association - computed: false, optional: true, required: false
    _lambdaFunctionAssociation;
    get lambdaFunctionAssociation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('lambda_function_association');
    }
    set lambdaFunctionAssociation(value) {
        this._lambdaFunctionAssociation = value;
    }
    resetLambdaFunctionAssociation() {
        this._lambdaFunctionAssociation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lambdaFunctionAssociationInput() {
        return this._lambdaFunctionAssociation;
    }
}
export function cloudfrontDistributionLoggingConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        include_cookies: cdktf.booleanToTerraform(struct.includeCookies),
        prefix: cdktf.stringToTerraform(struct.prefix),
    };
}
export class CloudfrontDistributionLoggingConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._bucket) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._includeCookies) {
            hasAnyValues = true;
            internalValueResult.includeCookies = this._includeCookies;
        }
        if (this._prefix) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bucket = undefined;
            this._includeCookies = undefined;
            this._prefix = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bucket = value.bucket;
            this._includeCookies = value.includeCookies;
            this._prefix = value.prefix;
        }
    }
    // bucket - computed: false, optional: false, required: true
    _bucket;
    get bucket() {
        return this.getStringAttribute('bucket');
    }
    set bucket(value) {
        this._bucket = value;
    }
    // Temporarily expose input value. Use with caution.
    get bucketInput() {
        return this._bucket;
    }
    // include_cookies - computed: false, optional: true, required: false
    _includeCookies;
    get includeCookies() {
        return this.getBooleanAttribute('include_cookies');
    }
    set includeCookies(value) {
        this._includeCookies = value;
    }
    resetIncludeCookies() {
        this._includeCookies = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeCookiesInput() {
        return this._includeCookies;
    }
    // prefix - computed: false, optional: true, required: false
    _prefix;
    get prefix() {
        return this.getStringAttribute('prefix');
    }
    set prefix(value) {
        this._prefix = value;
    }
    resetPrefix() {
        this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get prefixInput() {
        return this._prefix;
    }
}
export function cloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        forward: cdktf.stringToTerraform(struct.forward),
        whitelisted_names: cdktf.listMapper(cdktf.stringToTerraform)(struct.whitelistedNames),
    };
}
export class CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference extends cdktf.ComplexObject {
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
        if (this._forward) {
            hasAnyValues = true;
            internalValueResult.forward = this._forward;
        }
        if (this._whitelistedNames) {
            hasAnyValues = true;
            internalValueResult.whitelistedNames = this._whitelistedNames;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._forward = undefined;
            this._whitelistedNames = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._forward = value.forward;
            this._whitelistedNames = value.whitelistedNames;
        }
    }
    // forward - computed: false, optional: false, required: true
    _forward;
    get forward() {
        return this.getStringAttribute('forward');
    }
    set forward(value) {
        this._forward = value;
    }
    // Temporarily expose input value. Use with caution.
    get forwardInput() {
        return this._forward;
    }
    // whitelisted_names - computed: false, optional: true, required: false
    _whitelistedNames;
    get whitelistedNames() {
        return this.getListAttribute('whitelisted_names');
    }
    set whitelistedNames(value) {
        this._whitelistedNames = value;
    }
    resetWhitelistedNames() {
        this._whitelistedNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get whitelistedNamesInput() {
        return this._whitelistedNames;
    }
}
export function cloudfrontDistributionOrderedCacheBehaviorForwardedValuesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        headers: cdktf.listMapper(cdktf.stringToTerraform)(struct.headers),
        query_string: cdktf.booleanToTerraform(struct.queryString),
        query_string_cache_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct.queryStringCacheKeys),
        cookies: cloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesToTerraform(struct.cookies),
    };
}
export class CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference extends cdktf.ComplexObject {
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
        if (this._headers) {
            hasAnyValues = true;
            internalValueResult.headers = this._headers;
        }
        if (this._queryString) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString;
        }
        if (this._queryStringCacheKeys) {
            hasAnyValues = true;
            internalValueResult.queryStringCacheKeys = this._queryStringCacheKeys;
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
            this._headers = undefined;
            this._queryString = undefined;
            this._queryStringCacheKeys = undefined;
            this._cookies.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._headers = value.headers;
            this._queryString = value.queryString;
            this._queryStringCacheKeys = value.queryStringCacheKeys;
            this._cookies.internalValue = value.cookies;
        }
    }
    // headers - computed: true, optional: true, required: false
    _headers;
    get headers() {
        return this.getListAttribute('headers');
    }
    set headers(value) {
        this._headers = value;
    }
    resetHeaders() {
        this._headers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get headersInput() {
        return this._headers;
    }
    // query_string - computed: false, optional: false, required: true
    _queryString;
    get queryString() {
        return this.getBooleanAttribute('query_string');
    }
    set queryString(value) {
        this._queryString = value;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString;
    }
    // query_string_cache_keys - computed: true, optional: true, required: false
    _queryStringCacheKeys;
    get queryStringCacheKeys() {
        return this.getListAttribute('query_string_cache_keys');
    }
    set queryStringCacheKeys(value) {
        this._queryStringCacheKeys = value;
    }
    resetQueryStringCacheKeys() {
        this._queryStringCacheKeys = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringCacheKeysInput() {
        return this._queryStringCacheKeys;
    }
    // cookies - computed: false, optional: false, required: true
    _cookies = new CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference(this, "cookies", true);
    get cookies() {
        return this._cookies;
    }
    putCookies(value) {
        this._cookies.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get cookiesInput() {
        return this._cookies.internalValue;
    }
}
export function cloudfrontDistributionOrderedCacheBehaviorFunctionAssociationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        event_type: cdktf.stringToTerraform(struct.eventType),
        function_arn: cdktf.stringToTerraform(struct.functionArn),
    };
}
export function cloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        event_type: cdktf.stringToTerraform(struct.eventType),
        include_body: cdktf.booleanToTerraform(struct.includeBody),
        lambda_arn: cdktf.stringToTerraform(struct.lambdaArn),
    };
}
export function cloudfrontDistributionOrderedCacheBehaviorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct.allowedMethods),
        cache_policy_id: cdktf.stringToTerraform(struct.cachePolicyId),
        cached_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct.cachedMethods),
        compress: cdktf.booleanToTerraform(struct.compress),
        default_ttl: cdktf.numberToTerraform(struct.defaultTtl),
        field_level_encryption_id: cdktf.stringToTerraform(struct.fieldLevelEncryptionId),
        max_ttl: cdktf.numberToTerraform(struct.maxTtl),
        min_ttl: cdktf.numberToTerraform(struct.minTtl),
        origin_request_policy_id: cdktf.stringToTerraform(struct.originRequestPolicyId),
        path_pattern: cdktf.stringToTerraform(struct.pathPattern),
        realtime_log_config_arn: cdktf.stringToTerraform(struct.realtimeLogConfigArn),
        response_headers_policy_id: cdktf.stringToTerraform(struct.responseHeadersPolicyId),
        smooth_streaming: cdktf.booleanToTerraform(struct.smoothStreaming),
        target_origin_id: cdktf.stringToTerraform(struct.targetOriginId),
        trusted_key_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.trustedKeyGroups),
        trusted_signers: cdktf.listMapper(cdktf.stringToTerraform)(struct.trustedSigners),
        viewer_protocol_policy: cdktf.stringToTerraform(struct.viewerProtocolPolicy),
        forwarded_values: cloudfrontDistributionOrderedCacheBehaviorForwardedValuesToTerraform(struct.forwardedValues),
        function_association: cdktf.listMapper(cloudfrontDistributionOrderedCacheBehaviorFunctionAssociationToTerraform)(struct.functionAssociation),
        lambda_function_association: cdktf.listMapper(cloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationToTerraform)(struct.lambdaFunctionAssociation),
    };
}
export function cloudfrontDistributionOriginCustomHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function cloudfrontDistributionOriginCustomOriginConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        http_port: cdktf.numberToTerraform(struct.httpPort),
        https_port: cdktf.numberToTerraform(struct.httpsPort),
        origin_keepalive_timeout: cdktf.numberToTerraform(struct.originKeepaliveTimeout),
        origin_protocol_policy: cdktf.stringToTerraform(struct.originProtocolPolicy),
        origin_read_timeout: cdktf.numberToTerraform(struct.originReadTimeout),
        origin_ssl_protocols: cdktf.listMapper(cdktf.stringToTerraform)(struct.originSslProtocols),
    };
}
export class CloudfrontDistributionOriginCustomOriginConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._httpPort) {
            hasAnyValues = true;
            internalValueResult.httpPort = this._httpPort;
        }
        if (this._httpsPort) {
            hasAnyValues = true;
            internalValueResult.httpsPort = this._httpsPort;
        }
        if (this._originKeepaliveTimeout) {
            hasAnyValues = true;
            internalValueResult.originKeepaliveTimeout = this._originKeepaliveTimeout;
        }
        if (this._originProtocolPolicy) {
            hasAnyValues = true;
            internalValueResult.originProtocolPolicy = this._originProtocolPolicy;
        }
        if (this._originReadTimeout) {
            hasAnyValues = true;
            internalValueResult.originReadTimeout = this._originReadTimeout;
        }
        if (this._originSslProtocols) {
            hasAnyValues = true;
            internalValueResult.originSslProtocols = this._originSslProtocols;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._httpPort = undefined;
            this._httpsPort = undefined;
            this._originKeepaliveTimeout = undefined;
            this._originProtocolPolicy = undefined;
            this._originReadTimeout = undefined;
            this._originSslProtocols = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._httpPort = value.httpPort;
            this._httpsPort = value.httpsPort;
            this._originKeepaliveTimeout = value.originKeepaliveTimeout;
            this._originProtocolPolicy = value.originProtocolPolicy;
            this._originReadTimeout = value.originReadTimeout;
            this._originSslProtocols = value.originSslProtocols;
        }
    }
    // http_port - computed: false, optional: false, required: true
    _httpPort;
    get httpPort() {
        return this.getNumberAttribute('http_port');
    }
    set httpPort(value) {
        this._httpPort = value;
    }
    // Temporarily expose input value. Use with caution.
    get httpPortInput() {
        return this._httpPort;
    }
    // https_port - computed: false, optional: false, required: true
    _httpsPort;
    get httpsPort() {
        return this.getNumberAttribute('https_port');
    }
    set httpsPort(value) {
        this._httpsPort = value;
    }
    // Temporarily expose input value. Use with caution.
    get httpsPortInput() {
        return this._httpsPort;
    }
    // origin_keepalive_timeout - computed: false, optional: true, required: false
    _originKeepaliveTimeout;
    get originKeepaliveTimeout() {
        return this.getNumberAttribute('origin_keepalive_timeout');
    }
    set originKeepaliveTimeout(value) {
        this._originKeepaliveTimeout = value;
    }
    resetOriginKeepaliveTimeout() {
        this._originKeepaliveTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get originKeepaliveTimeoutInput() {
        return this._originKeepaliveTimeout;
    }
    // origin_protocol_policy - computed: false, optional: false, required: true
    _originProtocolPolicy;
    get originProtocolPolicy() {
        return this.getStringAttribute('origin_protocol_policy');
    }
    set originProtocolPolicy(value) {
        this._originProtocolPolicy = value;
    }
    // Temporarily expose input value. Use with caution.
    get originProtocolPolicyInput() {
        return this._originProtocolPolicy;
    }
    // origin_read_timeout - computed: false, optional: true, required: false
    _originReadTimeout;
    get originReadTimeout() {
        return this.getNumberAttribute('origin_read_timeout');
    }
    set originReadTimeout(value) {
        this._originReadTimeout = value;
    }
    resetOriginReadTimeout() {
        this._originReadTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get originReadTimeoutInput() {
        return this._originReadTimeout;
    }
    // origin_ssl_protocols - computed: false, optional: false, required: true
    _originSslProtocols;
    get originSslProtocols() {
        return this.getListAttribute('origin_ssl_protocols');
    }
    set originSslProtocols(value) {
        this._originSslProtocols = value;
    }
    // Temporarily expose input value. Use with caution.
    get originSslProtocolsInput() {
        return this._originSslProtocols;
    }
}
export function cloudfrontDistributionOriginOriginShieldToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        origin_shield_region: cdktf.stringToTerraform(struct.originShieldRegion),
    };
}
export class CloudfrontDistributionOriginOriginShieldOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._originShieldRegion) {
            hasAnyValues = true;
            internalValueResult.originShieldRegion = this._originShieldRegion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._originShieldRegion = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._originShieldRegion = value.originShieldRegion;
        }
    }
    // enabled - computed: false, optional: false, required: true
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // origin_shield_region - computed: false, optional: false, required: true
    _originShieldRegion;
    get originShieldRegion() {
        return this.getStringAttribute('origin_shield_region');
    }
    set originShieldRegion(value) {
        this._originShieldRegion = value;
    }
    // Temporarily expose input value. Use with caution.
    get originShieldRegionInput() {
        return this._originShieldRegion;
    }
}
export function cloudfrontDistributionOriginS3OriginConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        origin_access_identity: cdktf.stringToTerraform(struct.originAccessIdentity),
    };
}
export class CloudfrontDistributionOriginS3OriginConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._originAccessIdentity) {
            hasAnyValues = true;
            internalValueResult.originAccessIdentity = this._originAccessIdentity;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._originAccessIdentity = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._originAccessIdentity = value.originAccessIdentity;
        }
    }
    // origin_access_identity - computed: false, optional: false, required: true
    _originAccessIdentity;
    get originAccessIdentity() {
        return this.getStringAttribute('origin_access_identity');
    }
    set originAccessIdentity(value) {
        this._originAccessIdentity = value;
    }
    // Temporarily expose input value. Use with caution.
    get originAccessIdentityInput() {
        return this._originAccessIdentity;
    }
}
export function cloudfrontDistributionOriginToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        connection_attempts: cdktf.numberToTerraform(struct.connectionAttempts),
        connection_timeout: cdktf.numberToTerraform(struct.connectionTimeout),
        domain_name: cdktf.stringToTerraform(struct.domainName),
        origin_id: cdktf.stringToTerraform(struct.originId),
        origin_path: cdktf.stringToTerraform(struct.originPath),
        custom_header: cdktf.listMapper(cloudfrontDistributionOriginCustomHeaderToTerraform)(struct.customHeader),
        custom_origin_config: cloudfrontDistributionOriginCustomOriginConfigToTerraform(struct.customOriginConfig),
        origin_shield: cloudfrontDistributionOriginOriginShieldToTerraform(struct.originShield),
        s3_origin_config: cloudfrontDistributionOriginS3OriginConfigToTerraform(struct.s3OriginConfig),
    };
}
export function cloudfrontDistributionOriginGroupFailoverCriteriaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        status_codes: cdktf.listMapper(cdktf.numberToTerraform)(struct.statusCodes),
    };
}
export class CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference extends cdktf.ComplexObject {
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
        if (this._statusCodes) {
            hasAnyValues = true;
            internalValueResult.statusCodes = this._statusCodes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._statusCodes = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._statusCodes = value.statusCodes;
        }
    }
    // status_codes - computed: false, optional: false, required: true
    _statusCodes;
    get statusCodes() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('status_codes');
    }
    set statusCodes(value) {
        this._statusCodes = value;
    }
    // Temporarily expose input value. Use with caution.
    get statusCodesInput() {
        return this._statusCodes;
    }
}
export function cloudfrontDistributionOriginGroupMemberToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        origin_id: cdktf.stringToTerraform(struct.originId),
    };
}
export function cloudfrontDistributionOriginGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        origin_id: cdktf.stringToTerraform(struct.originId),
        failover_criteria: cloudfrontDistributionOriginGroupFailoverCriteriaToTerraform(struct.failoverCriteria),
        member: cdktf.listMapper(cloudfrontDistributionOriginGroupMemberToTerraform)(struct.member),
    };
}
export function cloudfrontDistributionRestrictionsGeoRestrictionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        locations: cdktf.listMapper(cdktf.stringToTerraform)(struct.locations),
        restriction_type: cdktf.stringToTerraform(struct.restrictionType),
    };
}
export class CloudfrontDistributionRestrictionsGeoRestrictionOutputReference extends cdktf.ComplexObject {
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
        if (this._locations) {
            hasAnyValues = true;
            internalValueResult.locations = this._locations;
        }
        if (this._restrictionType) {
            hasAnyValues = true;
            internalValueResult.restrictionType = this._restrictionType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._locations = undefined;
            this._restrictionType = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._locations = value.locations;
            this._restrictionType = value.restrictionType;
        }
    }
    // locations - computed: true, optional: true, required: false
    _locations;
    get locations() {
        return this.getListAttribute('locations');
    }
    set locations(value) {
        this._locations = value;
    }
    resetLocations() {
        this._locations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get locationsInput() {
        return this._locations;
    }
    // restriction_type - computed: false, optional: false, required: true
    _restrictionType;
    get restrictionType() {
        return this.getStringAttribute('restriction_type');
    }
    set restrictionType(value) {
        this._restrictionType = value;
    }
    // Temporarily expose input value. Use with caution.
    get restrictionTypeInput() {
        return this._restrictionType;
    }
}
export function cloudfrontDistributionRestrictionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        geo_restriction: cloudfrontDistributionRestrictionsGeoRestrictionToTerraform(struct.geoRestriction),
    };
}
export class CloudfrontDistributionRestrictionsOutputReference extends cdktf.ComplexObject {
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
        if (this._geoRestriction?.internalValue) {
            hasAnyValues = true;
            internalValueResult.geoRestriction = this._geoRestriction?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._geoRestriction.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._geoRestriction.internalValue = value.geoRestriction;
        }
    }
    // geo_restriction - computed: false, optional: false, required: true
    _geoRestriction = new CloudfrontDistributionRestrictionsGeoRestrictionOutputReference(this, "geo_restriction", true);
    get geoRestriction() {
        return this._geoRestriction;
    }
    putGeoRestriction(value) {
        this._geoRestriction.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get geoRestrictionInput() {
        return this._geoRestriction.internalValue;
    }
}
export function cloudfrontDistributionViewerCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        acm_certificate_arn: cdktf.stringToTerraform(struct.acmCertificateArn),
        cloudfront_default_certificate: cdktf.booleanToTerraform(struct.cloudfrontDefaultCertificate),
        iam_certificate_id: cdktf.stringToTerraform(struct.iamCertificateId),
        minimum_protocol_version: cdktf.stringToTerraform(struct.minimumProtocolVersion),
        ssl_support_method: cdktf.stringToTerraform(struct.sslSupportMethod),
    };
}
export class CloudfrontDistributionViewerCertificateOutputReference extends cdktf.ComplexObject {
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
        if (this._acmCertificateArn) {
            hasAnyValues = true;
            internalValueResult.acmCertificateArn = this._acmCertificateArn;
        }
        if (this._cloudfrontDefaultCertificate) {
            hasAnyValues = true;
            internalValueResult.cloudfrontDefaultCertificate = this._cloudfrontDefaultCertificate;
        }
        if (this._iamCertificateId) {
            hasAnyValues = true;
            internalValueResult.iamCertificateId = this._iamCertificateId;
        }
        if (this._minimumProtocolVersion) {
            hasAnyValues = true;
            internalValueResult.minimumProtocolVersion = this._minimumProtocolVersion;
        }
        if (this._sslSupportMethod) {
            hasAnyValues = true;
            internalValueResult.sslSupportMethod = this._sslSupportMethod;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._acmCertificateArn = undefined;
            this._cloudfrontDefaultCertificate = undefined;
            this._iamCertificateId = undefined;
            this._minimumProtocolVersion = undefined;
            this._sslSupportMethod = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._acmCertificateArn = value.acmCertificateArn;
            this._cloudfrontDefaultCertificate = value.cloudfrontDefaultCertificate;
            this._iamCertificateId = value.iamCertificateId;
            this._minimumProtocolVersion = value.minimumProtocolVersion;
            this._sslSupportMethod = value.sslSupportMethod;
        }
    }
    // acm_certificate_arn - computed: false, optional: true, required: false
    _acmCertificateArn;
    get acmCertificateArn() {
        return this.getStringAttribute('acm_certificate_arn');
    }
    set acmCertificateArn(value) {
        this._acmCertificateArn = value;
    }
    resetAcmCertificateArn() {
        this._acmCertificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get acmCertificateArnInput() {
        return this._acmCertificateArn;
    }
    // cloudfront_default_certificate - computed: false, optional: true, required: false
    _cloudfrontDefaultCertificate;
    get cloudfrontDefaultCertificate() {
        return this.getBooleanAttribute('cloudfront_default_certificate');
    }
    set cloudfrontDefaultCertificate(value) {
        this._cloudfrontDefaultCertificate = value;
    }
    resetCloudfrontDefaultCertificate() {
        this._cloudfrontDefaultCertificate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudfrontDefaultCertificateInput() {
        return this._cloudfrontDefaultCertificate;
    }
    // iam_certificate_id - computed: false, optional: true, required: false
    _iamCertificateId;
    get iamCertificateId() {
        return this.getStringAttribute('iam_certificate_id');
    }
    set iamCertificateId(value) {
        this._iamCertificateId = value;
    }
    resetIamCertificateId() {
        this._iamCertificateId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get iamCertificateIdInput() {
        return this._iamCertificateId;
    }
    // minimum_protocol_version - computed: false, optional: true, required: false
    _minimumProtocolVersion;
    get minimumProtocolVersion() {
        return this.getStringAttribute('minimum_protocol_version');
    }
    set minimumProtocolVersion(value) {
        this._minimumProtocolVersion = value;
    }
    resetMinimumProtocolVersion() {
        this._minimumProtocolVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minimumProtocolVersionInput() {
        return this._minimumProtocolVersion;
    }
    // ssl_support_method - computed: false, optional: true, required: false
    _sslSupportMethod;
    get sslSupportMethod() {
        return this.getStringAttribute('ssl_support_method');
    }
    set sslSupportMethod(value) {
        this._sslSupportMethod = value;
    }
    resetSslSupportMethod() {
        this._sslSupportMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sslSupportMethodInput() {
        return this._sslSupportMethod;
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html aws_cloudfront_distribution}
*/
export class CloudfrontDistribution extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_cloudfront_distribution";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html aws_cloudfront_distribution} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontDistributionConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_cloudfront_distribution',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._aliases = config.aliases;
        this._comment = config.comment;
        this._defaultRootObject = config.defaultRootObject;
        this._enabled = config.enabled;
        this._httpVersion = config.httpVersion;
        this._isIpv6Enabled = config.isIpv6Enabled;
        this._priceClass = config.priceClass;
        this._retainOnDelete = config.retainOnDelete;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._waitForDeployment = config.waitForDeployment;
        this._webAclId = config.webAclId;
        this._customErrorResponse = config.customErrorResponse;
        this._defaultCacheBehavior.internalValue = config.defaultCacheBehavior;
        this._loggingConfig.internalValue = config.loggingConfig;
        this._orderedCacheBehavior = config.orderedCacheBehavior;
        this._origin = config.origin;
        this._originGroup = config.originGroup;
        this._restrictions.internalValue = config.restrictions;
        this._viewerCertificate.internalValue = config.viewerCertificate;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // aliases - computed: false, optional: true, required: false
    _aliases;
    get aliases() {
        return this.getListAttribute('aliases');
    }
    set aliases(value) {
        this._aliases = value;
    }
    resetAliases() {
        this._aliases = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aliasesInput() {
        return this._aliases;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // caller_reference - computed: true, optional: false, required: false
    get callerReference() {
        return this.getStringAttribute('caller_reference');
    }
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
    // default_root_object - computed: false, optional: true, required: false
    _defaultRootObject;
    get defaultRootObject() {
        return this.getStringAttribute('default_root_object');
    }
    set defaultRootObject(value) {
        this._defaultRootObject = value;
    }
    resetDefaultRootObject() {
        this._defaultRootObject = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultRootObjectInput() {
        return this._defaultRootObject;
    }
    // domain_name - computed: true, optional: false, required: false
    get domainName() {
        return this.getStringAttribute('domain_name');
    }
    // enabled - computed: false, optional: false, required: true
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // etag - computed: true, optional: false, required: false
    get etag() {
        return this.getStringAttribute('etag');
    }
    // hosted_zone_id - computed: true, optional: false, required: false
    get hostedZoneId() {
        return this.getStringAttribute('hosted_zone_id');
    }
    // http_version - computed: false, optional: true, required: false
    _httpVersion;
    get httpVersion() {
        return this.getStringAttribute('http_version');
    }
    set httpVersion(value) {
        this._httpVersion = value;
    }
    resetHttpVersion() {
        this._httpVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get httpVersionInput() {
        return this._httpVersion;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // in_progress_validation_batches - computed: true, optional: false, required: false
    get inProgressValidationBatches() {
        return this.getNumberAttribute('in_progress_validation_batches');
    }
    // is_ipv6_enabled - computed: false, optional: true, required: false
    _isIpv6Enabled;
    get isIpv6Enabled() {
        return this.getBooleanAttribute('is_ipv6_enabled');
    }
    set isIpv6Enabled(value) {
        this._isIpv6Enabled = value;
    }
    resetIsIpv6Enabled() {
        this._isIpv6Enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get isIpv6EnabledInput() {
        return this._isIpv6Enabled;
    }
    // last_modified_time - computed: true, optional: false, required: false
    get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
    }
    // price_class - computed: false, optional: true, required: false
    _priceClass;
    get priceClass() {
        return this.getStringAttribute('price_class');
    }
    set priceClass(value) {
        this._priceClass = value;
    }
    resetPriceClass() {
        this._priceClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get priceClassInput() {
        return this._priceClass;
    }
    // retain_on_delete - computed: false, optional: true, required: false
    _retainOnDelete;
    get retainOnDelete() {
        return this.getBooleanAttribute('retain_on_delete');
    }
    set retainOnDelete(value) {
        this._retainOnDelete = value;
    }
    resetRetainOnDelete() {
        this._retainOnDelete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get retainOnDeleteInput() {
        return this._retainOnDelete;
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // tags - computed: false, optional: true, required: false
    _tags;
    get tags() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags');
    }
    set tags(value) {
        this._tags = value;
    }
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsInput() {
        return this._tags;
    }
    // tags_all - computed: true, optional: true, required: false
    _tagsAll;
    get tagsAll() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags_all');
    }
    set tagsAll(value) {
        this._tagsAll = value;
    }
    resetTagsAll() {
        this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsAllInput() {
        return this._tagsAll;
    }
    // trusted_key_groups - computed: true, optional: false, required: false
    trustedKeyGroups(index) {
        return new CloudfrontDistributionTrustedKeyGroups(this, 'trusted_key_groups', index);
    }
    // trusted_signers - computed: true, optional: false, required: false
    trustedSigners(index) {
        return new CloudfrontDistributionTrustedSigners(this, 'trusted_signers', index);
    }
    // wait_for_deployment - computed: false, optional: true, required: false
    _waitForDeployment;
    get waitForDeployment() {
        return this.getBooleanAttribute('wait_for_deployment');
    }
    set waitForDeployment(value) {
        this._waitForDeployment = value;
    }
    resetWaitForDeployment() {
        this._waitForDeployment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get waitForDeploymentInput() {
        return this._waitForDeployment;
    }
    // web_acl_id - computed: false, optional: true, required: false
    _webAclId;
    get webAclId() {
        return this.getStringAttribute('web_acl_id');
    }
    set webAclId(value) {
        this._webAclId = value;
    }
    resetWebAclId() {
        this._webAclId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get webAclIdInput() {
        return this._webAclId;
    }
    // custom_error_response - computed: false, optional: true, required: false
    _customErrorResponse;
    get customErrorResponse() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('custom_error_response');
    }
    set customErrorResponse(value) {
        this._customErrorResponse = value;
    }
    resetCustomErrorResponse() {
        this._customErrorResponse = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customErrorResponseInput() {
        return this._customErrorResponse;
    }
    // default_cache_behavior - computed: false, optional: false, required: true
    _defaultCacheBehavior = new CloudfrontDistributionDefaultCacheBehaviorOutputReference(this, "default_cache_behavior", true);
    get defaultCacheBehavior() {
        return this._defaultCacheBehavior;
    }
    putDefaultCacheBehavior(value) {
        this._defaultCacheBehavior.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get defaultCacheBehaviorInput() {
        return this._defaultCacheBehavior.internalValue;
    }
    // logging_config - computed: false, optional: true, required: false
    _loggingConfig = new CloudfrontDistributionLoggingConfigOutputReference(this, "logging_config", true);
    get loggingConfig() {
        return this._loggingConfig;
    }
    putLoggingConfig(value) {
        this._loggingConfig.internalValue = value;
    }
    resetLoggingConfig() {
        this._loggingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loggingConfigInput() {
        return this._loggingConfig.internalValue;
    }
    // ordered_cache_behavior - computed: false, optional: true, required: false
    _orderedCacheBehavior;
    get orderedCacheBehavior() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('ordered_cache_behavior');
    }
    set orderedCacheBehavior(value) {
        this._orderedCacheBehavior = value;
    }
    resetOrderedCacheBehavior() {
        this._orderedCacheBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get orderedCacheBehaviorInput() {
        return this._orderedCacheBehavior;
    }
    // origin - computed: false, optional: false, required: true
    _origin;
    get origin() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('origin');
    }
    set origin(value) {
        this._origin = value;
    }
    // Temporarily expose input value. Use with caution.
    get originInput() {
        return this._origin;
    }
    // origin_group - computed: false, optional: true, required: false
    _originGroup;
    get originGroup() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('origin_group');
    }
    set originGroup(value) {
        this._originGroup = value;
    }
    resetOriginGroup() {
        this._originGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get originGroupInput() {
        return this._originGroup;
    }
    // restrictions - computed: false, optional: false, required: true
    _restrictions = new CloudfrontDistributionRestrictionsOutputReference(this, "restrictions", true);
    get restrictions() {
        return this._restrictions;
    }
    putRestrictions(value) {
        this._restrictions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get restrictionsInput() {
        return this._restrictions.internalValue;
    }
    // viewer_certificate - computed: false, optional: false, required: true
    _viewerCertificate = new CloudfrontDistributionViewerCertificateOutputReference(this, "viewer_certificate", true);
    get viewerCertificate() {
        return this._viewerCertificate;
    }
    putViewerCertificate(value) {
        this._viewerCertificate.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get viewerCertificateInput() {
        return this._viewerCertificate.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            aliases: cdktf.listMapper(cdktf.stringToTerraform)(this._aliases),
            comment: cdktf.stringToTerraform(this._comment),
            default_root_object: cdktf.stringToTerraform(this._defaultRootObject),
            enabled: cdktf.booleanToTerraform(this._enabled),
            http_version: cdktf.stringToTerraform(this._httpVersion),
            is_ipv6_enabled: cdktf.booleanToTerraform(this._isIpv6Enabled),
            price_class: cdktf.stringToTerraform(this._priceClass),
            retain_on_delete: cdktf.booleanToTerraform(this._retainOnDelete),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            wait_for_deployment: cdktf.booleanToTerraform(this._waitForDeployment),
            web_acl_id: cdktf.stringToTerraform(this._webAclId),
            custom_error_response: cdktf.listMapper(cloudfrontDistributionCustomErrorResponseToTerraform)(this._customErrorResponse),
            default_cache_behavior: cloudfrontDistributionDefaultCacheBehaviorToTerraform(this._defaultCacheBehavior.internalValue),
            logging_config: cloudfrontDistributionLoggingConfigToTerraform(this._loggingConfig.internalValue),
            ordered_cache_behavior: cdktf.listMapper(cloudfrontDistributionOrderedCacheBehaviorToTerraform)(this._orderedCacheBehavior),
            origin: cdktf.listMapper(cloudfrontDistributionOriginToTerraform)(this._origin),
            origin_group: cdktf.listMapper(cloudfrontDistributionOriginGroupToTerraform)(this._originGroup),
            restrictions: cloudfrontDistributionRestrictionsToTerraform(this._restrictions.internalValue),
            viewer_certificate: cloudfrontDistributionViewerCertificateToTerraform(this._viewerCertificate.internalValue),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRmcm9udC1kaXN0cmlidXRpb24uanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImNsb3VkZnJvbnQtZGlzdHJpYnV0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQXVHL0IsTUFBTSxPQUFPLDJDQUE0QyxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFeEYsa0VBQWtFO0lBQ2xFLElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsa0VBQWtFO0lBQ2xFLElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBQ0Y7QUFDRCxNQUFNLE9BQU8sc0NBQXVDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVuRiw2REFBNkQ7SUFDN0QsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBUSxDQUFDO0lBQ3BELENBQUM7SUFFRCwyREFBMkQ7SUFDM0QsSUFBVyxLQUFLO1FBQ2Qsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLE9BQU8sQ0FBUSxDQUFDO0lBQ3hELENBQUM7Q0FDRjtBQUNELE1BQU0sT0FBTyx5Q0FBMEMsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXRGLHdFQUF3RTtJQUN4RSxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxrRUFBa0U7SUFDbEUsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FDRjtBQUNELE1BQU0sT0FBTyxvQ0FBcUMsU0FBUSxLQUFL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