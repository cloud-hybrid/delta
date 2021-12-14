import * as cdktf from 'cdktf';
import { Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig, Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference, Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatement, Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatement, Wafv2WebAclRuleStatementOrStatementStatementAndStatement, Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatement, Wafv2WebAclRuleStatementOrStatementStatementGeoMatchStatement, Wafv2WebAclRuleStatementOrStatementStatementIpSetReferenceStatement, Wafv2WebAclRuleStatementOrStatementStatementLabelMatchStatement, Wafv2WebAclRuleStatementOrStatementStatementNotStatement } from './structs2400';
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#position Wafv2WebAcl#position}
    */
    readonly position: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
    private _position?;
    get position(): string;
    set position(value: string);
    get positionInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#positional_constraint Wafv2WebAcl#positional_constraint}
    */
    readonly positionalConstraint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#search_string Wafv2WebAcl#search_string}
    */
    readonly searchString: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#position Wafv2WebAcl#position}
    */
    readonly position: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
    private _position?;
    get position(): string;
    set position(value: string);
    get positionInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#comparison_operator Wafv2WebAcl#comparison_operator}
    */
    readonly comparisonOperator: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size Wafv2WebAcl#size}
    */
    readonly size: number;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatement {
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementLabelMatchStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatement): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatement[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatementStatement[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#positional_constraint Wafv2WebAcl#positional_constraint}
    */
    readonly positionalConstraint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#search_string Wafv2WebAcl#search_string}
    */
    readonly searchString: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#position Wafv2WebAcl#position}
    */
    readonly position: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
    private _position?;
    get position(): string;
    set position(value: string);
    get positionInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#comparison_operator Wafv2WebAcl#comparison_operator}
    */
    readonly comparisonOperator: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size Wafv2WebAcl#size}
    */
    readonly size: number;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatement {
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementLabelMatchStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatement): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatement[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatementStatement[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#comparison_operator Wafv2WebAcl#comparison_operator}
    */
    readonly comparisonOperator: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size Wafv2WebAcl#size}
    */
    readonly size: number;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatement {
    /**
    * and_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#and_statement Wafv2WebAcl#and_statement}
    */
    readonly andStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatement;
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementLabelMatchStatement;
    /**
    * not_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#not_statement Wafv2WebAcl#not_statement}
    */
    readonly notStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementNotStatement;
    /**
    * or_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#or_statement Wafv2WebAcl#or_statement}
    */
    readonly orStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementOrStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatement): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatement[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatement[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#comparison_operator Wafv2WebAcl#comparison_operator}
    */
    readonly comparisonOperator: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size Wafv2WebAcl#size}
    */
    readonly size: number;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatement {
    /**
    * and_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#and_statement Wafv2WebAcl#and_statement}
    */
    readonly andStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatement;
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementOrStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementLabelMatchStatement;
    /**
    * not_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#not_statement Wafv2WebAcl#not_statement}
    */
    readonly notStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatement;
    /**
    * or_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#or_statement Wafv2WebAcl#or_statement}
    */
    readonly orStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementOrStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementOrStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatement): any;
export interface Wafv2WebAclRuleStatementOrStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementOrStatementStatement[];
}
export declare function wafv2WebAclRuleStatementOrStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementOutputReference | Wafv2WebAclRuleStatementOrStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementOrStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementOrStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementOrStatementStatement[];
}
export interface Wafv2WebAclRuleStatementRateBasedStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementRateBasedStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#positional_constraint Wafv2WebAcl#positional_constraint}
    */
    readonly positionalConstraint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#search_string Wafv2WebAcl#search_string}
    */
    readonly searchString: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#position Wafv2WebAcl#position}
    */
    readonly position: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
    private _position?;
    get position(): string;
    set position(value: string);
    get positionInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#comparison_operator Wafv2WebAcl#comparison_operator}
    */
    readonly comparisonOperator: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size Wafv2WebAcl#size}
    */
    readonly size: number;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatement {
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementLabelMatchStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatement): any;
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatement[];
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementAndStatementStatement[];
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#positional_constraint Wafv2WebAcl#positional_constraint}
    */
    readonly positionalConstraint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#search_string Wafv2WebAcl#search_string}
    */
    readonly searchString: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#position Wafv2WebAcl#position}
    */
    readonly position: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
    private _position?;
    get position(): string;
    set position(value: string);
    get positionInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#positional_constraint Wafv2WebAcl#positional_constraint}
    */
    readonly positionalConstraint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#search_string Wafv2WebAcl#search_string}
    */
    readonly searchString: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#position Wafv2WebAcl#position}
    */
    readonly position: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
    private _position?;
    get position(): string;
    set position(value: string);
    get positionInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#comparison_operator Wafv2WebAcl#comparison_operator}
    */
    readonly comparisonOperator: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size Wafv2WebAcl#size}
    */
    readonly size: number;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatement {
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementLabelMatchStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatement): any;
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatement[];
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatement[];
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#positional_constraint Wafv2WebAcl#positional_constraint}
    */
    readonly positionalConstraint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#search_string Wafv2WebAcl#search_string}
    */
    readonly searchString: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#position Wafv2WebAcl#position}
    */
    readonly position: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
    private _position?;
    get position(): string;
    set position(value: string);
    get positionInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#comparison_operator Wafv2WebAcl#comparison_operator}
    */
    readonly comparisonOperator: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size Wafv2WebAcl#size}
    */
    readonly size: number;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatement {
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementLabelMatchStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatement): any;
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatement[];
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatement[];
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
//# sourceMappingURL=structs2800.d.ts.map