// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders extends cdktf.ComplexComputedList {
    // items - computed: true, optional: false, required: false
    get items() {
        return this.getListAttribute('items');
    }
}
export class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods extends cdktf.ComplexComputedList {
    // items - computed: true, optional: false, required: false
    get items() {
        return this.getListAttribute('items');
    }
}
export class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins extends cdktf.ComplexComputedList {
    // items - computed: true, optional: false, required: false
    get items() {
        return this.getListAttribute('items');
    }
}
export class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders extends cdktf.ComplexComputedList {
    // items - computed: true, optional: false, required: false
    get items() {
        return this.getListAttribute('items');
    }
}
export class DataAwsCloudfrontResponseHeadersPolicyCorsConfig extends cdktf.ComplexComputedList {
    // access_control_allow_credentials - computed: true, optional: false, required: false
    get accessControlAllowCredentials() {
        return this.getBooleanAttribute('access_control_allow_credentials');
    }
    // access_control_allow_headers - computed: true, optional: false, required: false
    get accessControlAllowHeaders() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('access_control_allow_headers');
    }
    // access_control_allow_methods - computed: true, optional: false, required: false
    get accessControlAllowMethods() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('access_control_allow_methods');
    }
    // access_control_allow_origins - computed: true, optional: false, required: false
    get accessControlAllowOrigins() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('access_control_allow_origins');
    }
    // access_control_expose_headers - computed: true, optional: false, required: false
    get accessControlExposeHeaders() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('access_control_expose_headers');
    }
    // access_control_max_age_sec - computed: true, optional: false, required: false
    get accessControlMaxAgeSec() {
        return this.getNumberAttribute('access_control_max_age_sec');
    }
    // origin_override - computed: true, optional: false, required: false
    get originOverride() {
        return this.getBooleanAttribute('origin_override');
    }
}
export class DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItems extends cdktf.ComplexComputedList {
    // header - computed: true, optional: false, required: false
    get header() {
        return this.getStringAttribute('header');
    }
    // override - computed: true, optional: false, required: false
    get override() {
        return this.getBooleanAttribute('override');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
export class DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig extends cdktf.ComplexComputedList {
    // items - computed: true, optional: false, required: false
    get items() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('items');
    }
}
export class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy extends cdktf.ComplexComputedList {
    // content_security_policy - computed: true, optional: false, required: false
    get contentSecurityPolicy() {
        return this.getStringAttribute('content_security_policy');
    }
    // override - computed: true, optional: false, required: false
    get override() {
        return this.getBooleanAttribute('override');
    }
}
export class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions extends cdktf.ComplexComputedList {
    // override - computed: true, optional: false, required: false
    get override() {
        return this.getBooleanAttribute('override');
    }
}
export class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions extends cdktf.ComplexComputedList {
    // frame_option - computed: true, optional: false, required: false
    get frameOption() {
        return this.getStringAttribute('frame_option');
    }
    // override - computed: true, optional: false, required: false
    get override() {
        return this.getBooleanAttribute('override');
    }
}
export class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy extends cdktf.ComplexComputedList {
    // override - computed: true, optional: false, required: false
    get override() {
        return this.getBooleanAttribute('override');
    }
    // referrer_policy - computed: true, optional: false, required: false
    get referrerPolicy() {
        return this.getStringAttribute('referrer_policy');
    }
}
export class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity extends cdktf.ComplexComputedList {
    // access_control_max_age_sec - computed: true, optional: false, required: false
    get accessControlMaxAgeSec() {
        return this.getNumberAttribute('access_control_max_age_sec');
    }
    // include_subdomains - computed: true, optional: false, required: false
    get includeSubdomains() {
        return this.getBooleanAttribute('include_subdomains');
    }
    // override - computed: true, optional: false, required: false
    get override() {
        return this.getBooleanAttribute('override');
    }
    // preload - computed: true, optional: false, required: false
    get preload() {
        return this.getBooleanAttribute('preload');
    }
}
export class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection extends cdktf.ComplexComputedList {
    // mode_block - computed: true, optional: false, required: false
    get modeBlock() {
        return this.getBooleanAttribute('mode_block');
    }
    // override - computed: true, optional: false, required: false
    get override() {
        return this.getBooleanAttribute('override');
    }
    // protection - computed: true, optional: false, required: false
    get protection() {
        return this.getBooleanAttribute('protection');
    }
    // report_uri - computed: true, optional: false, required: false
    get reportUri() {
        return this.getStringAttribute('report_uri');
    }
}
export class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig extends cdktf.ComplexComputedList {
    // content_security_policy - computed: true, optional: false, required: false
    get contentSecurityPolicy() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('content_security_policy');
    }
    // content_type_options - computed: true, optional: false, required: false
    get contentTypeOptions() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('content_type_options');
    }
    // frame_options - computed: true, optional: false, required: false
    get frameOptions() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('frame_options');
    }
    // referrer_policy - computed: true, optional: false, required: false
    get referrerPolicy() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('referrer_policy');
    }
    // strict_transport_security - computed: true, optional: false, required: false
    get strictTransportSecurity() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('strict_transport_security');
    }
    // xss_protection - computed: true, optional: false, required: false
    get xssProtection() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('xss_protection');
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_response_headers_policy.html aws_cloudfront_response_headers_policy}
*/
export class DataAwsCloudfrontResponseHeadersPolicy extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_cloudfront_response_headers_policy";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_response_headers_policy.html aws_cloudfront_response_headers_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudfrontResponseHeadersPolicyConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_cloudfront_response_headers_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._name = config.name;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // comment - computed: true, optional: false, required: false
    get comment() {
        return this.getStringAttribute('comment');
    }
    // cors_config - computed: true, optional: false, required: false
    corsConfig(index) {
        return new DataAwsCloudfrontResponseHeadersPolicyCorsConfig(this, 'cors_config', index);
    }
    // custom_headers_config - computed: true, optional: false, required: false
    customHeadersConfig(index) {
        return new DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig(this, 'custom_headers_config', index);
    }
    // etag - computed: true, optional: false, required: false
    get etag() {
        return this.getStringAttribute('etag');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // name - computed: true, optional: true, required: false
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
    // security_headers_config - computed: true, optional: false, required: false
    securityHeadersConfig(index) {
        return new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig(this, 'security_headers_config', index);
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            name: cdktf.stringToTerraform(this._name),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtY2xvdWRmcm9udC1yZXNwb25zZS1oZWFkZXJzLXBvbGljeS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsiZGF0YS1hd3MtY2xvdWRmcm9udC1yZXNwb25zZS1oZWFkZXJzLXBvbGljeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFXL0IsTUFBTSxPQUFPLHlFQUEwRSxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFdEgsMkRBQTJEO0lBQzNELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0FDRjtBQUNELE1BQU0sT0FBTyx5RUFBMEUsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXRILDJEQUEyRDtJQUMzRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBQ0Y7QUFDRCxNQUFNLE9BQU8seUVBQTBFLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUV0SCwyREFBMkQ7SUFDM0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUNGO0FBQ0QsTUFBTSxPQUFPLDBFQUEyRSxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFdkgsMkRBQTJEO0lBQzNELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0FDRjtBQUNELE1BQU0sT0FBTyxnREFBaUQsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRTdGLHNGQUFzRjtJQUN0RixJQUFXLDZCQUE2QjtRQUN0QyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxrQ0FBa0MsQ0FBUSxDQUFDO0lBQzdFLENBQUM7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