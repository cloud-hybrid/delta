// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies extends cdktf.ComplexComputedList {
    // items - computed: true, optional: false, required: false
    get items() {
        return this.getListAttribute('items');
    }
}
export class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig extends cdktf.ComplexComputedList {
    // cookie_behavior - computed: true, optional: false, required: false
    get cookieBehavior() {
        return this.getStringAttribute('cookie_behavior');
    }
    // cookies - computed: true, optional: false, required: false
    get cookies() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('cookies');
    }
}
export class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders extends cdktf.ComplexComputedList {
    // items - computed: true, optional: false, required: false
    get items() {
        return this.getListAttribute('items');
    }
}
export class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig extends cdktf.ComplexComputedList {
    // header_behavior - computed: true, optional: false, required: false
    get headerBehavior() {
        return this.getStringAttribute('header_behavior');
    }
    // headers - computed: true, optional: false, required: false
    get headers() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('headers');
    }
}
export class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings extends cdktf.ComplexComputedList {
    // items - computed: true, optional: false, required: false
    get items() {
        return this.getListAttribute('items');
    }
}
export class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig extends cdktf.ComplexComputedList {
    // query_string_behavior - computed: true, optional: false, required: false
    get queryStringBehavior() {
        return this.getStringAttribute('query_string_behavior');
    }
    // query_strings - computed: true, optional: false, required: false
    get queryStrings() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('query_strings');
    }
}
export class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin extends cdktf.ComplexComputedList {
    // cookies_config - computed: true, optional: false, required: false
    get cookiesConfig() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('cookies_config');
    }
    // enable_accept_encoding_brotli - computed: true, optional: false, required: false
    get enableAcceptEncodingBrotli() {
        return this.getBooleanAttribute('enable_accept_encoding_brotli');
    }
    // enable_accept_encoding_gzip - computed: true, optional: false, required: false
    get enableAcceptEncodingGzip() {
        return this.getBooleanAttribute('enable_accept_encoding_gzip');
    }
    // headers_config - computed: true, optional: false, required: false
    get headersConfig() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('headers_config');
    }
    // query_strings_config - computed: true, optional: false, required: false
    get queryStringsConfig() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('query_strings_config');
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_cache_policy.html aws_cloudfront_cache_policy}
*/
export class DataAwsCloudfrontCachePolicy extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_cloudfront_cache_policy";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_cache_policy.html aws_cloudfront_cache_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudfrontCachePolicyConfig = {}
    */
    constructor(scope, id, config = {}) {
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
        this._id = config.id;
        this._name = config.name;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // comment - computed: true, optional: false, required: false
    get comment() {
        return this.getStringAttribute('comment');
    }
    // default_ttl - computed: true, optional: false, required: false
    get defaultTtl() {
        return this.getNumberAttribute('default_ttl');
    }
    // etag - computed: true, optional: false, required: false
    get etag() {
        return this.getStringAttribute('etag');
    }
    // id - computed: false, optional: true, required: false
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // max_ttl - computed: true, optional: false, required: false
    get maxTtl() {
        return this.getNumberAttribute('max_ttl');
    }
    // min_ttl - computed: true, optional: false, required: false
    get minTtl() {
        return this.getNumberAttribute('min_ttl');
    }
    // name - computed: false, optional: true, required: false
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // parameters_in_cache_key_and_forwarded_to_origin - computed: true, optional: false, required: false
    parametersInCacheKeyAndForwardedToOrigin(index) {
        return new DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin(this, 'parameters_in_cache_key_and_forwarded_to_origin', index);
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtY2xvdWRmcm9udC1jYWNoZS1wb2xpY3kuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImRhdGEtYXdzLWNsb3VkZnJvbnQtY2FjaGUtcG9saWN5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQWUvQixNQUFNLE9BQU8sd0ZBQXlGLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVySSwyREFBMkQ7SUFDM0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUNGO0FBQ0QsTUFBTSxPQUFPLGlGQUFrRixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFOUgscUVBQXFFO0lBQ3JFLElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCw2REFBNkQ7SUFDN0QsSUFBVyxPQUFPO1FBQ2hCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLENBQVEsQ0FBQztJQUMxRCxDQUFDO0NBQ0Y7QUFDRCxNQUFNLE9BQU8sd0ZBQXlGLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVySSwyREFBMkQ7SUFDM0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUNGO0FBQ0QsTUFBTSxPQUFPLGlGQUFrRixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFOUgscUVBQXFFO0lBQ3JFLElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCw2REFBNkQ7SUFDN0QsSUFBVyxPQUFPO1FBQ2hCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUks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