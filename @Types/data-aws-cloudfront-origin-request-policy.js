// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies extends cdktf.ComplexComputedList {
    // items - computed: true, optional: false, required: false
    get items() {
        return this.getListAttribute('items');
    }
}
export class DataAwsCloudfrontOriginRequestPolicyCookiesConfig extends cdktf.ComplexComputedList {
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
export class DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders extends cdktf.ComplexComputedList {
    // items - computed: true, optional: false, required: false
    get items() {
        return this.getListAttribute('items');
    }
}
export class DataAwsCloudfrontOriginRequestPolicyHeadersConfig extends cdktf.ComplexComputedList {
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
export class DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings extends cdktf.ComplexComputedList {
    // items - computed: true, optional: false, required: false
    get items() {
        return this.getListAttribute('items');
    }
}
export class DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig extends cdktf.ComplexComputedList {
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
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_request_policy.html aws_cloudfront_origin_request_policy}
*/
export class DataAwsCloudfrontOriginRequestPolicy extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_cloudfront_origin_request_policy";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_request_policy.html aws_cloudfront_origin_request_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudfrontOriginRequestPolicyConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_cloudfront_origin_request_policy',
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
    // cookies_config - computed: true, optional: false, required: false
    cookiesConfig(index) {
        return new DataAwsCloudfrontOriginRequestPolicyCookiesConfig(this, 'cookies_config', index);
    }
    // etag - computed: true, optional: false, required: false
    get etag() {
        return this.getStringAttribute('etag');
    }
    // headers_config - computed: true, optional: false, required: false
    headersConfig(index) {
        return new DataAwsCloudfrontOriginRequestPolicyHeadersConfig(this, 'headers_config', index);
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
    // query_strings_config - computed: true, optional: false, required: false
    queryStringsConfig(index) {
        return new DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig(this, 'query_strings_config', index);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtY2xvdWRmcm9udC1vcmlnaW4tcmVxdWVzdC1wb2xpY3kuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImRhdGEtYXdzLWNsb3VkZnJvbnQtb3JpZ2luLXJlcXVlc3QtcG9saWN5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQWUvQixNQUFNLE9BQU8sd0RBQXlELFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVyRywyREFBMkQ7SUFDM0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUNGO0FBQ0QsTUFBTSxPQUFPLGlEQUFrRCxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFOUYscUVBQXFFO0lBQ3JFLElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCw2REFBNkQ7SUFDN0QsSUFBVyxPQUFPO1FBQ2hCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLENBQVEsQ0FBQztJQUMxRCxDQUFDO0NBQ0Y7QUFDRCxNQUFNLE9BQU8sd0RBQXlELFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVyRywyREFBMkQ7SUFDM0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUNGO0FBQ0QsTUFBTSxPQUFPLGlEQUFrRCxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFOUYscUVBQXFFO0lBQ3JFLElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCw2REFBNkQ7SUFDN0QsSUFBVyxPQUFPO1FBQ2hCLG9EQUFv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