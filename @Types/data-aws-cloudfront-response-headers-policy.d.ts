import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudFront
*/
export interface DataAwsCloudfrontResponseHeadersPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_response_headers_policy.html#name DataAwsCloudfrontResponseHeadersPolicy#name}
    */
    readonly name?: string;
}
export declare class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders extends cdktf.ComplexComputedList {
    get items(): string[];
}
export declare class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods extends cdktf.ComplexComputedList {
    get items(): string[];
}
export declare class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins extends cdktf.ComplexComputedList {
    get items(): string[];
}
export declare class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders extends cdktf.ComplexComputedList {
    get items(): string[];
}
export declare class DataAwsCloudfrontResponseHeadersPolicyCorsConfig extends cdktf.ComplexComputedList {
    get accessControlAllowCredentials(): any;
    get accessControlAllowHeaders(): any;
    get accessControlAllowMethods(): any;
    get accessControlAllowOrigins(): any;
    get accessControlExposeHeaders(): any;
    get accessControlMaxAgeSec(): number;
    get originOverride(): any;
}
export declare class DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItems extends cdktf.ComplexComputedList {
    get header(): string;
    get override(): any;
    get value(): string;
}
export declare class DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig extends cdktf.ComplexComputedList {
    get items(): any;
}
export declare class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy extends cdktf.ComplexComputedList {
    get contentSecurityPolicy(): string;
    get override(): any;
}
export declare class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions extends cdktf.ComplexComputedList {
    get override(): any;
}
export declare class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions extends cdktf.ComplexComputedList {
    get frameOption(): string;
    get override(): any;
}
export declare class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy extends cdktf.ComplexComputedList {
    get override(): any;
    get referrerPolicy(): string;
}
export declare class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity extends cdktf.ComplexComputedList {
    get accessControlMaxAgeSec(): number;
    get includeSubdomains(): any;
    get override(): any;
    get preload(): any;
}
export declare class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection extends cdktf.ComplexComputedList {
    get modeBlock(): any;
    get override(): any;
    get protection(): any;
    get reportUri(): string;
}
export declare class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig extends cdktf.ComplexComputedList {
    get contentSecurityPolicy(): any;
    get contentTypeOptions(): any;
    get frameOptions(): any;
    get referrerPolicy(): any;
    get strictTransportSecurity(): any;
    get xssProtection(): any;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_response_headers_policy.html aws_cloudfront_response_headers_policy}
*/
export declare class DataAwsCloudfrontResponseHeadersPolicy extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_response_headers_policy.html aws_cloudfront_response_headers_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudfrontResponseHeadersPolicyConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsCloudfrontResponseHeadersPolicyConfig);
    get comment(): string;
    corsConfig(index: string): DataAwsCloudfrontResponseHeadersPolicyCorsConfig;
    customHeadersConfig(index: string): DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig;
    get etag(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    securityHeadersConfig(index: string): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-cloudfront-response-headers-policy.d.ts.map